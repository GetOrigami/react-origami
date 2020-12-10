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
  rounded: _propTypes.default.bool,
  text: _propTypes.default.string,
  color: _propTypes.default.string,
  tag: _utils.tagPropType,
  className: _propTypes.default.string
};
var defaultProps = {
  rounded: false,
  color: "secondary",
  tag: 'span'
};

var Badge = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var text = props.text,
      color = props.color,
      rounded = props.rounded,
      className = props.className,
      tag = props.tag,
      attrs = (0, _objectWithoutPropertiesLoose2.default)(props, ["text", "color", "rounded", "className", "tag"]);
  var classes = (0, _classnames.default)("badge", ["bg-" + color], {
    "rounded-pill": rounded
  }, className);
  return /*#__PURE__*/_react.default.createElement(tag, _objectSpread({
    ref: ref,
    className: classes
  }, attrs), text ? text : props.children);
});

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
var _default = Badge;
exports.default = _default;