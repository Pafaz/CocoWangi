import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Facebook, 
  Instagram, 
  Linkedin,
  Award,
  Users,
  Calendar,
  TrendingUp
} from 'lucide-react';
import { Container } from './Container';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { useLanguage } from '../../hooks/useLanguage';
import { COMPANY_INFO, SOCIAL_LINKS, CERTIFICATIONS, NAVIGATION_ITEMS } from '../../utils/constants';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const companyStats = [
    {
      icon: Calendar,
      label: t('Established', 'Didirikan'),
      value: COMPANY_INFO.established
    },
    {
      icon: Users,
      label: t('Employees', 'Karyawan'),
      value: COMPANY_INFO.employees
    },
    {
      icon: Globe,
      label: t('Export Countries', 'Negara Ekspor'),
      value: COMPANY_INFO.countries
    },
    {
      icon: TrendingUp,
      label: t('Annual Capacity', 'Kapasitas Tahunan'),
      value: COMPANY_INFO.annualCapacity
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      {/* Main Footer Content */}
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  <img src="/images/cocowangi-transparent.png" alt="Cocowangi Logo" className='w-full scale-150' />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{COMPANY_INFO.name}</h3>
                  <p className="text-sm text-gray-400">
                    {t('Premium Coconut Export', 'Ekspor Kelapa Premium')}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {t(COMPANY_INFO.description, COMPANY_INFO.descriptionId)}
              </p>

              <div className="flex space-x-4">
                <motion.a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <WhatsAppButton size="sm" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                {t('Quick Links', 'Tautan Cepat')}
              </h4>
              <ul className="space-y-3">
                {NAVIGATION_ITEMS.map((item) => (
                  <li key={item.key}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {t(item.labelEn, item.labelId)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                {t('Contact Info', 'Info Kontak')}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{COMPANY_INFO.address}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-gray-300">{COMPANY_INFO.phone}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-gray-300">{COMPANY_INFO.email}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-gray-300">{COMPANY_INFO.website}</span>
                </li>
              </ul>
            </div>

            {/* Company Stats */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                {t('Company Stats', 'Statistik Perusahaan')}
              </h4>
              <div className="space-y-4">
                {companyStats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <stat.icon className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                      <p className="text-white font-semibold">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Award className="w-5 h-5 text-primary-400 mr-2" />
              {t('Certifications & Standards', 'Sertifikasi & Standar')}
            </h4>
            <div className="flex flex-wrap gap-3">
              {CERTIFICATIONS.map((cert, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950 dark:bg-black">
        <Container>
          <div className="py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {COMPANY_INFO.name}. {t('All rights reserved.', 'Semua hak dilindungi.')}
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-primary-400 transition-colors duration-200">
                {t('Privacy Policy', 'Kebijakan Privasi')}
              </Link>
              <Link to="/terms" className="hover:text-primary-400 transition-colors duration-200">
                {t('Terms of Service', 'Syarat Layanan')}
              </Link>
              <Link to="https://maps.app.goo.gl/eZDoegXbx6xiRuRk8" className="hover:text-primary-400 transition-colors duration-200">
                {t('Sitemap', 'Peta Situs')}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};