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

var _Form = require("./Form");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes = {
  multiple: _propTypes.default.bool,
  options: _propTypes.default.object,
  name: _propTypes.default.string,
  type_error: _propTypes.default.string,
  addon_left: _propTypes.default.any,
  addon_right: _propTypes.default.any,
  mb: _propTypes.default.number,
  type: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  onchange: _propTypes.default.func,
  floating_label: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
  size: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  helper: _propTypes.default.string,
  label: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
  id: _propTypes.default.string.isRequired,
  tag: _utils.tagPropType,
  className: _propTypes.default.string
};
var defaultProps = {
  type: "text",
  size: null,
  mb: 3,
  tag: 'div'
};

var FormField = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var context = (0, _react.useContext)(_Form.FormContext);
  var multiple = props.multiple,
      options = props.options,
      type_error = props.type_error,
      error = props.error,
      rows = props.rows,
      addon_left = props.addon_left,
      name = props.name,
      addon_right = props.addon_right,
      mb = props.mb,
      type = props.type,
      placeholder = props.placeholder,
      onchange = props.onchange,
      defaultValue = props.defaultValue,
      floating_label = props.floating_label,
      size = props.size,
      label = props.label,
      helper = props.helper,
      id = props.id,
      className = props.className,
      tag = props.tag,
      attributes = (0, _objectWithoutPropertiesLoose2.default)(props, ["multiple", "options", "type_error", "error", "rows", "addon_left", "name", "addon_right", "mb", "type", "placeholder", "onchange", "defaultValue", "floating_label", "size", "label", "helper", "id", "className", "tag"]);
  var classes = (0, _classnames.default)(className, "mb-" + mb, {
    "position-relative": type_error === 'tooltip' || context.type_error === 'tooltip'
  });
  return /*#__PURE__*/_react.default.createElement(tag, _objectSpread({
    className: classes
  }, attributes), /*#__PURE__*/_react.default.createElement(_react.Fragment, null, type !== "checkbox" && type !== 'radio' && /*#__PURE__*/_react.default.createElement(_index.Label, {
    for: id,
    hidden: !context.force_label && Boolean(!label) || Boolean(floating_label || context.floating_label)
  }, label ? label : placeholder ? placeholder : id), /*#__PURE__*/_react.default.createElement(_index.FormControl, {
    ref: ref,
    multiple: multiple,
    options: options,
    error: error,
    rows: rows,
    type: type,
    addon_left: addon_left,
    addon_right: addon_right,
    onChange: onchange,
    defaultValue: defaultValue,
    label: label,
    floating_label: floating_label || context.floating_label && type !== 'textarea',
    size: size,
    name: name,
    id: id,
    placeholder: context.force_label ? null : placeholder
  }), helper && /*#__PURE__*/_react.default.createElement(_index.FormHelper, {
    text: helper
  }), error && /*#__PURE__*/_react.default.createElement("div", {
    className: "invalid-" + (type_error ? type_error : context.type_error)
  }, error)));
});

FormField.propTypes = propTypes;
FormField.defaultProps = defaultProps;
var _default = FormField;
exports.default = _default;