import _defineProperty from "/Users/arminpfurtscheller/git/infotools/clp/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "/Users/arminpfurtscheller/git/infotools/clp/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import _toConsumableArray from "/Users/arminpfurtscheller/git/infotools/clp/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray";
import React, { Fragment, useMemo, useCallback } from "react";
import { Card, CardWithConfigButtons, CardConfigButtonInfo, CardConfigButtonWrench, Link, File, FileWithRefs, SearchBox, useRouter, useStateToUrl, BFS, arrayToObject, getProperty } from "@clp/shared";
import { DATA_SET, SVG_PATH, INTRO_PATH } from "../../config/relay-finder/config";
import styles from "./component.module.scss";
var QUERY_PARAM_REF = "id";
var QUERY_PARAM_SUB_REF = "subId";
var COMPOSITION_SEPARATOR = "_____";
export var RelayFinder = function RelayFinder() {
  var _useRouter = useRouter(),
      navigate = _useRouter.navigate,
      _useRouter$queryParam = _useRouter.queryParams,
      paramRef = _useRouter$queryParam[QUERY_PARAM_REF],
      paramSubRef = _useRouter$queryParam[QUERY_PARAM_SUB_REF];

  var refMap = useMemo(function () {
    var map = {};
    BFS({
      nodes: DATA_SET
    }, function (node, parent) {
      if (parent === null) {
        return;
      }

      map[node.id] = node;
    });
    return map;
  }, []);
  var nodes = useMemo(function () {
    var nodes = [];
    Object.keys(refMap).forEach(function (nodeId) {
      var refs = getProperty(refMap, "".concat(nodeId, ".data.refs")) || [];
      nodes.push.apply(nodes, _toConsumableArray(refs.map(function (_ref) {
        var id = _ref.id,
            text = _ref.text;
        return {
          id: "".concat(nodeId).concat(COMPOSITION_SEPARATOR).concat(id),
          text: text
        };
      })));
    });
    return nodes;
  }, [refMap]);
  var pathHandler = useStateToUrl();
  var selectedRef = useMemo(function () {
    return refMap[paramRef];
  }, [refMap, paramRef]);
  var subRefMap = useMemo(function () {
    var refs = getProperty(selectedRef, "data.refs");
    return Array.isArray(refs) ? arrayToObject(refs) : {};
  }, [selectedRef]);
  var selectedSubRef = useMemo(function () {
    return subRefMap[paramSubRef];
  }, [subRefMap, paramSubRef]);
  var selectHandler = useCallback(function (node) {
    var _pathHandler;

    var _node$id$split = node.id.split(COMPOSITION_SEPARATOR),
        _node$id$split2 = _slicedToArray(_node$id$split, 2),
        id = _node$id$split2[0],
        subId = _node$id$split2[1];

    navigate(pathHandler((_pathHandler = {}, _defineProperty(_pathHandler, QUERY_PARAM_REF, id), _defineProperty(_pathHandler, QUERY_PARAM_SUB_REF, subId), _pathHandler)));
  }, [navigate, pathHandler]);
  var selectRefHandler = useCallback(function (ref) {
    return navigate(pathHandler(_defineProperty({}, QUERY_PARAM_REF, ref.id)));
  }, [navigate, pathHandler]);
  var closeUnitHandler = useCallback(function () {
    return navigate(pathHandler(_defineProperty({}, QUERY_PARAM_REF, paramRef)));
  }, [navigate, pathHandler, paramRef]);
  var selectSubRefHandler = useCallback(function (ref) {
    var _pathHandler4;

    return navigate(pathHandler((_pathHandler4 = {}, _defineProperty(_pathHandler4, QUERY_PARAM_REF, paramRef), _defineProperty(_pathHandler4, QUERY_PARAM_SUB_REF, paramSubRef !== ref.id ? ref.id : null), _pathHandler4)));
  }, [navigate, pathHandler, paramRef, paramSubRef]);
  var closeHandler = useCallback(function () {
    return navigate(pathHandler(null));
  }, [navigate, pathHandler]);
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: styles.top
  }, INTRO_PATH && /*#__PURE__*/React.createElement("div", {
    className: styles.intro
  }, /*#__PURE__*/React.createElement(File, {
    path: INTRO_PATH
  })), /*#__PURE__*/React.createElement(SearchBox, {
    items: nodes,
    title: "Relay Finder",
    placeholder: "Enter relay ID",
    onSelect: selectHandler
  })), selectedRef ? /*#__PURE__*/React.createElement(RelayFinderDetail, {
    onClose: closeHandler,
    parentRef: selectedRef,
    selectedRef: selectedSubRef,
    onCloseUnit: closeUnitHandler,
    onSelectRef: selectSubRefHandler
  }) : /*#__PURE__*/React.createElement(RelayFinderOverview, {
    onSelectRef: selectRefHandler
  }));
};

