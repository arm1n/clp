/**
 * OVERVIEW DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   unit: relative path to unit file on the right,
 *   desc: relative path to desc file on the left,
 *   info: {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" | "size-4" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" | "size-4" (popup only)
 *   }
 * }
 */
export const DATA_SET = [
  {
    id: "clp-hgs-tray",
    unit: "./units/hgs/units/hgs_tray.html",
    desc: "./units/hgs/desc/hgs_tray.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hgs-comp",
    unit: "./units/uf/units/hgs_comp.html",
    desc: "./units/uf/desc/hgs_comp.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hgs-hap",
    unit: "./units/cockpit/units/hgs_hap.html",
    desc: "./units/cockpit/desc/hgs_hap.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hgs-hcp",
    unit: "./units/cockpit/units/hgs_hcp.html",
    desc: "./units/cockpit/desc/hgs_hcp.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hgs-combiner",
    unit: "./units/hgs/units/hgs_combiner.html",
    desc: "./units/hgs/desc/hgs_combiner.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hgs-ou",
    unit: "./units/hgs/units/hgs_ou.html",
    desc: "./units/hgs/desc/hgs_ou.html",
    info: {},
    access: {},
  },
];

/**
 * OVERVIEW SVG FILE:
 *
 * Path to Overview's interactive SVG file.
 */
export const SVG_PATH = "./apps/hgs/config/overview/pic/overview.svg";

/**
 * OVERVIEW INTRO FILE:
 *
 * Path to Overview's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/hgs/config/overview/desc/intro.html";
