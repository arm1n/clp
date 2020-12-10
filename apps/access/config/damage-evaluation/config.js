/**
 * DAMAGE EVALUATION FAQ/UNIT FILE:
 *
 * Path to Damage Evaluation's FAQ & Unit HTML file shown at top.
 */
export const FAQ_UNIT_PATH = "./apps/access/config/damage-evaluation/desc/faq-unit.html";

/**
 * DAMAGE EVALUATION DATA MODEL:
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
  },
	{
    id: "clp-atc",
    text: "ATC",
    unit: "./units/antenna/units/atc_units.html",
    desc: "/units/antenna/desc/atc_units.html",
    info: {},
    access: {},
    
  },
	{
    id: "clp-dme",
    text: "DME",
    unit: "./units/antenna/units/dme_units.html",
    desc: "./units/antenna/desc/dme_units.html",
    info: {},
    access: {},
    
  },
	{
    id: "clp-elt",
    text: "ELT",
    unit: "./units/antenna/units/elt_units.html",
    desc: "./units/antenna/desc/elt_units.html",
    info: {},
    access: {},
    
  },
  {
    id: "clp-gps",
    text: "GPS",
    unit: "./units/antenna/units/gps_units.html",
    desc: "./units/antenna/desc/gps_units.html",
    info: {},
    access: {},
    
  },
  {
    id: "clp-gs",
    text: "GS",
    unit: "./units/antenna/units/glideslope_units.html",
    desc: "./units/antenna/desc/glideslope_units.html",
    info: {},
    access: {},
    
  },  
  {
    id: "clp-hf",
    text: "HF",
    unit: "./units/antenna/units/hf_antenna.html",
    desc: "./units/antenna/desc/hf_antenna.html",
    info: {},
    access: {},
    
  },
	{
    id: "clp-mrk",
    text: "MRK",
    unit: "./units/antenna/units/marker_units.html",
    desc: "./units/antenna/desc/marker_units.html",
    info: {},
    access: {},
    
  },
	{
    id: "clp-rad-alt",
    text: "RAD ALT",
    unit: "./units/antenna/units/rad_alt_units.html",
    desc: "./units/antenna/desc/rad_alt_units.html",
    info: {},
    access: {},
    
  },
	{
    id: "clp-tcas",
    text: "TCAS",
    unit: "./units/antenna/units/tcas_units.html",
    desc: "./units/antenna/desc/tcas_units.html",
    info: {},
    access: {},
    
  },
	{
    id: "clp-vhf-com",
    text: "VHF",
    unit: "./units/antenna/units/vhf_com_units.html",
    desc: "./units/antenna/desc/vhf_com_units.html",
    info: {},
    access: {},
    
  },
	
	{
    id: "clp-vor-loc",
    text: "VOR / LOC",
    unit: "./units/antenna/units/vor_loc_units.html",
    desc: "./units/antenna/desc/vor_loc_units.html",
    info: {},
    access: {},
    
  },
	{
    id: "clp-wxr",
    text: "WXR",
    unit: "./units/antenna/units/wx_antenna.html",
    desc: "./units/antenna/desc/wx_antenna.html",
    info: {},
    access: {},
    
  },
	{
    id: "clp-panel1",
    text: "Skin Panel Identification<br>(X −155.000 to X −19.850)",
    unit: "./units/damage/desc/lightning_info.html",
    desc: "./units/damage/desc/skin_panel1.html",
    info: {},
    access: {},
    
  },
	{
    id: "clp-panel2",
    text: "Skin Panel Identification<br>(X -19.775 to X 234.475)",
    unit: "./units/damage/desc/lightning_info.html",
    desc: "./units/damage/desc/skin_panel2.html",
    info: {},
    access: {},
    
  },
	{
    id: "clp-panel3",
    text: "Skin Panel Identification<br> (X234.475 to X566.025)",
    unit: "./units/damage/desc/lightning_info.html",
    desc: "./units/damage/desc/skin_panel3.html",
    info: {},
    access: {},
    
  },
	{
    id: "clp-panel4",
    text: "Skin Panel Identification<br> (X566.025 to X829.548/836.452)",
    unit: "./units/damage/desc/lightning_info.html",
    desc: "./units/damage/desc/skin_panel4.html",
    info: {},
    access: {},
    
  },
	{
    id: "clp-panel5",
    text: "Skin Panel Identification<br> (X 829.548/836.452 to X 980.178)",
    unit: "./units/damage/desc/lightning_info.html",
    desc: "./units/damage/desc/skin_panel5.html",
    info: {},
    access: {},
    
  },
];

/**
 * DAMAGE EVALUATION SVG FILE:
 *
 * Path to Damage Evaluation's interactive SVG file.
 */
export const SVG_PATH = "./apps/access/config/damage-evaluation/pic/damage-evaluation.svg";

/**
 * DAMAGE EVALUATION INTRO FILE:
 *
 * Path to Damage Evaluation's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/access/config/damage-evaluation/desc/intro.html";