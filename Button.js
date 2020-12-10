"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

var _index = require("./index");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes = {
  loading: _propTypes.default.bool,
  active: _propTypes.default.bool,
  text: _propTypes.default.string,
  block: _propTypes.default.bool,
  color: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  outline: _propTypes.default.bool,
  tag: _utils.tagPropType,
  ref: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func, _propTypes.default.string]),
  onClick: _propTypes.default.func,
  size: _propTypes.default.string,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  close: _propTypes.default.bool
};
var defaultProps = {
  type: 'button',
  color: 'secondary',
  tag: 'button'
};

var Button = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames, _classNames2, _classNames3;

  var close = props.close,
      loading = props.loading,
      disabled = props.disabled,
      size = props.size,
      outline = props.outline,
      color = props.color,
      text = props.text,
      type = props.type,
      className = props.className,
      tag = props.tag,
      attributes = (0, _objectWithoutPropertiesLoose2.default)(props, ["close", "loading", "disabled", "size", "outline", "color", "text", "type", "className", "tag"]);
  tag = attributes.href ? 'a' : tag;
  var classes = (0, _classnames.default)({
    "btn": !close
  }, (_classNames = {}, _classNames["btn-close-" + color] = close, _classNames), (_classNames2 = {}, _classNames2["btn-" + (outline ? "outline-" + color : color)] = !close, _classNames2), {
    'btn-close': close
  }, {
    "disabled": disabled || loading
  }, (_classNames3 = {}, _classNames3["btn-" + size] = size, _classNames3));
  return /*#__PURE__*/_react.default.createElement(tag, _objectSpread({
    className: classes,
    type: type,
    ref: ref,
    href: attributes.href,
    "aria-disabled": disabled || loading,
    "aria-label": close ? "Close" : false,
    disabled: disabled || loading
  }, attributes), /*#__PURE__*/_react.default.createElement(_react.Fragment, null, !close && loading && /*#__PURE__*/_react.default.createElement(_index.Spinner, {
    className: "me-1",
    size: "sm"
  }), !close && text ? text : props.children));
});

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
var _default = Button;
exports.default = _default;