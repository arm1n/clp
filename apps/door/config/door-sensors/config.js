/**
 * DOOR SENSORS DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   unit: relative path to unit file on the right,
 *   desc: relative path to desc file on the left,
 *   info: {
 *     path: "./path/to/html/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" | "size-4" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/html/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" | "size-4" (popup only)
 *   }
 * }
 */
export const DATA_SET = [
  {
    id: "clp-aft-svc-door-sensors",
    unit: "./units/doors/units/aft_servd_sensor.html",
    desc: "./units/doors/desc/aft_servd_sensor.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fwd-emerg-door-sensors",
    unit: "./units/doors/units/emerg_exit_door_sensor.html",
    desc: "./units/doors/desc/emerg_exit_door_sensor.html",
    info: {},
    access: {},
  },
  {
    id: "clp-aft-pax-door-sensors",
    unit: "./units/doors/units/aft_pax_sensor.html",
    desc: "./units/doors/desc/aft_pax_sensor.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fwd-pax-door-sensors",
    unit: "./units/doors/units/fwd_pax_sensor.html",
    desc: "./units/doors/desc/fwd_pax_sensor.html",
    info: {},
    access: {},
  },
  {
    id: "clp-aft-bagg-door-sensors",
    unit: "./units/doors/units/aft_bagg_sensor.html",
    desc: "./units/doors/desc/aft_bagg_sensor.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fwd-bagg-door-sensors",
    unit: "./units/doors/units/fwd_bagg_sensor.html",
    desc: "./units/doors/desc/fwd_bagg_sensor.html",
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
    id: "clp-ifc-iop",
    unit: "./units/wd/units/ifc_iop.html",
    desc: "./units/wd/desc/ifc_iop.html",
    info: {},
    access: {},
  },
	{
    id: "clp-cawlp",
    unit: "./units/cockpit/units/cawlp.html",
    desc: "./units/doors/desc/cl_fusselage_door.html",
    info: {},
    access: {},
  },
	{
    id: "clp-door-sys-page",
    unit: "./units/cockpit/units/display_unit.html",
    desc: "./units/doors/desc/door_sys_page_info.html",
    info: {},
    access: {},
  },
	{
    id: "clp-cabin-px-sys",
    unit: "./units/wd/units/cabin_px_cont.html",
    desc: "./units/doors/desc/cabin_px_sys_info.html",
    info: {},
    access: {},
  },
];

/**
 * DOOR SENSORS SVG FILE:
 *
 * Path to Door Sensors' interactive SVG file.
 */
export const SVG_PATH = "./apps/door/config/door-sensors/pic/door-sensors.svg";

/**
 * DOOR SENSORS INTRO FILE:
 *
 * Path to Door Sensors' intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/door/config/door-sensors/desc/intro.html";
