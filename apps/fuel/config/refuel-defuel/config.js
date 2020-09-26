/**
 * REFUEL/DEFUEL DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   text: text to be used if item is shown in menu,
 *   unit: relative path to unit file on the right,
 *   desc: relative path to desc file on the left,
 *   info: {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only)
 *   },
 *   show_in_menu: flag if this item is in menu or only in SVG,
 * }
 */
export const DATA_SET = [
  {
    id: "clp-transfer-line",
    text: "Fuel Transfer Lines",
    unit: "./units/fuel/units/line_transfere.html",
    desc: "./units/fuel/desc/line_transfere.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
 {
    id: "clp-eng-cont-panel",
    text: "Fuel Control-Panel",
    unit: "./units/cockpit/units/eng_cont_panel.html",
    desc: "./units/fuel/desc/eng_fuel_cont_panel.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-surge-tank",
    text: "Surge Bays",
    unit: "./units/fuel/units/surge_tank.html",
    desc: "./units/fuel/desc/surge_tank.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-flapper-cvlv",
    text: "Flapper Check Valves",
    unit: "./units/fuel/units/fuel_flapper_cvlv.html",
    desc: "./units/fuel/desc/fuel_flapper_cvlv.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-ref-def-dapt",
    text: "Refuel / Defuel Adapter",
    unit: "./units/fuel/units/fuel_ref_def_dapt.html",
    desc: "./units/fuel/desc/fuel_ref_def_dapt.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-rd-panel",
    text: "Refuel / Defuel Control Panel",
    unit: "./units/fuel/units/fuel_rd_panel.html",
    desc: "./units/fuel/desc/fuel_rd_panel.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-waterdrainvlv",
    text: "Water Drain Valve",
    unit: "./units/fuel/units/fuel_waterdrainvlv.html",
    desc: "./units/fuel/desc/fuel_waterdrainvlv.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-high-level-cont-unit",
    text: "High Level Control Unit",
    unit: "./units/uf/units/high_level_cont_unit.html",
    desc: "./units/uf/desc/high_level_cont_unit.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-qty-comp",
    text: "Fuel Quantity Computer",
    unit: "./units/uf/units/fuel_qty_comp.html",
    desc: "./units/uf/desc/fuel_qty_comp.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-ref-def-sov",
    text: "Refuel / Defuel Shutoff Valve",
    unit: "./units/fuel/units/fuel_ref_def_sov.html",
    desc: "./units/fuel/desc/fuel_ref_def_sov.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-cl-fuel-low",
    text: "TANK FUEL LOW Caution Lights",
    unit: "./units/cockpit/units/cawlp.html",
    desc: "./units/fuel/desc/cl_tank_fuel_low.html",
    info: {},
    access: {},
    show_in_menu: false,
  },
  {
    id: "clp-fuel-ref-def-trans-sov",
    text: "Refuel / Defuel / Transfer Shut-off Valve",
    unit: "./units/fuel/units/fuel_ref_def_trans_sov.html",
    desc: "./units/fuel/desc/fuel_ref_def_trans_sov.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-quantity-probe",
    text: "Fuel Quantity Probes",
    unit: "./units/fuel/units/fuel_quantity_probe.html",
    desc: "./units/fuel/desc/fuel_quantity_probe.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-dipstick",
    text: "Magnetic Dipstick",
    unit: "./units/fuel/units/fuel_dipstick.html",
    desc: "./units/fuel/desc/fuel_dipstick.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-temp-sens",
    text: "Temperature Sensor",
    unit: "./units/fuel/units/fuel_temp_sens.html",
    desc: "./units/fuel/desc/fuel_temp_sens.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-vent-float-vlv",
    text: "Vent Float Valves",
    unit: "./units/fuel/units/fuel_vent_float_vlv.html",
    desc: "./units/fuel/desc/fuel_vent_float_vlv.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-levelcont-sov",
    text: "Level Control Shut-off Valve",
    unit: "./units/fuel/units/fuel_levelcont_sov.html",
    desc: "./units/fuel/desc/fuel_levelcont_sov.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-aux-pump-px-sw",
    text: "Aux. Pump Pressure Switch",
    unit: "./units/fuel/units/fuel_aux_pump_px_sw.html",
    desc: "./units/fuel/desc/fuel_aux_pump_px_sw.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-levelcont-sol-vlv",
    text: "Level Control Solenoid",
    unit: "./units/fuel/units/fuel_levelcont_sol_vlv.html",
    desc: "./units/fuel/desc/fuel_levelcont_sol_vlv.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-noflow-px-sw",
    text: "No-Flow Pressure Switch",
    unit: "./units/fuel/units/fuel_noflow_px_sw.html",
    desc: "./units/fuel/desc/fuel_noflow_px_sw.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-coll-bay",
    text: "Collector Bays",
    unit: "./units/fuel/units/coll_bay.html",
    desc: "./units/fuel/desc/coll_bay.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-line-vent",
    text: "Vent Line",
    unit: "./units/fuel/units/line_vent.html",
    desc: "./units/fuel/desc/line_vent.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-ref-vent-vlv",
    text: "Refuel Vent Valves",
    unit: "./units/fuel/units/fuel_ref_vent_vlv.html",
    desc: "./units/fuel/desc/fuel_ref_vent_vlv.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-prim-eject-pump",
    text: "Primary Ejector Pump",
    unit: "./units/fuel/units/fuel_prim_eject_pump.html",
    desc: "./units/fuel/desc/fuel_prim_eject_pump.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-aux-pump",
    text: "Auxiliary Pump",
    unit: "./units/fuel/units/fuel_aux_pump.html",
    desc: "./units/fuel/desc/fuel_aux_pump.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-naca-vent",
    text: "NACA Vents",
    unit: "./units/fuel/units/fuel_naca_vent.html",
    desc: "./units/fuel/desc/fuel_naca_vent.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-gravity-refill-cap",
    text: "Gravity Refill Cap",
    unit: "./units/fuel/units/fuel_gravity_refill_cap.html",
    desc: "./units/fuel/desc/fuel_gravity_refill_cap.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
];

/**
 * REFUEL/DEFUEL SVG FILE:
 *
 * Path to Refuel/Defuel's interactive SVG file.
 */
export const SVG_PATH = "./apps/fuel/config/refuel-defuel/pic/refuel-defuel.svg";

/**
 * REFUEL/DEFUEL INTRO FILE:
 *
 * Path to Refuel/Defuel's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/fuel/config/refuel-defuel/desc/intro.html";
