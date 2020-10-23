/**
 * SYSTEM 2 DATA MODEL:
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
    id: "clp-hyd-ptu-px-sw",
    unit: "./units/hyd/units/hyd_ptu_px_sw.html",
    desc: "./units/hyd/desc/hyd_ptu_px_sw.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd-filter-manif",
    unit: "./units/hyd/units/hyd_filter_all.html",
    desc: "./units/hyd/desc/hyd_filter_manif.html",
    info: {},
    access: {},
  },
  {
    id: "clp-park-brake-handpump",
    unit: "./units/gear/units/park_brake_hand_pump.html",
    desc: "./units/gear/desc/park_brake_hand_pump.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd-park-px-transd",
    unit: "./units/hyd/units/hyd_park_px_transd.html",
    desc: "./units/hyd/desc/hyd_park_px_transd.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd-reserv-rh",
    unit: "./units/hyd/units/hyd_reserv_rh_all.html",
    desc: "./units/hyd/desc/hyd_reserv.html",
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
    id: "clp-hyd-isol-vlv-sw-rh",
    unit: "./units/hyd/units/hyd_isol_vlv_sw_rh.html",
    desc: "./units/hyd/desc/hyd_isol_vlv_rh.html",
    info: {},
    access: {},
  },
  {
    id: "clp-eng-hyd-pump",
    unit: "./units/hyd/units/eng_hyd_pump_all.html",
    desc: "./units/hyd/desc/eng_hyd_pump.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd-firew-sov",
    unit: "./units/hyd/units/hyd_firew_sov.html",
    desc: "./units/hyd/desc/hyd_firew_sov.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd-heatexch",
    unit: "./units/hyd/units/hyd_heatexch.html",
    desc: "./units/hyd/desc/hyd_heatexch.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd-heatexch-bvlv",
    unit: "./units/hyd/units/hyd_heatexch_bvlv.html",
    desc: "./units/hyd/desc/hyd_heatexch_bvlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-eng-hyd-warn-sw",
    unit: "./units/hyd/units/eng_hyd_warn_sw.html",
    desc: "./units/hyd/desc/eng_hyd_warn_sw.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd-px-transd-edp",
    unit: "./units/hyd/units/hyd_px_transd_edp.html",
    desc: "./units/hyd/desc/hyd_px_transd_edp.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd-ecol-bottles",
    unit: "./units/hyd/units/hyd_ecol_bottles.html",
    desc: "./units/hyd/desc/hyd_ecol_bottles_rh.html",
    info: {},
    access: {},
  },
  {
    id: "clp-sys-rudder-elev",
    /** unit: "./units/fc/desc/general_flight_control.html", */
    desc: "./units/hyd/desc/general2_rud_elev.html",
    info: {},
    access: {},
  },
  {
    id: "clp-sys-spoiler-gear",
    /** unit: "./units/hyd/units/file.html", */
    desc: "./units/hyd/desc/general2_outb_sp_gear_steering.html",
    info: {},
    access: {},
  },
  {
    id: "clp-sys-emrg-brake",
    /** unit: "./units/hyd/units/file.html", */
    desc: "./units/hyd/desc/general_emerg_brakes.html",
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
  {
    id: "clp-hyd-ptu",
    unit: "./units/hyd/units/hyd_ptu.html",
    desc: "./units/hyd/desc/hyd_ptu.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd-case-drain-edp2",
    unit: "./units/hyd/units/hyd_case_drain_edp2.html",
    desc: "./units/hyd/desc/hyd_case_drain_edp2.html",
    info: {},
    access: {},
  },
];

/**
 * SYSTEM 2 SVG FILE:
 *
 * Path to System 2's interactive SVG file.
 */
export const SVG_PATH = "./apps/hyd/config/system-2/pic/system-2.svg";

/**
 * SYSTEM 2 INTRO FILE:
 *
 * Path to System 2's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/hyd/config/system-2/desc/intro.html";
