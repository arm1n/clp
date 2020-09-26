import variables from "styles/_variables.scss";

// parse SASS variables and convert them to numbers
export const SM = parseFloat(variables.breakpoint_sm);
export const MD = parseFloat(variables.breakpoint_md);
export const LG = parseFloat(variables.breakpoint_lg);