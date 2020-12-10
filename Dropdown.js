"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

var propTypes = {
  text: _propTypes.default.string,
  navbar: _propTypes.default.bool,
  button_static: _propTypes.default.bool,
  rightAligned: _utils.propTypesBoolOrString,
  leftAligned: _utils.propTypesBoolOrString,
  tag: _utils.tagPropType,
  base_class: _propTypes.default.string,
  className: _propTypes.default.string
};
var defaultProps = {
  base_class: 'dropdown',
  tag: 'div'
};

var Dropdown = function Dropdown(props) {
  var _classNames, _classNames2;

  var text = props.text,
      navbar = props.navbar,
      button_static = props.button_static,
      rightAligned = props.rightAligned,
      leftAligned = props.leftAligned,
      base_class = props.base_class,
      className = props.className,
      tag = props.tag,
      attrs = (0, _objectWithoutPropertiesLoose2.default)(props, ["text", "navbar", "button_static", "rightAligned", "leftAligned", "base_class", "className", "tag"]);
  var button_tag = navbar ? "a" : "button";

  var dropdown_button = /*#__PURE__*/_react.default.createElement(button_tag, {
    id: 'dropdownMenuButton',
    className: (0, _classnames.default)({
      "btn": !navbar
    }, {
      "btn-secondary": !navbar
    }, "dropdown-toggle", {
      "nav-link": navbar
    }),
    "data-bs-toggle": "dropdown",
    "data-display": button_static ? "static" : null,
    "aria-expanded": false,
    href: navbar ? "#" : null
  }, text);

  var dropdown_menu = /*#__PURE__*/_react.default.createElement('ul', {
    className: (0, _classnames.default)("dropdown-menu", (_classNames = {}, _classNames["dropdown-menu" + (typeof rightAligned === "string" ? '-' + rightAligned : '') + "-right"] = rightAligned, _classNames), (_classNames2 = {}, _classNames2["dropdown-menu" + (typeof leftAligned === "string" ? '-' + leftAligned : '') + "-left"] = leftAligned, _classNames2), className),
    "aria-labelledby": "dropdownMenuButton"
  }, props.children);

  return /*#__PURE__*/_react.default.createElement(tag, {
    className: (0, _classnames.default)(button_static ? 'btn-group' : base_class, {
      "nav-item": navbar
    })
  }, /*#__PURE__*/_react.default.createElement(_react.Fragment, null, dropdown_button, dropdown_menu));
};

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;
var _default = Dropdown;
exports.default = _default;