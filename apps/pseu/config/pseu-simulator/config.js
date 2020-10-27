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
		/** PRESENT FAULTS     */
    pseu_present_fault: {
      svg: "./apps/pseu/config/pseu-simulator/pic/pseu_present_fault.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_present_fault.html",
    },
		pseu_1present_fault_01: {
      svg: "./apps/pseu/config/pseu-simulator/present_faults/pseu_1present_fault_01.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_present_fault.html",
    },
		pseu_1present_fault_02: {
      svg: "./apps/pseu/config/pseu-simulator/present_faults/pseu_1present_fault_02.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_present_fault.html",
    },
		pseu_1present_fault_03: {
      svg: "./apps/pseu/config/pseu-simulator/present_faults/pseu_1present_fault_03.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_present_fault.html",
    },
		pseu_1present_fault_04: {
      svg: "./apps/pseu/config/pseu-simulator/present_faults/pseu_1present_fault_04.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_present_fault.html",
    },
		pseu_1present_fault_05: {
      svg: "./apps/pseu/config/pseu-simulator/present_faults/pseu_1present_fault_05.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_present_fault.html",
    },
		pseu_1present_fault_06: {
      svg: "./apps/pseu/config/pseu-simulator/present_faults/pseu_1present_fault_06.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_present_fault.html",
    },
		pseu_1present_fault_07: {
      svg: "./apps/pseu/config/pseu-simulator/present_faults/pseu_1present_fault_07.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_present_fault.html",
    },
		pseu_1present_fault_08: {
      svg: "./apps/pseu/config/pseu-simulator/present_faults/pseu_1present_fault_08.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_present_fault.html",
    },
		pseu_1present_fault_09: {
      svg: "./apps/pseu/config/pseu-simulator/present_faults/pseu_1present_fault_09.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_present_fault.html",
    },
		
		
		/** FAULTS HISTORY     */
		pseu_2fault_history: {
      svg: "./apps/pseu/config/pseu-simulator/pic/pseu_2fault_history.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_2fault_history.html",
    },
		pseu_2fault_history_leg00: {
      svg: "./apps/pseu/config/pseu-simulator/fault_history/pseu_2fault_history_leg00.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_2fault_history.html",
    },
		pseu_2fault_history_leg00a: {
      svg: "./apps/pseu/config/pseu-simulator/fault_history/pseu_2fault_history_leg00a.svg",
      file: "./apps/pseu/config/pseu-simulator/fault_history/fault_history_help.html",
    },
		pseu_2fault_history_leg00b: {
      svg: "./apps/pseu/config/pseu-simulator/fault_history/pseu_2fault_history_leg00b.svg",
      file: "./apps/pseu/config/pseu-simulator/fault_history/fault_history_help.html",
    },
		pseu_2fault_history_leg00c: {
      svg: "./apps/pseu/config/pseu-simulator/fault_history/pseu_2fault_history_leg00c.svg",
      file: "./apps/pseu/config/pseu-simulator/fault_history/fault_history_help.html",
    },
		pseu_2fault_history_leg00end: {
      svg: "./apps/pseu/config/pseu-simulator/fault_history/pseu_2fault_history_leg00end.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_2fault_history.html",
    },
		
		pseu_2fault_history_leg01: {
      svg: "./apps/pseu/config/pseu-simulator/fault_history/pseu_2fault_history_leg01.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_2fault_history.html",
    },
		pseu_2fault_history_leg01a: {
      svg: "./apps/pseu/config/pseu-simulator/fault_history/pseu_2fault_history_leg01a.svg",
      file: "./apps/pseu/config/pseu-simulator/fault_history/fault_history_help.html",
    },
		pseu_2fault_history_leg01end: {
      svg: "./apps/pseu/config/pseu-simulator/fault_history/pseu_2fault_history_leg01end.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_2fault_history.html",
    },
		
		pseu_2fault_history_leg02: {
      svg: "./apps/pseu/config/pseu-simulator/fault_history/pseu_2fault_history_leg02.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_2fault_history.html",
    },
		pseu_2fault_history_leg02a: {
      svg: "./apps/pseu/config/pseu-simulator/fault_history/pseu_2fault_history_leg02a.svg",
      file: "./apps/pseu/config/pseu-simulator/fault_history/fault_history_help.html",
    },
		pseu_2fault_history_leg02b: {
      svg: "./apps/pseu/config/pseu-simulator/fault_history/pseu_2fault_history_leg02b.svg",
      file: "./apps/pseu/config/pseu-simulator/fault_history/fault_history_help.html",
    },
		pseu_2fault_history_leg02c: {
      svg: "./apps/pseu/config/pseu-simulator/fault_history/pseu_2fault_history_leg02c.svg",
      file: "./apps/pseu/config/pseu-simulator/fault_history/fault_history_help.html",
    },
		pseu_2fault_history_leg02d: {
      svg: "./apps/pseu/config/pseu-simulator/fault_history/pseu_2fault_history_leg02d.svg",
      file: "./apps/pseu/config/pseu-simulator/fault_history/fault_history_help.html",
    },
		pseu_2fault_history_leg02end: {
      svg: "./apps/pseu/config/pseu-simulator/fault_history/pseu_2fault_history_leg02end.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_2fault_history.html",
    },
		
		pseu_2fault_history_end: {
      svg: "./apps/pseu/config/pseu-simulator/fault_history/pseu_2fault_history_end.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_2fault_history.html",
    },
		
		/** RIGGING HELP  */
		pseu_3rigging_help: {
      svg: "./apps/pseu/config/pseu-simulator/pic/pseu_3rigging_help.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_3rigging_help.html",
    },
		rigging_help_01: {
      svg: "./apps/pseu/config/pseu-simulator/rigging_help/rigging_help_01.svg",
      file: "./apps/pseu/config/pseu-simulator/rigging_help/rigging_help.html",
    },
		rigging_help_02: {
      svg: "./apps/pseu/config/pseu-simulator/rigging_help/rigging_help_02.svg",
      file: "./apps/pseu/config/pseu-simulator/rigging_help/rigging_help.html",
    },
		rigging_help_03: {
      svg: "./apps/pseu/config/pseu-simulator/rigging_help/rigging_help_03.svg",
      file: "./apps/pseu/config/pseu-simulator/rigging_help/rigging_help.html",
    },
		rigging_help_04: {
      svg: "./apps/pseu/config/pseu-simulator/rigging_help/rigging_help_04.svg",
      file: "./apps/pseu/config/pseu-simulator/rigging_help/rigging_help.html",
    },
		rigging_help_05: {
      svg: "./apps/pseu/config/pseu-simulator/rigging_help/rigging_help_05.svg",
      file: "./apps/pseu/config/pseu-simulator/rigging_help/rigging_help.html",
    },
		
		/** RIGGING HISTORY  */
		pseu_4rigging_history: {
      svg: "./apps/pseu/config/pseu-simulator/pic/pseu_4rigging_history.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_4rigging_history.html",
    },
		pseu_4rigging_history_01: {
      svg: "./apps/pseu/config/pseu-simulator/rigging_history/pseu_4rigging_history_01.svg",
      file: "./apps/pseu/config/pseu-simulator/rigging_history/rigging_history.html",
    },
		pseu_4rigging_history_02: {
      svg: "./apps/pseu/config/pseu-simulator/rigging_history/pseu_4rigging_history_02.svg",
      file: "./apps/pseu/config/pseu-simulator/rigging_history/rigging_history.html",
    },
		pseu_4rigging_history_03: {
      svg: "./apps/pseu/config/pseu-simulator/rigging_history/pseu_4rigging_history_03.svg",
      file: "./apps/pseu/config/pseu-simulator/rigging_history/rigging_history.html",
    },
		pseu_4rigging_history_04: {
      svg: "./apps/pseu/config/pseu-simulator/rigging_history/pseu_4rigging_history_04.svg",
      file: "./apps/pseu/config/pseu-simulator/rigging_history/rigging_history.html",
    },
		pseu_4rigging_history_end: {
      svg: "./apps/pseu/config/pseu-simulator/rigging_history/pseu_4rigging_history_end.svg",
      file: "./apps/pseu/config/pseu-simulator/rigging_history/rigging_history.html",
    },
		
		/** SYSTEM STATUS  */
		pseu_5system_status: {
      svg: "./apps/pseu/config/pseu-simulator/pic/pseu_5system_status.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_5system_status.html",
    },
		pseu_5system_status_bite: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/pseu_5system_status_bite.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/system_bite_status.html",
    },
		/** SYSTEM STATUS   A */ 
		pseu_5system_status_a: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_a/system_status_a.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/system_status_a.html",
    },
		pseu_5system_status_a01: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_a/system_status_a05.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/system_status_a.html",
    },
		pseu_5system_status_a02: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_a/system_status_a05.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/system_status_a.html",
    },
		pseu_5system_status_a03: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_a/system_status_a05.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/system_status_a.html",
    },
		pseu_5system_status_a04: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_a/system_status_a05.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/system_status_a.html",
    },
		pseu_5system_status_a05: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_a/system_status_a05.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/system_status_a.html",
    },
		pseu_5system_status_a_end: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_a/system_status_a_end.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/system_status_a.html",
    },
		
		
		
		
		pseu_5system_status_b: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/pseu_5system_status_b.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/system_status_b.html",
    },
		pseu_5system_status_d: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/pseu_5system_status_d.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/system_status_d.html",
    },
		pseu_5system_status_e: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/pseu_5system_status_e.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/system_status_e.html",
    },
		
		
		/** FAULT HISTORY ERASE  */
		pseu_6erase: {
      svg: "./apps/pseu/config/pseu-simulator/pic/pseu_6erase.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_6erase.html",
    },
		pseu_6erase_01: {
      svg: "./apps/pseu/config/pseu-simulator/erase/pseu_6erase_01.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_6erase.html",
    },
		pseu_6erase_02: {
      svg: "./apps/pseu/config/pseu-simulator/erase/pseu_6erase_02.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_6erase.html",
    },
		
		
  },

  transitions: {
    pseu_off: {
      "clp-btn-on": "pseu_present_fault",
    },
		/** PRESENT FAULTS     */
    pseu_present_fault: {
      "clp-btn-on": "pseu_off",
			"clp-btn-yes": "pseu_1present_fault_01",
			"clp-btn-no": "pseu_2fault_history",
			"clp-btn-up": "pseu_6erase",
      "clp-btn-down": "pseu_2fault_history",
    },
		pseu_1present_fault_01: {
			"clp-btn-menu": "pseu_present_fault",
      "clp-btn-on": "pseu_off",
			"clp-btn-up": "",
      "clp-btn-down": "pseu_1present_fault_02",
    },
		pseu_1present_fault_02: {
			"clp-btn-menu": "pseu_present_fault",
      "clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_1present_fault_01",
      "clp-btn-down": "pseu_1present_fault_03",
    },
		pseu_1present_fault_03: {
			"clp-btn-menu": "pseu_present_fault",
      "clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_1present_fault_02",
      "clp-btn-down": "pseu_1present_fault_04",
    },
		pseu_1present_fault_04: {
			"clp-btn-menu": "pseu_present_fault",
      "clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_1present_fault_03",
      "clp-btn-down": "pseu_1present_fault_05",
    },
		pseu_1present_fault_05: {
			"clp-btn-menu": "pseu_present_fault",
      "clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_1present_fault_04",
      "clp-btn-down": "pseu_1present_fault_06",
    },
		pseu_1present_fault_06: {
			"clp-btn-menu": "pseu_present_fault",
      "clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_1present_fault_05",
      "clp-btn-down": "pseu_1present_fault_07",
    },
		pseu_1present_fault_07: {
			"clp-btn-menu": "pseu_present_fault",
      "clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_1present_fault_06",
      "clp-btn-down": "pseu_1present_fault_08",
    },
		pseu_1present_fault_08: {
			"clp-btn-menu": "pseu_present_fault",
      "clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_1present_fault_07",
      "clp-btn-down": "pseu_1present_fault_09",
    },
		pseu_1present_fault_09: {
			"clp-btn-menu": "pseu_present_fault",
      "clp-btn-on": "pseu_off",
			"clp-btn-menu": "pseu_present_fault",
			"clp-btn-up": "pseu_1present_fault_08",
      "clp-btn-down": "",
    },
		
		/** FAULTS HISTORY     */
		pseu_2fault_history: {
			"clp-btn-on": "pseu_off",
			"clp-btn-yes": "pseu_2fault_history_leg00",
			"clp-btn-no": "pseu_3rigging_help",
			"clp-btn-up": "pseu_present_fault",
      "clp-btn-down": "pseu_3rigging_help",
    },
		/** FAULTS HISTORY  LEG 00   */
		pseu_2fault_history_leg00: {
			"clp-btn-menu": "pseu_2fault_history",
			"clp-btn-on": "pseu_off",
			"clp-btn-yes": "pseu_2fault_history_leg00a",
			"clp-btn-no": "pseu_2fault_history_leg01",
			"clp-btn-up": "",
      "clp-btn-down": "pseu_2fault_history_leg01",
    },
		pseu_2fault_history_leg00a: {
			"clp-btn-menu": "pseu_2fault_history_leg00",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_2fault_history_leg02end",
      "clp-btn-down": "pseu_2fault_history_leg00b",
    },
		pseu_2fault_history_leg00b: {
			"clp-btn-menu": "pseu_2fault_history_leg00",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_2fault_history_leg00a",
      "clp-btn-down": "pseu_2fault_history_leg00c",
    },
		pseu_2fault_history_leg00c: {
			"clp-btn-menu": "pseu_2fault_history_leg00",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_2fault_history_leg00b",
      "clp-btn-down": "pseu_2fault_history_leg00end",
    },
		pseu_2fault_history_leg00end: {
			"clp-btn-menu": "pseu_2fault_history_leg00",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_2fault_history_leg00c",
      "clp-btn-down": "pseu_2fault_history_leg01a",
    },
		/** FAULTS HISTORY  LEG 01   */
		pseu_2fault_history_leg01: {
			"clp-btn-menu": "pseu_2fault_history",
			"clp-btn-on": "pseu_off",
			"clp-btn-no": "pseu_2fault_history_leg02",
			"clp-btn-yes": "pseu_2fault_history_leg01a",
			"clp-btn-up": "pseu_2fault_history_leg00",
      "clp-btn-down": "pseu_2fault_history_leg02",
    },
		pseu_2fault_history_leg01a: {
			"clp-btn-menu": "pseu_2fault_history_leg01",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_2fault_history_leg00end",
      "clp-btn-down": "pseu_2fault_history_leg01end",
    },
		pseu_2fault_history_leg01end: {
			"clp-btn-menu": "pseu_2fault_history_leg01",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_2fault_history_leg00c",
      "clp-btn-down": "pseu_2fault_history_leg02a",
    },
		/** FAULTS HISTORY  LEG 02   */
		pseu_2fault_history_leg02: {
			"clp-btn-menu": "pseu_2fault_history",
			"clp-btn-on": "pseu_off",
			"clp-btn-no": "pseu_2fault_history_end",
			"clp-btn-yes": "pseu_2fault_history_leg02a",
			"clp-btn-up": "pseu_2fault_history_leg01",
      "clp-btn-down": "pseu_2fault_history_end",
    },
		pseu_2fault_history_leg02a: {
			"clp-btn-menu": "pseu_2fault_history_leg02",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_2fault_history_leg01end",
      "clp-btn-down": "pseu_2fault_history_leg02b",
    },
		pseu_2fault_history_leg02b: {
			"clp-btn-menu": "pseu_2fault_history_leg02",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_2fault_history_leg02a",
      "clp-btn-down": "pseu_2fault_history_leg02c",
    },
		pseu_2fault_history_leg02c: {
			"clp-btn-menu": "pseu_2fault_history_leg02",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_2fault_history_leg02b",
      "clp-btn-down": "pseu_2fault_history_leg02d",
    },
		pseu_2fault_history_leg02d: {
			"clp-btn-menu": "pseu_2fault_history_leg02",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_2fault_history_leg02c",
      "clp-btn-down": "pseu_2fault_history_leg02end",
    },
		pseu_2fault_history_leg02end: {
			"clp-btn-menu": "pseu_2fault_history_leg02",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_2fault_history_leg00c",
      "clp-btn-down": "pseu_2fault_history_leg00a",
    },
		
		
		/** FAULTS HISTORY  END   */
		pseu_2fault_history_end: {
			"clp-btn-on": "pseu_off",
			"clp-btn-menu": "pseu_2fault_history",
			"clp-btn-up": "pseu_2fault_history_leg02",
      "clp-btn-down": "",
    },
		
		/** RIGGING HELP  */
		pseu_3rigging_help: {
			"clp-btn-on": "pseu_off",
			"clp-btn-no": "pseu_4rigging_history",
			"clp-btn-yes": "rigging_help_01",
			"clp-btn-up": "pseu_2fault_history",
      "clp-btn-down": "pseu_4rigging_history",
    },
		rigging_help_01: {
			"clp-btn-menu": "pseu_3rigging_help",
			"clp-btn-on": "pseu_off",
			"clp-btn-no": "",
			"clp-btn-up": "rigging_help_05",
      "clp-btn-down": "rigging_help_02",
    },
		rigging_help_02: {
			"clp-btn-menu": "pseu_3rigging_help",
			"clp-btn-on": "pseu_off",
			"clp-btn-no": "",
			"clp-btn-up": "rigging_help_01",
      "clp-btn-down": "rigging_help_03",
    },
		rigging_help_03: {
			"clp-btn-menu": "pseu_3rigging_help",
			"clp-btn-on": "pseu_off",
			"clp-btn-no": "",
			"clp-btn-up": "rigging_help_02",
      "clp-btn-down": "rigging_help_04",
    },
		rigging_help_04: {
			"clp-btn-menu": "pseu_3rigging_help",
			"clp-btn-on": "pseu_off",
			"clp-btn-no": "",
			"clp-btn-up": "rigging_help_03",
      "clp-btn-down": "rigging_help_05",
    },
		rigging_help_05: {
			"clp-btn-menu": "pseu_3rigging_help",
			"clp-btn-on": "pseu_off",
			"clp-btn-no": "",
			"clp-btn-up": "rigging_help_04",
      "clp-btn-down": "rigging_help_01",
    },
		
		
		/** RIGGING HISTORY  */
		pseu_4rigging_history: {
			"clp-btn-on": "pseu_off",
			"clp-btn-no": "pseu_5system_status",
			"clp-btn-yes": "pseu_4rigging_history_01",
			"clp-btn-up": "pseu_3rigging_help",
      "clp-btn-down": "pseu_5system_status",
    },
		pseu_4rigging_history_01: {
			"clp-btn-menu": "pseu_4rigging_history",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "",
      "clp-btn-down": "pseu_4rigging_history_02",
    },
		pseu_4rigging_history_02: {
			"clp-btn-menu": "pseu_4rigging_history",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_4rigging_history_01",
      "clp-btn-down": "pseu_4rigging_history_03",
    },
		pseu_4rigging_history_03: {
			"clp-btn-menu": "pseu_4rigging_history",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_4rigging_history_02",
      "clp-btn-down": "pseu_4rigging_history_04",
    },
		pseu_4rigging_history_04: {
			"clp-btn-menu": "pseu_4rigging_history",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_4rigging_history_03",
      "clp-btn-down": "pseu_4rigging_history_end",
    },
		pseu_4rigging_history_end: {
			"clp-btn-menu": "pseu_4rigging_history",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_4rigging_history_04",
      "clp-btn-down": "pseu_4rigging_history_01",
    },
		
		/** SYSTEM STATUS  */
		pseu_5system_status: {
			"clp-btn-on": "pseu_off",
			"clp-btn-yes": "pseu_5system_status_bite",
			"clp-btn-no": "pseu_6erase",
			"clp-btn-up": "pseu_4rigging_history",
      "clp-btn-down": "pseu_6erase",
    },
		pseu_5system_status_bite: {
			"clp-btn-menu": "pseu_5system_status",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "",
			"clp-btn-no": "",
      "clp-btn-down": "pseu_5system_status_a",
    },
		
		/** SYSTEM STATUS  PSC A STATUS*/
		pseu_5system_status_a: {
			"clp-btn-menu": "pseu_system_status",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_5system_status_bite",
			"clp-btn-no": "pseu_5system_status_b",
      "clp-btn-down": "pseu_5system_status_b",
    },
		pseu_5system_status_a: {
			"clp-btn-menu": "pseu2_5system_status",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_5system_status_bite",
			"clp-btn-no": "pseu_5system_status_b",
      "clp-btn-down": "pseu_5system_status_b",
    },
		
		/** SYSTEM STATUS  PSC B STATUS*/
		pseu_5system_status_b: {
			"clp-btn-menu": "pseu_5system_status",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_5system_status_a",
			"clp-btn-no": "pseu_5system_status_d",
      "clp-btn-down": "pseu_5system_status_d",
    },
		
		/** SYSTEM STATUS  PSC D STATUS*/
		pseu_5system_status_d: {
			"clp-btn-menu": "pseu_5system_status",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_5system_status_b",
			"clp-btn-no": "pseu_5system_status_e",
      "clp-btn-down": "pseu_5system_status_e",
    },
		
		/** SYSTEM STATUS  PSC E STATUS*/
		pseu_5system_status_e: {
			"clp-btn-menu": "pseu_5system_status",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_5system_status_d",
			"clp-btn-no": "pseu_5system_status_bite",
      "clp-btn-down": "pseu_5system_status_bite",
    },
		
		
		/** FAULT HISTORY ERASE  */
		pseu_6erase: {
			"clp-btn-on": "pseu_off",
			"clp-btn-no": "pseu_present_fault",
			"clp-btn-yes": "pseu_6erase_01",
			"clp-btn-up": "pseu_5system_status",
      "clp-btn-down": "pseu_present_fault",
    },
		pseu_6erase_01: {
			"clp-btn-menu": "pseu_6erase",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "",
			"clp-btn-yes": "pseu_6erase_02",
      "clp-btn-down": "",
    },
		pseu_6erase_02: {
			"clp-btn-menu": "pseu_6erase",
			
    },
		
		
		
  },
};
