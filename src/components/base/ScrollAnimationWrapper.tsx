
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  animation?: 'scroll-fade-in' | 'scroll-slide-left' | 'scroll-slide-right' | 'scroll-rotate-in';
  delay?: number;
  className?: string;
}

export default function ScrollAnimationWrapper({
  children,
  animation = 'scroll-fade-in',
  delay = 0,
  className = ''
}: ScrollAnimationWrapperProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={elementRef}
      className={`${animation} ${className}`}
    >
      {children}
    </div>
  );
}