import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp, Target, Eye, Heart, Leaf } from 'lucide-react';
import { Section } from '../components/layout/Section';
import { SEOHead } from '../components/common/SEOHead';
import { useLanguage } from '../hooks/useLanguage';
import { COMPANY_INFO, CERTIFICATIONS } from '../utils/constants';
import { fadeInUp, slideInFromBottom, staggerContainer } from '../utils/animations';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const milestones = [
    {
      year: '2015',
      title: t('Company Founded', 'Perusahaan Didirikan'),
      description: t('Started as a small coconut processing facility', 'Dimulai sebagai fasilitas pengolahan kelapa kecil')
    },
    {
      year: '2017',
      title: t('First International Export', 'Ekspor Internasional Pertama'),
      description: t('Expanded to Middle East markets', 'Berkembang ke pasar Timur Tengah')
    },
    {
      year: '2019',
      title: t('ISO Certification', 'Sertifikasi ISO'),
      description: t('Achieved ISO 22000:2018 certification', 'Meraih sertifikasi ISO 22000:2018')
    },
    {
      year: '2021',
      title: t('25 Countries Milestone', 'Milestone 25 Negara'),
      description: t('Reached 25+ export destinations', 'Mencapai 25+ destinasi ekspor')
    },
    {
      year: '2023',
      title: t('Sustainability Initiative', 'Inisiatif Keberlanjutan'),
      description: t('Launched eco-friendly processing methods', 'Meluncurkan metode pengolahan ramah lingkungan')
    }
  ];

  const teamMembers = [
    {
      name: 'Novia Gita Kharisma',
      position: t('CEO & Founder', 'CEO & Pendiri'),
      experience: '2+',
      image: '/images/gita.png'
    },
    {
      name: 'Paundra Afif Zamroni',
      position: t('Export Director', 'Direktur Ekspor'),
      experience: '2+',
      image: 'https://paundra-afif-zamroni.vercel.app/images/about.jpg'
    },
    {
      name: 'Dimas Firdianto',
      position: t('Operations Director', 'Direktur Operasi'),
      experience: '8+',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQEG7vg2TSSrCw/profile-displayphoto-crop_800_800/B56ZeaUfcwH8AI-/0/1750640753395?e=1756944000&v=beta&t=ZSiRbksaBhFN3O8QbTqmbx2GWaJ-Jc55fmqffyAm4SQ'
    }
  ];

  const values = [
    {
      icon: Award,
      title: t('Quality Excellence', 'Keunggulan Kualitas'),
      description: t('We maintain the highest standards in every product we export', 'Kami mempertahankan standar tertinggi dalam setiap produk yang kami ekspor')
    },
    {
      icon: Heart,
      title: t('Customer First', 'Pelanggan Utama'),
      description: t('Building long-term relationships through exceptional service', 'Membangun hubungan jangka panjang melalui layanan yang exceptional')
    },
    {
      icon: Leaf,
      title: t('Sustainability', 'Keberlanjutan'),
      description: t('Committed to eco-friendly practices and community development', 'Berkomitmen pada praktik ramah lingkungan dan pengembangan masyarakat')
    },
    {
      icon: Globe,
      title: t('Global Vision', 'Visi Global'),
      description: t('Connecting Indonesian coconut products to the world', 'Menghubungkan produk kelapa Indonesia ke dunia')
    }
  ];

  return (
    <>
      <SEOHead 
        title={t('About Us', 'Tentang Kami')}
        description={t(
          'Learn about CocoWangi, Indonesia\'s leading coconut export company. Our story, mission, and commitment to quality.',
          'Pelajari tentang CocoWangi, perusahaan ekspor kelapa terdepan di Indonesia. Cerita, misi, dan komitmen kami terhadap kualitas.'
        )}
      />

      {/* Hero Section */}
      <Section background="gradient" padding="xl">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            {...fadeInUp}
          >
            {t('About CocoWangi', 'Tentang CocoWangi')}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            {...fadeInUp}
          >
            {t(
              'Since 2015, we have been Indonesia\'s trusted partner in connecting premium coconut products with global markets, building relationships that span continents.',
              'Sejak 2015, kami telah menjadi mitra terpercaya Indonesia dalam menghubungkan produk kelapa premium dengan pasar global, membangun hubungan yang mencakup benua.'
            )}
          </motion.p>
        </div>
      </Section>

      {/* Company Story */}
      <Section background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...slideInFromBottom}>
            <img
              src="https://images.pexels.com/photos/4207729/pexels-photo-4207729.jpeg"
              alt="Coconut plantation"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t('Our Story', 'Cerita Kami')}
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                {t(
                  'Founded in 2015 with a vision to showcase Indonesia\'s finest coconut products to the world, CocoWangi began as a small family business in Central Java. Our founder, Ahmad Hidayat, recognized the untapped potential of Indonesia\'s coconut industry and the growing global demand for natural, sustainable products.',
                  'Didirikan pada tahun 2015 dengan visi untuk menampilkan produk kelapa terbaik Indonesia ke dunia, CocoWangi dimulai sebagai bisnis keluarga kecil di Jawa Tengah. Pendiri kami, Ahmad Hidayat, menyadari potensi yang belum dimanfaatkan dari industri kelapa Indonesia dan permintaan global yang terus tumbuh untuk produk alami dan berkelanjutan.'
                )}
              </p>
              <p>
                {t(
                  'What started with a single container shipment to the Middle East has grown into a thriving export business serving over 25 countries. We\'ve built our reputation on consistent quality, reliable delivery, and genuine partnerships with our customers worldwide.',
                  'Yang dimulai dengan satu pengiriman kontainer ke Timur Tengah telah berkembang menjadi bisnis ekspor yang berkembang melayani lebih dari 25 negara. Kami telah membangun reputasi kami pada kualitas yang konsisten, pengiriman yang andal, dan kemitraan yang tulus dengan pelanggan kami di seluruh dunia.'
                )}
              </p>
              <p>
                {t(
                  'Today, we proudly employ over 150 skilled professionals and maintain state-of-the-art processing facilities while staying true to our core values of quality, sustainability, and customer satisfaction.',
                  'Hari ini, kami dengan bangga mempekerjakan lebih dari 150 profesional terampil dan mempertahankan fasilitas pengolahan yang canggih sambil tetap setia pada nilai-nilai inti kami yaitu kualitas, keberlanjutan, dan kepuasan pelanggan.'
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section background="gray" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            {...fadeInUp}
          >
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('Our Mission', 'Misi Kami')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t(
                'To be the leading bridge between Indonesia\'s premium coconut products and global markets, delivering exceptional quality and value while supporting sustainable practices and local communities.',
                'Menjadi jembatan terdepan antara produk kelapa premium Indonesia dan pasar global, memberikan kualitas dan nilai yang exceptional sambil mendukung praktik berkelanjutan dan masyarakat lokal.'
              )}
            </p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            {...fadeInUp}
          >
            <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('Our Vision', 'Visi Kami')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t(
                'To become the most trusted and recognized Indonesian coconut export company globally, known for our unwavering commitment to quality, innovation, and sustainable business practices.',
                'Menjadi perusahaan ekspor kelapa Indonesia yang paling terpercaya dan diakui secara global, dikenal karena komitmen kami yang teguh terhadap kualitas, inovasi, dan praktik bisnis berkelanjutan.'
              )}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Company Values */}
      <Section background="white" padding="xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            {...fadeInUp}
          >
            {t('Our Values', 'Nilai-Nilai Kami')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            {...fadeInUp}
          >
            {t(
              'The principles that guide everything we do',
              'Prinsip-prinsip yang memandu semua yang kami lakukan'
            )}
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Timeline */}
      <Section background="gradient" padding="xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            {...fadeInUp}
          >
            {t('Our Journey', 'Perjalanan Kami')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            {...fadeInUp}
          >
            {t('Key milestones in our growth story', 'Milestone kunci dalam cerita pertumbuhan kami')}
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
                  <p className="text-gray-600 dark:text-gray-300">
                    {milestone.description}
                  </p>
                </div>
              </div>
              
              <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10" />
              
              {index % 2 !== 0 && <div className="flex-1" />}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Leadership Team */}
      <Section background="white" padding="xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            {...fadeInUp}
          >
            {t('Leadership Team', 'Tim Kepemimpinan')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            {...fadeInUp}
          >
            {t('Meet the experts behind our success', 'Temui para ahli di balik kesuksesan kami')}
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={fadeInUp}
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
                />
                <div className="absolute -bottom-2 right-20 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {member.experience}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                {member.position}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {member.experience} {t('years experience', 'tahun pengalaman')}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Certifications */}
      <Section background="gray" padding="lg">
        <div className="text-center mb-8">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            {...fadeInUp}
          >
            {t('Certifications & Standards', 'Sertifikasi & Standar')}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300"
            {...fadeInUp}
          >
            {t('Committed to international quality standards', 'Berkomitmen pada standar kualitas internasional')}
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {cert}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
};