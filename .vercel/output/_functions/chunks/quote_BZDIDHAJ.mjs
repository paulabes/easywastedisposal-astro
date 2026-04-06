import { Resend } from 'resend';

const prerender = false;
const POST = async ({ request }) => {
  const resend = new Resend(undefined                              );
  try {
    const formData = await request.formData();
    const service = formData.get("service");
    const postcode = formData.get("postcode");
    const timeframe = formData.get("timeframe");
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const details = formData.get("details");
    if (!name || !email || !phone) {
      return new Response(JSON.stringify({ error: "Name, email, and phone are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const imageNames = [];
    for (const [key, value] of formData.entries()) {
      if (key === "images" && value instanceof File && value.size > 0) {
        imageNames.push(value.name);
      }
    }
    const { error } = await resend.emails.send({
      from: "Easy Waste Disposal <quotes@easywastedisposal.com>",
      to: ["paulabrahams@outlook.com"],
      subject: `New Quote Request: ${service} - ${postcode}`,
      html: `
        <h2>New Quote Request</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Service</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${service}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Postcode</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${postcode}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Timeframe</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${timeframe}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Details</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${details || "None provided"}</td></tr>
          ${imageNames.length > 0 ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Photos</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${imageNames.length} photo(s) uploaded (${imageNames.join(", ")})</td></tr>` : ""}
        </table>
      `
    });
    if (error) {
      console.error("Resend error:", error);
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Quote API error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
