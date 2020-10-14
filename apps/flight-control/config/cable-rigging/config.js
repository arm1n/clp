/**
 * CABLE RIGGING AILERON DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   unit: relative path to unit file on the right,
 *   desc: relative path to desc file on the left,
 *   info: {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" | "size-4" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" | "size-4" (popup only)
 *   },
 * }
 */
export const DATA_SET_AILERON = [
  {
    id: "clp-ail-lvdt",
    unit: "./apps/flight-control/config/cable-rigging/desc/aileron.html",
    desc: "./units/fc/desc/ail_lvdt.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ail-split-quad",
    unit: "./apps/flight-control/config/cable-rigging/desc/aileron.html",
    desc: "./units/fc/desc/rigging_ail_split_quad.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ail-term-quad",
    unit: "./apps/flight-control/config/cable-rigging/desc/aileron.html",
    desc: "./units/fc/desc/rigging_ail_term_quad.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ail-surface",
    unit: "./apps/flight-control/config/cable-rigging/desc/aileron.html",
    desc: "./units/fc/desc/rigging_ail_surface.html",
    info: {},
    access: {},
  },
  {
    id: "clp-gustlock-mech",
    unit: "./apps/flight-control/config/cable-rigging/desc/aileron.html",
    desc: "./units/fc/desc/rigging_gustlock_mech.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ail-fwd-quad",
    unit: "../apps/flight-control/config/cable-rigging/desc/aileron.html",
    desc: "./units/fc/desc/rigging_ail_fwd_quad.html",
    info: {},
    access: {},
  },
];

/**
 * CABLE RIGGING SVG FILE:
 *
 * Path to Cable Rigging Aileron's interactive SVG file.
 */
export const SVG_PATH_AILERON = "./apps/flight-control/config/cable-rigging/pic/aileron.svg";

/**
 * CABLE RIGGING INTRO FILE:
 *
 * Path to Cable Rigging Aileron's intro HTML file shown at bottom.
 */
export const INTRO_PATH_AILERON = "./apps/flight-control/config/cable-rigging/desc/aileron.html";

/**
 * CABLE RIGGING SPOILER DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   unit: relative path to unit file on the right,
 *   desc: relative path to desc file on the left,
 *   info: {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" | "size-4" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" | "size-4" (popup only)
 *   },
 * }
 */
export const DATA_SET_SPOILER = [
  {
    id: "clp-spoil-splitquadrant",
    unit: "./apps/flight-control/config/cable-rigging/desc/spoiler.html",
    desc: "./units/fc/desc/rigging_spoil_splitquadrant.html",
    info: {},
    access: {},
  },
  {
    id: "clp-spoil-panel-ib",
    unit: "./apps/flight-control/config/cable-rigging/desc/spoiler.html",
    desc: "./units/fc/desc/rigging_spoil_panel_ib.html",
    info: {},
    access: {},
  },
  {
    id: "clp-spoil-panel-ob",
    unit: "./apps/flight-control/config/cable-rigging/desc/spoiler.html",
    desc: "./units/fc/desc/rigging_spoil_panel_ob.html",
    info: {},
    access: {},
  },
  {
    id: "clp-spoil-clutch",
    unit: "./apps/flight-control/config/cable-rigging/desc/spoiler.html",
    desc: "./units/fc/desc/rigging_spoil_clutch_switch.html",
    info: {},
    access: {},
  },
  {
    id: "clp-spoil-pcu",
    unit: "./apps/flight-control/config/cable-rigging/desc/spoiler.html",
    desc: "./units/fc/desc/rigging_spoil_pcu.html",
    info: {},
    access: {},
  },
  {
    id: "clp-spoil-quadrant",
    unit: "./apps/flight-control/config/cable-rigging/desc/spoiler.html",
    desc: "./units/fc/desc/rigging_spoil_quadrant.html",
    info: {},
    access: {},
  },
];

/**
 * CABLE RIGGING SPOILER SVG FILE:
 *
 * Path to Cable Rigging's interactive SVG file.
 */
export const SVG_PATH_SPOILER = "./apps/flight-control/config/cable-rigging/pic/spoiler.svg";

/**
 * CABLE RIGGING SPOILER INTRO FILE:
 *
 * Path to Cable Rigging Spoiler's intro HTML file shown at bottom.
 */
