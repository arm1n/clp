/**
 * APU DATA MODEL:
 *
 * {
 *   id: unique id for this (sub) item
 *   text: uext shown in user interface
 *   data: {
 *     view: "LEFT" | "RIGHT" | "TOP",
 *     desc: "./path/to/html/file.html",
 *     unit: "./path/to/html/file.html",
 *   },
 *   nodes: [
 *     // recursive structure for children of this menu entry
 *   ]
 * }
 */
export const DATA_SET = [
  
  /* UNITS */
  {
    id: "UNITS",
    text: "UNITS",
    data: {},
    nodes: [
			{
        id: "clp-apu-bl-vlv",
        text: "Bleed Valve/Bleed Duct",
        data: {
          view: "LEFT",
          desc: "./units/bleed/desc/apu_bl_vlv.html",
          unit: "./units/bleed/units/apu_bl_vlv.html",
        },
      },
			{
        id: "clp-apu-comb-drain-vlv",
        text: "Combustion Chamber Drain VLV",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_comb_drain_vlv.html",
          unit: "./units/apu/units/apu_comb_drain_vlv.html",
        },
      },
			{
        id: "clp-apu-dmm",
        text: "Data Memory Module (DMM)",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_dmm.html",
          unit: "./units/apu/units/apu_dmm.html",
        },
      },
			{
        id: "clp-apu-gen",
        text: "APU Generator",
        data: {
          view: "TOP",
          desc: "./units/apu/desc/apu_gen.html",
          unit: "./units/apu/units/apu_gen.html",
        },
      },
			{
        id: "clp-apu-deprime-svlv",
        text: "Deprime Valve",
        data: {
          view: "RIGHT",
          desc: "./units/apu/desc/apu_deprime_svlv.html",
          unit: "./units/apu/units/apu_deprime_svlv.html",
        },
      },
			{
        id: "clp-apu-start-vlv",
        text: "Fuel Solenoid Valve (Start)",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_mainf_vlv.html",
          unit: "./units/apu/units/apu_mainf_vlv.html",
        },
      },
			/* apu start vlv */
			{
        id: "clp-apu_mainf_vlv",
        text: "Fuel Solenoid Valve (Main)",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_mainf_vlv.html",
          unit: "./units/apu/units/apu_mainf_vlv.html",
        },
      },
			{
        id: "clp-apu-start-fuel-cvlv",
        text: "Start Fuel Check Valve",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_start_fuel_cvlv.html",
          unit: "./units/apu/units/apu_start_fuel_cvlv.html",
        },
      },
			
			{
        id: "clp-apu_flow_div",
        text: "Flow Divider",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_flow_div.html",
          unit: "./units/apu/units/apu_flow_div.html",
        },
      },
			
			{
        id: "apu_start_vlv",
        text: "Start Fuel Solenoid Valve",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_start_vlv.html",
          unit: "./units/apu/units/apu_start_vlv.html",
        },
      },
			
			
			/* apu start vlv */
			{
        id: "clp-apu-fuel-cont-unit",
        text: "Fuel Control Unit",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_fuel_cont_unit.html",
          unit: "./units/apu/units/apu_fuel_cont_unit_all.html",
        },
      },
			{
        id: "clp-apu-fuel-filter",
        text: "Fuel Filter Element / Assembly",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_fuel_filter_all.html",
          unit: "./units/apu/units/apu_fuel_filter_all.html",
        },
      },
			{
        id: "clp-apu-start-fuel-nozz",
        text: "Fuel Nozzles / Manifold (Start)",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_start_fuel_nozz_all.html",
          unit: "./units/apu/units/apu_start_fuel_nozz_all.html",
        },
      },
			{
        id: "clp-apu-main-fuel-nozz",
        text: "Fuel Nozzles / Manifold (Main)",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_main_fuel_nozz_all.html",
          unit: "./units/apu/units/apu_main_fuel_nozz_all.html",
        },
      },
			
			
			{
        id: "clp-apu-igniter-plug",
        text: "Ignitor Cables / Plugs",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_igniter_plug.html",
          unit: "./units/apu/units/apu_igniter_plug.html",
        },
      },
			{
        id: "clp-apu-exciter-box",
        text: "Ignition Exciter",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_exciter_box.html",
          unit: "./units/apu/units/apu_exciter_box.html",
        },
      },
			{
        id: "clp-apu-oil-magn-plug",
        text: "Magnetic Drain Plug",
        data: {
          view: "TOP",
          desc: "./units/apu/desc/apu_oil_magn_plug.html",
          unit: "./units/apu/units/apu_oil_magn_plug.html",
        },
      },
			{
        id: "clp-apu-oil-cooler",
        text: "Oil Cooler",
        data: {
          view: "RIGHT",
          desc: "./units/apu/desc/apu_oil_cooler.html",
          unit: "./units/apu/units/apu_oil_cooler.html",
        },
      },
			{
        id: "clp-apu-oil-drain-plug",
        text: "Oil Drain Plug",
        data: {
          view: "RIGHT",
          desc: "./units/apu/desc/apu_oil_drain_plug.html",
          unit: "./units/apu/units/apu_oil_drain_plug.html",
        },
      },
			{
        id: "clp-apu-oil-filter",
        text: "Oil Filter / Bypass Valve",
        data: {
          view: "TOP",
          desc: "./units/apu/desc/apu_oil_filter_all.html",
          unit: "./units/apu/units/apu_oil_filter_all.html",
        },
      },
			
			
			
		],
  },
  /* INDICATIONS */
  {
    id: "INDICATIONS",
    text: "INDICATIONS",
    data: {},
    nodes: [
			{
        id: "clp-apu-amb-px-sensor",
        text: "Ambient Pressure Sensor",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_amb_px_sensor.html",
          unit: "./units/apu/units/apu_amb_px_sensor.html",
        },
      },
			{
        id: "clp-apu-highoil-temp-sw",
        text: "High Oil Temperature Switch",
        data: {
          view: "TOP",
          desc: "./units/apu/desc/apu_highoil_temp_sw.html",
          unit: "./units/apu/units/apu_highoil_temp_sw.html",
        },
      },
			{
        id: "clp-apu-lowoil-px-sw",
        text: "Low Oil Pressure Switch",
        data: {
          view: "TOP",
          desc: "./units/apu/desc/apu_lowoil_px_sw.html",
          unit: "./units/apu/units/apu_lowoil_px_sw.html",
        },
      },
			
			
			{
        id: "clp-apu-speed-sensor",
        text: "Speed Sensor",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_speed_sensor.html",
          unit: "./units/apu/units/apu_speed_sensor.html",
        },
      },
			{
        id: "clp-apu-thermo-couple",
        text: "Thermocouple",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_thermo_couple.html",
          unit: "./units/apu/units/apu_thermo_couple.html",
        },
      },
			{
        id: "clp-apu-wiring",
        text: "Wiring",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_wiring.html",
          unit: "./units/apu/units/apu_wiring.html",
        },
      },
			
			
			
		],
  },
  /* EXTERNALS */
  {
    id: "EXTERNALS",
    text: "EXTERNALS",
    data: {},
    nodes: [
			{
        id: "clp-info-apu-drain",
        text: "Drain Mast",
        data: {
          view: "RIGHT",
          desc: "./units/apu/desc/info_apu_drain.html",
          unit: "./units/apu/units/apu_drain_mast.html",
        },
      },
			{
        id: "clp-apu-access-door",
        text: "Access Doors",
        data: {
          view: "RIGHT",
          desc: "./units/access/desc/apu_access_doors.html",
          unit: "./units/access/units/apu_access_doors.html",
        },
      },
			{
        id: "clp-apu-cont-panel",
        text: "Apu Control Panel",
        data: {
          view: "LEFT",
          desc: "./units/cockpit/desc/apu_cont_panel.html",
          unit: "./units/cockpit/units/apu_cont_panel.html",
        },
      },
			{
        id: "clp-apu-exhaust",
        text: "Exhaust",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_exhaust_all.html",
          unit: "./units/apu/units/apu_exhaust_all.html",
        },
      },
			{
        id: "clp-apu-fadec",
        text: "Fadec",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_fadec.html",
          unit: "./units/apu/units/apu_fadec.html",
        },
      },
			{
        id: "clp-apu-gb-cooling-duct",
        text: "Gearbox Cooling Duct",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_gb_cooling_duct.html",
          unit: "./units/apu/units/apu_gb_cooling_duct.html",
        },
      },
			{
        id: "clp-apu-inlet-screen",
        text: "Inlet Louvered Cover",
        data: {
          view: "LEFT",
          desc: "./units/access/desc/apu_louvered_cover.html",
          unit: "./units/access/units/apu_louvered_cover.html",
        },
      },
			{
        id: "clp-apu-inlet-screen_assy",
        text: "Inlet Screen assy",
        data: {
          view: "LEFT",
          desc: "./units/apu/desc/apu_inlet_screen_assy.html",
          unit: "./units/apu/units/apu_inlet_screen_assy.html",
        },
      },
			{
        id: "clp-apu-aft-mount",
        text: "Mount Aft",
        data: {
          view: "RIGHT",
          desc: "./units/apu/desc/apu_aft_mount.html",
          unit: "./units/apu/units/apu_aft_mount.html",
        },
      },
			{
        id: "clp-apu-side-mount",
        text: "Mount Side",
        data: {
          view: "RIGHT",
          desc: "./units/apu/desc/apu_side_mount.html",
          unit: "./units/apu/units/apu_side_mount.html",
        },
      },
			{
        id: "clp-apu-relay-box",
        text: "APU Relay Box",
        data: {
          view: "RIGHT",
          desc: "./units/ele/desc/apu_relay_box.html",
          unit: "./units/ele/units/apu_relay_box.html",
        },
      },
			{
        id: "clp-apu-fire-det",
        text: "Advanced Pneumatic Det. (APD)",
        data: {
          view: "RIGHT",
          desc: "./units/fire/desc/apu_pneu_det.html",
          unit: "./units/fire/units/apu_pneu_det.html",
        },
      },
			
			
			
			
		],
  },
];

/**
 * APU SVG FROM LEFT FILE:
 *
 * Path to Apu's interactive SVG file from left perspective.
 */
export const SVG_PATH_FROM_LEFT = "./apps/engine/config/apu/pic/apu_from_left.svg";

/**
 * APU SVG FROM RIGHT FILE:
 *
 * Path to Apu's interactive SVG file from right perspective.
 */
export const SVG_PATH_FROM_RIGHT = "./apps/engine/config/apu/pic/apu_from_right.svg";

/**
 * APU SVG FROM REAR FILE:
 *
 * Path to Apu's interactive SVG file from rear perspective.
 */
export const SVG_FROM_TOP_PATH = "./apps/engine/config/apu/pic/apu_from_top.svg";

/**
 * APU INTRO FILE:
 *
 * Path to Apu's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/engine/config/apu/desc/intro.html";
