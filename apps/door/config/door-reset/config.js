/**
 * DOOR RESET DATA MODEL:
 *
 * {
 *   id: unique id for this (sub) item,
 *   text: text shown in user interface,
 *   data: {
 *     path: relative path to main html,
 *   },
 * }
 */
export const DATA_SET = [
  {
    id: "clp-aft-svc-door-res",
    text: "Service Door",
    data: {
      path: "./apps/door/config/door-reset/desc/service-door.html",
    },
  },
  {
    id: "clp-fwd-emerg-door-res",
    text: "Fwd Emrg. Exit",
    data: {
      path: "./apps/door/config/door-reset/desc/fwd-emrg-exit.html",
    },
  },
  {
    id: "clp-aft-pax-door-res",
    text: "Aft Pax Door",
    data: {
      path: "./apps/door/config/door-reset/desc/aft-pax-door.html",
    },
  },
  {
    id: "clp-aft-bagg-door-res",
    text: "Aft Bagg Door",
    data: {
      path: "./apps/door/config/door-reset/desc/aft-bagg-door.html",
    },
  },
  {
    id: "clp-fwd-bagg-door-res",
    text: "Fwd Bagg Door",
    data: {
      path: "./apps/door/config/door-reset/desc/fwd-bagg-door.html",
    },
  },
];

/**
 * DOOR RESET SVG FILE:
 *
 * Path to Door Reset's interactive SVG file.
 */
export const SVG_PATH = "./apps/door/config/door-reset/pic/door-reset.svg";

/**
 * DOOR RESET INTRO FILE:
 *
 * Path to Door Reset's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/door/config/door-reset/desc/intro.html";
