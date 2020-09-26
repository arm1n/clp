/**
 * ENGINE CHANGE DATA MODEL:
 *
 * {
 *   id: Unique id for this (sub) item
 *   text: Text shown in user interface
 *   data: {
 *     file: "./path/to/html/file.html",
 *   },
 *   nodes: [
 *     // recursive structure for children of this menu entry
 *   ]
 * }
 */
export const DATA_SET = [
  {
    id: "job-set-up-tools",
    text: "Job Set-up - Tool",
    data: {
      file: "./apps/engine/config/engine-change/desc/job-set-up-tools.html",
    },
    nodes: [
      {
        id: "tail-stand",
        text: "Tail Stand (GSB0700024)",
        data: {
          file: "./apps/engine/config/engine-change/desc/tail-stand.html",
        }
      },
			
			{
        id: "bar-pray",
        text: "Bar Pray (Lower Cowl)",
        data: {
          file: "./apps/engine/config/engine-change/desc/tail-stand.html",
        }
      },
			
			{
        id: "rench-beta-tube",
        text: "Rench - Beta Tube DAPT60-0189-00",
        data: {
          file: "./apps/engine/config/engine-change/desc/tail-stand.html",
        }
      },
			
			{
        id: "tool-ptop-pitch",
        text: "Tool-Prop Pitch Change (DAPT60-0126-00)",
        data: {
          file: "./apps/engine/config/engine-change/desc/tail-stand.html",
        }
      },
			
			{
        id: "bullets",
        text: "Bullets - Propeller Instalation (DAPT65-0078-00)",
        data: {
          file: "./apps/engine/config/engine-change/desc/tail-stand.html",
        }
      },
			
			{
        id: "torque-adapter",
        text: "Torque Adapter - Propeller (DAPT61-0015-00)",
        data: {
          file: "./apps/engine/config/engine-change/desc/tail-stand.html",
        }
      },
			
			{
        id: "prop-lifting",
        text: "Propeller Lifting Equipment (DAPT70-0021)",
        data: {
          file: "./apps/engine/config/engine-change/desc/tail-stand.html",
        }
      },
			
			{
        id: "prop-dowel",
        text: "PROP DOWEL LINER REM/INST TOOL",
        data: {
          file: "./apps/engine/config/engine-change/desc/tail-stand.html",
        }
      },
			
			{
        id: "stand-transport",
        text: "Stand - Transport/Build, Vertical (DAPT60-0165-00)",
        data: {
          file: "./apps/engine/config/engine-change/desc/tail-stand.html",
        }
      },
			
			{
        id: "kit-htc",
        text: "KIT - HTCS Ground Support (T900314-1)",
        data: {
          file: "./apps/engine/config/engine-change/desc/tail-stand.html",
        }
      },
			
			{
        id: "hoist-nac",
        text: "HOIST - NACELLE MOUNTED ENGINE",
        data: {
          file: "./apps/engine/config/engine-change/desc/tail-stand.html",
        }
      },
			
			{
        id: "eng-sling",
        text: "ENG Sling AFT/FWD",
        data: {
          file: "./apps/engine/config/engine-change/desc/tail-stand.html",
        }
      },
			
			{
        id: "eng-stand",
        text: "Engine Stand (PWC55971)",
        data: {
          file: "./apps/engine/config/engine-change/desc/tail-stand.html",
        }
      },
			
			{
        id: "oil-drain-main",
        text: "Oil Drain Main Tank PULLER (PWC64247)",
        data: {
          file: "./apps/engine/config/engine-change/desc/tail-stand.html",
        }
      },
			
			{
        id: "oil-drain-rgb",
        text: "Oil Drain RGB DRAIN FITTING (PWC38147)",
        data: {
          file: "./apps/engine/config/engine-change/desc/tail-stand.html",
        }
      },
			
			{
        id: "deep-gauge",
        text: "DEEP GAUGE",
        data: {
          file: "./apps/engine/config/engine-change/desc/tail-stand.html",
        }
      },
			
			{
        id: "standard-tools",
        text: "Standard Tools",
        data: {
          file: "./apps/engine/config/engine-change/desc/tail-stand.html",
        }
      }
    ],
  },
	
  {
    id: "remove-the-engine-and-accessoires",
    text: "Remove the Engine and Accessoires",
    data: {
      file: "./apps/engine/config/engine-change/desc/remove-the-engine-and-accessoires.html",
    },
    nodes: [      
      {
        id: "forward-upper-cowls",
        text: "Forward Upper Cowls",
        data: {
          file: "./apps/engine/config/engine-change/desc/forward-upper-cowls.html",
        }
      },
      
      {
        id: "forward-side-door",
        text: "Forward Side Door",
        data: {
          file: "./apps/engine/config/engine-change/desc/forward-side-door.html",
        }
      },
      {
        id: "lower-cowl",
        text: "Lower Cowl",
        data: {
          file: "./apps/engine/config/engine-change/desc/lower-cowl.html",
        }
      },
      {
        id: "spinner",
        text: "Spinner",
        data: {
          file: "./apps/engine/config/engine-change/desc/spinner.html",
        }
      },
      {
        id: "disconnect-the-electrical-connectors",
        text: "Disconnect the electrical connectors",
        data: {
          file: "./apps/engine/config/engine-change/desc/disconnect-the-electrical-connectors.html",
        },
        nodes: [
          {
            id: "engine-autofeather-disconnect",
            text: "Engine Autofeather Disconnect",
            data: {
              file: "./apps/engine/config/engine-change/desc/engine-autofeather-disconnect.html",
            }
          }
        ]
      },
    ],
  },
  {
    id: "transfer-the-applicable-accessoires",
    text: "Transfer the applicable Accessoires",
    data: {
      file: "./apps/engine/config/engine-change/desc/transfer-the-applicable-accessoires.html",
    },
    nodes: [],
  },
  {
    id: "install-the-applicable-engine",
    text: "Install the applicable Engine",
    data: {
      file: "./apps/engine/config/engine-change/desc/install-the-applicable-engine.html",
    },
    nodes: [],
  },
];

/**
 * ENGINE CHANGE INTRO FILE:
 *
 * Path to Engine Change's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/engine/config/engine-change/desc/intro.html";
