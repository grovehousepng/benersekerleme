import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'cream' | 'dark' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  className = '',
}) => {
  const baseStyles = 'inline-block text-[10px] uppercase tracking-wider font-semibold py-1 px-3 select-none';
  
  const variants = {
    gold: 'bg-gold text-dark',
    cream: 'bg-cream-warm text-text-primary',
    dark: 'bg-dark text-gold',
    outline: 'border border-border text-text-secondary bg-transparent'
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
