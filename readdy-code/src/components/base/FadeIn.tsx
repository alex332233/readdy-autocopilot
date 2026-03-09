
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  threshold?: number;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  duration = 700,
  className = '',
  threshold = 0.12,
}: FadeInProps) {
  const { ref, isVisible } = useScrollReveal({ threshold });

  const translateMap = {
    up: 'translateY(28px)',
    down: 'translateY(-28px)',
    left: 'translateX(28px)',
    right: 'translateX(-28px)',
    none: 'none',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : translateMap[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
