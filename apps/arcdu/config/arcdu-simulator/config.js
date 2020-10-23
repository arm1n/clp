/**
 * ARCDU DATA MODEL:
 *
 * `initialState`: The first state to be shown on start.
 * `states`: {
 *    <state1>: {
 *      svg: './path/to/state1/file.svg',
 *      file: './path/to/state1/file.html',
 *    },
 *    <state2>: {
 *      svg: './path/to/state2/file.svg',
 *      file: './path/to/state2/file.html',
 *    },
 *    <state3>: {
 *      svg: './path/to/state3/file.svg',
 *      file: './path/to/state3/file.html',
 *    },
 *    ...
 * },
 * `transitions`: {
 *   <state1>: {
 *     <ref1>: <state2>
 *   }
 *   <state2>: {
 *     <ref1>: <state3>
 *   }
 *   <state3>: {
 *     <ref1>: <state1>
 *   }
 *   ...
 * }
 */
export const CONFIG_ARCDU = {
  initialState: "arcdu_off",

  states: {
    arcdu_off: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_off.svg",
    },
    arcdu_on: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_on.svg",
    },
    arcdu_other_sys_1: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_other_sys_1.svg",
    },
    arcdu_other_sys_2: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_other_sys_2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_other_sys_2.html",
    },
  },

  transitions: {
    arcdu_off: {
      /* no buttons in `arcdu_off` state - activated by `main_on` */
    },
    arcdu_on: {
      "clp-key-l2": "arcdu_other_sys_1",
    },
    arcdu_other_sys_1: {
      "clp-dim-button": "arcdu_on",
      "clp-next-button": "arcdu_other_sys_2",
    },
    arcdu_other_sys_2: {
      "clp-dim-button": "arcdu_other_sys_1",
    },
  },
};

/**
 * ARCDU MAIN PANEL DATA MODEL:
 *
 * `initialState`: The first state to be shown on start.
 * `states`: {
 *    <state1>: {
 *      svg: './path/to/state1/file.svg',
 *      file: './path/to/state1/file.html',
 *    },
 *    <state2>: {
 *      svg: './path/to/state2/file.svg',
 *      file: './path/to/state2/file.html',
 *    },
 *    <state3>: {
 *      svg: './path/to/state3/file.svg',
 *      file: './path/to/state3/file.html',
 *    },
 *    ...
 * },
 * `transitions`: {
 *   <state1>: {
 *     <ref1>: <state2>
 *   }
 *   <state2>: {
 *     <ref1>: <state3>
 *   }
 *   <state3>: {
 *     <ref1>: <state1>
 *   }
 *   ...
 * }
 */
export const CONFIG_MAIN = {
  initialState: "main_off",

  states: {
    main_off: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/main_off.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/main_off.html",
    },
    main_on: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/main_on.svg",
    },
  },

  transitions: {
    main_off: {
      "clp-schalter": "main_on",
    },
    main_on: {
      "clp-btn": "main_off",
    },
  },
};