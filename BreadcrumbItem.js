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
  href: _propTypes.default.string,
  to: _propTypes.default.string,
  text: _propTypes.default.string,
  link_tag: _utils.tagPropType,
  tag: _utils.tagPropType,
  active: _propTypes.default.bool,
  className: _propTypes.default.string
};
var defaultProps = {
  link_tag: "a",
  tag: 'li'
};

var BreadcrumbItem = function BreadcrumbItem(props) {
  var href = props.href,
      to = props.to,
      text = props.text,
      className = props.className,
      link_tag = props.link_tag,
      active = props.active,
      tag = props.tag,
      attrs = (0, _objectWithoutPropertiesLoose2.default)(props, ["href", "to", "text", "className", "link_tag", "active", "tag"]);
  var classes = (0, _classnames.default)(className, {
    "active": active
  }, 'breadcrumb-item');

  var breadcrumb_link = /*#__PURE__*/_react.default.createElement(link_tag, {
    to: to,
    href: href ? href : null
  }, text ? text : props.children);

  return /*#__PURE__*/_react.default.createElement(tag, _objectSpread({
    className: classes,
    "aria-current": active ? "page" : null
  }, attrs), active ? text ? text : props.children : breadcrumb_link);
};

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;
var _default = BreadcrumbItem;
exports.default = _default;