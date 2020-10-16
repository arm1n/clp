/**
 * ACTIVE NOISE & VIBRATION SYSTEM DATA MODEL:
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
    id: "clp-flt-att-panel",
    unit: "./units/cabin/units/flt_att_panel.html",
    desc: "./units/anvs/desc/flt_att_panel.html",
    info: {},
    access: {},
  },
	{
    id: "clp-maint-panel",
    unit: "./units/wd/units/maint_panel.html",
    desc: "./units/anvs/desc/maint_panel.html",
    info: {},
    access: {},
  },
  {
    id: "clp-prop-bal-sensor",
    unit: "./units/eng/units/prop_bal_sensor.html",
    desc: "./units/eng/desc/prop_bal_sensor.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nvs-accelerometer",
    unit: "./units/anvs/units/anvs_accelerometer.html",
    desc: "./units/anvs/desc/anvs_accelerometer.html",
    info: {},
    access: {},
  },
  {
    id: "clp-anvc-micro",
    unit: "./units/anvs/units/anvs_micro.html",
    desc: "./units/anvs/desc/anvs_micro.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nvs-amplifier",
    unit: "./units/anvs/units/anvs_amplifier.html",
    desc: "./units/anvs/desc/anvs_amplifier.html",
    info: {},
    access: {},
  },
  {
    id: "clp-atva",
    unit: "./units/anvs/units/atva.html",
    desc: "./units/anvs/desc/atva.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nvs-sys-relay",
    unit: "./units/uf/units/nvs_cb_box_relay.html",
    desc: "./units/uf/desc/nvs_cb_box.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ancu",
    unit: "./units/uf/units/ancu.html",
    desc: "./units/uf/desc/ancu.html",
    info: {},
    access: {},
  },
];

/**
 * ACTIVE NOISE & VIBRATION SYSTEM SVG FILE:
 *
 * Path to Active Noise & Vibration System's interactive SVG file.
 */
export const SVG_PATH =
  "./apps/anvs/config/active-noise-and-vibration-system/pic/active-noise-and-vibration-system.svg";

/**
 * ACTIVE NOISE & VIBRATION SYSTEM INTRO FILE:
 *
 * Path to Active Noise & Vibration System's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/anvs/config/active-noise-and-vibration-system/desc/intro.html";
