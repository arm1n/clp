/**
 * RELAY FINDER DATA MODEL:
 *
 * {
 *   id: unique id for this (sub) item,
 *   text: text shown in user interface,
 *   data: {
 *     loc: relative path to location svg,
 *     main: relative path to main svg/html,
 *     desc: relative path to desc below main svg/html,
 *     unit: relative path to unit below location svg (optional),
 *     info: relative path to optional unit's additional info html,
 *     access: relative path to optional unit's additional access html,
 *     info: {
 *       path: relative path to optional html ('INLINE'|'POPUP') or URL ('LINK'),
 *       mode: setting how to handle button: 'INLINE' (default), 'POPUP' or 'LINK'
 *     },
 *     access: {
 *       path: relative path to optional html ('INLINE'|'POPUP') or URL ('LINK'),
 *       mode: setting how to handle button: 'INLINE' (default), 'POPUP' or 'LINK'
 *     },
 *     refs: [
 *       // collection of references belonging to this part
 *       {
 *         id: ID matching the one in the SVG file (if any),
 *         text: gets shown for the search dropdown field,
 *         unit: relative path to unit file on the left,
 *         info: {
 *           path: "./path/to/html/file.html",
 *           mode: "INLINE" | "POPUP" | "LINK",
 *           title: "Title" (popup only)
 *         }
 *         access:  {
 *           path: "./path/to/html/file.html",
 *           mode: "INLINE" | "POPUP" | "LINK",
 *           title: "Title" (popup only)
 *         }
 *       },
 *       ...
 *     ]
 *   },
 *   nodes: [
 *     // recursive structure for children of this menu entry
 *   ]
 * }
 ---
 info: {
            path: "./units/cockpit/units/epcu-info.html",
            mode: "POPUP",
            title: "Access",
          },
          access: {
            path: "/ele/",
            mode: "LINK",
          },
					
					unit: null,
 ---
 *
 * note: all paths are relative to the root directory (= clp)!
 */
