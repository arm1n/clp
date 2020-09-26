import React from "react";
import { System, Page, PAGE_TYPE_POPUP } from "@clp/shared";
import { Overview } from "./pages/overview/component";
import { DCSystem } from "./pages/dc-system/component";
import { ACSystem } from "./pages/ac-system/component";
import { CBLocation } from "./pages/cb-location/component";
import { RelayFinder } from "./pages/relay-finder/component";
import { MFDElePage } from "./pages/mfd-ele-page/component";
import { CautionLights } from "./pages/caution-lights/component";
export var App = function App(props) {
  return /*#__PURE__*/React.createElement(System, props, /*#__PURE__*/React.createElement(Page, {
    path: "/",
    name: "Overview",
    partial: false
  }, /*#__PURE__*/React.createElement(Overview, null)), /*#__PURE__*/React.createElement(Page, {
    path: "/dc-system",
    name: "DC System"
  }, /*#__PURE__*/React.createElement(DCSystem, null)), /*#__PURE__*/React.createElement(Page, {
    path: "/ac-system",
    name: "AC System"
  }, /*#__PURE__*/React.createElement(ACSystem, null)), /*#__PURE__*/React.createElement(Page, {
    path: "/relay-finder",
    name: "Relay Finder"
  }, /*#__PURE__*/React.createElement(RelayFinder, null)), /*#__PURE__*/React.createElement(Page, {
    path: "/cb-location",
    name: "CB Location"
  }, /*#__PURE__*/React.createElement(CBLocation, null)), /*#__PURE__*/React.createElement(Page, {
    name: "MFD ELE Page",
    type: PAGE_TYPE_POPUP,
    path: "/mfd-ele-page"
  }, /*#__PURE__*/React.createElement(MFDElePage, null)), /*#__PURE__*/React.createElement(Page, {
    name: "Caution Lights",
    type: PAGE_TYPE_POPUP,
    path: "/caution-lights"
  }, /*#__PURE__*/React.createElement(CautionLights, null)));
};