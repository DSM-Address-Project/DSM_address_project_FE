import { useEffect, useState } from "react";

export default function useDebounce(value: string, delay: number) {
  const [debounceValue, setDebounceValue] = useState<string>(value);
   const timer = useRef<number>();
  useEffect(() => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      window.clearTimeout(timer.current);
    };
  }, [value]);

  return debounceValue;
}
