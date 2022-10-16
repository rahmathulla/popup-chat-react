"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var EmojiMessage = function EmojiMessage(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-message--emoji"
  }, props.data.emoji);
};
var _default = EmojiMessage;
exports["default"] = _default;
module.exports = exports.default;