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
  to: _propTypes.default.string,
  href: _propTypes.default.string,
  text: _propTypes.default.string,
  tag: _utils.tagPropType,
  className: _propTypes.default.string
};
var defaultProps = {
  tag: "a"
};

var DropdownItem = function DropdownItem(props) {
  var text = props.text,
      className = props.className,
      tag = props.tag,
      attrs = (0, _objectWithoutPropertiesLoose2.default)(props, ["text", "className", "tag"]);

  var dropdown_link = /*#__PURE__*/_react.default.createElement(tag, _objectSpread({
    className: (0, _classnames.default)("dropdown-item")
  }, attrs), text ? text : props.children);

  return /*#__PURE__*/_react.default.createElement("li", {}, dropdown_link);
};

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;
var _default = DropdownItem;
exports.default = _default;