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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes = {
  onClose: _propTypes.default.func,
  close_btn_lg: _propTypes.default.bool,
  title: _propTypes.default.string,
  tag: _utils.tagPropType,
  className: _propTypes.default.string
};
var defaultProps = {
  close_btn_lg: false,
  onClose: null,
  tag: 'div'
};

var ModalHeader = function ModalHeader(props) {
  var title = props.title,
      close_btn_lg = props.close_btn_lg,
      className = props.className,
      tag = props.tag,
      attrs = (0, _objectWithoutPropertiesLoose2.default)(props, ["title", "close_btn_lg", "className", "tag"]);

  var btn_close = /*#__PURE__*/_react.default.createElement('button', {
    className: (0, _classnames.default)("btn-close", {
      "btn-sm": !close_btn_lg
    }, {
      "btn-lg": close_btn_lg
    }),
    type: "button",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  }, props.children);

  var modal_title = /*#__PURE__*/_react.default.createElement('h5', {
    className: (0, _classnames.default)("modal-title")
  }, title);

  return /*#__PURE__*/_react.default.createElement(tag, _objectSpread({
    className: (0, _classnames.default)("modal-header", className)
  }, attrs), /*#__PURE__*/_react.default.createElement(_react.Fragment, null, modal_title, btn_close));
};

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;
var _default = ModalHeader;
exports.default = _default;