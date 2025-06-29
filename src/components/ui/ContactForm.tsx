import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Building, Globe, Phone, Package, MessageSquare } from 'lucide-react';
import { Button } from './Button';
import { useLanguage } from '../../hooks/useLanguage';
import { ContactFormData } from '../../types';

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
  initialProduct?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, initialProduct = '' }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    productInterest: initialProduct,
    quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        country: '',
        phone: '',
        productInterest: '',
        quantity: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const inputClass = "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200";
  const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>
            <User className="w-4 h-4 inline mr-2" />
            {t('Full Name', 'Nama Lengkap')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder={t('Enter your full name', 'Masukkan nama lengkap Anda')}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            <Mail className="w-4 h-4 inline mr-2" />
            {t('Email Address', 'Alamat Email')} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder={t('Enter your email address', 'Masukkan alamat email Anda')}
          />
        </div>
      </div>

      {/* Company Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className={labelClass}>
            <Building className="w-4 h-4 inline mr-2" />
            {t('Company Name', 'Nama Perusahaan')} *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder={t('Enter your company name', 'Masukkan nama perusahaan Anda')}
          />
        </div>

        <div>
          <label htmlFor="country" className={labelClass}>
            <Globe className="w-4 h-4 inline mr-2" />
            {t('Country', 'Negara')} *
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">
              {t('Select your country', 'Pilih negara Anda')}
            </option>
            <option value="United Arab Emirates">🇦🇪 United Arab Emirates</option>
            <option value="India">🇮🇳 India</option>
            <option value="China">🇨🇳 China</option>
            <option value="Saudi Arabia">🇸🇦 Saudi Arabia</option>
            <option value="Australia">🇦🇺 Australia</option>
            <option value="South Korea">🇰🇷 South Korea</option>
            <option value="Japan">🇯🇵 Japan</option>
            <option value="Malaysia">🇲🇾 Malaysia</option>
            <option value="Singapore">🇸🇬 Singapore</option>
            <option value="Philippines">🇵🇭 Philippines</option>
            <option value="Other">🌍 Other</option>
          </select>
        </div>
      </div>

      {/* Contact Information */}
      <div>
        <label htmlFor="phone" className={labelClass}>
          <Phone className="w-4 h-4 inline mr-2" />
          {t('Phone Number', 'Nomor Telepon')}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
          placeholder={t('Enter your phone number', 'Masukkan nomor telepon Anda')}
        />
      </div>

      {/* Product Interest */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="productInterest" className={labelClass}>
            <Package className="w-4 h-4 inline mr-2" />
            {t('Product Interest', 'Produk yang Diminati')} *
          </label>
          <select
            id="productInterest"
            name="productInterest"
            value={formData.productInterest}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">
              {t('Select product category', 'Pilih kategori produk')}
            </option>
            <option value="Virgin Coconut Oil">Virgin Coconut Oil</option>
            <option value="Refined Coconut Oil">Refined Coconut Oil</option>
            <option value="Coconut Shell Charcoal">Coconut Shell Charcoal</option>
            <option value="Coconut Charcoal Briquette">Coconut Charcoal Briquette</option>
            <option value="Coconut Coir Fiber">Coconut Coir Fiber</option>
            <option value="Cocopeat">Cocopeat (Coco Pith)</option>
            <option value="Dried Copra">Dried Copra</option>
            <option value="Coconut Shell Powder">Coconut Shell Powder</option>
            <option value="All Products">All Products</option>
          </select>
        </div>

        <div>
          <label htmlFor="quantity" className={labelClass}>
            {t('Estimated Quantity', 'Perkiraan Kuantitas')}
          </label>
          <select
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">
              {t('Select quantity range', 'Pilih rentang kuantitas')}
            </option>
            <option value="1-5 tons">1-5 tons</option>
            <option value="5-20 tons">5-20 tons</option>
            <option value="20-50 tons">20-50 tons</option>
            <option value="50-100 tons">50-100 tons</option>
            <option value="100+ tons">100+ tons</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          <MessageSquare className="w-4 h-4 inline mr-2" />
          {t('Message', 'Pesan')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={inputClass}
          placeholder={t(
            'Tell us more about your requirements, delivery timeline, or any specific questions...',
            'Ceritakan lebih lanjut tentang kebutuhan Anda, jadwal pengiriman, atau pertanyaan khusus...'
          )}
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        loading={isSubmitting}
        icon={Send}
        disabled={isSubmitting}
      >
        {isSubmitting 
          ? t('Sending...', 'Mengirim...') 
          : t('Send Inquiry', 'Kirim Permintaan')
        }
      </Button>

      {/* Privacy Note */}
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
        {t(
          'By submitting this form, you agree to our Privacy Policy and Terms of Service.',
          'Dengan mengirimkan formulir ini, Anda menyetujui Kebijakan Privasi dan Syarat Layanan kami.'
        )}
      </p>
    </motion.form>
  );
};