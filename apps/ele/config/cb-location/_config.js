/**
 * CB LOCATION DATA MODEL:
 *
 * {
 *   id: Unique id for this (sub) item
 *   text: Text shown in user interface
 *   data: {
 *     panels: {
 *       AC: relative path for file to be loaded into the AC panel
 *       AVIONICS: relative path for file to be loaded into the AVIONICS panel
 *       LEFT: relative path for file to be loaded into the LEFT panel
 *       RIGHT: relative path for file to be loaded into the RIGHT panel
 *     },
 *     units: [
 *       // various amount of relative paths to unit files
 *       "./apps/ele/path/to/first/unit.html",
 *       "./apps/ele/path/to/second/unit.unit",
 *       ...
 *     ]
 *   }
 *   nodes: [
 *     // recursive structure for children of this menu entry
 *   ]
 * }
 */
export const DATA_SET = [
  {
    /**
     * CHAPTER 21
     */
    id: "chapter_21",
    text: "Chapter 21 AIR CONDITIONING",
    data: {},
    nodes: [
      {
        id: "avionics_cooling_fans",
        text: "Avionics Cooling Fans",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_21/avionics_cooling_fans/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_21/avionics_cooling_fans/right.html",
          },
          units: [],
        },
      },
    ],
  },
  {
    /**
     * CHAPTER 22
     */
    id: "chapter_22",
    text: "Chapter 22 Autoflight",
    data: {},
    nodes: [
      {
        id: "autoflight",
        text: "AUTOFLIGHT",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_22/autoflight/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
          units: [
            "./units/ele/cb-location/units/unit.html",
            "./units/ele/cb-location/units/unit.html",
          ],
        },
      },
    ],
  },

  {
    /**
     * CHAPTER 23
     */
    id: "chapter_23",
    text: "Chapter 23 Communications",
    data: {},
    nodes: [
      {
        id: "audio",
        text: "Audio",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_23/audio/avionics.html",
            LEFT: "./units/ele/cb-location/desc/chapter_23/audio/left.html",
            RIGHT: null,
          },
          units: [
            "./units/ele/cb-location/units/unit.html",
          ],
        },
      },
      {
        id: "cvr",
        text: "CVR",
        data: {
          panels: {
            AC: "./units/ele/cb-location/desc/chapter_23/cvr/ac.html",
            AVIONICS: "./units/ele/cb-location/desc/chapter_23/cvr/avionics.html",
            LEFT: "./units/ele/cb-location/desc/chapter_23/cvr/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_23/cvr/right.html",
          },
          units: [],
        },
      },
      {
        id: "flt_att",
        text: "FLT ATT",
        data: {
          panels: {
            AC: "./units/ele/cb-location/desc/chapter_23/flt_att/ac.html",
            AVIONICS: "./units/ele/cb-location/desc/chapter_23/flt_att/avionics.html",
            LEFT: "./units/ele/cb-location/desc/chapter_23/flt_att/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_23/flt_att/right.html",
          },
          units: [],
        },
      },
      {
        id: "nvs",
        text: "NVS",
        data: {
          panels: {
            AC: "./units/ele/cb-location/desc/chapter_23/nvs/ac.html",
            AVIONICS: "./units/ele/cb-location/desc/chapter_23/nvs/avionics.html",
            LEFT: "./units/ele/cb-location/desc/chapter_23/nvs/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_23/nvs/right.html",
          },
          units: [],
        },
      },
      {
        id: "pa",
        text: "PA",
        data: {
          panels: {
            AC: "./units/ele/cb-location/desc/chapter_23/pa/ac.html",
            AVIONICS: "./units/ele/cb-location/desc/chapter_23/pa/avionics.html",
            LEFT: "./units/ele/cb-location/desc/chapter_23/pa/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_23/pa/right.html",
          },
          units: [],
        },
      },
      {
        id: "vhf_com",
        text: "VHF COM",
        data: {
          panels: {
            AC: "./units/ele/cb-location/desc/chapter_23/vhf_com/ac.html",
            AVIONICS: "./units/ele/cb-location/desc/chapter_23/vhf_com/avionics.html",
            LEFT: "./units/ele/cb-location/desc/chapter_23/vhf_com/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_23/vhf_com/right.html",
          },
          units: [],
        },
      },
    ],
  },
];

/**
 * CB LOCATION SVG FILE:
 *
 * Path to CB Location's SVG file in the middle.
 */
export const SVG_PATH = "./apps/ele/config/cb-location/pic/cb_cockpit_view.svg";

/**
 * CB LOCATION INTRO FILE:
 *
 * Path to CB Location's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/ele/config/cb-location/desc/intro.html";
