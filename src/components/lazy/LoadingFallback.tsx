import React from 'react';

interface LoadingFallbackProps {
  height: string;
}

export const LoadingFallback: React.FC<LoadingFallbackProps> = ({ height }) => {
  return (
    <div 
      className="animate-pulse bg-gray-200 rounded-lg" 
      style={{ minHeight: height }}
    />
  );
}; 