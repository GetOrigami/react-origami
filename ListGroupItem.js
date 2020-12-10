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
  color: _propTypes.default.string,
  active: _propTypes.default.bool,
  action: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  tag: _utils.tagPropType,
  className: _propTypes.default.string
};
var defaultProps = {
  tag: 'li'
};

var ListGroupItem = function ListGroupItem(props) {
  var _classNames;

  var tag = props.tag,
      className = props.className,
      disabled = props.disabled,
      action = props.action,
      active = props.active,
      color = props.color,
      attrs = (0, _objectWithoutPropertiesLoose2.default)(props, ["tag", "className", "disabled", "action", "active", "color"]);
  var classes = (0, _classnames.default)("list-group-item", (_classNames = {
    "disabled": disabled,
    "list-group-item-action": action
  }, _classNames["list-group-item-" + color] = color, _classNames["active"] = active, _classNames), className);
  return /*#__PURE__*/_react.default.createElement(tag, _objectSpread({
    className: classes,
    "aria-disabled": disabled ? true : null,
    "aria-current": active ? true : null
  }, attrs), props.children);
};

ListGroupItem.propTypes = propTypes;
ListGroupItem.defaultProps = defaultProps;
var _default = ListGroupItem;
exports.default = _default;