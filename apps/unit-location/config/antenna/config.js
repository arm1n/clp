/**
 * ANTENNA DATA MODEL:
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
    id: "clp-adf",
    text: "ADF",
    unit: "./units/antenna/units/adf_units.html",
    desc: "./units/antenna/desc/adf_units.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-atc",
    text: "ATC",
    unit: "./units/antenna/units/atc_units.html",
    desc: "/units/antenna/desc/atc_units.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-dme",
    text: "DME",
    unit: "./units/antenna/units/dme_units.html",
    desc: "./units/antenna/desc/dme_units.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-elt",
    text: "ELT",
    unit: "./units/antenna/units/elt_units.html",
    desc: "./units/antenna/desc/elt_units.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-gps",
    text: "GPS",
    unit: "./units/antenna/units/gps_units.html",
    desc: "./units/antenna/desc/gps_units.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-gs",
    text: "GS",
    unit: "./units/antenna/units/glideslope_units.html",
    desc: "./units/antenna/desc/glideslope_units.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
 
  {
    id: "clp-hf",
    text: "HF",
    unit: "./units/antenna/units/hf_antenna.html",
    desc: "./units/antenna/desc/hf_antenna.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-mrk",
    text: "MRK",
    unit: "./units/antenna/units/marker_units.html",
    desc: "./units/antenna/desc/marker_units.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-rad-alt",
    text: "RAD ALT",
    unit: "./units/antenna/units/rad_alt_units.html",
    desc: "./units/antenna/desc/rad_alt_units.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-tcas",
    text: "TCAS",
    unit: "./units/antenna/units/tcas_units.html",
    desc: "./units/antenna/desc/tcas_units.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-vhf-com",
    text: "VHF",
    unit: "./units/antenna/units/vhf_com_units.html",
    desc: "./units/antenna/desc/vhf_com_units.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	
	{
    id: "clp-vor-loc",
    text: "VOR / LOC",
    unit: "./units/antenna/units/vor_loc_units.html",
    desc: "./units/antenna/desc/vor_loc_units.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-wxr",
    text: "WXR",
    unit: "./units/antenna/units/wx_antenna.html",
    desc: "./units/antenna/desc/wx_antenna.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
	{
    id: "clp-panel1",
    text: "Skin Panel Identification<br>(X −155.000 to X −19.850)",
    unit: "./units/antenna/units/file.html",
    desc: "./units/damage/desc/skin_panel1.html",
    info: {},
    access: {},
    show_in_menu: false,
  },
	{
    id: "clp-panel2",
    text: "Skin Panel Identification<br>(X -19.775 to X 234.475)",
    unit: "./units/antenna/units/file.html",
    desc: "./units/damage/desc/skin_panel2.html",
    info: {},
    access: {},
    show_in_menu: false,
  },
	{
    id: "clp-panel3",
    text: "Skin Panel Identification<br> (X234.475 to X566.025)",
    unit: "./units/antenna/units/file.html",
    desc: "./units/damage/desc/skin_panel3.html",
    info: {},
    access: {},
    show_in_menu: false,
  },
	{
    id: "clp-panel4",
    text: "Skin Panel Identification<br> (X566.025 to X829.548/836.452)",
    unit: "./path/to/html/file.html",
    desc: "./units/damage/desc/skin_panel4.html",
    info: {},
    access: {},
    show_in_menu: false,
  },
	{
    id: "clp-panel5",
    text: "Skin Panel Identification<br> (X 829.548/836.452 to X 980.178)",
    unit: "./path/to/html/file.html",
    desc: "./units/damage/desc/skin_panel5.html",
    info: {},
    access: {},
    show_in_menu: false,
  },
];

/**
 * ANTENNA SVG FILE:
 *
 * Path to Antenna's interactive SVG file.
 */
export const SVG_PATH = "./apps/unit-location/config/antenna/pic/antenna.svg";

/**
 * ANTENNA INTRO FILE:
 *
 * Path to Antenna's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/unit-location/config/antenna/desc/intro.html";
