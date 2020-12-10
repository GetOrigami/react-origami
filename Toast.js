"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

var _toast = _interopRequireDefault(require("bootstrap/js/src/toast"));

var propTypes = {
  tag: _utils.tagPropType,
  className: _propTypes.default.string
};
var defaultProps = {
  tag: 'div'
};

var _Toast = function _Toast(props) {
  var className = props.className,
      tag = props.tag;
  (0, _react.useEffect)(function () {
    var toast_selector = document.querySelector('.toast');
    new _toast.default(toast_selector);
  }, []);
  return /*#__PURE__*/_react.default.createElement(tag, {
    className: (0, _classnames.default)("toast show", className),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": true
  }, /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "toast-header"
  }, /*#__PURE__*/_react.default.createElement("strong", {
    className: "me-auto"
  }, "Bootstrap"), /*#__PURE__*/_react.default.createElement("small", null, "11 mins ago"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "toast",
    "aria-label": "Close"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "toast-body"
  }, "Hello, world! This is a toast message.")));
};

_Toast.propTypes = propTypes;
_Toast.defaultProps = defaultProps;
var _default = _Toast;
exports.default = _default;