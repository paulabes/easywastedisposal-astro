import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Upload, X,
  Trash2, Building, Sofa, TreePine, HardHat, House, Briefcase, Truck, Refrigerator
} from 'lucide-react';
import { Button } from './ui/Button';
import { allServices, businessInfo, validatePostcode, coveredPostcodes } from '../data/locations';

const serviceIcons: Record<string, any> = {
  'rubbish-removal': Trash2,
  'furniture-bulky-item-removal': Sofa,
  'garden-waste-removal': TreePine,
  'builders-waste-removal': HardHat,
  'house-clearance': House,
  'office-clearance': Briefcase,
  'commercial-waste-disposal': Building,
  'appliance-disposal': Refrigerator,
  'wait-and-load': Truck,
};

export const QuoteForm: React.FC = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    postcode: '',
    timeframe: '',
    name: '',
    email: '',
    phone: '',
    details: '',
  });
  const [postcodeError, setPostcodeError] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'postcode') setPostcodeError('');
  };

  const handleStep1Continue = () => {
    const result = validatePostcode(formData.postcode);
    if (!result.covered) {
      setPostcodeError(`Sorry, we don't currently cover that postcode. We serve: ${coveredPostcodes.join(', ')}.`);
      return;
    }
    setFormStep(2);
  };

  const [imageError, setImageError] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageError('');
      const newFiles = Array.from(e.target.files);
      const maxSize = 10 * 1024 * 1024; // 10MB per file
      const tooLarge = newFiles.filter(f => f.size > maxSize);
      if (tooLarge.length > 0) {
        setImageError('Some photos are over 10MB and were not added.');
        return;
      }
      const remaining = 5 - images.length;
      if (newFiles.length > remaining) {
        setImageError(`You can only upload ${remaining} more photo${remaining === 1 ? '' : 's'}.`);
      }
      setImages(prev => [...prev, ...newFiles.slice(0, remaining)]);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError('');

    try {
      const body = new FormData();
      body.append('service', formData.service);
      body.append('postcode', formData.postcode);
      body.append('timeframe', formData.timeframe);
      body.append('name', formData.name);
      body.append('email', formData.email);
      body.append('phone', formData.phone);
      body.append('details', formData.details);
      images.forEach(img => body.append('images', img));

      const res = await fetch('/api/quote', { method: 'POST', body });

      if (!res.ok) {
        throw new Error('Failed to send');
      }

      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please call us instead.');
    } finally {
      setSubmitting(false);
    }
  };

  const timeframes = ['Within 24 hours', 'This week', 'Next week', 'Flexible / No rush'];

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-8 lg:p-10 text-center border border-gray-100" role="status" aria-live="polite">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <ArrowRight size={24} className="text-green-600" />
        </div>
        <h2 className="text-xl font-bold text-dark mb-2">Quote Request Sent!</h2>
        <p className="text-sm text-gray-500">We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-8 lg:p-10 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-dark mb-1">Get your free quote</h2>
        <p className="text-sm text-gray-500">No obligation. We respond shortly.</p>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center space-x-2 mb-8">
        {[1, 2, 3].map(step => (
          <div key={step} className="flex-1">
            <div className={`h-1.5 rounded-full transition-colors duration-300 ${formStep >= step ? 'bg-green-500' : 'bg-gray-200'}`} />
          </div>
        ))}
        <span className="text-xs text-gray-400 font-medium ml-2">Step {formStep}/3</span>
      </div>

      {/* Step 1: Service + Postcode */}
      {formStep === 1 && (
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-dark mb-2">What do you need?</label>
            <div className="grid grid-cols-2 gap-2">
              {allServices.map(s => {
                const Icon = serviceIcons[s.slug];
                return (
                  <button
                    key={s.slug}
                    onClick={() => updateField('service', s.slug)}
                    className={`flex items-center space-x-2 p-3 rounded-xl border-2 text-left transition-all duration-300 text-sm hover:-translate-y-0.5 ${
                      formData.service === s.slug
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : 'border-gray-300 hover:border-gray-400 text-gray-700'
                    }`}
                  >
                    <Icon size={16} className={formData.service === s.slug ? 'text-green-600' : 'text-gray-400'} />
                    <span className="font-medium text-xs leading-tight">{s.shortName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label htmlFor="postcode" className="block text-sm font-semibold text-dark mb-2">Your postcode</label>
            <input
              id="postcode"
              type="text"
              value={formData.postcode}
              onChange={e => updateField('postcode', e.target.value.toUpperCase())}
              placeholder="e.g. N8 0PS"
              className={`w-full border-2 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-green-500 outline-none transition-colors ${postcodeError ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-green-500'}`}
            />
            {postcodeError && (
              <p className="text-xs text-red-500 mt-1.5" role="alert">{postcodeError}</p>
            )}
          </div>

          <Button size="lg" className="w-full" onClick={handleStep1Continue} disabled={!formData.service || !formData.postcode}>
            Continue <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      )}

      {/* Step 2: Timeframe + Details + Photos */}
      {formStep === 2 && (
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-dark mb-2">When do you need this?</label>
            <div className="grid grid-cols-2 gap-2">
              {timeframes.map(tf => (
                <button
                  key={tf}
                  onClick={() => updateField('timeframe', tf)}
                  className={`p-3 rounded-xl border-2 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                    formData.timeframe === tf
                      ? 'border-green-500 bg-green-50 text-green-800 shadow-sm'
                      : 'border-gray-300 hover:border-gray-400 text-gray-700'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="details" className="block text-sm font-semibold text-dark mb-2">Any details? (optional)</label>
            <textarea
              id="details"
              rows={3}
              value={formData.details}
              onChange={e => updateField('details', e.target.value)}
              placeholder="e.g. Two sofas and a fridge from the second floor..."
              className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-sm font-medium focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition-all duration-300 resize-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-dark mb-2">Upload photos (optional)</label>
            <p className="text-xs text-gray-400 mb-2">Send up to 5 photos (max 10MB each) for a more accurate quote.</p>
            {imageError && <p className="text-xs text-red-500 mb-2">{imageError}</p>}
            {images.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {images.map((img, i) => (
                  <div key={i} className="relative w-16 h-16 bg-gray-100 rounded-xl overflow-hidden shadow-sm">
                    <img src={URL.createObjectURL(img)} alt="Uploaded photo" className="w-full h-full object-cover" />
                    <button
                      onClick={() => removeImage(i)}
                      aria-label="Remove image"
                      className="absolute top-0.5 right-0.5 w-5 h-5 bg-dark/70 rounded-full flex items-center justify-center"
                    >
                      <X size={10} className="text-white" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            {images.length < 5 && (
              <label className="flex items-center justify-center space-x-2 p-3 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-green-400 hover:bg-green-50 transition-all duration-300">
                <Upload size={16} className="text-gray-400" />
                <span className="text-sm text-gray-500">Choose photos</span>
                <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
              </label>
            )}
          </div>

          <div className="flex space-x-3">
            <Button variant="dark" size="lg" onClick={() => setFormStep(1)} className="flex-shrink-0">
              <ArrowLeft size={16} />
            </Button>
            <Button size="lg" className="flex-1" onClick={() => setFormStep(3)} disabled={!formData.timeframe}>
              Continue <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Contact Details */}
      {formStep === 3 && (
        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">Full name</label>
            <input id="name" type="text" required autoComplete="name" value={formData.name} onChange={e => updateField('name', e.target.value)} placeholder="John Smith"
              className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-sm font-medium focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition-all duration-300" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">Email address</label>
            <input id="email" type="email" required autoComplete="email" value={formData.email} onChange={e => updateField('email', e.target.value)} placeholder="john@example.com"
              className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-sm font-medium focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition-all duration-300" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">Phone number</label>
            <input id="phone" type="tel" required autoComplete="tel" value={formData.phone} onChange={e => updateField('phone', e.target.value)} placeholder="07XXX XXX XXX"
              className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-sm font-medium focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition-all duration-300" />
          </div>

          <div className="flex space-x-3">
            <Button variant="dark" size="lg" onClick={() => setFormStep(2)} className="flex-shrink-0">
              <ArrowLeft size={16} />
            </Button>
            <Button size="lg" className="flex-1" onClick={handleSubmit} disabled={submitting}>
              {submitting ? 'Sending...' : 'Get My Free Quote'} {!submitting && <ArrowRight size={16} className="ml-2" />}
            </Button>
          </div>

          {submitError && (
            <p className="text-xs text-red-500 text-center" role="alert">{submitError}</p>
          )}

          <p className="text-xs text-gray-400 text-center">
            By submitting, you agree to our <a href="/privacy" className="underline">Privacy Policy</a>. We respond shortly.
          </p>
        </div>
      )}
    </div>
  );
};
