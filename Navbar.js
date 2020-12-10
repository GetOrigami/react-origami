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

var _Container = _interopRequireDefault(require("./Container"));

var _NavbarBrand = _interopRequireDefault(require("./NavbarBrand"));

var _NavbarToggler = _interopRequireDefault(require("./NavbarToggler"));

var _Collapse = _interopRequireDefault(require("./Collapse"));

var _Nav = _interopRequireDefault(require("./Nav"));

var _NavbarText = _interopRequireDefault(require("./NavbarText"));

var _NavItem = _interopRequireDefault(require("./NavItem"));

var _NavLink = _interopRequireDefault(require("./NavLink"));

var _CollapseHeader = _interopRequireDefault(require("./CollapseHeader"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _DropdownItem = _interopRequireDefault(require("./DropdownItem"));

var _DropdownDivider = _interopRequireDefault(require("./DropdownDivider"));

var _DropdownHeader = _interopRequireDefault(require("./DropdownHeader"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes = {
  light: _propTypes.default.bool,
  dark: _propTypes.default.bool,
  full: _propTypes.default.bool,
  fixed: _propTypes.default.oneOf(["top", "bottom"]),
  sticky: _propTypes.default.oneOf(["top", "bottom"]),
  bg: _propTypes.default.string,
  role: _propTypes.default.string,
  tag: _utils.tagPropType,
  className: _propTypes.default.string,
  expand: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(["sm", "md", "lg", "xl", "xxl"])])
};
var defaultProps = {
  role: "navigation",
  tag: 'nav',
  expand: false
};

var Navbar = function Navbar(props) {
  var _classNames;

  var expand = props.expand,
      light = props.light,
      dark = props.dark,
      fixed = props.fixed,
      sticky = props.sticky,
      bg = props.bg,
      tag = props.tag,
      className = props.className,
      attrs = (0, _objectWithoutPropertiesLoose2.default)(props, ["expand", "light", "dark", "fixed", "sticky", "bg", "tag", "className"]);
  var classes = (0, _classnames.default)(className, 'navbar', (_classNames = {}, _classNames["navbar-expand" + (typeof expand === "string" ? "-" + expand : "")] = expand, _classNames['navbar-light'] = light, _classNames['navbar-dark'] = dark, _classNames["bg-" + bg] = bg, _classNames["fixed-" + fixed] = fixed, _classNames["sticky-" + sticky] = sticky, _classNames));
  return /*#__PURE__*/_react.default.createElement(tag, _objectSpread({
    className: classes
  }, attrs), props.children);
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
var _default = Navbar;
exports.default = _default;
Navbar.Container = _Container.default;
Navbar.Brand = _NavbarBrand.default;
Navbar.Toggler = _NavbarToggler.default;
Navbar.Collapse = _Collapse.default;
Navbar.CollapseHeader = _CollapseHeader.default;
Navbar.Nav = _Nav.default;
Navbar.Text = _NavbarText.default;
Navbar.Item = _NavItem.default;
Navbar.Link = _NavLink.default;
Navbar.Dropdown = _Dropdown.default;
Navbar.Dropdown.Item = _DropdownItem.default;
Navbar.Dropdown.Divider = _DropdownDivider.default;
Navbar.Dropdown.Header = _DropdownHeader.default;