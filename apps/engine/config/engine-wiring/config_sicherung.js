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
    text: "clp-500",
    unit: "./units/eng/units/w_fadec.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-501",
    text: "clp-501",
    unit: "./units/eng/units/w_fadec.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
	{
    id: "clp-502",
    text: "clp-502",
    unit: "./units/eng/units/w_pec_a.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-503",
    text: "clp-503",
    unit: "./units/eng/units/w_pec_b.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-504",
    text: "clp-504",
    unit: "./units/eng/units/w_eng_mon.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
	{
    id: "clp-505",
    text: "clp-505",
    unit: "./units/eng/units/w_int_deice.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
	{
    id: "clp-506",
    text: "clp-506",
    unit: "./units/eng/units/w_aux_feather_p.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-507",
    text: "clp-507",
    unit: "./units/eng/units/w_aux_feather_p.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
	{
    id: "clp-508",
    text: "clp-508",
    unit: "./units/eng/units/w_bleed_air.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
	{
    id: "clp-509",
    text: "clp-509",
    unit: "./units/eng/units/w_prop_deice.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-510",
    text: "clp-510",
    unit: "./units/eng/units/w_dc_cont.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
	{
    id: "clp-511",
    text: "clp-511",
    unit: "./units/eng/units/w_ac_cont.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  
  {
    id: "clp-412et",
    text: "clp-412et",
    unit: "./units/access/units/412et.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-412dt",
    text: "clp-412dt",
    unit: "./units/access/units/412dt.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-412ct",
    text: "clp-412ct",
    unit: "./units/access/units/412ct.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-422et",
    text: "clp-422et",
    unit: "./units/access/units/422et.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-422dt",
    text: "clp-422dt",
    unit: "./units/access/units/422dt.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-422ct",
    text: "clp-422ct",
    unit: "./units/access/units/422ct.html",
    desc: "./path/to/html/file.html",
    info: {},
    access: {},
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

