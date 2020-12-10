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

var col_sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

var stringOrNumberProp = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]);

var columnProps = _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number, _propTypes.default.string, _propTypes.default.shape({
  size: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number, _propTypes.default.string]),
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);

var propTypes = {
  tag: _utils.tagPropType,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  order: stringOrNumberProp,
  order_sm: stringOrNumberProp,
  order_md: stringOrNumberProp,
  order_lg: stringOrNumberProp,
  order_xl: stringOrNumberProp,
  order_xxl: stringOrNumberProp,
  offset: stringOrNumberProp,
  offset_sm: stringOrNumberProp,
  offset_md: stringOrNumberProp,
  offset_lg: stringOrNumberProp,
  offset_xl: stringOrNumberProp,
  offset_xxl: stringOrNumberProp,
  className: _propTypes.default.string
};
var defaultProps = {
  tag: 'div'
};

var Col = function Col(props) {
  var order = props.order,
      order_sm = props.order_sm,
      order_md = props.order_md,
      order_lg = props.order_lg,
      order_xl = props.order_xl,
      order_xxl = props.order_xxl,
      offset = props.offset,
      offset_sm = props.offset_sm,
      offset_md = props.offset_md,
      offset_lg = props.offset_lg,
      offset_xl = props.offset_xl,
      offset_xxl = props.offset_xxl,
      xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl,
      xxl = props.xxl,
      className = props.className,
      tag = props.tag,
      attributes = (0, _objectWithoutPropertiesLoose2.default)(props, ["order", "order_sm", "order_md", "order_lg", "order_xl", "order_xxl", "offset", "offset_sm", "offset_md", "offset_lg", "offset_xl", "offset_xxl", "xs", "sm", "md", "lg", "xl", "xxl", "className", "tag"]);

  var col_classes = function col_classes(size, props, prefix_class) {
    var arr = [];
    size.forEach(function (el) {
      if (props[el] && prefix_class === "col") {
        arr.push([prefix_class + "-" + (el === "xs" ? '' : el + "-") + props[el]]);
      }

      if (props["offset" + (el === "xs" ? '' : "_" + el)] && prefix_class === "offset") {
        arr.push([prefix_class + "-" + (el === "xs" ? '' : el + "-") + props["offset" + (el === "xs" ? '' : "_" + el)]]);
      }

      if (props["order" + (el === "xs" ? '' : "_" + el)] && prefix_class === "order") {
        arr.push([prefix_class + "-" + (el === "xs" ? '' : el + "-") + props["order" + (el === "xs" ? '' : "_" + el)]]);
      }
    });
    if (!arr.length && prefix_class !== "order" && prefix_class !== "offset") return prefix_class;
    return arr;
  };

  var classes = (0, _classnames.default)(col_classes(col_sizes, props, "col"), col_classes(col_sizes, props, "order"), col_classes(col_sizes, props, "offset"), className);
  return /*#__PURE__*/_react.default.createElement(tag, _objectSpread({
    className: classes
  }, attributes), props.children);
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;
var _default = Col;
exports.default = _default;