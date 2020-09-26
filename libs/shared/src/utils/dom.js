import { isObject } from "./object";

export function isNode(element) {
  if (!isObject(element)) {
    return false;
  }

  switch (element.nodeType) {
    case Node.ELEMENT_NODE:
    case Node.DOCUMENT_FRAGMENT_NODE:
      return true;
    default:
      return false;
  }
}

export function isOverflowing(element) {
  if (!isNode(element)) {
    throw new Error(`"element" must be a HTML Node!`);
  }

  const { clientWidth, scrollWidth, clientHeight, scrollHeight } = element;
  return clientWidth < scrollWidth || clientHeight < scrollHeight;
}

export function getCSSVariable(key) {
  if (typeof key !== "string") {
    throw new Error(`"html" must be a string!`);
  }

  const style = getComputedStyle(document.documentElement);
  return style.getPropertyValue(key);
}

export function childrenMatches(element, selector) {
  if (!isNode(element)) {
    throw new Error(`"element" must be a HTML Node!`);
  }

  if (typeof selector !== "string") {
    throw new Error(`"selector" must be a string!`);
  }

  return Array.from(element.children).filter((child) => child.matches(selector));
}