export const DATA_SET = [
  /* L AC CONTACTOR BOX */
  {
    id: "clp-relaybox-ac-lh",
    text: "L AC CONTACTOR BOX",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/relaybox_ac_loc.svg",
      main: "./apps/ele/config/relay-finder/pic/relaybox_ac_lh.svg",
      desc: "./units/ele/relay-finder/desc/relaybox_ac_desc.html",
			unit: "./units/ele/units/cont_box_ac_lh.html",
      refs: [
        {
          id: "clp-2421-k1",
          text: "2421-K1",
          unit: "./units/ele/units/ac_cont_k1.html",
        },
        {
          id: "clp-2421-k3",
          text: "2421-K3",
          unit: "./units/ele/units/ac_cont_k3.html",
        },
        {
          id: "clp-2421-k5",
          text: "2421-K5",
          unit: "./units/ele/units/ac_cont_k5.html",
        },
      ],
    },
  },

  /* R AC CONTACTOR BOX */
  {
    id: "clp-relaybox-ac-rh",
    text: "R AC CONTACTOR BOX",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/relaybox_ac_loc.svg",
      main: "./apps/ele/config/relay-finder/pic/relaybox_ac_rh.svg",
      desc: "./units/ele/relay-finder/desc/relaybox_ac_desc.html",
      unit: "./units/ele/units/cont_box_ac_rh.html",
      refs: [
        {
          id: "clp-2421-k4",
          text: "2421-K4",
          unit: "./units/ele/units/ac_cont_k4.html",
        },
        {
          id: "clp-2421-k7",
          text: "2421-K7",
          unit: "./units/ele/units/ac_cont_k7.html",
        },
        {
          id: "clp-2421-k2",
          text: "2421-K2",
          unit: "./units/ele/units/ac_cont_k2.html",
        },
        {
          id: "clp-2421-k6",
          text: "2421-K6",
          unit: "./units/ele/units/ac_cont_k6.html",
        },
        {
          id: "clp-eppu",
          text: "eppu",
          unit: "./units/ele/units/ac_eppu.html",
        },
      ],
    },
  },

  /* DC COTACTOR BOX */
  {
    id: "clp-relaybox-dc",
    text: "DC COTACTOR BOX",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/relaybox_dc_loc.svg",
      main: "./apps/ele/config/relay-finder/pic/relaybox_dc.svg",
      desc: "./units/ele/relay-finder/desc/relaybox_dc_desc.html",
      unit: "./units/ele/units/cont_box_dc.html",
      refs: [
        {
          id: "clp-2431-k1",
          text: "2431-k1",
          unit: "./units/ele/units/dc_cont.html",
        },
        {
          id: "clp-2431-k2",
          text: "2431-k2",
          unit: "./units/ele/units/dc_cont.html",
        },
        {
          id: "clp-2431-k3",
          text: "2431-K3",
          unit: "./units/ele/units/dc_cont.html",
        },
        {
          id: "clp-2431-k4",
          text: "2421-K4",
          unit: "./units/ele/units/dc_cont.html",
        },
        {
          id: "clp-2431-k5",
          text: "2431-k5",
          unit: "./units/ele/units/dc_cont.html",
        },
        {
          id: "clp-2431-k6",
          text: "2431-k6",
          unit: "./units/ele/units/dc_cont.html",
        },
        {
          id: "clp-2431-k7",
          text: "2431-k7",
          unit: "./units/ele/units/dc_cont.html",
        },
        {
          id: "clp-2431-k8",
          text: "2431-k8",
          unit: "./units/ele/units/dc_cont.html",
        },

        {
          id: "clp-2431-k9",
          text: "2431-k9",
          unit: "./units/ele/units/dc_cont.html",
        },

        {
          id: "clp-2431-k21",
          text: "2431-k21",
          unit: "./units/ele/units/dc_cont.html",
        },
        {
          id: "clp-2431-k22",
          text: "2431-k22",
          unit: "./units/ele/units/dc_cont.html",
        },

        {
          id: "clp-2431-k26",
          text: "2431-k4",
          unit: "./units/ele/units/dc_cont.html",
        },

        {
          id: "clp-2431-rl1",
          text: "2431-RL1",
          unit: "./units/ele/units/relay_dc_rl.html",
        },
        {
          id: "clp-2431-rl2",
          text: "2431-RL2",
          unit: "./units/ele/units/relay_dc_rl.html",
        },
        {
          id: "clp-2431-rl3",
          text: "2431-RL3",
          unit: "./units/ele/units/relay_dc_rl.html",
        },
      ],
    },
  },

  /* Standby Contactor Box */
  {
    id: "clp-relaybox-dc-stby",
    text: "Standby Contactor Box",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/relaybox_dc_stby_loc.svg",
      main: "./apps/ele/config/relay-finder/pic/relaybox_dc_stby.svg",
      desc: "./units/ele/relay-finder/desc/relaybox_dc_stby_desc.html",
      unit: null,

      refs: [
        {
          id: "clp-2431-rl4",
          text: "2431-RL4",
          unit: "./units/ele/units/stby_cont_rl4.html",
          
        },
        {
          id: "clp-2431-k23",
          text: "2431-K23",
          unit: "./units/ele/units/dc_cont_stby.html",
        },
        {
          id: "clp-2431-k24",
          text: "2431-K24",
          unit: "./units/ele/units/dc_cont_stby.html",
        },
        {
          id: "clp-2431-k25",
          text: "2431-K25",
          unit: "./units/ele/units/dc_cont_stby.html",
        },
      ],
    },
  },

  /* PTU RELAY BOX */
  {
    id: "clp-relaybox-ptu",
    text: "PTU RELAY BOX",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/relaybox_ptu_loc.svg",
      main: "./apps/ele/config/relay-finder/pic/relaybox_ptu.svg",
      desc: null,
      unit: null,
      refs: [
        {
          id: "clp-2921-k5",
          text: "2921-K5",
          unit: "./units/ele/units/relay_ptu.html",
        },
        {
          id: "clp-2921-k11",
          text: "2921-K11",
          unit: "./units/ele/units/relay_ptu.html",
        },
        {
          id: "clp-2921-k12",
          text: "2921-K12",
          unit: "./units/ele/units/relay_ptu.html",
        },
        {
          id: "clp-2921-k13",
          text: "2921-K13",
          unit: "./units/ele/units/relay_ptu.html",
        },
      ],
    },
  },

  /* COCKPIT DOOR REMOTE ACCESS RELAY BOX */
  {
    id: "clp-relaybox-cockpit-access",
    text: "COCKPIT DOOR REMOTE ACCESS RELAY BOX",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/relaybox_cockpit_access_loc.svg",
      main: "./apps/ele/config/relay-finder/pic/relaybox_cockpit_access.svg",
      desc: "./units/ele/relay-finder/desc/remote_access_box_desc.html",
      unit: "./units/ele/units/rem_access_relay_box.html",
				
      refs: [
        {
          id: "clp-2521-k1",
          text: "2521-k1",
          unit: "./units/ele/units/rem_access_relay_box.html",
        },
        {
          id: "clp-2521-k2",
          text: "2521-k2",
          unit: "./units/ele/units/rem_access_relay_box.html",
        },
        {
          id: "clp-2521-k3",
          text: "2521-k3",
          unit: "./units/ele/units/rem_access_relay_box.html",
        },
        {
          id: "clp-2521-k4",
          text: "2521-k4",
          unit: "./units/ele/units/rem_access_relay_box.html",
        },
        {
          id: "clp-2521-k5",
          text: "2521-k5",
          unit: "./units/ele/units/rem_access_relay_box.html",
        },
        {
          id: "clp-2521-k6",
          text: "2521-k6",
          unit: "./units/ele/units/rem_access_relay_box.html",
        },
      ],
    },
  },

  /*NVS, CIRCUIT BREAKER BOX*/
  {
    id: "clp-relaybox-nvs",
    text: "NVS, CIRCUIT BREAKER BOX",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/relaybox_nvs_loc.svg",
      main: "./apps/ele/config/relay-finder/pic/relaybox_nvs.svg",
      desc: null,
      unit: "./units/uf/units/nvs_cb_box.html",
			
      refs: [
        {
          id: "clp-2335-K1",
          text: "2335-K1",
          unit: "./units/uf/units/nvs_cb_box_relay.html",
        },
        {
          id: "clp-2335-K2",
          text: "2335-K2",
          unit: "./units/uf/units/nvs_cb_box_relay.html",
        },
        {
          id: "clp-2335-K3",
          text: "2335-K3",
          unit: "./units/uf/units/nvs_cb_box_relay.html",
        },
        {
          id: "clp-RLY-K4",
          text: "RLY-K4",
          unit: "./units/ele/units/nvs_cb_box_rl4.html",
        },
      ],
    },
  },

  /* APU RELAY BOX */
  {
    id: "clp-relaybox-apu",
    text: "APU RELAY BOX",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/relaybox_apu_loc.svg",
      main: "./apps/ele/config/relay-finder/pic/relaybox_apu.svg",
      desc: null,
      unit: "./units/ele/units/apu_relay_box.html",
      refs: [
        {
          id: "clp-4900-k1",
          text: "4900-k1",
          unit: "./units/ele/units/apu_relay_box.html",
        },
        {
          id: "clp-4900-k3",
          text: "4900-k3",
          unit: "./units/ele/units/apu_relay_box.html",
        },
        {
          id: "clp-4900-k4",
          text: "4900-k4",
          unit: "./units/ele/units/apu_relay_box.html",
        },

        {
          id: "clp-4900-k5",
          text: "4900-k5",
          unit: "./units/ele/units/apu_relay_box.html",
        },
        {
          id: "clp-4900-k6",
          text: "4900-k6",
          unit: "./units/ele/units/apu_relay_box.html",
        },
        {
          id: "clp-4900-k7",
          text: "4900-k7",
          unit: "./units/ele/units/apu_relay_box.html",
        },
        {
          id: "clp-4900-k8",
          text: "4900-k8",
          unit: "./units/ele/units/apu_relay_box.html",
        },
        {
          id: "clp-4900-k9",
          text: "4900-k9",
          unit: "./units/ele/units/apu_relay_box.html",
        },
        {
          id: "clp-4900-k10",
          text: "4900-k10",
          unit: "./units/ele/units/apu_relay_box.html",
        },
        {
          id: "clp-4900-k11",
          text: "4900-k11",
          unit: "./units/ele/units/apu_relay_box.html",
        },
      ],
    },
  },

  /* RELAY JUNCTION BOX */
  {
    id: "clp-rjb",
    text: "Relay Junction Box",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/relay_junction_box_loc.svg",
      main: "./apps/ele/config/relay-finder/desc/relay_junction_box.html",
      desc: null,
      unit: "./units/uf/units/rjb.html",
      refs: [
        {
          id: "clp-rjb-1",
          text: "Relay Junction Box 1",
          unit: "./units/uf/units/rjb.html",
					
        },
        {
          id: "clp-rjb-2",
          text: "Relay Junction Box 2",
          unit: "./units/uf/units/rjb.html",
					
        },
        {
          id: "clp-rjb-3",
          text: "Relay Junction Box 3",
          unit: "./units/uf/units/rjb.html",
					
        },
      ],
    },
  },

  /* RELAY RACK ELECTRICAL EQUIPMENT INSTALLATION */

  /* RELAY PANEL ASSEMBLY*/
  {
    id: "clp-relay-panel-assy",
    text: "RELAY PANEL ASSEMBLY",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/relay_panel_assy_loc.svg",
      main: "./apps/ele/config/relay-finder/pic/relay_panel_assy.svg",
      desc: null,
      unit: "./units/ele/units/wd_relay_panel.html",
      refs: [
        {
          id: "clp-2330-k1",
          text: "2330-K1",
          unit: "./units/ele/units/wd_relay_panel.html",
        },
        {
          id: "clp-2330-k2",
          text: "2330-K2",
          unit: "./units/ele/units/wd_relay_panel.html",
        },
        {
          id: "clp-2126-k5",
          text: "2126-K5",
          unit: "./units/ele/units/wd_relay_panel.html",
        },
        {
          id: "clp-2126-k2",
          text: "2126-K2",
          unit: "./units/ele/units/wd_relay_panel.html",
        },
        {
          id: "clp-2126-k1",
          text: "2126-K1",
          unit: "./units/ele/units/wd_relay_panel.html",
        },
        {
          id: "clp-3326-k1",
          text: "3326-K1",
          unit: "./units/ele/units/wd_relay_panel.html",
        },
        {
          id: "clp-3325-k1",
          text: "3325-K1",
          unit: "./units/ele/units/wd_relay_panel.html",
        },
        {
          id: "clp-3000-k2",
          text: "3000-K2",
          unit: "./units/ele/units/wd_relay_panel.html",
        },
        {
          id: "clp-3000-k1",
          text: "3000-k1",
          unit: "./units/ele/units/wd_relay_panel.html",
        },
        {
          id: "clp-2126-k4",
          text: "2126-K4",
          unit: "./units/ele/units/wd_relay_panel.html",
        },
        {
          id: "clp-2126-k3",
          text: "2126-K3",
          unit: "./units/ele/units/wd_relay_panel.html",
        },
        {
          id: "clp-2911-k2",
          text: "2911-K2",
          unit: "./units/ele/units/wd_relay_panel.html",
        },
        {
          id: "clp-2911-k1",
          text: "2911-K1",
          unit: "./units/ele/units/wd_relay_panel.html",
        },
        {
          id: "clp-3000-k4",
          text: "3000-K4",
          unit: "./units/ele/units/wd_relay_panel.html",
        },
        {
          id: "clp-3000-k3",
          text: "3000-K3",
          unit: "./units/ele/units/wd_relay_panel.html",
        },
        {
          id: "clp-3323-k1",
          text: "3323-K1",
          unit: "./units/ele/units/wd_relay_panel.html",
        },
        {
          id: "clp-3041-k5",
          text: "3041-K5",
          unit: "./units/ele/units/wd_relay_panel.html",
        },
        {
          id: "clp-3041-k6",
          text: "3041-K6",
          unit: "./units/ele/units/wd_relay_panel.html",
        },
      ],
    },
  },

  /* RELAY PANEL ASSEMBLY - RELAY RACK */
  {
    id: "clp-relaybox-panel",
    text: "RELAY PANEL ASSEMBLY-RELAY RACK",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/relaybox_panel_loc.svg",
      main: "./apps/ele/config/relay-finder/pic/relaybox_panel.svg",
      desc: null,
      unit: "./units/ele/units/relay_rack.html",
      refs: [
        {
          id: "clp-3341-k1",
          text: "3341−K1",
          unit: "./units/ele/units/relay_rack.html",
        },
        {
          id: "clp-3041-k2",
          text: "3041−K2",
          unit: "./units/ele/units/relay_rack.html",
        },
        {
          id: "clp-3041-k1",
          text: "3041−K1",
          unit: "./units/ele/units/relay_rack.html",
        },
        {
          id: "clp-3000-k5",
          text: "3000−K5",
          unit: "./units/ele/units/relay_rack.html",
        },
        {
          id: "clp-3341-k2",
          text: "3341−K2",
          unit: "./units/ele/units/relay_rack.html",
        },
        {
          id: "clp-3344-k1",
          text: "3344-K1",
          unit: "./units/ele/units/relay_rack.html",
        },
        {
          id: "clp-3400-k1",
          text: "3400-K1",
          unit: "./units/ele/units/relay_rack.html",
        },
        {
          id: "clp-3041-k4",
          text: "3041−K4",
          unit: "./units/ele/units/relay_rack.html",
        },
        {
          id: "clp-3041-k3",
          text: "3041−K3",
          unit: "./units/ele/units/relay_rack.html",
        },
      ],
    },
  },

  /* FUEL TRANSFER PANEL ASSEMBLY RELAY RACK */
  {
    id: "clp-relaybox-fuel",
    text: "FUEL TRANSFER PANEL ASSEMBLY RELAY RACK",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/relaybox_fuel_loc.svg",
      main: "./apps/ele/config/relay-finder/pic/relaybox_fuel.svg",
      desc: null,
      unit: "./units/ele/units/fuel_transfer_panel.html",
      refs: [
        {
          id: "clp-2800-k2",
          text: "2800-K2",
          unit: "./units/ele/units/fuel_transfer_panel.html",
        },
        {
          id: "clp-2800-k1",
          text: "2800-K1",
          unit: "./units/ele/units/fuel_transfer_panel.html",
        },
        {
          id: "clp-2800-k9",
          text: "2800-K9",
          unit: "./units/ele/units/fuel_transfer_panel.html",
        },
        {
          id: "clp-2800-k6",
          text: "2800-K6",
          unit: "./units/ele/units/fuel_transfer_panel.html",
        },
        {
          id: "clp-2800-k5",
          text: "2800-K5",
          unit: "./units/ele/units/fuel_transfer_panel.html",
        },
        {
          id: "clp-2800-k10",
          text: "2800-K10",
          unit: "./units/ele/units/fuel_transfer_panel.html",
        },
        {
          id: "clp-2800-k8",
          text: "2800-K8",
          unit: "./units/ele/units/fuel_transfer_panel.html",
        },
        {
          id: "clp-2800-k7",
          text: "2800-K7",
          unit: "./units/ele/units/fuel_transfer_panel.html",
        },
        {
          id: "clp-2800-k4",
          text: "2800-K4",
          unit: "./units/ele/units/fuel_transfer_panel.html",
        },
        {
          id: "clp-2800-k3",
          text: "2800-K3",
          unit: "./units/ele/units/fuel_transfer_panel.html",
        },
      ],
    },
  },

  /* CIRCUIT BREAKER PANEL ASSEMBLY */
  {
    id: "clp-relaybox-3351-k1-k2",
    text: "CIRCUIT BREAKER PANEL ASSEMBLY",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/relaybox_3351_k1_k2_loc.svg",
      main: "./apps/ele/config/relay-finder/pic/relaybox_3351_k1_k2.svg",
      desc: null,
      unit: "./units/ele/units/relay_3351_k1_k2.html",
      refs: [
        {
          id: "clp-3351-k1",
          text: "3351-K1",
          unit: "./units/ele/units/relay_3351_k1_k2.html",
        },
        {
          id: "clp-3351-k2",
          text: "3351-K2",
          unit: "./units/ele/units/relay_3351_k1_k2.html",
        },
      ],
    },
  },

  /* CIRCUIT BREAKER PANEL ASSEMBLY */
  {
    id: "clp-4900-k12-2441-k3",
    text: "RELAY 4900-K12 and 2441-K3",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/4900-k12_2441-k3_loc.svg",
      main: "./apps/ele/config/relay-finder/pic/4900_k12_2441_k3.svg",
      desc: null,
      unit: null,
      refs: [
        {
          id: "clp-4900-k12",
          text: "4900-K12",
          unit: "./units/ele/relay-finder/units/l_ac_contactor_box/2421-k1.html",
        },
        {
          id: "clp-2441-k3",
          text: "2441-K3",
          unit: "./units/ele/units/relay_2441_k3.html",
        },
      ],
    },
  },

  /* FEATH PUMP CONT offen*/
  {
    id: "clp-feath-pump-cont",
    text: "Feathering Pump Contactor",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/feath_pump_cont_loc.svg",
      unit: "./units/uf/units/feath_pump_cont.html",
      refs: [
        {
          id: "clp-6100-K2",
          text: "6100-K2",
        },
        {
          id: "clp-6100-K3",
          text: "6100-K3",
        },
      ],
    },
  },

  /* RELAY HEATERS PILOT and COPILOT SEAT */
  {
    id: "clp-2511-k1-2511-k2",
    text: "RELAY HEATERS PILOT and COPILOT SEAT",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/2511_k1_2511_k2_loc.svg",
      unit: "./units/ele/units/relay_2511_k1_k2.html",
      refs: [
        {
          id: "clp-2511-k1",
          text: "2511-K1",
        },
        {
          id: "clp-2511-k2",
          text: "2511-K2",
        },
      ],
    },
  },

  /* 2700_k1 */
  {
    id: "clp-2700-k1",
    text: "Relay 2700-K1 (SB84-27-033)",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/2700_k1_loc.svg",
      unit: "./units/ele/units/relay_2700_k1.html",
      refs: [
        {
          id: "clp-2700-k1",
          text: "2700-K1",
        },
      ],
    },
  },

  /* 2921_k10_loc */
  {
    id: "clp-2921-k10",
    text: "RELAY HEATERS PILOT and COPILOT SEAT",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/2921_k10_loc.svg",
      unit: "./units/ele/units/relay_2921_k10.html",
      refs: [
        {
          id: "clp-2921-k10",
          text: "2921-K10",
        },
      ],
    },
  },

  /* 3041_k7_loc */
  {
    id: "clp-3041-k7",
    text: "RELAY HEATERS PILOT and COPILOT SEAT",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/3041_k7_loc.svg",
      unit: "./units/ele/units/relay_3041_k7.html",
      refs: [
        {
          id: "clp-3041-k7",
          text: "3041-K7",
        },
      ],
    },
  },

  /* 3042_k1_loc */
  {
    id: "clp-3042-k1-loc",
    text: "RELAY − WINDSHIELD WIPER SYSTEM 3042−K1",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/3042_k1_loc.svg",
      unit: "./units/ele/units/relay_3042_k1.html",
      refs: [
        {
          id: "clp-3042-k1",
          text: "3042-k1",
        },
      ],
    },
  },

  /* 3061_k1_k2_loc offen*/
  {
    id: "clp-3061-k1-k2-loc",
    text: "PROPELLER DEICING RELAY 1 (3061-K1) OR 2 (3061-K2)",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/3061_k1_k2_loc.svg",
      unit: "./units/uf/units/prop_isol_cont.html",
      refs: [
        {
          id: "clp-3061-k1",
          text: "3061-K1",
        },
        {
          id: "clp-3061-k2",
          text: "3061-K2",
        },
      ],
    },
  },

  /* 3400_K2_loc */
  {
    id: "clp-3400-K2-loc",
    text: "RELAY ENG #2 MAIN OIL PX IND (3400-K2)",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/3400_K2_loc.svg",
      unit: "./units/ele/units/relay_oil_px.html",
      refs: [
        {
          id: "clp-3400-k2",
          text: "3400-K2",
        },
      ],
    },
  },

  /* 3443_k7_K8_loc */
  {
    id: "clp-3443-k7-loc",
    text: "RELAY − EGPWS INSTALLATION (3443-K7 and 3443-K8)",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/3443_k7_k8_loc.svg",
      unit: "./units/ele/units/relay_3443_k7_k8.html",
      refs: [
        {
          id: "clp-3443-k7",
          text: "3443-k7",
        },
        {
          id: "clp-3443-k8",
          text: "3443-k8",
        },
      ],
    },
  },

  /* 4900_k2_loc */
  {
    id: "clp-4900-k2-loc",
    text: "RELAY 4900-k2",
    data: {
      loc: "./apps/ele/config/relay-finder/pic/loc/4900_k2_loc.svg",
      unit: "./units/ele/units/relay_4900_K2.html",
      refs: [
        {
          id: "clp-4900-k2",
          text: "4900-K2",
        },
      ],
    },
  },
];

/**
 * RELAY FINDER SVG FILE:
 *
 * Path to relay finder overview's interactive SVG file.
 */
export const SVG_PATH = "./apps/ele/config/relay-finder/pic/relay_finder_start02.svg";

/**
 * RELAY FINDER INTRO FILE:
 *
 * Path to Relay Finder's intro HTML file shown at top.
 */
export const INTRO_PATH = "./apps/ele/config/relay-finder/desc/intro.html";
