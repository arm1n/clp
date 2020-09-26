export function getBaseURI() {
  let baseURI = document.baseURI;

  if (typeof baseURI !== "string") {
    const [baseTag] = document.getElementsByTagName("base");
    if (typeof baseTag === "object" && baseTag !== null) {
      baseURI = baseTag.href;
    }
  }

  return baseURI || document.URL;
}

export function joinPaths(parts) {
  if (!Array.isArray(parts)) {
    throw new Error(`"paths" must be an array!`);
  }

  parts = parts.map((part) => part.trim());
  parts = parts.join("/");

  return resolvePath(parts);
}

export function resolvePath(urlOrPath) {
  if (typeof urlOrPath !== "string") {
    throw new Error(`"urlOrPath" must be a string!`);
  }

  let resolved = urlOrPath;

  try {
    ({ href: resolved } = new URL(urlOrPath));
  } catch (e) {
    resolved = normalizePath(urlOrPath);
  }

  return resolved;
}

export function normalizePath(path) {
  if (typeof path !== "string") {
    throw new Error(`"path" must be a string!`);
  }

  // resolve relative paths: "abc/../" -> ""
  const regex = /[^/.]+\/+\.\./g;

  let match;
  while ((match = path.match(regex))) {
    path = path.replace(match[0], "");
  }

  // normalize double slashes: "//" -> "/"
  path = path.replace(/\/{2,}/g, "/");

  // remove dot slash paths: "./" -> ""
  path = path.replace(/(?:^\.\/|([^.])\.\/)/g, "$1");

  return path;
}

export function trimSlashes(path) {
  if (typeof path !== "string") {
    throw new Error(`"path" must be a string!`);
  }

  return path.replace(/^[/]*|[/]*$/g, "");
}

export function serializeQueryParams(queryParams) {
  const string = Object.keys(queryParams)
    .map((key) => {
      let value = queryParams[key];

      value = encodeURIComponent(value);
      key = encodeURIComponent(key);

      return `${key}=${value}`;
    })
    .join("&");

  return string.length === 0 ? string : `?${string}`;
}

export function deserializeQueryParams(search) {
  const queryParams = {};
  const processPair = ([key, value]) => {
    key = decodeURIComponent(key);

    if (typeof value === "string") {
      value = decodeURIComponent(value);
      value = value.split("+").join(" ");
    }

    try {
      value = JSON.parse(value);
    } catch (e) {
      // leave as is, f.e. strings
    }

    return [key, value];
  };

  if ("URLSearchParams" in window) {
    const urlSearchParams = new URLSearchParams(search);
    for (const pair of urlSearchParams) {
      const [key, value] = processPair(pair);
      queryParams[key] = value;
    }
  } else {
    const pairs = search.charAt(0) === "?" ? search.slice(1) : search;

    for (const pair of pairs.split("&")) {
      let [key, value] = processPair(pair.split("="));
      queryParams[key] = value;
    }
  }

  return queryParams;
}

export function isURL(url) {
  try {
    new URL(url);
  } catch (e) {
    return false;
  }

  return true;
}
