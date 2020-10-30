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
		pseu_system_status: {
      svg: "./apps/pseu/config/pseu-simulator/pic/pseu_system_status.svg",
      file: "./apps/pseu/config/pseu-simulator/desc/pseu_system_status.html",
    },
		
		/** SYSTEM STATUS   BITE */
		pseu_system_bite_status: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/bite/pseu_system_bite_status.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/bite/pseu_system_bite_status.html",
    },
		bite_status_01: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/bite/bite_status_01.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/bite/pseu_system_bite_status.html",
    },
		bite_status_02: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/bite/bite_status_02.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/bite/pseu_system_bite_status.html",
    },
		bite_status_03: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/bite/bite_status_03.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/bite/pseu_system_bite_status.html",
    },
		bite_status_04: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/bite/bite_status_04.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/bite/pseu_system_bite_status.html",
    },
		bite_status_05: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/bite/bite_status_05.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/bite/pseu_system_bite_status.html",
    },
		bite_status_06: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/bite/bite_status_06.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/bite/pseu_system_bite_status.html",
    },
		bite_status_07: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/bite/bite_status_07.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/bite/pseu_system_bite_status.html",
    },
		bite_status_08: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/bite/bite_status_08.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/bite/pseu_system_bite_status.html",
    },
		bite_status_end: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/bite/bite_status_end.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/bite/pseu_system_bite_status.html",
    },
		
		
		/** SYSTEM STATUS   A */ 
		pseu_system_status_a: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_a/pseu_system_status_a.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_a/pseu_system_status_a.html",
    },
		system_status_a01: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_a/system_status_a01.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_a/pseu_system_status_a.html",
    },
		system_status_a02: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_a/system_status_a02.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_a/pseu_system_status_a.html",
    },
		system_status_a03: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_a/system_status_a03.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_a/pseu_system_status_a.html",
    },
		system_status_a04: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_a/system_status_a04.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/system_status_display_help.html",
    },
		system_status_a05: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_a/system_status_a05.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/system_status_display_help2.html",
    },
		system_status_a_end: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_a/system_status_a_end.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_a/pseu_system_status_a.html",
    },
		
		
		/** SYSTEM STATUS   B */ 
		pesu_system_status_b: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_b/pesu_system_status_b.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_b/pesu_system_status_b.html",
    },
		system_status_b01: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_b/system_status_b01.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_b/pesu_system_status_b.html",
    },
		system_status_b02: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_b/system_status_b02.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_b/pesu_system_status_b.html",
    },
		system_status_b03: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_b/system_status_b03.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_b/pesu_system_status_b.html",
    },
		system_status_b04: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_b/system_status_b04.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/system_status_display_help.html",
    },
		system_status_b05: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_b/system_status_b05.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/system_status_display_help2.html",
    },
		system_status_b_end: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_b/system_status_b_end.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_b/pesu_system_status_b.html",
    },
		
		/** SYSTEM STATUS   D */ 
		pesu_system_status_d: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_d/pesu_system_status_d.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_d/pesu_system_status_d.html",
    },
		system_status_d01: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_d/system_status_d01.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_d/pesu_system_status_d.html",
    },
		system_status_d02: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_d/system_status_d02.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_d/pesu_system_status_d.html",
    },
		system_status_d03: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_d/system_status_d03.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_d/pesu_system_status_d.html",
    },
		system_status_d04: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_d/system_status_d04.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/system_status_display_help.html",
    },
		system_status_d05: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_d/system_status_d05.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/system_status_display_help2.html",
    },
		system_status_d_end: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_d/system_status_d_end.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_d/pesu_system_status_d.html",
    },
		
		/** SYSTEM STATUS   E */ 
		pesu_system_status_e: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_e/pesu_system_status_e.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_e/pesu_system_status_e.html",
    },
		system_status_e01: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_e/system_status_e01.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_e/pesu_system_status_e.html",
    },
		system_status_e02: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_e/system_status_e02.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_e/pesu_system_status_e.html",
    },
		system_status_e03: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_e/system_status_e03.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_e/pesu_system_status_e.html",
    },
		system_status_e04: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_e/system_status_e04.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/system_status_display_help.html",
    },
		system_status_e05: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_e/system_status_e05.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/system_status_display_help2.html",
    },
		system_status_e_end: {
      svg: "./apps/pseu/config/pseu-simulator/system_status/psc_e/system_status_e_end.svg",
      file: "./apps/pseu/config/pseu-simulator/system_status/psc_e/pesu_system_status_e.html",
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
			"clp-btn-no": "pseu_system_status",
			"clp-btn-yes": "pseu_4rigging_history_01",
			"clp-btn-up": "pseu_3rigging_help",
      "clp-btn-down": "pseu_system_status",
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
		pseu_system_status: {
			"clp-btn-on": "pseu_off",
			"clp-btn-yes": "pseu_system_bite_status",
			"clp-btn-no": "pseu_6erase",
			"clp-btn-up": "pseu_4rigging_history",
      "clp-btn-down": "pseu_6erase",
    },
		
		/** SYSTEM STATUS  BITE*/
		pseu_system_bite_status: {
			"clp-btn-menu": "pseu_system_status",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_system_status_e",
			"clp-btn-no": "",
			"clp-btn-yes": "bite_status_01",
      "clp-btn-down": "pseu_system_status_a",
    },
		bite_status_01: {
			"clp-btn-menu": "pseu_system_bite_status",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "",
			"clp-btn-no": "",
      "clp-btn-down": "bite_status_02",
    },
		bite_status_02: {
			"clp-btn-menu": "pseu_system_bite_status",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "bite_status_01",
			"clp-btn-no": "",
      "clp-btn-down": "bite_status_03",
    },
		bite_status_03: {
			"clp-btn-menu": "pseu_system_bite_status",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "bite_status_02",
			"clp-btn-no": "",
      "clp-btn-down": "bite_status_04",
    },
		bite_status_04: {
			"clp-btn-menu": "pseu_system_bite_status",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "bite_status_03",
			"clp-btn-no": "",
      "clp-btn-down": "bite_status_05",
    },
		bite_status_05: {
			"clp-btn-menu": "pseu_system_bite_status",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "bite_status_04",
			"clp-btn-no": "",
      "clp-btn-down": "bite_status_06",
    },
		bite_status_06: {
			"clp-btn-menu": "pseu_system_bite_status",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "bite_status_05",
			"clp-btn-no": "",
      "clp-btn-down": "bite_status_07",
    },
		bite_status_07: {
			"clp-btn-menu": "pseu_system_bite_status",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "bite_status_06",
			"clp-btn-no": "",
      "clp-btn-down": "bite_status_08",
    },
		bite_status_08: {
			"clp-btn-menu": "pseu_system_bite_status",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "bite_status_07",
			"clp-btn-no": "",
      "clp-btn-down": "bite_status_end",
    },
		bite_status_end: {
			"clp-btn-menu": "pseu_system_bite_status",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "bite_status_08",
			"clp-btn-no": "",
      "clp-btn-down": "bite_status_01",
    },
		
		
		/** SYSTEM STATUS  PSC A STATUS*/
		pseu_system_status_a: {
			"clp-btn-menu": "pseu_system_status",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_system_bite_status",
			"clp-btn-no": "pesu_system_status_b",
			"clp-btn-yes": "system_status_a01",
      "clp-btn-down": "pesu_system_status_b",
    },
		system_status_a01: {
			"clp-btn-menu": "pseu_system_status_a",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_a02",
    },
		system_status_a02: {
			"clp-btn-menu": "pseu_system_status_a",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_a01",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_a03",
    },
		system_status_a03: {
			"clp-btn-menu": "pseu_system_status_a",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_a02",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_a04",
    },
		system_status_a04: {
			"clp-btn-menu": "pseu_system_status_a",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_a03",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_a05",
    },
		system_status_a05: {
			"clp-btn-menu": "pseu_system_status_a",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_a04",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_a_end",
    },
		system_status_a_end: {
			"clp-btn-menu": "pseu_system_status_a",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_a04",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_a01",
    },
		
		/** SYSTEM STATUS  PSC B STATUS*/
		pesu_system_status_b: {
			"clp-btn-menu": "pesu_system_status_b",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pseu_system_status_a",
			"clp-btn-no": "pseu_system_status_d",
			"clp-btn-yes": "system_status_b01",
      "clp-btn-down": "pesu_system_status_d",
    },
		system_status_b01: {
			"clp-btn-menu": "pesu_system_status_b",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_b_end",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_b02",
    },
		system_status_b02: {
			"clp-btn-menu": "pesu_system_status_b",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_b01",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_b03",
    },
		system_status_b03: {
			"clp-btn-menu": "pesu_system_status_b",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_b02",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_b04",
    },
		system_status_b04: {
			"clp-btn-menu": "pesu_system_status_b",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_b03",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_b05",
    },
		system_status_b05: {
			"clp-btn-menu": "pesu_system_status_b",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_b04",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_b_end",
    },
		system_status_b_end: {
			"clp-btn-menu": "pesu_system_status_b",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_b05",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_b01",
    },
		
		/** SYSTEM STATUS  PSC D STATUS*/
		pesu_system_status_d: {
			"clp-btn-menu": "pseu_system_status",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pesu_system_status_b",
			"clp-btn-no": "pesu_system_status_e",
			"clp-btn-yes": "system_status_d01",
      "clp-btn-down": "pesu_system_status_e",
    },
		system_status_d01: {
			"clp-btn-menu": "pesu_system_status_d",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_d_end",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_d02",
    },
		system_status_d02: {
			"clp-btn-menu": "pesu_system_status_d",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_d01",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_d03",
    },
		system_status_d03: {
			"clp-btn-menu": "pesu_system_status_d",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_d02",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_d04",
    },
		system_status_d04: {
			"clp-btn-menu": "pesu_system_status_d",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_d03",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_d05",
    },
		system_status_d05: {
			"clp-btn-menu": "pesu_system_status_d",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_d04",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_d_end",
    },
		system_status_d_end: {
			"clp-btn-menu": "pesu_system_status_d",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_d05",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_d01",
    },
		
		
		/** SYSTEM STATUS  PSC E STATUS*/
		pesu_system_status_e: {
			"clp-btn-menu": "pseu_system_status",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "pesu_system_status_d",
			"clp-btn-no": "pseu_system_status_bite",
			"clp-btn-yes": "system_status_e01",
      "clp-btn-down": "pseu_system_bite_status",
    },
		system_status_e01: {
			"clp-btn-menu": "pesu_system_status_e",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_e_end",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_e02",
    },
		system_status_e02: {
			"clp-btn-menu": "pesu_system_status_e",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_e01",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_e03",
    },
		system_status_e03: {
			"clp-btn-menu": "pesu_system_status_e",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_e02",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_e04",
    },
		system_status_e04: {
			"clp-btn-menu": "pesu_system_status_e",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_e03",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_e05",
    },
		system_status_e05: {
			"clp-btn-menu": "pesu_system_status_e",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_e04",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_e_end",
    },
		system_status_e_end: {
			"clp-btn-menu": "pesu_system_status_e",
			"clp-btn-on": "pseu_off",
			"clp-btn-up": "system_status_e05",
			"clp-btn-no": "",
      "clp-btn-down": "system_status_e01",
    },
		
		
		
		/** FAULT HISTORY ERASE  */
		pseu_6erase: {
			"clp-btn-on": "pseu_off",
			"clp-btn-no": "pseu_present_fault",
			"clp-btn-yes": "pseu_6erase_01",
			"clp-btn-up": "pseu_system_status",
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
