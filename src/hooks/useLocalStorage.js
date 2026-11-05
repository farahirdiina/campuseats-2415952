import { useEffect, useState } from "react";

// Step 1: a custom hook. Same shape as useState, but the value survives a page refresh.
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : initialValue;
    } catch (err) {
      console.error(`Could not read "${key}" from localStorage:`, err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(`Could not save "${key}" to localStorage:`, err);
    }
  }, [key, value]);
  return [value, setValue];
}

export default useLocalStorage;
