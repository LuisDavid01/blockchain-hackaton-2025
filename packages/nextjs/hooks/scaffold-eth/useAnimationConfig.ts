import { useState, useRef, useCallback, useEffect } from "react";

const ANIMATION_TIME = 2000;

export function useAnimationConfig<T>(data: T) {
  const [showAnimation, setShowAnimation] = useState(false);
  const prevDataRef = useRef<T>(data);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startAnimation = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setShowAnimation(true);

    timeoutRef.current = setTimeout(() => {
      setShowAnimation(false);
      timeoutRef.current = null;
    }, ANIMATION_TIME);
  }, []);

  // Deteción diferida del cambio en data
  useEffect(() => {
    if (prevDataRef.current !== data) {
      // Deferring setState call to prevent synchronous update in effect
      queueMicrotask(() => {
        startAnimation();
      });
    }

    prevDataRef.current = data;
  }, [data, startAnimation]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    showAnimation,
    triggerAnimation: startAnimation,
  };
}
