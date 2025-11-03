import { useEffect, useRef, useState } from "react";

const ANIMATION_TIME = 2000;

export function useAnimationConfig<T = any>(data: T) {
  const [showAnimation, setShowAnimation] = useState(false);
  const prevDataRef = useRef<T>(undefined as T);
  useEffect(() => {
    // Solo trigger la animación si hay un cambio real
    if (prevDataRef.current !== undefined && prevDataRef.current !== data) {
      setShowAnimation(true);
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, ANIMATION_TIME);

      // Cleanup del timeout si el componente se desmonta
      return () => clearTimeout(timer);
    }

    // Actualizar la referencia después de la verificación
    prevDataRef.current = data;
  }, [data]);

  return {
    showAnimation,
  };
}
