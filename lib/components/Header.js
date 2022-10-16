"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _closeIcon = _interopRequireDefault(require("./../assets/close-icon.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Header(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-header"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "sc-header--img",
    src: props.imageUrl,
    alt: ""
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-header--team-name"
  }, " ", props.teamName, " "), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-header--close-button",
    onClick: props.onClose
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _closeIcon["default"],
    alt: ""
  })));
}
var _default = Header;
exports["default"] = _default;
module.exports = exports.default;