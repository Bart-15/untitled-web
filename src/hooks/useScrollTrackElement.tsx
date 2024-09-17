import { useEffect, useRef, useState } from 'react';

// Custom hook to track scroll progress of the entire page
export function useScrollTrackElement<TData>({
  data,
  lastIndex = 0,
}: {
  data: TData | undefined;
  lastIndex: number;
}) {
  const [progress, setProgress] = useState(0);
  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentElementIndex, setCurrentElementIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRefs.current[currentElementIndex];
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        const height = bottom - top;
        const progressValue = Math.min(
          100,
          Math.max(0, (window.innerHeight - top) / height) * 100,
        );
        setProgress(progressValue);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newIndex = elementRefs.current.findIndex(
            (element) => element?.id === entry.target.id,
          );
          // Only update the index if it's different from the current one
          if (newIndex !== currentElementIndex && newIndex !== -1) {
            setCurrentElementIndex(newIndex);
            setProgress(0); // Reset progress when switching elements
          }
        }
      });
    });

    if (elementRefs.current) {
      elementRefs.current.forEach((element) => {
        if (element) observer.observe(element);
      });
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [currentElementIndex, data, lastIndex]);

  return {
    progress,
    elementRefs,
  };
}
