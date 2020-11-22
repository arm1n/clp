/**
 * SHOW NLG DATA MODEL:
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
    id: "clp-nlg-wheel",
    text: "Wheel Assembly",
    unit: "./units/gear/units/nlg_wheel.html",
    desc: "./units/gear/desc/nlg_wheel.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-nlg-taxi-light",
    text: "Taxi Light",
    unit: "./units/lights/units/nlg_taxi_light.html",
    desc: "./units/lights/desc/nlg_taxi_light.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-nlg-lock-act",
    text: "Lock Actuator",
    unit: "./units/gear/units/nlg_lock_act.html",
    desc: "./units/gear/desc/nlg_lock_act.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-nlg-axle",
    text: "NLG Axle",
    unit: "./units/gear/units/nlg_axle.html",
    desc: "./units/gear/desc/nlg_axle.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-nlg-trailing-arm",
    text: "NLG Trailing Arm",
    unit: "./units/gear/units/nlg_trailing_arm.html",
    desc: "./units/gear/desc/nlg_trailing_arm.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-nlg-shock-strut",
    text: "NLG Shock Strut",
    unit: "./units/gear/units/nlg_shock_strut.html",
    desc: "./units/gear/desc/nlg_shock_strut.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-nlg-towing-spool",
    text: "NLG Towing Spool",
    unit: "./units/gear/units/nlg_towing_spool.html",
    desc: "./units/gear/desc/nlg_towing_spool.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-nlg-wow-sensor-cover",
    text: "WOW Proximity Sensors Cover",
    unit: "./units/gear/units/nlg_wow_sensor_cover.html",
    desc: "./units/gear/desc/nlg_wow_sensor_cover.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-nlg-center-mech",
    text: "Centering Mechanism",
    unit: "./units/gear/units/nlg_center_mech.html",
    desc: "./units/gear/desc/nlg_center_mech.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-nlg-steer-motor",
    text: "Steering Hydraulic Motor",
    unit: "./units/gear/units/nlg_steer_motor.html",
    desc: "./units/gear/desc/nlg_steer_motor.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-nlg-power-steer-hyd-lines",
    text: "Steering Manifold Hydraulic Lines",
    unit: "./units/gear/units/nlg_power_steer_hyd_lines.html",
    desc: "./units/gear/desc/nlg_power_steer_hyd_lines.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-nlg-power-steer-unit",
    text: "Power Steering Unit",
    unit: "./units/gear/units/nlg_power_steer_unit.html",
    desc: "./units/gear/desc/nlg_power_steer_unit.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  
  {
    id: "clp-nlg-cable-guid",
    text: "Cable-Guide Assembly",
    unit: "./units/gear/units/nlg_cable_guid.html",
    desc: "./units/gear/desc/nlg_cable_guid.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-nlg-retr-act",
    text: "Retraction Actuator",
    unit: "./units/gear/units/nlg_retr_act.html",
    desc: "./units/gear/desc/nlg_retr_act.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-nlg-pivot-tube",
    text: "Pivot Tube Assemply",
    unit: "./units/gear/units/nlg_pivot_tube.html",
    desc: "./units/gear/desc/nlg_pivot_tube.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-nlg-drag-strut",
    text: "Drag Strut",
    unit: "./units/gear/units/nlg_drag_strut.html",
    desc: "./units/gear/desc/nlg_drag_strut.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  
  {
    id: "clp-nlg-ele-harness",
    text: "Electrical Harness",
    unit: "./units/gear/units/nlg_ele_harness.html",
    desc: "./units/gear/desc/nlg_ele_harness.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-nlg-fwd-doors",
    text: "NLG Doors (FWD)",
    unit: "./units/gear/units/nlg_fwd_doors.html",
    desc: "./units/gear/desc/nlg_fwd_doors.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-nlg-aft-doors",
    text: "NLG Doors (AFT)",
    unit: "./units/gear/units/nlg_aft_doors.html",
    desc: "./units/gear/desc/nlg_aft_doors.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-nlg-door-mechan",
    text: "Door Mechanism",
    unit: "./units/gear/units/nlg_door_mechan.html",
    desc: "./units/gear/desc/nlg_door_mechan.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-nlg-lock-sensors",
    text: "GEAR LOCK Proximity Sensors",
    unit: "./units/gear/units/nlg_lock_sensors.html",
    desc: "./units/gear/desc/nlg_lock_sensors.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-nlg-down-sensors",
    text: "GEAR DOWN Proximity Sensors",
    unit: "./units/gear/units/nlg_down_sensors.html",
    desc: "./units/gear/desc/nlg_down_sensors.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-nlg-door-sensors",
    text: "DOOR Proximity Sensors",
    unit: "./units/gear/units/nlg_door_sensor.html",
    desc: "./units/gear/desc/nlg_door_sensor.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	
	{
    id: "clp-nlg-wow-sensors",
    text: "WOW Proximity Sensors",
    unit: "./units/gear/units/nlg_wow_sensors.html",
    desc: "./units/gear/desc/nlg_wow_sensors.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
];

/**
 * SHOW NLG SVG FILE:
 *
 * Path to Show NLG's interactive SVG file.
 */
export const SVG_PATH = "./apps/gear/config/show-nlg/pic/show-nlg.svg";

/**
 * SHOW NLG INTRO FILE:
 *
 * Path to Show NLG's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/gear/config/show-nlg/desc/intro.html";
