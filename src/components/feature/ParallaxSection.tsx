
import { useEffect, useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: 'slow' | 'fast';
  className?: string;
}

export default function ParallaxSection({
  children,
  speed = 'slow',
  className = ''
}: ParallaxSectionProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * (speed === 'slow' ? -0.5 : -0.3);
        elementRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={elementRef}
      className={`${speed === 'slow' ? 'parallax-slow' : 'parallax-fast'} ${className}`}
    >
      {children}
    </div>
  );
}
