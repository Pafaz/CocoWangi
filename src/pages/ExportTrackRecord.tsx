import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, TrendingUp, Award, Users, MapPin, Star } from 'lucide-react';
import { Section } from '../components/layout/Section';
import { TestimonialCard } from '../components/ui/TestimonialCard';
import { SEOHead } from '../components/common/SEOHead';
import { useLanguage } from '../hooks/useLanguage';
import { fadeInUp, slideInFromBottom, staggerContainer } from '../utils/animations';
import { Testimonial, Country } from '../types';

// Import data
import testimonialsData from '../data/testimonials.json';
import countriesData from '../data/countries.json';

export const ExportTrackRecord: React.FC = () => {
  const { t } = useLanguage();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedRegion, setSelectedRegion] = useState('all');

  useEffect(() => {
    setTestimonials(testimonialsData);
    setCountries(countriesData);
  }, []);

  const exportStats = [
    {
      icon: Globe,
      value: '25+',
      label: t('Countries Served', 'Negara Dilayani'),
      description: t('Across 5 continents', 'Di 5 benua')
    },
    {
      icon: TrendingUp,
      value: '10,000+',
      label: t('Tons Exported', 'Ton Diekspor'),
      description: t('Annual capacity', 'Kapasitas tahunan')
    },
    {
      icon: Users,
      value: '500+',
      label: t('Happy Customers', 'Pelanggan Puas'),
      description: t('Worldwide partners', 'Mitra di seluruh dunia')
    },
    {
      icon: Award,
      value: '98%',
      label: t('Customer Satisfaction', 'Kepuasan Pelanggan'),
      description: t('Based on feedback', 'Berdasarkan feedback')
    }
  ];

  const regions = [
    { key: 'all', label: t('All Regions', 'Semua Wilayah') },
    { key: 'middle-east', label: t('Middle East', 'Timur Tengah') },
    { key: 'asia', label: t('Asia Pacific', 'Asia Pasifik') },
    { key: 'europe', label: t('Europe', 'Eropa') },
    { key: 'americas', label: t('Americas', 'Amerika') }
  ];

  const milestones = [
    {
      year: '2015',
      title: t('First Export', 'Ekspor Pertama'),
      description: t('First container to UAE', 'Kontainer pertama ke UAE'),
      volume: '20 tons'
    },
    {
      year: '2017',
      title: t('Regional Expansion', 'Ekspansi Regional'),
      description: t('Expanded to 5 countries', 'Berkembang ke 5 negara'),
      volume: '500 tons'
    },
    {
      year: '2019',
      title: t('Quality Milestone', 'Milestone Kualitas'),
      description: t('ISO certification achieved', 'Sertifikasi ISO diraih'),
      volume: '2,000 tons'
    },
    {
      year: '2021',
      title: t('Global Reach', 'Jangkauan Global'),
      description: t('25+ countries milestone', 'Milestone 25+ negara'),
      volume: '5,000 tons'
    },
    {
      year: '2023',
      title: t('Sustainability Leader', 'Pemimpin Keberlanjutan'),
      description: t('Carbon neutral operations', 'Operasi carbon neutral'),
      volume: '10,000+ tons'
    }
  ];

  const productPerformance = [
    {
      product: t('Virgin Coconut Oil', 'Minyak Kelapa Murni'),
      percentage: 35,
      growth: '+15%',
      topMarkets: ['UAE', 'India', 'Australia']
    },
    {
      product: t('Charcoal Briquettes', 'Briket Arang'),
      percentage: 25,
      growth: '+22%',
      topMarkets: ['India', 'China', 'Saudi Arabia']
    },
    {
      product: t('Cocopeat', 'Cocopeat'),
      percentage: 20,
      growth: '+18%',
      topMarkets: ['China', 'Australia', 'South Korea']
    },
    {
      product: t('Coconut Fiber', 'Serat Kelapa'),
      percentage: 12,
      growth: '+10%',
      topMarkets: ['Brazil', 'Malaysia', 'Philippines']
    },
    {
      product: t('Other Products', 'Produk Lainnya'),
      percentage: 8,
      growth: '+8%',
      topMarkets: ['Japan', 'Singapore', 'UAE']
    }
  ];

  return (
    <>
      <SEOHead 
        title={t('Export Track Record', 'Rekam Jejak Ekspor')}
        description={t(
          'Discover CocoWangi\'s proven track record in international coconut product exports, customer testimonials, and global reach.',
          'Temukan rekam jejak terbukti CocoWangi dalam ekspor produk kelapa internasional, testimoni pelanggan, dan jangkauan global.'
        )}
        keywords="export track record, international trade, customer testimonials, global reach, coconut export statistics"
      />

      {/* Hero Section */}
      <Section background="gradient" padding="xl">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            {...fadeInUp}
          >
            {t('Export Track Record', 'Rekam Jejak Ekspor')}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            {...fadeInUp}
          >
            {t(
              'Proven excellence in international coconut product exports with a track record spanning over 8 years and 25+ countries.',
              'Keunggulan terbukti dalam ekspor produk kelapa internasional dengan rekam jejak selama lebih dari 8 tahun dan 25+ negara.'
            )}
          </motion.p>
        </div>
      </Section>

      {/* Export Statistics */}
      <Section background="white" padding="xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            {...fadeInUp}
          >
            {t('Our Export Performance', 'Kinerja Ekspor Kami')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            {...fadeInUp}
          >
            {t('Numbers that speak for our success', 'Angka yang berbicara untuk kesuksesan kami')}
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {exportStats.map((stat, index) => (
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

        {/* Product Performance */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {t('Product Export Distribution', 'Distribusi Ekspor Produk')}
          </h3>
          <div className="space-y-6">
            {productPerformance.map((product, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {product.product}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-green-600 font-medium">
                        {product.growth}
                      </span>
                      <span className="font-bold text-gray-900 dark:text-white">
                        {product.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${product.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <div className="flex items-center mt-2 space-x-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {t('Top markets:', 'Pasar utama:')}
                    </span>
                    {product.topMarkets.map((market, idx) => (
                      <span key={idx} className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                        {market}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Export Timeline */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            {...fadeInUp}
          >
            {t('Export Milestones', 'Milestone Ekspor')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            {...fadeInUp}
          >
            {t('Key achievements in our export journey', 'Pencapaian kunci dalam perjalanan ekspor kami')}
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="flex items-center mb-8 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'order-2 pl-8'}`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {milestone.description}
                  </p>
                  <div className="text-sm font-medium text-secondary-600 dark:text-secondary-400">
                    {t('Volume:', 'Volume:')} {milestone.volume}
                  </div>
                </div>
              </div>
              
              <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10" />
              
              {index % 2 !== 0 && <div className="flex-1" />}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Countries Map */}
      <Section background="white" padding="xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            {...fadeInUp}
          >
            {t('Global Reach', 'Jangkauan Global')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            {...fadeInUp}
          >
            {t('Countries we proudly serve', 'Negara yang dengan bangga kami layani')}
          </motion.p>
        </div>

        {/* Region Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {regions.map((region) => (
            <button
              key={region.key}
              onClick={() => setSelectedRegion(region.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                selectedRegion === region.key
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {region.label}
            </button>
          ))}
        </div>

        {/* Countries Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {countries.map((country, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-3">{country.flag}</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                {country.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {country.exportVolume}
              </p>
              <div className="flex flex-wrap gap-1 justify-center">
                {country.mainProducts.slice(0, 2).map((product, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-2 py-1 rounded"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Customer Testimonials */}
      <Section background="gradient" padding="xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            {...fadeInUp}
          >
            {t('Customer Success Stories', 'Kisah Sukses Pelanggan')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            {...fadeInUp}
          >
            {t('Hear from our satisfied customers worldwide', 'Dengar dari pelanggan kami yang puas di seluruh dunia')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" padding="xl">
        <div className="text-center text-white">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            {...fadeInUp}
          >
            {t('Ready to Join Our Success Story?', 'Siap Bergabung dengan Kisah Sukses Kami?')}
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            {...fadeInUp}
          >
            {t(
              'Become part of our growing network of satisfied customers across the globe.',
              'Menjadi bagian dari jaringan pelanggan puas kami yang terus berkembang di seluruh dunia.'
            )}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            {...fadeInUp}
          >
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 min-w-[200px]"
            >
              {t('Start Your Order', 'Mulai Pesanan Anda')}
            </button>
            <button
              onClick={() => window.location.href = '/products'}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200 min-w-[200px]"
            >
              {t('View Products', 'Lihat Produk')}
            </button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};