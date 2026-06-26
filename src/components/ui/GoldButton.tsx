import React from 'react';
import Link from 'next/link';

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'ghost' | 'outline';
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const GoldButton: React.FC<GoldButtonProps> = ({
  variant = 'solid',
  href,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold text-sm uppercase tracking-wider transition-all duration-300 py-3.5 px-8 focus:outline-none rounded-none';
  
  const variants = {
    solid: 'bg-gold text-dark border border-gold hover:bg-gold-dark hover:border-gold-dark hover:text-cream shadow-sm',
    ghost: 'bg-transparent text-gold border border-gold hover:bg-gold hover:text-dark',
    outline: 'bg-transparent text-text-secondary border border-border hover:border-gold hover:text-gold hover:bg-ivory'
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
