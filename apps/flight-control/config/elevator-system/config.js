/**
 * ELEVATOR SYSTEM DATA MODEL:
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
    id: "clp-elev-trim-sw",
    unit: "./units/cockpit/units/elev_trim_sw.html",
    desc: "./units/cockpit/desc/elev_trim_sw.html",
    info: {},
    access: {},
  },
	
	{
    id: "clp-elevator",
    unit: "./units/fc/units/elevator_surfaces.html",
    desc: "./units/fc/desc/elevator_surfaces.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elev-lvdt",
    unit: "./units/fc/units/elev_lvdt.html",
    desc: "./units/fc/desc/elev_lvdt.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elev-input-bungee",
    unit: "./units/fc/units/elev_input_bungee.html",
    desc: "./units/fc/desc/elev_input_bungee.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elev-pcu",
    unit: "./units/fc/units/elev_pcu.html",
    desc: "./units/fc/desc/elev_pcu.html",
    info: {},
    access: {},
  },
  {
    id: "clp-pitch-feel-act",
    unit: "./units/fc/units/pitch_feel_act.html",
    desc: "./units/fc/desc/pitch_feel_act.html",
    info: {},
    access: {},
  },
  {
    id: "clp-pitch-trim-act",
    unit: "./units/fc/units/pitch_trim_act.html",
    desc: "./units/fc/desc/pitch_trim_act.html",
    info: {},
    access: {},
  },
  {
    id: "clp-pitch-feel-trim-frame",
    unit: "./units/fc/units/pitch_feel_trim_frame.html",
    desc: "./units/fc/desc/pitch_feel_trim_frame.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elev-autop-servo",
    unit: "./units/fc/units/elev_autop_servo.html",
    desc: "./units/fc/desc/elev_autop_servo.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elev-cent-device",
    unit: "./units/fc/units/elev_cent_device.html",
    desc: "./units/fc/desc/elev_cent_device.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elev-overload-bung",
    unit: "./units/fc/units/elev_overload_bung.html",
    desc: "./units/fc/desc/elev_overload_bung.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elev-right-aft-quad",
    unit: "./units/fc/units/elev_right_aft_quad.html",
    desc: "./units/fc/desc/elev_right_aft_quad.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elev-left-aft-quad",
    unit: "./units/fc/units/elev_left_aft_quad.html",
    desc: "./units/fc/desc/elev_left_aft_quad.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elev-left-fwd1-quad",
    unit: "./units/fc/units/elev_left_fwd_quad.html",
    desc: "./units/fc/desc/elev_left_fwd_quad.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elev-right-fwd1-quad",
    unit: "./units/fc/units/elev_right_fwd_quad.html",
    desc: "./units/fc/desc/elev_right_fwd_quad.html",
    info: {},
    access: {},
  },
  {
    id: "clp-stick-pusher",
    unit: "./units/fc/units/stick_pusher.html",
    desc: "./units/fc/desc/stick_pusher.html",
    info: {},
    access: {},
  },
  {
    id: "clp-pitch-disc-handle",
    unit: "./units/cockpit/units/pitch_disc_handle.html",
    desc: "./units/cockpit/desc/pitch_disc_handle.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fcecu",
    unit: "./units/uf/units/fcecu.html",
    desc: "./units/uf/desc/fcecu.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elev-trim-ind",
    unit: "./units/cockpit/units/elev_trim_ind.html",
    desc: "./units/cockpit/desc/elev_trim_ind.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cawlp_1_",
    unit: "./units/cockpit/units/cawlp.html",
    desc: "./units/fc/desc/cl_elevator.html",
    info: {},
    access: {},
  },
  {
    id: "clp-display-unit",
    unit: "./units/cockpit/units/display_unit_ele.html",
    desc: "./units/fc/desc/display_unit_elevator.html",
    info: {},
    access: {},
  },
  {
    id: "clp-stick-push-sw",
    unit: "./units/cockpit/units/stick_push_sw.html",
    desc: "./units/cockpit/desc/stick_push_sw.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elev-trim-sov-sw",
    unit: "./units/cockpit/units/elev_trim_sov_sw.html",
    desc: "./units/cockpit/desc/elev_trim_sov_sw.html",
    info: {},
    access: {},
  },
];

/**
 * ELEVATOR SYSTEM SVG FILE:
 *
 * Path to Elevator System's interactive SVG file.
 */
export const SVG_PATH = "./apps/flight-control/config/elevator-system/pic/elevator-system.svg";

/**
 * ELEVATOR SYSTEM INTRO FILE:
 *
 * Path to Elevator System's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/flight-control/config/elevator-system/desc/intro.html";
