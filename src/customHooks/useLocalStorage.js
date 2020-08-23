import { useState, useEffect } from 'react';

export function useLocalStorage(key, initValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const storedLocalStorageValue = window.localStorage.getItem(key);
    return storedLocalStorageValue ? JSON.parse(storedLocalStorageValue) : initValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue]);

  return [storedValue, setStoredValue];
}