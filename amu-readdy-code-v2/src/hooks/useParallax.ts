import { useEffect, useRef, useState } from 'react';

interface UseParallaxOptions {
  speed?: number;
}

export function useParallax<T extends HTMLElement = HTMLDivElement>(
  options: UseParallaxOptions = {}
) {
  const { speed = 0.025 } = options;
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let rafId: number;
    let currentOffset = 0;
    let targetOffset = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      currentOffset = lerp(currentOffset, targetOffset, 0.04);
      if (Math.abs(currentOffset - targetOffset) > 0.005) {
        setOffset(currentOffset);
        rafId = requestAnimationFrame(animate);
      } else {
        setOffset(targetOffset);
      }
    };

    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const center = rect.top + rect.height / 2 - windowH / 2;
      targetOffset = center * speed;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return { ref, offset };
}
