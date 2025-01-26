import React, { useState } from 'react';
import { ContactForm as ContactFormType } from '../types/domain';
import { Send } from 'lucide-react';

interface ContactFormProps {
  selectedDomain: string;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ selectedDomain, onClose }) => {
  const [formData, setFormData] = useState<ContactFormType>({
    name: '',
    email: '',
    message: '',
    selectedDomain,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 w-full max-w-md border border-white/10">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Contact on Telegram</h2>
          <p className="text-gray-300">
            For domain inquiries or collaboration opportunities, please reach out on{' '}
            <a
              href="https://t.me/netycia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Telegram @netycia
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Domain Name
            </label>
            <input
              type="text"
              value={selectedDomain}
              disabled
              className="w-full bg-white/5 rounded-lg border border-white/10 p-3 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              className="w-full bg-white/5 rounded-lg border border-white/10 p-3 text-white
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full bg-white/5 rounded-lg border border-white/10 p-3 text-white
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              required
              rows={4}
              className="w-full bg-white/5 rounded-lg border border-white/10 p-3 text-white
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg
                       transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Inquiry
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg
                       transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;