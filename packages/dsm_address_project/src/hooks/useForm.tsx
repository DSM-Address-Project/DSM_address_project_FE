import { ChangeEvent, useState } from "react";

export default function useFrom(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { value, setValue, handleChange };
}