export const INTRO_PATH_SPOILER = "./apps/flight-control/config/cable-rigging/desc/spoiler.html";

/**
 * CABLE RIGGING RUDDER DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   unit: relative path to unit file on the right,
 *   desc: relative path to desc file on the left,
 *   info: {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" | "size-4" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" | "size-4" (popup only)
 *   },
 * }
 */
export const DATA_SET_RUDDER = [
  {
    id: "clp-rud-fwdquad",
    unit: "./apps/flight-control/config/cable-rigging/desc/rudder.html",
    desc: "./units/fc/desc/rigging_rud_fwdquad.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rud-mixquad",
    unit: "./apps/flight-control/config/cable-rigging/desc/rudder.html",
    desc: "./units/fc/desc/rigging_rud_mixquad.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rud-pedal",
    unit: "./apps/flight-control/config/cable-rigging/desc/rudder.html",
    desc: "./units/fc/desc/rud_pedal.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rud-aftquad",
    unit: "./apps/flight-control/config/cable-rigging/desc/rudder.html",
    desc: "./units/fc/desc/rigging_rud_aftquad.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rudd-surfaces",
    unit: "./apps/flight-control/config/cable-rigging/desc/rudder.html",
    desc: "./units/fc/desc/rigging_rud_surfaces.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rudd-pcu",
    unit: "./apps/flight-control/config/cable-rigging/desc/rudder.html",
    desc: "./units/fc/desc/rigging_rud_aftquad.html",
    info: {},
    access: {},
  },
];

/**
 * CABLE RIGGING RUDDER SVG FILE:
 *
 * Path to Cable Rigging Rudder's interactive SVG file.
 */
export const SVG_PATH_RUDDER = "./apps/flight-control/config/cable-rigging/pic/rudder.svg";

/**
 * CABLE RIGGING RUDDER INTRO FILE:
 *
 * Path to Cable Rigging Rudder's intro HTML file shown at bottom.
 */
export const INTRO_PATH_RUDDER = "./apps/flight-control/config/cable-rigging/desc/rudder.html";

/**
 * CABLE RIGGING ELEVATOR DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   unit: relative path to unit file on the right,
 *   desc: relative path to desc file on the left,
 *   info: {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" | "size-4" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" | "size-4" (popup only)
 *   },
 * }
 */
export const DATA_SET_ELEVATOR = [
  {
    id: "clp-pitch-feel-trim-frame",
    unit: "./apps/flight-control/config/cable-rigging/desc/elevator.html",
    desc: "./units/fc/desc/rigging_pitch_feel_trim_frame.html",
    info: {},
    access: {},
  },
  {
    id: "clp-stick-pusher",
    unit: "./apps/flight-control/config/cable-rigging/desc/elevator.html",
    desc: "./units/fc/desc/stick_pusher.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elev-fwd-quad",
    unit: "./apps/flight-control/config/cable-rigging/desc/elevator.html",
    desc: "./units/fc/desc/rigging_elev_fwd_quad.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elev-autop-servo",
    unit: "./apps/flight-control/config/cable-rigging/desc/elevator.html",
    desc: "./units/fc/desc/rigging_elev_autop_servo.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elev-pcu",
    unit: "./apps/flight-control/config/cable-rigging/desc/elevator.html",
    desc: "./units/fc/desc/rigging_elev_pcu.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elevator",
    unit: "./apps/flight-control/config/cable-rigging/desc/elevator.html",
    desc: "./units/fc/desc/rigging_elevator_surfaces.html",
    info: {},
    access: {},
  },
  {
    id: "clp-elev-aft-quad",
    unit: "./apps/flight-control/config/cable-rigging/desc/elevator.html",
    desc: "./units/fc/desc/rigging_elev_aft_quad.html",
    info: {},
    access: {},
  },
];

/**
 * CABLE RIGGING ELEVATOR SVG FILE:
 *
 * Path to Cable Rigging Elevator's interactive SVG file.
 */
export const SVG_PATH_ELEVATOR = "./apps/flight-control/config/cable-rigging/pic/elevator.svg";

/**
 * CABLE RIGGING ELEVATOR INTRO FILE:
 *
 * Path to Cable Rigging Elevator's intro HTML file shown at bottom.
 */
export const INTRO_PATH_ELEVATOR = "./apps/flight-control/config/cable-rigging/desc/elevator.html";
