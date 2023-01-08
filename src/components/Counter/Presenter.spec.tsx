import "@testing-library/jest-dom";
import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CounterPresenter } from "./Presenter";

describe("CounterPresenter", () => {
  test("count が 0 のとき、0が表示される", () => {
    const increment = vi.fn();
    const decrement = vi.fn();
    render(
      <CounterPresenter count={0} increment={increment} decrement={decrement} />
    );

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("count が 10 のとき、10が表示される", () => {
    const increment = vi.fn();
    const decrement = vi.fn();
    render(
      <CounterPresenter
        count={10}
        increment={increment}
        decrement={decrement}
      />
    );

    expect(screen.getByText("10")).toBeInTheDocument();
  });

  test("+ ボタンがクリックされると、increment が呼ばれる", async () => {
    const increment = vi.fn();
    const decrement = vi.fn();
    render(
      <CounterPresenter count={0} increment={increment} decrement={decrement} />
    );

    await userEvent.click(screen.getByRole("button", { name: "+" }));

    expect(increment).toHaveBeenCalled();
  });

  test("- ボタンがクリックされると、decrement が呼ばれる", async () => {
    const increment = vi.fn();
    const decrement = vi.fn();
    render(
      <CounterPresenter count={0} increment={increment} decrement={decrement} />
    );

    await userEvent.click(screen.getByRole("button", { name: "-" }));

    expect(decrement).toHaveBeenCalled();
  });
});
