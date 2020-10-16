/**
 * PROP DATA MODEL:
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
    id: "clp-prop-blade-wire",
    unit: "./units/eng/units/prop_blade_wire.html",
    desc: "./units/eng/desc/prop_assy.html",
    info: {},
    access: {},
  },
  {
    id: "clp-slip-ring",
    unit: "./units/eng/units/prop_all.html",
    desc: "./units/eng/desc/prop_assy.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cawlp",
    unit: "./units/cockpit/units/cawlp.html",
    desc: "./units/deice/desc/cl_prop.html",
    info: {},
    access: {},
  },
  {
    id: "clp-brush-block",
    unit: "./units/eng/units/brush_block.html",
    desc: "./units/eng/desc/brush_block.html",
    info: {},
    access: {},
  },
  {
    id: "clp-prop-isol-cont",
    unit: "./units/uf/units/prop_isol_cont.html",
    desc: "./units/uf/desc/prop_isol_cont.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ifc-iop",
    unit: "./units/wd/units/ifc_iop.html",
    desc: "./units/wd/desc/ifc_iop.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ifc-iom",
    unit: "./units/wd/units/ifc_iom.html",
    desc: "./units/wd/desc/ifc_iom.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ifc-spm",
    unit: "./units/wd/units/ifc_spm.html",
    desc: "./units/wd/desc/ifc_spm.html",
    info: {},
    access: {},
  },
  {
    id: "clp-tmcu",
    unit: "./units/uf/units/tmcu.html",
    desc: "./units/uf/desc/tmcu.html",
    info: {},
    access: {},
  },
  {
    id: "clp-lh-ac-cont-box",
    unit: "./units/ele/units/cont_box_ac_lh.html",
    desc: "./units/ele/desc/cont_box_ac.html",
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
    id: "clp-adv-cont-unit",
    unit: "./units/cockpit/units/adv_cont_unit.html",
    desc: "./units/cockpit/desc/adv_cont_unit.html",
    info: {},
    access: {},
  },
  {
    id: "clp-maint-panel",
    unit: "./units/wd/units/maint_panel.html",
    desc: "./units/wd/desc/maint_panel.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ice-prot-panel",
    unit: "./units/cockpit/units/ice_prot_panel.html",
    desc: "./units/deice/desc/ice_prot_panel_prop.html",
    info: {},
    access: {},
  },
];

/**
 * PROP SVG FILE:
 *
 * Path to Prop's interactive SVG file.
 */
export const SVG_PATH = "./apps/deicing/config/prop/pic/prop.svg";

/**
 * PROP INTRO FILE:
 *
 * Path to Prop's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/deicing/config/prop/desc/intro.html";
