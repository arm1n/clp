import { isObject } from "./object";

const MODE_BFS = "BFS";
const MODE_DFS = "DFS";

const binarySearch = (mode, tree, onVisit, nodesProp = "nodes") => {
  if (!isObject(tree) || !Array.isArray(tree[nodesProp])) {
    throw new Error(`"tree" must be valid tree with nodes!`);
  }

  if (typeof onVisit !== "function") {
    throw new Error(`"onVisit" must be a function!`);
  }

  let methodName;
  switch (mode) {
    case MODE_BFS:
      methodName = "shift";
      break;
    case MODE_DFS:
      methodName = "pop";
      break;
    default:
      throw new Error(`Unsupported binary search mode: ${mode}!`);
  }

  const stack = [[tree, null, 0]];

  while (stack.length !== 0) {
    const [node, parent, depth] = stack[methodName]();
    const nodes = node[nodesProp];

    if (onVisit(node, parent, depth)) {
      break;
    }

    if (Array.isArray(nodes)) {
      let childNodes = [...nodes];
      while (childNodes.length !== 0) {
        const childNode = childNodes[methodName]();
        stack.push([childNode, node, depth + 1]);
      }
    }
  }
};

export const BFS = (...args) => binarySearch(MODE_BFS, ...args);
export const DFS = (...args) => binarySearch(MODE_DFS, ...args);
