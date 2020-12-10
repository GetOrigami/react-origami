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
  role: _propTypes.default.string,
  horizontal: _propTypes.default.string,
  justified: _propTypes.default.bool,
  fill: _propTypes.default.bool,
  pills: _propTypes.default.bool,
  tabs: _propTypes.default.bool,
  vertical: _utils.propTypesBoolOrString,
  navbar: _propTypes.default.bool,
  tag: _utils.tagPropType,
  className: _propTypes.default.string
};
var defaultProps = {
  tag: 'ul'
};

var Nav = function Nav(props) {
  var _classNames, _classNames2;

  var horizontal = props.horizontal,
      navbar = props.navbar,
      role = props.role,
      justified = props.justified,
      fill = props.fill,
      pills = props.pills,
      tabs = props.tabs,
      vertical = props.vertical,
      className = props.className,
      tag = props.tag,
      attrs = (0, _objectWithoutPropertiesLoose2.default)(props, ["horizontal", "navbar", "role", "justified", "fill", "pills", "tabs", "vertical", "className", "tag"]);
  role = role ? role : tabs ? 'tab' : 'navigation';
  var classes = (0, _classnames.default)(navbar ? "navbar-nav" : "nav", (_classNames = {}, _classNames["flex-" + (typeof vertical === "boolean" ? "" : vertical + "-") + "column"] = vertical, _classNames), (_classNames2 = {}, _classNames2["justify-content-" + horizontal] = horizontal, _classNames2), {
    "nav-tabs": tabs
  }, {
    "nav-pills": pills
  }, {
    "nav-fill": fill
  }, {
    "nav-justified": justified
  }, className);
  return /*#__PURE__*/_react.default.createElement(tag, _objectSpread({
    className: classes,
    role: role
  }, attrs), props.children);
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
var _default = Nav;
exports.default = _default;