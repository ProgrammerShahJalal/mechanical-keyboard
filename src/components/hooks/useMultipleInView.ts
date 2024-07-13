/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef, useState, RefObject } from "react";

function useMultipleInView<T extends HTMLElement>(
  count: number
): [RefObject<T>[], boolean[]] {
  const refs = Array.from({ length: count }, () => useRef<T>(null));
  const [inViewStates, setInViewStates] = useState<boolean[]>(
    Array(count).fill(false)
  );

  useEffect(() => {
    refs.forEach((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setInViewStates((prev) => {
            const newState = [...prev];
            newState[index] = entry.isIntersecting;
            return newState;
          });
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    });
  }, [refs]);

  return [refs, inViewStates];
}

export default useMultipleInView;
