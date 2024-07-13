/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

const useMultipleInView = (count: number) => {
  const refs = Array.from({ length: count }, () =>
    useRef<HTMLParagraphElement>(null)
  );
  const [inView, setInView] = useState(Array(count).fill(false));

  refs.forEach((ref, index) => {
    const inViewStatus = useInView(ref, { once: true });
    useEffect(() => {
      if (inViewStatus) {
        setInView((prev) => {
          const newInView = [...prev];
          newInView[index] = true;
          return newInView;
        });
      }
    }, [inViewStatus, index]);
  });

  return [refs, inView] as const;
};

export default useMultipleInView;
