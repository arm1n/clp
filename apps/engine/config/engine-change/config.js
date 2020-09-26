/**
 * ENGINE CHANGE DATA MODEL:
 *
 * {
 *   id: unique id for this (sub) item
 *   text: text shown in user interface
 *   data: {
 *     file: "./path/to/html/file.html",
 *   },
 *   nodes: [
 *     // recursive structure for children of this menu entry
 *   ]
 * }
 */
export const DATA_SET = [

	/** Job Set-up - Tool */
	{
		id: "job-set-up-tools",
		text: "Job Set-up - Tool",
		data: {
			file: "./apps/engine/config/engine-change/desc/job-set-up-tools.html",
		},
		nodes: [
			{
				id: "tail-stand",
				text: "Tail Stand<br> (GSB0700024)",
				data: {
					file: "./apps/engine/config/engine-change/desc/tail-stand.html",
				}
      },

			{
				id: "bar-pray",
				text: "Bar Pray (Lower Cowl)",
				data: {
					file: "./apps/engine/config/engine-change/desc/bar-pray.html",
				}
      },

			{
				id: "rench-beta-tube",
				text: "Rench - Beta Tube<br> DAPT60-0189-00",
				data: {
					file: "./apps/engine/config/engine-change/desc/rench-beta-tube.html",
				}
      },

			{
				id: "tool-prop-pitch",
				text: "Tool-Prop Pitch Change<br> (DAPT60-0126-00)",
				data: {
					file: "./apps/engine/config/engine-change/desc/tool-prop-pitch.html",
				}
      },

			{
				id: "tool-bullets",
				text: "Bullets - Propeller Instalation<br> (DAPT65-0078-00)",
				data: {
					file: "./apps/engine/config/engine-change/desc/tool-bullets.html",
				}
      },

			{
				id: "tool-torque-adapter",
				text: "Torque Adapter - Propeller<br> (DAPT61-0015-00)",
				data: {
					file: "./apps/engine/config/engine-change/desc/tool-torque-adapter.html",
				}
      },

			{
				id: "tool-prop-lifting",
				text: "Propeller Lifting Equipment<br> (DAPT70-0021)",
				data: {
					file: "./apps/engine/config/engine-change/desc/tool-prop-lifting.html",
				}
      },

			{
				id: "tool-prop-dowel",
				text: "Prop Dowel Liner Rem/Inst Tool",
				data: {
					file: "./apps/engine/config/engine-change/desc/tool-prop-dowel.html",
				}
      },

			{
				id: "tool-stand-transport",
				text: "Stand - Transport/Build, Vertical<br> (DAPT60-0165-00)",
				data: {
					file: "./apps/engine/config/engine-change/desc/tool-stand-transport.html",
				}
      },

			{
				id: "tool-kit-htc",
				text: "KIT - HTCS Ground Support<br> (T900314-1)",
				data: {
					file: "./apps/engine/config/engine-change/desc/tool-kit-htc.html",
				}
      },

			{
				id: "tool-hoist-nac",
				text: "Hoist - Nacelle Mounted Engine",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-eng-hoist.html",
				}
      },

			{
				id: "tool-eng-sling",
				text: "ENG Sling AFT/FWD",
				data: {
					file: "./apps/engine/config/engine-change/desc/tool-eng-sling.html",
				}
      },

			{
				id: "tool-eng-stand",
				text: "Engine Stand<br> (PWC55971)",
				data: {
					file: "./apps/engine/config/engine-change/desc/tool-eng-stand.html",
				}
      },

			{
				id: "tool-oil-drain-main",
				text: "Oil Drain Main Tank PULLER<br> (PWC64247)",
				data: {
					file: "./apps/engine/config/engine-change/desc/tool-oil-drain-main.html",
				}
      },

			{
				id: "tool-oil-drain-rgb",
				text: "Oil Drain RGB DRAIN FITTING<br> (PWC38147)",
				data: {
					file: "./apps/engine/config/engine-change/desc/tool-oil-drain-rgb.html",
				}
      },

			{
				id: "tool-deep-gauge",
				text: "Deep Gauge (Standard Tool)",
				data: {
					file: "./apps/engine/config/engine-change/desc/tool-deep-gauge.html",
				}
      },

			{
				id: "standard-torquemeter",
				text: "Standard Torquemeter",
				data: {
					file: "./apps/engine/config/engine-change/desc/standard-tools.html",
				}
      }
    ],
  },

	/** Remove the Engine and Accessoires  */
	{
		id: "remove-the-engine-and-accessoires",
		text: "Remove the Engine and Accessoires",
		data: {
			file: "./apps/engine/config/engine-change/desc/remove-the-engine-and-accessoires.html",
		},
		nodes: [
			{
				id: "rem-forward-upper-cowls",
				text: "Forward Upper Cowls",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-fwd-upper-cowls.html",
				}
      },

			{
				id: "rem-forward-side-door",
				text: "Forward Side Door",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-fwd-side-door.html",
				}
      },
			{
				id: "rem-lower-cowl",
				text: "Lower Cowl",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-lower-cowl.html",
				}
      },
			{
				id: "rem-spinner",
				text: "Spinner",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-prop-spinner.html",
				}
      },
						/**
						* untermenü 1 Disconnect the electrical connectors */
			{
				id: "disconnect-the-electrical-connectors",
				text: "Disconnect the electrical connectors",
				data: {
					file: "./apps/engine/config/engine-change/desc/menu-electrical-connectors.html",
				},
				nodes: [
					{
						id: "rem-p54-info",
						text: "Engine autofeather disconnect (P54)",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-p54-info.html",
						}
          },
					{
						id: "rem-fadec-info",
						text: "FADEC A (PL40) and B (PL50)",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-fadec-info.html",
						}
          },
					{
						id: "rem-fuel-temp-pl67",
						text: "Fuel temperature (fuel heater) (PL67)",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-fuel-temp-pl67.html",
						}
          },
					{
						id: "rem-flowmeter-pl62",
						text: "Fuel flowmeter (PL62)",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-flowmeter-pl62.html",
						}
          },
					{
						id: "rem-prop-bal-p65",
						text: "Propeller balance (RGB) (P65)",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-prop-bal-p65.html",
						}
          },
					{
						id: "rem-fmu-p60",
						text: "FMU shutdown solenoid (P60)",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-fmu-p60.html",
						}
          },
					{
						id: "rem-pec-conn",
						text: "PEC (P19, P20, P21)",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-pec-conn.html",
						}
          },
					{
						id: "rem-ac-gen-p1",
						text: "AC generator control (P1, P2)",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-ac-gen-p1.html",
						}
          },
					{
						id: "rem-dc-gen-j1",
						text: "DC generator control (J1)",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-dc-gen-j1.html",
						}
          },
					{
						id: "rem-air-inlet-p1",
						text: "Air inlet de-ice (P1)",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-air-inlet-p1.html",
						}
          },
					{
						id: "rem-prop-deice-p22",
						text: "Propeller de-ice (P22)",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-prop-deice-p22.html",
						}
          },
					{
						id: "rem-aux-feather-pump-pl80",
						text: "Auxiliary feather pump (PL80)",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-aux-feather-pump-pl80.html",
						}
          },
        ]
      },
						/**
						* untermenü REM 2 disconnect-or-remove-the-pneumatic-ducts */
			{
				id: "disconnect-or-remove-the-pneumatic-ducts",
				text: "Disconnect or remove the pneumatic ducts",
				data: {
					file: "./apps/engine/config/engine-change/desc/menu-pneumatic-ducts.html",
				},
				nodes: [
					{
						id: "rem-p22-lp-duct",
						text: "Remove the P2.2 LP to LPSOV Duct",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-p22-lp-duct.html",
						}
          },
					{
						id: "rem-p22-hbov-duct",
						text: "Remove the P2.2 HBOV straight duct",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-p22-hbov-duct.html",
						}
          },
					{
						id: "rem-p27-duct",
						text: "Disconnect the P2.7 duct from the P2.7 adapter",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-p27-duct.html",
						}
          },
					{
						id: "rem-p3-hpsov",
						text: "Remove the P3.0 HP to HPSOV pneumatic duct",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-p3-hpsov.html",
						}
          },
        ]
      },
						/**
						* untermenü 3 remove-or-disconnect-the-electrical-equipment */
			{
				id: "remove-or-disconnect-the-electrical-equipment",
				text: "Remove or disconnect the electrical equipment",
				data: {
					file: "./apps/engine/config/engine-change/desc/menu-electrical-equipment.html",
				},
				nodes: [
					{
						id: "rem-ac-gen",
						text: "Remove the AC Generator",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-ac-gen.html",
						}
					},

					{
						id: "rem-dc-gen",
						text: "Remove the DC starter-Generator",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-dc-gen.html",
						}
      		},

					{
						id: "rem-ground-cables-rgb",
						text: "Disconnect the ground cables from the RGB",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-ground-cables-rgb.html",
						}
      },
        ]
      },
						/**
						* untermenü 4 "disconnect-the-oil-fuel-and-hydraulic-systems */
			{
				id: "disconnect-the-oil-fuel-and-hydraulic-systems",
				text: "Disconnect the oil, fuel and hydraulic systems",
				data: {
					file: "./apps/engine/config/engine-change/desc/menu-oil-fuel-hyd.html",
				},
				nodes: [
					{
						id: "disc-oil-cooler-lines",
						text: "Disconnect the oil cooler lines from the engine",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-oil-cooler-lines.html",
						}
          },
					{
						id: "rem-motive-flow-line",
						text: "Remove the Fuel motive flow line from the FMU",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-motive-flow-line.html",
						}
          },
					{
						id: "rem-fuel-feed-line",
						text: "Remove the Fuel feed line from the FMU",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-fuel-feed-line.html",
						}
          },
					{
						id: "rem-hyd-pump-drain",
						text: "Disconnect the drain tube from the Hydraulic Pump",
						data: {
							file: "./apps/engine/config/engine-change/desc/rem-hyd-pump-drain.html",
						}
          },
        ]
      },
						/**
						* standart */
			{
				id: "rem-eng-oil",
				text: "Draining of the Engine Oil System",
				data: {
					file: "./apps/engine/config/engine-change/desc/rem-eng-oil.html",
				}
      },
			{
				id: "rem-beta-tubes",
				text: "Beta Tubes",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-beta-tubes.html",
				}
      },
			{
				id: "rem-propeller",
				text: "Propeller",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-propeller.html",
				}
      },
			{
				id: "rem-brush-block",
				text: "Brush Block",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-brush-block.html",
				}
      },
			{
				id: "rem-depressurize-htc",
				text: "Depressurize the HTCS",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-htcs-serv.html",
				}
      },
			{
				id: "rem-engine-hoist",
				text: "Installation of the Engine Hoist",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-eng-hoist.html",
				}
      },
			{
				id: "rem-isolator-mounts-fwd",
				text: "FWD Isolator Mounts (LH and RH)",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-mounts-fwd.html",
				}
      },
		
			{
				id: "rem-isolator-mounts-fwd-top",
				text: "FWD TOP Isolator Mounts",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-mounts-fwd-top.html",
				}
      },
			{
				id: "rem-isolator-mounts-aft",
				text: "AFT Isolator Mounts (LH and RH)",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-mounts-aft.html",
				}
      },
			
			{
				id: "rem-engine-from-the-nacelle",
				text: "Engine from the Nacelle",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-engine-nacelle.html",
				}
      },
			{
				id: "info-eng-stand",
				text: "Engine on Engine Stand",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-eng-stand.html",
				}
      },


    ],
  },

	/** Transfer the applicable Accessoires */
	{
		id: "transfer-the-applicable-accessoires",
		text: "Transfer the applicable Accessoires",
		data: {
			file: "./apps/engine/config/engine-change/desc/transfer-the-applicable-accessoires.html",
		},
		nodes: [
			{
				id: "tf-air-intake-heater",
				text: "Air Intake Adapter/Heater",
				data: {
					file: "./apps/engine/config/engine-change/desc/transf-air-intake-heater.html",
				}
      },

			{
				id: "tf-p27-duct",
				text: "P2.7 HBOV Duct",
				data: {
					file: "./apps/engine/config/engine-change/desc/transf-p27-duct.html",
				}
      },

			{
				id: "tf-prop-cont-unit",
				text: "Propeller Control Unit",
				data: {
					file: "./apps/engine/config/engine-change/desc/transf-prop-cont-unit.html",
				}
      },

			{
				id: "tf-overspeed-governor",
				text: "Overspeed Governor",
				data: {
					file: "./apps/engine/config/engine-change/desc/transf-overspeed-governor.html",
				}
      },

			{
				id: "tf-feathering-pump",
				text: "Feathering Pump",
				data: {
					file: "./apps/engine/config/engine-change/desc/transf-feathering-pump.html",
				}
      },

			{
				id: "tf-oil-to-fuel-heater",
				text: "Oil to Fuel Heat Exchanger",
				data: {
					file: "./apps/engine/config/engine-change/desc/transf-oil-to-fuel-heater.html",
				}
      },

			{
				id: "tf-low-fuel-press-switch",
				text: "Low Fuel Pressure Switch",
				data: {
					file: "./apps/engine/config/engine-change/desc/transf-low-fuel-press-switch.html",
				}
      },

			{
				id: "tf-fuel-flow-meter",
				text: "Fuel Flow-meter",
				data: {
					file: "./apps/engine/config/engine-change/desc/transf-fuel-flow-meter.html",
				}
      },

			{
				id: "tf-exhaust-nozzle",
				text: "Exhaust Nozzle",
				data: {
					file: "./apps/engine/config/engine-change/desc/transf-exhaust-nozzle.html",
				}
      },
		],
  },

	/** Install the applicable Engine */
	{
		id: "install-the-applicable-engine",
		text: "Install the applicable Engine",
		data: {
			file: "./apps/engine/config/engine-change/desc/install-the-applicable-engine.html",
		},
		nodes: [
			{
				id: "inst-eng-to-nac",
				text: "Engine to the Nacelle",
				data: {
					file: "./apps/engine/config/engine-change/desc/inst-eng-to-nac.html",
				}
      },

			{
				id: "inst-isolator-mounts-fwd",
				text: "FWD Isolator Mounts (LH and RH)",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-mounts-aft.html",
				}
      },

			{
				id: "inst-isolator-mounts-fwd-top",
				text: "FWD TOP Isolator Mount",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-mounts-fwd-top.html",
				}
      },

			{
				id: "inst-isolator-mounts-aft",
				text: "AFT Isolator Mounts (LH and RH)",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-mounts-aft.html",
				}
      },

			{
				id: "eng-hoist",
				text: "Engine Hoist (Removal)",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-eng-hoist.html",
				}
      },

			{
				id: "serv-htcs",
				text: "Servicing of the HTCS System",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-htcs-serv.html",
				}
      },
			/**
			* untermenü 1 Install or connect the electrical equipment  */
			{
				id: "install-or-connect-the-electrical-equipment",
				text: "Install or connect the electrical equipment",
				data: {
					file: "./apps/engine/config/engine-change/desc/menu-electrical-equipment.html",
				},
				nodes: [
					{
						id: "install-ac-Generator",
						text: "Install of the AC Generator",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-ac-gen.html",
						}
					},

					{
						id: "install-dc-Generator",
						text: "Install of the DC starter-Generator",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-dc-gen.html",
						}
      		},

					{
						id: "connect-the-ground-cables-at-the-rgb",
						text: "Connect the ground cables at the RGB",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-ground-cables-rgb.html",
						}
      },
        ]
      },
			/**
			* untermenü 2 Connect the electrical connectors  */
			{
				id: "Connect-the-electrical-connectors",
				text: "Connect the electrical connectors",
				data: {
					file: "./apps/engine/config/engine-change/desc/menu-electrical-connectors.html",
				},
				nodes: [
					{
						id: "inst-autofeather-disconnect-p54",
						text: "Engine Autofeather (P54)",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-p54-info.html",
						}
          },
					{
						id: "inst-fadec-conn",
						text: "FADEC A (PL40) and B (PL50)",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-fadec-info.html",
						}
          },
					{
						id: "inst-fuel-heater-pl67",
						text: "Fuel temperature (fuel heater) (PL67)",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-fuel-temp-pl67.html",
						}
          },
					{
						id: "inst-flowmeter-pl62",
						text: "Fuel flowmeter (PL62)",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-flowmeter-pl62.html",
						}
          },
					{
						id: "inst-prop-bal-p65",
						text: "Propeller balance (RGB) (P65)",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-prop-bal-p65.html",
						}
          },
					{
						id: "inst-fmu-p60",
						text: "FMU shutdown solenoid (P60)",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-fmu-p60.html",
						}
          },
					{
						id: "inst-pec-conn",
						text: "PEC (P19, P20, P21)",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-pec-conn.html",
						}
          },
					{
						id: "inst-ac-gen-p1",
						text: "AC generator control (P1, P2)",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-ac-gen.html",
						}
          },
					{
						id: "inst-dc-gen-j1",
						text: "DC generator control (J1)",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-dc-gen.html",
						}
          },
					{
						id: "inst-air-inlet-p1",
						text: "Air inlet de-ice (P1)",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-air-inlet-p1.html",
						}
          },
					{
						id: "inst-prop-deice-p22",
						text: "Propeller de-ice (P22)",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-prop-deice-p22.html",
						}
          },
					{
						id: "afp-pl80",
						text: "Auxiliary feather pump (PL80)",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-aux-feather-pump-pl80.html",
						}
          },
        ]
      },
			/**
			* untermenü 3 Connect or install the pneumatic ducts */
			{
				id: "connect-the-electrical-connectors",
				text: "Connect or install the pneumatic ducts",
				data: {
					file: "./apps/engine/config/engine-change/desc/menu-pneumatic-ducts.html",
				},
				nodes: [
					{
						id: "inst-p22-lp-duct",
						text: "Install the P2.2 LP to LPSOV Duct",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-p22-lp-duct.html",
						}
          },
					{
						id: "inst-p22-duct",
						text: "Install the P2.2 HBOV straight duct",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-p22-hbov-duct.html",
						}
          },
					{
						id: "inst-p27-duct",
						text: "Connect the P2.7 duct to the P2.7 adapter",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-p27-duct.html",
						}
          },
					{
						id: "inst-p3-hpsov",
						text: "Install the P3.0 HP to HPSOV pneumatic duct ",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-p3-hpsov.html",
						}
          },
        ]
      },
			/**
			* untermenü 4 Connect the oil, fuel and hydraulic systems */
			{
				id: "connect-the-oil-fuel-and-hydraulic-systems",
				text: "Connect the oil, fuel and hydraulic systems",
				data: {
					file: "./apps/engine/config/engine-change/desc/menu-oil-fuel-hyd.html",
				},
				nodes: [
					{
						id: "conn-oil-cooler-lines",
						text: "Connect the oil cooler lines to the engine",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-oil-cooler-lines.html",
						}
          },
					{
						id: "inst-fuel-motive-flow",
						text: "Install the Fuel motive flow line to the FMU",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-motive-flow-line.html",
						}
          },
					{
						id: "inst-fuel-feed-line",
						text: "Install the Fuel feed line to the FMU",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-fuel-feed-line.html",
						}
          },
					{
						id: "conn-hyd-pump-drain",
						text: "Connect the drain tube to the Hydraulic Pump",
						data: {
							file: "./apps/engine/config/engine-change/desc/inst-hyd-pump-drain.html",
						}
          },
        ]
      },
			/**
			* ende untermenü*/
			{
				id: "filling-engine-oil",
				text: "Filling of the Engine Oil System",
				data: {
					file: "./apps/engine/config/engine-change/desc/filling-engine-oil.html",
				}
      },

			{
				id: "inst-propeller",
				text: "Propeller",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-propeller.html",
				}
      },

			{
				id: "inst-beta-ubes",
				text: "Beta Tubes",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-beta-tubes.html",
				}
      },

			{
				id: "inst-propeller-spinner",
				text: "Propeller Spinner",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-prop-spinner.html",
				}
      },

			{
				id: "inst-brush-block",
				text: "Brush Block",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-brush-block.html",
				}
      },

			{
				id: "inst-lowerc-owl",
				text: "Lower Cowl",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-lower-cowl.html",
				}
      },

			{
				id: "inst-forward-upper-cowls",
				text: "Forward Upper Cowls",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-fwd-upper-cowls.html",
				}
      },

			{
				id: "inst-forward-side-door",
				text: "Forward Side Door",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-fwd-side-door.html",
				}
      },

			{
				id: "operational-test",
				text: "Operational Test after a Component change",
				data: {
					file: "./apps/engine/config/engine-change/desc/info-eng-ops-test.html",
				}
      },



		],
  },

];

/**
 * ENGINE CHANGE INTRO FILE:
 *
 * Path to Engine Change's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/engine/config/engine-change/desc/intro.html";
