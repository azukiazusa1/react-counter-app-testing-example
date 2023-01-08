import "@testing-library/jest-dom";
import { CounterContainer as Counter } from "./Container";
import { describe, test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";

describe("Counter", () => {
  test("+ ボタンがクリックされると、count が 1 増える", async () => {
    const { getByRole, getByText } = render(<Counter initialCount={0} />);
    expect(getByText("0")).toBeInTheDocument();
    await userEvent.click(getByRole("button", { name: "+" }));
    expect(getByText("1")).toBeInTheDocument();
  });

  test("- ボタンがクリックされると、count が 1 減る", async () => {
    const { getByRole, getByText } = render(<Counter initialCount={0} />);
    expect(getByText("0")).toBeInTheDocument();
    await userEvent.click(getByRole("button", { name: "-" }));
    expect(getByText("-1")).toBeInTheDocument();
  });

  test("initialCount が 10 のとき、count は 10 になる", async () => {
    const { getByText } = render(<Counter initialCount={10} />);
    expect(getByText("10")).toBeInTheDocument();
  });
});
