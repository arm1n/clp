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
 *     size: "size-1" | "size-2" | "size-3" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" (popup only)
 *   }
 * }
 */
export const DATA_SET = [
  {
    id: "clp-inbd-spoiler",
    unit: "./units/fc/desc/general_flight_control.html",
    desc: "./units/fc/desc/general_spoiler.html",
    info: {},
    access: {},
  },
  {
    id: "clp-flap-sys",
    unit: "./units/fc/desc/general_flight_control.html",
    desc: "./units/fc/desc/general_flaps.html",
    info: {},
    access: {},
  },
  {
    id: "clp-main-brakes",
    unit: "./units/hyd/units/still_open.html",
    desc: "./units/gear/desc/general_norm_brake.html",
    info: {},
    access: {},
  },
  {
    id: "clp-emerg-brakes",
    unit: "./units/hyd/units/still_open.html",
    desc: "./units/gear/desc/general_emerg_brake.html",
    info: {},
    access: {},
  },
  {
    id: "clp-outb-spoiler",
    unit: "./units/fc/desc/general_flight_control.html",
    desc: "./units/fc/desc/general_spoiler.html",
    info: {},
    access: {},
  },
  {
    id: "clp-gear",
    unit: "./units/hyd/units/still_open.html",
    desc: "./units/gear/desc/general_gear.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nws",
    unit: "./units/hyd/units/still_open.html",
    desc: "./units/gear/desc/general_nws.html",
    info: {},
    access: {},
  },
  {
    id: "clp-lower-rud",
    unit: "./units/fc/desc/general_flight_control.html",
    desc: "./units/fc/desc/general_rudder.html",
    info: {},
    access: {},
  },
  {
    id: "clp-upper-rud",
    unit: "./units/fc/desc/general_flight_control.html",
    desc: "./units/fc/desc/general_rudder.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elev-outb",
    unit: "./units/fc/desc/general_flight_control.html",
    desc: "./units/fc/desc/general_elevator.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elev-cent",
    unit: "./units/fc/desc/general_flight_control.html",
    desc: "./units/fc/desc/general_elevator.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elev-inbd",
    unit: "./units/fc/desc/general_flight_control.html",
    desc: "./units/fc/desc/general_elevator.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd3-accu",
    unit: "./units/hyd/units/hyd3_accu.html",
    desc: "./units/hyd/desc/hyd3_accu.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd3-bootst-accu",
    unit: "./units/hyd/units/hyd3_bootst_accu.html",
    desc: "./units/hyd/desc/hyd3_bootst_accu.html",
    info: {},
    access: {},
  },
	{
    id: "clp-hyd3-isol-vlv",
    unit: "./units/hyd/units/hyd3_isol_vlv.html",
    desc: "./units/hyd/desc/hyd3_isol_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-alt-ext",
    unit: "./units/gear/units/alt_ext_actuator.html",
    desc: "./units/gear/desc/alt_ext_actuator.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd-ptu",
    unit: "./units/hyd/units/hyd_ptu.html",
    desc: "./units/hyd/desc/hyd_ptu.html",
    info: {},
    access: {},
  },
  {
    id: "clp-alt-ext-handpump",
    unit: "./units/gear/units/alt_ext_hand_pump.html",
    desc: "./units/gear/desc/alt_ext_hand_pump.html",
    info: {},
    access: {},
  },
  
  {
    id: "clp-hyd-isol-vlv-lh",
    unit: "./units/hyd/units/hyd_isol_vlv_lh.html",
    desc: "./units/hyd/desc/hyd_isol_vlv_lh.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd-isol-vlv-rh",
    unit: "./units/hyd/units/hyd_isol_vlv_rh.html",
    desc: "./units/hyd/desc/hyd_isol_vlv_rh.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd-ptu-sel-vlv",
    unit: "./units/hyd/units/hyd_ptu_sel_vlv.html",
    desc: "./units/hyd/desc/hyd_ptu_sel_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd1-bal-relvlv",
    unit: "./units/hyd/units/hyd1_bal_relvlv.html",
    desc: "./units/hyd/desc/hyd1_bal_relvlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-dc-motor-pump",
    unit: "./units/hyd/units/dc_motor_pump.html",
    desc: "./units/hyd/desc/dc_motor_pump.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd-spu",
    unit: "./units/hyd/units/hyd_spu.html",
    desc: "./units/hyd/desc/hyd_spu.html",
    info: {},
    access: {},
  },
  {
    id: "clp-eng-hyd-pump",
    unit: "./units/hyd/units/eng_hyd_pump.html",
    desc: "./units/hyd/desc/eng_hyd_pump.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd-brake-accu",
    unit: "./units/hyd/units/hyd_brake_accu.html",
    desc: "./units/hyd/desc/hyd_brake_accu.html",
    info: {},
    access: {},
  },
];

/**
 * OVERVIEW SVG FILE:
 *
 * Path to Overview's interactive SVG file.
 */
export const SVG_PATH = "./apps/hyd/config/overview/pic/overview.svg";

/**
 * OVERVIEW INTRO FILE:
 *
 * Path to Overview's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/hyd/config/overview/desc/intro.html";
