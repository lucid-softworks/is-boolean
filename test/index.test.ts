import { describe, expect, it } from "vitest";

import { isBoolean } from "../src/index.js";

describe("isBoolean", () => {
  it.each([
    [true, true],
    [false, true],
    [0, false],
    ["false", false],
  ])("checks %j", (value, expected) => {
    expect(isBoolean(value)).toBe(expected);
  });
});
