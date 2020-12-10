"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _popover = _interopRequireDefault(require("bootstrap/js/src/popover"));

var propTypes = {
  boundary: _propTypes.default.string,
  fallbackPlacement: _propTypes.default.array,
  className: _propTypes.default.string,
  container: _propTypes.default.string,
  template: _propTypes.default.node,
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  content: _propTypes.default.string.isRequired,
  selector: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  placement: _propTypes.default.oneOf(['top', 'bottom', 'left', 'right', 'auto']),
  html: _propTypes.default.bool,
  animation: _propTypes.default.bool,
  delay_show: _propTypes.default.number,
  delay_hide: _propTypes.default.number
};
var defaultProps = {
  template: _popover.default.Default.template,
  title: _popover.default.Default.title,
  selector: _popover.default.Default.selector,
  animation: _popover.default.Default.animation,
  html: _popover.default.Default.html,
  placement: _popover.default.Default.placement,
  delay_show: _popover.default.Default.delay,
  delay_hide: _popover.default.Default.delay,
  trigger: _popover.default.Default.trigger,
  fallbackPlacement: _popover.default.Default.fallbackPlacement,
  boundary: _popover.default.Default.boundary,
  container: "#root"
};

var Popover = function Popover(props) {
  var content = props.content,
      fallbackPlacement = props.fallbackPlacement,
      container = props.container,
      selector = props.selector,
      boundary = props.boundary,
      title = props.title,
      template = props.template,
      placement = props.placement,
      delay_show = props.delay_show,
      delay_hide = props.delay_hide,
      trigger = props.trigger,
      className = props.className;
  (0, _react.useLayoutEffect)(function () {
    var popover_selector = document.querySelector('[data-bs-toggle="popover"]');
    var popover = new _popover.default(popover_selector, {
      title: title,
      trigger: trigger,
      placement: placement,
      selector: selector,
      fallbackPlacement: fallbackPlacement,
      template: template,
      content: content,
      boundary: boundary,
      delay: {
        show: delay_show,
        hide: delay_hide
      }
    });
  }, []);

  var children = _react.default.Children.only(props.children);

  return /*#__PURE__*/_react.default.cloneElement(children, {
    className: (0, _classnames.default)(className),
    "data-bs-toggle": "popover",
    "data-bs-container": container,
    tabIndex: 0
  });
};

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;
var _default = Popover;
exports.default = _default;