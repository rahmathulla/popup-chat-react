"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _emojiJs = _interopRequireDefault(require("emoji-js"));
var _emojiData = _interopRequireDefault(require("./emojiData"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var emojiConvertor = new _emojiJs["default"]();
emojiConvertor.init_env();
var EmojiPicker = function EmojiPicker(_ref) {
  var onEmojiPicked = _ref.onEmojiPicked,
    filter = _ref.filter;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-emoji-picker"
  }, _emojiData["default"].map(function (category) {
    var filteredEmojis = category.emojis.filter(function (_ref2) {
      var name = _ref2.name;
      return name.includes(filter);
    });
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "sc-emoji-picker--category",
      key: category.name
    }, filteredEmojis.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
      className: "sc-emoji-picker--category-title"
    }, category.name), filteredEmojis.map(function (_ref3) {
      var _char = _ref3["char"],
        _name = _ref3._name;
      return /*#__PURE__*/_react["default"].createElement("span", {
        key: _char,
        className: "sc-emoji-picker--emoji",
        onClick: function onClick() {
          return onEmojiPicked(_char);
        }
      }, _char);
    }));
  }));
};
var _default = EmojiPicker;
exports["default"] = _default;
module.exports = exports.default;