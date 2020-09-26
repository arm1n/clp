/**
 * OVERVIEW DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   path: path to subsystem for redirection.
 * }
 */
export const DATA_SET = [
  {
    id: "clp-elevator",
		unit: "./units/fc/units/elevator_surfaces.html",
    desc: "./apps/flight-control/config/elevator-system/desc/intro.html",
  },
  {
    id: "clp-rudder",
		unit: "./units/fc/units/rudd_surfaces.html",
    desc: "./apps/flight-control/config/rudder-system/desc/intro.html",
  },
  {
    id: "clp-spoiler-ib",
		unit: "./units/fc/units/spoil_panel_ib.html",
    desc: "./apps/flight-control/config/spoiler-system/desc/intro.html",
  },
	{
    id: "clp-spoiler-ob",
		unit: "./units/fc/units/spoil_panel_ob.html",
    desc: "./apps/flight-control/config/spoiler-system/desc/intro.html",
  },
  {
    id: "clp-aileron",
		unit: "./units/fc/units/ail_surface.html",
    desc: "./apps/flight-control/config/aileron-system/desc/intro.html",
  },
  {
    id: "clp-flaps-ib",
		unit: "./units/fc/units/ib_flaps.html",
    desc: "./apps/flight-control/config/flap-system/desc/intro.html",
  },
	{
    id: "clp-flaps-ob",
		unit: "./units/fc/units/ob_flaps.html",
    desc: "./apps/flight-control/config/flap-system/desc/intro.html",
  },
	{
    id: "clp-fcecu",
		unit: "./units/uf/units/fcecu.html",
    desc: "./units/uf/desc/fcecu.html",
  },
];

/**
 * OVERVIEW SVG FILE:
 *
 * Path to Overview's interactive SVG file.
 */
export const SVG_PATH = "./apps/flight-control/config/overview/pic/overview_v2.svg";

/**
 * OVERVIEW INTRO FILE:
 *
 * Path to Overview's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/flight-control/config/overview/desc/intro.html";
