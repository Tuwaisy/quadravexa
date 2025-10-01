
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | '3d-primary' | '3d-secondary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  loading?: boolean;
}

export default function Button({ 
  variant = '3d-primary', 
  size = 'md', 
  children, 
  className = '', 
  loading = false,
  disabled,
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-500 cursor-pointer whitespace-nowrap relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed transform-3d';
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-105 active:scale-95',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600 hover:border-gray-500 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95',
    outline: 'border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 active:scale-95',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-800/50 hover:scale-105 active:scale-95',
    '3d-primary': 'bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 text-white btn-3d shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30',
    '3d-secondary': 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white btn-3d border border-gray-600 shadow-xl hover:shadow-2xl hover:shadow-gray-500/20'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const is3D = variant.includes('3d');
  const glowEffect = variant.includes('primary') ? 'before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-600 before:to-blue-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100' : '';
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${!is3D ? glowEffect : ''} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {loading && (
          <i className="ri-loader-4-line animate-spin mr-2"></i>
        )}
        {children}
      </span>
      
      {/* Enhanced ripple effect for 3D buttons */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
      </span>
      
      {/* 3D depth effect */}
      {is3D && (
        <span className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 rounded-xl transform translate-y-1 -z-10 group-hover:translate-y-2 transition-transform duration-300"></span>
      )}
    </button>
  );
}