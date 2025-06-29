import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List, Download } from 'lucide-react';
import { Section } from '../components/layout/Section';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import { SEOHead } from '../components/common/SEOHead';
import { useLanguage } from '../hooks/useLanguage';
import { PRODUCT_CATEGORIES } from '../utils/constants';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { Product } from '../types';

// Import data
import productsData from '../data/products.json';

export const Products: React.FC = () => {
  const { t } = useLanguage();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData);
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.nameId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.descriptionId.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm]);

  const handleViewProduct = (product: Product) => {
    // In a real app, this would navigate to a detailed product page
    console.log('View product:', product);
  };

  const handleRequestQuote = (product: Product) => {
    window.location.href = `/contact?product=${encodeURIComponent(product.name)}`;
  };

  const handleDownloadCatalog = () => {
    // In a real app, this would trigger a PDF download
    alert(t('Catalog download will be available soon!', 'Unduhan katalog akan segera tersedia!'));
  };

  return (
    <>
      <SEOHead 
        title={t('Products', 'Produk')}
        description={t(
          'Explore our comprehensive range of premium coconut products including virgin coconut oil, charcoal briquettes, coconut fiber, and more.',
          'Jelajahi rangkaian lengkap produk kelapa premium kami termasuk minyak kelapa murni, briket arang, serat kelapa, dan lainnya.'
        )}
        keywords="coconut oil, coconut charcoal, coconut fiber, copra, cocopeat, coconut shell, export products"
      />

      {/* Hero Section */}
      <Section background="gradient" padding="xl">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            {...fadeInUp}
          >
            {t('Our Products', 'Produk Kami')}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            {...fadeInUp}
          >
            {t(
              'Discover our comprehensive range of premium coconut products, each carefully processed to meet international quality standards.',
              'Temukan rangkaian lengkap produk kelapa premium kami, masing-masing diproses dengan hati-hati untuk memenuhi standar kualitas internasional.'
            )}
          </motion.p>
          
          <motion.div {...fadeInUp}>
            <Button
              variant="secondary"
              size="lg"
              icon={Download}
              onClick={handleDownloadCatalog}
            >
              {t('Download Catalog', 'Unduh Katalog')}
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Filters and Search */}
      <Section background="white" padding="md">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t('Search products...', 'Cari produk...')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          {/* Category Filter - Desktop */}
          <div className="hidden lg:flex items-center space-x-2">
            {PRODUCT_CATEGORIES.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.key
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {t(category.labelEn, category.labelId)}
              </button>
            ))}
          </div>

          {/* Mobile Filter Toggle */}
          <div className="flex lg:hidden items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              icon={Filter}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              {t('Filter', 'Filter')}
            </Button>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-gray-600 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-gray-600 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Category Filter */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              className="lg:hidden mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-2">
                {PRODUCT_CATEGORIES.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => {
                      setSelectedCategory(category.key);
                      setIsFilterOpen(false);
                    }}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category.key
                        ? 'bg-primary-600 text-white'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    {t(category.labelEn, category.labelId)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Section>

      {/* Products Grid */}
      <Section background="gray" padding="xl">
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-300">
            {t('Showing', 'Menampilkan')} {filteredProducts.length} {t('of', 'dari')} {products.length} {t('products', 'produk')}
            {selectedCategory !== 'all' && (
              <span className="ml-2">
                {t('in category:', 'dalam kategori:')} <strong>
                  {t(
                    PRODUCT_CATEGORIES.find(cat => cat.key === selectedCategory)?.labelEn || '',
                    PRODUCT_CATEGORIES.find(cat => cat.key === selectedCategory)?.labelId || ''
                  )}
                </strong>
              </span>
            )}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key={`${selectedCategory}-${searchTerm}-${viewMode}`}
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
                  : 'space-y-6'
              }
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              exit="initial"
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={handleViewProduct}
                  onRequestQuote={handleRequestQuote}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('No products found', 'Tidak ada produk ditemukan')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t(
                  'Try adjusting your search terms or filters to find what you\'re looking for.',
                  'Coba sesuaikan istilah pencarian atau filter Anda untuk menemukan yang Anda cari.'
                )}
              </p>
              <Button
                variant="primary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
              >
                {t('Clear Filters', 'Hapus Filter')}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="xl">
        <div className="text-center text-white">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            {...fadeInUp}
          >
            {t('Need Custom Products?', 'Butuh Produk Khusus?')}
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            {...fadeInUp}
          >
            {t(
              'We can customize our products to meet your specific requirements. Contact us for special orders and bulk pricing.',
              'Kami dapat menyesuaikan produk kami untuk memenuhi kebutuhan spesifik Anda. Hubungi kami untuk pesanan khusus dan harga grosir.'
            )}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            {...fadeInUp}
          >
            <Button
              variant="secondary"
              size="xl"
              onClick={() => window.location.href = '/contact'}
              className="min-w-[200px]"
            >
              {t('Contact Us', 'Hubungi Kami')}
            </Button>
            <Button
              variant="outline"
              size="xl"
              icon={Download}
              onClick={handleDownloadCatalog}
              className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary-600"
            >
              {t('Download Catalog', 'Unduh Katalog')}
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};