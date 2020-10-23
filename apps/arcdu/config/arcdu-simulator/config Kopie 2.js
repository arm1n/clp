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
		arcdu_off2: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_off2.svg",
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
		arcdu_other_sys_2: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_other_sys_2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_other_sys_2.html",
    },
		arcdu_emu: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_emu.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_other_sys_2.html",
    },
		arcdu_pp_faults: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_pp_faults.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_other_sys_2.html",
    },
		arcdu_fault_summary: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_fault_summary.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_other_sys_2.html",
    },
		arcdu_healt_status: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_healt_status.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_healt_status.html",
    },
		arcdu_eng1_faults: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_eng1_faults.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_eng1_faults.html",
    },
		arcdu_eng2_faults: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_eng2_faults.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_eng2_faults.html",
    },
		arcdu_prop1_faults: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_prop1_faults.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_prop1_faults.html",
    },
		arcdu_prop2_faults: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_prop2_faults.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_prop2_faults.html",
    },
		arcdu_prop2_faults_more: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_prop2_faults_more.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_prop2_faults_more.html",
    },
		arcdu_eng2_faults_more: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_eng2_faults_more.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_eng2_faults_more.html",
    },
		arcdu_eng2_faults_ign: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_eng2_faults_ign.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_eng2_faults_ign.html",
    },
		arcdu_eng2_faults_box: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_eng2_faults_box.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_eng2_faults_box.html",
    },
		arcdu_tmcu1: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_tmcu1.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_tmcu1.html",
    },
		arcdu_tmcu2: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_tmcu2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_tmcu2.html",
    },
		arcdu_ice_prot: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_ice_prot.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_ice_prot.html",
    },
		
		
		
  },

  transitions: {
    arcdu_off: {
      /* no buttons in `arcdu_off` state - activated by `main_on` */
			
    },
		arcdu_off2: {
      /* no buttons in `arcdu_off` state - activated by `main_on` */
			"clp-maint-button": "arcdu_on",
    },
    arcdu_on: {
      "clp-key-l2": "arcdu_other_sys_1",
			"clp-dim-button": "arcdu_off2",
    },
		/* OTHER SYSTEM 1 start */
    arcdu_other_sys_1: {
			"clp-key-l1": "arcdu_emu",
			"clp-key-l4": "arcdu_tmcu1",
			"clp-key-r2": "arcdu_ice_prot",
			"clp-key-r4": "arcdu_tmcu2",
      "clp-dim-button": "arcdu_on",
      "clp-next-button": "arcdu_other_sys_2",
    },
		arcdu_ice_prot: {
		  "clp-dim-button": "arcdu_other_sys_1", 
    },
		arcdu_tmcu1: {
		  "clp-dim-button": "arcdu_other_sys_1", 
    },
		arcdu_tmcu2: {
		  "clp-dim-button": "arcdu_other_sys_1", 
    },
		/* OTHER SYSTEM 1 end */
    arcdu_other_sys_2: {
      "clp-dim-button": "arcdu_other_sys_1",
			"clp-key-l1": "arcdu_other_sys_1",
		/* EMU start*/	
    },
		arcdu_emu: {
      "clp-dim-button": "arcdu_other_sys_1",
			"clp-key-l1": "arcdu_pp_faults",
			
    },
		/* EMU Eend*/
		/* POWERPLAN FAULTS start*/
		arcdu_pp_faults: {
			"clp-key-l1": "arcdu_healt_status",
			"clp-key-l3": "arcdu_eng1_faults",
			"clp-key-l4": "arcdu_prop1_faults",
			"clp-key-r1": "arcdu_fault_summary",
			"clp-key-r3": "arcdu_eng2_faults",
			"clp-key-r4": "arcdu_prop2_faults",
			"clp-dim-button": "arcdu_emu",

    },
		arcdu_fault_summary: {
      "clp-dim-button": "arcdu_pp_faults",
    },
		arcdu_healt_status: {
      "clp-dim-button": "arcdu_pp_faults",	
    },
		arcdu_eng1_faults: {
      "clp-dim-button": "arcdu_pp_faults",	
    },
		arcdu_eng2_faults: {
			"clp-key-r1": "arcdu_eng2_faults_more",
			"clp-key-l2": "arcdu_eng2_faults_ign",
			"clp-key-l3": "arcdu_eng2_faults_box",
      "clp-dim-button": "arcdu_pp_faults",
    },
		arcdu_eng2_faults_more: {
      "clp-dim-button": "arcdu_eng2_faults",
    },
		arcdu_eng2_faults_ign: {
      "clp-dim-button": "arcdu_eng2_faults",
    },
		arcdu_eng2_faults_box: {
      "clp-dim-button": "arcdu_eng2_faults",
			
    },
		arcdu_prop1_faults: {
      "clp-dim-button": "arcdu_pp_faults",	
    },
		arcdu_prop2_faults: {
			"clp-key-r1": "arcdu_prop2_faults_more",
      "clp-dim-button": "arcdu_pp_faults",	
    },
		arcdu_prop2_faults_more: {
      "clp-dim-button": "arcdu_prop2_faults",	
    },
		/* POWERPLAN FAULTS end */
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