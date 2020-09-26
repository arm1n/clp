/**
 * WARDROBE AVIONIC RACK DATA MODEL:
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
    id: "clp-adf-units",
    text: "ADF Antenna / Receiver",
    unit: "./units/antenna/units/adf_units.html",
    desc: "./units/antenna/desc/adf_units.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-anti-ice-cont",
    text: "Anti−Ice Controller (AIC)",
    unit: "./units/wd/units/anti_ice_cont.html",
    desc: "./units/wd/desc/anti_ice_cont.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-cabin-px-cont-all",
    text: "Cabin Pressure Controller",
    unit: "./units/wd/units/cabin_px_cont.html",
    desc: "./units/wd/desc/cabin_px_cont.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-relaybox-3351-k1-k2",
    text: "Circuit Breaker Panel Assembly",
    unit: "./units/ele/units/relay_3351_k1_k2.html",
    desc: "./units/ele/desc/relay_3351_k1_k2.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-dpas",
    text: "Digital Pass. Announ. System (DPAS)",
    unit: "./units/wd/units/dpas.html",
    desc: "./units/wd/desc/dpas.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-dimmer-cont-assy",
    text: "Dimmer Control Assembly",
    unit: "./units/wd/units/dimmer_cont_assy.html",
    desc: "./units/wd/desc/dimmer_cont_assy.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-dme-units",
    text: "DME Antenna / Transceiver",
    unit: "./units/antenna/units/dme_units.html",
    desc: "./units/antenna/desc/dme_units.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-fire-cont-amp",
    text: "Fire Control Amplifier",
    unit: "./units/wd/units/fire_cont_amp.html",
    desc: "./units/wd/desc/fire_cont_amp.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-ifc-fgm",
    text: "Flight Guidance Module (FGM)",
    unit: "./units/wd/units/ifc_fgm.html",
    desc: "./units/wd/desc/ifc_fgm.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-fscu",
    text: "Flight Signal Conditioning Unit (FSCU)",
    unit: "./units/wd/units/fscu.html",
    desc: "./units/wd/desc/fscu.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-relaybox-fuel",
    text: "Fuel Transfer Panel Relay",
    unit: "./units/ele/units/fuel_transfer_panel.html",
    desc: "./units/ele/desc/fuel_transfer_panel.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-gs-splitter",
    text: "Glide Slope Splitter",
    unit: "./units/wd/units/gs_splitter.html",
    desc: "./units/wd/desc/gs_splitter.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-egpws",
    text: "GPWS or EGPWS Computer",
    unit: "./units/wd/units/egpws.html",
    desc: "./units/wd/desc/egpws_all.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-ifc-iom",
    text: "Input/Output Module (IOM)",
    unit: "./units/wd/units/ifc_iom.html",
    desc: "./units/wd/desc/ifc_iom.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-ifc-iop",
    text: "Input/Output Processor Module (IOP)",
    unit: "./units/wd/units/ifc_iop.html",
    desc: "./units/wd/desc/ifc_iop.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-lt-dimming-supply",
    text: "Light Dimming Power Supply",
    unit: "./units/wd/units/lt_dimming_supply.html",
    desc: "./units/wd/desc/lt_dimming_supply.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-maint-panel",
    text: "Maintenance Panel",
    unit: "./units/wd/units/maint_panel.html",
    desc: "./units/wd/desc/maint_panel.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-pass-add-amp",
    text: "Passenger Address Amplifier",
    unit: "./units/wd/units/pass_add_amp.html",
    desc: "./units/wd/desc/pass_add_amp.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-ifc-power-module",
    text: "Power Supply Module",
    unit: "./units/wd/units/ifc_psm.html",
    desc: "./units/wd/desc/ifc_psm.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-pseu",
    text: "Proximity Sensor Electronic−Unit (PSEU)",
    unit: "./units/wd/units/pseu.html",
    desc: "./units/wd/desc/pseu.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-relay-panel-assy",
    text: "Relay Panel",
    unit: "./units/ele/units/wd_relay_panel.html",
    desc: "./units/ele/desc/wd_relay_panel.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-relaybox-panel",
    text: "RELAY Rack Electrical Equipment",
    unit: "./units/ele/units/relay_rack.html",
    desc: "./units/ele/desc/relay_rack.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-rcau",
    text: "Remote Control Audio Unit (RCAU)",
    unit: "./units/wd/units/rcau.html",
    desc: "./units/wd/desc/rcau.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-ifc-spm",
    text: "Stall Protection Module (SPM)",
    unit: "./units/wd/units/ifc_spm.html",
    desc: "./units/wd/desc/ifc_spm.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-tmu",
    text: "Timer and Monitor Unit (TMU)",
    unit: "./units/wd/units/tmu.html",
    desc: "./units/wd/desc/tmu.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-vhf-com-units",
    text: "VHF Antenna / Transceiver",
    unit: "./units/antenna/units/vhf_com_units.html",
    desc: "./units/antenna/desc/vhf_com_units.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-vhf-nav-resceiver",
    text: "VHF NAV Receiver",
    unit: "./units/antenna/units/vhf_nav_resc.html",
    desc: "./units/antenna/desc/vhf_nav_resc.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  
];

/**
 * WARDROBE AVIONIC RACK SVG FILE:
 *
 * Path to Wardrobe Avionic Rack's interactive SVG file.
 */
export const SVG_PATH =
  "./apps/unit-location/config/wardrobe-avionic-rack/pic/wardrobe-avionic-rack.svg";

/**
 * WARDROBE AVIONIC RACK INTRO FILE:
 *
 * Path to Wardrobe Avionic Rack's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/unit-location/config/wardrobe-avionic-rack/desc/intro.html";
