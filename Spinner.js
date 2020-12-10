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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes = {
  tag: _utils.tagPropType,
  type: _propTypes.default.string,
  size: _propTypes.default.string,
  color: _propTypes.default.string,
  className: _propTypes.default.string,
  children: _propTypes.default.string
};
var defaultProps = {
  tag: 'div',
  type: 'grow',
  children: 'Loading...'
};

var Spinner = function Spinner(props) {
  var className = props.className,
      type = props.type,
      size = props.size,
      color = props.color,
      children = props.children,
      tag = props.tag,
      attributes = (0, _objectWithoutPropertiesLoose2.default)(props, ["className", "type", "size", "color", "children", "tag"]);
  var classes = (0, _classnames.default)(className, size ? "spinner-" + type + "-" + size : false, "spinner-" + type, color ? "text-" + color : false);
  return /*#__PURE__*/_react.default.createElement(tag, _objectSpread({
    className: classes,
    role: "status"
  }, attributes), /*#__PURE__*/_react.default.createElement("span", {
    className: "visually-hidden"
  }, children));
};

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;
var _default = Spinner;
exports.default = _default;