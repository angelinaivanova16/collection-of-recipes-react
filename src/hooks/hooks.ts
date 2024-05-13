import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './../redux/store'
import type { TypedUseSelectorHook } from 'react-redux'
import { useEffect, useState } from 'react'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// мой useDebounce: 
export const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

// мой useDebounce: 
