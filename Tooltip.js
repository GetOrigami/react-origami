"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tooltip = _interopRequireDefault(require("bootstrap/js/src/tooltip"));

var propTypes = {
  fallbackPlacement: _propTypes.default.array,
  className: _propTypes.default.string,
  container: _propTypes.default.string,
  template: _propTypes.default.node,
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired,
  selector: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  placement: _propTypes.default.oneOf(['top', 'bottom', 'left', 'right', 'auto']),
  html: _propTypes.default.bool,
  animation: _propTypes.default.bool,
  delay_show: _propTypes.default.number,
  delay_hide: _propTypes.default.number
};
var defaultProps = {
  template: _tooltip.default.Default.template,
  selector: _tooltip.default.Default.selector,
  animation: _tooltip.default.Default.animation,
  html: _tooltip.default.Default.html,
  placement: _tooltip.default.Default.placement,
  delay_show: _tooltip.default.Default.delay,
  delay_hide: _tooltip.default.Default.delay,
  trigger: _tooltip.default.Default.trigger,
  fallbackPlacement: _tooltip.default.Default.fallbackPlacement,
  container: "#root"
};

var Tooltip = function Tooltip(props) {
  var fallbackPlacement = props.fallbackPlacement,
      container = props.container,
      selector = props.selector,
      title = props.title,
      template = props.template,
      placement = props.placement,
      delay_show = props.delay_show,
      delay_hide = props.delay_hide,
      trigger = props.trigger,
      className = props.className;
  (0, _react.useEffect)(function () {
    var tooltip_selector = document.querySelector('[data-bs-toggle="tooltip"]');
    var tooltip = new _tooltip.default(tooltip_selector, {
      title: title,
      placement: placement,
      trigger: trigger,
      selector: selector,
      fallbackPlacement: fallbackPlacement,
      template: template,
      delay: {
        show: delay_show,
        hide: delay_hide
      }
    });
  }, []);

  var children = _react.default.Children.only(props.children);

  return /*#__PURE__*/_react.default.cloneElement(children, {
    className: (0, _classnames.default)(className),
    "data-bs-toggle": "tooltip",
    "data-bs-container": container,
    tabIndex: "0"
  });
};

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
var _default = Tooltip;
exports.default = _default;