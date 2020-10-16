/**
 * POSITION AND WARNING DATA MODEL:
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
 *   },
 * }
 */
export const DATA_SET = [
  {
    id: "clp-land-gear-cont-panel",
    unit: "./units/cockpit/units/land_gear_cont_panel.html",
    desc: "./units/cockpit/desc/land_gear_cont_panel.html",
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
    desc: "./units/gear/desc/gear_cl.html",
    info: {},
    access: {},
  },
  {
    id: "clp-alt-ext-ind-sw",
    unit: "./units/gear/units/alt_ext_ind_sw.html",
    desc: "./units/gear/desc/alt_ext_ind_sw.html",
    info: {},
    access: {},
  },
  {
    id: "clp-all-prox-sensor",
    unit: "./units/wd/units/pseu.html",
    desc: "./units/gear/desc/prox_sensor_general.html",
    info: {},
    access: {},
  },
	{
    id: "clp-nlg-wow",
    unit: "./units/gear/units/nlg_wow_sensors.html",
    desc: "./units/gear/desc/nlg_wow_sensors.html",
    info: {},
    access: {},
  },
	{
    id: "clp-nlg-door",
    unit: "./units/gear/units/nlg_door_sensor.html",
    desc: "./units/gear/desc/nlg_door_sensor.html",
    info: {},
    access: {},
  },
	{
    id: "clp-nlg-gear",
    unit: "./units/gear/units/nlg_gear_sensors.html",
    desc: "./units/gear/desc/nlg_gear_sensors.html",
    info: {},
    access: {},
  },
	{
    id: "clp-nlg-steering",
    unit: "./units/gear/units/nlg_center_mech_sensor.html",
    desc: "./units/gear/desc/nlg_center_mech_sensor.html",
    info: {},
    access: {},
  },
	{
    id: "clp-mlg-lh-wow",
    unit: "./units/gear/units/mlg_wow_sensors.html",
    desc: "./units/gear/desc/mlg_wow_sensors.html",
    info: {},
    access: {},
  },
	{
    id: "clp-mlg-lh-door",
    unit: "./units/gear/units/mlg_door_sensor.html",
    desc: "./units/gear/desc/mlg_door_sensor.html",
    info: {},
    access: {},
  },
	{
    id: "clp-mlg-lh-gear",
    unit: "./units/gear/units/mlg_gear_sensors.html",
    desc: "./units/gear/desc/mlg_gear_sensors.html",
    info: {},
    access: {},
  },
	{
    id: "clp-mlg-rh-wow",
    unit: "./units/gear/units/mlg_wow_sensors.html",
    desc: "./units/gear/desc/mlg_wow_sensors.html",
    info: {},
    access: {},
  },
	{
    id: "clp-mlg-rh-door",
    unit: "./units/gear/units/mlg_door_sensor.html",
    desc: "./units/gear/desc/mlg_door_sensor.html",
    info: {},
    access: {},
  },
	{
    id: "clp-mlg-rh-gear",
    unit: "./units/gear/units/mlg_gear_sensors.html",
    desc: "./units/gear/desc/mlg_gear_sensors.html",
    info: {},
    access: {},
  },
];

/**
 * POSITION AND WARNING SVG FILE:
 *
 * Path to Position & Warning's interactive SVG file.
 */
export const SVG_PATH = "./apps/gear/config/position-and-warning/pic/position-and-warning.svg";

/**
 * POSITION AND WARNING INTRO FILE:
 *
 * Path to Position & Warning's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/gear/config/position-and-warning/desc/intro.html";
