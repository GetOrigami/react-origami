"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

var _classnames = _interopRequireDefault(require("classnames"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes = {
  multiple: _propTypes.default.bool,
  options: _propTypes.default.object,
  addon_left: _propTypes.default.any,
  addon_right: _propTypes.default.any,
  plaintext: _propTypes.default.bool,
  readonly: _propTypes.default.bool,
  label: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
  floating_label: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
  size: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  type: _propTypes.default.string,
  tag: _utils.tagPropType,
  className: _propTypes.default.string
};
var defaultProps = {
  type: 'text',
  tag: 'input'
};

var FormControl = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;

  var name = props.name,
      label = props.label,
      type = props.type,
      options = props.options,
      multiple = props.multiple,
      error = props.error,
      addon_left = props.addon_left,
      addon_right = props.addon_right,
      readonly = props.readonly,
      plaintext = props.plaintext,
      size = props.size,
      id = props.id,
      floating_label = props.floating_label,
      className = props.className,
      tag = props.tag,
      attributes = (0, _objectWithoutPropertiesLoose2.default)(props, ["name", "label", "type", "options", "multiple", "error", "addon_left", "addon_right", "readonly", "plaintext", "size", "id", "floating_label", "className", "tag"]);

  if (type === "textarea" || type === "select") {
    tag = type;
  }

  var classes = (0, _classnames.default)({
    "form-check-input": type === "checkbox" || type === 'radio'
  }, {
    "form-select": type === 'select'
  }, {
    "form-control": !plaintext && type !== "select" && type !== 'checkbox' && type !== 'radio'
  }, className, (_classNames = {}, _classNames["form-" + (type === 'select' ? "select" : "control") + "-" + size] = size && typeof size === 'string', _classNames), {
    "form-control-plaintext": plaintext
  }, {
    "is-invalid": Boolean(error)
  });

  var AddonSpanLeft = /*#__PURE__*/_react.default.createElement('span', {
    className: "input-group-text",
    id: id
  }, addon_left);

  var AddonSpanRight = /*#__PURE__*/_react.default.createElement('span', {
    className: "input-group-text",
    id: id
  }, addon_right);

  var Label = /*#__PURE__*/_react.default.createElement('label', {
    className: (0, _classnames.default)({
      "form-label": type !== 'checkbox' && type !== 'radio'
    }, {
      "form-check-label": type === 'checkbox' || type === 'radio'
    }),
    htmlFor: id
  }, attributes.placeholder ? attributes.placeholder : floating_label ? floating_label : label ? label : id);

  var select_options = function select_options() {
    var arr = [];

    for (var key in options) {
      arr.push( /*#__PURE__*/_react.default.createElement("option", {
        key: key,
        value: key
      }, options[key]));
    }

    return arr;
  }; // element DOM


  var Input = /*#__PURE__*/_react.default.createElement(tag, _objectSpread({
    ref: ref,
    id: id,
    name: name,
    rows: type === 'textarea' ? attributes.rows ? attributes.rows : 3 : null,
    className: classes,
    readOnly: readonly,
    "aria-label": attributes.placeholder ? attributes.placeholder : label ? label : id,
    multiple: multiple,
    size: typeof size === "number" ? size : null,
    type: type !== "select" && type !== "textarea" ? type : null
  }, attributes), type === "select" ? select_options() : props.children);

  if (floating_label && !readonly && !plaintext || addon_left || addon_right || type === "checkbox" || type === "radio" || type === "select") {
    Input = /*#__PURE__*/_react.default.createElement('div', {
      className: (0, _classnames.default)({
        "form-check": type === 'checkbox' || type === 'radio'
      }, {
        "form-floating": floating_label
      }, {
        "input-group": addon_left || addon_right
      }, {
        "is-invalid": Boolean(error)
      })
    }, /*#__PURE__*/_react.default.createElement(_react.Fragment, null, !floating_label && addon_left && AddonSpanLeft, Input, addon_right && AddonSpanRight, (floating_label || type === 'checkbox' || type === 'radio') && Label));
  }

  return Input;
});

FormControl.propTypes = propTypes;
FormControl.defaultProps = defaultProps;
var _default = FormControl;
exports.default = _default;