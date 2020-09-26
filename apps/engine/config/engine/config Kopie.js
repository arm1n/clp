/**
 * ENGINE DATA MODEL:
 *
 * {
 *   id: Unique id for this (sub) item
 *   text: Text shown in user interface
 *   data: {
 *     view: "LEFT" | "RIGHT" | "REAR",
 *     desc: "./path/to/html/file.html",
 *     unit: "./path/to/html/file.html",
 *   },
 *   nodes: [
 *     // recursive structure for children of this menu entry
 *   ]
 * }
 */
export const DATA_SET = [
  /* PROPELLER */
  {
    id: "PROPELLER",
    text: "PROPELLER",
    data: {},
    nodes: [
      {
        id: "clp-prop-assy",
        text: "Propeller",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/ac_gen.html",
          unit: "./units/eng/units/ac_gen.html",
        },
      },
      {
        id: "clp-prop-shaft-seal",
        text: "Propeller SHAFT SEAL",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/ac_gen.html",
          unit: "./units/eng/units/ac_gen.html",
        },
      },
      {
        id: "clp-beta-tube",
        text: "Beta Tubes",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/ac_gen.html",
          unit: "./units/eng/units/ac_gen.html",
        },
      },
      {
        id: "clp-brush-block",
        text: "Brush Block & Dual Pulse Probe",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/ac_gen.html",
          unit: "./units/eng/units/ac_gen.html",
        },
      },
      {
        id: "clp-prop-bal-sensor",
        text: "PROPELLER BALANCING MONITOR SENSOR",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/ac_gen.html",
          unit: "./units/eng/units/ac_gen.html",
        },
      },
    ],
  },
	
  /* UNITS */
  {
    id: "UNITS",
    text: "UNITS",
    data: {},
    nodes: [
      {
        id: "clp-fadec",
        text: "FADEC",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/ac_gen.html",
          unit: "./units/eng/units/ac_gen.html",
        },
      },
      {
        id: "clp-feath-pump",
        text: "Feathering Pump",
        data: {
          view: "REAR",
          desc: "./units/eng/desc/ac_gen.html",
          unit: "./units/eng/units/ac_gen.html",
        },
      },
    ],
  }
	
	/* Filter */
	
	
	
];

/**
 * ENGINE SVG FROM LEFT FILE:
 *
 * Path to Engine's interactive SVG file from left perspective.
 */
export const SVG_PATH_FROM_LEFT = "./apps/engine/config/engine/pic/engine_from_left.svg";

/**
 * ENGINE SVG FROM RIGHT FILE:
 *
 * Path to Engine's interactive SVG file from right perspective.
 */
export const SVG_PATH_FROM_RIGHT = "./apps/engine/config/engine/pic/engine_from_right.svg";

/**
 * ENGINE SVG FROM REAR FILE:
 *
 * Path to Engine's interactive SVG file from rear perspective.
 */
export const SVG_PATH_FROM_REAR = "./apps/engine/config/engine/pic/engine_from_rear.svg";

/**
 * ENGINE INTRO FILE:
 *
 * Path to Engine's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/engine/config/engine/desc/intro.html";
