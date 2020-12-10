/**
 * DASHBOARD SIDE NAV:
 *
 * [
 *   {
 *     name: name to show up in the navbar for this button
 *     path: relative path to page ('INTERNAL' or 'POPUP') or URL ('EXTERNAL'),
 *     mode: setting how to handle button: 'POPUP', 'INTERNAL' or 'EXTERNAL'
 *     file: relative path to html (only for 'POPUP')
 			{ name: "v. 20-01a", path: "http://www.infotools.at", mode: "EXTERNAL" },
 *   }
 * ]
 */
export const SIDE_NAV = [
  { name: "Help", path: "/help", mode: "INTERNAL" },
  { name: "v. 20-01a7" },
	{ name: "Legal Notice", path: "/legal", mode: "INTERNAL" },
	
	/** 
	
  { name: "Legal Notice", path: "http://www.infotools.at/clp/clp_nn/clp.html", mode: "EXTERNAL" },
	*/
];

/**
 * DASHBOARD CAUTION LIGHTS:
 *
 * {
 *   cols: all columns for the matrix
 *   rows: [
 *    {
 *     A: {
 *       file: relative path for file to be loaded on sub page,
 *       buttons: [
 *         {
 *           name: name to show up in the navbar for this button
 *           path: relative path to page ('INTERNAL' or 'POPUP') or URL ('EXTERNAL'),
 *           mode: setting how to handle button: 'POPUP', 'INTERNAL' or 'EXTERNAL'
 *           file: relative path to html (only for 'POPUP')
 *         },
 *         ...
 *       ],
 *       highlights: an array of optional ids from `HIGHLIGHTS`,
 *       show_eng_apu_ecs_search: flag (true|false) if ENGINE/APU/ECS search box is shown on sub page
 *       gnd_eng_stopped: flag (true|false) if highlighted if "GND-ENG STOPPED" is active
 *       gnd_eng_stopped_tooltip: optional tooltip to show if "GND-ENG STOPPED" is active
 *       gnd_eng_stopped_tooltip_pos: optional position of tooltip: "TOP" (= default), "LEFT", "RIGHT", "BOTTOM"
 *     },
 *     B: {
 *       ...
 *     }
 *   },
 * }
 */
