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

var _Accordion = require("./Accordion");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes = {
  show: _propTypes.default.bool,
  id: _utils.propTypesNumberOrString,
  className: _propTypes.default.string,
  tag: _utils.tagPropType
};
var defaultProps = {
  show: false,
  tag: 'div'
};

var AccordionHeader = function AccordionHeader(props) {
  var context = (0, _react.useContext)(_Accordion.AccordionContext);
  var show = props.show,
      id = props.id,
      tag = props.tag,
      className = props.className,
      attrs = (0, _objectWithoutPropertiesLoose2.default)(props, ["show", "id", "tag", "className"]);
  var classes = (0, _classnames.default)("accordion-collapse", "collapse");
  return /*#__PURE__*/_react.default.createElement(tag, _objectSpread({
    className: classes,
    id: id,
    "data-parent": context.data_parent
  }, attrs), props.children);
};

AccordionHeader.propTypes = propTypes;
AccordionHeader.defaultProps = defaultProps;
var _default = AccordionHeader;
exports.default = _default;