/**
 * WINDOWS DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
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
    id: "clp-anti-ice-cont",
    unit: "./units/wd/units/anti_ice_cont.html",
    desc: "./units/wd/desc/anti_ice_cont.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cb-panel-115",
    unit: "./units/ele/units/cb_panel_115.html",
    desc: "./units/ele/desc/cb_panel_ac.html",
    info: {},
    access: {},
  },
  {
    id: "clp-relay-k7",
    unit: "./units/ele/units/relay_3041_k7.html",
    desc: "./units/ele/desc/relay_3041_k7.html",
    info: {},
    access: {},
  },
  {
    id: "clp-relay-k6",
    unit: "./units/ele/units/wd_relay_panel.html",
    desc: "./units/deice/desc/wdo_overheat_relay_k6.html",
    info: {},
    access: {},
  },
  {
    id: "clp-relay-k5",
    unit: "./units/ele/units/wd_relay_panel.html",
    desc: "./units/deice/desc/wdo_act_relay_k5.html",
    info: {},
    access: {},
  },
  {
    id: "clp-relay-k4",
    unit: "./units/ele/units/relay_rack.html",
    desc: "./units/deice/desc/wdo_overheat_relay_k4.html",
    info: {},
    access: {},
  },
  {
    id: "clp-relay-k3",
    unit: "./units/ele/units/relay_rack.html",
    desc: "./units/deice/desc/wdo_act_relay_k3.html",
    info: {},
    access: {},
  },
  {
    id: "clp-relay-k2",
    unit: "./units/ele/units/relay_rack.html",
    desc: "./units/deice/desc/wdo_overheat_relay_k2.html",
    info: {},
    access: {},
  },
  {
    id: "clp-relay-k1",
    unit: "./units/ele/units/relay_rack.html",
    desc: "./units/deice/desc/wdo_act_relay_k1.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cawlp",
    unit: "./units/cockpit/units/cawlp.html",
    desc: "./units/deice/desc/cl_windows.html",
    info: {},
    access: {},
  },
  {
    id: "clp-side-window",
    unit: "./units/deice/units/side_window.html",
    desc: "./units/deice/desc/side_window.html",
    info: {},
    access: {},
  },
  {
    id: "clp-windshields",
    unit: "./units/deice/units/windshields.html",
    desc: "./units/deice/desc/windshields.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cb-panel-dc-right",
    unit: "./units/ele/units/cb_panel_dc_right.html",
    desc: "./units/ele/desc/cb_panel_dc.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cb-panel-dc-left",
    unit: "./units/ele/units/cb_panel_dc_left.html",
    desc: "./units/ele/desc/cb_panel_dc.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ice-prot-panel",
    unit: "./units/cockpit/units/ice_prot_panel.html",
    desc: "./units/deice/desc/ice_prot_panel_wdo.html",
    info: {},
    access: {},
  },
];

/**
 * WINDOWS SVG FILE:
 *
 * Path to Window's interactive SVG file.
 */
export const SVG_PATH = "./apps/deicing/config/windows/pic/windows.svg";

/**
 * WINDOW INTRO FILE:
 *
 * Path to Windows's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/deicing/config/windows/desc/intro.html";
