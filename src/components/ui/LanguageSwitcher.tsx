import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Globe className="w-4 h-4 text-gray-600 dark:text-gray-300" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
        {language === 'en' ? 'EN' : 'ID'}
      </span>
      <span className="text-xs text-gray-500 dark:text-gray-400">
        {language === 'en' ? '🇺🇸' : '🇮🇩'}
      </span>
    </motion.button>
  );
};