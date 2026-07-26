import { useState, useEffect, useRef, useMemo } from 'react';

export function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  const observerOptions = useMemo(
    () => ({
      threshold: options.threshold ?? 0.1,
      rootMargin: options.rootMargin ?? '0px',
    }),
    [options.threshold, options.rootMargin]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.once !== false) observer.unobserve(element);
        } else if (options.once === false) {
          setIsInView(false);
        }
      },
      observerOptions
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [observerOptions, options.once]);

  return [ref, isInView];
}
