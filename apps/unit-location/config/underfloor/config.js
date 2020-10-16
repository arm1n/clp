/**
 * UNDERFLOOR DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   text: text to be used if item is shown in menu,
 *   unit: relative path to unit file on the right,
 *   desc: relative path to desc file on the left,
 *   info: {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" (popup only)
 *   },
 *   show_in_menu: flag if this item is in menu or only in SVG,
 * }
 */
export const DATA_SET = [
  {
    id: "clp-ac-gcu",
    text: "AC Genrator Control Units",
    unit: "./units/uf/units/ac_gcu.html",
    desc: "./units/uf/desc/ac_gcu.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-ancu",
    text: "Active Noise Control Unit (ANCU)",
    unit: "./units/uf/units/ancu.html",
    desc: "./units/uf/desc/ancu.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-anti-skid-unit",
    text: "Anti - Skid Control Unit",
    unit: "./units/uf/units/anti_skid_unit.html",
    desc: "./units/uf/desc/anti_skid_unit.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-apu-gcu",
    text: "APU DC Generator Control Unit",
    unit: "./units/uf/units/apu_gcu.html",
    desc: "./units/uf/desc/apu_gcu.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-atc-units",
    text: "ATC Receiver",
    unit: "./units/antenna/units/atc_units.html",
    desc: "./units/antenna/desc/atc_units.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-ahru",
    text: "Att. and Heading Reference Unit (AHRU)",
    unit: "./units/uf/units/ahru.html",
    desc: "./units/uf/desc/ahru.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	
	{
    id: "clp-cargo-fire-unit",
    text: "Cargo Electronic Units",
    unit: "./units/uf/units/cargo_elec_unit.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-diplexer",
    text: "Diplexer",
    unit: "./units/uf/units/diplexer.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-ecsecu",
    text: "Electronic Control Unviroment Unit (ECU)",
    unit: "./units/uf/units/ecsecu.html",
    desc: "./units/uf/desc/ecsecu.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-feath-pump-cont",
    text: "Feathering Pump Contactor",
    unit: "./units/uf/units/feath_pump_cont.html",
    desc: "./units/uf/desc/feath_pump_cont.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-flap-cont-unit",
    text: "Flap Control Unit (FCU)",
    unit: "./units/uf/units/flap_cont_unit.html",
    desc: "./units/uf/desc/flap_cont_unit.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-fpiu",
    text: "Flap Position Indication Unit (FPIU)",
    unit: "./units/uf/units/fpiu.html",
    desc: "./units/uf/desc/fpiu.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-fcecu",
    text: "Flt. Cont. Electronic Cont. Unit (FCECU)",
    unit: "./units/uf/units/fcecu.html",
    desc: "./units/uf/desc/fcecu.html",
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
    id: "clp-hgs-comp",
    text: "Head Up Display Computer (HGS)",
    unit: "./units/uf/units/hgs_comp.html",
    desc: "./units/uf/desc/hgs_comp.html",
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
    id: "clp-imp-switch",
    text: "Impact Switch",
    unit: "./units/uf/units/imp_switch.html",
    desc: "./units/uf/desc/imp_switch.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-modem",
    text: "Modem (Resource Tracking System) ",
    unit: "./units/uf/units/modem.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-nvs-cb-box",
    text: "NVS System Circuit Breaker Box",
    unit: "./units/uf/units/nvs_cb_box.html",
    desc: "./units/uf/desc/nvs_cb_box.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-prop-isol-cont",
    text: "Prop. Isolator Contactors",
    unit: "./units/uf/units/prop_isol_cont.html",
    desc: "./units/uf/desc/prop_isol_cont.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-ptu-relay",
    text: "PTU Relay Box",
    unit: "./units/ele/units/relay_ptu.html",
    desc: "./units/ele/desc/relay_ptu.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-rad-alt-units",
    text: "Radio Altimeter Transmitter-Receiver",
    unit: "./units/antenna/units/rad_alt_units.html",
    desc: "./units/antenna/desc/rad_alt_units.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-relay-oil-px",
    text: "Relay ENG #2 Main Oil Px",
    unit: "./units/ele/units/relay_oil_px.html",
    desc: "./units/ele/desc/relay_oil_px.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-rjb-1",
    text: "Relay Junction Box 3",
    unit: "./units/uf/units/rjb.html",
    desc: "./units/uf/desc/rjb.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-rjb-2",
    text: "Relay Junction Box 2",
    unit: "./units/uf/units/rjb.html",
    desc: "./units/uf/desc/rjb.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-rjb-3",
    text: "Relay Junction Box 3",
    unit: "./units/uf/units/rjb.html",
    desc: "./units/uf/desc/rjb.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-satphone-transc",
    text: "Satphone Transceiver (Resource Tracking System) ",
    unit: "./units/uf/units/satphone_transc.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-tcas-units",
    text: "TCAS Processor",
    unit: "./units/antenna/units/tcas_units.html",
    desc: "./units/antenna/desc/tcas_units.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-tmcu",
    text: "Timer Monitor Control Unit (TMCU)",
    unit: "./units/uf/units/tmcu.html",
    desc: "./units/uf/desc/tmcu.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-tx-filter",
    text: "TX Filter (Resource Tracking System) ",
    unit: "./units/uf/units/tx_filter.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-vhf-com3",
    text: "VHF COM #3 Transceiver",
    unit: "./units/uf/units/vhf_com3.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-vhf3",
    text: "VHF3 22D Comm Transceiver ",
    unit: "./units/uf/units/vhf3_22d.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	
	/**
 * :
 
 */

	
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
];

/**
 * UNDERFLOOR SVG FILE:
 *
 * Path to Underfloor's interactive SVG file.
 */
export const SVG_PATH = "./apps/unit-location/config/underfloor/pic/underfloor.svg";

/**
 * UNDERFLOOR INTRO FILE:
 *
 * Path to Underfloor's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/unit-location/config/underfloor/desc/intro.html";
