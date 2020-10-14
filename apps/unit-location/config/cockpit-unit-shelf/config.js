/**
 * COCKPIT UNIT SHELF DATA MODEL:
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
 *     size: "size-1" | "size-2" | "size-3" | "size-4" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" | "size-4" (popup only)
 *   },
 *   show_in_menu: flag if this item is in menu or only in SVG,
 * }
 */
export const DATA_SET = [
  {
    id: "clp-adv-cont-unit",
    text: "Advisory Control Unit (ACU)",
    unit: "./units/cockpit/units/adv_cont_unit.html",
    desc: "./units/cockpit/desc/adv_cont_unit.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-adc",
    text: "Air Data Computer (ADC)",
    unit: "./units/cockpit/units/adc.html",
    desc: "./units/cockpit/desc/adc.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-dtu",
    text: "Data Transfer Unit (DTU) − Universal",
    unit: "./units/cockpit/units/dtu.html",
    desc: "./units/cockpit/desc/dtu.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-dc-gcu",
    text: "Dc Generator Control Units (GCU)",
    unit: "./units/cockpit/units/dc_gcu.html",
    desc: "./units/cockpit/desc/dc_gcu.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-epcu",
    text: "Electrical Power Control Unit (EPCU)",
    unit: "./units/cockpit/units/epcu.html",
    desc: "./units/cockpit/desc/epcu.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-eciu",
    text: "Engine Cockpit Interface Unit (ECIU)",
    unit: "./units/cockpit/units/eciu.html",
    desc: "./units/cockpit/desc/eciu.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-emu",
    text: "Engine Monitoring Unit (EMU)",
    unit: "./units/cockpit/units/emu.html",
    desc: "./units/cockpit/desc/emu.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  
  
  {
    id: "clp-rectif-assy",
    text: "Rectifier Assembly",
    unit: "./units/cockpit/units/rectif_assy.html",
    desc: "./units/cockpit/desc/rectif_assy.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  
	{
    id: "clp-conn-1",
    text: "Config Connector Shelf RH",
    unit: "./units/cockpit/units/config_conn_rh.html",
    desc: "./units/cockpit/desc/config_conn1.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-conn-2",
    text: "Config Connector Shelf RH1",
    unit: "./units/cockpit/units/config_conn_lh.html",
    desc: "./units/cockpit/desc/config_conn2.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-conn-3",
    text: "Config Connector Shelf RH2",
    unit: "./units/cockpit/units/config_conn_lh.html",
    desc: "./units/cockpit/desc/config_conn3.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-conn-4",
    text: "Config Connector Shelf RH4",
    unit: "./units/cockpit/units/config_conn_lh.html",
    desc: "./units/cockpit/desc/config_conn4.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
];

/**
 * COCKPIT UNIT SHELF SVG FILE:
 *
 * Path to Cockpit Unit Shelf's interactive SVG file.
 */
export const SVG_PATH = "./apps/unit-location/config/cockpit-unit-shelf/pic/cockpit-unit-shelf.svg";

/**
 * COCKPIT UNIT SHELF INTRO FILE:
 *
 * Path to Cockpit Unit Shelf's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/unit-location/config/cockpit-unit-shelf/desc/intro.html";
