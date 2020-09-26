/**
 * SPOILER SYSTEM DATA MODEL:
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
    id: "clp-to-aileron",
    unit: "./units/fc/units/file.html",
    desc: "./units/to/desc/file.html",
    info: {},
    access: {},
  },
	{
    id: "clp-spoil-cable-sens",
    unit: "./units/fc/units/spoil_cable_sens.html",
    desc: "./units/fc/desc/spoil_cable_sens.html",
    info: {},
    access: {},
  },
	{
    id: "clp-spoil-lvdt",
    unit: "./units/fc/units/spoil_lvdt.html",
    desc: "./units/fc/desc/spoil_lvdt.html",
    info: {},
    access: {},
  },
  {
    id: "clp-spoil-panel-ib",
    unit: "./units/fc/units/spoil_panel_ib.html",
    desc: "./units/fc/desc/spoil_panel.html",
    info: {},
    access: {},
  },
  {
    id: "clp-spoil-panel-ob",
    unit: "./units/fc/units/spoil_panel_ob.html",
    desc: "./units/fc/desc/spoil_panel.html",
    info: {},
    access: {},
  },
  {
    id: "clp-spoil-unload-vlv",
    unit: "./units/fc/units/spoil_unload_vlv.html",
    desc: "./units/fc/desc/spoil_unload_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-spoil-liftdump-vlv",
    unit: "./units/fc/units/spoil_liftdump_vlv.html",
    desc: "./units/fc/desc/spoil_liftdump_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-spoil-pcu",
    unit: "./units/fc/units/spoil_pcu.html",
    desc: "./units/fc/desc/spoil_pcu.html",
    info: {},
    access: {},
  },
  {
    id: "clp-roll-spoiler-px-sw",
    unit: "./units/fc/units/roll_spoiler_px_sw.html",
    desc: "./units/fc/desc/roll_spoiler_px_sw.html",
    info: {},
    access: {},
  },
  {
    id: "clp-spoil-clutch-switch",
    unit: "./units/fc/units/spoil_clutch_switch.html",
    desc: "./units/fc/desc/spoil_clutch_switch.html",
    info: {},
    access: {},
  },
  {
    id: "clp-spoil-splitquadrant",
    unit: "./units/fc/units/spoil_splitquadrant.html",
    desc: "./units/fc/desc/spoil_splitquadrant.html",
    info: {},
    access: {},
  },
  {
    id: "clp-spoil-quadrant",
    unit: "./units/fc/units/spoil_quadrant.html",
    desc: "./units/fc/desc/spoil_quadrant.html",
    info: {},
    access: {},
  },
  {
    id: "clp-roll-disc-handle",
    unit: "./units/cockpit/units/roll_disc_handle.html",
    desc: "./units/cockpit/desc/roll_disc_handle.html",
    info: {},
    access: {},
  },
  {
    id: "clp-spoiler-push-off-sw",
    unit: "./units/cockpit/units/spoiler_push_off_sw.html",
    desc: "./units/cockpit/desc/spoiler_push_off_sw.html",
    info: {},
    access: {},
  },
  {
    id: "clp-pla",
    unit: "./units/cockpit/units/pla.html",
    desc: "./units/cockpit/desc/pla.html",
    info: {},
    access: {},
  },
  {
    id: "clp-flight-taxi-sw",
    unit: "./units/cockpit/units/flight_taxi_sw.html",
    desc: "./units/cockpit/desc/flight_taxi_sw.html",
    info: {},
    access: {},
  },
  {
    id: "clp-pseu",
    unit: "./units/wd/units/pseu.html",
    desc: "./units/fc/desc/pseu_spoiler_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fcecu",
    unit: "./units/uf/units/fcecu.html",
    desc: "./units/fc/desc/fcecu_spoiler_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cawlp",
    unit: "./units/cockpit/units/cawlp.html",
    desc: "./units/fc/desc/cl_spoiler.html",
    info: {},
    access: {},
  },
  {
    id: "clp-display-unit",
    unit: "./units/cockpit/units/display_unit.html",
    desc: "./units/fc/desc/display_unit_spoiler.html",
    info: {},
    access: {},
  },
];

/**
 * SPOILER SYSTEM SVG FILE:
 *
 * Path to Spoiler System's interactive SVG file.
 */
export const SVG_PATH = "./apps/flight-control/config/spoiler-system/pic/spoiler-system.svg";

/**
 * SPOILER SYSTEM INTRO FILE:
 *
 * Path to Spoiler System's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/flight-control/config/spoiler-system/desc/intro.html";
