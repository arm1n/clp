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
		/* ECS Pages */
		arcdu_ecs1: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_ecs1.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_ecs1.html",
		},
		arcdu_ecs2: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_ecs2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_ecs2.html",
		},
		arcdu_ecs3: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_ecs3.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_ecs3.html",
		},
		arcdu_ecs4: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_ecs4.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_ecs4.html",
		},
		arcdu_ecs5: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_ecs5.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_ecs5.html",
		},
		arcdu_ecs6: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_ecs6.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_ecs6.html",
		},
		arcdu_ecs7: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_ecs7.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_ecs7.html",
		},
		/* FCS Pages */
		fcs_p1: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/fcs_p1.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/fcs_p1.html",
		},
		fcs_p2: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/fcs_p2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/fcs_p2.html",
		},
		fcs_p3: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/fcs_p3.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/fcs_p3.html",
		},
		fcs_p4: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/fcs_p4.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/fcs_p4.html",
		},
		/* ANTI SKID */
		anti_skid_p1: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/anti_skid_p1.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/anti_skid_p1.html",
		},
		anti_skid_p2: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/anti_skid_p2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/anti_skid_p2.html",
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
			"clp-key-l2": "fcs_p1",
			"clp-key-l3": "arcdu_ecs1",
			"clp-key-l4": "arcdu_tmcu1",
			"clp-key-r1": "anti_skid_p1",
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
		/* ECS */
		arcdu_ecs1: {
		  "clp-dim-button": "arcdu_other_sys_1",
			"clp-next-button": "arcdu_ecs2",
    },
		arcdu_ecs2: {
		  "clp-dim-button": "arcdu_other_sys_1",
			"clp-prev-button": "arcdu_ecs1",
			"clp-next-button": "arcdu_ecs3",
    },
		arcdu_ecs3: {
		  "clp-dim-button": "arcdu_other_sys_1",
			"clp-prev-button": "arcdu_ecs2",
			"clp-next-button": "arcdu_ecs4",
    },
		arcdu_ecs4: {
		  "clp-dim-button": "arcdu_other_sys_1",
			"clp-prev-button": "arcdu_ecs3",
			"clp-next-button": "arcdu_ecs5",
    },
		arcdu_ecs5: {
		  "clp-dim-button": "arcdu_other_sys_1",
			"clp-prev-button": "arcdu_ecs4",
			"clp-next-button": "arcdu_ecs6",
    },
		arcdu_ecs6: {
		  "clp-dim-button": "arcdu_other_sys_1",
			"clp-prev-button": "arcdu_ecs5",
			"clp-next-button": "arcdu_ecs7",
    },
		arcdu_ecs7: {
		  "clp-dim-button": "arcdu_other_sys_1",
			"clp-prev-button": "arcdu_ecs6",
			"clp-next-button": "arcdu_ecs1",
    },
		/* FCS */
		fcs_p1: {
		  "clp-dim-button": "arcdu_other_sys_1",
			"clp-next-button": "fcs_p2",
    },
		fcs_p2: {
		  "clp-dim-button": "arcdu_other_sys_1",
			"clp-prev-button": "fcs_p1",
			"clp-next-button": "fcs_p3",
    },
		fcs_p3: {
		  "clp-dim-button": "arcdu_other_sys_1",
			"clp-prev-button": "fcs_p2",
			"clp-next-button": "fcs_p4",
    },
		fcs_p4: {
		  "clp-dim-button": "arcdu_other_sys_1",
			"clp-prev-button": "fcs_p3",
			"clp-next-button": "fcs_p1",
    },
		/* ANTI SKID */
		anti_skid_p1: {
		  "clp-dim-button": "arcdu_other_sys_1",
			"clp-next-button": "anti_skid_p2",
    },
		anti_skid_p2: {
		  "clp-dim-button": "arcdu_other_sys_1",
			"clp-prev-button": "anti_skid_p1",
			"clp-next-button": "anti_skid_p1",
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