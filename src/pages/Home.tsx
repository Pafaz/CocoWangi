import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Award, Globe, TrendingUp, Users, ChevronDown } from 'lucide-react';
import { Section } from '../components/layout/Section';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import { TestimonialCard } from '../components/ui/TestimonialCard';
import { SEOHead } from '../components/common/SEOHead';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollAnimation } from '../hooks/useScrollReveal';
import { COMPANY_INFO, CERTIFICATIONS } from '../utils/constants';
import { fadeInUp, slideInFromBottom, staggerContainer } from '../utils/animations';
import { Product, Testimonial } from '../types';

// Import data
import productsData from '../data/products.json';
import testimonialsData from '../data/testimonials.json';

export const Home: React.FC = () => {
  const { t } = useLanguage();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation();

  useEffect(() => {
    // Get featured products (first 4)
    setFeaturedProducts(productsData.slice(0, 4));
    // Get random testimonials (first 3)
    setTestimonials(testimonialsData.slice(0, 3));
  }, []);

  const handleViewProduct = (product: Product) => {
    window.location.href = `/products?id=${product.id}`;
  };

  const handleRequestQuote = (product: Product) => {
    window.location.href = `/contact?product=${encodeURIComponent(product.name)}`;
  };

  const companyStats = [
    {
      icon: TrendingUp,
      value: COMPANY_INFO.annualCapacity,
      label: t('Annual Capacity', 'Kapasitas Tahunan'),
      description: t('Production capacity per year', 'Kapasitas produksi per tahun')
    },
    {
      icon: Globe,
      value: COMPANY_INFO.countries,
      label: t('Export Countries', 'Negara Ekspor'),
      description: t('Countries we export to', 'Negara yang kami ekspor')
    },
    {
      icon: Users,
      value: COMPANY_INFO.employees,
      label: t('Expert Team', 'Tim Ahli'),
      description: t('Skilled employees', 'Karyawan terampil')
    },
    {
      icon: Award,
      value: '6+',
      label: t('Certifications', 'Sertifikasi'),
      description: t('International standards', 'Standar internasional')
    }
  ];

  return (
    <>
      <SEOHead 
        title={t('Home', 'Beranda')}
        description={t(
          'Leading Indonesian coconut export company. Premium quality coconut oil, charcoal, fiber, and copra for international markets.',
          'Perusahaan ekspor kelapa Indonesia terdepan. Minyak kelapa, arang, serat, dan kopra berkualitas premium untuk pasar internasional.'
        )}
      />

      {/* Hero Section */}
      <Section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        background="gradient"
        padding="xl"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-coconut-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div ref={heroRef} className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="block">
                {t('Premium Indonesian', 'Kelapa Indonesia')}
              </span>
              <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {t('Coconut Products', 'Premium')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t(COMPANY_INFO.tagline, COMPANY_INFO.taglineId)}
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              {t(
                'Connecting global markets with Indonesia\'s finest coconut products. From virgin coconut oil to premium charcoal briquettes.',
                'Menghubungkan pasar global dengan produk kelapa terbaik Indonesia. Dari minyak kelapa murni hingga briket arang premium.'
              )}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                variant="primary"
                size="xl"
                icon={ArrowRight}
                onClick={() => window.location.href = '/products'}
                className="min-w-[200px]"
              >
                {t('View Products', 'Lihat Produk')}
              </Button>
              
              <Button
                variant="outline"
                size="xl"
                icon={Play}
                onClick={() => window.location.href = '/about'}
                className="min-w-[200px]"
              >
                {t('Our Story', 'Cerita Kami')}
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Company Stats */}
      <Section background="white" padding="lg">
        <motion.div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate={statsInView ? "animate" : "initial"}
        >
          {companyStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Featured Products */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            {...fadeInUp}
          >
            {t('Featured Products', 'Produk Unggulan')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            {...fadeInUp}
          >
            {t(
              'Discover our premium range of coconut products, carefully processed and exported to meet international quality standards.',
              'Temukan rangkaian produk kelapa premium kami, diproses dengan hati-hati dan diekspor untuk memenuhi standar kualitas internasional.'
            )}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={handleViewProduct}
              onRequestQuote={handleRequestQuote}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            icon={ArrowRight}
            onClick={() => window.location.href = '/products'}
          >
            {t('View All Products', 'Lihat Semua Produk')}
          </Button>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...slideInFromBottom}>
            <img
              src="https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg"
              alt="Coconut processing facility"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('Why Choose CocoWangi?', 'Mengapa Memilih CocoWangi?')}
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {t('Premium Quality', 'Kualitas Premium')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t(
                      'All our products meet international quality standards with comprehensive certifications including ISO, HACCP, and organic certifications.',
                      'Semua produk kami memenuhi standar kualitas internasional dengan sertifikasi komprehensif termasuk ISO, HACCP, dan sertifikasi organik.'
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {t('Global Reach', 'Jangkauan Global')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t(
                      'We export to over 25 countries worldwide with established logistics networks and reliable delivery systems.',
                      'Kami mengekspor ke lebih dari 25 negara di seluruh dunia dengan jaringan logistik yang mapan dan sistem pengiriman yang andal.'
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-coconut-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {t('Expert Team', 'Tim Ahli')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t(
                      'Our experienced team of 150+ professionals ensures consistent quality and excellent customer service throughout the export process.',
                      'Tim berpengalaman kami yang terdiri dari 150+ profesional memastikan kualitas yang konsisten dan layanan pelanggan yang excellent sepanjang proses ekspor.'
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => window.location.href = '/about'}
              >
                {t('Learn More About Us', 'Pelajari Lebih Lanjut Tentang Kami')}
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Certifications */}
      <Section background="gradient" padding="lg">
        <div className="text-center mb-8">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            {...fadeInUp}
          >
            {t('Our Certifications', 'Sertifikasi Kami')}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300"
            {...fadeInUp}
          >
            {t('Trusted by international standards', 'Dipercaya oleh standar internasional')}
          </motion.p>
        </div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {cert}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Customer Testimonials */}
      <Section background="white" padding="xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            {...fadeInUp}
          >
            {t('What Our Customers Say', 'Apa Kata Pelanggan Kami')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            {...fadeInUp}
          >
            {t(
              'Trusted by businesses worldwide for our quality products and exceptional service.',
              'Dipercaya oleh bisnis di seluruh dunia untuk produk berkualitas dan layanan yang exceptional.'
            )}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.location.href = '/track-record'}
          >
            {t('View All Testimonials', 'Lihat Semua Testimoni')}
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="xl">
        <div className="text-center text-white">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            {...fadeInUp}
          >
            {t('Ready to Start Your Export Journey?', 'Siap Memulai Perjalanan Ekspor Anda?')}
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            {...fadeInUp}
          >
            {t(
              'Contact us today for custom quotes, product samples, and expert consultation on your coconut product needs.',
              'Hubungi kami hari ini untuk penawaran khusus, sampel produk, dan konsultasi ahli tentang kebutuhan produk kelapa Anda.'
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
              {t('Get Quote Now', 'Dapatkan Penawaran Sekarang')}
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => window.location.href = '/products'}
              className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary-600"
            >
              {t('Browse Products', 'Jelajahi Produk')}
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};