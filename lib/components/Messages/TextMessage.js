"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLinkify = _interopRequireDefault(require("react-linkify"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TextMessage = function TextMessage(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-message--text"
  }, /*#__PURE__*/_react["default"].createElement(_reactLinkify["default"], {
    properties: {
      target: '_blank'
    }
  }, props.data.text));
};
var _default = TextMessage;
exports["default"] = _default;
module.exports = exports.default;