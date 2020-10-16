/**
 * ICE DETECT DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   unit: relative path to unit file on the right,
 *   desc: relative path to desc file on the left,
 *   info: {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" (popup only)
 *   },
 * }
 */
export const DATA_SET = [
  {
    id: "clp-ice-det-probe",
    unit: "./units/deice/units/ice_det_probe.html",
    desc: "./units/deice/desc/ice_det_probe.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cb-panel-115",
    unit: "./units/ele/units/cb_panel_115.html",
    desc: "./units/ele/desc/cb_panel_ac.html",
    info: {},
    access: {},
  },
  {
    id: "clp-tmu",
    unit: "./units/wd/units/tmu.html",
    desc: "/units/wd/desc/tmu_ice_det.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cawlp",
    unit: "./units/cockpit/units/cawlp.html",
    desc: "./units/deice/desc/cl_ice_det.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ifc-iop",
    unit: "./units/wd/units/ifc_iop.html",
    desc: "./units/wd/desc/ifc_iop_ice_det.html",
    info: {},
    access: {},
  },
];

/**
 * ICE DETECT SVG FILE:
 *
 * Path to Ice Detects's interactive SVG file.
 */
export const SVG_PATH = "./apps/deicing/config/ice-detect/pic/ice-detect.svg";

/**
 * ICE DETECT INTRO FILE:
 *
 * Path to Ice Detect's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/deicing/config/ice-detect/desc/intro.html";
