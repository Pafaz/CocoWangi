import { motion } from 'framer-motion';
import { Eye, ShoppingCart, Award, MapPin } from 'lucide-react';
import { Product } from '../../types';
import { useLanguage } from '../../hooks/useLanguage';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onRequestQuote: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onRequestQuote
}) => {
  const { t, language } = useLanguage();

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden h-48 group">
        <img
          src={product.image}
          alt={language === 'en' ? product.name : product.nameId}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            variant="outline"
            size="sm"
            icon={Eye}
            onClick={() => onViewDetails(product)}
            className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
          >
            {t('View Details', 'Lihat Detail')}
          </Button>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
            {product.category.toUpperCase()}
          </span>
        </div>

        {/* Certifications Badge */}
        {product.certificationsHeld.length > 0 && (
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 bg-coconut-500 rounded-full flex items-center justify-center">
              <Award className="w-4 h-4 text-white" />
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {language === 'en' ? product.name : product.nameId}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {language === 'en' ? product.description : product.descriptionId}
        </p>

        {/* Specifications */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{t('Origin:', 'Asal:')} {product.specifications.origin}</span>
          </div>
          {product.specifications.purity && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">
                {t('Purity:', 'Kemurnian:')}
              </span>
              <span className="font-medium text-gray-900 dark:text-white">
                {product.specifications.purity}
              </span>
            </div>
          )}
          {product.specifications.moisture && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">
                {t('Moisture:', 'Kelembaban:')}
              </span>
              <span className="font-medium text-gray-900 dark:text-white">
                {product.specifications.moisture}
              </span>
            </div>
          )}
        </div>

        {/* Price */}
        <div className="mb-4">
          <p className="text-lg font-bold text-primary-600 dark:text-primary-400">
            {product.exportPrice}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {t('Min. Order:', 'Min. Pesan:')} {product.minOrderQuantity}
          </p>
        </div>

        {/* Applications */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('Applications:', 'Aplikasi:')}
          </p>
          <div className="flex flex-wrap gap-1">
            {product.applications.slice(0, 2).map((app, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
              >
                {app}
              </span>
            ))}
            {product.applications.length > 2 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded">
                +{product.applications.length - 2} {t('more', 'lagi')}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button
            variant="outline"
            size="sm"
            fullWidth
            onClick={() => onViewDetails(product)}
          >
            {t('Details', 'Detail')}
          </Button>
          <Button
            variant="primary"
            size="sm"
            fullWidth
            icon={ShoppingCart}
            onClick={() => onRequestQuote(product)}
          >
            {t('Quote', 'Penawaran')}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};