"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.tagPropType = exports.propTypesBoolOrString = exports.propTypesNumberOrString = exports.classSize = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var classSize = function classSize(size, props, prefix_props, prefix_class) {
  var arr = [];
  size.forEach(function (size, i) {
    if (props[prefix_props + "_" + size]) {
      arr.push([prefix_class + "-" + size + "-" + props[prefix_props + "_" + size]]);
    }
  });

  if (props[prefix_props] !== undefined) {
    arr.push([prefix_class + "-" + props[prefix_props]]);
  }

  return arr;
};

exports.classSize = classSize;

var propTypesNumberOrString = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]);

exports.propTypesNumberOrString = propTypesNumberOrString;

var propTypesBoolOrString = _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]);

exports.propTypesBoolOrString = propTypesBoolOrString;

var tagPropType = _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string, _propTypes.default.shape({
  $$typeof: _propTypes.default.symbol,
  render: _propTypes.default.func
}), _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string, _propTypes.default.shape({
  $$typeof: _propTypes.default.symbol,
  render: _propTypes.default.func
})]))]);

exports.tagPropType = tagPropType;