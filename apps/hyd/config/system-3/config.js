/**
 * SYSTEM 3 DATA MODEL:
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
    id: "clp-sys-elev",
    /** unit: "./units/hyd/units/file.html", */
    desc: "./units/hyd/desc/general_elev.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd-reserv-3",
    unit: "./units/hyd/units/hyd_reserv_3.html",
    desc: "./units/hyd/desc/hyd_reserv_3.html",
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
    id: "clp-hyd3-compensator",
    unit: "./units/hyd/units/hyd3_compensator.html",
    desc: "./units/hyd/desc/hyd3_compensator.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd3-filter-manif",
    unit: "./units/hyd/units/hyd3_filter_manif.html",
    desc: "./units/hyd/desc/hyd3_filter_manif.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd3-px-transd",
    unit: "./units/hyd/units/hyd3_px_transd.html",
    desc: "./units/hyd/desc/hyd3_px_transd.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd3-pxsw-a",
    unit: "./units/hyd/units/hyd3_pxsw_a.html",
    desc: "./units/hyd/desc/hyd3_pxsw_a.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd3-pxsw-c",
    unit: "./units/hyd/units/hyd3_pxsw_c.html",
    desc: "./units/hyd/desc/hyd3_pxsw_c.html",
    info: {},
    access: {},
  },
  {
    id: "clp-hyd3-pxsw-b",
    unit: "./units/hyd/units/hyd3_pxsw_b.html",
    desc: "./units/hyd/desc/hyd3_pxsw_b.html",
    info: {},
    access: {},
  },
	{
    id: "clp-hyd3-ecolo-bottle",
    unit: "./units/hyd/units/hyd3_ecolo_bottle.html",
    desc: "./units/hyd/desc/hyd3_ecolo_bottle.html",
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
    id: "clp-dc-motor-pump",
    unit: "./units/hyd/units/dc_motor_pump.html",
    desc: "./units/hyd/desc/dc_motor_pump.html",
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
    id: "clp-hyd-fill",
    unit: "./units/hyd/units/hyd_fill.html",
    desc: "./units/hyd/desc/hyd_fill.html",
    info: {},
    access: {},
  },
];

/**
 * SYSTEM 3 SVG FILE:
 *
 * Path to System 3's interactive SVG file.
 */
export const SVG_PATH = "./apps/hyd/config/system-3/pic/system-3.svg";

/**
 * SYSTEM 3 INTRO FILE:
 *
 * Path to System 3's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/hyd/config/system-3/desc/intro.html";