export const CAUTION_LIGHTS = {
  cols: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"],
  rows: [
    /** ROW 1 */
    {
      A: {
        name: "PITCH TRIM",
        file: "./apps/main/config/dashboard/desc/a1.html",
        buttons: [
          {
            name: "ELEVATOR SYSTEM",
            mode: "INTERNAL",
            path: "/flight-control/elevator-system",
          },
          {
            name: "UNITS",
            mode: "POPUP",
            path: "/units",
            file: "/units/caut_lt/a1_units.html",
          },
        ],
        highlights: ["flt_cont_systems"],
        show_eng_apu_ecs_search: true,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      B: {
        name: "L AC BUS",
        file: "./apps/main/config/dashboard/desc/b1.html",
        buttons: [
          {
            name: "AC SYSTEM",
            mode: "INTERNAL",
            path: "/ele/ac-system",
          },
        ],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      C: {
        name: "PITOT HEAT STBY",
        file: "./apps/main/config/dashboard/desc/c1.html",
        buttons: [
          {
            name: "PITOT SYSTEM",
            mode: "INTERNAL",
            path: "/deicing/pitot-static",
          },
        ],
        highlights: ["deice_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      D: {
        name: "ICE DETECT FAIL",
        file: "./apps/main/config/dashboard/desc/d1.html",
        buttons: [
					{
            name: "ICE DET SYSTEM",
            mode: "INTERNAL",
            path: "/deicing/ice-detect",
          },
				],
        highlights: ["deice_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      E: {
        name: "FLT COMPT DUCT HOT",
        file: "./apps/main/config/dashboard/desc/e1.html",
        buttons: [
					{
            name: "BLEED SYSTEM",
            mode: "INTERNAL",
            path: "/bleed",
          },
				],
        highlights: ["bleed"],
        show_eng_apu_ecs_search: true,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      F: {
        name: "#1 HYD ISO VLV",
        file: "./apps/main/config/dashboard/desc/f1.html",
        buttons: [
					{
            name: "HYD 1 SYSTEM",
            mode: "INTERNAL",
            path: "/hyd/system-1",
          },
					{
            name: "SCHEMATIC",
            mode: "POPUP",
            path: "./units/hyd/desc",
						file: "/units/hyd/desc/scem_hyd_isov.html",
          },
				],
        highlights: ["hyd_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      G: {
        name: "#1 PEC",
        file: "./apps/main/config/dashboard/desc/g1.html",
        buttons: [
					{
            name: "ARCDU",
            mode: "INTERNAL",
            path: "/arcdu",
          },
				],
        highlights: ["engine"],
        show_eng_apu_ecs_search: true,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      H: {
        name: "#1 ENG FUEL PRESS",
        file: "./apps/main/config/dashboard/desc/h1.html",
        buttons: [],
        highlights: ["fuel_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      I: {
        name: "#2 ENG FUEL PRESS",
        file: "./apps/main/config/dashboard/desc/i1.html",
        buttons: [],
        highlights: ["fuel_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      J: {
        name: "#2 PEC",
        file: "./apps/main/config/dashboard/desc/j1.html",
        buttons: [
					{
            name: "ARCDU",
            mode: "INTERNAL",
            path: "/arcdu",
          },
				],
        highlights: ["engine"],
        show_eng_apu_ecs_search: true,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      K: {
        name: "ROLL SPLR INBO GND",
        file: "./apps/main/config/dashboard/desc/k1.html",
        buttons: [
					{
            name: "SPOILER SYSTEM",
            mode: "INTERNAL",
            path: "/flight-control/spoiler-system",
          },
				],
        highlights: ["flt_cont_systems", "hyd_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: "FLIGHT/TAXI SWITCH IS IN THE FLIGHT POSITION",
        gnd_eng_stopped_tooltip_pos: "TOP",
      },
      L: {
        name: "ROLL SPLR OUTBO GND",
        file: "./apps/main/config/dashboard/desc/l1.html",
        buttons: [
					{
            name: "SPOILER SYSTEM",
            mode: "INTERNAL",
            path: "/flight-control/spoiler-system",
          },
				],
        highlights: ["flt_cont_systems", "hyd_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      M: {
        name: "#1 STALL SYST FAIL",
        file: "./apps/main/config/dashboard/desc/m1.html",
        buttons: [
					{
            name: "STALL SYSTEM",
            mode: "INTERNAL",
            path: "/flight-control/stall-system",
          },
				],
        highlights: ["flt_cont_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      N: {
        name: "FLIGHT DATA RECORDER",
        file: "./apps/main/config/dashboard/desc/n1.html",
        buttons: [],
        highlights: [],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: "FDR OFF",
        gnd_eng_stopped_tooltip_pos: "TOP",
      },
    },

    /** ROW 2 */
    {
      A: {
        name: "ELEVATOR FEEL",
        file: "./apps/main/config/dashboard/desc/a2.html",
        buttons: [
					{
            name: "SYSTEM",
            mode: "INTERNAL",
            path: "/flight-control/elevator-system",
          },
				],
        highlights: ["flt_cont_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      B: {
        name: "R AC BUS",
        file: "./apps/main/config/dashboard/desc/b2.html",
        buttons: [
					{
            name: "AC SYSTEM",
            mode: "INTERNAL",
            path: "/ele/ac-system",
          },
				],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      C: {
        name: "PITOT HEAT 1",
        file: "./apps/main/config/dashboard/desc/c2.html",
        buttons: [
					{
            name: "PITOT SYSTEM",
            mode: "INTERNAL",
            path: "/deicing/pitot-static",
          },
				],
        highlights: ["deice_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      D: {
        name: "PITOT HEAT 2",
        file: "./apps/main/config/dashboard/desc/d2.html",
        buttons: [
					{
            name: "PITOT SYSTEM",
            mode: "INTERNAL",
            path: "/deicing/pitot-static",
          },
				],
        highlights: ["deice_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      E: {
        name: "CABIN DUCT HOT",
        file: "./apps/main/config/dashboard/desc/e2.html",
        buttons: [
					{
            name: "BLEED SYSTEM",
            mode: "INTERNAL",
            path: "/bleed",
          },
				],
        highlights: ["bleed"],
        show_eng_apu_ecs_search: true,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      F: {
        name: "#2 HYD ISO VLV",
        file: "./apps/main/config/dashboard/desc/f2.html",
        buttons: [
					{
            name: "HYD 2 SYSTEM",
            mode: "INTERNAL",
            path: "/hyd/system-2",
          },
					{
            name: "SCHEMATIC",
            mode: "POPUP",
            path: "./units/hyd/desc",
						file: "/units/hyd/desc/scem_hyd_isov.html",
          },
				],
        highlights: ["hyd_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      G: {
        name: "#1 BLEED HOT",
        file: "./apps/main/config/dashboard/desc/g2.html",
        buttons: [
					{
            name: "BLEED SYSTEM",
            mode: "INTERNAL",
            path: "/bleed",
          },
				],
        highlights: ["bleed"],
        show_eng_apu_ecs_search: true,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      H: {
        name: "#1 ENG HYD PUMP",
        file: "./apps/main/config/dashboard/desc/h2.html",
        buttons: [
					{
            name: "#1 HYD SYSTEM",
            mode: "INTERNAL",
            path: "/hyd/system-1",
          },
				],
        highlights: ["hyd_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      I: {
        name: "#2 ENG HYD PUMP",
        file: "./apps/main/config/dashboard/desc/i2.html",
        buttons: [
					{
            name: "#2 HYD SYSTEM",
            mode: "INTERNAL",
            path: "/hyd/system-1",
          },
				],
        highlights: ["hyd_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      J: {
        name: "#2 BLEED HOT",
        file: "./apps/main/config/dashboard/desc/j2.html",
        buttons: [
					{
            name: "BLEED SYSTEM",
            mode: "INTERNAL",
            path: "/bleed",
          },
				],
        highlights: ["bleed"],
        show_eng_apu_ecs_search: true,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      K: {
        name: "#1 STBY HYD PUMP HOT",
        file: "./apps/main/config/dashboard/desc/k2.html",
        buttons: [
					{
            name: "HYD SYSTEM #1",
            mode: "INTERNAL",
            path: "/hyd/system-1",
          },
				],
        highlights: ["hyd_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      L: {
        name: "SPLR OUTBO",
        file: "./apps/main/config/dashboard/desc/l2.html",
        buttons: [
					{
            name: "SPOILER SYSTEM",
            mode: "INTERNAL",
            path: "/flight-control/spoiler-system",
          },
				],
        highlights: ["flt_cont_systems", "hyd_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      M: {
        name: "#2 STALL SYS FAIL",
        file: "./apps/main/config/dashboard/desc/m2.html",
        buttons: [
					{
            name: "STALL SYSTEM",
            mode: "INTERNAL",
            path: "/flight-control/stall-system",
          },
				],
        highlights: ["flt_cont_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      N: {
        name: "GPWS",
        file: "./apps/main/config/dashboard/desc/n2.html",
        buttons: [],
        highlights: [],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
    },

    /** ROW 3 */
    {
      A: {
        name: "ELEVATOR ASYMETRY",
        file: "./apps/main/config/dashboard/desc/a3.html",
        buttons: [
					{
            name: "ELEVATOR",
            mode: "INTERNAL",
            path: "/flight-control/elevator-system",
          },
				],
        highlights: ["flt_cont_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      B: {
        name: "DC BUS",
        file: "./apps/main/config/dashboard/desc/b3.html",
        buttons: [
					{
            name: "DC SYSTEM",
            mode: "INTERNAL",
            path: "/ele/dc-system",
          },
				],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      C: {
        name: "ENG ADPT HEAT 1",
        file: "./apps/main/config/dashboard/desc/c3.html",
        buttons: [
					{
            name: "INTAKE SYSTEM",
            mode: "INTERNAL",
            path: "/deicing/intake",
          },
					{
            name: "UNITS",
            mode: "POPUP",
            path: "/units",
            file: "/units/caut_lt/c3_d3_units.html",
          },
				],
        highlights: ["deice_systems", "engine"],
        show_eng_apu_ecs_search: true,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      D: {
        name: "ENG ADPT HEAT 2",
        file: "./apps/main/config/dashboard/desc/d3.html",
        buttons: [
					{
            name: "INTAKE SYSTEM",
            mode: "INTERNAL",
            path: "/deicing/intake",
          },
					{
            name: "UNITS",
            mode: "POPUP",
            path: "/units",
            file: "/units/caut_lt/c3_d3_units.html",
          },
				],
        highlights: ["deice_systems", "engine"],
        show_eng_apu_ecs_search: true,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      E: {
        name: "CABIN PACK HOT",
        file: "./apps/main/config/dashboard/desc/e3.html",
        buttons: [
					{
            name: "BLEED SYSTEM",
            mode: "INTERNAL",
            path: "/bleed",
          },
				],
        highlights: ["bleed"],
        show_eng_apu_ecs_search: true,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      F: {
        name: "STBY BATTERY",
        file: "./apps/main/config/dashboard/desc/f3.html",
        buttons: [
					{
            name: "DC SYSTEM",
            mode: "INTERNAL",
            path: "/ele/dc-system",
          },
				],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      G: {
        name: "#1 DC GEN HOT",
        file: "./apps/main/config/dashboard/desc/g3.html",
        buttons: [],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      H: {
        name: "#1 DC GEN",
        file: "./apps/main/config/dashboard/desc/h3.html",
        buttons: [
					{
            name: "DC SYSTEM",
            mode: "INTERNAL",
            path: "/ele/dc-system", 
          },
				],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      I: {
        name: "#2 DC GEN",
        file: "./apps/main/config/dashboard/desc/i3.html",
        buttons: [
					{
            name: "DC SYSTEM",
            mode: "INTERNAL",
            path: "/ele/dc-system",
          },
				],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      J: {
        name: "#2 DC GEN HOT",
        file: "./apps/main/config/dashboard/desc/j3.html",
        buttons: [],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      K: {
        name: "ROLL SPLR INBO HYD",
        file: "./apps/main/config/dashboard/desc/k3.html",
        buttons: [
					{
            name: "SPOILER SYSTEM",
            mode: "INTERNAL",
            path: "/flight-control/spoiler-system",
          },
				],
        highlights: ["flt_cont_systems", "hyd_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      L: {
        name: "ROLL SPLR OUTBO HYD",
        file: "./apps/main/config/dashboard/desc/l3.html",
        buttons: [
					{
            name: "SPOILER SYSTEM",
            mode: "INTERNAL",
            path: "/flight-control/spoiler-system",
          },
				],
        highlights: ["flt_cont_systems", "hyd_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      M: {
        name: "PUSHER SYST FAIL",
        file: "./apps/main/config/dashboard/desc/m3.html",
        buttons: [
					{
            name: "STALL SYSTEM",
            mode: "INTERNAL",
            path: "/flight-control/stall-system",
          },
				],
        highlights: ["flt_cont_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      N: {
        name: "PARKING BRAKE",
        file: "./apps/main/config/dashboard/desc/n3.html",
        buttons: [
					{
            name: "PARKING BRAKE SYSTEM",
            mode: "INTERNAL",
            path: "/gear/parking-brake",
          },
				],
        highlights: ["ldg_gear_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: "EMERGENCY BRAKE IS APPLIED",
        gnd_eng_stopped_tooltip_pos: "BOTTOM",
      },
    },

    /** ROW 4 */
    {
      A: {
        name: "ELEVATOR PRESS",
        file: "./apps/main/config/dashboard/desc/a4.html",
        buttons: [
					{
            name: "ELEVATOR",
            mode: "INTERNAL",
            path: "/flight-control/elevator-system",
          },
				],
        highlights: ["flt_cont_systems", "hyd_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      B: {
        name: "L TRU",
        file: "./apps/main/config/dashboard/desc/b4.html",
        buttons: [
					{
            name: "DC SYSTEM",
            mode: "INTERNAL",
            path: "/ele/dc-system",
          },
				],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      C: {
        name: "WSHLD CTRL",
        file: "./apps/main/config/dashboard/desc/c4.html",
        buttons: [
					{
            name: "WSHLD SYSTEM",
            mode: "INTERNAL",
            path: "/deicing/windows",
          },
				],
        highlights: ["deice_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      D: {
        name: "PROP DEICE",
        file: "./apps/main/config/dashboard/desc/d4.html",
        buttons: [
					{
            name: "PROP DEICE SYSTEM",
            mode: "INTERNAL",
            path: "/deicing/prop",
          },
					{
            name: "UNITS",
            mode: "POPUP",
            path: "/units",
            file: "/units/caut_lt/d4_units.html",
          },
				],
        highlights: ["deice_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      E: {
        name: "FLT COMP PACK HOT",
        file: "./apps/main/config/dashboard/desc/e4.html",
        buttons: [
					{
            name: "BLEED SYSTEM",
            mode: "INTERNAL",
            path: "/bleed",
          },
				],
        highlights: ["bleed"],
        show_eng_apu_ecs_search: true,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      F: {
        name: "MAIN BATTERY",
        file: "./apps/main/config/dashboard/desc/f4.html",
        buttons: [
					{
            name: "DC SYSTEM",
            mode: "INTERNAL",
            path: "/ele/dc-system",
          },
				],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      G: {
        name: "#1 AC GEN HOT",
        file: "./apps/main/config/dashboard/desc/g4.html",
        buttons: [],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      H: {
        name: "#1 AC GEN",
        file: "./apps/main/config/dashboard/desc/h4.html",
        buttons: [
					{
            name: "AC SYSTEM",
            mode: "INTERNAL",
            path: "/ele/ac-system",
          },
				],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      I: {
        name: "#2 AC GEN",
        file: "./apps/main/config/dashboard/desc/i4.html",
        buttons: [
					{
            name: "AC SYSTEM",
            mode: "INTERNAL",
            path: "/ele/ac-system",
          },
				],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      J: {
        name: "#2 AC GEN HOT",
        file: "./apps/main/config/dashboard/desc/j4.html",
        buttons: [],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      K: {
        name: "#1 RUD HYD",
        file: "./apps/main/config/dashboard/desc/k4.html",
        buttons: [
					{
            name: "RUDDER SYSTEM",
            mode: "INTERNAL",
            path: "/flight-control/rudder-system",
          },
				],
        highlights: ["flt_cont_systems", "hyd_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      L: {
        name: "#2 RUD HYD",
        file: "./apps/main/config/dashboard/desc/l4.html",
        buttons: [
					{
            name: "RUDDER SYSTEM",
            mode: "INTERNAL",
            path: "/flight-control/rudder-system",
          },
				],
        highlights: ["flt_cont_systems", "hyd_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      M: {
        name: "INBD ANTISKID",
        file: "./apps/main/config/dashboard/desc/m4.html",
        buttons: [
					{
            name: "ANTISKID SYSTEM",
            mode: "INTERNAL",
            path: "/gear/anti-skid",
          },
				],
        highlights: ["ldg_gear_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      N: {
        name: "OUTB ANTISKID",
        file: "./apps/main/config/dashboard/desc/n4.html",
        buttons: [
					{
            name: "ANTISKID SYSTEM",
            mode: "INTERNAL",
            path: "/gear/anti-skid",
          },
				],
        highlights: ["ldg_gear_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
    },

    /** ROW 5 */
    {
      A: {
        name: "#3 STBY HYD PUMP",
        file: "./apps/main/config/dashboard/desc/a5.html",
        buttons: [
					{
            name: "HYD #3 SYSTEM",
            mode: "INTERNAL",
            path: "/hyd/system-3",
          },
					{
            name: "UNITS",
            mode: "POPUP",
            path: "/units",
            file: "/units/caut_lt/a5_units.html",
          },
				],
        highlights: ["flt_cont_systems", "hyd_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      B: {
        name: "R TRU",
        file: "./apps/main/config/dashboard/desc/b5.html",
        buttons: [
					{
            name: "DC SYSTEM",
            mode: "INTERNAL",
            path: "/ele/dc-system",
          },
				],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      C: {
        name: "WSHLD HOT",
        file: "./apps/main/config/dashboard/desc/c5.html",
        buttons: [
					{
            name: "WSHLD SYSTEM",
            mode: "INTERNAL",
            path: "/deicing/windows",
          },
				],
        highlights: ["deice_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      D: {
        name: "DEICE TIMER",
        file: "./apps/main/config/dashboard/desc/d5.html",
        buttons: [
					{
            name: "PITOT STATIC SYSTEM",
            mode: "INTERNAL",
            path: "/deicing/pitot-static",
          },
				],
        highlights: ["deice_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      E: {
        name: "L TRU HOT",
        file: "./apps/main/config/dashboard/desc/e5.html",
        buttons: [],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      F: {
        name: "AUX BATTERY",
        file: "./apps/main/config/dashboard/desc/f5.html",
        buttons: [
					{
            name: "DC SYSTEM",
            mode: "INTERNAL",
            path: "/ele/dc-system",
          },
				],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      G: {
        name: "#1 HYD FLUID HOT",
        file: "./apps/main/config/dashboard/desc/g5.html",
        buttons: [
					{
            name: "HYD 1 SYSTEM",
            mode: "INTERNAL",
            path: "/hyd/system-1",
          },
					{
            name: "SCHEMATIC",
            mode: "POPUP",
            path: "/units/hyd/desc",
						file: "/units/hyd/desc/scem_hyd_res.html",
          },
				],
        highlights: ["hyd_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      H: {
        name: "#1 ENG FADEC",
        file: "./apps/main/config/dashboard/desc/h5.html",
        buttons: [
					{
            name: "ARCDU",
            mode: "INTERNAL",
            path: "/arcdu",
          },
				],
        highlights: ["engine"],
        show_eng_apu_ecs_search: true,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      I: {
        name: "#2 ENG FADEC",
        file: "./apps/main/config/dashboard/desc/i5.html",
        buttons: [
					{
            name: "ARCDU",
            mode: "INTERNAL",
            path: "/arcdu",
          },
				],
        highlights: ["engine"],
        show_eng_apu_ecs_search: true,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      J: {
        name: "#2 HYD FLUID HOT",
        file: "./apps/main/config/dashboard/desc/j5.html",
        buttons: [
					{
            name: "HYD 2 SYSTEM",
            mode: "INTERNAL",
            path: "/hyd/system-2",
          },
					{
            name: "SCHEMATIC",
            mode: "POPUP",
            path: "/units/hyd/desc",
						file: "/units/hyd/desc/scem_hyd_res.html",
          },
				],
        highlights: ["hyd_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      K: {
        name: "RUD CTRL",
        file: "./apps/main/config/dashboard/desc/k5.html",
        buttons: [
					{
            name: "RUDDER SYSTEM",
            mode: "INTERNAL",
            path: "/flight-control/rudder-system",
          },
				],
        highlights: ["flt_cont_systems", "hyd_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      L: {
        name: "FLAP DRIVE",
        file: "./apps/main/config/dashboard/desc/l5.html",
        buttons: [
					{
            name: "FLAP SYSTEM",
            mode: "INTERNAL",
            path: "/flight-control/flap-system",
          },
				],
        highlights: ["flt_cont_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      M: {
        name: "LDG GEAR INOP",
        file: "./apps/main/config/dashboard/desc/m5.html",
        buttons: [
					{
            name: "PSEU",
            mode: "INTERNAL",
            path: "/pseu",
          },
				],
        highlights: ["ldg_gear_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      N: {
        name: "WT ON WHEELS",
        file: "./apps/main/config/dashboard/desc/n5.html",
        buttons: [
					{
            name: "GEAR WNG SYSTEM",
            mode: "INTERNAL",
            path: "/gear/position-warning",
          },
					{
            name: "PSEU",
            mode: "INTERNAL",
            path: "/pseu",
          },
				],
        highlights: ["ldg_gear_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
    },

    /** ROW 6 */
    {
      A: {
        name: "EMER LTS DISARMED",
        file: "./apps/main/config/dashboard/desc/a6.html",
        buttons: [],
        highlights: [],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: "EMER LT DISARMED",
        gnd_eng_stopped_tooltip_pos: "TOP",
      },
      B: {
        name: "INTERNAL DOORS",
        file: "./apps/main/config/dashboard/desc/b6.html",
        buttons: [],
        highlights: [],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: "INTERNAL BAGG DOOR OPEN",
        gnd_eng_stopped_tooltip_pos: "BOTTOM",
      },
      C: {
        name: "SIDE WDO HOT",
        file: "./apps/main/config/dashboard/desc/c6.html",
        buttons: [
					{
            name: "WSHLD SYSTEM",
            mode: "INTERNAL",
            path: "/deicing/windows",
          },
				],
        highlights: ["deice_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      D: {
        name: "DEICE PRESS",
        file: "./apps/main/config/dashboard/desc/d6.html",
        buttons: [
					{
            name: "P3 SYSTEM",
            mode: "INTERNAL",
            path: "/deicing/p3-switching",
          },
					{
            name: "DEICE BOOT SYSTEM",
            mode: "INTERNAL",
            path: "/deicing/boots",
          },
				],
        highlights: ["deice_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      E: {
        name: "R TRU HOT",
        file: "./apps/main/config/dashboard/desc/e6.html",
        buttons: [],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      F: {
        name: "AVIONICS",
        file: "./apps/main/config/dashboard/desc/f6.html",
        buttons: [],
        highlights: ["elect_systems"],
				show_display_fault_msg: true,
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      G: {
        name: "#1 FUEL FLTR BYPASS",
        file: "./apps/main/config/dashboard/desc/g6.html",
        buttons: [],
        highlights: ["fuel_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      H: {
        name: "#1 TANK FUEL LOW",
        file: "./apps/main/config/dashboard/desc/h6.html",
        buttons: [
					{
            name: "FUEL SYSTEM",
            mode: "INTERNAL",
            path: "/fuel",
          },
				],
        highlights: ["fuel_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      I: {
        name: "#2 TANK FUEL LOW",
        file: "./apps/main/config/dashboard/desc/i6.html",
        buttons: [
					{
            name: "FUEL SYSTEM",
            mode: "INTERNAL",
            path: "/fuel",
          },
				],
        highlights: ["fuel_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      J: {
        name: "#2 FUEL FLTR BYPASS",
        file: "./apps/main/config/dashboard/desc/j6.html",
        buttons: [],
        highlights: ["fuel_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      K: {
        name: "APU",
        file: "./apps/main/config/dashboard/desc/k6.html",
        buttons: [
					{
            name: "APU SYSTEM",
            mode: "INTERNAL",
            path: "/engine/apu",
          },
				],
        highlights: [],
        show_eng_apu_ecs_search: true,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      L: {
        name: "FLAP POWER",
        file: "./apps/main/config/dashboard/desc/l6.html",
        buttons: [
					{
            name: "FLAP SYSTEM",
            mode: "INTERNAL",
            path: "/flight-control/flap-system",
          },
				],
        highlights: ["flt_cont_systems", "hyd_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      M: {
        name: "NOSE STEERING",
        file: "./apps/main/config/dashboard/desc/m6.html",
        buttons: [
					{
            name: "STEERING SYSTEM",
            mode: "INTERNAL",
            path: "/gear/nosewheel-steering",
          },
				],
        highlights: ["ldg_gear_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      N: {
        name: "FUELING ON",
        file: "./apps/main/config/dashboard/desc/n6.html",
        buttons: [],
        highlights: ["fuel_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
    },

    /** ROW 7 */
    {
      A: {
        name: "CABIN PRESS",
        file: "./apps/main/config/dashboard/desc/a7.html",
        buttons: [
					{
            name: "BLEED SYSTEM",
            mode: "INTERNAL",
            path: "/bleed",
          },
					{
            name: "CABIN PX SYSTEM",
            mode: "INTERNAL",
            path: "/bleed/cabin-pressurization",
          },
				],
        highlights: ["bleed"],
        show_eng_apu_ecs_search: true,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      B: {
        name: "CHECK FIRE DET",
        file: "./apps/main/config/dashboard/desc/b7.html",
        buttons: [
					{
            name: "FIRE PROT. SYS",
            mode: "INTERNAL",
            path: "/fire-protection",
          },
				],
        highlights: [],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      C: {
        name: "SMOKE",
        file: "./apps/main/config/dashboard/desc/c7.html",
        buttons: [],
        highlights: [],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      D: {
        name: "TOUCHED RUNAWAY",
        file: "./apps/main/config/dashboard/desc/d7.html",
        buttons: [],
        highlights: [],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      E: {
        name: "___",
        file: null,
        buttons: [],
        highlights: [],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      F: {
        name: "___",
        file: null,
        buttons: [],
        highlights: [],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      G: {
        name: "#1 ENG OIL PRESS",
        file: "./apps/main/config/dashboard/desc/g7.html",
        buttons: [],
        highlights: ["engine"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      H: {
        name: "#1 ENG FADEC FAIL",
        file: "./apps/main/config/dashboard/desc/h7.html",
        buttons: [
					{
            name: "ARCDU",
            mode: "INTERNAL",
            path: "/arcdu",
          },
				],
        highlights: ["engine"],
        show_eng_apu_ecs_search: true,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      I: {
        name: "#2 ENG FADEC FAIL",
        file: "./apps/main/config/dashboard/desc/i7.html",
        buttons: [
					{
            name: "ARCDU",
            mode: "INTERNAL",
            path: "/arcdu",
          },	
				],
        highlights: ["engine"],
        show_eng_apu_ecs_search: true,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      J: {
        name: "#2 ENG OIL PRESS",
        file: "./apps/main/config/dashboard/desc/j7.html",
        buttons: [],
        highlights: ["engine"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      K: {
        name: "STBY BATT HOT",
        file: "./apps/main/config/dashboard/desc/k7.html",
        buttons: [
					{
            name: "DC SYSTEM",
            mode: "INTERNAL",
            path: "/ele/dc-system",
          },
				],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      L: {
        name: "AUX BATT HOT",
        file: "./apps/main/config/dashboard/desc/l7.html",
        buttons: [
					{
            name: "DC SYSTEM",
            mode: "INTERNAL",
            path: "/ele/dc-system",
          },
				],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      M: {
        name: "MAIN BATT HOT",
        file: "./apps/main/config/dashboard/desc/m7.html",
        buttons: [
					{
            name: "DC SYSTEM",
            mode: "INTERNAL",
            path: "/ele/dc-system",
          },
				],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: false,
        gnd_eng_stopped_tooltip: null,
        gnd_eng_stopped_tooltip_pos: null,
      },
      N: {
        name: "FUSELAGE DOORS",
        file: "./apps/main/config/dashboard/desc/n7.html",
        buttons: [
					{
            name: "DOOR SYSTEM",
            mode: "INTERNAL",
            path: "/door/door-sensors",
          },
					{
            name: "PSEU",
            mode: "INTERNAL",
            path: "/pseu",
          },
				],
        highlights: ["elect_systems"],
        show_eng_apu_ecs_search: false,
        gnd_eng_stopped: true,
        gnd_eng_stopped_tooltip: "ONE OR MORE FUSELAGE DOORS ARE OPEN",
        gnd_eng_stopped_tooltip_pos: "BOTTOM",
      },
    },
  ],
};

/**
 * DASHBOARD HIGHLIGHTS:
 *
 * {
 *   nodes: [
 *    {
 *      id: unique identifier used in `CAUTION_LIGHTS`,
 *      name: name of this highlightable section,
 *    },
 *   ]
 *   config: an array of configuration rows,
 * }
 */
export const HIGHLIGHTS = {
  nodes: [
    {
      id: "bleed",
      name: "BLEED",
    },
    {
      id: "deice_systems",
      name: "DEICE SYSTEMS",
    },
    {
      id: "flt_cont_systems",
      name: "FLT CONT SYSTEMS",
    },
    {
      id: "hyd_systems",
      name: "HYD SYSTEMS",
    },
    {
      id: "elect_systems",
      name: "ELECT SYSTEMS",
    },
    {
      id: "fuel_systems",
      name: "FUEL SYSTEMS",
    },
    {
      id: "ldg_gear_systems",
      name: "LDG GEAR SYSTEMS",
    },
    {
      id: "engine",
      name: "ENGINE",
    },
  ],
  config: [
    "ALL BATT OFF",
    "ENG NOT RUNNING",
    "NO EXTERN HYD PWR",
    "EMERG LT OFF",
    "PDR OFF",
    "PARK BREAK ON",
    "INT DOOR OPEN",
    "FLT/TAXI SW IN FLT POS.",
  ],
};

/**
 * DASHBOARD OBSERVED FAULTS:
 *
 * [
 *   {
 *     name: name of this fault,
 *     desc: description of this fault,
 *     code: identifier of this fault (f.e. 'FIM 23-21-00-810-801'),
 *   }
 * ]
 */
export const OBSERVED_FAULTS = [
  { name: "ACARS", desc: "The unit does not operate", code: "FIM 23-21-00-810-801" },
  { name: "ACARS", desc: "The unit does not show a status message", code: "FIM 23-21-00-810-802" },
  { name: "ACARS", desc: "The downlink function is not available", code: "FIM 23-21-00-810-804" },
  { name: "ACARS", desc: "The uplink function is not available", code: "FIM 23-21-00-810-803" },
  {
    name: null,
    desc: "The AC EXT POWER ON message does not come into view",
    code: "FIM 24-41-00-810-801",
  },
  {
    name: null,
    desc: "No aural and visual warnings when airspeed exceeds VMO",
    code: "FIM 34-11-00-810-812",
  },
  { name: "No overspeed warning", desc: "FIM during ADC TEST", code: "FIM 34-60-00-810-801" },
  {
    name: "Advisory Lights Panel aft",
    desc: "light for the call indication that is continuously red",
    code: "FIM 23-31-31-810-815",
  },
  {
    name: "Advisory Lights Panel aft",
    desc: "light for the lavatory call indication that is continuously amber",
    code: "FIM 23-31-31-810-819",
  },
  {
    name: "Advisory Lights Panel aft",
    desc: "light for the lavatory smoke indication that is continuously red",
    code: "FIM 23-31-31-810-820",
  },
  {
    name: "Advisory Lights Panel aft",
    desc: "light for the PSU call indication that is continuously yellow",
    code: "FIM 23-31-31-810-818",
  },
  {
    name: "Advisory Lights Panel aft",
    desc: "light for the emergency indication that flashes red",
    code: "FIM 23-31-31-810-816",
  },
  {
    name: "Advisory Lights Panel aft",
    desc: "light for the oxygen indication that flashes green",
    code: "FIM 23-31-31-810-821",
  },
  {
    name: "Advisory Lights Panel aft",
    desc: "PA light that is continuously green",
    code: "FIM 23-31-31-810-817",
  },
  {
    name: "Advisory Lights Panel fwd",
    desc: "light for the call indication that is continuously red",
    code: "FIM 23-31-31-810-801",
  },
  {
    name: "Advisory Lights Panel fwd",
    desc: "light for the lavatory call indication that is continuously amber",
    code: "FIM 23-31-31-810-805",
  },
  {
    name: "Advisory Lights Panel fwd",
    desc: "light for the lavatory smoke indication that is continuously red",
    code: "FIM 23-31-31-810-806",
  },
  {
    name: "Advisory Lights Panel fwd",
    desc: "light for the PSU call indication that is continuously yellow",
    code: "FIM 23-31-31-810-804",
  },
  {
    name: "Advisory Lights Panel fwd",
    desc: "light for the emergency indication that flashes red",
    code: "FIM 23-31-31-810-802",
  },
  {
    name: "Advisory Lights Panel fwd",
    desc: "light for the oxygen indication that flashes green",
    code: "FIM 23-31-31-810-807",
  },
  {
    name: "Advisory Lights Panel fwd",
    desc: "light for the PA indication that is continuously green",
    code: "FIM 23-31-31-810-803",
  },
  {
    name: "Advisory Lights Panel middle",
    desc: "light for the call indication that is continuously red",
    code: "FIM 23-31-31-810-808",
  },
  {
    name: "Advisory Lights Panel middle",
    desc: "light for the lavatory call indication that is continuously amber",
    code: "FIM 23-31-31-810-812",
  },
  {
    name: "Advisory Lights Panel middle",
    desc: "light for the lavatory smoke indication that is continuously red",
    code: "FIM 23-31-31-810-813",
  },
  {
    name: "Advisory Lights Panel middle",
    desc: "light for the PSU call indication that is continuously yellow",
    code: "FIM 23-31-31-810-811",
  },
  {
    name: "Advisory Lights Panel middle",
    desc: "light for the emergency indication that flashes red",
    code: "FIM 23-31-31-810-809",
  },
  {
    name: "Advisory Lights Panel middle",
    desc: "light for the oxygen indication that flashes green",
    code: "FIM 23-31-31-810-814",
  },
  {
    name: "Advisory Lights Panel middle",
    desc: "light for the PA indication that is continuously green",
    code: "FIM 23-31-31-810-810",
  },
  { name: "AHCP1", desc: "light in the ATT/HDG ALIGN", code: "FIM 34-21-16-810-801" },
  { name: "AHCP1", desc: "light in the DG", code: "FIM 34-21-16-810-803" },
  { name: "AHCP1", desc: "BASIC light", code: "FIM 34-21-16-810-805" },
  { name: "AHCP1", desc: "SLAVE light", code: "FIM 34-21-16-810-809" },
  { name: "AHCP2", desc: "light in the ATT/HDG ALIGN", code: "FIM 34-21-16-810-802" },
  { name: "AHCP2", desc: "light in the DG", code: "FIM 34-21-16-810-804" },
  { name: "AHCP2", desc: "BASIC light", code: "FIM 34-21-16-810-806" },
  { name: "AHCP2", desc: "SLAVE light", code: "FIM 34-21-16-810-810" },
  {
    name: null,
    desc: "APU light CAWP does not come when there is a malfunction of the APU",
    code: "FIM 49-70-00-810-818",
  },
  {
    name: null,
    desc: "APU light CAWP does not come on when the FIRE light on the APU CONTROL Panel comes on",
    code: "FIM 49-70-00-810-819",
  },
  {
    name: null,
    desc:
      "APU light on the CAWP does not come on when the FIRE light on the APU CONTROL Panel comes on",
    code: "FIM 49-70-00-810-819",
  },
  {
    name: null,
    desc: "APU FAIL (ACP) light in the PWR does not come on when there is a malfunction of the APU",
    code: "FIM 49-70-00-810-816",
  },
  {
    name: null,
    desc:
      "FAIL light in the PWR does not come on when the FIRE light in the APU of the fire protection Panelcomes on",
    code: "FIM 49-70-00-810-817",
  },
  { name: null, desc: "APU GEN OHT light (APU CONTROL Panel)", code: "FIM 24-33-01-810-803" },
  { name: null, desc: "ON light in the GEN (APU CONTROL Panel)", code: "FIM 24-33-00-810-803" },
  {
    name: null,
    desc: "OPEN light in the BL AIR (APU CONTROL Panel)",
    code: "FIM 49-50-00-810-806",
  },
  { name: null, desc: "RUN light in the PWR (APU CONTROL Panel)", code: "FIM 49-70-00-810-815" },
  {
    name: null,
    desc: "STARTER light in the START (APU CONTROL Panel)",
    code: "FIM 49-40-00-810-808",
  },
  { name: null, desc: "WARN light in the GEN (APU CONTROL Panel)", code: "FIM 24-33-00-810-804" },
  { name: "ARCDU1", desc: "CALL light", code: "FIM 23-31-41-810-807" },
  { name: "ARCDU1", desc: "EMER light", code: "FIM 23-31-41-810-809" },
  { name: "ARCDU1", desc: "PA light", code: "FIM 23-31-41-810-811" },
  {
    name: "ARCDU1",
    desc: "The audio control potentiometers do not operate correctly",
    code: "FIM 23-81-01-810-807",
  },
  {
    name: "ARCDU1",
    desc:
      "with the transmitter select switch in the AUX1 position- there is no TX ind in the AUX1 onpage 2",
    code: "FIM 23-51-01-810-807",
  },
  {
    name: "ARCDU1",
    desc:
      "with the transmitter select switch in the AUX2 position- there is no TX ind in the AUX2 onpage 2",
    code: "FIM 23-51-01-810-808",
  },
  { name: "ARCDU1", desc: "CALL mode, no sidetone", code: "FIM 23-51-01-810-811" },
  { name: "ARCDU1", desc: "EMER mode there is no sidetone", code: "FIM 23-51-01-810-812" },
  {
    name: "ARCDU1",
    desc: "HF mode, the HF area does not show the TX indication",
    code: "FIM 23-51-01-810-806",
  },
  {
    name: "ARCDU1",
    desc: "PA mode, the INT area does not show the TX indication",
    code: "FIM 23-51-01-810-810",
  },
  {
    name: "ARCDU1 SERV/INT",
    desc: "SERV/INT mode, the INT area does not show the TX indication",
    code: "FIM 23-51-01-810-809",
  },
  {
    name: "ARCDU1",
    desc: "VHF1 mode, the VHF1 area does not show the TX indication",
    code: "FIM 23-51-01-810-804",
  },
  {
    name: "ARCDU1",
    desc: "VHF2 mode, the VHF2 area does not show the TX indication",
    code: "FIM 23-51-01-810-805",
  },
  { name: null, desc: "ARCDU2 CALL light", code: "FIM 23-31-41-810-808" },
  { name: null, desc: "ARCDU2 EMER light", code: "FIM 23-31-41-810-810" },
  { name: "ARCDU2", desc: "PA light", code: "FIM 23-31-41-810-812" },
  {
    name: "ARCDU2",
    desc: "The audio control potentiometers do not operate correctly",
    code: "FIM 23-81-01-810-808",
  },
  {
    name: "ARCDU2",
    desc:
      "With the transmitter select sw in the AUX1 position- there is no TX ind in the AUX1 on page 2",
    code: "FIM 23-51-01-810-816",
  },
  {
    name: "ARCDU2 AUX2",
    desc:
      "With the transmitter select sw in the AUX2 position- there is no TX ind in the AUX2 onpage 2",
    code: "FIM 23-51-01-810-817",
  },
  { name: "ARCDU2", desc: "CALL mode, no sidetone", code: "FIM 23-51-01-810-820" },
  { name: "ARCDU2", desc: "EMER mode there is no sidetone", code: "FIM 23-51-01-810-821" },
  {
    name: "ARCDU2 HF",
    desc: "The HF area does not show the TX indication",
    code: "FIM 23-51-01-810-815",
  },
  {
    name: "ARCDU2 PA",
    desc: "The INT area does not show the TX indication",
    code: "FIM 23-51-01-810-819",
  },
  {
    name: "ARCDU2",
    desc: "SERV/INT mode, the INT area does not show the TX indication",
    code: "FIM 23-51-01-810-818",
  },
  {
    name: "ARCDU2",
    desc: "VHF1 mode, the VHF1 area does not show the TX indication",
    code: "FIM 23-51-01-810-813",
  },
  {
    name: "ARCDU2",
    desc: "VHF2 mode, the VHF2 area does not show the TX indication",
    code: "FIM 23-51-01-810-814",
  },
  { name: "Attendant Handset aft", desc: "ATT light", code: "FIM 23-31-11-810-806" },
  { name: "Attendant Handset aft", desc: "CALL light", code: "FIM 23-31-11-810-807" },
  { name: "Attendant Handset aft", desc: "EMER light", code: "FIM 23-31-11-810-808" },
  { name: "Attendant Handset aft", desc: "PA light", code: "FIM 23-31-11-810-809" },
  { name: "Attendant Handset fwd", desc: "ATT light", code: "FIM 23-31-11-810-802" },
  { name: "Attendant Handset fwd", desc: "CALL light", code: "FIM 23-31-11-810-803" },
  { name: "Attendant Handset fwd", desc: "EMER light", code: "FIM 23-31-11-810-804" },
  { name: "Attendant Handset fwd", desc: "PA light", code: "FIM 23-31-11-810-805" },
  {
    name: "Audio control Panel (ACP)",
    desc: "There is no audio heard at the observer position",
    code: "FIM 23-51-01-810-828",
  },
  {
    name: "Audio control Panel (ACP)",
    desc: "The observer audio control Panel selections do not operated correctly",
    code: "FIM23-51-01-810-829",
  },
  {
    name: "Audio control Panel (ACP)",
    desc: "There is no AUX1 transmission from the observer position",
    code: "FIM 23-51-01-810-825",
  },
  {
    name: "Audio control Panel (ACP)",
    desc: "There is no AUX2 transmission from the observer position",
    code: "FIM 23-51-01-810-826",
  },
  {
    name: "Audio control Panel (ACP)",
    desc: "There is no HF transmission from the observer position",
    code: "FIM 23-51-01-810-824",
  },
  {
    name: "Audio control Panel (ACP)",
    desc: "There is no INT transmission from the observer position",
    code: "FIM 23-51-01-810-827",
  },
  {
    name: "Audio control Panel (ACP)",
    desc: "There is no VHF1 transmission from the observer position",
    code: "FIM 23-51-01-810-822",
  },
  {
    name: "Audio control Panel (ACP)",
    desc: "There is no VHF2 transmission from the observer position",
    code: "FIM 23-51-01-810-823",
  },
  {
    name: null,
    desc: "COCKPIT VOICE RECORDER STATUS light on the CVR Panel",
    code: "FIM 23-71-00-810-803",
  },
  {
    name: null,
    desc: "The DC EXT POWER ON message does not come into view",
    code: "FIM 24-42-00-810-801",
  },
  { name: "ED", desc: "White dashed replace the SAT indication", code: "FIM 34-11-00-810-870" },
  { name: "ED", desc: "The screen of the ED display unit is blank", code: "FIM 31-61-01-810-832" },
  { name: "ED", desc: "The screen of the ED display unit is dim", code: "FIM 31-61-01-810-837" },
  {
    name: "MFD",
    desc: "Fuel temperature indicator shows three white dashes (---)",
    code: "FIM 28-40-00-810-849",
  },
  {
    name: "MFD",
    desc: "Incorrectly shows the CLOSED message for the left fuel transfer shut-off valve",
    code: "FIM 28-40-00-810-845",
  },
  {
    name: null,
    desc: "MFD -Incorrectly shows the CLOSED message for the right fuel transfer shut-off valve",
    code: "FIM 28-40-00-810-846",
  },
  {
    name: "MFD",
    desc: "Incorrectly shows no fuel pressure (empty white circle) for the left auxiliary pump",
    code: "FIM 28-40-00-810-850",
  },
  {
    name: "MFD",
    desc: "Incorrectly shows no fuel pressure (empty white circle) for the right auxiliary pump",
    code: "FIM 28-40-00-810-851",
  },
  {
    name: "MFD",
    desc: "Incorrectly shows the OFF switch indication for the left auxiliary pump",
    code: "FIM 28-40-00-810-854",
  },
  {
    name: "MFD",
    desc: "Incorrectly shows the OFF switch indication for the right auxiliary pump",
    code: "FIM 28-40-00-810-855",
  },
  {
    name: "MFD",
    desc: "Incorrectly shows the OFF message for the fuel transfer switch",
    code: "FIM 28-40-00-810-844",
  },
  {
    name: "MFD",
    desc: "Incorrectly shows the ON switch indication for the left auxiliary pump",
    code: "FIM 28-40-00-810-852",
  },
  {
    name: "MFD",
    desc: "Incorrectly shows the ON switch indication for the right auxiliary pump",
    code: "FIM 28-40-00-810-853",
  },
  {
    name: "MFD",
    desc: "Incorrectly shows the OPEN message for the left fuel transfer shut-off valve",
    code: "FIM 28-40-00-810-847",
  },
  {
    name: "MFD",
    desc: "Incorrectly shows the OPEN message for the right fuel transfer shut-off valve",
    code: "FIM 28-40-00-810-848",
  },
  {
    name: "MFD",
    desc: "Incorrectly shows the TO TANK 1 arrow for the fuel transfer switch",
    code: "FIM 28-40-00-810-842",
  },
  {
    name: "MFD",
    desc: "Incorrectly shows the TO TANK 2 arrow for the fuel transfer switch",
    code: "FIM 28-40-00-810-843",
  },
  {
    name: "MFD",
    desc: "The total fuel quantity shows four white dashes (----)",
    code: "FIM 28-40-00-810-804",
  },
  { name: "MFD1", desc: "Dashes replace the TCAS value", code: "FIM 31-61-00-810-815" },
  {
    name: "MFD1",
    desc: "The screen of the MFD1 display unit is blank",
    code: "FIM 31-61-01-810-833",
  },
  {
    name: "MFD1",
    desc: "The screen of the MFD1 display unit is dim",
    code: "FIM 31-61-01-810-838",
  },
  {
    name: "MFD2",
    desc: "MFD2 does not show the HYD PRESS PK BRK indication",
    code: "FIM 29-30-00-810-807",
  },
  {
    name: "MFD2",
    desc: "MFD2 does not show the HYD PRESS STBY indication",
    code: "FIM 29-30-00-810-808",
  },
  {
    name: "MFD2",
    desc: "MFD2 does not show the HYD PRESS1 indication",
    code: "FIM 29-30-00-810-809",
  },
  {
    name: "MFD2",
    desc: "MFD2 does not show the HYD PRESS2 indication",
    code: "FIM 29-30-00-810-810",
  },
  { name: "MFD2", desc: "does not show the HYD PRESS3 indication", code: "FIM 29-30-00-810-811" },
  { name: "MFD2", desc: "Dashes replace the TCAS value", code: "FIM 31-61-00-810-815" },
  {
    name: "MFD2",
    desc: "The screen of the MFD2 display unit is blank",
    code: "FIM 31-61-01-810-834",
  },
  {
    name: "MFD2",
    desc: "The screen of the MFD2 display unit is dim",
    code: "FIM 31-61-01-810-839",
  },
  {
    name: "PFCS",
    desc: "The rudder surface position does not show on the PFCS indication",
    code: "FIM 27-20-00-810-811",
  },
  {
    name: "PFD1",
    desc: "The screen of the PFD1 display unit is blank",
    code: "FIM 31-61-01-810-835",
  },
  {
    name: "PFD1",
    desc: "The screen of the PFD1 display unit is dim",
    code: "FIM 31-61-01-810-840",
  },
  {
    name: "PFD2",
    desc: "The screen of the PFD2 display unit is blank",
    code: "FIM 31-61-01-810-836",
  },
  {
    name: "PFD2",
    desc: "The screen of the PFD2 display unit is dim",
    code: "FIM 31-61-01-810-841",
  },
  {
    name: "Door baggage",
    desc: "The baggage door does not operate correctly",
    code: "FIM 52-30-00-810-801",
  },
  {
    name: "Door baggage aft",
    desc: "The door seal does not operate correctly",
    code: "FIM 52-30-00-810-805",
  },
  {
    name: "Door baggage aft",
    desc: "The handle does not move smoothly",
    code: "FIM 52-30-00-810-802",
  },
  {
    name: "Door baggage aft",
    desc: "The handle does not support the weight of the door correctly",
    code: "FIM 52-30-00-810-803",
  },
  {
    name: "Door baggage aft",
    desc: "The handle moves up and down while the door opens and closes",
    code: "FIM 52-30-00-810-804",
  },
  {
    name: "Door baggage aft",
    desc: "When you push the push button of the external handle the handle does not comeout",
    code: "FIM 52-30-00-810-814",
  },
  {
    name: "Door baggage aft",
    desc: "The door cannot be correctly locked in the fully opened position",
    code: "FIM 52-30-00-810-815",
  },
  {
    name: "Door baggage aft",
    desc: "The telescopic strut does not operate correctly",
    code: "FIM 52-30-00-810-806",
  },
  {
    name: "Door baggage fwd",
    desc: "The door cannot be locked correctly in the full open position",
    code: "FIM 52-30-00-810-811",
  },
  {
    name: "Door baggage fwd",
    desc: "The door seal does not operate correctly",
    code: "FIM 52-30-00-810-812",
  },
  {
    name: "Door baggage fwd",
    desc: "The Handle does not come out when the push button of the External Handle ispushed",
    code: "FIM 52-30-00-810-807",
  },
  {
    name: "Door baggage fwd",
    desc: "The Handle does not move smoothly",
    code: "FIM 52-30-00-810-810",
  },
  {
    name: "Door baggage fwd",
    desc: "The hold up mechanism does not move smoothly and it cannot be locked",
    code: "FIM 52-30-00-810-809",
  },
  {
    name: "Door baggage fwd",
    desc: "The door does not open and close smoothly",
    code: "FIM 52-30-00-810-813",
  },
  {
    name: "Door baggage fwd",
    desc: "The vent door seal does not operate correctly",
    code: "FIM 52-30-00-810-808",
  },
  {
    name: "Door emergency exit",
    desc: "Audible noises are heard when the door is moved",
    code: "FIM 52-20-00-810-807",
  },
  {
    name: "Door emergency exit",
    desc: "Hard to move the handle between the GROUND and WATER position",
    code: "FIM 52-20-00-810-805",
  },
  {
    name: "Door emergency exit",
    desc: "Does not open correctly in the GROUND position",
    code: "FIM 52-20-00-810-804",
  },
  {
    name: "Door emergency exit",
    desc: "Unable to remove the upper door with the external handle",
    code: "FIM 52-20-00-810-803",
  },
  {
    name: "Door emergency exit",
    desc: "Unable to remove the upper door with the internal handle",
    code: "FIM 52-20-00-810-802",
  },
  {
    name: "Door emergency exit",
    desc: "The door seal is worn- torn or damaged",
    code: "FIM 52-20-00-810-806",
  },
  {
    name: "Door passenger aft",
    desc: "The handle cannot be locked in the open position or it cannot be releasedsmoothly",
    code: "FIM 52-10-00-810-816",
  },
  {
    name: "Door passenger aft",
    desc: "The handle does not move fwd and aft while the door opens and closes",
    code: "FIM 52-10-00-810-815",
  },
  {
    name: "Door passenger aft",
    desc: "The handle does not move smoothly",
    code: "FIM 52-10-00-810-811",
  },
  {
    name: "Door passenger aft",
    desc: "The handle does not move smoothly and it cannot be locked correctly",
    code: "FIM 52-10-00-810-814",
  },
  {
    name: "Door passenger aft",
    desc: "The seal does not operate correctly",
    code: "FIM 52-10-00-810-817",
  },
  {
    name: "Door passenger aft",
    desc: "The vent door does not open and close smoothly",
    code: "FIM 52-10-00-810-812",
  },
  {
    name: "Door passenger aft",
    desc: "The vent door seal does not operate correctly",
    code: "FIM 52-10-00-810-813",
  },
  {
    name: "Door passenger fwd",
    desc: "The door cannot be fully closed with the handle",
    code: "FIM 52-10-00-810-809",
  },
  {
    name: "Door passenger fwd",
    desc: "The door does not lock in the fully opened position",
    code: "FIM 52-10-00-810-807",
  },
  {
    name: "Door passenger fwd",
    desc: "The door is too heavy when you close the door",
    code: "FIM 52-10-00-810-808",
  },
  {
    name: "Door passenger fwd",
    desc: "The handle is too heavy when you open the door",
    code: "FIM 52-10-00-810-802",
  },
  {
    name: "Door passenger fwd",
    desc: "The handle is too light when you open the door",
    code: "FIM 52-10-00-810-803",
  },
  {
    name: "Door passenger fwd",
    desc: "The inflatable seal does not operate correctly",
    code: "FIM 52-10-00-810-810",
  },
  {
    name: "Door passenger fwd",
    desc: "The interlock does not operate correctly in the fully open position",
    code: "FIM 52-10-00-810-806",
  },
  {
    name: "Door passenger fwd",
    desc: "The time to open the door is 4 seconds or less",
    code: "FIM 52-10-00-810-804",
  },
  {
    name: "Door passenger fwd",
    desc: "The time to open the door is 11 seconds or more",
    code: "FIM 52-10-00-810-805",
  },
  {
    name: "Door service aft",
    desc: "The aft service door does not operate correctly",
    code: "FIM 52-40-00-810-802",
  },
  {
    name: "Door service aft",
    desc: "The door does not move smoothly to the open or closed position",
    code: "FIM 52-40-00-810-804",
  },
  {
    name: "Door service aft",
    desc: "The door seal does not operate correctly",
    code: "FIM 52-40-00-810-805",
  },
  {
    name: "Door service aft",
    desc: "The internal or external handle does not move smoothly",
    code: "FIM 52-40-00-810-803",
  },
  {
    name: null,
    desc: "There is no indication on the display of the DPAS unit",
    code: "FIM 23-32-01-810-801",
  },
  {
    name: "EFIS Control Panel 1 (EFCP1)",
    desc:
      "The PFD brightness- MFD brightness and the reversion selections have noeffect- PFD OFF and MFD OFF continue to operate",
    code: "FIM 31-61-06-810-805",
  },
  {
    name: null,
    desc:
      "EFIS Control Panel 2 (EFCP2) -The PFD brightness- MFD brightness and the reversion selections have noeffect- PFD OFF and MFD OFF continue to operate",
    code: "FIM 31-61-06-810-806",
  },
  {
    name: "EGPWS",
    desc: "cross hatched light for the GPWS FLAP OVERRIDE annunciator switch",
    code: "FIM 34-42-16-810-802",
  },
  { name: null, desc: "EMU Fault General", code: "FIM 77-31-00-810-801" },
  {
    name: null,
    desc: "ENG-#1 - Smoke or oily odour/mist in the cabin and/or oil in the engine gas path",
    code: "FIM 71-00-00-810-817",
  },
  {
    name: "ENG #2",
    desc: "Smoke or oily odour/mist in cabin and/or oil in the engine gas path",
    code: "FIM 71-00-00-810-817",
  },
  {
    name: "ENG #1",
    desc: "PLA stagger or split at approach power/ground operating range",
    code: "FIM 71-00-00-810-813",
  },
  {
    name: "ENG #2",
    desc: "Torque split at or near rated torque for same PLA",
    code: "FIM 71-00-00-810-812",
  },
  {
    name: "ENG #2",
    desc: "PLA stagger or split at approach power and in ground operating range",
    code: "FIM 71-00-00-810-813",
  },
  { name: "ENG #1", desc: "High fuel temperature", code: "FIM 73-00-00-810-801" },
  { name: "ENG #1", desc: "Excessive fuel consumption", code: "FIM 73-00-00-810-802" },
  { name: "ENG #2", desc: "High fuel temperature", code: "FIM 73-00-00-810-801" },
  { name: "ENG #2", desc: "Excessive fuel consumption", code: "FIM 73-00-00-810-802" },
  { name: null, desc: "ENG torque indication is not correct", code: "FIM 77-11-00-810-803" },
  {
    name: null,
    desc: "BLEED message on the left side (ED) does not come on",
    code: "FIM 77-11-00-810-822",
  },
  {
    name: null,
    desc: "BLEED message on the right side (ED) does not come on",
    code: "FIM 77-11-00-810-823",
  },
  {
    name: null,
    desc: "Left fuel tank indicator shows four white dashes (----)",
    code: "FIM 28-40-00-810-836",
  },
  {
    name: null,
    desc: "Right fuel tank indicator shows four white dashes (----)",
    code: "FIM 28-40-00-810-837",
  },
  {
    name: "ENG #1",
    desc: "fuel flow indicator shows four white dashes (----)",
    code: "FIM 73-30-00-810-805",
  },
  {
    name: "ENG #2",
    desc: "fuel flow indicator shows four white dashes (----)",
    code: "FIM 73-30-00-810-806",
  },
  {
    name: "ENG #1",
    desc: "fuel inlet temperature indicator shows three white dashes (---)",
    code: "FIM 73-30-00-810-809",
  },
  {
    name: "ENG #2",
    desc: "fuel inlet temperature indicator shows three white dashes (---)",
    code: "FIM 73-30-00-810-810",
  },
  {
    name: "ENG #1",
    desc: "high pressure rotor speed (NH) indicator shows three white dashes (---)",
    code: "FIM 77-11-00-810-810",
  },
  {
    name: "ENG #2",
    desc: "high pressure rotor speed (NH) indicator shows three white dashes (---)",
    code: "FIM 77-11-00-810-811",
  },
  {
    name: "ENG #1",
    desc: "indicated turbine temperature (ITT) indicator shows three white dashes (---)",
    code: "FIM 77-21-00-810-801",
  },
  {
    name: "ENG #2",
    desc: "indicated turbine temperature (ITT) indicator shows three white dashes (---)",
    code: "FIM 77-21-00-810-802",
  },
  {
    name: "ENG #1",
    desc: "low pressure rotor speed (NL) indicator shows three white dashes (---)",
    code: "FIM 77-11-00-810-818",
  },
  {
    name: "ENG #2",
    desc: "low pressure rotor speed (NL) indicator shows three white dashes (---)",
    code: "FIM 77-11-00-810-819",
  },
  {
    name: null,
    desc: "MAINT message on the left side does not come on",
    code: "FIM 77-11-00-810-826",
  },
  {
    name: null,
    desc: "MAINT message on the right side does not come on",
    code: "FIM 77-11-00-810-827",
  },
  {
    name: null,
    desc: "MCL message on the left side does not come on",
    code: "FIM 77-11-00-810-843",
  },
  {
    name: null,
    desc: "MCL message on the right side does not come on",
    code: "FIM77-11-00-810-844",
  },
  {
    name: null,
    desc: "MCP message on the left side does not come on",
    code: "FIM 77-11-00-810-847",
  },
  {
    name: null,
    desc: "MCP message on the right side does not come on",
    code: "FIM 77-11-00-810-848",
  },
  {
    name: null,
    desc: "MCR message on the left side does not come on",
    code: "FIM 77-11-00-810-851",
  },
  {
    name: null,
    desc: "MCR message on the right side does not come on",
    code: "FIM 77-11-00-810-852",
  },
  {
    name: null,
    desc: "MTOP message on the left side does not come on",
    code: "FIM 77-11-00-810-839",
  },
  {
    name: null,
    desc: "MTOP message on the right side does not come on",
    code: "FIM 77-11-00-810-840",
  },
  {
    name: null,
    desc: "NTOP message on the left side does not come on",
    code: "FIM 77-11-00-810-835",
  },
  {
    name: null,
    desc: "NTOP message on the right side does not come on",
    code: "FIM 77-11-00-810-836",
  },
  {
    name: "ENG #1",
    desc: "oil pressure indicator shows three white dashes (---)",
    code: "FIM 79-31-00-810-801",
  },
  {
    name: "ENG #2",
    desc: "oil pressure indicator shows three white dashes (---)Pre SB84-31-17",
    code: "FIM 79-31-00-810-802",
  },
  {
    name: "ENG #2",
    desc: "oil pressure indicator shows three white dashes (---)SB84-31-17",
    code: "FIM 79-31-00-810-803",
  },
  {
    name: "ENG #1",
    desc: "oil temperature indicator shows three white dashes (---)",
    code: "FIM 79-32-00-810-801",
  },
  {
    name: "ENG #2",
    desc: "oil temperature indicator shows three white dashes (---)",
    code: "FIM 79-32-00-810-802",
  },
  {
    name: null,
    desc: "ENG #1 Prop speed (PROP RPM) indicator shows four white dashes (----)",
    code: "FIM 61-41-00-810-801",
  },
  {
    name: null,
    desc: "ENG #2 Prop speed (PROP RPM) indicator shows four white dashes (----)",
    code: "FIM 61-41-00-810-802",
  },
  {
    name: null,
    desc: "RDC TOP message on the left side does not come on",
    code: "FIM 77-11-00-810-831",
  },
  {
    name: null,
    desc: "RDC TOP message on the right side does not come on",
    code: "FIM 77-11-00-810-832",
  },
  { name: null, desc: "REDUCED NP LANDING message does not come on", code: "FIM 77-11-00-810-857" },
  { name: null, desc: "UPTRIM message does not come on", code: "FIM 77-11-00-810-855" },
  {
    name: null,
    desc: "ENG #1 torque (TRQ) bug digital readout shows three white dashes (---)",
    code: "FIM 77-11-00-810-804",
  },
  {
    name: null,
    desc: "ENG #2 torque (TRQ) bug digital readout shows three white dashes (---)",
    code: "FIM 77-11-00-810-807",
  },
  {
    name: null,
    desc: "ENG #1 torque (TRQ) indicator shows three white dashes (---)",
    code: "FIM 77-11-00-810-814",
  },
  {
    name: null,
    desc: "ENG #2 torque (TRQ) indicator shows three white dashes (---)",
    code: "FIM 77-11-00-810-815",
  },
  {
    name: null,
    desc: "BLEED message on the left side does not come on",
    code: "FIM 77-11-00-810-824",
  },
  {
    name: null,
    desc: "BLEED message on the right side does not come on",
    code: "FIM 77-11-00-810-825",
  },
  {
    name: null,
    desc: "MAINT message on the left side does not come on",
    code: "FIM 77-11-00-810-828",
  },
  {
    name: null,
    desc: "MAINT message on the right side does not come on",
    code: "FIM 77-11-00-810-829",
  },
  {
    name: null,
    desc: "MCL message on the left side does not come on",
    code: "FIM 77-11-00-810-845",
  },
  {
    name: null,
    desc: "MCL message on the right side does not come on",
    code: "FIM 77-11-00-810-846",
  },
  {
    name: null,
    desc: "MCP message on the left side does not come on",
    code: "FIM 77-11-00-810-849",
  },
  {
    name: null,
    desc: "MCP message on the right side does not come on",
    code: "FIM 77-11-00-810-850",
  },
  {
    name: null,
    desc: "MCR message on the left side does not come on",
    code: "FIM 77-11-00-810-853",
  },
  {
    name: null,
    desc: "MCR message on the right side does not come on",
    code: "FIM 77-11-00-810-854",
  },
  {
    name: null,
    desc: "MTOP message on the left side does not come on",
    code: "FIM 77-11-00-810-841",
  },
  {
    name: null,
    desc: "MTOP message on the right side does not come on",
    code: "FIM 77-11-00-810-842",
  },
  {
    name: null,
    desc: "NTOP message on the left side does not come on",
    code: "FIM 77-11-00-810-837",
  },
  {
    name: null,
    desc: "NTOP message on the right side does not come on",
    code: "FIM 77-11-00-810-838",
  },
  {
    name: null,
    desc: "RDC TOP message on the left side does not come on",
    code: "FIM 77-11-00-810-833",
  },
  {
    name: null,
    desc: "RDC TOP message on the right side does not come on",
    code: "FIM 77-11-00-810-834",
  },
  {
    name: null,
    desc: "REDUCED NP LANDING message does not come on ON A/C 100-140- 142-199- 201-467",
    code: "FIM 77-11-00-810-858",
  },
  { name: "MFD", desc: "The UPTRIM message does not come on", code: "FIM 77-11-00-810-856" },
  {
    name: null,
    desc: "Left fuel tank indicator shows four white dashes (----)",
    code: "FIM 28-40-00-810-838",
  },
  {
    name: null,
    desc: "Right fuel tank indicator shows four white dashes (----)",
    code: "FIM 28-40-00-810-839",
  },
  {
    name: "ENG #1",
    desc: "fuel flow indicator shows four white dashes (----)",
    code: "FIM 73-30-00-810-807",
  },
  {
    name: "ENG #2",
    desc: "fuel flow indicator shows four white dashes (----)",
    code: "FIM 73-30-00-810-808",
  },
  {
    name: "ENG #1",
    desc: "fuel inlet temperature indicator shows three white dashes (---)",
    code: "FIM 73-30-00-810-811",
  },
  {
    name: "ENG #2",
    desc: "fuel inlet temperature indicator shows three white dashes (---)",
    code: "FIM 73-30-00-810-812",
  },
  {
    name: "ENG #1",
    desc: "high pressure rotor speed (NH) indicator shows three white dashes (---)",
    code: "FIM 77-11-00-810-812",
  },
  {
    name: "ENG #2",
    desc: "high pressure rotor speed (NH) indicator shows three white dashes (---)",
    code: "FIM 77-11-00-810-813",
  },
  {
    name: "ENG #1",
    desc: "indicated turbine temperature (ITT) indicator shows three white dashes (---)",
    code: "FIM 77-21-00-810-803",
  },
  {
    name: "ENG #2",
    desc: "indicated turbine temperature (ITT) indicator shows three white dashes (---)",
    code: "FIM 77-21-00-810-804",
  },
  {
    name: "ENG #1",
    desc: "low pressure rotor speed (NL) indicator shows three white dashes (---)",
    code: "FIM 77-11-00-810-820",
  },
  {
    name: "ENG #1",
    desc: "low pressure rotor speed (NL) indicator shows three white dashes (---)",
    code: "FIM 77-11-00-810-821",
  },
  {
    name: "ENG #1",
    desc: "oil pressure indicator shows three white dashes (---)",
    code: "FIM 79-31-00-810-804",
  },
  {
    name: "ENG #2",
    desc: "oil pressure indicator shows three white dashes (---)Pre SB84-31-17",
    code: "FIM 79-31-00-810-805",
  },
  {
    name: "ENG #2",
    desc: "oil pressure indicator shows three white dashes (---)Post SB84-31-17",
    code: "FIM 79-31-00-810-806",
  },
  {
    name: "ENG #1",
    desc: "oil temperature indicator shows three white dashes (---)",
    code: "FIM 79-32-00-810-803",
  },
  {
    name: "ENG #2",
    desc: "oil temperature indicator shows three white dashes (---)",
    code: "FIM 79-32-00-810-804",
  },
  {
    name: "ENG #1",
    desc: "propeller speed (PROP RPM) indicator shows four white dashes (----)",
    code: "FIM 61-41-00-810-803",
  },
  {
    name: "ENG #2",
    desc: "propeller speed (PROP RPM) indicator shows four white dashes (----)",
    code: "FIM 61-41-00-810-804",
  },
  {
    name: "ENG #1",
    desc: "torque (TRQ) bug digital readout shows three white dashes (-- -)",
    code: "FIM 77-11-00-810-808",
  },
  {
    name: "ENG #2",
    desc: "torque (TRQ) bug digital readout shows three white dashes (-- -)",
    code: "FIM 77-11-00-810-809",
  },
  {
    name: "ENG #1",
    desc: "torque (TRQ) indicator shows three white dashes (---)",
    code: "FIM 77-11-00-810-816",
  },
  {
    name: "ENG #2",
    desc: "torque (TRQ) indicator shows three white dashes (---)",
    code: "FIM 77-11-00-810-817",
  },
  {
    name: "ENG #1",
    desc: "General external leaks or internal leaks",
    code: "FIM 79-00-00-810-807",
  },
  {
    name: "ENG #1",
    desc: "Leakage from the overspeed governor mount pad of the",
    code: "FIM 79-00-00-810-806",
  },
  { name: "ENG #1", desc: "High oil consumption", code: "FIM 79-00-00-810-802" },
  { name: "ENG #1", desc: "Fluctuating oil pressure", code: "FIM 79-00-00-810-803" },
  { name: "ENG #1", desc: "High oil pressure", code: "FIM 79-00-00-810-804" },
  { name: "ENG #1", desc: "High oil temperature", code: "FIM 79-00-00-810-805" },
  { name: "ENG #2", desc: "Fluctuating oil pressure", code: "FIM 79-00-00-810-803" },
  {
    name: null,
    desc: "Leakage from the overspeed governor mount pad of the #2 engine",
    code: "FIM 79-00-00-810-806",
  },
  { name: "ENG #2", desc: "High oil consumption", code: "FIM 79-00-00-810-802" },
  {
    name: "ENG #2",
    desc: "General external leaks or internal leaks",
    code: "FIM 79-00-00-810-807",
  },
  { name: "ENG #2", desc: "High oil pressure", code: "FIM 79-00-00-810-804" },
  { name: "ENG #2", desc: "High oil temperature", code: "FIM 79-00-00-810-805" },
  { name: "ENG #1", desc: "Cannot achieve maximum take-off power", code: "FIM 71-00-00-810-811" },
  { name: "ENG #1", desc: "Cannot achieve AFM chart torque", code: "FIM 71-00-00-810-806" },
  { name: "ENG #2", desc: "Cannot achieve AFM chart torque", code: "FIM 71-00-00-810-806" },
  { name: "ENG #2", desc: "Slow acceleration", code: "FIM 71-00-00-810-807" },
  { name: "ENG #2", desc: "Cannot achieve maximum take-off power", code: "FIM 71-00-00-810-811" },
  {
    name: null,
    desc: "There is an increase in ITT and fuel flow and may be an increase in NH and NL",
    code: "FIM 75-00-00-810-801",
  },
  {
    name: "ENG #1",
    desc:
      "The spool down time for the NH is less than 30 seconds- the spool down time for the NL is lessthan 120 seconds or there are unusual noises or sudden stops",
    code: "FIM 71-00-00-810-816",
  },
  {
    name: "ENG #2",
    desc:
      "The spool down time for the NH is less than 30 seconds or the spool down time for the NL isless than 120 seconds or there are unusual noises or sudden stops",
    code: "FIM 71-00-00-810-816",
  },
  { name: "ENG #1", desc: "No Nh during start", code: "FIM 71-00-00-810-801" },
  { name: "ENG #1", desc: "Slow to light", code: "FIM 71-00-00-810-802" },
  { name: "ENG #1", desc: "Does not self sustain", code: "FIM 71-00-00-810-803" },
  { name: "ENG #1", desc: "Hung Start", code: "FIM 71-00-00-810-804" },
  { name: "ENG #1", desc: "Warm or Hot Start", code: "FIM 71-00-00-810-805" },
  { name: "ENG #1", desc: "Slow acceleration", code: "FIM 71-00-00-810-807" },
  { name: "ENG #2", desc: "Does not self sustain", code: "FIM 71-00-00-810-803" },
  { name: "ENG #2", desc: "No NH during start", code: "FIM 71-00-00-810-801" },
  { name: "ENG #2", desc: "Slow to light", code: "FIM 71-00-00-810-802" },
  { name: "ENG #2", desc: "Hung Start", code: "FIM 71-00-00-810-804" },
  { name: "ENG #2", desc: "Warm or Hot Start", code: "FIM 71-00-00-810-805" },
  { name: "ENG #1", desc: "Sudden increase/abnormal ITT", code: "FIM 71-00-00-810-814" },
  {
    name: "ENG #1",
    desc: "Gradual increase of ITT over several flights",
    code: "FIM 71-00-00-810-815",
  },
  { name: "ENG #2", desc: "Sudden increase/abnormal ITT", code: "FIM 71-00-00-810-814" },
  {
    name: "ENG #2",
    desc: "Gradual increase of ITT over several flights",
    code: "FIM 71-00-00-810-815",
  },
  {
    name: null,
    desc: "Torque oscillations are greater than 5% (greater than 0",
    code: "FIM 6% Np) __ FIM 71-00-00-810-820",
  },
  {
    name: null,
    desc: "Torque oscillations are less than 5% (less than 0",
    code: "FIM 6% Np) __ FIM 71-00-00-810-819",
  },
  {
    name: null,
    desc: "Torque split at or near rated torque for same PLA",
    code: "FIM 71-00-00-810-812",
  },
  {
    name: null,
    desc: "The ED brightness and the reversion selection do not operate correctly",
    code: "FIM 31-61-11-810-807",
  },
  {
    name: null,
    desc: "The EFIS ATT/HDG SOURCE reversion selections on the ESID control Panel",
    code: "FIM 31-61-11-810-808",
  },
  {
    name: null,
    desc:
      "The EFIS ADC SOURCE reversion selections on the ESID control Panel do not operate correctly",
    code: "FIM 31-61-11-810-809",
  },
  {
    name: null,
    desc:
      "The FLT DATA RECORDER caution light will not go off when the GND TEST switch is set to the GND TESTposition",
    code: "FIM 31-30-00-810-802",
  },
  {
    name: "Fire Protection Panel",
    desc: "ARM light in the FIRE BOTTLE AFT",
    code: "FIM 26-22-00-810-803",
  },
  {
    name: "Fire Protection Panel",
    desc: "ARM light in the FIRE BOTTLE FWD",
    code: "FIM 26-22-00-810-804",
  },
  { name: "Fire Protection Panel", desc: "BTL ARM light in the APU", code: "FIM 26-23-00-810-805" },
  { name: "Fire Protection Panel", desc: "BTL LOW light in the APU", code: "FIM 26-23-00-810-803" },
  {
    name: "Fire Protection Panel",
    desc: "BTL LOW light for the ENG 1 or ENG 2",
    code: "FIM 26-21-00-810-801",
  },
  {
    name: "Fire Protection Panel",
    desc: "CLOSED light for the ENGINE 1 VALVES FUEL",
    code: "FIM 28-21-26-810-802",
  },
  {
    name: "Fire Protection Panel",
    desc: "CLOSED light for the ENGINE 1 VALVES HYD",
    code: "FIM 29-30-00-810-813",
  },
  {
    name: "Fire Protection Panel",
    desc: "CLOSED light for the ENGINE 2 VALVES FUEL",
    code: "FIM 28-21-26-810-804",
  },
  {
    name: "Fire Protection Panel",
    desc: "CLOSED light for the ENGINE 2 VALVES HYD",
    code: "FIM 29-30-00-810-815",
  },
  { name: "Fire Protection Panel", desc: "EXTG light in the APU", code: "FIM 26-23-00-810-804" },
  {
    name: "Fire Protection Panel",
    desc: "EXTG AFT BTL light for the ENGINE 1",
    code: "FIM 26-21-00-810-804",
  },
  {
    name: "Fire Protection Panel",
    desc: "EXTG AFT BTL light for the ENGINE 2",
    code: "FIM 26-21-00-810-805",
  },
  { name: "Fire Protection Panel", desc: "FAULT light in the APU", code: "FIM 26-13-00-810-802" },
  {
    name: "Fire Protection Panel",
    desc: "FAULT A light in the ENGINE 1",
    code: "FIM 26-11-00-810-801",
  },
  {
    name: "Fire Protection Panel",
    desc: "FAULT A light in the ENGINE 2",
    code: "FIM 26-11-00-810-803",
  },
  {
    name: "Fire Protection Panel",
    desc: "FAULT B light in the ENGINE 1",
    code: "FIM 26-11-00-810-802",
  },
  {
    name: "Fire Protection Panel",
    desc: "FAULT B light in the ENGINE 2",
    code: "FIM 26-11-00-810-804",
  },
  { name: "Fire Protection Panel", desc: "FIRE light in the APU", code: "FIM 26-13-00-810-803" },
  {
    name: "Fire Protection Panel",
    desc: "FUEL OPEN light in the APU",
    code: "FIM 26-23-00-810-807",
  },
  {
    name: "Fire Protection Panel",
    desc: "FWD BTL light for the ENGINE 1",
    code: "FIM 26-21-00-810-802",
  },
  {
    name: "Fire Protection Panel",
    desc: "FWD BTL light for the ENGINE 2",
    code: "FIM 26-21-00-810-803",
  },
  {
    name: "Fire Protection Panel",
    desc: "LOW light in the FIRE BOTTLE- AFT",
    code: "FIM 26-22-11-810-802",
  },
  {
    name: "Fire Protection Panel",
    desc: "LOW light in the FIRE BOTTLE- FWD",
    code: "FIM 26-22-11-810-801",
  },
  {
    name: "Fire Protection Panel",
    desc: "Two LOW lights in the FIRE BOTTLE- FWD and AFT",
    code: "FIM 26-22-11-810-803",
  },
  {
    name: "Fire Protection Panel",
    desc: "OPEN light for the ENGINE 1 VALVES FUEL",
    code: "FIM 28-21-26-810-801",
  },
  {
    name: "Fire Protection Panel",
    desc: "OPEN light for the ENGINE 1 VALVES HYD",
    code: "FIM 29-30-00-810-812",
  },
  {
    name: "Fire Protection Panel",
    desc: "OPEN light for the ENGINE 2 VALVES FUEL",
    code: "FIM 28-21-26-810-803",
  },
  {
    name: "Fire Protection Panel",
    desc: "OPEN light for the ENGINE 2 VALVES HYD",
    code: "FIM 29-30-00-810-814",
  },
  {
    name: "Fire Protection Panel",
    desc: "PULL FUEL/HYD OFF light in the ENGINE 1",
    code: "FIM 26-21-00-810-806",
  },
  {
    name: "Fire Protection Panel",
    desc: "PULL FUEL/HYD OFF light in the ENGINE 2",
    code: "FIM 26-21-00-810-807",
  },
  {
    name: "Fire Protection Panel",
    desc: "EXTG light in the BAGGAGE AFT",
    code: "FIM 26-12-06-810-804",
  },
  {
    name: "Fire Protection Panel",
    desc: "SMOKE light in the BAGGAGE AFT",
    code: "FIM 26-12-06-810-802",
  },
  {
    name: "Fire Protection Panel",
    desc: "EXTG light in the BAGGAGE FWD",
    code: "FIM 26-12-06-810-803",
  },
  {
    name: "Fire Protection Panel",
    desc: "SMOKE light in the BAGGAGE FWD",
    code: "FIM 26-12-06-810-801",
  },
  {
    name: "Fire Protection Panel",
    desc: "VALVE CLOSED light in the APU does not come on",
    code: "FIM 26-23-00-810-806",
  },
  {
    name: "Fire Protection Panel",
    desc: "VENT INLT CLOSED light in the BAGGAGE AFT",
    code: "FIM 26-22-00-810-801",
  },
  {
    name: "Fire Protection Panel",
    desc: "VENT OTLT CLOSED light in the BAGGAGE AFT",
    code: "FIM 26-22-00-810-802",
  },
  {
    name: null,
    desc: "Excessive roll trim is required to avoid a ROLL MISTRIM indication",
    code: "FIM 27-13-00-810-801",
  },
  {
    name: null,
    desc: "Tank 1 auxiliary pump is displayed with no pressure when commanded on",
    code: "FIM 28-20-00-810-805",
  },
  {
    name: null,
    desc: "Tank 2 auxiliary pump is displayed with no pressure when commanded on",
    code: "FIM 28-20-00-810-805",
  },
  {
    name: null,
    desc: "Tank 1 auxiliary pump is displayed with pressure when commanded off",
    code: "FIM 28-20-00-810-806",
  },
  {
    name: null,
    desc: "Tank 2 auxiliary pump is displayed with pressure when commanded off",
    code: "FIM 28-20-00-810-806",
  },
  {
    name: "FUEL CONTROL Panel",
    desc: "ON light in the TANK 1 AUX PUMP",
    code: "FIM 28-23-16-810-801",
  },
  {
    name: "FUEL CONTROL Panel",
    desc: "ON light in the TANK 2 AUX PUMP",
    code: "FIM 28-23-16-810-802",
  },
  {
    name: null,
    desc: "#1 ENG FADEC light on the CAWP does not come on",
    code: "FIM 77-31-00-810-833",
  },
  {
    name: null,
    desc: "#2 ENG FADEC light on the CAWP does not come on",
    code: "FIM 77-31-00-810-834",
  },
  {
    name: null,
    desc: "#1 ENG FADEC FAIL light on the CAWP does not come on",
    code: "FIM 77-31-00-810-830",
  },
  {
    name: null,
    desc: "#2 ENG FADEC FAIL light on the CAWP does not come on",
    code: "FIM 77-31-00-810-831",
  },
  {
    name: null,
    desc: "#1 FUEL FLTR BYPASS light on the CAWP does not come on",
    code: "FIM 73-10-00-810-803",
  },
  {
    name: null,
    desc: "#2 FUEL FLTR BYPASS light on the CAWP does not come on",
    code: "FIM 73-10-00-810-804",
  },
  {
    name: null,
    desc: "#1 ENG FUEL PRESS light on the CAWP does not come on",
    code: "FIM 73-30-00-810-803",
  },
  {
    name: null,
    desc: "#2 ENG FUEL PRESS light on the CAWP does not come on",
    code: "FIM 73-30-00-810-804",
  },
  {
    name: null,
    desc: "Tank 1 analog fuel gauge is blanked out on the MFD",
    code: "FIM 28-40-00-810-803",
  },
  {
    name: null,
    desc: "Tank 2 analog fuel gauge is blanked out on the MFD",
    code: "FIM 28-40-00-810-803",
  },
  { name: null, desc: "[BALANCE] message on ED does not come on", code: "FIM 28-40-00-810-840" },
  { name: null, desc: "[BALANCE] message on MFD does not come on", code: "FIM 28-40-00-810-841" },
  {
    name: null,
    desc: "MFD does not show the left fuel tank QTY needle pointer",
    code: "FIM 28-40-00-810-832",
  },
  {
    name: null,
    desc: "MFD does not show the right fuel tank QTY needle pointer",
    code: "FIM 28-40-00-810-833",
  },
  {
    name: null,
    desc: "The Total Fuel Quantity is dashed out on the fuel page of the MFD",
    code: "FIM 28-40-00-810-805",
  },
  {
    name: "RDI",
    desc: "PRESEL shows yellow dashes for the fuel quantity",
    code: "FIM 28-24-02-810-805",
  },
  {
    name: "RDI",
    desc: "TANK 1 shows yellow dashes for the fuel quantity",
    code: "FIM 28-24-02-810-806",
  },
  {
    name: null,
    desc: "RDI -TANK 2 shows yellow dashes for the fuel quantity",
    code: "FIM 28-24-02-810-807",
  },
  {
    name: null,
    desc: "Tank 1 refuel/defuel transfer valve is displayed in disagreement",
    code: "FIM 28-20-00-810-801",
  },
  {
    name: null,
    desc: "Tank 1 refuel/defuel transfer valve is displayed in transition continuously",
    code: "FIM 28-20-00-810-804",
  },
  {
    name: null,
    desc: "Tank 1 refuel/defuel transfer valve is displayed closed when commanded open",
    code: "FIM 28-20-00-810-803",
  },
  {
    name: null,
    desc: "Tank 1 refuel/defuel transfer valve is displayed open when commanded closed",
    code: "FIM 28-20-00-810-802",
  },
  {
    name: null,
    desc: "Tank 2 refuel/defuel transfer valve is displayed in disagreement",
    code: "FIM 28-20-00-810-801",
  },
  {
    name: null,
    desc: "Tank 2 refuel/defuel transfer valve is displayed closed when commanded open",
    code: "FIM 28-20-00-810-803",
  },
  {
    name: null,
    desc: "Tank 2 refuel/defuel transfer valve is displayed open when commanded closed",
    code: "FIM 28-20-00-810-802",
  },
  {
    name: null,
    desc: "Tank 2 refuel/defuel transfer valve is displayed in transition continuously",
    code: "FIM 28-20-00-810-804",
  },
  { name: null, desc: "A/P DISENG light on the left side", code: "FIM 22-11-41-810-801" },
  { name: null, desc: "A/P DISENG light on the right side", code: "FIM 22-11-41-810-802" },
  {
    name: null,
    desc:
      "BELOW G/S light on the left side ON A/C 001- 006- 014-015- 026-027- 039- 042- 092-140-142-199- 201-467",
    code: "FIM 34-42-00-810-820",
  },
  {
    name: "BELOW G/S light on the left side",
    desc: "FIM ON A/C 003-004- 008-013- 016-025- 028-038- 040-041- 043-091",
    code: "FIM 34-42-00-810-821",
  },
  {
    name: "BELOW G/S light on the right side",
    desc: "FIM ON A/C 001- 006- 014-015- 026-027- 039- 042- 092-140-142-199- 201-467",
    code: "FIM 34-42-00-810-822",
  },
  {
    name: "BELOW G/S light on the right side",
    desc: "FIM ON A/C 003-004- 008-013- 016-025- 028-038- 040-041- 043-091",
    code: "FIM 34-42-00-810-823",
  },
  {
    name: null,
    desc: "ENGINE FIRE PUSH TO RESET light on the left side",
    code: "FIM 26-10-00-810-818",
  },
  {
    name: null,
    desc: "ENGINE FIRE PUSH TO RESET light on the right side",
    code: "FIM 26-10-00-810-819",
  },
  {
    name: null,
    desc: "OFF light for the left ELEVATOR TRIM SHUTOFF",
    code: "FIM 27-32-00-810-812",
  },
  {
    name: null,
    desc: "OFF light for the right ELEVATOR TRIM SHUTOFF",
    code: "FIM 27-32-00-810-813",
  },
  { name: null, desc: "OFF light for the RUD1", code: "FIM 27-21-00-810-802" },
  { name: null, desc: "OFF light for the RUD2", code: "FIM 27-21-00-810-806" },
  { name: null, desc: "OFF light in the SPLR1", code: "FIM 27-61-00-810-802" },
  { name: null, desc: "OFF light in the SPLR2", code: "FIM 27-61-00-810-806" },
  {
    name: null,
    desc: "OFF light in the STICK PUSHER SHUT OFF on the left side",
    code: "FIM 27-33-00-810-832",
  },
  {
    name: null,
    desc: "OFF light for the STICK PUSHER SHUT OFF on the right side",
    code: "FIM 27-33-00-810-833",
  },
  { name: null, desc: "No Engine Light Up", code: "FIM 73-20-00-810-818" },
  {
    name: null,
    desc: "PULL UP GPWS TEST light on the left side",
    code:
      "FIM ON A/C 001- 006- 014-015- 026-027- 039- 042- 092-140-142-199- 201-467 __ FIM FIM 34-42-00-810-816",
  },
  {
    name: null,
    desc: "PULL UP GPWS TEST light on the left side",
    code: "FIM ON A/C 003-004- 008-013- 016-025- 028-038- 040-041-043-091 __ FIM 34-42-00-810-817",
  },
  {
    name: null,
    desc: "PULL UP GPWS TEST light on the right side",
    code:
      "FIM ON A/C 001- 006- 014-015- 026-027- 039- 042- 092-140-142-199- 201-467 __ FIM FIM 34-42-00-810-818",
  },
  {
    name: null,
    desc: "PULL UP GPWS TEST light on the right side",
    code: "FIM ON A/C 003-004- 008-013- 016-025- 028-038- 040-041- 043-091 __ FIM 34-42-00-810-819",
  },
  {
    name: null,
    desc: "PUSH light for the ELEVATOR TRIM SHUTOFF on the left side",
    code: "FIM 27-32-00-810-810",
  },
  {
    name: null,
    desc: "PUSH light for the ELEVATOR TRIM SHUTOFF on the right side",
    code: "FIM 27-32-00-810-811",
  },
  { name: null, desc: "PUSH light for the RUD1", code: "FIM 27-21-00-810-801" },
  { name: null, desc: "PUSH light for the RUD2", code: "FIM 27-21-00-810-805" },
  { name: null, desc: "PUSH light in the SPLR1", code: "FIM 27-61-00-810-801" },
  { name: null, desc: "PUSH light in the SPLR2", code: "FIM 27-61-00-810-805" },
  {
    name: null,
    desc: "TERRAIN light for the left TERRAIN INHIBIT annunciator switch",
    code: "FIM 34-42-26-810-801",
  },
  {
    name: null,
    desc: "TERRAIN light for the right TERRAIN INHIBIT annunciator switch",
    code: "FIM 34-42-26-810-802",
  },
  {
    name: null,
    desc: "PROPELLER GROUND RANGE LIGHT #1 does not come on",
    code: "FIM 61-20-00-810-823",
  },
  {
    name: null,
    desc: "PROPELLER GROUND RANGE LIGHT #2 does not come on",
    code: "FIM 61-20-00-810-824",
  },
  {
    name: null,
    desc: "Cross hatched light for the GPWS FLAP OVERRIDE annunciator switch",
    code: "FIM 34-42-16-810-801",
  },
  {
    name: null,
    desc: "GPWS TEST Switchlight does not show the visual warning",
    code: "FIM 34-42-00-810-804",
  },
  {
    name: null,
    desc: "The overspeed warning horn test failed during the ADC TEST",
    code: "FIM 34-60-00-810-801",
  },
  {
    name: "HYDRAULIC CONTROL Panel",
    desc: "OPEN light in the HYD #3 ISOL VLV",
    code: "FIM 29-30-00-810-818",
  },
  {
    name: "HYDRAULIC CONTROL Panel",
    desc: "ON light in the PTU CNTRL",
    code: "FIM 29-30-00-810-817",
  },
  {
    name: "HYDRAULIC CONTROL Panel",
    desc: "ON light in the STBY HYD PRESS",
    code: "FIM 29-30-00-810-816",
  },
  { name: null, desc: "10 light in the GPWS LANDING FLAP", code: "FIM 34-42-00-810-824" },
  { name: null, desc: "15 light in the GPWS LANDING FLAP", code: "FIM 34-42-00-810-825" },
  { name: null, desc: "35 light in the GPWS LANDING FLAP", code: "FIM 34-42-00-810-826" },
  {
    name: null,
    desc: "Power transfer unit (PTU) does not actuate automatically",
    code: "FIM 29-11-61-810-801",
  },
  {
    name: null,
    desc: "Level sensing switch for the LH hydraulic reservoir fails to close",
    code: "FIM 29-11-16-810-801",
  },
  {
    name: null,
    desc: "Level sensing switch for the RH hydraulic reservoir fails to close",
    code: "FIM 29-11-21-810-801",
  },
  {
    name: "HYDRAULIC",
    desc: "Firewall shut-off valve failed to close",
    code: "FIM 29-11-06-810-801",
  },
  {
    name: null,
    desc: "ED -The ICE DETECTED message does not come on",
    code: "FIM 30-80-00-810-804",
  },
  {
    name: null,
    desc: "MFD -The ICE DETECTED message does not come on",
    code: "FIM 30-80-00-810-805",
  },
  { name: "IRPS control panel", desc: "boot inflation LED", code: "FIM 30-11-00-810-804" },
  { name: null, desc: "CLOSED light for the left ENGINES INTAKE", code: "FIM 30-21-00-810-803" },
  { name: null, desc: "CLOSED light for the right ENGINES INTAKE", code: "FIM 30-21-00-810-806" },
  { name: null, desc: "HTR light for the left ENGINES INTAKE", code: "FIM 30-21-00-810-802" },
  { name: null, desc: "HTR light for the right ENGINES INTAKE", code: "FIM 30-21-00-810-805" },
  { name: null, desc: "OPN light for the left ENGINES INTAKE", code: "FIM 30-21-00-810-801" },
  { name: null, desc: "OPN light for the right ENGINES INTAKE", code: "FIM 30-21-00-810-804" },
  { name: null, desc: "Left PROPS LED", code: "FIM 30-61-00-810-837" },
  { name: null, desc: "Right PROPS LED", code: "FIM 30-61-00-810-838" },
  {
    name: null,
    desc: "There is a malfunction of the standby horizon indicator",
    code: "FIM 34-22-00-810-802",
  },
  {
    name: null,
    desc: "Incorrect operation of the Standby Altitude Indicator",
    code: "FIM 34-12-00-810-801",
  },
  {
    name: null,
    desc: "Incorrect operation of the Standby Airspeed Indicator",
    code: "FIM 34-12-00-810-802",
  },
  {
    name: "Alternate Extension left MLG",
    desc: "the light for the left gear does not come on",
    code: "FIM 32-34-01-810-802",
  },
  {
    name: "Alternate Extension right MLG",
    desc: "the light for the right gear does not come on",
    code: "FIM 32-34-01-810-803",
  },
  {
    name: "Alternate Extension NLG",
    desc: "the light for the nose gear does not come on",
    code: "FIM 32-34-01-810-804",
  },
  {
    name: "L",
    desc: "DOOR warning light on the LANDING GEAR Panel does not come on",
    code: "FIM 32-73-33-810-818",
  },
  {
    name: null,
    desc: "LEFT warning light on the LANDING GEAR Panel does not come on",
    code: "FIM 32-73-33-810-803",
  },
  {
    name: null,
    desc: "LEFT light on the LANDING GEAR Panel does not come on",
    code: "FIM 32-73-33-810-815",
  },
  {
    name: "R",
    desc: "DOOR warning light on the LANDING GEAR Panel does not come on",
    code: "FIM 32-73-33-810-819",
  },
  {
    name: null,
    desc: "RIGHT warning light on the LANDING GEAR Panel does not come on",
    code: "FIM 32-73-33-810-804",
  },
  {
    name: null,
    desc: "RIGHT light on the LANDING GEAR Panel does not come on",
    code: "FIM 32-73-33-810-816",
  },
  {
    name: "N",
    desc: "DOOR warning light on the LANDING GEAR Panel does not come on",
    code: "FIM 32-73-33-810-820",
  },
  {
    name: null,
    desc: "NOSE warning light on the LANDING GEAR Panel does not come on",
    code: "FIM 32-73-33-810-805",
  },
  {
    name: null,
    desc: "NOSE light on the LANDING GEAR Panel does not come on",
    code: "FIM 32-73-33-810-817",
  },
  {
    name: "Lavatory",
    desc: "Yellow low level light that is in the lavatory control box",
    code: "FIM 38-22-00-810-801",
  },
  { name: "Lavatory", desc: "The toilet does not flush", code: "FIM 38-31-11-810-802" },
  {
    name: "Lavatory",
    desc: "The toilet flushes continuously or excessively long",
    code: "FIM 38-31-11-810-801",
  },
  {
    name: "CAWP",
    desc: "#1 BLEED HOT and the #2 BLEED HOT at the same time",
    code: "FIM 36-20-00-810-805",
  },
  {
    name: null,
    desc: "CAWP -#1 ENG OIL PRESS light on the CAWP does not come on",
    code: "FIM 79-30-00-810-805",
  },
  {
    name: null,
    desc: "CAWP -#2 ENG OIL PRESS light on the CAWP does not come on",
    code: "FIM 79-30-00-810-806",
  },
  {
    name: "Oil quantity remote indicating system",
    desc: "malfunction",
    code: "FIM 79-36-00-810-801",
  },
  {
    name: "Index Control Panel (ICP1)",
    desc: "The Panel selections do not operate correctly",
    code: "FIM 31-61-16-810-805",
  },
  {
    name: "Index Control Panel (ICP2)",
    desc: "The Panel selections do not operate correctly",
    code: "FIM 31-61-16-810-806",
  },
  { name: "ARCDU1", desc: "The CALL chime does not sound", code: "FIM 23-31-41-810-801" },
  { name: "ARCDU1", desc: "The EMER chime does not sound", code: "FIM 23-31-41-810-803" },
  { name: "ARCDU2", desc: "The CALL chime does not sound", code: "FIM 23-31-41-810-802" },
  { name: "ARCDU2", desc: "The EMER chime does not sound", code: "FIM 23-31-41-810-804" },
  {
    name: "Attendant Handset aft",
    desc: "The ATT chime does not sound",
    code: "FIM 23-31-11-810-811",
  },
  {
    name: "Attendant Handset aft",
    desc: "The CALL chime does not sound",
    code: "FIM 23-31-11-810-813",
  },
  {
    name: "Attendant Handset aft",
    desc: "The communication audio from the handset does not sound",
    code: "FIM 23-31-11-810-821",
  },
  {
    name: "Attendant Handset aft",
    desc: "The communication audio to the handset does not sound",
    code: "FIM 23-31-11-810-819",
  },
  {
    name: "Attendant Handset aft",
    desc: "The EMER chime does not sound",
    code: "FIM 23-31-11-810-815",
  },
  {
    name: "Attendant Handset aft",
    desc: "The PA audio does not sound",
    code: "FIM 23-31-11-810-817",
  },
  {
    name: "Attendant Handset fwd",
    desc: "The ATT chime does not sound",
    code: "FIM 23-31-11-810-810",
  },
  {
    name: "Attendant Handset fwd",
    desc: "The CALL chime does not sound",
    code: "FIM 23-31-11-810-812",
  },
  {
    name: "Attendant Handset fwd",
    desc: "The communication audio from the handset does not sound",
    code: "FIM 23-31-11-810-820",
  },
  {
    name: "Attendant Handset fwd",
    desc: "The communication audio to the handset does not sound",
    code: "FIM 23-31-11-810-818",
  },
  {
    name: "Attendant Handset fwd",
    desc: "The EMER chime does not sound",
    code: "FIM 23-31-11-810-814",
  },
  {
    name: "Attendant Handset fwd",
    desc: "The PA audio does not sound",
    code: "FIM 23-31-11-810-816",
  },
  { name: "Copilot", desc: "The PA audio does not sound", code: "FIM 23-31-41-810-806" },
  {
    name: "Lavatory",
    desc: "The lavatory CALL chime does not sound",
    code: "FIM 23-31-00-810-803",
  },
  {
    name: "Passenger Comp",
    desc: "The passenger CALL chime does not sound",
    code: "FIM 23-31-00-810-804",
  },
  { name: "ARCDU #1", desc: "The PA audio does not sound", code: "FIM 23-31-41-810-805" },
  { name: null, desc: "PA selections do not operate correctly(PAS)", code: "FIM 23-31-00-810-805" },
  {
    name: null,
    desc:
      "Passenger Address System -The PA power output does not increase 6db when the engines are started",
    code: "FIM 23-30-00-810-809",
  },
  {
    name: null,
    desc: "Passenger Address System -There are no announcements or music from the PES",
    code: "FIM 23-32-00-810-801",
  },
  { name: "PROP Balance Sensor", desc: "Does not operate correctly", code: "FIM 23-35-46-810-801" },
  {
    name: "PROP CONTROL Panel",
    desc: "Cross-hatched light in the #1 ALT FTHR",
    code: "FIM 61-20-00-810-875",
  },
  {
    name: "PROP CONTROL Panel",
    desc: "Cross-hatched light in the #2 ALT FTHR",
    code: "FIM 61-20-00-810-906",
  },
  {
    name: "PROP CONTROL Panel",
    desc: "FTHR light in the #1 ALT FTHR",
    code: "FIM 61-20-00-810-832",
  },
  {
    name: "PROP CONTROL Panel",
    desc: "FTHR light in the #2 ALT FTHR",
    code: "FIM 61-20-00-810-866",
  },
  { name: "PROP CONTROL Panel", desc: "SELECT light", code: "FIM 61-20-00-810-960" },
  {
    name: null,
    desc: "The A/F ARM message incorrectly does not come on",
    code: "FIM 61-41-00-810-811",
  },
  {
    name: null,
    desc: "The A/F SELECT message incorrectly does not come on",
    code: "FIM 61-41-00-810-813",
  },
  {
    name: "PROP 1",
    desc: "The A/F TEST IN PROGRESS message incorrectly does not come on",
    code: "FIM 61-41-00-810-805",
  },
  {
    name: "PROP 1",
    desc: "The OSG TEST IN PROG message incorrectly does not come on",
    code: "FIM 61-41-00-810-817",
  },
  {
    name: "PROP 2",
    desc: "The A/F TEST IN PROGRESS message incorrectly does not come on",
    code: "FIM 61-41-00-810-806",
  },
  {
    name: "PROP 2",
    desc: "The OSG TEST IN PROG message incorrectly does not come on",
    code: "FIM 61-41-00-810-818",
  },
  {
    name: "MFD",
    desc: "The A/F ARM message incorrectly does not come on",
    code: "FIM 61-41-00-810-812",
  },
  {
    name: "MFD",
    desc: "The A/F SELECT message incorrectly does not come on",
    code: "FIM 61-41-00-810-814",
  },
  { name: "PROP #1", desc: "Does not achieve 100% Np", code: "FIM 61-20-00-810-802" },
  { name: "PROP #1", desc: "Slow to unfeather", code: "FIM 61-20-00-810-803" },
  { name: "PROP #1", desc: "Fails to unfeather", code: "FIM 61-20-00-810-804" },
  {
    name: "PROP #1",
    desc: "Uncommanded propeller feather during take-off or in-flight",
    code: "FIM 61-20-00-810-807",
  },
  { name: "PROP #2", desc: "Does not achieve 100% Np", code: "FIM 61-20-00-810-802" },
  { name: "PROP #2", desc: "Slow to unfeather", code: "FIM 61-20-00-810-803" },
  { name: "PROP #2", desc: "Fails to unfeather", code: "FIM 61-20-00-810-804" },
  {
    name: "PROP #2",
    desc: "Uncommanded propeller feather during take-off or in-flight",
    code: "FIM 61-20-00-810-974",
  },
  { name: "PROP #1", desc: "Autofeather Test Fails", code: "FIM 61-20-00-810-805" },
  { name: "PROP #2", desc: "Autofeather Test Fails", code: "FIM 61-20-00-810-805" },
  { name: "PSEU", desc: "An internal malfunction", code: "FIM 32-61-01-810-812" },
  { name: "TAS (MFD1)", desc: "Dashes replace the TAS value", code: "FIM 34-10-00-810-805" },
  {
    name: null,
    desc: "[INCR REF SPEED] message on ED does not come on",
    code: "FIM 27-33-00-810-837",
  },
  {
    name: null,
    desc: "[INCR REF SPEED] message on MFD does not come on",
    code: "FIM 27-33-00-810-838",
  },
  { name: "TAS (MFD2)", desc: "Dashes replace the TAS value", code: "FIM 34-10-00-810-805" },
  {
    name: null,
    desc: "#1 PEC light on the CAWP does not come on when there is a malfunction of the #1 PEC",
    code: "FIM 61-20-00-810-970",
  },
  {
    name: null,
    desc: "#2 PEC light on the CAWP does not come on when there is a malfunction of the #2 PEC",
    code: "FIM 61-20-00-810-971",
  },
  {
    name: null,
    desc: "Hydraulic system allowable external Leak Rates",
    code: "AMM 29-10-00-280-802",
  },
  { name: null, desc: "Engine Time Limits, Operating Limits", code: "AMM 05-11-00-992-802" },
  {
    name: "Insp",
    desc: "After Operation at More Than the Maximum Operating Speed - Overspeed",
    code: "AMM 05-50-28-210-801",
  },
  {
    name: "Insp",
    desc: "After Operation at More Than the Maximum Gear Operation Speed",
    code: "AMM 05-50-31-210-801",
  },
  {
    name: "Insp",
    desc: "After Operation at More than the Wing Flaps Down Speed",
    code: "AMM 05-50-36-210-801",
  },
  { name: null, desc: "Engine Inspection After Heavy Landing", code: "AMM 05-50-06-210-802" },
  { name: "Insp", desc: "fter a Bird Strike Condition", code: "AMM 05-50-16-210-801" },
  { name: null, desc: "Propeller Inspection After a Bird Strike", code: "AMM 05-61-00-210-808" },
  {
    name: null,
    desc: "Engine Inspection After Bird Strike and Soft Material Ingestion",
    code: "AMM 05-53-00-210-809",
  },
  { name: "Insp", desc: "After a Hard Landing", code: "AMM 05-50-06-210-801" },
  { name: "Insp", desc: "and Classification of Fuel Leaks", code: "AMM 28-10-11-790-802" },
  { name: "Insp", desc: "After a Lightning Strike", code: "AMM 05-50-21-210-801" },
];

/**
 * DASHBOARD ENGINE/APU/ECS FAULTS:
 *
 * [
 *   {
 *     name: name of this fault,
 *     file: relative path for file to be loaded on sub page,
 *     buttons: [
 *       {
 *         name: name to show up in the navbar for this button,
 *         path: relative path to page ('INTERNAL' or 'POPUP') or URL ('EXTERNAL'),
 *         mode: setting how to handle button: 'POPUP', 'INTERNAL',
 *         file: relative path to html (only for 'POPUP'),
 *       },
 *       ...
 *     ],
 *   }
 * ]
 */
export const ENGINE_APU_ECS_FAULTS = [
  {
    name: "6",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_6_7.html",
    buttons: [],
  },
  {
    name: "7",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_6_7.html",
    buttons: [],
  },
  {
    name: "8",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_8_9.html",
    buttons: [],
  },
  {
    name: "9",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_8_9.html",
    buttons: [],
  },
  {
    name: "10",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_10_11.html",
    buttons: [],
  },
  {
    name: "11",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_10_11.html",
    buttons: [],
  },
  {
    name: "12",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_12_13.html",
    buttons: [],
  },
  {
    name: "13",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_12_13.html",
    buttons: [],
  },
  {
    name: "14",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_14_15.html",
    buttons: [],
  },
  {
    name: "15",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_14_15.html",
    buttons: [],
  },
  {
    name: "16",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_16_17.html",
    buttons: [],
  },
  {
    name: "17",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_16_17.html",
    buttons: [],
  },
  {
    name: "18",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_18_19.html",
    buttons: [],
  },
  {
    name: "19",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_18_19.html",
    buttons: [],
  },
  {
    name: "20",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_20_21.html",
    buttons: [],
  },
  {
    name: "21",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_20_21.html",
    buttons: [],
  },
  {
    name: "22",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_22_23.html",
    buttons: [],
  },
  {
    name: "23",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_22_23.html",
    buttons: [],
  },
  {
    name: "24",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_24.html",
    buttons: [],
  },
  {
    name: "26",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_26.html",
    buttons: [],
  },
  {
    name: "28",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_28.html",
    buttons: [],
  },
  {
    name: "30",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_30.html",
    buttons: [],
  },
  {
    name: "40",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_40_41.html",
    buttons: [],
  },
  {
    name: "41",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_40_41.html",
    buttons: [],
  },
  {
    name: "60",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_60_61.html",
    buttons: [],
  },
  {
    name: "61",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_60_61.html",
    buttons: [],
  },
  {
    name: "62",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_62_63.html",
    buttons: [],
  },
  {
    name: "63",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_62_63.html",
    buttons: [],
  },
  {
    name: "64",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_64_65.html",
    buttons: [],
  },
  {
    name: "65",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_64_65.html",
    buttons: [],
  },
  {
    name: "66",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_66_67.html",
    buttons: [],
  },
  {
    name: "67",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_66_67.html",
    buttons: [],
  },
  {
    name: "68",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_68_69.html",
    buttons: [],
  },
  {
    name: "69",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_68_69.html",
    buttons: [],
  },
  {
    name: "70",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_70_71.html",
    buttons: [],
  },
  {
    name: "71",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_70_71.html",
    buttons: [],
  },
  {
    name: "72",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_72_73.html",
    buttons: [],
  },
  {
    name: "73",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_72_73.html",
    buttons: [],
  },
  {
    name: "74",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_74_75.html",
    buttons: [],
  },
  {
    name: "75",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_74_75.html",
    buttons: [],
  },
  {
    name: "80",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_80_81.html",
    buttons: [],
  },
  {
    name: "81",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_80_81.html",
    buttons: [],
  },
  {
    name: "82",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_82_83.html",
    buttons: [],
  },
  {
    name: "83",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_82_83.html",
    buttons: [],
  },
  {
    name: "84",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_84_85.html",
    buttons: [],
  },
  {
    name: "85",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_84_85.html",
    buttons: [],
  },
  {
    name: "86",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_86_87.html",
    buttons: [],
  },
  {
    name: "87",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_86_87.html",
    buttons: [],
  },
  {
    name: "88",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_88_89.html",
    buttons: [],
  },
  {
    name: "89",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_88_89.html",
    buttons: [],
  },
  {
    name: "90",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_90_91.html",
    buttons: [],
  },
  {
    name: "91",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_90_91.html",
    buttons: [],
  },
  {
    name: "92",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_92_93.html",
    buttons: [],
  },
  {
    name: "93",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_92_93.html",
    buttons: [],
  },
  {
    name: "94",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_94_95.html",
    buttons: [],
  },
  {
    name: "95",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_94_95.html",
    buttons: [],
  },
  {
    name: "96",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_96_97.html",
    buttons: [],
  },
  {
    name: "97",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_96_97.html",
    buttons: [],
  },
  {
    name: "98",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_98_99.html",
    buttons: [],
  },
  {
    name: "99",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_98_99.html",
    buttons: [],
  },
  {
    name: "100",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_100_101.html",
    buttons: [],
  },
  {
    name: "101",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_100_101.html",
    buttons: [],
  },
  {
    name: "102",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_102_103.html",
    buttons: [],
  },
  {
    name: "103",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_102_103.html",
    buttons: [],
  },
  {
    name: "104",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_104_105.html",
    buttons: [],
  },
  {
    name: "105",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_104_105.html",
    buttons: [],
  },
  {
    name: "106",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_106_107.html",
    buttons: [],
  },
  {
    name: "107",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_106_107.html",
    buttons: [],
  },
  {
    name: "108",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_108_109.html",
    buttons: [],
  },
  {
    name: "109",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_108_109.html",
    buttons: [],
  },
  {
    name: "110",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_110_111.html",
    buttons: [],
  },
  {
    name: "111",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_110_111.html",
    buttons: [],
  },
  {
    name: "112",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_112_113.html",
    buttons: [],
  },
  {
    name: "113",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_112_113.html",
    buttons: [],
  },
  {
    name: "120",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_120_121.html",
    buttons: [],
  },
  {
    name: "121",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_120_121.html",
    buttons: [],
  },
  {
    name: "122",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_122_123.html",
    buttons: [],
  },
  {
    name: "123",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_122_123.html",
    buttons: [],
  },
  {
    name: "124",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_124_125.html",
    buttons: [],
  },
  {
    name: "125",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_124_125.html",
    buttons: [],
  },
  {
    name: "126",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_126_127.html",
    buttons: [],
  },
  {
    name: "127",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_126_127.html",
    buttons: [],
  },
  {
    name: "130",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_130_131.html",
    buttons: [],
  },
  {
    name: "131",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_130_131.html",
    buttons: [],
  },
  {
    name: "132",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_132_133.html",
    buttons: [],
  },
  {
    name: "133",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_132_133.html",
    buttons: [],
  },
  {
    name: "134",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_134.html",
    buttons: [],
  },
  {
    name: "140",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_140_141.html",
    buttons: [],
  },
  {
    name: "141",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_140_141.html",
    buttons: [],
  },
  {
    name: "142",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_142_143.html",
    buttons: [],
  },
  {
    name: "143",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_142_143.html",
    buttons: [],
  },
  {
    name: "144",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_144_145.html",
    buttons: [],
  },
  {
    name: "145",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_144_145.html",
    buttons: [],
  },
  {
    name: "156",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_156_157.html",
    buttons: [],
  },
  {
    name: "157",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_156_157.html",
    buttons: [],
  },
  {
    name: "158",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_158.html",
    buttons: [],
  },
  {
    name: "160",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_160_161.html",
    buttons: [],
  },
  {
    name: "161",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_160_161.html",
    buttons: [],
  },
  {
    name: "162",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_162_163.html",
    buttons: [],
  },
  {
    name: "163",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_162_163.html",
    buttons: [],
  },
  {
    name: "164",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_164_165.html",
    buttons: [],
  },
	{
    name: "165",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_164_165.html",
    buttons: [],
  },
  {
    name: "166",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_166_167.html",
    buttons: [],
  },
  {
    name: "167",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_166_167.html",
    buttons: [],
  },
  {
    name: "180",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_180_181.html",
    buttons: [],
  },
  {
    name: "181",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_180_181.html",
    buttons: [],
  },
  {
    name: "182",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_182_183.html",
    buttons: [],
  },
  {
    name: "183",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_182_183.html",
    buttons: [],
  },
  {
    name: "184",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_184_185.html",
    buttons: [],
  },
  {
    name: "185",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_184_185.html",
    buttons: [],
  },
  {
    name: "186",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_186_187.html",
    buttons: [],
  },
  {
    name: "187",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_186_187.html",
    buttons: [],
  },
  {
    name: "190",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_190_191.html",
    buttons: [],
  },
  {
    name: "191",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_190_191.html",
    buttons: [],
  },
  {
    name: "192",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_192_193.html",
    buttons: [],
  },
  {
    name: "193",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_192_193.html",
    buttons: [],
  },
  {
    name: "198",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_198_199.html",
    buttons: [],
  },
  {
    name: "199",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_198_199.html",
    buttons: [],
  },
  {
    name: "200",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_200_201.html",
    buttons: [],
  },
  {
    name: "201",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_200_201.html",
    buttons: [],
  },
  {
    name: "202",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_202_203.html",
    buttons: [],
  },
  {
    name: "203",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_202_203.html",
    buttons: [],
  },
  {
    name: "204",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_204_205.html",
    buttons: [],
  },
  {
    name: "205",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_204_205.html",
    buttons: [],
  },
  {
    name: "206",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_206.html",
    buttons: [],
  },
  {
    name: "208",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_208_209.html",
    buttons: [],
  },
  {
    name: "209",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_208_209.html",
    buttons: [],
  },
  {
    name: "210",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_210_211.html",
    buttons: [],
  },
  {
    name: "211",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_210_211.html",
    buttons: [],
  },
  {
    name: "212",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_212_213.html",
    buttons: [],
  },
  {
    name: "213",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_212_213.html",
    buttons: [],
  },
  {
    name: "214",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_214_215.html",
    buttons: [],
  },
  {
    name: "215",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_214_215.html",
    buttons: [],
  },
  {
    name: "216",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_216_217.html",
    buttons: [],
  },
  {
    name: "217",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_216_217.html",
    buttons: [],
  },
  {
    name: "218",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_218_219.html",
    buttons: [],
  },
  {
    name: "219",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_218_219.html",
    buttons: [],
  },
  {
    name: "220",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_220_221.html",
    buttons: [],
  },
  {
    name: "221",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_220_221.html",
    buttons: [],
  },
  {
    name: "222",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_222_223.html",
    buttons: [],
  },
  {
    name: "223",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_222_223.html",
    buttons: [],
  },
  {
    name: "224",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_224_225.html",
    buttons: [],
  },
  {
    name: "225",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_224_225.html",
    buttons: [],
  },
  {
    name: "230",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_230_231.html",
    buttons: [],
  },
  {
    name: "231",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_230_231.html",
    buttons: [],
  },
  {
    name: "232",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_232_233.html",
    buttons: [],
  },
  {
    name: "233",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_232_233.html",
    buttons: [],
  },
  {
    name: "236",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_236_237.html",
    buttons: [],
  },
  {
    name: "237",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_236_237.html",
    buttons: [],
  },
  {
    name: "238",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_238_239.html",
    buttons: [],
  },
  {
    name: "239",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_238_239.html",
    buttons: [],
  },
  {
    name: "240",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_240_241.html",
    buttons: [],
  },
  {
    name: "241",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_240_241.html",
    buttons: [],
  },
  {
    name: "242",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_242_243.html",
    buttons: [],
  },
  {
    name: "243",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_242_243.html",
    buttons: [],
  },
  {
    name: "244",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_244_245.html",
    buttons: [],
  },
  {
    name: "245",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_244_245.html",
    buttons: [],
  },
  {
    name: "246",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_246_247.html",
    buttons: [],
  },
  {
    name: "247",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_246_247.html",
    buttons: [],
  },
  {
    name: "248",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_248_249.html",
    buttons: [],
  },
  {
    name: "249",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_248_249.html",
    buttons: [],
  },
  {
    name: "250",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_250_251.html",
    buttons: [],
  },
  {
    name: "251",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_250_251.html",
    buttons: [],
  },
  {
    name: "252",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_252_253.html",
    buttons: [],
  },
  {
    name: "253",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_252_253.html",
    buttons: [],
  },
  {
    name: "258",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_258.html",
    buttons: [],
  },
  {
    name: "260",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_260.html",
    buttons: [],
  },
  {
    name: "262",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_262_263.html",
    buttons: [],
  },
  {
    name: "263",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_262_263.html",
    buttons: [],
  },
  {
    name: "264",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_264_265.html",
    buttons: [],
  },
  {
    name: "265",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_264_265.html",
    buttons: [],
  },
  {
    name: "268",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_268_269.html",
    buttons: [],
  },
  {
    name: "269",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_268_269.html",
    buttons: [],
  },
  {
    name: "270",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_270_271.html",
    buttons: [],
  },
  {
    name: "271",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_270_271.html",
    buttons: [],
  },
  {
    name: "272",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_272_273.html",
    buttons: [],
  },
  {
    name: "273",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_272_273.html",
    buttons: [],
  },
  {
    name: "274",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_274_275.html",
    buttons: [],
  },
  {
    name: "275",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_274_275.html",
    buttons: [],
  },
  {
    name: "276",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_276_277.html",
    buttons: [],
  },
  {
    name: "277",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_276_277.html",
    buttons: [],
  },
  {
    name: "278",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_278_279.html",
    buttons: [],
  },
  {
    name: "279",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_278_279.html",
    buttons: [],
  },
  {
    name: "290",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_290.html",
    buttons: [],
  },
  {
    name: "300",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_300_301.html",
    buttons: [],
  },
  {
    name: "301",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_300_301.html",
    buttons: [],
  },
  {
    name: "302",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_302_303.html",
    buttons: [],
  },
  {
    name: "303",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_302_303.html",
    buttons: [],
  },
  {
    name: "304",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_304_305.html",
    buttons: [],
  },
  {
    name: "305",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_304_305.html",
    buttons: [],
  },
  {
    name: "306",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_306_307.html",
    buttons: [],
  },
  {
    name: "307",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_306_307.html",
    buttons: [],
  },
  {
    name: "320",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_320_321.html",
    buttons: [],
  },
  {
    name: "321",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_320_321.html",
    buttons: [],
  },
  {
    name: "322",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_322_323.html",
    buttons: [],
  },
  {
    name: "323",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_322_323.html",
    buttons: [],
  },
  {
    name: "324",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_324_325.html",
    buttons: [],
  },
  {
    name: "325",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_324_325.html",
    buttons: [],
  },
  {
    name: "336",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_336_337.html",
    buttons: [],
  },
  {
    name: "337",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_336_337.html",
    buttons: [],
  },
  {
    name: "338",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_338_339.html",
    buttons: [],
  },
  {
    name: "339",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_338_339.html",
    buttons: [],
  },
  {
    name: "340",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_340.html",
    buttons: [],
  },
  {
    name: "346",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_346_347.html",
    buttons: [],
  },
  {
    name: "347",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_346_347.html",
    buttons: [],
  },
  {
    name: "348",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_348_349.html",
    buttons: [],
  },
  {
    name: "349",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_348_349.html",
    buttons: [],
  },
  {
    name: "350",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_350_351.html",
    buttons: [],
  },
  {
    name: "351",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_350_351.html",
    buttons: [],
  },
  {
    name: "352",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_352_353.html",
    buttons: [],
  },
  {
    name: "353",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_352_353.html",
    buttons: [],
  },
  {
    name: "360",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_360_361.html",
    buttons: [],
  },
  {
    name: "361",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_360_361.html",
    buttons: [],
  },
  {
    name: "362",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_362_363.html",
    buttons: [],
  },
  {
    name: "363",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_362_363.html",
    buttons: [],
  },
  {
    name: "364",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_364_365.html",
    buttons: [],
  },
  {
    name: "365",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_364_365.html",
    buttons: [],
  },
  {
    name: "374",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_374_375.html",
    buttons: [],
  },
  {
    name: "375",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_374_375.html",
    buttons: [],
  },
  {
    name: "376",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_376_377.html",
    buttons: [],
  },
  {
    name: "377",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_376_377.html",
    buttons: [],
  },
  {
    name: "378",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_378_379.html",
    buttons: [],
  },
  {
    name: "379",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_378_379.html",
    buttons: [],
  },
  {
    name: "380",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_380_381.html",
    buttons: [],
  },
  {
    name: "381",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_380_381.html",
    buttons: [],
  },
  {
    name: "382",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_382_383.html",
    buttons: [],
  },
  {
    name: "383",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_382_383.html",
    buttons: [],
  },
  {
    name: "384",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_384_385.html",
    buttons: [],
  },
  {
    name: "385",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_384_385.html",
    buttons: [],
  },
  {
    name: "396",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_396_397.html",
    buttons: [],
  },
  {
    name: "397",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_396_397.html",
    buttons: [],
  },
  {
    name: "398",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_398_399.html",
    buttons: [],
  },
  {
    name: "399",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_398_399.html",
    buttons: [],
  },
  {
    name: "400",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_400_401.html",
    buttons: [],
  },
  {
    name: "401",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_400_401.html",
    buttons: [],
  },
  {
    name: "402",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_402_403.html",
    buttons: [],
  },
  {
    name: "403",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_402_403.html",
    buttons: [],
  },
  {
    name: "404",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_404.html",
    buttons: [],
  },
  {
    name: "406",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_406_407.html",
    buttons: [],
  },
  {
    name: "407",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_406_407.html",
    buttons: [],
  },
  {
    name: "408",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_408_409.html",
    buttons: [],
  },
  {
    name: "409",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_408_409.html",
    buttons: [],
  },
  {
    name: "420",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_420_421.html",
    buttons: [],
  },
  {
    name: "421",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_420_421.html",
    buttons: [],
  },
  {
    name: "422",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_422_423.html",
    buttons: [],
  },
  {
    name: "423",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_422_423.html",
    buttons: [],
  },
  {
    name: "424",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_424_425.html",
    buttons: [],
  },
  {
    name: "425",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_424_425.html",
    buttons: [],
  },
  {
    name: "428",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_428_429.html",
    buttons: [],
  },
  {
    name: "429",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_428_429.html",
    buttons: [],
  },
  {
    name: "430",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_430_431.html",
    buttons: [],
  },
  {
    name: "431",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_430_431.html",
    buttons: [],
  },
  {
    name: "454",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_454_455.html",
    buttons: [],
  },
  {
    name: "455",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_454_455.html",
    buttons: [],
  },
  {
    name: "456",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_456_457.html",
    buttons: [],
  },
  {
    name: "457",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_456_457.html",
    buttons: [],
  },
  {
    name: "458",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_458_459.html",
    buttons: [],
  },
  {
    name: "459",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_458_459.html",
    buttons: [],
  },
  {
    name: "460",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_460_461.html",
    buttons: [],
  },
  {
    name: "461",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_460_461.html",
    buttons: [],
  },
  {
    name: "462",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_462_463.html",
    buttons: [],
  },
  {
    name: "463",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_462_463.html",
    buttons: [],
  },
  {
    name: "464",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_464_465.html",
    buttons: [],
  },
  {
    name: "465",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_464_465.html",
    buttons: [],
  },
  {
    name: "466",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_466.html",
    buttons: [],
  },
  {
    name: "468",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_468_487.html",
    buttons: [],
  },
  {
    name: "487",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_468_487.html",
    buttons: [],
  },
  {
    name: "470",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_470_471.html",
    buttons: [],
  },
  {
    name: "471",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_470_471.html",
    buttons: [],
  },
  {
    name: "472",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_472_473.html",
    buttons: [],
  },
  {
    name: "473",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_472_473.html",
    buttons: [],
  },
  {
    name: "474",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_474_475.html",
    buttons: [],
  },
  {
    name: "475",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_474_475.html",
    buttons: [],
  },
  {
    name: "476",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_476_477.html",
    buttons: [],
  },
  {
    name: "477",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_476_477.html",
    buttons: [],
  },
  {
    name: "478",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_478_479.html",
    buttons: [],
  },
  {
    name: "479",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_478_479.html",
    buttons: [],
  },
  {
    name: "480",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_480_481.html",
    buttons: [],
  },
  {
    name: "481",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_480_481.html",
    buttons: [],
  },
  {
    name: "482",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_482_483.html",
    buttons: [],
  },
  {
    name: "483",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_482_483.html",
    buttons: [],
  },
  {
    name: "484",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_484_485.html",
    buttons: [],
  },
  {
    name: "485",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_484_485.html",
    buttons: [],
  },
  {
    name: "488",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_488_489.html",
    buttons: [],
  },
  {
    name: "489",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_488_489.html",
    buttons: [],
  },
  {
    name: "494",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_494_495.html",
    buttons: [],
  },
  {
    name: "495",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_494_495.html",
    buttons: [],
  },
  {
    name: "496",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_496_497.html",
    buttons: [],
  },
  {
    name: "497",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_496_497.html",
    buttons: [],
  },
  {
    name: "498",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_498_499.html",
    buttons: [],
  },
  {
    name: "499",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_498_499.html",
    buttons: [],
  },
  {
    name: "700",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_700_703.html",
    buttons: [],
  },
  {
    name: "701",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_700_703.html",
    buttons: [],
  },
  {
    name: "702",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_700_703.html",
    buttons: [],
  },
  {
    name: "703",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_700_703.html",
    buttons: [],
  },
  {
    name: "705",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_705.html",
    buttons: [],
  },
  {
    name: "707",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_707_711.html",
    buttons: [],
  },
  {
    name: "708",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_707_711.html",
    buttons: [],
  },
  {
    name: "709",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_707_711.html",
    buttons: [],
  },
  {
    name: "710",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_707_711.html",
    buttons: [],
  },
  {
    name: "711",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_707_711.html",
    buttons: [],
  },
  {
    name: "715",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_715.html",
    buttons: [],
  },
  {
    name: "716",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_716.html",
    buttons: [],
  },
  {
    name: "717",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_717.html",
    buttons: [],
  },
  {
    name: "718",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_718.html",
    buttons: [],
  },
  {
    name: "719",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_719.html",
    buttons: [],
  },
  {
    name: "720",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_720.html",
    buttons: [],
  },
  {
    name: "721",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_721.html",
    buttons: [],
  },
  {
    name: "722",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_722.html",
    buttons: [],
  },
  {
    name: "723",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_723.html",
    buttons: [],
  },
  {
    name: "724",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_725.html",
    buttons: [],
  },
  {
    name: "725",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_725.html",
    buttons: [],
  },
  {
    name: "726",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_726.html",
    buttons: [],
  },
  {
    name: "727",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_727.html",
    buttons: [],
  },
  {
    name: "732",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_732.html",
    buttons: [],
  },
  {
    name: "733",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_733.html",
    buttons: [],
  },
  {
    name: "734",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_734.html",
    buttons: [],
  },
  {
    name: "735",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_735.html",
    buttons: [],
  },
  {
    name: "736",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_736.html",
    buttons: [],
  },
  {
    name: "737",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_737.html",
    buttons: [],
  },
  {
    name: "738",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_738.html",
    buttons: [],
  },
  {
    name: "739",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_739.html",
    buttons: [],
  },
  {
    name: "740",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_740.html",
    buttons: [],
  },
  {
    name: "741",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_741.html",
    buttons: [],
  },
  {
    name: "742",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_742.html",
    buttons: [],
  },
  {
    name: "743",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_743.html",
    buttons: [],
  },
  {
    name: "744",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_744.html",
    buttons: [],
  },
  {
    name: "748",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_748_749.html",
    buttons: [],
  },
  {
    name: "749",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_748_749.html",
    buttons: [],
  },
  {
    name: "750",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_750.html",
    buttons: [],
  },
  {
    name: "751",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_751.html",
    buttons: [],
  },
  {
    name: "752",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_752.html",
    buttons: [],
  },
  {
    name: "753",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_753.html",
    buttons: [],
  },
  {
    name: "754",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_754.html",
    buttons: [],
  },
  {
    name: "755",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_755.html",
    buttons: [],
  },
  {
    name: "756",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_756_757.html",
    buttons: [],
  },
  {
    name: "757",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_756_757.html",
    buttons: [],
  },
  {
    name: "758",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_758.html",
    buttons: [],
  },
  {
    name: "759",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_759.html",
    buttons: [],
  },
  {
    name: "760",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_760.html",
    buttons: [],
  },
  {
    name: "762",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_762.html",
    buttons: [],
  },
  {
    name: "763",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_763.html",
    buttons: [],
  },
  {
    name: "764",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_764.html",
    buttons: [],
  },
  {
    name: "765",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_765.html",
    buttons: [],
  },
  {
    name: "766",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_766.html",
    buttons: [],
  },
  {
    name: "767",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_767.html",
    buttons: [],
  },
  {
    name: "768",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_768.html",
    buttons: [],
  },
  {
    name: "771",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_771.html",
    buttons: [],
  },
  {
    name: "772",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_772.html",
    buttons: [],
  },
  {
    name: "773",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_773.html",
    buttons: [],
  },
  {
    name: "774",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_774.html",
    buttons: [],
  },
  {
    name: "775",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_775.html",
    buttons: [],
  },
  {
    name: "776",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_776.html",
    buttons: [],
  },
  {
    name: "777",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_777.html",
    buttons: [],
  },
  {
    name: "778",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_778.html",
    buttons: [],
  },
  {
    name: "779",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_779.html",
    buttons: [],
  },
  {
    name: "780",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_780.html",
    buttons: [],
  },
  {
    name: "781",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_781.html",
    buttons: [],
  },
  {
    name: "782",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_782.html",
    buttons: [],
  },
  {
    name: "783",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_783.html",
    buttons: [],
  },
  {
    name: "784",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_784.html",
    buttons: [],
  },
  {
    name: "785",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_785.html",
    buttons: [],
  },
  {
    name: "786",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_786.html",
    buttons: [],
  },
  {
    name: "787",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_787.html",
    buttons: [],
  },
  {
    name: "788",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_788.html",
    buttons: [],
  },
  {
    name: "789",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_789.html",
    buttons: [],
  },
  {
    name: "790",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_790.html",
    buttons: [],
  },
  {
    name: "791",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_791_793.html",
    buttons: [],
  },
  {
    name: "792",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_791_793.html",
    buttons: [],
  },
  {
    name: "793",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_791_793.html",
    buttons: [],
  },
  {
    name: "794",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_794.html",
    buttons: [],
  },
  {
    name: "796",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_796_797.html",
    buttons: [],
  },
  {
    name: "797",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_796_797.html",
    buttons: [],
  },
  {
    name: "798",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_798.html",
    buttons: [],
  },
  {
    name: "799",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_799.html",
    buttons: [],
  },
  {
    name: "801",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_801.html",
    buttons: [],
  },
  {
    name: "803",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_803.html",
    buttons: [],
  },
  {
    name: "804",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_804.html",
    buttons: [],
  },
  {
    name: "805",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_805.html",
    buttons: [],
  },
  {
    name: "806",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_806.html",
    buttons: [],
  },
  {
    name: "807",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_807_808.html",
    buttons: [],
  },
  {
    name: "808",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_807_808.html",
    buttons: [],
  },
  {
    name: "809",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_809.html",
    buttons: [],
  },
  {
    name: "810",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_810.html",
    buttons: [],
  },
  {
    name: "811",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_811.html",
    buttons: [],
  },
  {
    name: "812",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_812.html",
    buttons: [],
  },
  {
    name: "813",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_813.html",
    buttons: [],
  },
  {
    name: "814",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_814.html",
    buttons: [],
  },
  {
    name: "815",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_815.html",
    buttons: [],
  },
  {
    name: "816",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_816.html",
    buttons: [],
  },
  {
    name: "817",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_817_818.html",
    buttons: [],
  },
  {
    name: "818",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_817_818.html",
    buttons: [],
  },
  {
    name: "819",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_819_820.html",
    buttons: [],
  },
  {
    name: "820",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_819_820.html",
    buttons: [],
  },
  {
    name: "821",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_821.html",
    buttons: [],
  },
  {
    name: "822",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_822.html",
    buttons: [],
  },
  {
    name: "823",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_823.html",
    buttons: [],
  },
  {
    name: "824",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_824.html",
    buttons: [],
  },
  {
    name: "825",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_825.html",
    buttons: [],
  },
  {
    name: "900",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_900.html",
    buttons: [],
  },
  {
    name: "901",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_901.html",
    buttons: [],
  },
  {
    name: "902",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_902.html",
    buttons: [],
  },
  {
    name: "903",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_903.html",
    buttons: [],
  },
  {
    name: "904",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_904.html",
    buttons: [],
  },
  {
    name: "905",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_905.html",
    buttons: [],
  },
  {
    name: "906",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_906.html",
    buttons: [],
  },
  {
    name: "907",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_907.html",
    buttons: [],
  },
  {
    name: "908",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_908.html",
    buttons: [],
  },
  {
    name: "909",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_909_910.html",
    buttons: [],
  },
  {
    name: "910",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_909_910.html",
    buttons: [],
  },
  {
    name: "911",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_911.html",
    buttons: [],
  },
  {
    name: "912",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_912.html",
    buttons: [],
  },
  {
    name: "913",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_913.html",
    buttons: [],
  },
  {
    name: "914",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_914.html",
    buttons: [],
  },
  {
    name: "915",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_915.html",
    buttons: [],
  },
  {
    name: "916",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_916.html",
    buttons: [],
  },
  {
    name: "917",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_917.html",
    buttons: [],
  },
  {
    name: "918",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_918.html",
    buttons: [],
  },
  {
    name: "919",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_919_920.html",
    buttons: [],
  },
  {
    name: "920",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_919_920.html",
    buttons: [],
  },
  {
    name: "921",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_921.html",
    buttons: [],
  },
  {
    name: "922",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_922.html",
    buttons: [],
  },
  {
    name: "923",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_923_925.html",
    buttons: [],
  },
  {
    name: "924",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_923_925.html",
    buttons: [],
  },
  {
    name: "925",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_923_925.html",
    buttons: [],
  },
  {
    name: "926",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_926.html",
    buttons: [],
  },
  {
    name: "927",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_927.html",
    buttons: [],
  },
  {
    name: "928",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_928.html",
    buttons: [],
  },
  {
    name: "929",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_929.html",
    buttons: [],
  },
  {
    name: "930",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_930.html",
    buttons: [],
  },
  {
    name: "931",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_931.html",
    buttons: [],
  },
  {
    name: "932",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_932.html",
    buttons: [],
  },
  {
    name: "933",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_933.html",
    buttons: [],
  },
  {
    name: "934",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_934.html",
    buttons: [],
  },
  {
    name: "935",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_935.html",
    buttons: [],
  },
  {
    name: "936",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_936.html",
    buttons: [],
  },
  {
    name: "937",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_937.html",
    buttons: [],
  },
  {
    name: "938",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_938.html",
    buttons: [],
  },
  {
    name: "939",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_939.html",
    buttons: [],
  },
  {
    name: "940",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_940.html",
    buttons: [],
  },
  {
    name: "941",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_941.html",
    buttons: [],
  },
  {
    name: "942",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_942.html",
    buttons: [],
  },
  {
    name: "943",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_943.html",
    buttons: [],
  },
  {
    name: "944",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_944.html",
    buttons: [],
  },
  {
    name: "945",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_945_946.html",
    buttons: [],
  },
  {
    name: "946",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_945_946.html",
    buttons: [],
  },
  {
    name: "947",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_947.html",
    buttons: [],
  },
  {
    name: "949",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_949.html",
    buttons: [],
  },
  {
    name: "950",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_950.html",
    buttons: [],
  },
  {
    name: "952",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_952.html",
    buttons: [],
  },
  {
    name: "953",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_953.html",
    buttons: [],
  },
  {
    name: "954",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_954.html",
    buttons: [],
  },
  {
    name: "963",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_963.html",
    buttons: [],
  },
  {
    name: "964",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_964.html",
    buttons: [],
  },
  {
    name: "965",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_965.html",
    buttons: [],
  },
  {
    name: "966",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_966.html",
    buttons: [],
  },
  {
    name: "967",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_967.html",
    buttons: [],
  },
  {
    name: "968",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_968.html",
    buttons: [],
  },
  {
    name: "969",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_969.html",
    buttons: [],
  },
  {
    name: "970",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_970.html",
    buttons: [],
  },
  {
    name: "971",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_971.html",
    buttons: [],
  },
  {
    name: "972",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_972.html",
    buttons: [],
  },
  {
    name: "973",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_973.html",
    buttons: [],
  },
  {
    name: "974",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_974.html",
    buttons: [],
  },
  {
    name: "975",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_975.html",
    buttons: [],
  },
  {
    name: "976",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_976.html",
    buttons: [],
  },
  {
    name: "977",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_977_978.html",
    buttons: [],
  },
  {
    name: "978",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_977_978.html",
    buttons: [],
  },
  {
    name: "979",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_979.html",
    buttons: [],
  },
  {
    name: "998",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_998_999.html",
    buttons: [],
  },
  {
    name: "999",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_998_999.html",
    buttons: [],
  },
  {
    name: "1500",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1500.html",
    buttons: [],
  },
  {
    name: "1501,ENG",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1501.html",
    buttons: [],
  },
  {
    name: "1502,ENG",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1502.html",
    buttons: [],
  },
  {
    name: "1504",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1504.html",
    buttons: [],
  },
  {
    name: "1505",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1505.html",
    buttons: [],
  },
  {
    name: "1600",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1600_1609.html",
    buttons: [],
  },
  {
    name: "1601,ENG",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1600_1609.html",
    buttons: [],
  },
  {
    name: "1602",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1600_1609.html",
    buttons: [],
  },
  {
    name: "1603",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1600_1609.html",
    buttons: [],
  },
  {
    name: "1604",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1600_1609.html",
    buttons: [],
  },
  {
    name: "1605",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1600_1609.html",
    buttons: [],
  },
  {
    name: "1606",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1600_1609.html",
    buttons: [],
  },
  {
    name: "1607",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1600_1609.html",
    buttons: [],
  },
  {
    name: "1608",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1600_1609.html",
    buttons: [],
  },
  {
    name: "1609",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1600_1609.html",
    buttons: [],
  },
  {
    name: "1610",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1610_1611.html",
    buttons: [],
  },
  {
    name: "1611",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1610_1611.html",
    buttons: [],
  },
  {
    name: "1612",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1612.html",
    buttons: [],
  },
  {
    name: "1613",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1613.html",
    buttons: [],
  },
  {
    name: "1614",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1614_1618.html",
    buttons: [],
  },
  {
    name: "1615",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1614_1618.html",
    buttons: [],
  },
  {
    name: "1616",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1614_1618.html",
    buttons: [],
  },
  {
    name: "1617",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1614_1618.html",
    buttons: [],
  },
  {
    name: "1618",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1614_1618.html",
    buttons: [],
  },
  {
    name: "1619",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1619.html",
    buttons: [],
  },
  {
    name: "1620",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1621",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1622",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1623",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1624",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1625",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1626",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1627",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1628",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1629",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1630",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1631",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1632",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1633",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1634",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1635",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1636",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1637",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1638",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1639",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1640",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1641",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1642",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1643",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1644",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1645",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1646",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1647",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1648",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1649",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1650",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1651",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1620_1651.html",
    buttons: [],
  },
  {
    name: "1652",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1652_1656.html",
    buttons: [],
  },
  {
    name: "1653",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1652_1656.html",
    buttons: [],
  },
  {
    name: "1654",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1652_1656.html",
    buttons: [],
  },
  {
    name: "1655",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1652_1656.html",
    buttons: [],
  },
  {
    name: "1656",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1652_1656.html",
    buttons: [],
  },
  {
    name: "1657",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1657.html",
    buttons: [],
  },
  {
    name: "1700",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1700.html",
    buttons: [],
  },
  {
    name: "1701,ENG",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1701.html",
    buttons: [],
  },
  {
    name: "1702",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1702.html",
    buttons: [],
  },
  {
    name: "1703",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1703.html",
    buttons: [],
  },
  {
    name: "1704",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1704.html",
    buttons: [],
  },
  {
    name: "1705",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1705.html",
    buttons: [],
  },
  {
    name: "1706",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1706.html",
    buttons: [],
  },
  {
    name: "1707",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1707.html",
    buttons: [],
  },
  {
    name: "1708",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1708.html",
    buttons: [],
  },
  {
    name: "1709",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1709.html",
    buttons: [],
  },
  {
    name: "1710",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1710.html",
    buttons: [],
  },
  {
    name: "1711",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1711.html",
    buttons: [],
  },
  {
    name: "1800",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1800.html",
    buttons: [],
  },
  {
    name: "1803",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1803.html",
    buttons: [],
  },
  {
    name: "1804",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1804.html",
    buttons: [],
  },
  {
    name: "1805",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1805.html",
    buttons: [],
  },
  {
    name: "1806",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/eng_1806.html",
    buttons: [],
  },
	
	
  {
    name: "001-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_001_0.html",
    buttons: [],
  },
  {
    name: "006-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_006-0_006_3.html",
    buttons: [],
  },
  {
    name: "006-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_006-0_006_3.html",
    buttons: [],
  },
	{
    name: "007-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_007-0_007-4.html",
    buttons: [],
  },
  {
    name: "007-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_007-0_007-4.html",
    buttons: [],
  },
  {
    name: "007-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_007-0_007-4.html",
    buttons: [],
  },
  {
    name: "007-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_007-0_007-4.html",
    buttons: [],
  },
  {
    name: "007-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_007-0_007-4.html",
    buttons: [],
  },
  {
    name: "011-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_011-0_011-5.html",
    buttons: [],
  },
  {
    name: "011-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_011-0_011-5.html",
    buttons: [],
  },
  {
    name: "016-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_016-0_016-5.html",
    buttons: [],
  },
  {
    name: "016-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_016-0_016-5.html",
    buttons: [],
  },
  {
    name: "031-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_031-0_31-3.html",
    buttons: [],
  },
	{
    name: "031-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_031-0_31-3.html",
    buttons: [],
  },
	{
    name: "032-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_032-0_032-3.html",
    buttons: [],
  },
  {
    name: "032-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_032-0_032-3.html",
    buttons: [],
  },
  {
    name: "032-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_032-0_032-3.html",
    buttons: [],
  },
  {
    name: "046-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_046-0_046-5.html",
    buttons: [],
  },
	{
    name: "046-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_046-0_046-5.html",
    buttons: [],
  },
	{
    name: "046-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_046-0_046-5.html",
    buttons: [],
  },
	{
    name: "046-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_046-0_046-5.html",
    buttons: [],
  },
	{
    name: "046-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_046-0_046-5.html",
    buttons: [],
  },
  {
    name: "046-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_046-0_046-5.html",
    buttons: [],
  },
  {
    name: "047-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_047-0_047-5.html",
    buttons: [],
  },
	
  {
    name: "047-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_047-0_047-5.html",
    buttons: [],
  },
  {
    name: "047-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_047-0_047-5.html",
    buttons: [],
  },
  {
    name: "047-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_047-0_047-5.html",
    buttons: [],
  },
  {
    name: "047-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_047-0_047-5.html",
    buttons: [],
  },
  {
    name: "047-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_047-0_047-5.html",
    buttons: [],
  },
	{
    name: "048-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_048-0_048-5.html",
    buttons: [],
  },
  {
    name: "048-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_048-0_048-5.html",
    buttons: [],
  },
  {
    name: "048-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_048-0_048-5.html",
    buttons: [],
  },
	
  {
    name: "049-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_049-0_049-5.html",
    buttons: [],
  },
  {
    name: "049-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_049-0_049-5.html",
    buttons: [],
  },
  {
    name: "049-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_049-0_049-5.html",
    buttons: [],
  },
  {
    name: "049-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_049-0_049-5.html",
    buttons: [],
  },
  {
    name: "049-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_049-0_049-5.html",
    buttons: [],
  },
  {
    name: "049-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_049-0_049-5.html",
    buttons: [],
  },
	
	{
    name: "093-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_093-0_093-5.html",
    buttons: [],
  },
	
  {
    name: "093-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_093-0_093-5.html",
    buttons: [],
  },
  {
    name: "093-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_093-0_093-5.html",
    buttons: [],
  },
  {
    name: "093-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_093-0_093-5.html",
    buttons: [],
  },
  {
    name: "093-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_093-0_093-5.html",
    buttons: [],
  },
  {
    name: "093-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_093-0_093-5.html",
    buttons: [],
  },
	{
    name: "098-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_098-0_098-5.html",
    buttons: [],
  },
  {
    name: "098-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_098-0_098-5.html",
    buttons: [],
  },
  {
    name: "098-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_098-0_098-5.html",
    buttons: [],
  },
  {
    name: "098-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_098-0_098-5.html",
    buttons: [],
  },
  {
    name: "098-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_098-0_098-5.html",
    buttons: [],
  },
  {
    name: "098-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_098-0_098-5.html",
    buttons: [],
  },
	{
    name: "104-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_104-0_104-3.html",
    buttons: [],
  },
	{
    name: "104-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_104-0_104-3.html",
    buttons: [],
  },
  {
    name: "104-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_104-0_104-3.html",
    buttons: [],
  },
  {
    name: "104-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_104-0_104-3.html",
    buttons: [],
  },
  {
    name: "133-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_133-0_133-3.html",
    buttons: [],
  },
	{
    name: "133-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_133-0_133-3.html",
    buttons: [],
  },
	{
    name: "133-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_133-0_133-3.html",
    buttons: [],
  },
  {
    name: "133-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_133-0_133-3.html",
    buttons: [],
  },
	{
    name: "102-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_102-0_102-3.html",
    buttons: [],
  },
	{
    name: "102-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_102-0_102-3.html",
    buttons: [],
  },
	{
    name: "102-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_102-0_102-3.html",
    buttons: [],
  },
  {
    name: "102-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_102-0_102-3.html",
    buttons: [],
  },
	{
    name: "106-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_106-0_106-4.html",
    buttons: [],
  },
  {
    name: "106-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_106-0_106-4.html",
    buttons: [],
  },
	
  {
    name: "106-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_106-0_106-4.html",
    buttons: [],
  },
  {
    name: "106-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_106-0_106-4.html",
    buttons: [],
  },
  {
    name: "106-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_106-0_106-4.html",
    buttons: [],
  },
	{
    name: "124-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_124-0_124-3.html",
    buttons: [],
  },
	{
    name: "124-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_124-0_124-3.html",
    buttons: [],
  },
  {
    name: "124-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_124-0_124-3.html",
    buttons: [],
  },
  {
    name: "124-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_124-0_124-3.html",
    buttons: [],
  },
	{
    name: "131-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_131-0_131-4.html",
    buttons: [],
  },
	{
    name: "131-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_131-0_131-4.html",
    buttons: [],
  },
  {
    name: "131-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_131-0_131-4.html",
    buttons: [],
  },
	{
    name: "131-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_131-0_131-4.html",
    buttons: [],
  },
  {
    name: "131-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_131-0_131-4.html",
    buttons: [],
  },
	{
    name: "132-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_132-0_132-4.html",
    buttons: [],
  },
	{
    name: "132-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_132-0_132-4.html",
    buttons: [],
  },
	{
    name: "132-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_132-0_132-4.html",
    buttons: [],
  },
  {
    name: "132-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_132-0_132-4.html",
    buttons: [],
  },
  {
    name: "132-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_132-0_132-4.html",
    buttons: [],
  },
	{
    name: "123-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_123-0_123-4.html",
    buttons: [],
  },
  {
    name: "123-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_123-0_123-4.html",
    buttons: [],
  },
  
  {
    name: "123-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_123-0_123-4.html",
    buttons: [],
  },
  {
    name: "123-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_123-0_123-4.html",
    buttons: [],
  },
  {
    name: "123-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_123-0_123-4.html",
    buttons: [],
  },
  {
    name: "176-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_176-0_176-4.html",
    buttons: [],
  },
	{
    name: "176-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_176-0_176-4.html",
    buttons: [],
  },
  {
    name: "176-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_176-0_176-4.html",
    buttons: [],
  },
  {
    name: "176-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_176-0_176-4.html",
    buttons: [],
  },
  {
    name: "176-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_176-0_176-4.html",
    buttons: [],
  },
  {
    name: "177-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_177-0_177-5.html",
    buttons: [],
  },
  {
    name: "177-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_177-0_177-5.html",
    buttons: [],
  },
	{
    name: "177-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_177-0_177-5.html",
    buttons: [],
  },
	{
    name: "177-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_177-0_177-5.html",
    buttons: [],
  },
	{
    name: "177-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_177-0_177-5.html",
    buttons: [],
  },
  {
    name: "177-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_177-0_177-5.html",
    buttons: [],
  },
	{
    name: "178-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_178-0_178-5.html",
    buttons: [],
  },
	{
    name: "178-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_178-0_178-5.html",
    buttons: [],
  },
	{
    name: "178-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_178-0_178-5.html",
    buttons: [],
  },
	{
    name: "178-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_178-0_178-5.html",
    buttons: [],
  },
  {
    name: "178-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_178-0_178-5.html",
    buttons: [],
  },
  {
    name: "178-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_178-0_178-5.html",
    buttons: [],
  },
  {
    name: "053-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_053-0_053-5.html",
    buttons: [],
  },
	{
    name: "053-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_053-0_053-5.html",
    buttons: [],
  },
  {
    name: "053-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_053-0_053-5.html",
    buttons: [],
  },
	{
    name: "053-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_053-0_053-5.html",
    buttons: [],
  },
	{
    name: "053-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_053-0_053-5.html",
    buttons: [],
  },
  {
    name: "053-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_053-0_053-5.html",
    buttons: [],
  },
  {
    name: "054-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_054-0_54-5.html",
    buttons: [],
  },
	{
    name: "054-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_054-0_54-5.html",
    buttons: [],
  },
	{
    name: "054-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_054-0_54-5.html",
    buttons: [],
  },
  {
    name: "054-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_054-0_54-5.html",
    buttons: [],
  },
	{
    name: "054-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_054-0_54-5.html",
    buttons: [],
  },
	{
    name: "054-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_054-0_54-5.html",
    buttons: [],
  },
  
	{
    name: "055-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_055-0_055-5.html",
    buttons: [],
  },
	{
    name: "055-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_055-0_055-5.html",
    buttons: [],
  },
  {
    name: "055-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_055-0_055-5.html",
    buttons: [],
  },
	{
    name: "055-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_055-0_055-5.html",
    buttons: [],
  },
	{
    name: "055-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_055-0_055-5.html",
    buttons: [],
  },
	{
    name: "055-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_055-0_055-5.html",
    buttons: [],
  },
  {
    name: "103-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_103-0_103-3.html",
    buttons: [],
  },
	{
    name: "103-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_103-0_103-3.html",
    buttons: [],
  },
  {
    name: "103-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_103-0_103-3.html",
    buttons: [],
  },
	{
    name: "103-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_103-0_103-3.html",
    buttons: [],
  },
  {
    name: "232-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_232-0_232-5.html",
    buttons: [],
  },
	{
    name: "232-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_232-0_232-5.html",
    buttons: [],
  },
	{
    name: "232-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_232-0_232-5.html",
    buttons: [],
  },
  {
    name: "232-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_232-0_232-5.html",
    buttons: [],
  },
	{
    name: "232-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_232-0_232-5.html",
    buttons: [],
  },
  {
    name: "232-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_232-0_232-5.html",
    buttons: [],
  },
  {
    name: "234-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_234-0_234-5.html",
    buttons: [],
  },
	{
    name: "234-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_234-0_234-5.html",
    buttons: [],
  },
	{
    name: "234-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_234-0_234-5.html",
    buttons: [],
  },
	{
    name: "234-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_234-0_234-5.html",
    buttons: [],
  },
  {
    name: "234-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_234-0_234-5.html",
    buttons: [],
  },
	{
    name: "234-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_234-0_234-5.html",
    buttons: [],
  },
  {
    name: "234-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_234-0_234-5.html",
    buttons: [],
  },
  
  
  {
    name: "143-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_143-0_143-5.html",
    buttons: [],
  },
  {
    name: "143-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_143-0_143-5.html",
    buttons: [],
  },
  {
    name: "143-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_143-0_143-5.html",
    buttons: [],
  },
  {
    name: "143-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_143-0_143-5.html",
    buttons: [],
  },
  {
    name: "143-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_143-0_143-5.html",
    buttons: [],
  },
	{
    name: "143-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_143-0_143-5.html",
    buttons: [],
  },
 
  {
    name: "141-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_141-0_141-5.html",
    buttons: [],
  },
  {
    name: "141-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_141-0_141-5.html",
    buttons: [],
  },
  {
    name: "141-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_141-0_141-5.html",
    buttons: [],
  },
  {
    name: "141-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_141-0_141-5.html",
    buttons: [],
  },
  {
    name: "141-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_141-0_141-5.html",
    buttons: [],
  },
	{
    name: "141-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_141-0_141-5.html",
    buttons: [],
  },
  {
    name: "152-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_152-0_512-5.html",
    buttons: [],
  },
  
  {
    name: "152-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_152-0_512-5.html",
    buttons: [],
  },
  {
    name: "152-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_152-0_512-5.html",
    buttons: [],
  },
  {
    name: "152-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_152-0_512-5.html",
    buttons: [],
  },
  {
    name: "152-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_152-0_512-5.html",
    buttons: [],
  },
  {
    name: "152-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_152-0_512-5.html",
    buttons: [],
  },
  {
    name: "153-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_153-0_153-5.html",
    buttons: [],
  },
	{
    name: "153-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_153-0_153-5.html",
    buttons: [],
  },
  {
    name: "153-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_153-0_153-5.html",
    buttons: [],
  },
  {
    name: "153-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_153-0_153-5.html",
    buttons: [],
  },
  {
    name: "153-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_153-0_153-5.html",
    buttons: [],
  },
  {
    name: "153-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_153-0_153-5.html",
    buttons: [],
  },
  {
    name: "154-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_154-0_154-5.html",
    buttons: [],
  },
	{
    name: "154-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_154-0_154-5.html",
    buttons: [],
  },
  {
    name: "154-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_154-0_154-5.html",
    buttons: [],
  },
  {
    name: "154-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_154-0_154-5.html",
    buttons: [],
  },
  {
    name: "154-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_154-0_154-5.html",
    buttons: [],
  },
  {
    name: "154-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_154-0_154-5.html",
    buttons: [],
  },
  {
    name: "162-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_162-0_162-4.html",
    buttons: [],
  },
	{
    name: "162-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_162-0_162-4.html",
    buttons: [],
  },
	{
    name: "162-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_162-0_162-4.html",
    buttons: [],
  },
	{
    name: "162-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_162-0_162-4.html",
    buttons: [],
  },
  {
    name: "162-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_162-0_162-4.html",
    buttons: [],
  },
	{
    name: "166-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_166-0_166-5.html",
    buttons: [],
  },
	{
    name: "166-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_166-0_166-5.html",
    buttons: [],
  },
  {
    name: "166-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_166-0_166-5.html",
    buttons: [],
  },
	{
    name: "166-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_166-0_166-5.html",
    buttons: [],
  },
	{
    name: "166-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_166-0_166-5.html",
    buttons: [],
  },
  {
    name: "166-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_166-0_166-5.html",
    buttons: [],
  },
  {
    name: "168-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_168-0_168-5.html",
    buttons: [],
  },
  {
    name: "168-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_168-0_168-5.html",
    buttons: [],
  },
  {
    name: "168-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_168-0_168-5.html",
    buttons: [],
  },
  {
    name: "168-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_168-0_168-5.html",
    buttons: [],
  },
  {
    name: "168-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_168-0_168-5.html",
    buttons: [],
  },
  {
    name: "168-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_168-0_168-5.html",
    buttons: [],
  },
  {
    name: "171-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_171-0_171-5.html",
    buttons: [],
  },
	{
    name: "171-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_171-0_171-5.html",
    buttons: [],
  },
  {
    name: "171-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_171-0_171-5.html",
    buttons: [],
  },
	{
    name: "171-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_171-0_171-5.html",
    buttons: [],
  },
	{
    name: "171-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_171-0_171-5.html",
    buttons: [],
  },
  {
    name: "171-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_171-0_171-5.html",
    buttons: [],
  },
  {
    name: "172-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_172-0_172-5.html",
    buttons: [],
  },
  {
    name: "172-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_172-0_172-5.html",
    buttons: [],
  },
  {
    name: "172-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_172-0_172-5.html",
    buttons: [],
  },
	{
    name: "172-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_172-0_172-5.html",
    buttons: [],
  },
	{
    name: "172-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_172-0_172-5.html",
    buttons: [],
  },
  {
    name: "172-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_172-0_172-5.html",
    buttons: [],
  },
  {
    name: "173-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_173-0_173-5.html",
    buttons: [],
  },
  {
    name: "173-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_173-0_173-5.html",
    buttons: [],
  },
  {
    name: "173-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_173-0_173-5.html",
    buttons: [],
  },
  {
    name: "173-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_173-0_173-5.html",
    buttons: [],
  },
  {
    name: "173-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_173-0_173-5.html",
    buttons: [],
  },
  {
    name: "173-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_173-0_173-5.html",
    buttons: [],
  },
  {
    name: "179-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_179-0_179-4.html",
    buttons: [],
  },
	{
    name: "179-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_179-0_179-4.html",
    buttons: [],
  },
  {
    name: "179-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_179-0_179-4.html",
    buttons: [],
  },
  {
    name: "179-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_179-0_179-4.html",
    buttons: [],
  },
  {
    name: "179-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_179-0_179-4.html",
    buttons: [],
  },
  {
    name: "186-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_186-0_186-5.html",
    buttons: [],
  },
  {
    name: "186-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_186-0_186-5.html",
    buttons: [],
  },
  {
    name: "186-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_186-0_186-5.html",
    buttons: [],
  },
  {
    name: "186-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_186-0_186-5.html",
    buttons: [],
  },
  {
    name: "186-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_186-0_186-5.html",
    buttons: [],
  },
  {
    name: "186-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_186-0_186-5.html",
    buttons: [],
  },
  {
    name: "187-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_187-0_187-5.html",
    buttons: [],
  },
  {
    name: "187-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_187-0_187-5.html",
    buttons: [],
  },
  {
    name: "187-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_187-0_187-5.html",
    buttons: [],
  },
  {
    name: "187-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_187-0_187-5.html",
    buttons: [],
  },
  {
    name: "187-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_187-0_187-5.html",
    buttons: [],
  },
  {
    name: "187-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_187-0_187-5.html",
    buttons: [],
  },
  {
    name: "188-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_188-0_188-5.html",
    buttons: [],
  },
  {
    name: "188-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_188-0_188-5.html",
    buttons: [],
  },
  {
    name: "188-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_188-0_188-5.html",
    buttons: [],
  },
  {
    name: "188-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_188-0_188-5.html",
    buttons: [],
  },
  {
    name: "188-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_188-0_188-5.html",
    buttons: [],
  },
  {
    name: "188-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_188-0_188-5.html",
    buttons: [],
  },
	{
    name: "193-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_193-0_193-5.html",
    buttons: [],
  },
  {
    name: "193-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_193-0_193-5.html",
    buttons: [],
  },
  {
    name: "193-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_193-0_193-5.html",
    buttons: [],
  },
  {
    name: "193-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_193-0_193-5.html",
    buttons: [],
  },
  {
    name: "193-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_193-0_193-5.html",
    buttons: [],
  },
  {
    name: "193-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_193-0_193-5.html",
    buttons: [],
  },
  {
    name: "211-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_211-0_211-5.html",
    buttons: [],
  },
	{
    name: "211-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_211-0_211-5.html",
    buttons: [],
  },
	{
    name: "211-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_211-0_211-5.html",
    buttons: [],
  },
  {
    name: "211-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_211-0_211-5.html",
    buttons: [],
  },
	{
    name: "211-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_211-0_211-5.html",
    buttons: [],
  },
  {
    name: "211-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_211-0_211-5.html",
    buttons: [],
  },
  {
    name: "213-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_213-0_213-5.html",
    buttons: [],
  },
  {
    name: "213-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_213-0_213-5.html",
    buttons: [],
  },
  {
    name: "213-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_213-0_213-5.html",
    buttons: [],
  },
  {
    name: "213-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_213-0_213-5.html",
    buttons: [],
  },
  {
    name: "213-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_213-0_213-5.html",
    buttons: [],
  },
  {
    name: "213-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_213-0_213-5.html",
    buttons: [],
  },
  {
    name: "216-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_216-0_216-5.html",
    buttons: [],
  },
  {
    name: "216-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_216-0_216-5.html",
    buttons: [],
  },
	{
    name: "216-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_216-0_216-5.html",
    buttons: [],
  },
	{
    name: "216-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_216-0_216-5.html",
    buttons: [],
  },
  {
    name: "216-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_216-0_216-5.html",
    buttons: [],
  },
  {
    name: "216-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_216-0_216-5.html",
    buttons: [],
  },
  {
    name: "218-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_218-0_218-5.html",
    buttons: [],
  },
  {
    name: "218-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_218-0_218-5.html",
    buttons: [],
  },
  {
    name: "218-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_218-0_218-5.html",
    buttons: [],
  },
  {
    name: "218-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_218-0_218-5.html",
    buttons: [],
  },
  {
    name: "218-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_218-0_218-5.html",
    buttons: [],
  },
  {
    name: "218-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_218-0_218-5.html",
    buttons: [],
  },
  {
    name: "233-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_233-0_233-5.html",
    buttons: [],
  },
	{
    name: "233-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_233-0_233-5.html",
    buttons: [],
  },
	{
    name: "233-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_233-0_233-5.html",
    buttons: [],
  },
  {
    name: "233-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_233-0_233-5.html",
    buttons: [],
  },
	{
    name: "233-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_233-0_233-5.html",
    buttons: [],
  },
  {
    name: "233-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_233-0_233-5.html",
    buttons: [],
  },
  {
    name: "242-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_242-0_242-5.html",
    buttons: [],
  },
	{
    name: "242-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_242-0_242-5.html",
    buttons: [],
  },
  {
    name: "242-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_242-0_242-5.html",
    buttons: [],
  },
  {
    name: "242-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_242-0_242-5.html",
    buttons: [],
  },
	{
    name: "242-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_242-0_242-5.html",
    buttons: [],
  },
  {
    name: "242-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_242-0_242-5.html",
    buttons: [],
  },
  {
    name: "243-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_243-0_243-5.html",
    buttons: [],
  },
	{
    name: "243-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_243-0_243-5.html",
    buttons: [],
  },
  {
    name: "243-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_243-0_243-5.html",
    buttons: [],
  },
  {
    name: "243-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_243-0_243-5.html",
    buttons: [],
  },
  {
    name: "243-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_243-0_243-5.html",
    buttons: [],
  },
  {
    name: "243-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_243-0_243-5.html",
    buttons: [],
  },
  {
    name: "244-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_244-0_244-5.html",
    buttons: [],
  },
	{
    name: "244-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_244-0_244-5.html",
    buttons: [],
  },
  {
    name: "244-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_244-0_244-5.html",
    buttons: [],
  },
  {
    name: "244-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_244-0_244-5.html",
    buttons: [],
  },
  {
    name: "244-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_244-0_244-5.html",
    buttons: [],
  },
  {
    name: "244-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_244-0_244-5.html",
    buttons: [],
  },
  {
    name: "251-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_251-0_251-4.html",
    buttons: [],
  },
  {
    name: "251-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_251-0_251-4.html",
    buttons: [],
  },
  {
    name: "251-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_251-0_251-4.html",
    buttons: [],
  },
  {
    name: "251-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_251-0_251-4.html",
    buttons: [],
  },
  {
    name: "251-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_251-0_251-4.html",
    buttons: [],
  },
  {
    name: "252-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_252-0_252-4.html",
    buttons: [],
  },
  {
    name: "252-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_252-0_252-4.html",
    buttons: [],
  },
  {
    name: "252-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_252-0_252-4.html",
    buttons: [],
  },
  {
    name: "252-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_252-0_252-4.html",
    buttons: [],
  },
  {
    name: "252-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_252-0_252-4.html",
    buttons: [],
  },
  {
    name: "253-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_253-0_253-2.html",
    buttons: [],
  },
	{
    name: "253-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_253-0_253-2.html",
    buttons: [],
  },
  {
    name: "253-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_253-0_253-2.html",
    buttons: [],
  },
  {
    name: "254-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_254-0_254-4.html",
    buttons: [],
  },
  {
    name: "254-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_254-0_254-4.html",
    buttons: [],
  },
  {
    name: "254-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_254-0_254-4.html",
    buttons: [],
  },
  {
    name: "254-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_254-0_254-4.html",
    buttons: [],
  },
  {
    name: "254-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_254-0_254-4.html",
    buttons: [],
  },
  {
    name: "255-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_255-0_255-4.html",
    buttons: [],
  },
  {
    name: "255-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_255-0_255-4.html",
    buttons: [],
  },
  {
    name: "255-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_255-0_255-4.html",
    buttons: [],
  },
  {
    name: "255-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_255-0_255-4.html",
    buttons: [],
  },
  {
    name: "255-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_255-0_255-4.html",
    buttons: [],
  },
	{
    name: "256-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_256-0_256-2.html",
    buttons: [],
  },
	{
    name: "256-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_256-0_256-2.html",
    buttons: [],
  },
  {
    name: "256-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_256-0_256-2.html",
    buttons: [],
  },
  {
    name: "257-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_257-0_257-4.html",
    buttons: [],
  },
  {
    name: "257-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_257-0_257-4.html",
    buttons: [],
  },
  {
    name: "257-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_257-0_257-4.html",
    buttons: [],
  },
  {
    name: "257-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_257-0_257-4.html",
    buttons: [],
  },
  {
    name: "257-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_257-0_257-4.html",
    buttons: [],
  },
  {
    name: "258-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_258-0_258-4.html",
    buttons: [],
  },
  {
    name: "258-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_258-0_258-4.html",
    buttons: [],
  },
  {
    name: "258-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_258-0_258-4.html",
    buttons: [],
  },
  {
    name: "258-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_258-0_258-4.html",
    buttons: [],
  },
  {
    name: "258-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_258-0_258-4.html",
    buttons: [],
  },
	{
    name: "259-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_259-0_259-2.html",
    buttons: [],
  },
	{
    name: "259-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_259-0_259-2.html",
    buttons: [],
  },
  {
    name: "259-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_259-0_259-2.html",
    buttons: [],
  },
  
  {
    name: "050-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_050-0_050-5.html",
    buttons: [],
  },
	{
    name: "050-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_050-0_050-5.html",
    buttons: [],
  },
	{
    name: "050-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_050-0_050-5.html",
    buttons: [],
  },
	{
    name: "050-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_050-0_050-5.html",
    buttons: [],
  },
	{
    name: "050-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_050-0_050-5.html",
    buttons: [],
  },
  {
    name: "050-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_050-0_050-5.html",
    buttons: [],
  },
  {
    name: "051-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_051-0_051-5.html",
    buttons: [],
  },
	{
    name: "051-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_051-0_051-5.html",
    buttons: [],
  },
	{
    name: "051-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_051-0_051-5.html",
    buttons: [],
  },
	{
    name: "051-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_051-0_051-5.html",
    buttons: [],
  },
	{
    name: "051-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_051-0_051-5.html",
    buttons: [],
  },
  {
    name: "051-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_051-0_051-5.html",
    buttons: [],
  },
  {
    name: "052-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_052-0_052-5.html",
    buttons: [],
  },
	{
    name: "052-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_052-0_052-5.html",
    buttons: [],
  },
	{
    name: "052-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_052-0_052-5.html",
    buttons: [],
  },
	{
    name: "052-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_052-0_052-5.html",
    buttons: [],
  },
	{
    name: "052-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_052-0_052-5.html",
    buttons: [],
  },
  {
    name: "052-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_052-0_052-5.html",
    buttons: [],
  },
  
  {
    name: "064-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_064-0_064-4.html",
    buttons: [],
  },
	{
    name: "064-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_064-0_064-4.html",
    buttons: [],
  },
	{
    name: "064-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_064-0_064-4.html",
    buttons: [],
  },
	{
    name: "064-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_064-0_064-4.html",
    buttons: [],
  },
  {
    name: "064-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_064-0_064-4.html",
    buttons: [],
  },
	{
    name: "091-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_091-0_091-5.html",
    buttons: [],
  },
	{
    name: "091-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_091-0_091-5.html",
    buttons: [],
  },
  {
    name: "091-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_091-0_091-5.html",
    buttons: [],
  },
  {
    name: "091-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_091-0_091-5.html",
    buttons: [],
  },
	{
    name: "091-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_091-0_091-5.html",
    buttons: [],
  },
  {
    name: "091-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_091-0_091-5.html",
    buttons: [],
  },
	{
    name: "092-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_092-0_092-5.html",
    buttons: [],
  },
  {
    name: "092-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_092-0_092-5.html",
    buttons: [],
  },
  {
    name: "092-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_092-0_092-5.html",
    buttons: [],
  },
  {
    name: "092-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_092-0_092-5.html",
    buttons: [],
  },
  {
    name: "092-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_092-0_092-5.html",
    buttons: [],
  },
  {
    name: "092-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_092-0_092-5.html",
    buttons: [],
  },
  {
    name: "094-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_094-0_094-5.html",
    buttons: [],
  },
  {
    name: "094-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_094-0_094-5.html",
    buttons: [],
  },
  {
    name: "094-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_094-0_094-5.html",
    buttons: [],
  },
  {
    name: "094-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_094-0_094-5.html",
    buttons: [],
  },
  {
    name: "094-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_094-0_094-5.html",
    buttons: [],
  },
  {
    name: "094-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_094-0_094-5.html",
    buttons: [],
  },
  {
    name: "095-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_095-0_095-5.html",
    buttons: [],
  },
	{
    name: "095-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_095-0_095-5.html",
    buttons: [],
  },
	{
    name: "095-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_095-0_095-5.html",
    buttons: [],
  },
	{
    name: "095-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_095-0_095-5.html",
    buttons: [],
  },
	{
    name: "095-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_095-0_095-5.html",
    buttons: [],
  },
  {
    name: "095-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_095-0_095-5.html",
    buttons: [],
  },
	{
    name: "096-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_096-0_096-5.html",
    buttons: [],
  },
	{
    name: "096-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_096-0_096-5.html",
    buttons: [],
  },
  {
    name: "096-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_096-0_096-5.html",
    buttons: [],
  },
  {
    name: "096-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_096-0_096-5.html",
    buttons: [],
  },
	{
    name: "096-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_096-0_096-5.html",
    buttons: [],
  },
  {
    name: "096-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_096-0_096-5.html",
    buttons: [],
  },
	{
    name: "097-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_097-0_097-5.html",
    buttons: [],
  },
  {
    name: "097-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_097-0_097-5.html",
    buttons: [],
  },
  {
    name: "097-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_097-0_097-5.html",
    buttons: [],
  },
  {
    name: "097-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_097-0_097-5.html",
    buttons: [],
  },
  {
    name: "097-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_097-0_097-5.html",
    buttons: [],
  },
  {
    name: "097-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_097-0_097-5.html",
    buttons: [],
  },
  {
    name: "099-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_099-0_099-5.html",
    buttons: [],
  },
  {
    name: "099-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_099-0_099-5.html",
    buttons: [],
  },
  {
    name: "099-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_099-0_099-5.html",
    buttons: [],
  },
  {
    name: "099-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_099-0_099-5.html",
    buttons: [],
  },
  {
    name: "099-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_099-0_099-5.html",
    buttons: [],
  },
  {
    name: "099-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_099-0_099-5.html",
    buttons: [],
  },
  {
    name: "110-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_110-0_110-3.html",
    buttons: [],
  },
  {
    name: "110-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_110-0_110-3.html",
    buttons: [],
  },
	{
    name: "110-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_110-0_110-3.html",
    buttons: [],
  },
	{
    name: "110-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_110-0_110-3.html",
    buttons: [],
  },
  {
    name: "100-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_100-0_100-5.html",
    buttons: [],
  },
	{
    name: "100-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_100-0_100-5.html",
    buttons: [],
  },
	{
    name: "100-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_100-0_100-5.html",
    buttons: [],
  },
	{
    name: "100-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_100-0_100-5.html",
    buttons: [],
  },
	{
    name: "100-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_100-0_100-5.html",
    buttons: [],
  },
  {
    name: "100-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_100-0_100-5.html",
    buttons: [],
  },
  {
    name: "151-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_151-0_151-5.html",
    buttons: [],
  },
  {
    name: "151-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_151-0_151-5.html",
    buttons: [],
  },
  {
    name: "151-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_151-0_151-5.html",
    buttons: [],
  },
  {
    name: "151-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_151-0_151-5.html",
    buttons: [],
  },
  {
    name: "151-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_151-0_151-5.html",
    buttons: [],
  },
  {
    name: "151-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_151-0_151-5.html",
    buttons: [],
  },
	{
    name: "191-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_191-0_191-5.html",
    buttons: [],
  },
  {
    name: "191-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_191-0_191-5.html",
    buttons: [],
  },
  {
    name: "191-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_191-0_191-5.html",
    buttons: [],
  },
  {
    name: "191-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_191-0_191-5.html",
    buttons: [],
  },
  {
    name: "191-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_191-0_191-5.html",
    buttons: [],
  },
  {
    name: "191-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_191-0_191-5.html",
    buttons: [],
  },
	{
    name: "192-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_192-0_192-5.html",
    buttons: [],
  },
	{
    name: "192-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_192-0_192-5.html",
    buttons: [],
  },
  {
    name: "192-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_192-0_192-5.html",
    buttons: [],
  },
  {
    name: "192-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_192-0_192-5.html",
    buttons: [],
  },
	{
    name: "192-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_192-0_192-5.html",
    buttons: [],
  },
  {
    name: "192-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_192-0_192-5.html",
    buttons: [],
  },
  {
    name: "270-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_270-0_270-5.html",
    buttons: [],
  },
  {
    name: "270-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_270-0_270-5.html",
    buttons: [],
  },
  {
    name: "270-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_270-0_270-5.html",
    buttons: [],
  },
  {
    name: "270-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_270-0_270-5.html",
    buttons: [],
  },
  {
    name: "270-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_270-0_270-5.html",
    buttons: [],
  },
  {
    name: "270-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_270-0_270-5.html",
    buttons: [],
  },
  {
    name: "271-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_271-0_271-5.html",
    buttons: [],
  },
  {
    name: "271-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_271-0_271-5.html",
    buttons: [],
  },
  {
    name: "271-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_271-0_271-5.html",
    buttons: [],
  },
  {
    name: "271-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_271-0_271-5.html",
    buttons: [],
  },
  {
    name: "271-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_271-0_271-5.html",
    buttons: [],
  },
  {
    name: "271-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_271-0_271-5.html",
    buttons: [],
  },
  {
    name: "128-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_128-0_128-5.html",
    buttons: [],
  },
  {
    name: "128-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_128-0_128-5.html",
    buttons: [],
  },
  {
    name: "128-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_128-0_128-5.html",
    buttons: [],
  },
  {
    name: "128-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_128-0_128-5.html",
    buttons: [],
  },
  {
    name: "128-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_128-0_128-5.html",
    buttons: [],
  },
  {
    name: "128-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_128-0_128-5.html",
    buttons: [],
  },
  {
    name: "129-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_129-0_129-5.html",
    buttons: [],
  },
  {
    name: "129-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_129-0_129-5.html",
    buttons: [],
  },
  {
    name: "129-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_129-0_129-5.html",
    buttons: [],
  },
  {
    name: "129-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_129-0_129-5.html",
    buttons: [],
  },
  {
    name: "129-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_129-0_129-5.html",
    buttons: [],
  },
  {
    name: "129-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_129-0_129-5.html",
    buttons: [],
  },
	{
    name: "130-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_130-0_130-4.html",
    buttons: [],
  },
  {
    name: "130-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_130-0_130-4.html",
    buttons: [],
  },
  {
    name: "130-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_130-0_130-4.html",
    buttons: [],
  },
  {
    name: "130-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_130-0_130-4.html",
    buttons: [],
  },
  {
    name: "130-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_130-0_130-4.html",
    buttons: [],
  },
  {
    name: "101-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_101-0_101-4.html",
    buttons: [],
  },
  {
    name: "101-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_101-0_101-4.html",
    buttons: [],
  },
  {
    name: "101-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_101-0_101-4.html",
    buttons: [],
  },
  {
    name: "101-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_101-0_101-4.html",
    buttons: [],
  },
  {
    name: "101-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_101-0_101-4.html",
    buttons: [],
  },
	{
    name: "062-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_062-0_062-4.html",
    buttons: [],
  },
	{
    name: "062-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_062-0_062-4.html",
    buttons: [],
  },
	{
    name: "062-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_062-0_062-4.html",
    buttons: [],
  },
  {
    name: "062-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_062-0_062-4.html",
    buttons: [],
  },
  {
    name: "062-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_062-0_062-4.html",
    buttons: [],
  },
	{
    name: "061-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_061-0_061-4.html",
    buttons: [],
  },
	{
    name: "061-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_061-0_061-4.html",
    buttons: [],
  },
	{
    name: "061-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_061-0_061-4.html",
    buttons: [],
  },
  {
    name: "061-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_061-0_061-4.html",
    buttons: [],
  },
  {
    name: "061-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_061-0_061-4.html",
    buttons: [],
  },
	{
    name: "161-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_161-0_161-4.html",
    buttons: [],
  },
  {
    name: "161-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_161-0_161-4.html",
    buttons: [],
  },
  {
    name: "161-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_161-0_161-4.html",
    buttons: [],
  },
  {
    name: "161-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_161-0_161-4.html",
    buttons: [],
  },
  {
    name: "161-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_161-0_161-4.html",
    buttons: [],
  },
	 {
    name: "126-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_126-0_126-5.html",
    buttons: [],
  },
	 {
    name: "126-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_126-0_126-5.html",
    buttons: [],
  },
  {
    name: "126-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_126-0_126-5.html",
    buttons: [],
  },
  {
    name: "126-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_126-0_126-5.html",
    buttons: [],
  },
	 {
    name: "126-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_126-0_126-5.html",
    buttons: [],
  },
  {
    name: "126-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_126-0_126-5.html",
    buttons: [],
  },
	{
    name: "127-0",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_127-0_127-5.html",
    buttons: [],
  },
	{
    name: "127-1",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_127-0_127-5.html",
    buttons: [],
  },
  {
    name: "127-2",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_127-0_127-5.html",
    buttons: [],
  },
  {
    name: "127-3",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_127-0_127-5.html",
    buttons: [],
  },
	{
    name: "127-4",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_127-0_127-5.html",
    buttons: [],
  },
  {
    name: "127-5",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_127-0_127-5.html",
    buttons: [],
  },
  {
    name: "start output short",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_start_output_short.html",
    buttons: [],
  },
  {
    name: "start output open",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_start_output_open.html",
    buttons: [],
  },
  {
    name: "rtl output short",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_rtl_output_short.html",
    buttons: [],
  },
  {
    name: "rtl output open",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_rtl_output_open.html",
    buttons: [],
  },
  {
    name: "fault output short",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_fault_output_short.html",
    buttons: [],
  },
  {
    name: "fault output open",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/apu_fault_output_open.html",
    buttons: [],
  },
  {
    name: "1002",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1002_1007.html",
    buttons: [],
  },
  {
    name: "1005",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1002_1007.html",
    buttons: [],
  },
  {
    name: "1006",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1002_1007.html",
    buttons: [],
  },
  {
    name: "1007",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1002_1007.html",
    buttons: [],
  },
  {
    name: "1101",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1101_1102_1104.html",
    buttons: [],
  },
  {
    name: "1102",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1101_1102_1104.html",
    buttons: [],
  },
  {
    name: "1104",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1101_1102_1104.html",
    buttons: [],
  },
  {
    name: "1202",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1202_1203_1204.html",
    buttons: [],
  },
  {
    name: "1203",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1202_1203_1204.html",
    buttons: [],
  },
  {
    name: "1204",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1202_1203_1204.html",
    buttons: [],
  },
  {
    name: "1301",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1301_1302.html",
    buttons: [],
  },
  {
    name: "1302",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1301_1302.html",
    buttons: [],
  },
  {
    name: "1401",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1401_1402.html",
    buttons: [],
  },
  {
    name: "1402",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1401_1402.html",
    buttons: [],
  },
  {
    name: "1501,ECS",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1501_ECS.html",
    buttons: [],
  },
  {
    name: "1502,ECS",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1502_ECS.html",
    buttons: [],
  },
  {
    name: "1503,ECS",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1503_ECS.html",
    buttons: [],
  },
  {
    name: "1601,ECS",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1601_ECS.html",
    buttons: [],
  },
  {
    name: "1701,ECS",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1701_ECS.html",
    buttons: [],
  },
  {
    name: "1801",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1801.html",
    buttons: [],
  },
  {
    name: "1802",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1802.html",
    buttons: [],
  },
  {
    name: "1901",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1901.html",
    buttons: [],
  },
  {
    name: "3001",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3001_3003_3004_3007.html",
    buttons: [],
  },
  {
    name: "3003",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3001_3003_3004_3007.html",
    buttons: [],
  },
  {
    name: "3004",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3001_3003_3004_3007.html",
    buttons: [],
  },
  {
    name: "3007",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3001_3003_3004_3007.html",
    buttons: [],
  },
  {
    name: "3101",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3101.html",
    buttons: [],
  },
  {
    name: "3102",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3102.html",
    buttons: [],
  },
  {
    name: "3201",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3201.html",
    buttons: [],
  },
  {
    name: "3301",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3301.html",
    buttons: [],
  },
  {
    name: "3401",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3401.html",
    buttons: [],
  },
  {
    name: "3402",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3402.html",
    buttons: [],
  },
  {
    name: "3501",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3501.html",
    buttons: [],
  },
  {
    name: "3502",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3502.html",
    buttons: [],
  },
  {
    name: "3601",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3601.html",
    buttons: [],
  },
  {
    name: "3603",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3603.html",
    buttons: [],
  },
  {
    name: "3608",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3608.html",
    buttons: [],
  },
  {
    name: "360A",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_360A.html",
    buttons: [],
  },
  {
    name: "3602",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3602.html",
    buttons: [],
  },
  {
    name: "3605",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3605.html",
    buttons: [],
  },
  {
    name: "3606",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3606.html",
    buttons: [],
  },
  {
    name: "3607",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3607.html",
    buttons: [],
  },
  {
    name: "3701",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3701.html",
    buttons: [],
  },
  {
    name: "3702",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3702.html",
    buttons: [],
  },
  {
    name: "3801",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3801_3802.html",
    buttons: [],
  },
  {
    name: "3802",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3801_3802.html",
    buttons: [],
  },
  {
    name: "3901",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3901.html",
    buttons: [],
  },
  {
    name: "3A01",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3A01.html",
    buttons: [],
  },
  {
    name: "3A05",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3A05.html",
    buttons: [],
  },
  {
    name: "3A02",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3A02.html",
    buttons: [],
  },
  {
    name: "3A04",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3A04.html",
    buttons: [],
  },
  {
    name: "3B01",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3B01_3B02_3B03.html",
    buttons: [],
  },
  {
    name: "3B02",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3B01_3B02_3B03.html",
    buttons: [],
  },
  {
    name: "3B03",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3B01_3B02_3B03.html",
    buttons: [],
  },
  {
    name: "3C01",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3C01_3C02.html",
    buttons: [],
  },
  {
    name: "3C02",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3C01_3C02.html",
    buttons: [],
  },
  {
    name: "3D01",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3D01.html",
    buttons: [],
  },
  {
    name: "3D02",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3D02.html",
    buttons: [],
  },
  {
    name: "3D03",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3D03.html",
    buttons: [],
  },
  {
    name: "3D04",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3D04.html",
    buttons: [],
  },
  {
    name: "3D05",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3D05.html",
    buttons: [],
  },
  {
    name: "3D06",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3D06.html",
    buttons: [],
  },
  {
    name: "3D09",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3D09.html",
    buttons: [],
  },
  {
    name: "3D0B",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3D0B.html",
    buttons: [],
  },
  {
    name: "3E01",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3E01.html",
    buttons: [],
  },
  {
    name: "3E02",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3E02.html",
    buttons: [],
  },
  {
    name: "3E03",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3E03.html",
    buttons: [],
  },
  {
    name: "3E04",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3E04.html",
    buttons: [],
  },
  {
    name: "3F01",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3F01.html",
    buttons: [],
  },
  {
    name: "3F02",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_3F02.html",
    buttons: [],
  },
  {
    name: "4001",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4001.html",
    buttons: [],
  },
  {
    name: "4002",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4002.html",
    buttons: [],
  },
  {
    name: "4003",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4003.html",
    buttons: [],
  },
  {
    name: "4004",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4004.html",
    buttons: [],
  },
  {
    name: "4005",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4005_4009.html",
    buttons: [],
  },
  {
    name: "4006",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4005_4009.html",
    buttons: [],
  },
  {
    name: "4007",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4005_4009.html",
    buttons: [],
  },
  {
    name: "4008",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4005_4009.html",
    buttons: [],
  },
  {
    name: "4009",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4005_4009.html",
    buttons: [],
  },
  {
    name: "4200",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4201",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4202",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4203",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4204",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4205",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4206",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4207",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4208",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "420A",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "420B",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "420C",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "420E",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "420F",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4211",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4212",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4213",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4214",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4215",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4305",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4306",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4307",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4308",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4309",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "430A",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "430B",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "430C",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4402",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4403",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4404",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4405",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4406",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4407",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4408",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4409",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "440A",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "440B",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "440C",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "440D",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/masecs_4200_4424ter.html",
    buttons: [],
  },
  {
    name: "440E",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "440F",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4410",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4411",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4412",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4413",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4414",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4415",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4416",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4418",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4419",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "441A",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "441B",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "441C",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "441D",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "441E",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "441F",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4420",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4421",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4422",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4423",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "4424",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4200_4424.html",
    buttons: [],
  },
  {
    name: "420D",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_420D.html",
    buttons: [],
  },
  {
    name: "4101",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4101_410F.html",
    buttons: [],
  },
  {
    name: "4102",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4101_410F.html",
    buttons: [],
  },
  {
    name: "4103",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4101_410F.html",
    buttons: [],
  },
  {
    name: "4105",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4101_410F.html",
    buttons: [],
  },
  {
    name: "4106",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4101_410F.html",
    buttons: [],
  },
  {
    name: "4107",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4101_410F.html",
    buttons: [],
  },
  {
    name: "4108",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/masecs_4101_410Fter.html",
    buttons: [],
  },
  {
    name: "4109",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4101_410F.html",
    buttons: [],
  },
  {
    name: "410A",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4101_410F.html",
    buttons: [],
  },
  {
    name: "410B",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4101_410F.html",
    buttons: [],
  },
  {
    name: "410C",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4101_410F.html",
    buttons: [],
  },
  {
    name: "410D",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4101_410F.html",
    buttons: [],
  },
  {
    name: "410F",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_4101_410F.html",
    buttons: [],
  },
  {
    name: "5001",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_5001.html",
    buttons: [],
  },
  {
    name: "6001",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_6001_6005.html",
    buttons: [],
  },
  {
    name: "6002",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_6001_6005.html",
    buttons: [],
  },
  {
    name: "6003",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_6001_6005.html",
    buttons: [],
  },
  {
    name: "6004",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_6001_6005.html",
    buttons: [],
  },
  {
    name: "6005",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_6001_6005.html",
    buttons: [],
  },
  {
    name: "7001",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7001.html",
    buttons: [],
  },
  {
    name: "7002",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7002.html",
    buttons: [],
  },
  {
    name: "7003",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7003.html",
    buttons: [],
  },
  {
    name: "7004",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7004.html",
    buttons: [],
  },
  {
    name: "7005",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7005.html",
    buttons: [],
  },
  {
    name: "7006",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7006.html",
    buttons: [],
  },
  {
    name: "7007",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7007.html",
    buttons: [],
  },
  {
    name: "7008",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7008.html",
    buttons: [],
  },
  {
    name: "7102",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7102.html",
    buttons: [],
  },
  {
    name: "7103",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7103.html",
    buttons: [],
  },
  {
    name: "7104",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7104.html",
    buttons: [],
  },
  {
    name: "7105",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7105.html",
    buttons: [],
  },
  {
    name: "7106",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7106.html",
    buttons: [],
  },
  {
    name: "7107",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7107.html",
    buttons: [],
  },
  {
    name: "7109",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7109.html",
    buttons: [],
  },
  {
    name: "710a",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_710A.html",
    buttons: [],
  },
  {
    name: "7111",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7111.html",
    buttons: [],
  },
  {
    name: "7112",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7112.html",
    buttons: [],
  },
  {
    name: "7113",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7113.html",
    buttons: [],
  },
  {
    name: "7114",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7114.html",
    buttons: [],
  },
  {
    name: "7115",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7115.html",
    buttons: [],
  },
  {
    name: "7116",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7116.html",
    buttons: [],
  },
  {
    name: "7117",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7117.html",
    buttons: [],
  },
  {
    name: "7118",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_7118.html",
    buttons: [],
  },
  {
    name: "1A01",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_1A01.html",
    buttons: [],
  },
  {
    name: "5002",
    file: "./apps/main/config/dashboard/engine-apu-ecs-faults/ecs_5002.html",
    buttons: [],
  },
];

/**
 * DASHBOARD DISPLAY FAULT MSG:
 *
 * [
 *   {
 *     name: name of this display fault msg,
 *     file: relative path for file to be loaded on sub page,
 *     buttons: [
 *       {
 *         name: name to show up in the navbar for this button,
 *         path: relative path to page ('INTERNAL' or 'POPUP') or URL ('EXTERNAL'),
 *         mode: setting how to handle button: 'POPUP', 'INTERNAL',
 *         file: relative path to html (only for 'POPUP'),
 *       },
 *       ...
 *     ],
 *   }
 * ]
 */
export const DISPLAY_FAULT_MSG = [
  {
    name: "AFCS CONTROLLER INOP",
    file: "./apps/main/config/dashboard/display-fault-msg/afcs_cont.html",
    buttons: [],
  },
  {
    name: "AFCS FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/afcs_fail.html",
    buttons: [],
  },
  {
    name: "A/F TEST ABORT",
    file: "./apps/main/config/dashboard/display-fault-msg/af_test_abort.html",
    buttons: [],
  },
  {
    name: "A/F TEST FAILED",
    file: "./apps/main/config/dashboard/display-fault-msg/af_test_failed.html",
    buttons: [],
  },
  {
    name: "A/C BAD CONFIG on ARCDU",
    file: "./apps/main/config/dashboard/display-fault-msg/ac_bad_config.html",
    buttons: [],
  },
	{
    name: "ATC ALT Fail",
    file: "./apps/main/config/dashboard/display-fault-msg/atc_alt_fail.html",
    buttons: [],
  },
  {
    name: "ATT FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/att_fail.html",
    buttons: [],
  },
  {
    name: "AUTO TRIM FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/auto_trim_fail.html",
    buttons: [],
  },
  {
    name: "AP PITCH TRIM FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/ap_pitch_trim_fail.html",
    buttons: [],
  },
  {
    name: "AP INHIBIT",
    file: "./apps/main/config/dashboard/display-fault-msg/ap_inhibit.html",
    buttons: [],
  },
  {
    name: "AP FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/ap_fail.html",
    buttons: [],
  },
  {
    name: "AP/YD FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/ap_yd_fail.html",
    buttons: [],
  },
  {
    name: "ALT",
    file: "./apps/main/config/dashboard/display-fault-msg/alt.html",
    buttons: [],
  },
  {
    name: "ALT MISMATCH",
    file: "./apps/main/config/dashboard/display-fault-msg/alt_mismatch.html",
    buttons: [],
  },
  {
    name: "ALT HOLD",
    file: "./apps/main/config/dashboard/display-fault-msg/alt_hold.html",
    buttons: [],
  },
  {
    name: "ALT FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/alt_fail.html",
    buttons: [],
  },
  {
    name: "ADF FAIL 1",
    file: "./apps/main/config/dashboard/display-fault-msg/adf1_fail.html",
    buttons: [],
  },
  {
    name: "ADF FAIL 2",
    file: "./apps/main/config/dashboard/display-fault-msg/adf2_fail.html",
    buttons: [],
  },
  {
    name: "ALIGN HUD",
    file: "./apps/main/config/dashboard/display-fault-msg/align_hud.html",
    buttons: [],
  },
  {
    name: "ARCDU",
    file: "./apps/main/config/dashboard/display-fault-msg/arcdu.html",
    buttons: [],
  },
  {
    name: "BALANCE",
    file: "./apps/main/config/dashboard/display-fault-msg/balance.html",
    buttons: [],
  },
  {
    name: "BACKGROUND NOISE IN HEADSETS",
    file: "./apps/main/config/dashboard/display-fault-msg/backg_noise.html",
    buttons: [],
  },
  {
    name: "CHECK ED",
    file: "./apps/main/config/dashboard/display-fault-msg/check_ed.html",
    buttons: [],
  },
  {
    name: "COMPANY ROUTES",
    file: "./apps/main/config/dashboard/display-fault-msg/comp_routes.html",
    buttons: [],
  },
  {
    name: "CHIMES",
    file: "./apps/main/config/dashboard/display-fault-msg/chimes.html",
    buttons: [],
  },
  {
    name: "CPU FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/cpu_fail.html",
    buttons: [],
  },
  {
    name: "CDU DATABUS FAILURE",
    file: "./apps/main/config/dashboard/display-fault-msg/cdu_db_fail.html",
    buttons: [],
  },
  {
    name: "CAT 2 FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/cat2_fail.html",
    buttons: [],
  },
  {
    name: "CHECK PFD1",
    file: "./apps/main/config/dashboard/display-fault-msg/check_pfd1.html",
    buttons: [],
  },
  {
    name: "CHECK PFD2",
    file: "./apps/main/config/dashboard/display-fault-msg/check_pfd2.html",
    buttons: [],
  },
  { name: "CUE", 
	 file: "./apps/main/config/dashboard/display-fault-msg/cue.html", 
	 buttons: [] },
  {
    name: "DU BAD CONFIG",
    file: "./apps/main/config/dashboard/display-fault-msg/du_bad_con.html",
    buttons: [],
  },
  {
    name: "DATABASE EXPIRED",
    file: "./apps/main/config/dashboard/display-fault-msg/datab_exp.html",
    buttons: [],
  },
  {
    name: "DARK DISPLAY",
    file: "./apps/main/config/dashboard/display-fault-msg/dark_display.html",
    buttons: [],
  },
  
  {
    name: "DUAL OFF",
    file: "./apps/main/config/dashboard/display-fault-msg/dual_off.html",
    buttons: [],
  },
  {
    name: "DME 1",
    file: "./apps/main/config/dashboard/display-fault-msg/dme_1.html",
    buttons: [],
  },
  {
    name: "DME 2",
    file: "./apps/main/config/dashboard/display-fault-msg/dme_2.html",
    buttons: [],
  },
  {
    name: "ED MON FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/ed_mon_fail.html",
    buttons: [],
  },
  {
    name: "FADEC 1/DU",
    file: "./apps/main/config/dashboard/display-fault-msg/fadec1.html",
    buttons: [],
  },
  {
    name: "FADEC 2/DU",
    file: "./apps/main/config/dashboard/display-fault-msg/fadec2.html",
    buttons: [],
  },
  {
    name: "FADECS/DU",
    file: "./apps/main/config/dashboard/display-fault-msg/fadecs.html",
    buttons: [],
  },
  {
    name: "FANS FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/fans_fail.html",
    buttons: [],
  },
  {
    name: "FMC BATTERY LOW",
    file: "./apps/main/config/dashboard/display-fault-msg/fmc_batt_low.html",
    buttons: [],
  },
  {
    name: "FAIL (ARCDU)",
    file: "./apps/main/config/dashboard/display-fault-msg/arcdu_fail.html",
    buttons: [],
  },
  {
    name: "FD ADC DATA INVLD",
    file: "./apps/main/config/dashboard/display-fault-msg/fd_acd_data_invld.html",
    buttons: [],
  },
  {
    name: "FD ATT DATA INVLD",
    file: "./apps/main/config/dashboard/display-fault-msg/fd_att_data_invld.html",
    buttons: [],
  },
  {
    name: "FD HDG DATA INVLD",
    file: "./apps/main/config/dashboard/display-fault-msg/fd_hdg_data_inv.html",
    buttons: [],
  },
  {
    name: "FD NAV DATA INVLD",
    file: "./apps/main/config/dashboard/display-fault-msg/fd_nav_data_inv.html",
    buttons: [],
  },
  {
    name: "GPWS I/F FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/gpws_if_fail.html",
    buttons: [],
  },
  {
    name: "GPS INTEGRITY MESSAGE",
    file: "./apps/main/config/dashboard/display-fault-msg/gps_integ.html",
    buttons: [],
  },
  {
    name: "GS MISMATCH",
    file: "./apps/main/config/dashboard/display-fault-msg/gs_mismatch.html",
    buttons: [],
  },
  { name: "HDG", 
	 file: "./apps/main/config/dashboard/display-fault-msg/hdg.html", 
	 buttons: [] },
  {
    name: "HDG FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/hdg_fail.html",
    buttons: [],
  },
  {
    name: "HEADING (HDG) MISMATCH",
    file: "./apps/main/config/dashboard/display-fault-msg/hdg_mismatch.html",
    buttons: [],
  },
  {
    name: "HOT PFD1",
    file: "./apps/main/config/dashboard/display-fault-msg/hot_pdf1.html",
    buttons: [],
  },
  {
    name: "HOT PFD2",
    file: "./apps/main/config/dashboard/display-fault-msg/hot_pdf2.html",
    buttons: [],
  },
  {
    name: "HOT MFD1",
    file: "./apps/main/config/dashboard/display-fault-msg/hot_mfd1.html",
    buttons: [],
  },
  {
    name: "HOT MFD2",
    file: "./apps/main/config/dashboard/display-fault-msg/hot_mfd2.html",
    buttons: [],
  },
  {
    name: "HOT ED",
    file: "./apps/main/config/dashboard/display-fault-msg/hot_ed.html",
    buttons: [],
  },
  {
    name: "HOT DISPLAYS",
    file: "./apps/main/config/dashboard/display-fault-msg/hot_displays.html",
    buttons: [],
  },
  {
    name: "HC06 FAULT",
    file: "./apps/main/config/dashboard/display-fault-msg/hc06_fault.html",
    buttons: [],
  },
  
  {
    name: "IOM1 FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/iom1_fail.html",
    buttons: [],
  },
  {
    name: "IOM2 FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/iom2_fail.html",
    buttons: [],
  },
  {
    name: "IOMS FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/ioms_fail.html",
    buttons: [],
  },
  { name: "ICE", 
	 file: "./apps/main/config/dashboard/display-fault-msg/ice.html", 
	 buttons: [] },
  {
    name: "INCR REF SPEED",
    file: "./apps/main/config/dashboard/display-fault-msg/inc_ref_speed.html",
    buttons: [],
  },
  {
    name: "IOP BAD CONF",
    file: "./apps/main/config/dashboard/display-fault-msg/iop_bad_conf.html",
    buttons: [],
  },
	{
    name: "IOP1 FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/iop1_fail.html",
    buttons: [],
  },
	{
    name: "IOP2 FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/iop2_fail.html",
    buttons: [],
  },
	{
    name: "IOPS FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/iops_fail.html",
    buttons: [],
  },
  {
    name: "IRS ALIGN FAULT",
    file: "./apps/main/config/dashboard/display-fault-msg/irs_align_fault.html",
    buttons: [],
  },
  {
    name: "IRS FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/irs_fail.html",
    buttons: [],
  },
  {
    name: "IAS FAIL FLAG",
    file: "./apps/main/config/dashboard/display-fault-msg/ias_fail_flag.html",
    buttons: [],
  },
  {
    name: "IAS FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/ias_fail.html",
    buttons: [],
  },
  {
    name: "IAS MISMATCH",
    file: "./apps/main/config/dashboard/display-fault-msg/ias_mismatch.html",
    buttons: [],
  },
  {
    name: "IVSI FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/ivsi_fail.html",
    buttons: [],
  },
  {
    name: "IRS DIFFERENCE",
    file: "./apps/main/config/dashboard/display-fault-msg/irs_difference.html",
    buttons: [],
  },
  {
    name: "LINK FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/link_fail.html",
    buttons: [],
  },
  {
    name: "L FD FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/l_fd_fail.html",
    buttons: [],
  },
  {
    name: "LOC MISMATCH",
    file: "./apps/main/config/dashboard/display-fault-msg/loc_mismatch.html",
    buttons: [],
  },
  {
    name: "OPERATING LIMITS",
    file: "./apps/main/config/dashboard/display-fault-msg/operating_limits.html",
    buttons: [],
  },
  {
    name: "MFD1 LINK FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/mfd1_link_fail.html",
    buttons: [],
  },
  {
    name: "MFD2 LINK FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/mfd2_link_fail.html",
    buttons: [],
  },
  {
    name: "MFD1 MON FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/mfd1_mon_fail.html",
    buttons: [],
  },
  {
    name: "MFD2 MON FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/mfd2_mon_fail.html",
    buttons: [],
  },
	{
    name: "Erroneous Elev. Trim Ind.",
    file: "./apps/main/config/dashboard/display-fault-msg/elev_trim_ind.html",
    buttons: [],
  },
  {
    name: "MISTRIM [TRIM L WING DN]",
    file: "./apps/main/config/dashboard/display-fault-msg/mistrim_lwd.html",
    buttons: [],
  },
  {
    name: "MISTRIM [TRIM NOSE DN]",
    file: "./apps/main/config/dashboard/display-fault-msg/mistrim_nd.html",
    buttons: [],
  },
  {
    name: "MISTRIM [TRIM NOSE UP]",
    file: "./apps/main/config/dashboard/display-fault-msg/mistrim_nu.html",
    buttons: [],
  },
  {
    name: "MISTRIM [TRIM R WING DN]",
    file: "./apps/main/config/dashboard/display-fault-msg/mistrim_rwd.html",
    buttons: [],
  },
  {
    name: "NO AUDIO FROM SPEAKER",
    file: "./apps/main/config/dashboard/display-fault-msg/no_audio_speaker.html",
    buttons: [],
  },
  {
    name: "NO DATA ON DISPLAY UNIT",
    file: "./apps/main/config/dashboard/display-fault-msg/no_data_on_display_offen.html",
    buttons: [],
  },
  {
    name: "NVS INOP LIGHT",
    file: "./apps/main/config/dashboard/display-fault-msg/nvs_inop_light.html",
    buttons: [],
  },
  {
    name: "OSG TEST ABORT",
    file: "./apps/main/config/dashboard/display-fault-msg/osg_test_abort.html",
    buttons: [],
  },
  {
    name: "OSG TEST FAILED",
    file: "./apps/main/config/dashboard/display-fault-msg/osg_test_failed.html",
    buttons: [],
  },
  {
    name: "OVERSPEED",
    file: "./apps/main/config/dashboard/display-fault-msg/overspeed.html",
    buttons: [],
  },
	{
    name: "Erroneous Fire Bell/Engine Fuel and Hydraulic Indications",
    file: "./apps/main/config/dashboard/display-fault-msg/fire_bell.html",
    buttons: [],
  },
	{
    name: "Erroneous SAT Indications",
    file: "./apps/main/config/dashboard/display-fault-msg/sat_fail.html",
    buttons: [],
  },
	{
    name: "PFD, MFD or ED Remain in Self-Test Mode",
    file: "./apps/main/config/dashboard/display-fault-msg/disp_rem_test.html",
    buttons: [],
  },
  {
    name: "PFD1 LINK FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/pfd1_link_fail.html",
    buttons: [],
  },
  {
    name: "PFD2 LINK FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/pfd2_link_fail.html",
    buttons: [],
  },
  {
    name: "PFD1 MON FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/pfd1_mon_fail.html",
    buttons: [],
  },
  {
    name: "PFD2 MON FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/pfd2_mon_fail.html",
    buttons: [],
  },
  {
    name: "POWERPLANT",
    file: "./apps/main/config/dashboard/display-fault-msg/powerplant.html",
    buttons: [],
  },
  {
    name: "PAX ENTERTAINMENT SYSTEM",
    file: "./apps/main/config/dashboard/display-fault-msg/pax_ent_system.html",
    buttons: [],
  },
	
  {
    name: "PITCH",
    file: "./apps/main/config/dashboard/display-fault-msg/pitch.html",
    buttons: [],
  },
  {
    name: "PITCH MISMATCH",
    file: "./apps/main/config/dashboard/display-fault-msg/pitch_mismatch.html",
    buttons: [],
  },
  { name: "RA", 
	 file: "./apps/main/config/dashboard/display-fault-msg/ra.html", 
	 buttons: [] },
  {
    name: "RA1 FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/ra1_fail.html",
    buttons: [],
  },
  {
    name: "RA2 FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/ra2_fail.html",
    buttons: [],
  },
  {
    name: "RAS FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/ras_fail.html",
    buttons: [],
  },
  {
    name: "RAD ALT MISMATCH",
    file: "./apps/main/config/dashboard/display-fault-msg/rad_alt_mismatch.html",
    buttons: [],
  },
  { name: "ROLL", 
	 file: "./apps/main/config/dashboard/display-fault-msg/roll.html", 
	 buttons: [] },
  {
    name: "ROLL MISMATCH",
    file: "./apps/main/config/dashboard/display-fault-msg/roll_mismatch.html",
    buttons: [],
  },
  {
    name: "R FD FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/r_fd_fail.html",
    buttons: [],
  },
  {
    name: "STAB FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/stab_fail.html",
    buttons: [],
  },
  { name: "SSEC (ISI)", 
	 file: "./apps/main/config/dashboard/display-fault-msg/ssec.html", 
	 buttons: [] 
	},
  { name: "T on ED", 
	 file: "./apps/main/config/dashboard/display-fault-msg/t_ed.html", 
	 buttons: [] 
	},
  {
    name: "TERRAIN FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/terrain_fail.html",
    buttons: [],
  },
  {
    name: "TCAS FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/tcas_fail.html",
    buttons: [],
  },
  {
    name: "Turn & Slip indicator on ISI",
    file: "./apps/main/config/dashboard/display-fault-msg/turn_and_slip.html",
    buttons: [],
  },
  {
    name: "VHF COM FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/vhf_com_fail.html",
    buttons: [],
  },
  {
    name: "WTG1 FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/wtg1_fail.html",
    buttons: [],
  },
  {
    name: "WTG2 FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/wtg2_fail.html",
    buttons: [],
  },
  {
    name: "WTGS FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/wtgs_fail.html",
    buttons: [],
  },
  {
    name: "WOW/IOP1 FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/wow_iop1_fail.html",
    buttons: [],
  },
  {
    name: "WOW/IOP2 FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/wow_iop2_fail.html",
    buttons: [],
  },
  {
    name: "WOW/IOPS FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/wow_iops_fail.html",
    buttons: [],
  },
  {
    name: "WX FAIL",
    file: "./apps/main/config/dashboard/display-fault-msg/wx_fail.html",
    buttons: [],
  },
  {
    name: "YD INHIBIT",
    file: "./apps/main/config/dashboard/display-fault-msg/yd_inhibit.html",
    buttons: [],
  },
  {
    name: "YD NOT CENTER",
    file: "./apps/main/config/dashboard/display-fault-msg/yd_not_center.html",
    buttons: [],
  },
	{
    name: "FMS Remains in Self-Test Mode",
    file: "./apps/main/config/dashboard/display-fault-msg/fms_rem_test.html",
    buttons: [],
  },
	{
    name: "FUEL FAILS TO TRANSFER",
    file: "./apps/main/config/dashboard/display-fault-msg/fuel_transf_fail.html",
    buttons: [],
  },
	{
    name: "ARCDU Freq Mis-compare",
    file: "./apps/main/config/dashboard/display-fault-msg/arcdu_freq.html",
    buttons: [],
  },
	{
    name: "Erroneous Fuel Transfer Indications",
    file: "./apps/main/config/dashboard/display-fault-msg/fuel_transf_ind.html",
    buttons: [],
  },
	{
    name: "Erroneous Takeoff Warning Horn",
    file: "./apps/main/config/dashboard/display-fault-msg/takeoff_wng.html",
    buttons: [],
  },
	{
    name: "Autofeather Fails to Arm on Takeoff",
    file: "./apps/main/config/dashboard/display-fault-msg/autof_fail.html",
    buttons: [],
  },
];

/**
 * DASHBOARD MAIN NAV:
 *
 * [
 *   {
 *     name: name of menu block,
 *     nodes: [
 *       {
 *         name: name of menu item,
 *         icon: optional path to icon,
 *         path: relative path to page ('INTERNAL') or URL ('EXTERNAL'),
 *         mode: setting how to proceed the nav item: 'INTERNAL' or 'EXTERNAL',
 *       }
 *     ]
 *   },
 * ]
 */
export const MAIN_NAV = [
  /* SHOW */
  {
    name: "SHOW",
    nodes: [
      {
        name: "ACCESS PANELS/EXTERNAL VIEW",
        icon: "./apps/main/config/dashboard/pic/show/access_panels_external_view.svg",
        path: "/access",
        mode: "INTERNAL",
      },
      {
        name: "ANTENNA",
        icon: "./apps/main/config/dashboard/pic/show/antenna.svg",
        path: "/unit-location/antenna",
        mode: "INTERNAL",
      },
      {
        name: "COCKPIT VIEW",
        icon: "./apps/main/config/dashboard/pic/show/cockpit_view.svg",
        path: "/unit-location",
        mode: "INTERNAL",
      },
      {
        name: "C/B LOCATION",
        icon: "./apps/main/config/dashboard/pic/show/cb_location.svg",
        path: "/ele/cb-location",
        mode: "INTERNAL",
      },
      {
        name: "CONNECTOR FINDER",
        icon: "./apps/main/config/dashboard/pic/show/connector_finder.svg",
        path: "/connector-finder",
        mode: "INTERNAL",
      },
      {
        name: "DAMAGE EVALUATION",
        icon: "./apps/main/config/dashboard/pic/show/damage_evaluation.svg",
        path: "/access/damage-evaluation",
        mode: "INTERNAL",
      },
      {
        name: "ENGINE CHANGE",
        icon: "./apps/main/config/dashboard/pic/show/engine_change.svg",
        path: "/engine/engine-change",
        mode: "INTERNAL",
      },
      {
        name: "NUISANCE WARNING",
        icon: "./apps/main/config/dashboard/pic/show/nuisance_warning.svg",
        path: "/nuisance-warning",
        mode: "INTERNAL",
      },
      {
        name: "RELAY FINDER",
        icon: "./apps/main/config/dashboard/pic/show/relay_finder.svg",
        path: "/ele/relay-finder",
        mode: "INTERNAL",
      },
      {
        name: "UNIT LOCATION",
        icon: "./apps/main/config/dashboard/pic/show/unit_location.svg",
        path: "/unit-location/underfloor",
        mode: "INTERNAL",
      },
    ],
  },

  /* READOUT */
  {
    name: "READOUT",
    nodes: [
      {
        name: "ARCDU SIMILATOR",
        icon: null,
        path: "/arcdu",
        mode: "INTERNAL",
      },
      {
        name: "PSEU SIMILATOR",
        icon: null,
        path: "/pseu",
        mode: "INTERNAL",
      }
    ],
  },

  /* SYSTEMS */
  {
    name: "SYSTEMS",
    nodes: [
      {
        name: "21 BLEED",
        icon: null,
        path: "/bleed",
        mode: "INTERNAL",
      },
      {
        name: "23 ANVS",
        icon: null,
        path: "/anvs",
        mode: "INTERNAL",
      },
      {
        name: "24 ELECTRICAL",
        icon: null,
        path: "/ele",
        mode: "INTERNAL",
      },
      {
        name: "26 FIRE PROT.",
        icon: null,
        path: "/fire-protection",
        mode: "INTERNAL",
      },
      {
        name: "27 FLIGHT CONT.",
        icon: null,
        path: "/flight-control",
        mode: "INTERNAL",
      },
      {
        name: "28 FUEL",
        icon: null,
        path: "/fuel",
        mode: "INTERNAL",
      },
      {
        name: "29 HYDRAULIC",
        icon: null,
        path: "/hyd",
        mode: "INTERNAL",
      },
      {
        name: "30 DEICING",
        icon: null,
        path: "/deicing",
        mode: "INTERNAL",
      },
      {
        name: "32 GEAR",
        icon: null,
        path: "/gear",
        mode: "INTERNAL",
      },
      {
        name: "33 LIGHTS",
        icon: null,
        path: "/lights",
        mode: "INTERNAL",
      },
      {
        name: "34 HGS",
        icon: null,
        path: "/hgs",
        mode: "INTERNAL",
      },
      {
        name: "52 DOOR SYSTEM",
        icon: null,
        path: "/door",
        mode: "INTERNAL",
      },
      {
        name: "70 ENGINE",
        icon: null,
        path: "/engine",
        mode: "INTERNAL",
      },
      {
        name: "49 APU",
        icon: null,
        path: "/engine/apu",
        mode: "INTERNAL",
      },
    ],
  },

  /* LINKS   { name: "Help", path: "/help", mode: "INTERNAL" }, */
  {
    name: "LINKS",
    nodes: [
      {
        name: "MEL",
        icon: null,
        path: "http://www.infotools.at/clp/Standalone/MEL_test_document.pdf",
        mode: "EXTERNAL",
      },
			{
        name: "CONTACTS",
        icon: null,
        path: "/contacts",
        mode: "INTERNAL",
      },
    ],
  },
];

/**
 * DASHBOARD CUSTOMER LOGO:
 */
export const CUSTOMER_LOGO = "./apps/main/config/dashboard/pic/logo_westjet.svg";

/**
 * DASHBOARD FOOTER LOGOS:
 *
 * [
 *   {
 *     logo: path to logo image,
 *     path: URL to external page,
 *   }
 * ]
 */
export const FOOTER_LOGOS = [
  { logo: "./apps/main/config/dashboard/pic/air_cote.svg", path: "https://www.aircotedivoire.com" },
  { logo: "./apps/main/config/dashboard/pic/air_iceland.svg", path: "https://www.icelandair.com/is/" },
  { logo: "./apps/main/config/dashboard/pic/aurora.svg", path: "https://www.flyaurora.ru/en/" },
  { logo: "./apps/main/config/dashboard/pic/austrian.svg", path: "http://www.austrian.com" },
  { logo: "./apps/main/config/dashboard/pic/croatia.svg", path: "https://www.croatiaairlines.com" },
  { logo: "./apps/main/config/dashboard/pic/conair.svg", path: "http://conair.ca/" },
  { logo: "./apps/main/config/dashboard/pic/jazz.svg", path: "http://www.flyjazz.ca/en/home/default.aspx" },
  
  { logo: "./apps/main/config/dashboard/pic/lufthansa.svg", path: "https://www.lufthansacityline.com/de/home.html" },
  { logo: "./apps/main/config/dashboard/pic/luxair.svg", path: "http://www.luxair.lu" },
  { logo: "./apps/main/config/dashboard/pic/olympic.svg", path: "https://www.olympicair.com" },
  { logo: "./apps/main/config/dashboard/pic/pal.svg", path: "http://www.philippineairlines.com" },
  
  { logo: "./apps/main/config/dashboard/pic/porter.svg", path: "http://www.flyporter.com" },
  { logo: "./apps/main/config/dashboard/pic/sabena.svg", path: "https://www.sabenatechnics.com" },
  { logo: "./apps/main/config/dashboard/pic/qantas.svg", path: "https://www.qantas.com/at/en/qantas-experience/network-and-partner-airlines/qantaslink.html" },
  { logo: "./apps/main/config/dashboard/pic/sata.svg", path: "https://www.azoresairlines.pt/en" },
  { logo: "./apps/main/config/dashboard/pic/tassili.svg", path: "http://www.tassiliairlines.dz/web/" },
  { logo: "./apps/main/config/dashboard/pic/westjet.svg", path: "http://www.westjet.com" },
  { logo: "./apps/main/config/dashboard/pic/wideroe.svg", path: "https://www.wideroe.no" },
];
