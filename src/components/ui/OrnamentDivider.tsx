import React from 'react';

interface OrnamentDividerProps {
  className?: string;
  lineWidth?: string; // e.g. "w-16" or "flex-1"
}

export const OrnamentDivider: React.FC<OrnamentDividerProps> = ({
  className = '',
  lineWidth = 'flex-1',
}) => {
  return (
    <div className={`flex items-center justify-center gap-4 my-6 select-none ${className}`}>
      {lineWidth === 'flex-1' ? (
        <div className="flex-1 h-px bg-border" />
      ) : (
        <div className={`${lineWidth} h-px bg-border`} />
      )}
      
      <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold flex-shrink-0">
        {/* Center Rosette Diamond */}
        <rect x="30" y="10" width="4" height="4" transform="rotate(45 32 12)" fill="currentColor" />
        <rect x="29" y="9" width="6" height="6" transform="rotate(45 32 12)" stroke="currentColor" strokeWidth="0.75" />
        
        {/* Left Scroll/Swirl */}
        <path 
          d="M25 12C20 12 18 8 14 8C10 8 8 11 8 13C8 15 10 16 11 15C12.5 13.5 11 11.5 9.5 11.5" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        
        {/* Right Scroll/Swirl */}
        <path 
          d="M39 12C44 12 46 8 50 8C54 8 56 11 56 13C56 15 54 16 53 15C51.5 13.5 53 11.5 54.5 11.5" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        
        {/* Outer Dots */}
        <circle cx="2" cy="12" r="1.25" fill="currentColor" />
        <circle cx="62" cy="12" r="1.25" fill="currentColor" />
      </svg>
      
      {lineWidth === 'flex-1' ? (
        <div className="flex-1 h-px bg-border" />
      ) : (
        <div className={`${lineWidth} h-px bg-border`} />
      )}
    </div>
  );
};
