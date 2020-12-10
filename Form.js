"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.FormContext = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes = {
  force_label: _propTypes.default.bool,
  floating_label: _propTypes.default.bool,
  type_error: _propTypes.default.string,
  tag: _utils.tagPropType,
  ref: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func, _propTypes.default.string]),
  className: _propTypes.default.string
};
var defaultProps = {
  force_label: false,
  floating_label: false,
  type_error: "feedback",
  tag: 'form'
};

var FormContext = /*#__PURE__*/_react.default.createContext({});

exports.FormContext = FormContext;

var Form = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var force_label = props.force_label,
      floating_label = props.floating_label,
      type_error = props.type_error,
      className = props.className,
      tag = props.tag,
      attributes = (0, _objectWithoutPropertiesLoose2.default)(props, ["force_label", "floating_label", "type_error", "className", "tag"]);
  var classes = (0, _classnames.default)(className);
  var init_context = {
    type_error: type_error,
    floating_label: floating_label,
    force_label: force_label,
    size: null
  };
  return /*#__PURE__*/_react.default.createElement(tag, _objectSpread(_objectSpread({}, attributes), {}, {
    ref: ref,
    className: classes ? classes : null
  }), /*#__PURE__*/_react.default.createElement(FormContext.Provider, {
    value: init_context
  }, props.children));
});

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
var _default = Form;
exports.default = _default;