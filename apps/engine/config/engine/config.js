/**
 * ENGINE DATA MODEL:
 *
 * {
 *   id: unique id for this (sub) item
 *   text: text shown in user interface
 *   data: {
 *     view: "LEFT" | "RIGHT" | "REAR",
 *     desc: "./path/to/html/file.html",
 *     unit: "./path/to/html/file.html",
 *   },
 *   nodes: [
 *     // recursive structure for children of this menu entry
 *   ]
 * }
 * show_in_menu: true,
 * show_in_menu: false,
 */
export const DATA_SET = [
  /* PROPELLER */
  {
    id: "PROPELLER",
    text: "PROPELLER",
    data: {},
		show_in_menu: true,
    nodes: [
      {
        id: "clp-prop-assy",
        text: "Propeller",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/prop_assy.html",
          unit: "./units/eng/units/prop_all.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-prop-assy",
        text: "Propeller",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/prop_assy.html",
          unit: "./units/eng/units/prop_all.html",
        },
				show_in_menu: false,
      },
      {
        id: "clp-prop-shaft-seal",
        text: "Propeller Shaft Oil Seal",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/prop_shaft_seal.html",
          unit: "./units/eng/units/prop_shaft_seal.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-prop-shaft-seal",
        text: "Propeller Shaft Oil Seal",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/prop_shaft_seal.html",
          unit: "./units/eng/units/prop_shaft_seal.html",
        },
				show_in_menu: false,
      },
      {
        id: "clp-beta-tube",
        text: "Beta Tubes",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/beta_tube.html",
          unit: "./units/eng/units/beta_tube.html",
        },
				show_in_menu: true,
      },
      {
        id: "clp-brush-block",
        text: "Brush Block & Dual Pulse Probe",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/brush_block.html",
          unit: "./units/eng/units/brush_block_all.html",
        },
				show_in_menu: true,
      },
      {
        id: "clp-prop-bal-sensor",
        text: " Propeller Balancing Monitor Sensors",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/prop_bal_sensor.html",
          unit: "./units/eng/units/prop_bal_sensor.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-prop-bal-sensor",
        text: " Propeller Balancing Monitor Sensors",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/prop_bal_sensor.html",
          unit: "./units/eng/units/prop_bal_sensor.html",
        },
				show_in_menu: false,
      },
			{
        id: "clp-prop-shaft-sl",
        text: "Propeller Shaft Bearing Sleeves",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/prop_shaft_sl.html",
          unit: "./units/eng/units/prop_shaft_sl.html",
        },
				show_in_menu: true,
      },
    ],
  },
	
  /* UNITS */
  {
    id: "UNITS",
    text: "UNITS",
    data: {},
		show_in_menu: true,
    nodes: [
  
			{
        id: "clp-fadec",
        text: "FADEC",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/fadec.html",
          unit: "./units/eng/units/fadec.html",
        },
				show_in_menu: true,
      },
      {
        id: "clp-feath-pump",
        text: "Feathering Pump",
        data: {
          view: "REAR",
          desc: "./units/eng/desc/feath_pump.html",
          unit: "./units/eng/units/feath_pump.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-ac-gen",
        text: "AC Generator",
        data: {
          view: "REAR",
          desc: "./units/eng/desc/ac_gen.html",
          unit: "./units/eng/units/ac_gen_all.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-dc-gen",
        text: "DC Starter/Generator",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/dc_gen.html",
          unit: "./units/eng/units/dc_gen_all.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-fmu",
        text: "Fuel Metering Unit (FMU)",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/fmu.html",
          unit: "./units/eng/units/fmu.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-fmu",
        text: "Fuel Metering Unit (FMU)",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/fmu.html",
          unit: "./units/eng/units/fmu.html",
        },
				show_in_menu: false,
      },
			{
        id: "clp-fuel-nozz",
        text: "Fuel Manifolds/Nozzle/Flow Divider",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/fuel_nozz.html",
          unit: "./units/eng/units/fuel_nozz_all.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-fuel-nozz",
        text: "Fuel Manifolds/Nozzle/Flow Divider",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/fuel_nozz.html",
          unit: "./units/eng/units/fuel_nozz_all.html",
        },
				show_in_menu: false,
      },
			{
        id: "clp-eng-hyd-pump",
        text: "Hydraulic Pump (EDP)",
        data: {
          view: "REAR",
          desc: "./units/hyd/desc/eng_hyd_pump.html",
          unit: "./units/hyd/units/eng_hyd_pump_all.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-ign",
        text: "Ignition Plug",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/ign_desc.html",
          unit: "./units/eng/units/ign_all.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-ign",
        text: "Ignition Plug",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/ign_desc.html",
          unit: "./units/eng/units/ign_all.html",
        },
				show_in_menu: false,
      },
			{
        id: "clp-ign-exciter",
        text: "Ignition Exciter",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/ign_desc.html",
          unit: "./units/eng/units/ign_all.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-fuel-heater",
        text: "Oil to Fuel Heat Exchanger",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/fuel_heater.html",
          unit: "./units/eng/units/fuel_heater_all.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-eng-oil-pump",
        text: "Oil Pump Assembly",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/eng_oil_pump.html",
          unit: "./units/eng/units/eng_oil_pump.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-prop-osg",
        text: "Overspeed Governor (OSG)",
        data: {
          view: "REAR",
          desc: "./units/eng/desc/prop_osg.html",
          unit: "./units/eng/units/prop_osg.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-pec",
        text: "Propeller Electronic Control Unit (PEC)",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/pec.html",
          unit: "./units/eng/units/pec.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-pec",
        text: "Propeller Electronic Control Unit (PEC)",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/pec.html",
          unit: "./units/eng/units/pec.html",
        },
				show_in_menu: false,
      },
			{
        id: "clp-pcu",
        text: "Pitch Control Unit (PCU)",
        data: {
          view: "REAR",
          desc: "./units/eng/desc/pcu.html",
          unit: "./units/eng/units/pcu.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-pma",
        text: "Permanent Magnet Alternator (PMA)",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/pma.html",
          unit: "./units/eng/units/pma_all.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-pma",
        text: "Permanent Magnet Alternator (PMA)",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/pma.html",
          unit: "./units/eng/units/pma_all.html",
        },
				show_in_menu: false,
      },
			{
        id: "clp-p22-intbleed-vlv",
        text: "P2.2 interstage Bleed Valve",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/p22_intbleed_vlv.html",
          unit: "./units/eng/units/p22_intbleed_vlv.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-p27-intbleed-vlv",
        text: "P2.7 Intercompressor Bleed−Off Valve",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/p27_intbleed_vlv.html",
          unit: "./units/eng/units/p27_intbleed_vlv.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-oil-cooler-ejector",
        text: "Oil Cooler Ejector Valve",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/oil_cooler_ejector.html",
          unit: "./units/eng/units/oil_cooler_ejector.html",
        },
				show_in_menu: true,
      },
    ],
  },
	
	/* INDICATION */
  {
    id: "INDICATION",
    text: "INDICATION",
    data: {},
		show_in_menu: true,
    nodes: [
			
			{
        id: "clp-chip-rgb",
        text: "RGB Chip Detector",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/chip_desc.html",
          unit: "./units/eng/units/chip_rgb.html",
        },
				show_in_menu: true,
      },
      {
        id: "clp-chip-ac",
        text: "AC Chip Detector",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/chip_desc.html",
          unit: "./units/eng/units/chip_ac.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-chip-tm",
        text: "TURBOMACHINE Chip Detector",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/chip_desc.html",
          unit: "./units/eng/units/chip_tm.html",
        },
				show_in_menu: true,
      },
      {
        id: "clp-mot-sensor",
        text: "Oil Temperature Sensor (MOT)",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/mot_sensor.html",
          unit: "./units/eng/units/mot_sensor.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-mot-sensor",
        text: "Oil Temperature Sensor (MOT)",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/mot_sensor.html",
          unit: "./units/eng/units/mot_sensor.html",
        },
				show_in_menu: false,
      },
			{
        id: "clp-nh-sensor",
        text: "NH Speed Sensor",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/nh_sensor.html",
          unit: "./units/eng/units/nh_sensor.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-nh-sensor",
        text: "NH Speed Sensor",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/nh_sensor.html",
          unit: "./units/eng/units/nh_sensor.html",
        },
				show_in_menu: false,
      },
			{
        id: "clp-nl-sensor",
        text: "NL Speed Sensor",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/nl_sensor.html",
          unit: "./units/eng/units/nl_sensor.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-nl-sensor",
        text: "NL Speed Sensor",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/nl_sensor.html",
          unit: "./units/eng/units/nl_sensor.html",
        },
				show_in_menu: false,
      },
			{
        id: "clp-mop-sensor",
        text: "Oil Pressure Transducer (MOP)",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/mop_sensor.html",
          unit: "./units/eng/units/mop_sensor.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-lop",
        text: "Oil Low Pressure Switch (LOP)",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/lop_sensor.html",
          unit: "./units/eng/units/lop_sensor.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-p3-transd",
        text: "P3 Transducer",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/p3_transd.html",
          unit: "./units/eng/units/p3_transd.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-p3-transd",
        text: "P3 Transducer",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/p3_transd.html",
          unit: "./units/eng/units/p3_transd.html",
        },
				show_in_menu: false,
      },
			{
        id: "clp-tq-sensor",
        text: "Torque Sensor",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/tq_sensor.html",
          unit: "./units/eng/units/tq_sensor.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-t18-temp-sensor",
        text: "T1.8 Temperature Sensor",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/t18_temp_sensor.html",
          unit: "./units/eng/units/t18_temp_sensor.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-itt-thermoc",
        text: "Immersion Thermocouple",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/itt_thermoc.html",
          unit: "./units/eng/units/itt_thermoc.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-itt-thermoc",
        text: "Immersion Thermocouple",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/itt_thermoc.html",
          unit: "./units/eng/units/itt_thermoc.html",
        },
				show_in_menu: false,
      },
			{
        id: "clp-main-oil-filter-sw",
        text: "Oil Filter Impending Bypass",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/main_oil_filter_sw.html",
          unit: "./units/eng/units/main_oil_filter_sw.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-scav-oil-filter-sw",
        text: "RGB Scavenge Oil Filter Impending Bypass",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/scav_oil_filter_sw.html",
          unit: "./units/eng/units/scav_oil_filter_sw.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-fuel-inlet-temp",
        text: "Fuel Temperature Sensor",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/fuel_inlet_temp.html",
          unit: "./units/eng/units/fuel_inlet_temp.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-fuel-lowpx-sw",
        text: "Low Fuel Pressure Switch",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/fuel_lowpx_sw.html",
          unit: "./units/eng/units/fuel_lowpx_sw.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-fuel-flowm",
        text: "Fuel Flowmeter",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/fuel_flowm.html",
          unit: "./units/eng/units/fuel_flowm.html",
        },
				show_in_menu: true,
      },
			
			{
        id: "clp-eng-int-byp-door-act",
        text: "Intake",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/eng_int_byp_door_act.html",
          unit: "./units/eng/units/eng_int_byp_door_act.html",
        },
				show_in_menu: true,
      },
			
			
			
    ],
  },
	
	/* Filter */
  {
    id: "Filter",
    text: "FILTER",
    data: {},
		show_in_menu: true,
    nodes: [
      {
        id: "clp-fuel-filter",
        text: "Fuel Filter",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/fuel_heater.html",
          unit: "./units/eng/units/fuel_filter.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-fuel-strainer",
        text: "Fuel Strainer",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/fuel_heater.html",
          unit: "./units/eng/units/fuel_strainer.html",
        },
				show_in_menu: true,
      },
      {
        id: "clp-main-oil-filter",
        text: "Main Oil Filter",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/main_oil_filter.html",
          unit: "./units/eng/units/main_oil_filter.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-scav-oil-filter",
        text: "Scavenge Oil Filter",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/scav_oil_filter.html",
          unit: "./units/eng/units/scav_oil_filter.html",
        },
				show_in_menu: true,
      },
			
    ],
  },
	
	/* EXTERNALS */
  {
    id: "EXTERNALS",
    text: "EXTERNALS",
    data: {},
		show_in_menu: true,
    nodes: [
      {
        id: "clp-eng-int-heater",
        text: "Air Intake Adapter Heater",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/eng_int_heater.html",
          unit: "./units/eng/units/eng_int_heater.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-eng-int-heater",
        text: "Air Intake Adapter Heater",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/eng_int_heater.html",
          unit: "./units/eng/units/eng_int_heater.html",
        },
				show_in_menu: false,
      },
			{
        id: "clp-eng-htcs-res",
        text: "HTCS Reservoir",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/eng_htcs_desc.html",
          unit: "./units/eng/units/eng_htcs_res.html",
        },
				show_in_menu: true,
      },
      {
        id: "clp-eng-htcs-cyl",
        text: "HTCS Cylinder",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/eng_htcs_desc.html",
          unit: "./units/eng/units/eng_htcs_cyl.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-eng-top-mount",
        text: "Forward Top Isolator",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/eng_top_mount.html",
          unit: "./units/eng/units/eng_top_mount.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-eng-top-mount",
        text: "Forward Top Isolator",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/eng_top_mount.html",
          unit: "./units/eng/units/eng_top_mount.html",
        },
				show_in_menu: false,
      },
			{
        id: "clp-eng-top-mount",
        text: "Forward Top Isolator",
        data: {
          view: "REAR",
          desc: "./units/eng/desc/eng_top_mount.html",
          unit: "./units/eng/units/eng_top_mount.html",
        },
				show_in_menu: false,
      },
			{
        id: "clp-eng-fwd-side-mount",
        text: "Forward LH ans RH Isolator",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/eng_fwd_side_mount.html",
          unit: "./units/eng/units/eng_fwd_side_mount.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-eng-fwd-side-mount",
        text: "Forward LH ans RH Isolator",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/eng_fwd_side_mount.html",
          unit: "./units/eng/units/eng_fwd_side_mount.html",
        },
				show_in_menu: false,
      },
			{
        id: "clp-eng-fwd-side-mount",
        text: "Forward LH ans RH Isolator",
        data: {
          view: "REAR",
          desc: "./units/eng/desc/eng_fwd_side_mount.html",
          unit: "./units/eng/units/eng_fwd_side_mount.html",
        },
				show_in_menu: false,
      },
			{
        id: "clp-eng-aft-side-mount",
        text: "Aft LH and RH Isolator",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/eng_aft_side_mount.html",
          unit: "./units/eng/units/eng_aft_side_mount.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-eng-aft-side-mount",
        text: "Aft LH and RH Isolator",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/eng_aft_side_mount.html",
          unit: "./units/eng/units/eng_aft_side_mount.html",
        },
				show_in_menu: false,
      },
			{
        id: "clp-oil-cooler",
        text: "Oil Cooler",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/oil_cooler.html",
          unit: "./units/eng/units/oil_cooler.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-oilc-door-act",
        text: "Oil Cooler Air Outlet Flap Actuator",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/oilc_door_act.html",
          unit: "./units/eng/units/oilc_door_act.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-eng-exh-nozz",
        text: "Exhaust Nozzle",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/eng_exh_nozz.html",
          unit: "./units/eng/units/eng_exh_nozz.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-eng-exh-nozz",
        text: "Exhaust Nozzle",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/eng_exh_nozz.html",
          unit: "./units/eng/units/eng_exh_nozz.html",
        },
				show_in_menu: false,
      },
			{
        id: "clp-p3-cvlv",
        text: "P2.7/P3 Check Valve-P2.7 Duct",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/p3_cvlv.html",
          unit: "./units/eng/units/p3_cvlv_all.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-p3-duct",
        text: "P3.0 HP to HPSOV Duct",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/p3_duct.html",
          unit: "./units/eng/units/p3_duct.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-p22-duct",
        text: "P2.2 LP to LPSOV Duct",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/p22_duct.html",
          unit: "./units/eng/units/p22_duct.html",
        },
				show_in_menu: true,
      },
    ],
  },
	
	/* Borescope */
  {
    id: "Borescope",
    text: "BORESCOPE INSP. PORTS",
    data: {},
		show_in_menu: true,
    nodes: [
			{
        id: "clp-cover-layshaft",
        text: "Layshaft Cover",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/cover_layshaft.html",
          unit: "./units/eng/units/cover_layshaft.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-cover-rgb",
        text: "RGB Cover",
        data: {
          view: "REAR",
          desc: "./units/eng/desc/cover_rgb.html",
          unit: "./units/eng/units/cover_rgb.html",
        },
				show_in_menu: true,
      },
		/**** offen
			{
        id: "clp-cover-front-inlet-case",
        text: "Front Inlet Case",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/cover_front_inlet_case.html",
          unit: "./units/eng/units/cover_front_inlet_case.html",
        },
      },
			
			****/
			{
        id: "clp-cover_comp_wash",
        text: "Plug, Compressor Wash",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/cover_comp_wash.html",
          unit: "./units/eng/units/cover_comp_wash.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-cover_inlet_case_cover",
        text: "Inlet Case Insp. Port",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/cover_inlet_case_cover.html",
          unit: "./units/eng/units/cover_inlet_case_cover.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-cover_lp_comp_case",
        text: "LP Compressor Case",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/cover_lp_comp_case.html",
          unit: "./units/eng/units/cover_lp_comp_case.html",
        },
				show_in_menu: true,
      },
			
			{
        id: "clp-cover_hp_impeller_port",
        text: "HP Impeller Port",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/cover_hp_impeller_port.html",
          unit: "./units/eng/units/cover_hp_impeller_port.html",
        },
				show_in_menu: true,
      },
      {
        id: "clp-gas-gen-case-port",
        text: "Gas Generator Case Port",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/cover_gas_gen_case.html",
          unit: "./units/eng/units/cover_gas_gen_case.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-gas-gen-case-port",
        text: "Gas Generator Case Port",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/cover_gas_gen_case.html",
          unit: "./units/eng/units/cover_gas_gen_case.html",
        },
				show_in_menu: false,
      },
			{
        id: "clp-turb-supp-case-port",
        text: "Turbine Support Case",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/cover_turb_supp_case.html",
          unit: "./units/eng/units/cover_turb_supp_case.html",
        },
				show_in_menu: true,
      },
			{
        id: "clp-turb-supp-case-port",
        text: "Turbine Support Case",
        data: {
          view: "RIGHT",
          desc: "./units/eng/desc/cover_turb_supp_case.html",
          unit: "./units/eng/units/cover_turb_supp_case.html",
        },
				show_in_menu: false,
      },
      {
        id: "clp-2ndsstageport",
        text: "2ND Stage PT Blades",
        data: {
          view: "LEFT",
          desc: "./units/eng/desc/cover_2nd_stage.html",
          unit: "./units/eng/units/cover_2nd_stage.html",
        },
				show_in_menu: true,
      },
    ],
  },
	
	
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
