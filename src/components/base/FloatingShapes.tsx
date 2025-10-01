
import { useEffect, useState } from 'react';

interface FloatingShape {
  id: number;
  type: 'cube' | 'sphere' | 'polygon';
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

interface FloatingShapesProps {
  count?: number;
  className?: string;
}

export default function FloatingShapes({ count = 6, className = '' }: FloatingShapesProps) {
  const [shapes, setShapes] = useState<FloatingShape[]>([]);

  useEffect(() => {
    const generateShapes = () => {
      const newShapes: FloatingShape[] = [];
      const shapeTypes: ('cube' | 'sphere' | 'polygon')[] = ['cube', 'sphere', 'polygon'];
      
      for (let i = 0; i < count; i++) {
        newShapes.push({
          id: i,
          type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
          size: Math.random() * 40 + 40, // 40-80px
          x: Math.random() * 100, // 0-100%
          y: Math.random() * 100, // 0-100%
          delay: Math.random() * 6, // 0-6s delay
          duration: Math.random() * 6 + 8, // 8-14s duration
        });
      }
      setShapes(newShapes);
    };

    generateShapes();
  }, [count]);

  const getShapeClasses = (type: string) => {
    switch (type) {
      case 'cube':
        return 'shape-cube';
      case 'sphere':
        return 'shape-sphere';
      case 'polygon':
        return 'shape-polygon';
      default:
        return 'shape-cube';
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`floating-shape ${getShapeClasses(shape.type)}`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            animationDelay: `${shape.delay}s`,
            animationDuration: `${shape.duration}s`,
          }}
        />
      ))}
    </div>
  );
}