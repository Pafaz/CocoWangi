import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'primary' | 'secondary' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'white',
  padding = 'lg',
  animate = true
}) => {
  const backgroundClass = {
    'white': 'bg-white dark:bg-gray-900',
    'gray': 'bg-gray-50 dark:bg-gray-800',
    'primary': 'bg-primary-600 dark:bg-primary-700',
    'secondary': 'bg-secondary-600 dark:bg-secondary-700',
    'gradient': 'bg-gradient-to-br from-primary-50 to-coconut-50 dark:from-gray-900 dark:to-gray-800'
  }[background];

  const paddingClass = {
    'sm': 'py-8 sm:py-12',
    'md': 'py-12 sm:py-16',
    'lg': 'py-16 sm:py-20',
    'xl': 'py-20 sm:py-24'
  }[padding];

  const sectionClass = `${backgroundClass} ${paddingClass} ${className}`;

  if (animate) {
    return (
      <motion.section
        id={id}
        className={sectionClass}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Container animate={animate}>
          {children}
        </Container>
      </motion.section>
    );
  }

  return (
    <section id={id} className={sectionClass}>
      <Container>
        {children}
      </Container>
    </section>
  );
};