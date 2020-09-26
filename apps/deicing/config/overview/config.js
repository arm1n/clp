/**
 * OVERVIEW DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
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
 * }
 */
export const DATA_SET = [
  {
    id: "clp-intake-deicing-boot",
    unit: "./units/deice/units/intake_deicing_boot",
    desc: "./units/deice/desc/boot_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-341br",
    unit: "./units/deice/units/341br.html",
    desc: "./units/deice/desc/boot_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-341ar",
    unit: "./units/deice/units/341ar.html",
    desc: "./units/deice/desc/boot_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-331al",
    unit: "./units/deice/units/331al.html",
    desc: "./units/deice/desc/boot_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-331bl",
    unit: "./units/deice/units/331bl.html",
    desc: "./units/deice/desc/boot_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-321ft",
    unit: "./units/deice/units/321ft.html",
    desc: "./units/deice/desc/boot_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-613dr",
    unit: "./units/deice/units/613dr.html",
    desc: "./units/deice/desc/boot_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-613cr",
    unit: "./units/deice/units/613cr.html",
    desc: "./units/deice/desc/boot_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-613br",
    unit: "./units/deice/units/613br.html",
    desc: "./units/deice/desc/boot_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-613ar",
    unit: "./units/deice/units/613ar.html",
    desc: "./units/deice/desc/boot_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-612dr",
    unit: "./units/deice/units/612dr.html",
    desc: "./units/deice/desc/boot_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-611ar",
    unit: "./units/deice/units/611ar.html",
    desc: "./units/deice/desc/boot_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-511al",
    unit: "./units/deice/units/511al.html",
    desc: "./units/deice/desc/boot_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-512dl",
    unit: "./units/deice/units/512dl.html",
    desc: "./units/deice/desc/boot_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-513al",
    unit: "./units/deice/units/513al.html",
    desc: "./units/deice/desc/boot_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-513bl",
    unit: "./units/deice/units/513bl.html",
    desc: "./units/deice/desc/boot_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-513cl",
    unit: "./units/deice/units/513cl.html",
    desc: "./units/deice/desc/boot_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-513dl",
    unit: "./units/deice/units/513dl.html",
    desc: "./units/deice/desc/boot_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-prop-blade-wire",
    unit: "./units/eng/units/prop_blade_wire.html",
    desc: "./units/eng/desc/prop_assy_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ice-det-probe",
    unit: "./units/deice/units/ice_det_probe.html",
    desc: "./units/deice/desc/ice_det_probe.html",
    info: {},
    access: {},
  },
  {
    id: "clp-aoa",
    unit: "./units/deice/units/aoa.html",
    desc: "./units/deice/desc/aoa.html",
    info: {},
    access: {},
  },
  {
    id: "clp-stby-pitot-static-probe",
    unit: "./units/deice/units/stby_pitot_static_probe.html",
    desc: "./units/deice/desc/pitot_static_probe.html",
    info: {},
    access: {},
  },
  {
    id: "clp-pitot-static-probe",
    unit: "./units/deice/units/pitot_static_probe.html",
    desc: "./units/deice/desc/pitot_static_probe.html",
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
    id: "clp-ice-prot-panel",
    unit: "./units/cockpit/units/ice_prot_panel.html",
    desc: "./units/cockpit/desc/ice_prot_panel.html",
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
];

/**
 * OVERVIEW SVG FILE:
 *
 * Path to Overview's interactive SVG file.
 */
export const SVG_PATH = "./apps/deicing/config/overview/pic/overview.svg";

/**
 * OVERVIEW INTRO FILE:
 *
 * Path to Overview's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/deicing/config/overview/desc/intro.html";
