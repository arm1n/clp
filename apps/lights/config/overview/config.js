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
 *     title: "Title" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only)
 *   }
 * }
 */
export const DATA_SET = [
  {
    id: "clp-logo-lt",
    unit: "./units/lights/units/logo_lt.html",
    desc: "./units/lights/desc/logo_lt.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ext-light2-panel",
    unit: "./units/cockpit/units/ext_light2_panel.html",
    desc: "./units/cockpit/desc/ext_light2_panel.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ext-light-panel",
    unit: "./units/cockpit/units/ext_light_panel.html",
    desc: "./units/cockpit/desc/ext_light_panel.html",
    info: {},
    access: {},
  },
  {
    id: "clp-wing-insp-lt",
    unit: "./units/lights/units/wing_insp_lt.html",
    desc: "./units/lights/desc/wing_insp_lt.html",
    info: {},
    access: {},
  },
  {
    id: "clp-eng-insp-lt",
    unit: "./units/lights/units/eng_insp_lt.html",
    desc: "./units/lights/desc/eng_insp_lt.html",
    info: {},
    access: {},
  },
  {
    id: "clp-gnd-recog-lt",
    unit: "./units/lights/units/gnd_recog_lt.html",
    desc: "./units/lights/desc/gnd_recog_lt.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fwd-emerg-ext-lt",
    unit: "./units/lights/units/emerg_ext_lt.html",
    desc: "./units/lights/desc/emerg_ext_lt.html",
    info: {},
    access: {},
  },
  {
    id: "clp-aft-emerg-ext-lt",
    unit: "./units/lights/units/emerg_ext_lt.html",
    desc: "./units/lights/desc/emerg_ext_lt.html",
    info: {},
    access: {},
  },
  {
    id: "clp-tail-pos-light",
    unit: "./units/lights/units/tail_pos_light.html",
    desc: "./units/lights/desc/nav_lights.html",
    info: {},
    access: {},
  },
  {
    id: "clp-lower-anti-coll-lt",
    unit: "./units/lights/units/anti_coll_lt.html",
    desc: "./units/lights/desc/anti_coll_lt.html",
    info: {},
    access: {},
  },
  {
    id: "clp-upper-anti-coll-lt",
    unit: "./units/lights/units/anti_coll_lt.html",
    desc: "./units/lights/desc/anti_coll_lt.html",
    info: {},
    access: {},
  },
  {
    id: "clp-flare-light",
    unit: "./units/lights/units/flare_light.html",
    desc: "./units/lights/desc/flare_light.html",
    info: {},
    access: {},
  },
  {
    id: "clp-approach-light",
    unit: "./units/lights/units/approach_light.html",
    desc: "./units/lights/desc/approach_light.html",
    info: {},
    access: {},
  },
  {
    id: "clp-red-fwd-pos-light",
    unit: "./units/lights/units/fwd_pos_light.html",
    desc: "./units/lights/desc/nav_lights.html",
    info: {},
    access: {},
  },
  {
    id: "clp-green-fwd-pos-light",
    unit: "./units/lights/units/fwd_pos_light.html",
    desc: "./units/lights/desc/nav_lights.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nlg-taxi-light",
    unit: "./units/lights/units/nlg_taxi_light.html",
    desc: "./units/lights/desc/nlg_taxi_light.html",
    info: {},
    access: {},
  },
  
];

/**
 * OVERVIEW SVG FILE:
 *
 * Path to Overview's interactive SVG file.
 */
export const SVG_PATH = "./apps/lights/config/overview/pic/overview.svg";

/**
 * OVERVIEW INTRO FILE:
 *
 * Path to Overview's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/lights/config/overview/desc/intro.html";
