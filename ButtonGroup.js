"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes = {
  vertical: _propTypes.default.bool,
  size: _propTypes.default.oneOf(["sm", "lg"]),
  tag: _utils.tagPropType,
  className: _propTypes.default.string
};
var defaultProps = {
  tag: 'div',
  role: 'group'
};

var ButtonGroup = function ButtonGroup(props) {
  var _classNames;

  var tag = props.tag,
      role = props.role,
      size = props.size,
      vertical = props.vertical,
      className = props.className,
      attrs = props.attrs;
  return /*#__PURE__*/_react.default.createElement(tag, _objectSpread({
    className: (0, _classnames.default)("btn-group" + (vertical ? "-vertical" : ""), className, (_classNames = {}, _classNames["btn-group-" + size] = size, _classNames)),
    role: role
  }, attrs), props.children);
};

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;
var _default = ButtonGroup;
exports.default = _default;