import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../../utils/constants';
import { useLanguage } from '../../hooks/useLanguage';

interface WhatsAppButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  floating?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  className = '',
  size = 'md',
  floating = false
}) => {
  const { t } = useLanguage();

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14'
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-7 h-7'
  };

  const baseClass = floating
    ? `fixed bottom-6 right-6 z-50 ${sizeClasses[size]} bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center`
    : `${sizeClasses[size]} bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center`;

  const handleClick = () => {
    const message = encodeURIComponent(
      t(
        'Hello, I am interested in your coconut products. Could you please provide more information?',
        'Halo, saya tertarik dengan produk kelapa Anda. Bisakah Anda memberikan informasi lebih lanjut?'
      )
    );
    window.open(`${SOCIAL_LINKS.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`${baseClass} ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={floating ? { opacity: 0, scale: 0 } : {}}
      animate={floating ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3 }}
      title={t('Contact us on WhatsApp', 'Hubungi kami di WhatsApp')}
    >
      <MessageCircle className={iconSizes[size]} />
    </motion.button>
  );
};