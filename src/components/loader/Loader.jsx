
import React from 'react';

const Loader = ({ variant = 'spinner', size = 'xl', color = 'darkgrey' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    blue: 'border-blue-500',
    red: 'border-red-500',
    green: 'border-green-500',
    purple: 'border-purple-500',
    darkgrey: 'border-gray-800' // Added dark grey color
  };

  const renderSpinner = () => (
    <div 
      className={`
        ${sizeClasses[size]}
        border-4 
        border-gray-200 
        ${colorClasses[color]}
        border-t-transparent 
        rounded-full 
        animate-spin
      `}
    />
  );

  const renderPulse = () => (
    <div className="flex space-x-2">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={`
            ${sizeClasses[size]}
            ${colorClasses[color]}
            rounded-full
            animate-pulse
            bg-current
          `}
        />
      ))}
    </div>
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={`
            ${sizeClasses[size]}
            ${colorClasses[color]}
            rounded-full
            bg-current
            animate-bounce
          `}
          style={{ 
            animationDelay: `${(i - 1) * 0.15}s`,
            animationDuration: '0.6s'
          }}
        />
      ))}
    </div>
  );

  const renderProgress = () => (
    <div className={`w-48 h-2 bg-gray-200 rounded-full overflow-hidden`}>
      <div 
        className={`h-full ${colorClasses[color]} bg-current animate-progress`}
        style={{
          animation: 'progress 1s ease-in-out infinite'
        }}
      />
    </div>
  );

  const variants = {
    spinner: renderSpinner,
    pulse: renderPulse,
    dots: renderDots,
    progress: renderProgress
  };

  return (
    <div className="flex items-center justify-center">
      {variants[variant]()}
    </div>
  );
};

// Add the progress animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes progress {
    0% { width: 0% }
    50% { width: 100% }
    100% { width: 0% }
  }
`;
document.head.appendChild(style);

export default Loader;