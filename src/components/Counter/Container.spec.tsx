import { CounterContainer } from "./Container";
import * as Presenter from "./Presenter";
import { render } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";

describe("CounterContainer", () => {
  test("Presenter に Props が渡される", () => {
    const mockPresenter = vi.spyOn(Presenter, "CounterPresenter");
    render(<CounterContainer initialCount={0} />);

    expect(mockPresenter).toHaveBeenCalledWith(
      expect.objectContaining({
        increment: expect.any(Function),
        decrement: expect.any(Function),
        count: 0,
      }),
      {}
    );
  });

  test("initialCount が 10 のとき、count は 10 になる", () => {
    const mockPresenter = vi.spyOn(Presenter, "CounterPresenter");
    render(<CounterContainer initialCount={10} />);

    expect(mockPresenter).toHaveBeenCalledWith(
      expect.objectContaining({
        count: 10,
      }),
      {}
    );
  });
});
