"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.AccordionContext = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes = {
  id: _utils.propTypesNumberOrString,
  flush: _propTypes.default.bool,
  className: _propTypes.default.string,
  tag: _utils.tagPropType
};
var defaultProps = {
  flush: false,
  tag: 'div'
};

var AccordionContext = /*#__PURE__*/_react.default.createContext({});

exports.AccordionContext = AccordionContext;

var Accordion = function Accordion(props) {
  var id = props.id,
      flush = props.flush,
      tag = props.tag,
      className = props.className,
      attrs = (0, _objectWithoutPropertiesLoose2.default)(props, ["id", "flush", "tag", "className"]);
  var classes = (0, _classnames.default)("accordion", {
    "accordion-flush": flush
  });

  var accordion = /*#__PURE__*/_react.default.createElement(tag, _objectSpread({
    className: classes,
    id: id
  }, attrs), props.children);

  var initContext = {
    data_parent: "#" + id
  };
  return /*#__PURE__*/_react.default.createElement(AccordionContext.Provider, {
    value: initContext
  }, accordion);
};

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;
var _default = Accordion;
exports.default = _default;