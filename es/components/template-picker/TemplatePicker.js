import React from 'react';
import templateData from './templateData';
var TemplatePicker = function TemplatePicker(_ref) {
  var onTemplatePicked = _ref.onTemplatePicked;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-emoji-picker"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-emoji-picker--category"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-emoji-picker--category-title"
  }, "Message Template"), templateData.map(function (template) {
    return /*#__PURE__*/React.createElement("button", {
      key: template.id,
      onClick: function onClick() {
        return onTemplatePicked(template);
      }
    }, template.name)
    // <span
    //   key={char}
    //   className="sc-emoji-picker--emoji"
    //   onClick={() => onEmojiPicked(char)}
    // >
    //   {char}
    // </span>
    ;
  })));
};

export default TemplatePicker;