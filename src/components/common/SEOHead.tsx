import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../hooks/useLanguage';
import { COMPANY_INFO } from '../../utils/constants';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'cocowangi',
  description = 'exportir kelapa premium indonesia ke pasar internasional',
  keywords = 'coconut export, coconut oil, coconut charcoal, coconut fiber, copra, indonesia export, coconut products',
  image = '/og-image.jpg',
  url = 'cocowangi.netlify.app',
}) => {
  const { t } = useLanguage();
  
  const fullTitle = title 
    ? `${title} | ${COMPANY_INFO.name}`
    : `${COMPANY_INFO.name} - ${t(COMPANY_INFO.tagline, COMPANY_INFO.taglineId)}`;
  
  const fullDescription = description || t(COMPANY_INFO.description, COMPANY_INFO.descriptionId);
  const fullUrl = `${COMPANY_INFO.website}${url}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={COMPANY_INFO.name} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={COMPANY_INFO.name} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};