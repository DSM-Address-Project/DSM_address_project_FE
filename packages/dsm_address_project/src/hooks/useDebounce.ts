import { useEffect, useState } from "react";

export default function useDebounce(value: string, delay: number) {
  const [debounceValue, setDebounceValue] = useState<string>(value);

  useEffect(() => {
    const timmer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timmer);
    };
  }, [value]);

  return debounceValue;
}
