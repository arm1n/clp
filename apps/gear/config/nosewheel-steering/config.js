/**
 * NOSEWHEEL STEERING DATA MODEL:
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
    id: "clp-towing",
    unit: "./units/gear/units/tow_bar.html",
    desc: "./units/gear/desc/towing.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nlg-power-steer-unit",
    unit: "./units/gear/units/nlg_power_steer_unit.html",
    desc: "./units/gear/desc/nlg_power_steer_unit.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nlg-steer-motor",
    unit: "./units/gear/units/nlg_steer_motor.html",
    desc: "./units/gear/desc/nlg_steer_motor.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nws-fedb-assy",
    unit: "./units/gear/units/nws_fedb_assy.html",
    desc: "./units/gear/desc/nws_fedb_assy.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nlg-steer-manif",
    unit: "./units/gear/units/nlg_steer_manif.html",
    desc: "./units/gear/desc/nlg_steer_manif.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nlg-ele-harness",
    unit: "./units/gear/units/nlg_ele_harness.html",
    desc: "./units/gear/desc/nlg_ele_harness.html",
    info: {},
    access: {},
  },
  {
    id: "clp-steer-cont-unit",
    unit: "./units/gear/units/steer_cont_unit.html",
    desc: "./units/gear/desc/steer_cont_unit.html",
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
    desc: "./units/gear/desc/cl_nose_steering.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rudd-brake-pedals",
    unit: "./units/gear/units/rudd_brake_pedals.html",
    desc: "./units/gear/desc/rudd_brake_pedals.html",
    info: {},
    access: {},
  },
  {
    id: "clp-steer-hand-cont",
    unit: "./units/cockpit/units/steer_hand_cont.html",
    desc: "./units/cockpit/desc/steer_hand_cont.html",
    info: {},
    access: {},
  },
  {
    id: "clp-pilot-side-panel",
    unit: "./units/cockpit/units/pilot_side_panel.html",
    desc: "./units/gear/desc/pilot_side_panel.html",
    info: {},
    access: {},
  },
];

/**
 * NOSEWHEEL STEERING SVG FILE:
 *
 * Path to Nosewheel Steering's interactive SVG file.
 */
export const SVG_PATH = "./apps/gear/config/nosewheel-steering/pic/nosewheel-steering.svg";

/**
 * NOSEWHEEL STEERING INTRO FILE:
 *
 * Path to Nosewheel Steering's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/gear/config/nosewheel-steering/desc/intro.html";
