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

var cols_size = ["sm", "md", "lg", "xl", "xxl"];
var propTypes = {
  tag: _utils.tagPropType,
  className: _propTypes.default.string,
  cols: _utils.propTypesNumberOrString,
  cols_sm: _utils.propTypesNumberOrString,
  cols_md: _utils.propTypesNumberOrString,
  cols_lg: _utils.propTypesNumberOrString,
  cols_xl: _utils.propTypesNumberOrString,
  cols_xxl: _utils.propTypesNumberOrString,
  gutter: _propTypes.default.number,
  gutter_sm: _propTypes.default.number,
  gutter_md: _propTypes.default.number,
  gutter_lg: _propTypes.default.number,
  gutter_xl: _propTypes.default.number,
  gutter_xxl: _propTypes.default.number,
  gutter_x: _propTypes.default.number,
  gutter_x_sm: _propTypes.default.number,
  gutter_x_md: _propTypes.default.number,
  gutter_x_lg: _propTypes.default.number,
  gutter_x_xl: _propTypes.default.number,
  gutter_x_xxl: _propTypes.default.number,
  gutter_y: _propTypes.default.number,
  gutter_y_sm: _propTypes.default.number,
  gutter_y_md: _propTypes.default.number,
  gutter_y_lg: _propTypes.default.number,
  gutter_y_xl: _propTypes.default.number,
  gutter_y_xxl: _propTypes.default.number
};
var defaultProps = {
  tag: 'div'
};

var Row = function Row(props) {
  var cols = props.cols,
      cols_sm = props.cols_sm,
      cols_md = props.cols_md,
      cols_lg = props.cols_lg,
      cols_xl = props.cols_xl,
      cols_xxl = props.cols_xxl,
      gutter = props.gutter,
      gutter_sm = props.gutter_sm,
      gutter_md = props.gutter_md,
      gutter_lg = props.gutter_lg,
      gutter_xl = props.gutter_xl,
      gutter_xxl = props.gutter_xxl,
      gutter_x = props.gutter_x,
      gutter_x_sm = props.gutter_x_sm,
      gutter_x_md = props.gutter_x_md,
      gutter_x_lg = props.gutter_x_lg,
      gutter_x_xl = props.gutter_x_xl,
      gutter_x_xxl = props.gutter_x_xxl,
      gutter_y = props.gutter_y,
      gutter_y_sm = props.gutter_y_sm,
      gutter_y_md = props.gutter_y_md,
      gutter_y_lg = props.gutter_y_lg,
      gutter_y_xl = props.gutter_y_xl,
      gutter_y_xxl = props.gutter_y_xxl,
      className = props.className,
      tag = props.tag,
      attributes = (0, _objectWithoutPropertiesLoose2.default)(props, ["cols", "cols_sm", "cols_md", "cols_lg", "cols_xl", "cols_xxl", "gutter", "gutter_sm", "gutter_md", "gutter_lg", "gutter_xl", "gutter_xxl", "gutter_x", "gutter_x_sm", "gutter_x_md", "gutter_x_lg", "gutter_x_xl", "gutter_x_xxl", "gutter_y", "gutter_y_sm", "gutter_y_md", "gutter_y_lg", "gutter_y_xl", "gutter_y_xxl", "className", "tag"]);
  var classes = (0, _classnames.default)("row", (0, _utils.classSize)(cols_size, props, "cols", "row-cols"), (0, _utils.classSize)(cols_size, props, "gutter", "g"), (0, _utils.classSize)(cols_size, props, "gutter_x", "gx"), (0, _utils.classSize)(cols_size, props, "gutter_y", "gy"), className);
  return /*#__PURE__*/_react.default.createElement(tag, _objectSpread({
    className: classes
  }, attributes), props.children);
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;
var _default = Row;
exports.default = _default;