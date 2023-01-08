import { useCounter } from "./hooks";
import { act, renderHook } from "@testing-library/react";
import { describe, test, expect } from "vitest";

describe("useCounter", () => {
  test("increment 関数を呼ぶと count が 1 増える", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("decrement 関数を呼ぶと count が 1 減る", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });

  test("initailValue を指定すると count の初期値を指定できる", () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });
});
