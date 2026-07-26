/** Returns whether `value` is a primitive boolean. */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}
