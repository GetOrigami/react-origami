"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

var propTypes = {
  tag: _utils.tagPropType,
  className: _propTypes.default.string
};
var defaultProps = {
  tag: "hr"
};

var DropdownDivider = function DropdownDivider(props) {
  var className = props.className,
      tag = props.tag,
      attrs = (0, _objectWithoutPropertiesLoose2.default)(props, ["className", "tag"]);
  return /*#__PURE__*/_react.default.createElement(tag, {
    className: "dropdown-divider"
  });
};

DropdownDivider.propTypes = propTypes;
DropdownDivider.defaultProps = defaultProps;
var _default = DropdownDivider;
exports.default = _default;