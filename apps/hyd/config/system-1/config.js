/**
 * SYSTEM 1 DATA MODEL:
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
    id: "clp-eng-hyd-warn-sw",
    unit: "./units/hyd/units/eng_hyd_warn_sw.html",
    desc: "./units/hyd/desc/eng_hyd_warn_sw.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd-reserv-lh",
    unit: "./units/hyd/units/hyd_reserv_lh_all.html",
    desc: "./units/hyd/desc/hyd_reserv.html",
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
    id: "clp-hyd-isol-vlv-sw-lh",
    unit: "./units/hyd/units/hyd_isol_vlv_sw_lh.html",
    desc: "./units/hyd/desc/hyd_isol_vlv_lh.html",
    info: {},
    access: {},
  },
  {
    id: "clp-sys-flaps",
    unit: "./units/hyd/units/file.html",
    desc: "./units/hyd/desc/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-sys-rud-ele",
    unit: "./units/hyd/units/file.html",
    desc: "./units/hyd/desc/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-sys-br-sp",
    unit: "./units/hyd/units/file.html",
    desc: "./units/hyd/desc/file.html",
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
    id: "clp-hyd-px-transd-spu",
    unit: "./units/hyd/units/hyd_px_transd_spu.html",
    desc: "./units/hyd/desc/hyd_px_transd_spu.html",
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
    id: "clp-hyd-ptu",
    unit: "./units/hyd/units/hyd_ptu.html",
    desc: "./units/hyd/desc/hyd_ptu.html",
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
    id: "clp-hyd-ptu-sel-vlv",
    unit: "./units/hyd/units/hyd_ptu_sel_vlv.html",
    desc: "./units/hyd/desc/hyd_ptu_sel_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd-filter-manif",
    unit: "./units/hyd/units/hyd_filter_manif.html",
    desc: "./units/hyd/desc/hyd_filter_manif.html",
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
    desc: "./units/hyd/desc/hyd_ecol_bottles_lh.html",
    info: {},
    access: {},
  },
];

/**
 * SYSTEM 1 SVG FILE:
 *
 * Path to System 1's interactive SVG file.
 */
export const SVG_PATH = "./apps/hyd/config/system-1/pic/system-1.svg";

/**
 * SYSTEM 1 INTRO FILE:
 *
 * Path to System 1's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/hyd/config/system-1/desc/intro.html";
