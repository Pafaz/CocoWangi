import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../../types';
import { useLanguage } from '../../hooks/useLanguage';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { t, language } = useLanguage();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Quote Icon */}
      <div className="flex justify-between items-start mb-4">
        <Quote className="w-8 h-8 text-primary-600 dark:text-primary-400 opacity-50" />
        <div className="flex space-x-1">
          {renderStars(testimonial.rating)}
        </div>
      </div>

      {/* Review Text */}
      <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        "{language === 'en' ? testimonial.review : testimonial.reviewId}"
      </blockquote>

      {/* Product & Order Info */}
      <div className="mb-4 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">
            {t('Product:', 'Produk:')}
          </span>
          <span className="font-medium text-gray-900 dark:text-white">
            {testimonial.productCategory}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">
            {t('Order Volume:', 'Volume Pesanan:')}
          </span>
          <span className="font-medium text-gray-900 dark:text-white">
            {testimonial.orderVolume}
          </span>
        </div>
      </div>

      {/* Customer Info */}
      <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-white">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {testimonial.company}
          </p>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-xl">{testimonial.flag}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.country}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};