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
  animated: _propTypes.default.bool,
  striped: _propTypes.default.bool,
  color: _propTypes.default.string,
  value_now: _propTypes.default.number,
  value_min: _propTypes.default.number,
  value_max: _propTypes.default.number,
  tag: _utils.tagPropType,
  className: _propTypes.default.string
};
var defaultProps = {
  value_now: 0,
  value_min: 0,
  value_max: 100,
  tag: 'div'
};

var ProgressBar = function ProgressBar(props) {
  var _classNames;

  var animated = props.animated,
      striped = props.striped,
      color = props.color,
      style = props.style,
      value_now = props.value_now,
      value_min = props.value_min,
      value_max = props.value_max,
      tag = props.tag,
      className = props.className,
      attrs = (0, _objectWithoutPropertiesLoose2.default)(props, ["animated", "striped", "color", "style", "value_now", "value_min", "value_max", "tag", "className"]);
  return /*#__PURE__*/_react.default.createElement(tag, _objectSpread({
    className: (0, _classnames.default)("progress-bar", (_classNames = {}, _classNames["bg-" + color] = color, _classNames["progress-bar-striped"] = striped, _classNames["progress-bar-animated"] = animated, _classNames), className),
    role: "progressbar",
    "aria-valuenow": value_now,
    "aria-valuemin": value_min,
    "aria-valuemax": value_max,
    style: _objectSpread({
      width: value_now + "%"
    }, style)
  }, attrs), props.children);
};

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;
var _default = ProgressBar;
exports.default = _default;