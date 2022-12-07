import React from 'react';
import templateData from './templateData';
var TemplatePicker = function TemplatePicker(_ref) {
  var onTemplatePicked = _ref.onTemplatePicked,
    templateList = _ref.templateList;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-emoji-picker"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-emoji-picker--category"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-emoji-picker--category-title"
  }, "Message Template"), templateList.map(function (template) {
    return /*#__PURE__*/React.createElement("span", {
      className: "template-span",
      key: template.id,
      onClick: function onClick() {
        console.log('=======templateData====', template);
        onTemplatePicked(template);
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