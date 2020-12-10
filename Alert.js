"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

var propTypes = {
  dismissible: _propTypes.default.bool,
  fade: _propTypes.default.bool,
  color: _propTypes.default.string,
  className: _propTypes.default.string,
  tag: _utils.tagPropType
};
var defaultProps = {
  fade: true,
  show: true,
  dismissible: false,
  color: "primary",
  tag: 'div'
};

var Alert = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;

  var show = props.show,
      fade = props.fade,
      dismissible = props.dismissible,
      color = props.color,
      tag = props.tag,
      className = props.className;

  var alert_close_btn = /*#__PURE__*/_react.default.createElement('button', {
    className: (0, _classnames.default)("btn-close"),
    type: "button",
    "data-dismiss": dismissible ? "alert" : "",
    "aria-label": "Close"
  });

  return /*#__PURE__*/_react.default.createElement(tag, {
    className: (0, _classnames.default)("alert", (_classNames = {}, _classNames["alert-" + color] = color, _classNames), {
      "show": show
    }, {
      "fade": fade
    }, {
      "alert-dismissible": dismissible
    }, className),
    role: "alert",
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.children, dismissible && alert_close_btn));
});

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
var _default = Alert;
exports.default = _default;