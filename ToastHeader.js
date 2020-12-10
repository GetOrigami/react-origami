"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

var propTypes = {
  tag: _utils.tagPropType,
  className: _propTypes.default.string
};
var defaultProps = {
  tag: 'div'
};

var ToastHeader = function ToastHeader(props) {
  var tag = props.tag;

  var toast_header = /*#__PURE__*/_react.default.createElement(tag, {
    className: (0, _classnames.default)("toast-header")
  }, props.children);

  return toast_header;
};

ToastHeader.propTypes = propTypes;
ToastHeader.defaultProps = defaultProps;
var _default = ToastHeader;
exports.default = _default;