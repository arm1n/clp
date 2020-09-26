/**
 * STALL SYSTEM DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   unit: relative path to unit file on the right,
 *   desc: relative path to desc file on the left,
 *   info: {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only)
 *   },
 * }
 */
export const DATA_SET = [
  {
    id: "clp-aoa",
    unit: "./path/to/html/file.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-stick-pusher",
    unit: "./path/to/html/file.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-stick-shaker",
    unit: "./path/to/html/file.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rad-alt-units",
    unit: "./path/to/html/file.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ifc-spm",
    unit: "./path/to/html/file.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-pseu",
    unit: "./path/to/html/file.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fpiu",
    unit: "./path/to/html/file.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-adc",
    unit: "./path/to/html/file.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ahru",
    unit: "./path/to/html/file.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-stick-push-sw",
    unit: "./path/to/html/file.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-pilot-side-panel",
    unit: "./path/to/html/file.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ice-prot-panel",
    unit: "./path/to/html/file.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cawlp",
    unit: "./path/to/html/file.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
];

/**
 * STALL SYSTEM SVG FILE:
 *
 * Path to Stall System's interactive SVG file.
 */
export const SVG_PATH = "./apps/flight-control/config/stall-system/pic/stall-system.svg";

/**
 * STALL SYSTEM INTRO FILE:
 *
 * Path to Stall System's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/flight-control/config/stall-system/desc/intro.html";
