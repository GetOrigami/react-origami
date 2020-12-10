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
  innerRef: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func, _propTypes.default.string]),
  disabled: _propTypes.default.bool,
  active: _propTypes.default.bool,
  className: _propTypes.default.string,
  onClick: _propTypes.default.func,
  href: _propTypes.default.any
};
var defaultProps = {
  tag: 'a'
};

var NavLink = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var active = props.active,
      className = props.className,
      tag = props.tag,
      attrs = (0, _objectWithoutPropertiesLoose2.default)(props, ["active", "className", "tag"]);
  var classes = (0, _classnames.default)("nav-link", {
    "active": active
  }, {
    "disabled": attrs.disabled
  }, className);
  return /*#__PURE__*/_react.default.createElement(tag, _objectSpread({
    className: classes,
    ref: ref
  }, attrs), props.children);
});

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;
var _default = NavLink;
exports.default = _default;