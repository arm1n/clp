import { isObject, getProperty } from "./object";

export function arrayToObject(array, keyProp = "id") {
  if (!Array.isArray(array)) {
    throw new Error(`"array" must be an array!`);
  }

  return Object.assign(
    {},
    ...array.map((item) => {
      const obj = {};
      const key =
        typeof keyProp === "function"
          ? keyProp(item)
          : isObject(item)
          ? getProperty(item, keyProp)
          : item;
      const val = isObject(item) ? item : true;
      obj[key] = val;

      return obj;
    })
  );
}
