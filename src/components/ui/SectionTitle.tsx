import React from 'react';

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  label,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} ${className}`}>
      {label && (
        <span className="label text-gold font-medium mb-3 block">
          {label}
        </span>
      )}
      <h2 className="display-md text-text-primary mb-4 font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="subheading text-text-secondary max-w-2xl font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
};
