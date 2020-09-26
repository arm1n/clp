/**
 * DOOR SEALS DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   unit: relative path to unit file on the right,
 *   desc: relative path to desc file on the left,
 *   info: {
 *     path: "./path/to/html/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/html/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only)
 *   }
 * }
 */
export const DATA_SET = [
  {
    id: "clp-reservoir",
    unit: "./units/doors/units/door_reservoir.html",
    desc: "./units/doors/desc/door_reservoir.html",
    info: {},
    access: {},
  },
  {
    id: "clp-filter",
    unit: "./units/doors/units/door_seal_filter.html",
    desc: "./units/doors/desc/door_seal_filter.html",
    info: {},
    access: {},
  },
  {
    id: "clp-heatcheckvlv",
    unit: "./units/doors/units/door_check_vlv.html",
    desc: "./units/doors/desc/door_check_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-chargevlv",
    unit: "./units/doors/units/door_sys_charg_vlv.html",
    desc: "./units/doors/desc/door_sys_charg_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-electrosov",
    unit: "./units/doors/units/pax_door_esov.html",
    desc: "./units/doors/desc/pax_door_esov.html",
    info: {},
    access: {},
  },
	{
    id: "clp-drainvalve",
    unit: "./units/doors/units/door_res_dvlv.html",
    desc: "./units/doors/desc/door_res_dvlv.html",
    info: {},
    access: {},
  },
	{
    id: "clp-esc-hatch-seal",
    unit: "./units/doors/units/esc_hatch_seal.html",
    desc: "./units/doors/desc/esc_hatch_seal.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fwd-pax-seal-vlv",
    unit: "./units/doors/units/fwd_pax_seal_vlv.html",
    desc: "./units/doors/desc/fwd_pax_seal_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fwd-pax-seal",
    unit: "./units/doors/units/fwd_pax_seal.html",
    desc: "./units/doors/desc/fwd_pax_seal.html",
    info: {},
    access: {},
  },
  {
    id: "clp-aft-bagg-door-seal-vlv",
    unit: "./units/doors/units/aft_bagg_door_seal_vlv.html",
    desc: "./units/doors/desc/aft_bagg_door_seal_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-aft-bagg-door-seal",
    unit: "./units/doors/units/aft_bagg_door_seal.html",
    desc: "./units/doors/desc/aft_bagg_door_seal.html",
    info: {},
    access: {},
  },
  {
    id: "clp-aft-pax-seal",
    unit: "./units/doors/units/aft_pax_door_seal.html",
    desc: "./units/doors/desc/aft_pax_door_seal.html",
    info: {},
    access: {},
  },
  {
    id: "clp-aft-servdoor-seal",
    unit: "./units/doors/units/aft_servdoor_seal.html",
    desc: "./units/doors/desc/aft_servdoor_seal.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fwd-baggdoor-seal",
    unit: "./units/doors/units/fwd_bagg_door_seal.html",
    desc: "./units/doors/desc/fwd_bagg_door_seal.html",
    info: {},
    access: {},
  },
  {
    id: "clp-emer-exit-seal",
    unit: "./units/doors/units/emerg_exit_door_seal.html",
    desc: "./units/doors/desc/emerg_exit_door_seal.html",
    info: {},
    access: {},
  },
];

/**
 * DOOR SEALS SVG FILE:
 *
 * Path to Door Seals' interactive SVG file.
 */
export const SVG_PATH = "./apps/door/config/door-seals/pic/door-seals.svg";

/**
 * DOOR SEALS INTRO FILE:
 *
 * Path to Door Seals' intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/door/config/door-seals/desc/intro.html";
