import { motion } from 'framer-motion';
import { Leaf, Recycle, Users, Award, Target, Heart, Globe, TreePine } from 'lucide-react';
import { Section } from '../components/layout/Section';
import { SEOHead } from '../components/common/SEOHead';
import { useLanguage } from '../hooks/useLanguage';
import { fadeInUp, slideInFromBottom, staggerContainer } from '../utils/animations';

export const Sustainability: React.FC = () => {
  const { t } = useLanguage();

  const sustainabilityPillars = [
    {
      icon: Leaf,
      title: t('Environmental Protection', 'Perlindungan Lingkungan'),
      description: t(
        'We implement eco-friendly processing methods and sustainable farming practices to minimize our environmental footprint.',
        'Kami menerapkan metode pengolahan ramah lingkungan dan praktik pertanian berkelanjutan untuk meminimalkan jejak lingkungan kami.'
      ),
      initiatives: [
        t('Zero-waste processing facilities', 'Fasilitas pengolahan zero-waste'),
        t('Renewable energy usage', 'Penggunaan energi terbarukan'),
        t('Water conservation systems', 'Sistem konservasi air'),
        t('Organic farming support', 'Dukungan pertanian organik')
      ]
    },
    {
      icon: Users,
      title: t('Community Development', 'Pengembangan Masyarakat'),
      description: t(
        'We work closely with local farming communities to improve livelihoods and provide fair trade opportunities.',
        'Kami bekerja sama erat dengan komunitas petani lokal untuk meningkatkan mata pencaharian dan memberikan peluang perdagangan yang adil.'
      ),
      initiatives: [
        t('Fair trade partnerships', 'Kemitraan perdagangan yang adil'),
        t('Farmer education programs', 'Program edukasi petani'),
        t('Healthcare support', 'Dukungan kesehatan'),
        t('Infrastructure development', 'Pengembangan infrastruktur')
      ]
    },
    {
      icon: Award,
      title: t('Quality & Ethics', 'Kualitas & Etika'),
      description: t(
        'Our commitment to ethical business practices ensures transparency and accountability in all our operations.',
        'Komitmen kami terhadap praktik bisnis yang etis memastikan transparansi dan akuntabilitas dalam semua operasi kami.'
      ),
      initiatives: [
        t('Transparent supply chain', 'Rantai pasokan transparan'),
        t('Ethical sourcing standards', 'Standar sourcing etis'),
        t('Regular audits', 'Audit berkala'),
        t('Stakeholder engagement', 'Keterlibatan stakeholder')
      ]
    }
  ];

  const impactStats = [
    {
      icon: TreePine,
      value: '50,000+',
      label: t('Trees Planted', 'Pohon Ditanam'),
      description: t('Reforestation efforts', 'Upaya reboisasi')
    },
    {
      icon: Users,
      value: '2,500+',
      label: t('Farmers Supported', 'Petani Didukung'),
      description: t('Direct partnerships', 'Kemitraan langsung')
    },
    {
      icon: Recycle,
      value: '95%',
      label: t('Waste Reduction', 'Pengurangan Limbah'),
      description: t('Zero-waste goal', 'Target zero-waste')
    },
    {
      icon: Globe,
      value: '100%',
      label: t('Renewable Energy', 'Energi Terbarukan'),
      description: t('Solar powered facilities', 'Fasilitas bertenaga surya')
    }
  ];

  const certifications = [
    {
      name: 'Rainforest Alliance',
      description: t('Sustainable agriculture certification', 'Sertifikasi pertanian berkelanjutan'),
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg'
    },
    {
      name: 'Fair Trade Certified',
      description: t('Ethical trade practices', 'Praktik perdagangan etis'),
      image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg'
    },
    {
      name: 'Organic Certified',
      description: t('Chemical-free production', 'Produksi bebas kimia'),
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg'
    },
    {
      name: 'Carbon Neutral',
      description: t('Net-zero carbon emissions', 'Emisi karbon net-zero'),
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg'
    }
  ];

  const sdgGoals = [
    {
      number: 1,
      title: t('No Poverty', 'Tanpa Kemiskinan'),
      description: t('Supporting farmer livelihoods', 'Mendukung mata pencaharian petani')
    },
    {
      number: 8,
      title: t('Decent Work', 'Pekerjaan Layak'),
      description: t('Fair employment practices', 'Praktik ketenagakerjaan yang adil')
    },
    {
      number: 12,
      title: t('Responsible Consumption', 'Konsumsi Bertanggung Jawab'),
      description: t('Sustainable production methods', 'Metode produksi berkelanjutan')
    },
    {
      number: 13,
      title: t('Climate Action', 'Aksi Iklim'),
      description: t('Carbon footprint reduction', 'Pengurangan jejak karbon')
    },
    {
      number: 15,
      title: t('Life on Land', 'Kehidupan di Darat'),
      description: t('Biodiversity conservation', 'Konservasi keanekaragaman hayati')
    }
  ];

  return (
    <>
      <SEOHead 
        title={t('Sustainability', 'Keberlanjutan')}
        description={t(
          'Learn about CocoWangi\'s commitment to sustainable practices, environmental protection, and community development.',
          'Pelajari tentang komitmen CocoWangi terhadap praktik berkelanjutan, perlindungan lingkungan, dan pengembangan masyarakat.'
        )}
        keywords="sustainability, environmental protection, fair trade, organic farming, community development"
      />

      {/* Hero Section */}
      <Section background="gradient" padding="xl">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            {...fadeInUp}
          >
            {t('Sustainability & Process', 'Keberlanjutan & Proses')}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            {...fadeInUp}
          >
            {t(
              'Our commitment to sustainable practices ensures a better future for our planet, communities, and the coconut industry.',
              'Komitmen kami terhadap praktik berkelanjutan memastikan masa depan yang lebih baik untuk planet kita, masyarakat, dan industri kelapa.'
            )}
          </motion.p>
        </div>
      </Section>

      {/* Sustainability Pillars */}
      <Section background="white" padding="xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            {...fadeInUp}
          >
            {t('Our Sustainability Pillars', 'Pilar Keberlanjutan Kami')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            {...fadeInUp}
          >
            {t(
              'Three core principles guide our sustainable business practices',
              'Tiga prinsip inti yang memandu praktik bisnis berkelanjutan kami'
            )}
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {sustainabilityPillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {pillar.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {pillar.description}
              </p>

              <ul className="space-y-2">
                {pillar.initiatives.map((initiative, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0" />
                    {initiative}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Impact Statistics */}
      <Section background="primary" padding="xl">
        <div className="text-center text-white mb-12">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            {...fadeInUp}
          >
            {t('Our Impact', 'Dampak Kami')}
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 max-w-3xl mx-auto"
            {...fadeInUp}
          >
            {t(
              'Measurable results from our sustainability initiatives',
              'Hasil terukur dari inisiatif keberlanjutan kami'
            )}
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-white/80">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Process Overview */}
      <Section background="gray" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...slideInFromBottom}>
            <img
              src="https://images.pexels.com/photos/4207729/pexels-photo-4207729.jpeg"
              alt="Sustainable coconut farming"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('Our Sustainable Process', 'Proses Berkelanjutan Kami')}
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {t('Sustainable Sourcing', 'Sourcing Berkelanjutan')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t(
                      'We partner with certified organic farms and support farmers in adopting sustainable practices.',
                      'Kami bermitra dengan pertanian organik bersertifikat dan mendukung petani dalam mengadopsi praktik berkelanjutan.'
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {t('Eco-Friendly Processing', 'Pengolahan Ramah Lingkungan')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t(
                      'Our facilities use renewable energy and implement zero-waste processing methods.',
                      'Fasilitas kami menggunakan energi terbarukan dan menerapkan metode pengolahan zero-waste.'
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-coconut-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {t('Responsible Distribution', 'Distribusi Bertanggung Jawab')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t(
                      'We optimize logistics to reduce carbon footprint and use eco-friendly packaging materials.',
                      'Kami mengoptimalkan logistik untuk mengurangi jejak karbon dan menggunakan bahan kemasan ramah lingkungan.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Certifications */}
      <Section background="white" padding="xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            {...fadeInUp}
          >
            {t('Sustainability Certifications', 'Sertifikasi Keberlanjutan')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            {...fadeInUp}
          >
            {t(
              'Recognized by leading sustainability organizations worldwide',
              'Diakui oleh organisasi keberlanjutan terkemuka di seluruh dunia'
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
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={fadeInUp}
            >
              <div className="relative mb-4">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* UN SDG Goals */}
      <Section background="gradient" padding="xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            {...fadeInUp}
          >
            {t('UN Sustainable Development Goals', 'Tujuan Pembangunan Berkelanjutan PBB')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            {...fadeInUp}
          >
            {t(
              'Contributing to global sustainability through aligned business practices',
              'Berkontribusi pada keberlanjutan global melalui praktik bisnis yang selaras'
            )}
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {sdgGoals.map((goal, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">{goal.number}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {goal.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {goal.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" padding="xl">
        <div className="text-center text-white">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            {...fadeInUp}
          >
            {t('Join Our Sustainability Journey', 'Bergabunglah dalam Perjalanan Keberlanjutan Kami')}
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            {...fadeInUp}
          >
            {t(
              'Partner with us to create a more sustainable future for the coconut industry and our planet.',
              'Bermitra dengan kami untuk menciptakan masa depan yang lebih berkelanjutan untuk industri kelapa dan planet kita.'
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
              {t('Partner With Us', 'Bermitra dengan Kami')}
            </button>
            <button
              onClick={() => window.location.href = '/about'}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200 min-w-[200px]"
            >
              {t('Learn More', 'Pelajari Lebih Lanjut')}
            </button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};