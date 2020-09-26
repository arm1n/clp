export function isObject(object) {
  return typeof object === "object" && object !== null;
}

export function getProperty(object, path) {
  if (typeof path !== "string") {
    throw new Error(`"path" must be a string!`);
  }

  object = isObject(object) ? object : {};

  return path.split(".").reduce((result, key) => (isObject(result) ? result[key] : result), object);
}

export function setProperty(object, path, value) {
  if (typeof path !== "string") {
    throw new Error(`"path" must be a string!`);
  }

  if (typeof value === "undefined") {
    throw new Error(`"value" must not be undefined!`);
  }

  object = isObject(object) ? object : {};
  path = path.split(".");

  return path.reduce((result, key, index) => {
    if (index === path.length - 1) {
      result[key] = value;
      return value;
    }

    if (!isObject(result[key])) {
      result[key] = {};
    }

    return result[key];
  }, object);
}

export function removeProperty(object, property) {
  if (!isObject(object)) {
    throw new Error(`"object" must be an object!`);
  }

  if (typeof property !== "string") {
    throw new Error(`"property" must be a string!`);
  }

  const { [property]: _, ...rest } = object;

  return rest;
}
