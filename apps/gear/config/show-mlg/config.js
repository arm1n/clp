/**
 * SHOW MLG DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   text: text to be used if item is shown in menu,
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
 *   },
 *   show_in_menu: flag if this item is in menu or only in SVG,
 * }
 */
export const DATA_SET = [
  {
    id: "clp-mlg-wheel",
    text: "MLG Wheel",
    unit: "./units/gear/units/mlg_wheel.html",
    desc: "./units/gear/desc/mlg_wheel.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-mlg-brake",
    text: "Brake Unit",
    unit: "./units/gear/units/mlg_brake.html",
    desc: "./units/gear/desc/mlg_brake.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-mlg-axle",
    text: "MLG Axle",
    unit: "./units/gear/units/mlg_axle.html",
    desc: "./units/gear/desc/mlg_axle.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-mlg-tq-link",
    text: "Torque Links",
    unit: "./units/gear/units/mlg_tq_link.html",
    desc: "./units/gear/desc/mlg_tq_link.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-mlg-upl-roller",
    text: "Uplock Roller",
    unit: "./units/gear/units/mlg_upl_roller.html",
    desc: "./units/gear/desc/mlg_upl_roller.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-mlg-fairings",
    text: "Fairings",
    unit: "./units/gear/units/mlg_fairings.html",
    desc: "./units/gear/desc/mlg_fairings.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-mlg-shock-strut",
    text: "Shock Strut",
    unit: "./units/gear/units/mlg_shock_strut.html",
    desc: "./units/gear/desc/mlg_shock_strut.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-mlg-drag-strut",
    text: "Drag Strut",
    unit: "./units/gear/units/mlg_drag_strut.html",
    desc: "./units/gear/desc/mlg_drag_strut.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-brake-hoses",
    text: "Brake Hoses",
    unit: "./units/gear/units/brake_hoses.html",
    desc: "./units/gear/desc/brake_hoses.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-mlg-retr-act",
    text: "Retraction Actuator",
    unit: "./units/gear/units/mlg_retr_act.html",
    desc: "./units/gear/desc/mlg_retr_act.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-mlg-downlock-act",
    text: "Downlock Actuator",
    unit: "./units/gear/units/mlg_downlock_act.html",
    desc: "./units/gear/desc/mlg_downlock_act.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-mlg-yoke",
    text: "Yoke",
    unit: "./units/gear/units/mlg_yoke.html",
    desc: "./units/gear/desc/mlg_yoke.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-mlg-stab-brace",
    text: "Stabilizer Brace",
    unit: "./units/gear/units/mlg_stab_brace.html",
    desc: "./units/gear/desc/mlg_stab_brace.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-mlg-swivel-assy",
    text: "Swivel Assy",
    unit: "./units/gear/units/mlg_swivel_assy.html",
    desc: "./units/gear/desc/mlg_swivel_assy.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-brake-swivel-assy",
    text: "Swivel Assy Brake",
    unit: "./units/gear/units/brake_swivel_assy.html",
    desc: "./units/gear/desc/brake_swivel_assy.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-mlg-retr-act-hyd-lines",
    text: "Ret Actuator Hyd Lines",
    unit: "./units/gear/units/mlg_retr_act_hyd_lines.html",
    desc: "./units/gear/desc/mlg_retr_act_hyd_lines.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-alt-ext-actuator",
    text: "Alternate Extension Actuator",
    unit: "./units/gear/units/alt_ext_actuator.html",
    desc: "./units/gear/desc/alt_ext_actuator.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-mlg-uplock-assy",
    text: "Uplock Assembly",
    unit: "./units/gear/units/mlg_uplock_assy.html",
    desc: "./units/gear/desc/mlg_uplock_assy.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-mlg-bracket-rods",
    text: "Doors Connecting",
    unit: "./units/gear/units/mlg_bracket_rods.html",
    desc: "./units/gear/desc/mlg_bracket_rods.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
 
	{
    id: "clp-mlg-fwd-doors",
    text: "FWD MLG Doors",
    unit: "./units/gear/units/mlg_fwd_doors.html",
    desc: "./units/gear/desc/mlg_fwd_doors.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-mlg-aft-doors",
    text: "AFT MLG Doors",
    unit: "./units/gear/units/mlg_aft_doors.html",
    desc: "./units/gear/desc/mlg_aft_doors.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-mlg-gear-sensor",
    text: "GEAR Proximity Sensors",
    unit: "./units/gear/units/mlg_gear_sensors.html",
    desc: "./units/gear/desc/mlg_gear_sensors.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-mlg-door-sensor",
    text: "DOOR Proximity Sensor",
    unit: "./units/gear/units/mlg_door_sensor.html",
    desc: "./units/gear/desc/mlg_door_sensor.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-mlg-wow-sensors",
    text: "WOW Proximity Sensor",
    unit: "./units/gear/units/mlg_wow_sensors.html",
    desc: "./units/gear/desc/mlg_wow_sensors.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
];

/**
 * SHOW MLG SVG FILE:
 *
 * Path to Show MLG's interactive SVG file.
 */
export const SVG_PATH = "./apps/gear/config/show-mlg/pic/show-mlg.svg";

/**
 * SHOW MLG INTRO FILE:
 *
 * Path to Show MLG's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/gear/config/show-mlg/desc/intro.html";
