import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl';
  animate?: boolean;
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '', 
  maxWidth = '7xl',
  animate = false 
}) => {
  const maxWidthClass = {
    'sm': 'max-w-sm',
    'md': 'max-w-md',
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    '2xl': 'max-w-2xl',
    '7xl': 'max-w-7xl'
  }[maxWidth];

  const containerClass = `mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClass} ${className}`;

  if (animate) {
    return (
      <motion.div
        className={containerClass}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={containerClass}>
      {children}
    </div>
  );
};