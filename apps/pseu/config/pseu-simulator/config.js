/**
 * PSEU DATA MODEL:
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
export const CONFIG_PSEU = {
  initialState: "pseu_off",

  states: {
    pseu_off: {
      svg: "./apps/pseu/config/pseu-simulator/pic/pseu_off.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_off.html",
    },
    pseu_present_fault: {
      svg: "./apps/pseu/config/pseu-simulator/pic/pseu_present_fault.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_present_fault.html",
    },
  },

  transitions: {
    pseu_off: {
      "clp-btn-on": "pseu_present_fault",
    },
    pseu_present_fault: {
      "clp-btn-on": "pseu_off",
    },
  },
};
