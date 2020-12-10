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

var propTypes = {
  tag: _utils.tagPropType,
  list_tag: _utils.tagPropType,
  className: _propTypes.default.string,
  'aria-label': _propTypes.default.string
};
var defaultProps = {
  tag: 'nav',
  list_tag: 'ol',
  'aria-label': 'breadcrumb'
};

var Breadcrumb = function Breadcrumb(props) {
  var className = props.className,
      list_className = props.list_className,
      tag = props.tag,
      list_tag = props.list_tag,
      label = props['aria-label'],
      attrs = (0, _objectWithoutPropertiesLoose2.default)(props, ["className", "list_className", "tag", "list_tag", "aria-label"]);

  var breadcrumb_list = /*#__PURE__*/_react.default.createElement(list_tag, {
    className: (0, _classnames.default)("breadcrumb", list_className)
  }, props.children);

  var classes = (0, _classnames.default)(className);
  return /*#__PURE__*/_react.default.createElement(tag, _objectSpread({
    className: classes ? classes : null,
    "aria-label": label
  }, attrs), breadcrumb_list);
};

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;
var _default = Breadcrumb;
exports.default = _default;