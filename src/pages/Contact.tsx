import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { Section } from '../components/layout/Section';
import { ContactForm } from '../components/ui/ContactForm';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { SEOHead } from '../components/common/SEOHead';
import { useLanguage } from '../hooks/useLanguage';
import { COMPANY_INFO, SOCIAL_LINKS } from '../utils/constants';
import { fadeInUp, slideInFromBottom } from '../utils/animations';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [initialProduct, setInitialProduct] = useState('');

  useEffect(() => {
    // Check if there's a product parameter in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    if (product) {
      setInitialProduct(product);
    }
  }, []);

  const handleFormSubmit = async (data: ContactFormData) => {
    // In a real application, this would send the data to your backend
    console.log('Form submitted:', data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Show success message
    alert(t(
      'Thank you for your inquiry! We will get back to you within 24 hours.',
      'Terima kasih atas pertanyaan Anda! Kami akan menghubungi Anda dalam 24 jam.'
    ));

    // Optionally redirect to WhatsApp for immediate contact
    const message = encodeURIComponent(
      `Hello, I submitted an inquiry form for ${data.productInterest}. My company is ${data.company} from ${data.country}.`
    );
    window.open(`${SOCIAL_LINKS.whatsapp}?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('Visit Our Office', 'Kunjungi Kantor Kami'),
      content: COMPANY_INFO.address,
      action: () => window.open('https://maps.google.com/?q=' + encodeURIComponent(COMPANY_INFO.address), '_blank')
    },
    {
      icon: Phone,
      title: t('Call Us', 'Telepon Kami'),
      content: COMPANY_INFO.phone,
      action: () => window.open(`tel:${COMPANY_INFO.phone}`)
    },
    {
      icon: Mail,
      title: t('Email Us', 'Email Kami'),
      content: COMPANY_INFO.email,
      action: () => window.open(`mailto:${COMPANY_INFO.email}`)
    },
    {
      icon: MessageCircle,
      title: t('WhatsApp', 'WhatsApp'),
      content: COMPANY_INFO.whatsapp,
      action: () => window.open(SOCIAL_LINKS.whatsapp, '_blank')
    }
  ];

  const businessHours = [
    {
      day: t('Monday - Friday', 'Senin - Jumat'),
      hours: '08:00 - 17:00 WIB'
    },
    {
      day: t('Saturday', 'Sabtu'),
      hours: '08:00 - 12:00 WIB'
    },
    {
      day: t('Sunday', 'Minggu'),
      hours: t('Closed', 'Tutup')
    }
  ];

  return (
    <>
      <SEOHead 
        title={t('Contact Us', 'Hubungi Kami')}
        description={t(
          'Get in touch with CocoWangi for inquiries about our coconut products, custom orders, and export services.',
          'Hubungi CocoWangi untuk pertanyaan tentang produk kelapa kami, pesanan khusus, dan layanan ekspor.'
        )}
      />

      {/* Hero Section */}
      <Section background="gradient" padding="xl">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            {...fadeInUp}
          >
            {t('Contact Us', 'Hubungi Kami')}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            {...fadeInUp}
          >
            {t(
              'Ready to start your coconut product journey? Get in touch with our expert team for personalized quotes and consultation.',
              'Siap memulai perjalanan produk kelapa Anda? Hubungi tim ahli kami untuk penawaran dan konsultasi yang dipersonalisasi.'
            )}
          </motion.p>
        </div>
      </Section>

      {/* Contact Information */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={info.action}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-600 rounded-full flex items-center justify-center">
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {info.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {info.content}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* <Section background="gray" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2">
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
              {...slideInFromBottom}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('Send Us a Message', 'Kirim Pesan kepada Kami')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {t(
                    'Fill out the form below and we\'ll get back to you within 24 hours with a detailed response.',
                    'Isi formulir di bawah ini dan kami akan menghubungi Anda dalam 24 jam dengan respons yang detail.'
                  )}
                </p>
              </div>
              
              <ContactForm onSubmit={handleFormSubmit} initialProduct={initialProduct} />
            </motion.div>
          </div>


          <div className="space-y-8">

            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
              {...fadeInUp}
            >
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t('Business Hours', 'Jam Kerja')}
                </h3>
              </div>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      {schedule.day}
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>


            <motion.div 
              className="bg-primary-600 rounded-2xl shadow-xl p-6 text-white"
              {...fadeInUp}
            >
              <h3 className="text-xl font-bold mb-4">
                {t('Need Immediate Assistance?', 'Butuh Bantuan Segera?')}
              </h3>
              <p className="mb-6 opacity-90">
                {t(
                  'For urgent inquiries or immediate support, contact us directly via WhatsApp.',
                  'Untuk pertanyaan mendesak atau dukungan segera, hubungi kami langsung melalui WhatsApp.'
                )}
              </p>
              <div className="flex items-center justify-center">
                <WhatsAppButton size="lg" />
              </div>
            </motion.div>


            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
              {...fadeInUp}
            >
              <div className="flex items-center mb-4">
                <Send className="w-6 h-6 text-secondary-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t('Response Time', 'Waktu Respons')}
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">
                    {t('Email Inquiries', 'Pertanyaan Email')}
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {t('24 hours', '24 jam')}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">
                    {t('WhatsApp', 'WhatsApp')}
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {t('1-2 hours', '1-2 jam')}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">
                    {t('Phone Calls', 'Panggilan Telepon')}
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {t('Immediate', 'Segera')}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section> */}

      {/* Map Section */}
      <Section background="white" padding="lg">
        <div className="text-center mb-8">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            {...fadeInUp}
          >
            {t('Find Our Location', 'Temukan Lokasi Kami')}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300"
            {...fadeInUp}
          >
            {t('Visit our headquarters in Banyuwangi, Indonesia', 'Kunjungi kantor pusat kami di Banyuwangi, Indonesia')}
          </motion.p>
        </div>

        <motion.div 
          className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-96 flex items-center justify-center"
          {...slideInFromBottom}
        >
          <div className="text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t('Interactive map will be embedded here', 'Peta interaktif akan disematkan di sini')}
            </p>
            <button
              onClick={() => window.open('https://maps.google.com/?q=' + encodeURIComponent(COMPANY_INFO.address), '_blank')}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              {t('Open in Google Maps', 'Buka di Google Maps')}
            </button>
          </div>
        </motion.div>
      </Section>
    </>
  );
};