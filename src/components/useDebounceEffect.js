import { useEffect, useCallback } from "react";

export const useDebounceEffect = (effect, dependecies, delay = 250) => {
  const callback = useCallback(effect, dependecies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
};
