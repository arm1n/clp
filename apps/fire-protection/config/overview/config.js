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
 *   }
 * }
 */
export const DATA_SET = [
  {
    id: "clp-warning-reset",
    unit: "./units/cockpit/units/warning_reset.html",
    desc: "./units/cockpit/desc/warning_reset.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cawlp",
    unit: "./units/cockpit/units/cawlp.html",
    desc: "./units/fire/desc/cl_check_fire_det.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fire-prot-panel",
    unit: "./units/cockpit/units/fire_prot_panel.html",
    desc: "./units/cockpit/desc/fire_prot_panel.html",
    info: {},
    access: {},
  },
  {
    id: "clp-low-rate-fire-bottle",
    unit: "./units/fire/units/low_rate_fire_bottle.html",
    desc: "./units/fire/desc/low_rate_fire_bottle.html",
    info: {},
    access: {},
  },
  {
    id: "clp-aft-highrate-firebottle",
    unit: "./units/fire/units/aft_highrate_firebottle.html",
    desc: "./units/fire/desc/aft_highrate_firebottle.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fwd-highrate-firebottle",
    unit: "./units/fire/units/fwd_highrate_firebottle.html",
    desc: "./units/fire/desc/fwd_highrate_firebottle.html",
    info: {},
    access: {},
  },
  {
    id: "clp-apu-ext-btl",
    unit: "./units/fire/units/apu_ext_btl.html",
    desc: "./units/fire/desc/apu_ext_btl.html",
    info: {},
    access: {},
  },
  {
    id: "clp-aft-eng-ext-btl",
    unit: "./units/fire/units/eng_ext_btl.html",
    desc: "./units/fire/desc/eng_ext_btl.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fwd-eng-ext-btl",
    unit: "./units/fire/units/eng_ext_btl.html",
    desc: "./units/fire/desc/eng_ext_btl.html",
    info: {},
    access: {},
  },
  {
    id: "clp-lav-fire-bottle",
    unit: "./units/fire/units/lav_fire_bottle.html",
    desc: "./units/fire/desc/lav_fire_bottle.html",
    info: {},
    access: {},
  },
  {
    id: "clp-lav-smoke-det",
    unit: "./units/fire/units/lav_smoke_det.html",
    desc: "./units/fire/desc/lav_smoke_det.html",
    info: {},
    access: {},
  },
  {
    id: "clp-aft-bagg-smoke-det2",
    unit: "./units/fire/units/aft_bagg_smoke_det.html",
    desc: "./units/fire/desc/bagg_smoke_det.html",
    info: {},
    access: {},
  },
  {
    id: "clp-aft-bagg-smoke-det1",
    unit: "./units/fire/units/aft_bagg_smoke_det.html",
    desc: "./units/fire/desc/bagg_smoke_det.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fwd-bagg-smoke-det",
    unit: "./units/fire/units/fwd_bagg_smoke_det.html",
    desc: "./units/fire/desc/fwd_bagg_smoke_det.html",
    info: {},
    access: {},
  },
  {
    id: "clp-apu-pneu-det",
    unit: "./units/fire/units/apu_pneu_det.html",
    desc: "./units/fire/desc/apu_pneu_det.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rh-mlg-pneu-det",
    unit: "./units/fire/units/mlg_pneu_det.html",
    desc: "./units/fire/desc/pneu_det.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rh-eng-pneu-det",
    unit: "./units/fire/units/eng_pneu_det.html",
    desc: "./units/fire/desc/pneu_det.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rh-pec-pneu-det",
    unit: "./units/fire/units/pec_pneu_det.html",
    desc: "./units/fire/desc/pneu_det.html",
    info: {},
    access: {},
  },
  {
    id: "clp-lh-pec-pneu-det",
    unit: "./units/fire/units/pec_pneu_det.html",
    desc: "./units/fire/desc/pneu_det.html",
    info: {},
    access: {},
  },
  {
    id: "clp-lh-eng-pneu-det",
    unit: "./units/fire/units/eng_pneu_det.html",
    desc: "./units/fire/desc/pneu_det.html",
    info: {},
    access: {},
  },
  {
    id: "clp-lh-mlg-pneu-det",
    unit: "./units/fire/units/mlg_pneu_det.html",
    desc: "./units/fire/desc/pneu_det.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fire-cont-amp",
    unit: "./units/wd/units/fire_cont_amp.html",
    desc: "./units/wd/desc/fire_cont_amp.html",
    info: {},
    access: {},
  },
];

/**
 * OVERVIEW SVG FILE:
 *
 * Path to Overview's interactive SVG file.
 */
export const SVG_PATH = "./apps/fire-protection/config/overview/pic/overview.svg";

/**
 * OVERVIEW INTRO FILE:
 *
 * Path to Overview's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/fire-protection/config/overview/desc/intro.html";
