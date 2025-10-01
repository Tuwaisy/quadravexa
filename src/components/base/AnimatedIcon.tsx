
import { HTMLAttributes } from 'react';

interface AnimatedIconProps extends HTMLAttributes<HTMLDivElement> {
  icon: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'default' | 'gradient' | 'outline' | 'filled' | '3d';
  animation?: 'none' | 'pulse' | 'bounce' | 'spin' | 'float' | 'hover' | '3d-hover';
  gradient?: string;
}

export default function AnimatedIcon({
  icon,
  size = 'md',
  variant = '3d',
  animation = '3d-hover',
  gradient = 'from-cyan-500 via-blue-600 to-purple-600',
  className = '',
  ...props
}: AnimatedIconProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
    '2xl': 'w-24 h-24'
  };

  const iconSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
    '2xl': 'text-5xl'
  };

  const variants = {
    default: 'text-gray-400',
    gradient: `bg-gradient-to-r ${gradient} text-white shadow-lg`,
    outline: `border-2 border-cyan-500 text-cyan-500`,
    filled: 'bg-cyan-500 text-white shadow-lg',
    '3d': `bg-gradient-to-br ${gradient} text-white shadow-xl icon-3d`
  };

  const animations = {
    none: '',
    pulse: 'pulse-3d',
    bounce: 'animate-bounce',
    spin: 'animate-spin',
    float: 'floating-shape-1',
    hover: 'icon-hover',
    '3d-hover': 'icon-hover icon-3d'
  };

  const baseClasses = 'flex items-center justify-center rounded-xl transition-all duration-500 transform-3d cursor-pointer';
  const variantClasses = variant === 'gradient' || variant === 'filled' || variant === '3d' ? 
    `${variants[variant]} hover:shadow-2xl hover:shadow-cyan-500/30` : 
    variants[variant];

  return (
    <div 
      className={`${baseClasses} ${sizes[size]} ${variantClasses} ${animations[animation]} ${className}`}
      {...props}
    >
      <i className={`${icon} ${iconSizes[size]} relative z-10`}></i>
    </div>
  );
}