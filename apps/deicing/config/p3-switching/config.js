/**
 * P3 SWITCHING DATA MODEL:
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
 *   },
 * }
 */
export const DATA_SET = [
  {
    id: "clp-hp-sov",
    unit: "./units/bleed/units/hp_sov.html",
    desc: "./units/bleed/desc/hp_sov.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ecsecu",
    unit: "./units/uf/units/ecsecu.html",
    desc: "./units/uf/desc/ecsecu.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fadec",
    unit: "./units/eng/units/fadec.html",
    desc: "./units/eng/desc/fadec.html",
    info: {},
    access: {},
  },
  {
    id: "clp-relay-junc-box-k2",
    unit: "./units/uf/units/rjb.html",
    desc: "./units/uf/desc/rjb.html",
    info: {},
    access: {},
  },
  {
    id: "clp-relay-junc-box-k3",
    unit: "./units/uf/units/rjb.html",
    desc: "./units/uf/desc/rjb.html",
    info: {},
    access: {},
  },
  {
    id: "clp-bl-stage-px-sw",
    unit: "./units/bleed/units/bl_stage_px_sw.html",
    desc: "./units/bleed/desc/bl_stage_px_sw.html",
    info: {},
    access: {},
  },
  {
    id: "clp-p3-transd",
    unit: "./units/eng/units/p3_transd.html",
    desc: "./units/eng/desc/p3_transd.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ifc-iop",
    unit: "./units/wd/units/ifc_iop.html",
    desc: "./units/wd/desc/ifc_iop.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cawlp",
    unit: "./units/cockpit/units/cawlp.html",
    desc: "./units/deice/desc/cl_p3.html",
    info: {},
    access: {},
  },
  {
    id: "clp-air-cond-panel",
    unit: "./units/cockpit/units/air_cond_panel.html",
    desc: "./units/cockpit/desc/air_cond_panel.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ice-prot-panel",
    unit: "./units/cockpit/units/ice_prot_panel.html",
    desc: "./units/deice/desc/ice_prot_panel_p3.html",
    info: {},
    access: {},
  },
];

/**
 * P3 SWITCHING SVG FILE:
 *
 * Path to P3 Switching's interactive SVG file.
 */
export const SVG_PATH = "./apps/deicing/config/p3-switching/pic/p3-switching.svg";

/**
 * P3 SWITCHING INTRO FILE:
 *
 * Path to P3 Switching's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/deicing/config/p3-switching/desc/intro.html";
