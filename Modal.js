"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

var propTypes = {
  size: _propTypes.default.string,
  fullscreen: _propTypes.default.bool,
  fullscreen_sm_down: _propTypes.default.bool,
  fullscreen_md_down: _propTypes.default.bool,
  fullscreen_lg_down: _propTypes.default.bool,
  fullscreen_xl_down: _propTypes.default.bool,
  fullscreen_xxl_down: _propTypes.default.bool,
  id: _utils.propTypesNumberOrString.isRequired,
  backdrop_static: _propTypes.default.bool,
  centered: _propTypes.default.bool,
  scrollable: _propTypes.default.bool,
  fade: _propTypes.default.bool,
  tag: _utils.tagPropType
};
var defaultProps = {
  centered: false,
  scrollable: false,
  fade: false,
  tag: 'div'
};

var Modal = function Modal(props) {
  var _classNames;

  var size = props.size,
      fullscreen = props.fullscreen,
      fullscreen_sm_down = props.fullscreen_sm_down,
      fullscreen_md_down = props.fullscreen_md_down,
      fullscreen_lg_down = props.fullscreen_lg_down,
      fullscreen_xl_down = props.fullscreen_xl_down,
      fullscreen_xxl_down = props.fullscreen_xxl_down,
      id = props.id,
      backdrop_static = props.backdrop_static,
      centered = props.centered,
      scrollable = props.scrollable,
      fade = props.fade,
      tag = props.tag;

  var modal_content = /*#__PURE__*/_react.default.createElement('div', {
    className: "modal-content"
  }, props.children);

  var modal_dialog = /*#__PURE__*/_react.default.createElement('div', {
    className: (0, _classnames.default)("modal-dialog", {
      "modal-dialog-centered": centered
    }, {
      "modal-dialog-scrollable": scrollable
    }, (_classNames = {}, _classNames["modal-" + size] = size, _classNames), {
      "modal-fullscreen": fullscreen
    }, {
      "modal-fullscreen-sm-down": fullscreen_sm_down
    }, {
      "modal-fullscreen-md-down": fullscreen_md_down
    }, {
      "modal-fullscreen-lg-down": fullscreen_lg_down
    }, {
      "modal-fullscreen-xl-down": fullscreen_xl_down
    }, {
      "modal-fullscreen-xxl-down": fullscreen_xxl_down
    })
  }, modal_content);

  return /*#__PURE__*/_react.default.createElement(tag, {
    className: (0, _classnames.default)("modal", {
      "fade": fade
    }),
    id: id,
    tabIndex: "-1",
    "aria-labelledby": id + "Label",
    "data-bs-backdrop": backdrop_static ? "static" : null,
    "data-bs-keyboard": false,
    role: "dialog"
  }, modal_dialog);
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
var _default = Modal;
exports.default = _default;