import React from 'react';
import EmojiConvertor from 'emoji-js';
import emojiData from './emojiData';
var emojiConvertor = new EmojiConvertor();
emojiConvertor.init_env();
var EmojiPicker = function EmojiPicker(_ref) {
  var onEmojiPicked = _ref.onEmojiPicked,
    filter = _ref.filter;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-emoji-picker"
  }, emojiData.map(function (category) {
    var filteredEmojis = category.emojis.filter(function (_ref2) {
      var name = _ref2.name;
      return name.includes(filter);
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "sc-emoji-picker--category",
      key: category.name
    }, filteredEmojis.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "sc-emoji-picker--category-title"
    }, category.name), filteredEmojis.map(function (_ref3) {
      var _char = _ref3["char"],
        _name = _ref3._name;
      return /*#__PURE__*/React.createElement("span", {
        key: _char,
        className: "sc-emoji-picker--emoji",
        onClick: function onClick() {
          return onEmojiPicked(_char);
        }
      }, _char);
    }));
  }));
};
export default EmojiPicker;