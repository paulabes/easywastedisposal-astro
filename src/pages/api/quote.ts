export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

async function sendWhatsAppAlert(data: {
  service: string;
  postcode: string;
  timeframe: string;
  name: string;
  phone: string;
  email: string;
  details: string;
  photoCount: number;
}) {
  const accountSid = import.meta.env.TWILIO_ACCOUNT_SID;
  const authToken = import.meta.env.TWILIO_AUTH_TOKEN;
  const from = import.meta.env.TWILIO_WHATSAPP_FROM;
  const to = import.meta.env.TWILIO_WHATSAPP_TO;

  if (!accountSid || !authToken || !from || !to) {
    console.warn('Twilio WhatsApp env vars missing — skipping alert');
    return;
  }

  const body =
    `🚛 New Quote Request\n\n` +
    `Service: ${data.service}\n` +
    `Postcode: ${data.postcode}\n` +
    `Timeframe: ${data.timeframe}\n` +
    `Name: ${data.name}\n` +
    `Phone: ${data.phone}\n` +
    `Email: ${data.email}\n` +
    `Details: ${data.details || 'None'}` +
    (data.photoCount > 0 ? `\nPhotos: ${data.photoCount} attached (see email)` : '');

  try {
    const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        From: from.startsWith('whatsapp:') ? from : `whatsapp:${from}`,
        To: to.startsWith('whatsapp:') ? to : `whatsapp:${to}`,
        Body: body,
      }),
    });

    if (!res.ok) {
      console.error('Twilio WhatsApp error:', res.status, await res.text());
    }
  } catch (err) {
    console.error('Twilio WhatsApp exception:', err instanceof Error ? err.message : String(err));
  }
}

export const POST: APIRoute = async ({ request }) => {
  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  try {
    const formData = await request.formData();

    const service = formData.get('service') as string;
    const postcode = formData.get('postcode') as string;
    const timeframe = formData.get('timeframe') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const details = formData.get('details') as string;

    if (!name || !email || !phone) {
      return new Response(JSON.stringify({ error: 'Name, email, and phone are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Collect images as attachments
    const attachments: { filename: string; content: Buffer }[] = [];
    for (const [key, value] of formData.entries()) {
      if (key === 'images' && value instanceof File && value.size > 0) {
        const buffer = Buffer.from(await value.arrayBuffer());
        attachments.push({ filename: value.name, content: buffer });
      }
    }

    const toEmail = 'florian@easywastedisposal.com';

    const { error } = await resend.emails.send({
      from: 'Easy Waste Disposal <quotes@easywastedisposal.com>',
      to: [toEmail],
      replyTo: [email],
      subject: `New Quote Request: ${service} - ${postcode}`,
      attachments,
      html: `
        <h2>New Quote Request</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Service</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${service}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Postcode</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${postcode}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Timeframe</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${timeframe}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Details</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${details || 'None provided'}</td></tr>
          ${attachments.length > 0 ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Photos</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${attachments.length} photo(s) attached</td></tr>` : ''}
        </table>
      `,
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error));
      return new Response(JSON.stringify({ error: `Failed to send email: ${error.message}` }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await sendWhatsAppAlert({ service, postcode, timeframe, name, phone, email, details, photoCount: attachments.length });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('Quote API error:', message);
    return new Response(JSON.stringify({ error: `Server error: ${message}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
