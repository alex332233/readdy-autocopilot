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
  duration = 1600,
  className = '',
  threshold = 0.05,
}: FadeInProps) {
  const { ref, isVisible } = useScrollReveal({ threshold });

  const translateMap = {
    up: 'translateY(12px)',
    down: 'translateY(-12px)',
    left: 'translateX(12px)',
    right: 'translateX(-12px)',
    none: 'none',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) translateX(0)' : translateMap[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
