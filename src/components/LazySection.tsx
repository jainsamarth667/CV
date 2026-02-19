import React, { useEffect, useRef, useState } from 'react';

interface LazySectionProps {
  rootMargin?: string;
  threshold?: number | number[];
  className?: string;
  placeholder?: React.ReactNode;
  children: React.ReactNode;
}

const LazySection: React.FC<LazySectionProps> = ({
  rootMargin = '50px 0px',
  threshold = 0,
  className,
  placeholder,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current || hasLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasLoaded(true);
            observer.disconnect();
          }
        });
      },
      { root: null, rootMargin, threshold }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [rootMargin, threshold, hasLoaded]);

  return (
    <div ref={containerRef} className={className}>
      {hasLoaded ? (
        children
      ) : (
        placeholder ?? (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
          </div>
        )
      )}
    </div>
  );
};

export default LazySection;


