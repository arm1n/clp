/**
 * EXTENSION RETRACTION DATA MODEL:
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
    id: "clp-cawlp",
    unit: "./units/cockpit/units/cawlp.html",
    desc: "./units/gear/desc/cl_ext_ret.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd-ptu-check-vlv",
    unit: "./units/hyd/units/hyd_ptu_check_vlv.html",
    desc: "./units/hyd/desc/hyd_ptu_check_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-mlg-downlock-act",
    unit: "./units/gear/units/mlg_downlock_act.html",
    desc: "./units/gear/desc/mlg_downlock_act.html",
    info: {},
    access: {},
  },
  {
    id: "clp-mlg-alt-ext-act",
    unit: "./units/gear/units/mlg_alt_ext_act.html",
    desc: "./units/gear/desc/mlg_alt_ext_act.html",
    info: {},
    access: {},
  },
  {
    id: "clp-mlg-retr-act",
    unit: "./units/gear/units/mlg_retr_act.html",
    desc: "./units/gear/desc/mlg_retr_act.html",
    info: {},
    access: {},
  },
  {
    id: "clp-mlg-uplock-assy",
    unit: "./units/gear/units/mlg_uplock_assy.html",
    desc: "./units/gear/desc/mlg_uplock_assy.html",
    info: {},
    access: {},
  },
  {
    id: "clp-mlg-sol-seq-vlv",
    unit: "./units/gear/units/mlg_sol_seq_vlv.html",
    desc: "./units/gear/desc/mlg_sol_seq_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-mlg-door-act",
    unit: "./units/gear/units/mlg_door_act.html",
    desc: "./units/gear/desc/mlg_door_act.html",
    info: {},
    access: {},
  },
  {
    id: "clp-mlg-door-inline-restr",
    unit: "./units/gear/units/mlg_door_inline_restr.html",
    desc: "./units/gear/desc/mlg_door_inline_restr.html",
    info: {},
    access: {},
  },
  {
    id: "clp-mlg-mech-seq-vlv",
    unit: "./units/gear/units/mlg_mech_seq_vlv.html",
    desc: "./units/gear/desc/mlg_mech_seq_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nlg-door-inl-restr",
    unit: "./units/gear/units/nlg_door_inl_restr.html",
    desc: "./units/gear/desc/nlg_door_inl_restr.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nlg-lock-act",
    unit: "./units/gear/units/nlg_lock_act.html",
    desc: "./units/gear/desc/nlg_lock_act.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nlg-retr-act",
    unit: "./units/gear/units/nlg_retr_act.html",
    desc: "./units/gear/desc/nlg_retr_act.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nlg-door-mech-sequ-vlv",
    unit: "./units/gear/units/nlg_door_mech_sequ_vlv.html",
    desc: "./units/gear/desc/nlg_door_mech_sequ_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nlg-sol-seq-vlv",
    unit: "./units/gear/units/nlg_sol_seq_vlv.html",
    desc: "./units/gear/desc/nlg_sol_seq_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nlg-door-act",
    unit: "./units/gear/units/nlg_door_act.html",
    desc: "./units/gear/desc/nlg_door_act.html",
    info: {},
    access: {},
  },
  {
    id: "clp-alt-ext-byp-vlv",
    unit: "./units/gear/units/gear_byp_vlv.html",
    desc: "./units/gear/desc/gear_byp_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-lg-select-vlv",
    unit: "./units/gear/units/lg_select_vlv.html",
    desc: "./units/gear/desc/lg_select_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-land-gear-cont-panel",
    unit: "./units/cockpit/units/land_gear_cont_panel.html",
    desc: "./units/cockpit/desc/land_gear_cont_panel.html",
    info: {},
    access: {},
  },
];

/**
 * EXTENSION RETRACTION SVG FILE:
 *
 * Path to Extension Retraction's interactive SVG file.
 */
export const SVG_PATH = "./apps/gear/config/extension-retraction/pic/extension-retraction.svg";

/**
 * EXTENSION RETRACTION INTRO FILE:
 *
 * Path to Extension Retraction's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/gear/config/extension-retraction/desc/intro.html";
