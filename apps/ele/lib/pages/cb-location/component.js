import React, { useMemo } from "react";
import { Card, CardWithConfigButtons, CardConfigButtonInfo, CardConfigButtonWrench, File, MenuWithSearch, getProperty, useRouter, BFS } from "@clp/shared";
import { DATA_SET, SVG_PATH, INTRO_PATH } from "../../config/cb-location/config";
import styles from "./component.module.scss";
var QUERY_PARAM_NODE = "id";
export var CBLocation = function CBLocation() {
  var _useRouter = useRouter(),
      param = _useRouter.queryParams[QUERY_PARAM_NODE];

  var nodeMap = useMemo(function () {
    var nodeMap = {};
    BFS({
      nodes: DATA_SET
    }, function (node, parent) {
      if (parent === null) {
        return;
      }

      nodeMap[node.id] = node;
    });
    return nodeMap;
  }, []);
  var selectedNode = useMemo(function () {
    return nodeMap[param] || null;
  }, [nodeMap, param]);
  var title = useMemo(function () {
    return getProperty(selectedNode, "text");
  }, [selectedNode]);
  var units = useMemo(function () {
    return getProperty(selectedNode, "data.units") || [];
  }, [selectedNode]);
  var panels = useMemo(function () {
    return getProperty(selectedNode, "data.panels") || {};
  }, [selectedNode]);
  return /*#__PURE__*/React.createElement("div", {
    className: styles.grid
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.menu
  }, /*#__PURE__*/React.createElement(MenuWithSearch, {
    nodes: DATA_SET,
    queryParam: QUERY_PARAM_NODE,
    selectedNode: selectedNode
  })), /*#__PURE__*/React.createElement("div", {
    className: styles.main
  }, title && /*#__PURE__*/React.createElement("h2", {
    className: styles.title
  }, title), /*#__PURE__*/React.createElement("div", {
    className: styles.cb
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.top
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.panel
  }, /*#__PURE__*/React.createElement(Card, {
    title: "115V AC CB PANEL (Copilot side)"
  }, panels.AC && /*#__PURE__*/React.createElement(File, {
    path: panels.AC
  }))), /*#__PURE__*/React.createElement("div", {
    className: styles.panel
  }, /*#__PURE__*/React.createElement(Card, {
    title: "AVIONICS CB PANEL (Pilot side)"
  }, panels.AVIONICS && /*#__PURE__*/React.createElement(File, {
    path: panels.AVIONICS
  })))), /*#__PURE__*/React.createElement("div", {
    className: styles.middle
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.svg
  }, /*#__PURE__*/React.createElement(File, {
    path: SVG_PATH
  }))), /*#__PURE__*/React.createElement("div", {
    className: styles.bottom
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.panel
  }, /*#__PURE__*/React.createElement(Card, {
    title: "RIGHT CB PANEL (Copilot side)"
  }, panels.RIGHT && /*#__PURE__*/React.createElement(File, {
    path: panels.RIGHT
  }))), /*#__PURE__*/React.createElement("div", {
    className: styles.panel
  }, /*#__PURE__*/React.createElement(Card, {
    title: "LEFT CIRCUIT BRAKER PANEL (Pilot side)"
  }, panels.LEFT && /*#__PURE__*/React.createElement(File, {
    path: panels.LEFT
  }))))), /*#__PURE__*/React.createElement("div", {
    className: styles.units
  }, units.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: styles.unit
    }, /*#__PURE__*/React.createElement(CardWithConfigButtons, {
      title: "Unit",
      buttons: [/*#__PURE__*/React.createElement(CardConfigButtonInfo, {
        config: item.info
      }), /*#__PURE__*/React.createElement(CardConfigButtonWrench, {
        config: item.access
      })].filter(Boolean)
    }, /*#__PURE__*/React.createElement(File, {
      path: item.unit
    })));
  })), INTRO_PATH && /*#__PURE__*/React.createElement("div", {
    className: styles.intro
  }, /*#__PURE__*/React.createElement(File, {
    path: INTRO_PATH
  }))));
};