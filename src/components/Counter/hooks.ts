import { useState, useCallback } from "react";

export const useCounter = (initailValue: number = 0) => {
  const [count, setCount] = useState(initailValue);
  const incrementByOne = useCallback(() => setCount((c) => c + 1), []);
  const decrementByOne = useCallback(() => setCount((c) => c - 1), []);
  return { count, incrementByOne, decrementByOne };
};
