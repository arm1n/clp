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
		arcdu_pp_main_menu: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/arcdu_pp_main_menu.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/arcdu_pp_main_menu.html",
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
		/* APU */
		apu_p1: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/apu_p1.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/apu_p1.html",
		},
		apu_p2: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/apu_p2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/apu_p2.html",
		},
		apu_p3: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/apu_p3.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/apu_p3.html",
		},
		apu_p4: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/apu_p4.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/apu_p4.html",
		},
		apu_p5: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/apu_p5.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/apu_p5.html",
		},
		/* Flaps */
		flaps_p1: {
      svg: "./apps/arcdu/config/arcdu-simulator/system2/flaps_p1.svg",
      file: "./apps/arcdu/config/arcdu-simulator/system2/flaps_p1.html",
		},
		flaps_p2: {
      svg: "./apps/arcdu/config/arcdu-simulator/system2/flaps_p2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/system2/flaps_p2.html",
		},
		flaps_p3: {
      svg: "./apps/arcdu/config/arcdu-simulator/system2/flaps_p3.svg",
      file: "./apps/arcdu/config/arcdu-simulator/system2/flaps_p3.html",
		},
		/* CABIN PRESS CONTROL FAULTS */
		cpc_p1: {
      svg: "./apps/arcdu/config/arcdu-simulator/system2/cpc_p1.svg",
      file: "./apps/arcdu/config/arcdu-simulator/system2/cpc_p1.html",
		},
		/* TREND MONITOR */
		rend_mon_menu: {
      svg: "./apps/arcdu/config/arcdu-simulator/trend_monitor/trend_mon_menu.svg",
      file: "./apps/arcdu/config/arcdu-simulator/trend_monitor/trend_mon.html",
		},
		eng1_spool: {
      svg: "./apps/arcdu/config/arcdu-simulator/trend_monitor/eng1_spool.svg",
      file: "./apps/arcdu/config/arcdu-simulator/trend_monitor/eng1_spool.html",
		},
		eng2_spool: {
      svg: "./apps/arcdu/config/arcdu-simulator/trend_monitor/eng2_spool.svg",
      file: "./apps/arcdu/config/arcdu-simulator/trend_monitor/eng2_spool.html",
		},
		eng1_trend: {
      svg: "./apps/arcdu/config/arcdu-simulator/trend_monitor/eng1_trend.svg",
      file: "./apps/arcdu/config/arcdu-simulator/trend_monitor/eng1_trend.html",
		},
		eng2_trend: {
      svg: "./apps/arcdu/config/arcdu-simulator/trend_monitor/eng2_trend.svg",
      file: "./apps/arcdu/config/arcdu-simulator/trend_monitor/eng2_trend.html",
		},
		eng1_trend_snap1: {
      svg: "./apps/arcdu/config/arcdu-simulator/trend_monitor/eng1_trend_snap1.svg",
      file: "./apps/arcdu/config/arcdu-simulator/trend_monitor/eng1_trend_snap1.html",
		},
		eng1_trend_snap2: {
      svg: "./apps/arcdu/config/arcdu-simulator/trend_monitor/eng1_trend_snap2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/trend_monitor/eng1_trend_snap2.html",
		},
		eng2_trend_snap1: {
      svg: "./apps/arcdu/config/arcdu-simulator/trend_monitor/eng2_trend_snap1.svg",
      file: "./apps/arcdu/config/arcdu-simulator/trend_monitor/eng2_trend_snap1.html",
		},
		eng2_trend_snap2: {
      svg: "./apps/arcdu/config/arcdu-simulator/trend_monitor/eng2_trend_snap2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/trend_monitor/eng2_trend_snap2.html",
		},
		
		/* pac */
		pwr_assurance_menu: {
      svg: "./apps/arcdu/config/arcdu-simulator/pwr_assurance/pwr_assurance_menu.svg",
      file: "./apps/arcdu/config/arcdu-simulator/pwr_assurance/pwr_assurance_menu.html",
		},
		last_pac_eng1: {
      svg: "./apps/arcdu/config/arcdu-simulator/pwr_assurance/last_pac_eng1.svg",
      file: "./apps/arcdu/config/arcdu-simulator/pwr_assurance/last_pac_eng1.html",
		},
		last_pac_eng2: {
      svg: "./apps/arcdu/config/arcdu-simulator/pwr_assurance/last_pac_eng2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/pwr_assurance/last_pac_eng2.html",
		},
		pac_eng1_p1: {
      svg: "./apps/arcdu/config/arcdu-simulator/pwr_assurance/pac_eng1_p1.svg",
      file: "./apps/arcdu/config/arcdu-simulator/pwr_assurance/pac_eng1_p1.html",
		},
		pac_eng1_p2: {
      svg: "./apps/arcdu/config/arcdu-simulator/pwr_assurance/pac_eng1_p2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/pwr_assurance/pac_eng1_p2.html",
		},
		pac_eng2_p1: {
      svg: "./apps/arcdu/config/arcdu-simulator/pwr_assurance/pac_eng2_p1.svg",
      file: "./apps/arcdu/config/arcdu-simulator/pwr_assurance/pac_eng2_p1.html",
		},
		pac_eng2_p2: {
      svg: "./apps/arcdu/config/arcdu-simulator/pwr_assurance/pac_eng2_p2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/pwr_assurance/pac_eng2_p2.html",
		},
		/* config pages */
		config_menu: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/config_menu.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/config_menu.html",
		},
		ac_id: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/ac_id.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/ac_id.html",
		},
		fadec_id: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/fadec_id.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/fadec_id.html",
		},
		pec_id: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/pec_id.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/pec_id.html",
		},
		emu_id: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/emu_id.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/emu_id.html",
		},
		/* OPERATIONAL DATA */
		operat_data_menu: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/operat_data_menu.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/operat_data_menu.html",
		},
		ops_hrs_since: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/ops_hrs_since.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/ops_hrs_since.html",
		},
		ops_hrs_eng1: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/ops_hrs_eng1.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/ops_hrs_eng1.html",
		},
		ops_hrs_eng2: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/ops_hrs_eng2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/ops_hrs_eng2.html",
		},
		ops_hrs_sience_eng1: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/ops_hrs_sience_eng1.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/ops_hrs_sience_eng1.html",
		},
		ops_hrs_sience_eng2: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/ops_hrs_sience_eng2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/ops_hrs_sience_eng2.html",
		},
		/* EMU STATUS */
		emu_status_menu: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/emu_status_menu.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/emu_status_menu.html",
		},
		emu_fadec_id: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/emu_fadec_id.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/emu_fadec_id.html",
		},
		emu_faults_p1: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/emu_faults_p1.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/emu_faults_p1.html",
		},
		emu_faults_p2: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/emu_faults_p2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/emu_faults_p2.html",
		},
		emu_pec_id: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/emu_pec_id.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/emu_pec_id.html",
		},
		emu_memory_status: {
      svg: "./apps/arcdu/config/arcdu-simulator/pic/emu_memory_status.svg",
      file: "./apps/arcdu/config/arcdu-simulator/desc/emu_memory_status.html",
		},
		/* EVENT HISTORY */
		event_history_menu: {
      svg: "./apps/arcdu/config/arcdu-simulator/event_history/event_history_menu.svg",
      file: "./apps/arcdu/config/arcdu-simulator/event_history/event_history_menu.html",
		},
		pwr_exceedance: {
      svg: "./apps/arcdu/config/arcdu-simulator/event_history/pwr_exceedance.svg",
      file: "./apps/arcdu/config/arcdu-simulator/event_history/pwr_exceedance.html",
		},
		events_rec1: {
      svg: "./apps/arcdu/config/arcdu-simulator/event_history/events_rec1.svg",
      file: "./apps/arcdu/config/arcdu-simulator/event_history/events_rec1.html",
		},
		events_rec2: {
      svg: "./apps/arcdu/config/arcdu-simulator/event_history/events_rec2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/event_history/events_rec2.html",
		},
		diagn_events1: {
      svg: "./apps/arcdu/config/arcdu-simulator/event_history/diagn_events1.svg",
      file: "./apps/arcdu/config/arcdu-simulator/event_history/diagn_events1.html",
		},
		diagn_events2: {
      svg: "./apps/arcdu/config/arcdu-simulator/event_history/diagn_events2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/event_history/diagn_events2.html",
		},
		diagn_events2: {
      svg: "./apps/arcdu/config/arcdu-simulator/event_history/diagn_events2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/event_history/diagn_events2.html",
		},
		event_history_menu: {
      svg: "./apps/arcdu/config/arcdu-simulator/event_history/event_history_menu.svg",
      file: "./apps/arcdu/config/arcdu-simulator/event_history/event_history_menu.html",
		},
		/* ENGINE HEALTH HISTORY */
		eng_health_menu: {
      svg: "./apps/arcdu/config/arcdu-simulator/event_history/eng_health_menu.svg",
      file: "./apps/arcdu/config/arcdu-simulator/event_history/eng_health_menu.html",
		},
		chip_det: {
      svg: "./apps/arcdu/config/arcdu-simulator/event_history/chip_det.svg",
      file: "./apps/arcdu/config/arcdu-simulator/event_history/chip_det.html",
		},
		oil_system: {
      svg: "./apps/arcdu/config/arcdu-simulator/event_history/oil_system.svg",
      file: "./apps/arcdu/config/arcdu-simulator/event_history/oil_system.html",
		},
		fuel_system: {
      svg: "./apps/arcdu/config/arcdu-simulator/event_history/fuel_system.svg",
      file: "./apps/arcdu/config/arcdu-simulator/event_history/fuel_system.html",
		},
		/* POWERPLANT INTERFACE */
		pp_interface_menu: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/pp_interface_menu.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/pp_interface_menu.html",
		},
		adu_input_sw: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/adu_input_sw.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/adu_input_sw.html",
		},
		eng1_faults: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/eng1_faults.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/eng1_faults.html",
		},
		eng2_faults: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/eng2_faults.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/eng2_faults.html",
		},
		flap_door_sw: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/flap_door_sw.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/flap_door_sw.html",
		},
		
		/* POWERPLANT INTERFACE/ ENGINE HEALTH DISC SWITCHES */
		eng_health_sw_menu: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/eng_health_sw_menu.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/eng_health_sw_menu.html",
		},
		fuel_sys_test_p1: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/fuel_sys_test_p1.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/fuel_sys_test_p1.html",
		},
		fuel_sys_test_p2: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/fuel_sys_test_p2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/fuel_sys_test_p2.html",
		},
		oil_sys_test_p1: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/oil_sys_test_p1.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/oil_sys_test_p1.html",
		},
		oil_sys_test_p2: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/oil_sys_test_p2.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/oil_sys_test_p2.html",
		},
		oil_sys_test_p3: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/oil_sys_test_p3.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/oil_sys_test_p3.html",
		},
		chip_det_test: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/chip_det_test.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/chip_det_test.html",
		},
		
		/* POWERPLANT INTERFACE/ TRIM DATA*/
		trim_data_menu: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/trim_data_menu.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/trim_data_menu.html",
		},
		eng_trim: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/eng_trim.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/eng_trim.html",
		},
		prop1_trim: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/prop1_trim.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/prop1_trim.html",
		},
		prop2_trim: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/prop2_trim.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/prop2_trim.html",
		},
		pla_trim: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/pla_trim.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/pla_trim.html",
		},
		prop_phase_trim: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/prop_phase_trim.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/prop_phase_trim.html",
		},
		
		/* POWERPLANT INTERFACE/ FLIGHT DECK SWITCHES */
		flt_deck_sw_menu: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/flt_deck_sw_menu.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/flt_deck_sw_menu.html",
		},
		eng_start_sw: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/eng_start_sw.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/eng_start_sw.html",
		},
		eng_maint_sw: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/eng_maint_sw.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/eng_maint_sw.html",
		},
		pwr_quad_sw: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/pwr_quad_sw.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/pwr_quad_sw.html",
		},
		eng_cont_sw: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/eng_cont_sw.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/eng_cont_sw.html",
		},
		prop_osg_sw: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/prop_osg_sw.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/prop_osg_sw.html",
		},
		air_cond_sw: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/air_cond_sw.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/air_cond_sw.html",
		},
		misc_sw: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/misc_sw.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/misc_sw.html",
		},
		prop_cont_sw: {
      svg: "./apps/arcdu/config/arcdu-simulator/powerp_interface/prop_cont_sw.svg",
      file: "./apps/arcdu/config/arcdu-simulator/powerp_interface/prop_cont_sw.html",
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
			"clp-key-l1": "arcdu_pp_main_menu",
			"clp-key-l2": "fcs_p1",
			"clp-key-l3": "arcdu_ecs1",
			"clp-key-l4": "arcdu_tmcu1",
			"clp-key-r1": "anti_skid_p1",
			"clp-key-r2": "arcdu_ice_prot",
			"clp-key-r3": "apu_p1",
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
		/* APU */
		apu_p1: {
		  "clp-dim-button": "arcdu_other_sys_1",
			"clp-next-button": "apu_p2",
    },
		apu_p2: {
		  "clp-dim-button": "arcdu_other_sys_1",
			"clp-prev-button": "apu_p1",
			"clp-next-button": "apu_p3",
    },
		apu_p3: {
		  "clp-dim-button": "arcdu_other_sys_1",
			"clp-prev-button": "apu_p2",
			"clp-next-button": "apu_p4",
    },
		apu_p4: {
		  "clp-dim-button": "arcdu_other_sys_1",
			"clp-prev-button": "apu_p3",
			"clp-next-button": "apu_p5",
    },
		apu_p5: {
		  "clp-dim-button": "arcdu_other_sys_1",
			"clp-prev-button": "apu_p4",
			"clp-next-button": "apu_p1",
    },
		
		/* OTHER SYSTEM 1 end */
		
		/* POWERPLAN MAIN MENU start+++++++++++++++++++++++  */
		arcdu_pp_main_menu: {
      "clp-dim-button": "arcdu_other_sys_1",
			"clp-key-l1": "arcdu_pp_faults",
			"clp-key-l2": "rend_mon_menu",
			"clp-key-l3": "event_history_menu",
			"clp-key-l4": "operat_data_menu",
			"clp-key-r1": "pwr_assurance_menu",
			"clp-key-r2": "pp_interface_menu",
			"clp-key-r3": "emu_status_menu",
			"clp-key-r4": "config_menu",
			
    },
		/* EVENT HISTORY */
		event_history_menu: {
      "clp-dim-button": "arcdu_pp_main_menu",
			"clp-key-l1": "pwr_exceedance",
			"clp-key-l2": "eng_health_menu",
			"clp-key-l3": "diagn_events1",
			"clp-key-l4": "events_rec1",
    },
		pwr_exceedance: {
		  "clp-dim-button": "event_history_menu",
			"clp-prev-button": "event_history_menu",
    },
		diagn_events1: {
		  "clp-dim-button": "event_history_menu",
			"clp-prev-button": "event_history_menu",
			"clp-next-button": "diagn_events2",
    },
		diagn_events2: {
		  "clp-dim-button": "event_history_menu",
			"clp-prev-button": "diagn_events1",
    },
		events_rec1: {
		  "clp-dim-button": "event_history_menu",
			"clp-prev-button": "event_history_menu",
			"clp-next-button": "events_rec2",
    },
		events_rec2: {
		  "clp-dim-button": "event_history_menu",
			"clp-prev-button": "events_rec1",
    },
		/* ENGINE HEALTH HISTORY */
		eng_health_menu: {
			"clp-key-l2": "chip_det",
			"clp-key-l3": "oil_system",
			"clp-key-l4": "fuel_system",
		  "clp-dim-button": "event_history_menu",
			"clp-prev-button": "event_history_menu",
    },
		chip_det: {
		  "clp-dim-button": "eng_health_menu",
			"clp-prev-button": "eng_health_menu",
    },
		oil_system: {
		  "clp-dim-button": "eng_health_menu",
			"clp-prev-button": "eng_health_menu",
    },
		fuel_system: {
		  "clp-dim-button": "eng_health_menu",
			"clp-prev-button": "eng_health_menu",
    },
		
		/* POWERPLANT INTERFANCE */
		pp_interface_menu: {
			"clp-key-l1": "flt_deck_sw_menu",
			"clp-key-l2": "eng_health_sw_menu",
			"clp-key-l3": "flap_door_sw",
			"clp-key-l4": "eng1_faults",
			"clp-key-r1": "adu_input_sw",
			"clp-key-r2": "trim_data_menu",
			"clp-key-r4": "eng2_faults",
			"clp-dim-button": "arcdu_pp_main_menu",
    },
		adu_input_sw: {
		  "clp-dim-button": "pp_interface_menu",
			"clp-prev-button": "pp_interface_menu",
    },
		eng1_faults: {
		  "clp-dim-button": "pp_interface_menu",
			"clp-prev-button": "pp_interface_menu",
    },
		eng2_faults: {
		  "clp-dim-button": "pp_interface_menu",
			"clp-prev-button": "pp_interface_menu",
    },
		flap_door_sw: {
		  "clp-dim-button": "pp_interface_menu",
			"clp-prev-button": "pp_interface_menu",
    },
		/* POWERPLANT INTERFACE/ FLIGHT DECK SWITCHES++++++++++++++++ */
		flt_deck_sw_menu: {
			"clp-key-l1": "eng_start_sw",
			"clp-key-l2": "eng_maint_sw",
			"clp-key-l3": "pwr_quad_sw",
			"clp-key-l4": "eng_cont_sw",
			"clp-key-r1": "prop_osg_sw",
			"clp-key-r2": "air_cond_sw",
			"clp-key-r3": "misc_sw",
			"clp-key-r4": "prop_cont_sw",
		  "clp-dim-button": "pp_interface_menu",
			
    },
		eng_start_sw: {
		  "clp-dim-button": "flt_deck_sw_menu",
			"clp-prev-button": "flt_deck_sw_menu",
    },
		eng_maint_sw: {
		  "clp-dim-button": "flt_deck_sw_menu",
			"clp-prev-button": "flt_deck_sw_menu",
    },
		pwr_quad_sw: {
		  "clp-dim-button": "flt_deck_sw_menu",
			"clp-prev-button": "flt_deck_sw_menu",
    },
		eng_cont_sw: {
		  "clp-dim-button": "flt_deck_sw_menu",
			"clp-prev-button": "flt_deck_sw_menu",
    },
		prop_osg_sw: {
		  "clp-dim-button": "flt_deck_sw_menu",
			"clp-prev-button": "flt_deck_sw_menu",
    },
		air_cond_sw: {
		  "clp-dim-button": "flt_deck_sw_menu",
			"clp-prev-button": "flt_deck_sw_menu",
    },
		misc_sw: {
		  "clp-dim-button": "flt_deck_sw_menu",
			"clp-prev-button": "flt_deck_sw_menu",
    },
		prop_cont_sw: {
		  "clp-dim-button": "flt_deck_sw_menu",
			"clp-prev-button": "flt_deck_sw_menu",
    },
		
		
		/* POWERPLANT INTERFACE/ ENGINE HEALTH DISC SWITCHES +++++++++++++++ */
		eng_health_sw_menu: {
			"clp-key-l1": "chip_det_test",
			"clp-key-l2": "oil_sys_test_p1",
			"clp-key-l3": "fuel_sys_test_p1",
		  "clp-dim-button": "pp_interface_menu",
			"clp-prev-button": "pp_interface_menu",
    },
		chip_det_test: {
		  "clp-dim-button": "eng_health_sw_menu",
			"clp-prev-button": "eng_health_sw_menu",
    },
		oil_sys_test_p1: {
		  "clp-dim-button": "eng_health_sw_menu",
			"clp-prev-button": "eng_health_sw_menu",
			"clp-next-button": "oil_sys_test_p2",
    },
		oil_sys_test_p2: {
		  "clp-dim-button": "eng_health_sw_menu",
			"clp-prev-button": "oil_sys_test_p1",
			"clp-next-button": "oil_sys_test_p3",
    },
		oil_sys_test_p3: {
		  "clp-dim-button": "eng_health_sw_menu",
			"clp-prev-button": "oil_sys_test_p2",
			"clp-next-button": "oil_sys_test_p1",
    },
		fuel_sys_test_p1: {
		  "clp-dim-button": "eng_health_sw_menu",
			"clp-prev-button": "eng_health_sw_menu",
			"clp-next-button": "fuel_sys_test_p2",
    },
		fuel_sys_test_p2: {
		  "clp-dim-button": "eng_health_sw_menu",
			"clp-prev-button": "fuel_sys_test_p1",
			"clp-next-button": "fuel_sys_test_p1",
    },
	
		/* POWERPLANT INTERFACE/ TRIM DATA*/
		trim_data_menu: {
			"clp-key-l1": "eng_trim",
			"clp-key-l2": "prop1_trim",
			"clp-key-l3": "pla_trim",
			"clp-key-l4": "prop_phase_trim",
			"clp-key-r2": "prop2_trim",
		  "clp-dim-button": "pp_interface_menu",
			"clp-prev-button": "pp_interface_menu",
    },
		eng_trim: {
		  "clp-dim-button": "trim_data_menu",
			"clp-prev-button": "trim_data_menu",
    },
		prop1_trim: {
		  "clp-dim-button": "trim_data_menu",
			"clp-prev-button": "trim_data_menu",
    },
		prop2_trim: {
		  "clp-dim-button": "trim_data_menu",
			"clp-prev-button": "trim_data_menu",
    },
		pla_trim: {
		  "clp-dim-button": "trim_data_menu",
			"clp-prev-button": "trim_data_menu",
    },
		prop_phase_trim: {
		  "clp-dim-button": "trim_data_menu",
			"clp-prev-button": "trim_data_menu",
    },
		
		/* PAC*/
		pwr_assurance_menu: {
      "clp-dim-button": "arcdu_pp_main_menu",
			"clp-key-l1": "last_pac_eng1",
			"clp-key-l4": "pac_eng1_p1",
			"clp-key-r1": "last_pac_eng2",
			"clp-key-r4": "pac_eng2_p1",
    },
		last_pac_eng1: {
      "clp-dim-button": "pwr_assurance_menu",
			"clp-prev-button": "pwr_assurance_menu",
    },
		last_pac_eng2: {
      "clp-dim-button": "pwr_assurance_menu",
			"clp-prev-button": "pwr_assurance_menu",
    },
		pac_eng1_p1: {
      "clp-dim-button": "pwr_assurance_menu",
			"clp-next-button": "pac_eng1_p2",
    },
		pac_eng1_p2: {
      "clp-dim-button": "pwr_assurance_menu",
			"clp-prev-button": "pac_eng1_p1",
    },
		pac_eng2_p1: {
      "clp-dim-button": "pwr_assurance_menu",
			"clp-next-button": "pac_eng2_p2",
    },
		pac_eng2_p2: {
      "clp-dim-button": "pwr_assurance_menu",
			"clp-prev-button": "pac_eng2_p1",
    },
		/* EMU STATUS */
		emu_status_menu: {
      "clp-dim-button": "arcdu_pp_main_menu",
			"clp-key-l3": "emu_fadec_id",
			"clp-key-l4": "emu_faults_p1",
			"clp-key-r3": "emu_pec_id",
			"clp-key-r4": "emu_memory_status",
    },
		emu_fadec_id: {
      "clp-dim-button": "emu_status_menu",
			"clp-prev-button": "emu_status_menu",
    },
		emu_faults_p1: {
      "clp-dim-button": "emu_status_menu",
			"clp-prev-button": "emu_status_menu",
			"clp-next-button": "emu_faults_p2",
    },
		emu_faults_p2: {
      "clp-dim-button": "emu_status_menu",
			"clp-prev-button": "emu_faults_p1",
    },
		emu_pec_id: {
      "clp-dim-button": "emu_status_menu",
			"clp-prev-button": "emu_status_menu",
    },
		emu_memory_status: {
      "clp-dim-button": "emu_status_menu",
			"clp-prev-button": "emu_status_menu",
    },
		
		/* Config*/
		config_menu: {
      "clp-dim-button": "arcdu_pp_main_menu",
			"clp-key-l1": "ac_id",
			"clp-key-l2": "fadec_id",
			"clp-key-l3": "pec_id",
			"clp-key-l4": "emu_id",
    },
		ac_id: {
      "clp-dim-button": "config_menu",
			"clp-prev-button": "config_menu",
    },
		fadec_id: {
      "clp-dim-button": "config_menu",
			"clp-prev-button": "config_menu",
    },
		pec_id: {
      "clp-dim-button": "config_menu",
			"clp-prev-button": "config_menu",
    },
		emu_id: {
      "clp-dim-button": "config_menu",
			"clp-prev-button": "config_menu",
    },
		
		/* OPERATIONAL DATA*/
		operat_data_menu: {
			"clp-key-l1": "ops_hrs_since",
			"clp-key-l2": "ops_hrs_eng1",
			"clp-key-l3": "ops_hrs_sience_eng1",
			"clp-key-r2": "ops_hrs_eng2",
			"clp-key-r3": "ops_hrs_sience_eng2",
      "clp-dim-button": "arcdu_pp_main_menu",
			"clp-prev-button": "arcdu_pp_main_menu",
			
    },
		ops_hrs_since: {
      "clp-dim-button": "operat_data_menu",
			"clp-prev-button": "operat_data_menu",
    },
		ops_hrs_eng1: {
      "clp-dim-button": "operat_data_menu",
			"clp-prev-button": "operat_data_menu",
    },
		ops_hrs_eng2: {
      "clp-dim-button": "operat_data_menu",
			"clp-prev-button": "operat_data_menu",
    },
		ops_hrs_sience_eng1: {
      "clp-dim-button": "operat_data_menu",
			"clp-prev-button": "operat_data_menu",
    },
		ops_hrs_sience_eng2: {
      "clp-dim-button": "operat_data_menu",
			"clp-prev-button": "operat_data_menu",
    },
		
		
		
		
		
		
		
		/* POWERPLAN FAULTS start*/
		arcdu_pp_faults: {
			"clp-key-l1": "arcdu_healt_status",
			"clp-key-l3": "arcdu_eng1_faults",
			"clp-key-l4": "arcdu_prop1_faults",
			"clp-key-r1": "arcdu_fault_summary",
			
			"clp-key-r3": "arcdu_eng2_faults",
			"clp-key-r4": "arcdu_prop2_faults",
			"clp-dim-button": "arcdu_pp_main_menu",

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
		
		
		/* TREND MONITOR */
		rend_mon_menu: {
			"clp-key-l1": "eng1_trend",
			"clp-key-l2": "eng1_spool",
			"clp-key-l3": "eng1_trend_snap1",
			"clp-key-r1": "eng2_trend",
			"clp-key-r2": "eng2_spool",
			"clp-key-r3": "eng2_trend_snap1",
      "clp-dim-button": "arcdu_pp_main_menu",	
    },
		eng1_trend: {
      "clp-dim-button": "rend_mon_menu",	
    },
		eng1_spool: {
      "clp-dim-button": "rend_mon_menu",	
    },
		eng1_trend_snap1: {
      "clp-dim-button": "rend_mon_menu",	
			"clp-next-button": "eng1_trend_snap2",
    },
		eng1_trend_snap2: {
      "clp-dim-button": "rend_mon_menu",	
			"clp-prev-button": "eng1_trend_snap1",
			"clp-next-button": "eng1_trend_snap1",
    },
		eng2_trend: {
      "clp-dim-button": "rend_mon_menu",	
    },
		eng2_spool: {
      "clp-dim-button": "rend_mon_menu",	
    },
		eng2_trend_snap1: {
      "clp-dim-button": "rend_mon_menu",
			
			"clp-next-button": "eng2_trend_snap2",
    },
		eng2_trend_snap2: {
      "clp-dim-button": "rend_mon_menu",
			"clp-prev-button": "eng2_trend_snap1",
			"clp-next-button": "eng2_trend_snap1",
    },
		
		/* OTHER SYSTEM 2 start */
    arcdu_other_sys_2: {
			"clp-key-l1": "flaps_p1",
			"clp-key-l2": "cpc_p1",
			"clp-dim-button": "arcdu_other_sys_1",
			"clp-prev-button": "arcdu_other_sys_1",
			
    },
		/* Flaps*/
		flaps_p1: {
		  "clp-dim-button": "arcdu_other_sys_2",
			"clp-prev-button": "flaps_p4",
			"clp-next-button": "flaps_p2",
    },
		flaps_p2: {
		  "clp-dim-button": "arcdu_other_sys_2",
			"clp-prev-button": "flaps_p1",
			"clp-next-button": "flaps_p3",
    },
		flaps_p3: {
		  "clp-dim-button": "arcdu_other_sys_2",
			"clp-prev-button": "flaps_p2",
			"clp-next-button": "flaps_p1",
    },
		cpc_p1: {
		  "clp-dim-button": "arcdu_other_sys_2",
			
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