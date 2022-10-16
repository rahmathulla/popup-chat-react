"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _ramda = require("ramda");
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _TextMessage = _interopRequireDefault(require("./TextMessage"));
var _EmojiMessage = _interopRequireDefault(require("./EmojiMessage"));
var _FileMessage = _interopRequireDefault(require("./FileMessage"));
var _chatIcon = _interopRequireDefault(require("./../../assets/chat-icon.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Message(_ref) {
  var message = _ref.message;
  var type = (0, _ramda.prop)('type', message);
  var author = (0, _ramda.prop)('author', message);
  var me = (0, _ramda.equals)(author, 'me');
  function renderMessageOfType(type) {
    switch (type) {
      case 'text':
        return /*#__PURE__*/_react["default"].createElement(_TextMessage["default"], message);
      case 'emoji':
        return /*#__PURE__*/_react["default"].createElement(_EmojiMessage["default"], message);
      case 'file':
        return /*#__PURE__*/_react["default"].createElement(_FileMessage["default"], message);
      default:
        console.error("Attempting to load message with unsupported file type '" + type + "'");
    }
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-message"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('sc-message--content', {
      'sent': me
    }, {
      'received': !me
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-message--avatar",
    style: {
      backgroundImage: "url(" + _chatIcon["default"] + ")"
    }
  }), renderMessageOfType(type)));
}
var _default = Message;
exports["default"] = _default;
module.exports = exports.default;