var RelayFinderOverview = function RelayFinderOverview(_ref2) {
  var onSelectRef = _ref2.onSelectRef;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.overview
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Location overview"
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.map
  }, /*#__PURE__*/React.createElement(FileWithRefs, {
    path: SVG_PATH,
    refs: DATA_SET,
    onSelectRef: onSelectRef
  }))));
};

RelayFinderOverview.defaultProps = {
  onSelectRef: function onSelectRef() {}
};

var RelayFinderDetail = function RelayFinderDetail(_ref3) {
  var parentRef = _ref3.parentRef,
      selectedRef = _ref3.selectedRef,
      onSelectRef = _ref3.onSelectRef,
      onCloseUnit = _ref3.onCloseUnit,
      onClose = _ref3.onClose;

  var _useRouter2 = useRouter(),
      parentPath = _useRouter2.path;

  var title = useMemo(function () {
    return getProperty(parentRef, "text");
  }, [parentRef]);
  var loc = useMemo(function () {
    return getProperty(parentRef, "data.loc");
  }, [parentRef]);
  var main = useMemo(function () {
    return getProperty(parentRef, "data.main");
  }, [parentRef]);
  var desc = useMemo(function () {
    return getProperty(parentRef, "data.desc");
  }, [parentRef]);
  var refs = useMemo(function () {
    return getProperty(parentRef, "data.refs");
  }, [parentRef]);
  var unit = useMemo(function () {
    return getProperty(parentRef, "data.unit");
  }, [parentRef]);
  var info = useMemo(function () {
    return getProperty(parentRef, "data.info");
  }, [parentRef]);
  var access = useMemo(function () {
    return getProperty(parentRef, "data.access");
  }, [parentRef]);
  var selectedUnit = useMemo(function () {
    return getProperty(selectedRef, "unit");
  }, [selectedRef]);
  var selectedInfo = useMemo(function () {
    return getProperty(selectedRef, "info");
  }, [selectedRef]);
  var selectedAccess = useMemo(function () {
    return getProperty(selectedRef, "access");
  }, [selectedRef]);
  var closeUnitHandler = useMemo(function () {
    return selectedUnit ? function () {
      return onCloseUnit();
    } : null;
  }, [selectedUnit, onCloseUnit]);
  var currentAccess = useMemo(function () {
    return selectedAccess || access;
  }, [selectedAccess, access]);
  var currentInfo = useMemo(function () {
    return selectedInfo || info;
  }, [selectedInfo, info]);
  var currentUnit = useMemo(function () {
    return selectedUnit || unit;
  }, [selectedUnit, unit]);
  var hasContent = useMemo(function () {
    return main || desc;
  }, [main, desc]);
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("div", {
    className: [styles.detail, hasContent ? styles.complete : ""].join(" ")
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.sidebar
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.access
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Access",
    onClose: onClose
  }, /*#__PURE__*/React.createElement("clp-img", {
    src: loc
  }))), currentUnit && /*#__PURE__*/React.createElement("div", {
    className: styles.unit
  }, /*#__PURE__*/React.createElement(CardWithConfigButtons, {
    title: "Unit",
    onClose: closeUnitHandler,
    buttons: [/*#__PURE__*/React.createElement(CardConfigButtonInfo, {
      config: currentInfo
    }), /*#__PURE__*/React.createElement(CardConfigButtonWrench, {
      config: currentAccess
    })]
  }, /*#__PURE__*/React.createElement(File, {
    path: currentUnit
  })))), hasContent && /*#__PURE__*/React.createElement("div", {
    className: styles.content
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Location",
    onClose: onClose,
    stretch: true
  }, main && /*#__PURE__*/React.createElement("div", {
    className: styles.main
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.refs
  }, /*#__PURE__*/React.createElement(FileWithRefs, {
    path: main,
    refs: refs,
    selectedRef: selectedRef,
    onSelectRef: onSelectRef
  }))), desc && /*#__PURE__*/React.createElement("div", {
    className: styles.desc
  }, /*#__PURE__*/React.createElement(File, {
    path: desc
  }))))), /*#__PURE__*/React.createElement(Link, {
    path: parentPath,
    className: styles.back
  }, "\u2190 Back to overview"));
};

RelayFinderDetail.defaultProps = {
  parentRef: null,
  selectedRef: null,
  onClose: function onClose() {},
  onCloseUnit: function onCloseUnit() {},
  onSelectRef: function onSelectRef() {}
};