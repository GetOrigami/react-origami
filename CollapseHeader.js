"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

var _index = require("./index");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes = {
  id: _propTypes.default.string.isRequired,
  tag: _utils.tagPropType,
  className: _propTypes.default.string
};
var defaultProps = {
  tag: 'div'
};

var CollapseHeader = function CollapseHeader(props) {
  var className = props.className,
      tag = props.tag,
      id = props.id,
      attributes = (0, _objectWithoutPropertiesLoose2.default)(props, ["className", "tag", "id"]);
  return /*#__PURE__*/_react.default.createElement(tag, _objectSpread({}, attributes), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("navbar-collapse-header", className)
  }, /*#__PURE__*/_react.default.createElement(_index.Row, null, /*#__PURE__*/_react.default.createElement(_index.Col, {
    xs: 6,
    className: "collapse-brand"
  }, props.children), /*#__PURE__*/_react.default.createElement(_index.Col, {
    xs: 6,
    className: "collapse-close"
  }, /*#__PURE__*/_react.default.createElement(_index.NavbarToggler, {
    id: id
  }, /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null))))));
};

CollapseHeader.propTypes = propTypes;
CollapseHeader.defaultProps = defaultProps;
var _default = CollapseHeader;
exports.default = _default;