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
  id: _propTypes.default.string.isRequired,
  tag: _utils.tagPropType,
  type: _propTypes.default.string,
  className: _propTypes.default.string,
  children: _propTypes.default.node
};
var defaultProps = {
  tag: 'button',
  type: 'button'
};

var NavbarToggler = function NavbarToggler(props) {
  var id = props.id,
      className = props.className,
      children = props.children,
      tag = props.tag,
      attrs = (0, _objectWithoutPropertiesLoose2.default)(props, ["id", "className", "children", "tag"]);
  var classes = (0, _classnames.default)('navbar-toggler', className);

  var default_button = /*#__PURE__*/_react.default.createElement('span', {
    className: "navbar-toggler-icon"
  });

  return /*#__PURE__*/_react.default.createElement("button", _objectSpread({
    className: classes,
    type: 'button',
    "data-bs-toggle": "collapse",
    "data-bs-target": "#" + id,
    "aria-controls": id,
    "aria-expanded": "false",
    "aria-label": id + "Label"
  }, attrs), props.children ? props.children : default_button);
};

NavbarToggler.propTypes = propTypes;
NavbarToggler.defaultProps = defaultProps;
var _default = NavbarToggler;
exports.default = _default;