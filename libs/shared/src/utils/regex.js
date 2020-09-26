export function sanitizeRegex(string) {
  if (typeof string !== "string") {
    throw new Error(`"string" must be a string!`);
  }

  return string.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
