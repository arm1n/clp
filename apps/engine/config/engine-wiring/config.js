/**
 * ENGINE WIRING DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   unit: relative path to unit file on the right,
 *   desc: relative path to desc file on the left,
 *   info: {
 *     path: "./path/to/html/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/html/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" (popup only)
 *   }
 * }
 */
export const DATA_SET = [
	{
    id: "clp-500",
    text: "ENGINE FADEC (P500 P600)",
    unit: "./units/eng/units/w_fadec.html",
    desc: "./apps/engine/config/engine-wiring/desc/intro.html",
    info: {},
    access: {},
		show_in_menu: true,
  },
  {
    id: "clp-501",
    text: "ENGINE FADEC (P501 P601)",
    unit: "./units/eng/units/w_fadec.html",
    desc: "./apps/engine/config/engine-wiring/desc/intro.html",
    info: {},
    access: {},
		show_in_menu: true,
  },
	{
    id: "clp-502",
    text: "PEC CH-A (P502 P602)",
    unit: "./units/eng/units/w_pec_a.html",
    desc: "./apps/engine/config/engine-wiring/desc/intro.html",
    info: {},
    access: {},
		show_in_menu: true,
  },
  {
    id: "clp-503",
    text: "PEC CH-B  (P503 P603)",
    unit: "./units/eng/units/w_pec_b.html",
   	desc: "./apps/engine/config/engine-wiring/desc/intro.html",
    info: {},
    access: {},
		show_in_menu: true,
  },
  {
    id: "clp-504",
    text: "ENGINE MONITORING (P504 P604)",
    unit: "./units/eng/units/w_eng_mon.html",
    desc: "./apps/engine/config/engine-wiring/desc/intro.html",
    info: {},
    access: {},
		show_in_menu: true,
  },
	{
    id: "clp-505",
    text: "INTAKE DE-ICE  (P505 P605)",
    unit: "./units/eng/units/w_int_deice.html",
    desc: "./apps/engine/config/engine-wiring/desc/intro.html",
    info: {},
    access: {},
		show_in_menu: true,
  },
	{
    id: "clp-506",
    text: "AUX FEARHER PUMP  (P506 P606)",
    unit: "./units/eng/units/w_aux_feather_p.html",
    desc: "./apps/engine/config/engine-wiring/desc/intro.html",
    info: {},
    access: {},
		show_in_menu: true,
  },
  {
    id: "clp-507",
    text: "AUX FEARHER PUMP  (P507 P607)",
    unit: "./units/eng/units/w_aux_feather_p.html",
    desc: "./apps/engine/config/engine-wiring/desc/intro.html",
    info: {},
    access: {},
		show_in_menu: true,
  },
	{
    id: "clp-508",
    text: "BLEED AIR  (P508 P608)",
    unit: "./units/eng/units/w_bleed_air.html",
    desc: "./apps/engine/config/engine-wiring/desc/intro.html",
    info: {},
    access: {},
		show_in_menu: true,
  },
	{
    id: "clp-509",
    text: "PROP DE-ICE  (P509 P609)",
    unit: "./units/eng/units/w_prop_deice.html",
    desc: "./apps/engine/config/engine-wiring/desc/intro.html",
    info: {},
    access: {},
		show_in_menu: true,
  },
  {
    id: "clp-510",
    text: "DC CONTROL  (P510 P610)",
    unit: "./units/eng/units/w_dc_cont.html",
    desc: "./apps/engine/config/engine-wiring/desc/intro.html",
    info: {},
    access: {},
		show_in_menu: true,
  },
	{
    id: "clp-511",
    text: "AC CONTROL  (P511 P611)",
    unit: "./units/eng/units/w_ac_cont.html",
    desc: "./apps/engine/config/engine-wiring/desc/intro.html",
    info: {},
    access: {},
		show_in_menu: true,
  },
  
  {
    id: "clp-412et",
    text: "clp-412et",
    unit: "./units/access/units/412et.html",
    desc: "./units/access/desc/412et.html",
    info: {},
    access: {},
		show_in_menu: false,
  },
  {
    id: "clp-412dt",
    text: "clp-412dt",
    unit: "./units/access/units/412dt.html",
    desc: "./units/access/desc/412dt.html",
    info: {},
    access: {},
		show_in_menu: false,
  },
  {
    id: "clp-412ct",
    text: "clp-412ct",
    unit: "./units/access/units/412ct.html",
    desc: "./units/access/desc/412ct.html",
    info: {},
    access: {},
		show_in_menu: false,
  },
  {
    id: "clp-422et",
    text: "clp-422et",
    unit: "./units/access/units/422et.html",
    desc: "./units/access/desc/422et.html",
    info: {},
    access: {},
		show_in_menu: false,
  },
  {
    id: "clp-422dt",
    text: "clp-422dt",
    unit: "./units/access/units/422dt.html",
    desc: "./units/access/desc/422dt.html",
    info: {},
    access: {},
		show_in_menu: false,
  },
  {
    id: "clp-422ct",
    text: "clp-422ct",
    unit: "./units/access/units/422ct.html",
    desc: "./units/access/desc/422ct.html",
    info: {},
    access: {},
		show_in_menu: false,
  },
];

/**
 * ENGINE WIRING SVG FILE:
 *
 * Path to engine wiring's interactive SVG file.
 */
export const SVG_PATH = "./apps/engine/config/engine-wiring/pic/engine-wiring.svg";

/**
 * ENGINE WIRING INTRO FILE:
 *
 * Path to engine wiring's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/engine/config/engine-wiring/desc/intro.html";

