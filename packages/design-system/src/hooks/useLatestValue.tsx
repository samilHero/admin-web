'use client';

import { useEffect, useRef } from 'react';

export const useLatestValue = <T,>(value: T) => {
  let cache = useRef(value);

  useEffect(() => {
    cache.current = value;
  }, [value]);

  return cache;
};
