/**
 * CB LOCATION DATA MODEL:
 *
 * {
 *   id: unique id for this (sub) item
 *   text: text shown in user interface
 *   data: {
 *     panels: {
 *       AC: relative path for file to be loaded into the AC panel
 *       AVIONICS: relative path for file to be loaded into the AVIONICS panel
 *       LEFT: relative path for file to be loaded into the LEFT panel
 *       RIGHT: relative path for file to be loaded into the RIGHT panel
 *     },
 *     units: [
 *       // various amount of relative paths to unit files
 *       {
 *         unit: "./apps/ele/path/to/first/unit.html",
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
 *       }
 *       ...
 *     ]
 *   }
 *   nodes: [
 *     // recursive structure for children of this menu entry
 *   ]
 * }
 */
export const DATA_SET = [
  /* CHAPTER 21 */
  {
    id: "chapter_21",
    text: "Chapter 21 AIR CONDITIONING",
    data: {},
    nodes: [
      {
        id: "avionics_cooling_fans",
        text: "Avionics Cooling Fans",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_21/avionics_cooling_fans/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_21/avionics_cooling_fans/right.html",
          },
          units: [
            {
              unit: "./units/uf/units/avio_cooling_fans.html",
              /* info: { path: "./units/uf/units/epcu.html", mode: "INLINE" }, */
              
            },
          ],
        },
      },
    ],
  },

  /* CHAPTER 22 */
  {
    id: "chapter_22",
    text: "Chapter 22 Autoflight",
    data: {},
    nodes: [
      {
        id: "autoflight",
        text: "AUTOFLIGHT",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_22/autoflight/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
          units: [
            { 
							unit: "./units/wd/units/ifc_fgm.html",
							
						},
            { unit: "./units/cockpit/units/flight_guid_cont_panel.html" },
						
          ],
        },
      },
    ],
  },

  /* CHAPTER 23 */
  {
    id: "chapter_23",
    text: "Chapter 23 Communications",
    data: {},
    nodes: [
      {
        id: "audio",
        text: "Audio",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_23/audio/avionics.html",
            LEFT: "./units/ele/cb-location/desc/chapter_23/audio/left.html",
            RIGHT: null,
          },
          units: [
            { unit: "./units/cockpit/units/arcdu.html" },
            { unit: "./units/wd/units/rcau.html",
							
						},
          ],
        },
      },
      {
        id: "cvr",
        text: "CVR",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_23/cvr/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
          units: [
            { unit: "./units/cockpit/units/cvr_cont_panel.html" },
            { unit: "./units/uf/units/cvr.html" },
          ],
        },
      },
      {
        id: "flt_att",
        text: "FLT ATT",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_23/flt_att/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
          units: [
            { unit: "./units/cabin/units/fwd_flt_att_handset.html" },
            { unit: "./units/cabin/units/aft_flt_att_handset.html" },
          ],
        },
      },
      {
        id: "nvs",
        text: "NVS",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: null,
            RIGHT: "./units/ele/cb-location/desc/chapter_23/nvs/right.html",
          },
          units: [
            {
              unit: "./units/uf/units/ancu.html",
              /* info: { path: "./units/uf/units/epcu.html", mode: "INLINE" }, */
              
            },
						{
              unit: "./units/uf/units/nvs_cb_box.html",
              /* info: { path: "./units/uf/units/epcu.html", mode: "INLINE" }, */
              
            },
          ],
        },
      },
      {
        id: "pa",
        text: "PA/DPAS",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_23/pa/avionics.html",
            LEFT: null,
            RIGHT: "./units/ele/cb-location/desc/chapter_23/pa/right.html",
          },
          units: [
						{
              unit: "./units/wd/units/pass_add_amp.html",
              /* info: { path: "./units/uf/units/epcu.html", mode: "INLINE" }, */
              
            },
						{
              unit: "./units/wd/units/dpas.html",
              /* info: { path: "./units/uf/units/epcu.html", mode: "INLINE" }, */
              
            },
          ],
        },
      },
      {
        id: "vhf_com",
        text: "VHF COM",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_23/vhf_com/avionics.html",
            LEFT: "./units/ele/cb-location/desc/chapter_23/vhf_com/left.html",
            RIGHT: null,
          },
          units: [
            { unit: "./units/antenna/units/vhf_com_units.html" },
            { unit: "./units/cockpit/units/stby_com_contr.html" },
          ],
        },
      },
    ],
  },

  /* CHAPTER 24*/
  {
    id: "chapter_24",
    text: "Chapter 24 Electrical Power",
    data: {},
    nodes: [
      {
        id: "apu_gcu",
        text: "APU DC Generator & GCU",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: null,
            RIGHT: "./units/ele/cb-location/desc/chapter_24/apu_gcu/right.html",
          },
          units: [
						
						{
              unit: "./units/apu/units/apu_gen.html",
              /* info: { path: "./units/uf/units/epcu.html", mode: "INLINE" }, */
              /*access: { path: "./units/uf/units/apu_gen_loc.html", mode: "INLINE" },*/
            },
						
						{
              unit: "./units/uf/units/apu_gcu.html",
              /* info: { path: "./units/uf/units/epcu.html", mode: "INLINE" }, */
              
            },
            
            
          ],
        },
      },
      {
        id: "avio_feed",
        text: "AVIONIC FEEDERS",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: null,
            RIGHT: "./units/ele/cb-location/desc/chapter_24/avio_feed/right.html",
          },
          units: [],
        },
      },
      {
        id: "dc_gcu",
        text: "DC Starter/Generator/GCU",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: null,
            RIGHT: "./units/ele/cb-location/desc/chapter_24/dc_gcu/right.html",
          },
          units: [
            { unit: "./units/eng/units/dc_gen_all.html" },
						
						
            { unit: "./units/cockpit/units/dc_gcu.html" },
          ],
        },
      },
      {
        id: "ac_gcu",
        text: "AC Generator/GCU",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_24/ac_gcu/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_24/ac_gcu/right.html",
          },
          units: [
            { unit: "./units/eng/units/ac_gen_all.html" },
            
						{
              unit: "./units/uf/units/ac_gcu.html",
              /* info: { path: "./units/uf/units/epcu.html", mode: "INLINE" }, */
              
            },
          ],
        },
      },
      {
        id: "epcu",
        text: "Electrical Power Control Unit (EPCU)",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: null,
            RIGHT: "./units/ele/cb-location/desc/chapter_24/epcu/right.html",
          },
					units: [
            
            
						{
              unit: "./units/cockpit/units/epcu.html",
              /* info: { path: "./units/uf/units/epcu.html", mode: "INLINE" }, */
              
            },
          ],
        },
      },
      {
        id: "batt",
        text: "MAIN & STANDBY Battery",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: null,
            RIGHT: "./units/ele/cb-location/desc/chapter_24/batt/right.html",
          },
          units: [
            { unit: "./units/ele/units/batt_main.html" },
            { unit: "./units/ele/units/batt_aux.html" },
            { unit: "./units/ele/units/batt_stby.html" },
          ],
        },
      },
    ],
  },

  /* CHAPTER 26 */
  {
    id: "chapter_26",
    text: "Chapter 26 Fire Protection",
    data: {},
    nodes: [
      {
        id: "aft_hrb",
        text: "Aft High-Rate Fire-Bottle",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_26/aft_hrb/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_26/aft_hrb/right.html",
          },
          units: [{ unit: "./units/fire/units/aft_highrate_firebottle.html" }],
        },
      },
      {
        id: "bagg_smoke_det",
        text: "Baggage Smoke Detector",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: null,
            RIGHT: "./units/ele/cb-location/desc/chapter_26/bagg_smoke_det/right.html",
          },
          units: [{ unit: "./units/fire/units/fwd_bagg_smoke_det.html" }],
        },
      },
      {
        id: "cargo_smoke_det",
        text: "Cargo Smoke Detector",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_26/cargo_smoke_det/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_26/cargo_smoke_det/right.html",
          },
          units: [{ unit: "./units/fire/units/aft_bagg_smoke_det.html" }],
        },
      },
      {
        id: "fire_cont_amp",
        text: "Fire Control Amplifier",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_26/fire_cont_amp/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_26/fire_cont_amp/right.html",
          },
          units: [

						{
              unit: "./units/wd/units/fire_cont_amp.html",
              /* info: { path: "./units/uf/units/epcu.html", mode: "INLINE" }, */
              
            },
          ],
        },
      },
      {
        id: "fwd-hrb",
        text: "Forward High-Rate Fire-Bottle",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_26/fwd_hrb/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_26/fwd_hrb/right.html",
          },
          units: [{ unit: "./units/fire/units/fwd_highrate_firebottle.html" }],
        },
      },
      {
        id: "lav_smoke_det",
        text: "Lavatory Smoke Detector",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: null,
            RIGHT: "./units/ele/cb-location/desc/chapter_26/lav_smoke_det/right.html",
          },
          units: [{ unit: "./units/fire/units/lav_smoke_det.html" }],
        },
      },
      {
        id: "lr_fire_ext_btl",
        text: "Low-Rate Fire-Extinguisher Bottle",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_26/lr_fire_ext_btl/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_26/lr_fire_ext_btl/right.html",
          },
          units: [{ unit: "./units/fire/units/low_rate_fire_bottle.html" }],
        },
      },
      {
        id: "aft_vent_vlv",
        text: "Aft Bagg.−Comp. Vent Shut−Off VLV",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_26/aft_vent_vlv/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_26/aft_vent_vlv/right.html",
          },
          units: [
            { unit: "./units/fire/units/aft_bagg_vent_inl.html" },
            { unit: "./units/fire/units/aft_bagg_vent_outl.html" },
          ],
        },
      },
    ],
  },

  /* CHAPTER 27 */
  {
    id: "chapter_27",
    text: "Chapter 27 Flight Controls",
    data: {},
    nodes: [
      {
        id: "fcu",
        text: "Flap Control Unit (FCU)",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_27/fcu/left.html",
            RIGHT: null,
          },
					units: [
						{
              unit: "./units/uf/units/flap_cont_unit.html",
              /* info: { path: "./units/uf/units/epcu.html", mode: "INLINE" }, */
              
            },
          ],
        },
      },
      {
        id: "fcecu",
        text: "Flight Control Electronic Control Unit (FCECU)",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_27/fcecu/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_27/fcecu/right.html",
          },
					units: [
						{
              unit: "./units/uf/units/fcecu.html",
              /* info: { path: "./units/uf/units/epcu.html", mode: "INLINE" }, */
              
            },
          ],
        },
      },
      {
        id: "rud_trim_act",
        text: "RUD Trim Actuator",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_27/rud_trim_act/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_27/rud_trim_act/right.html",
          },
          units: [{ unit: "./units/fc/units/rud_trim_act.html" }],
        },
      },
      {
        id: "stall_wng",
        text: "Stall Warning",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_27/stall_wng/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
					units: [
						{
              unit: "./units/wd/units/ifc_spm.html",
              /* info: { path: "./units/uf/units/epcu.html", mode: "INLINE" }, */
              
            },
          ],
        },
      },
      {
        id: "stick_pusher_act",
        text: "Stick Pusher Actuator",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_27/stick_pusher_act/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
          units: [{ unit: "./units/fc/units/stick_pusher.html" }],
        },
      },
      {
        id: "stick_shaker",
        text: "Stick Shaker",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_27/stick_shaker/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
          units: [{ unit: "./units/cockpit/units/stick_shaker.html" }],
        },
      },
      {
        id: "yaw_damper",
        text: "Yaw Damper",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_27/yaw_damper/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
					units: [
						{
              unit: "./units/fc/units/yaw_damper_act.html",
              /* info: { path: "./units/uf/units/epcu.html", mode: "INLINE" }, */
              
            },
          ],
        },
      },
    ],
  },

  /* CHAPTER 29 */
  {
    id: "chapter_29",
    text: "Chapter 29 Hydraulic Power",
    data: {},
    nodes: [
      {
        id: "no3_hyd_sys_px",
        text: "No.3 Hydraulic System Pressure",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: null,
            RIGHT: "./units/ele/cb-location/desc/chapter_29/no3_hyd_sys_px/right.html",
          },
          units: [{ unit: "./units/hyd/units/hyd3_pxsw_b.html" }],
        },
      },
      {
        id: "no3_hyd_sys_motor",
        text: "No. 3 Hydraulic System DC Motor",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: null,
            RIGHT: "./units/ele/cb-location/desc/chapter_29/no3_hyd_sys_motor/right.html",
          },
          units: [{ unit: "./units/hyd/units/dc_motor_pump.html" }],
        },
      },
    ],
  },

  /* CHAPTER 30 */
  {
    id: "chapter_30",
    text: "Chapter 30 Ice and Rain Protection",
    data: {},
    nodes: [
      {
        id: "aic",
        text: "Anti-Ice Controller (AIC)",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_30/aic/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_30/aic/right.html",
          },
					units: [
						{
              unit: "./units/wd/units/anti_ice_cont.html",
              /* info: { path: "./units/uf/units/epcu.html", mode: "INLINE" }, */
              
            },
          ],
        },
      },
      {
        id: "idp",
        text: "Ice Detector Probe (IDP)",
        data: {
          panels: {
            AC: "./units/ele/cb-location/desc/chapter_30/idp/ac.html",
            AVIONICS: null,
            LEFT: null,
            RIGHT: null,
          },
          units: [{ unit: "./units/deice/units/ice_det_probe.html" }],
        },
      },
      {
        id: "pdmt",
        text: "Timer Monitor Control Unit (TMCU)",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_30/pdmt/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_30/pdmt/right.html",
          },
					units: [
						{
              unit: "./units/uf/units/tmcu.html",
              /* info: { path: "./units/uf/units/epcu.html", mode: "INLINE" }, */
             
            },
          ],
        },
      },
      {
        id: "tmu",
        text: "Airframe Timer and Monitor Unit (TMU)",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_30/tmu/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_30/tmu/right.html",
          },
					units: [
						{
              unit: "./units/wd/units/tmu.html",
              /* info: { path: "./units/uf/units/epcu.html", mode: "INLINE" }, */
              /* access: { path: "./units/wd/units/tmu_loc.html", mode: "INLINE" }, */
            },
          ],
        },
      },
    ],
  },

  /* CHAPTER 31 */
  {
    id: "chapter_31",
    text: "Chapter 31 Indicating & Recording",
    data: {},
    nodes: [
      {
        id: "clock",
        text: "Clock",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_31/clock/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
          units: [{ unit: "./units/cockpit/units/clock.html" }],
        },
      },
      {
        id: "fdr",
        text: "FDR",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_31/fdr/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
          units: [{ unit: "./units/uf/units/fdr.html" }],
        },
      },
      {
        id: "tows",
        text: "Take-off Warning System",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_31/tows/avionics.html",
            LEFT: "./units/ele/cb-location/desc/chapter_31/tows/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_31/tows/right.html",
          },
          units: [],
        },
      },
      {
        id: "acu",
        text: "Advisory Control Unit (ACU)",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_31/acu/left.html",
            RIGHT: null,
          },
          units: [{ unit: "./units/cockpit/units/adv_cont_unit.html" }],
        },
      },
    ],
  },

  /* CHAPTER 32*/
  {
    id: "chapter_32",
    text: "Chapter 32 Landing Gear",
    data: {},
    nodes: [
      {
        id: "anti_skid",
        text: "Anti-Skid",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: null,
            RIGHT: "./units/ele/cb-location/desc/chapter_32/anti_skid/right.html",
          },
          units: [
            { unit: "./units/gear/units/wheel_speed_tx.html" },
            
						{
              unit: "./units/uf/units/anti_skid_unit.html",
              /* info: { path: "./units/uf/units/epcu.html", mode: "INLINE" }, */
              
            },
          ],
        },
      },
      {
        id: "nws",
        text: "Nosewheel Steering",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_32/nws/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_32/nws/right.html",
          },
          units: [
            { unit: "./units/gear/units/steer_cont_unit.html" },
            { unit: "./units/gear/units/nlg_steer_manif.html" },
          ],
        },
      },
      {
        id: "pseu",
        text: "Proximity Sensor Electronic-Unit (PSEU)",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_32/pseu/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_32/pseu/right.html",
          },
					
					units: [
						{
              unit: "./units/wd/units/pseu.html",
              
              
            },
          ],
        },
      },
      {
        id: "wow",
        text: "WEIGHT ON WHEEL (WOW)",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_32/wow/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_32/wow/right.html",
          },
          units: [],
        },
      },
    ],
  },

  /* CHAPTER 33 */
  {
    id: "chapter_33",
    text: "Chapter 33 Lights",
    data: {},
    nodes: [
      {
        id: "emergency_light",
        text: "Emergency-Light",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_33/emergency_light/left.html",
            RIGHT: null,
          },
          units: [{ unit: "./units/lights/units/emr_power_supply.html" }],
        },
      },
      {
        id: "light",
        text: "EXTERIOR LIGHTS",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_33/light/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_33/light/right.html",
          },
          units: [],
        },
      },
    ],
  },

  /* CHAPTER 34 */
  {
    id: "chapter_34",
    text: "Chapter 34 Navigation",
    data: {},
    nodes: [
      {
        id: "adf",
        text: "ADF",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_34/adf/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
					units: [
						{
              unit: "./units/antenna/units/adf_units.html",
              /* info: { path: "./units/wd/units/adf_units_info.html", mode: "INLINE" }, */
              
            },
          ],
        },
      },
      {
        id: "adu",
        text: "ADU",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_34/adu/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
          units: [{ unit: "./units/cockpit/units/adc.html" }],
        },
      },
      {
        id: "ahrs",
        text: "AHRS",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_34/ahrs/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
					units: [
						{
              unit: "./units/uf/units/ahru.html",
              /* info: { path: "./units/wd/units/adf_units_info.html", mode: "INLINE" }, */
              
            },
          ],
        },
      },
      {
        id: "ahrs_cont",
        text: "AHRS CONT",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_34/ahrs_cont/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
          units: [{ unit: "./units/cockpit/units/ahrs_cont_panel.html" }],
        },
      },
      {
        id: "atc",
        text: "ATC",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_34/atc/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
					units: [
						{
              unit: "./units/antenna/units/atc_units.html",
              /* info: { path: "./units/wd/units/adf_units_info.html", mode: "INLINE" }, */
              
            },
          ],
        },
      },
      {
        id: "display",
        text: "DISPLAY",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_34/display/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
          units: [{ unit: "./units/cockpit/units/display_unit.html" }],
        },
      },
      {
        id: "display_cont",
        text: "DISPLAY CONT",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_34/display_cont/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
          units: [
            { unit: "./units/cockpit/units/efis_cont_panel.html" },
            { unit: "./units/cockpit/units/esid_cont_panel.html" },
          ],
        },
      },
      {
        id: "dme",
        text: "DME",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_34/dme/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
          units: [{ unit: "./units/antenna/units/dme_units.html" }],
        },
      },
      {
        id: "fms",
        text: "FMS",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_34/fms/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
          units: [{ unit: "./units/cockpit/units/fms.html" }],
        },
      },
      {
        id: "gwps",
        text: "GPWS",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_34/gwps/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
          units: [{ unit: "./units/wd/units/egpws.html" }],
        },
      },
      {
        id: "isi",
        text: "Integrated Standby Instrument (ISI)",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_34/isi/left.html",
            RIGHT: null,
          },
          units: [{ unit: "./units/cockpit/units/isi.html" }],
        },
      },
      {
        id: "rad_alt",
        text: "RAD ALT",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_34/rad_alt/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
          units: [{ unit: "./units/antenna/units/rad_alt_units.html" }],
        },
      },
      {
        id: "tcas",
        text: "TCAS",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_34/tcas/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
          units: [{ unit: "./units/antenna/units/tcas_units_loc.html" }],
        },
      },
      {
        id: "vhf_nav",
        text: "VHF NAV",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_34/vhf_nav/avionics.html",
            LEFT: "./units/ele/cb-location/desc/chapter_34/vhf_nav/left.html",
            RIGHT: null,
          },
          units: [{ unit: "./units/antenna/units/vhf_nav_resc.html" }],
        },
      },
      {
        id: "weather_radar",
        text: "WEATHER RADAR",
        data: {
          panels: {
            AC: null,
            AVIONICS: "./units/ele/cb-location/desc/chapter_34/weather_radar/avionics.html",
            LEFT: null,
            RIGHT: null,
          },
          units: [{ unit: "./units/antenna/units/wx_antenna.html" }],
        },
      },
    ],
  },

  /* CHAPTER 49 */
  {
    id: "chapter_49",
    text: "Chapter 49 Auxiliary Power Unit",
    data: {},
    nodes: [
      {
        id: "apu",
        text: "APU",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_49/apu/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_49/apu/right.html",
          },
          units: [{ unit: "./units/uf/units/apu_gcu.html" }],
        },
      },
    ],
  },

  /* CHAPTER 61 */
  {
    id: "chapter_61",
    text: "Chapter 61 Propellers",
    data: {},
    nodes: [
      {
        id: "osg",
        text: "Overspeed Governor (OSG)",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_61/osg/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_61/osg/right.html",
          },
          units: [{ unit: "./units/eng/units/prop_osg.html" }],
        },
      },
      {
        id: "bft",
        text: "Pitch-Control-Unit (PCU)",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_61/bft/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_61/bft/right.html",
          },
          units: [{ unit: "./units/eng/units/pcu.html" }],
        },
      },
      {
        id: "pecu",
        text: "Propeller Electronic Control Unit (PEC)",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_61/pecu/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_61/pecu/right.html",
          },
          units: [{ unit: "./units/eng/units/pec.html" }],
        },
      },
    ],
  },

  /* CHAPTER 73 */
  {
    id: "chapter_73",
    text: "Chapter 73 Engine Fuel & Control",
    data: {},
    nodes: [
      {
        id: "fadec",
        text: "FADEC",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_73/fadec/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_73/fadec/right.html",
          },
          units: [{ unit: "./units/eng/units/fadec.html" }],
        },
      },
      {
        id: "fmu",
        text: "Fuel Metering Unit (FMU)",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_73/fmu/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_73/fmu/right.html",
          },
          units: [{ unit: "./units/eng/units/fmu.html" }],
        },
      },
    ],
  },

  /* CHAPTER 74 */
  {
    id: "chapter_74",
    text: "Chapter 74 Ignition",
    data: {},
    nodes: [
      {
        id: "ignition",
        text: "Ignition",
        data: {
          panels: {
            AC: null,
            AVIONICS: null,
            LEFT: "./units/ele/cb-location/desc/chapter_74/ignition/left.html",
            RIGHT: "./units/ele/cb-location/desc/chapter_74/ignition/right.html",
          },
          units: [{ unit: "./units/eng/units/ign_all.html" }],
        },
      },
    ],
  },
];

/**
 * CB LOCATION SVG FILE:
 *
 * Path to CB Location's SVG file in the middle.
 */
export const SVG_PATH = "./apps/ele/config/cb-location/pic/cb_cockpit_view.svg";

/**
 * CB LOCATION INTRO FILE:
 *
 * Path to CB Location's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/ele/config/cb-location/desc/intro.html";
