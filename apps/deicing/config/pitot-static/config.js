/**
 * PITOT STATIC DATA MODEL:
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
    id: "clp-pitot-static-iso-vlv",
    unit: "./units/cockpit/units/pitot_static_iso_vlv.html",
    desc: "./units/cockpit/desc/pitot_static_iso_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-isi",
    unit: "./units/cockpit/units/isi.html",
    desc: "./units/cockpit/desc/isi.html",
    info: {},
    access: {},
  },
  {
    id: "clp-static-temp-probe",
    unit: "./units/deice/units/static_temp_probe.html",
    desc: "./units/deice/desc/static_temp_probe.html",
    info: {},
    access: {},
  },
  {
    id: "clp-pitot-static-probe",
    unit: "./units/deice/units/pitot_static_probe.html",
    desc: "./units/deice/desc/pitot_static_probe.html",
    info: {},
    access: {},
  },
  {
    id: "clp-stby-pitot-static-probe",
    unit: "./units/deice/units/stby_pitot_static_probe.html",
    desc: "./units/deice/desc/pitot_static_probe.html",
    info: {},
    access: {},
  },
  {
    id: "clp-adc",
    unit: "./units/cockpit/units/adc.html",
    desc: "./units/cockpit/desc/adc.html",
    info: {},
    access: {},
  },
  {
    id: "clp-tmu",
    unit: "./units/wd/units/tmu.html",
    desc: "./units/wd/desc/tmu_pitot.html",
    info: {},
    access: {},
  },
  {
    id: "clp-pseu",
    unit: "./units/wd/units/pseu.html",
    desc: "./units/wd/desc/pseu.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cawlp",
    unit: "./units/cockpit/units/cawlp.html",
    desc: "./units/deice/desc/cl_pitot_static.html",
    info: {},
    access: {},
  },
  {
    id: "clp-index-cont-panel_1_",
    unit: "./units/cockpit/units/index_cont_panel.html",
    desc: "./units/cockpit/desc/index_cont_panel.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ice-prot-panel",
    unit: "./units/cockpit/units/ice_prot_panel.html",
    desc: "./units/deice/desc/ice_prot_panel_pitot.html",
    info: {},
    access: {},
  },
  {
    id: "clp-pilot-side-panel",
    unit: "./units/cockpit/units/pilot_side_panel.html",
    desc: "./units/deice/desc/pilot_side_panel_pitot.html",
    info: {},
    access: {},
  },
];

/**
 * PITOT STATIC SVG FILE:
 *
 * Path to Pitot Static's interactive SVG file.
 */
export const SVG_PATH = "./apps/deicing/config/pitot-static/pic/pitot-static.svg";

/**
 * PITOT STATIC INTRO FILE:
 *
 * Path to Pitot Static's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/deicing/config/pitot-static/desc/intro.html";
