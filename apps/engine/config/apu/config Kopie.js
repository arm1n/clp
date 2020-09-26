/**
 * APU DATA MODEL:
 *
 * {
 *   id: Unique id for this (sub) item
 *   text: Text shown in user interface
 *   data: {
 *     view: "LEFT" | "RIGHT" | "TOP",
 *     desc: "./path/to/html/file.html",
 *     unit: "./path/to/html/file.html",
 *   },
 *   nodes: [
 *     // recursive structure for children of this menu entry
 *   ]
 * }
 */
export const DATA_SET = [
  
  /* UNITS */
  {
    id: "UNITS",
    text: "UNITS",
    data: {},
    nodes: [],
  },
  /* INDICATIONS */
  {
    id: "INDICATIONS",
    text: "INDICATIONS",
    data: {},
    nodes: [],
  },
  /* EXTERNALS */
  {
    id: "EXTERNALS",
    text: "EXTERNALS",
    data: {},
    nodes: [],
  },
];

/**
 * APU SVG FROM LEFT FILE:
 *
 * Path to Apu's interactive SVG file from left perspective.
 */
export const SVG_PATH_FROM_LEFT = "./apps/engine/config/apu/pic/apu_from_left.svg";

/**
 * APU SVG FROM RIGHT FILE:
 *
 * Path to Apu's interactive SVG file from right perspective.
 */
export const SVG_PATH_FROM_RIGHT = "./apps/engine/config/apu/pic/apu_from_right.svg";

/**
 * APU SVG FROM REAR FILE:
 *
 * Path to Apu's interactive SVG file from rear perspective.
 */
export const SVG_FROM_TOP_PATH = "./apps/engine/config/apu/pic/apu_from_top.svg";

/**
 * APU INTRO FILE:
 *
 * Path to Apu's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/engine/config/apu/desc/intro.html";
