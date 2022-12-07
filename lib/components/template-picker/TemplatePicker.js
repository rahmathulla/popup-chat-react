"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _templateData = _interopRequireDefault(require("./templateData"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TemplatePicker = function TemplatePicker(_ref) {
  var onTemplatePicked = _ref.onTemplatePicked,
    templateList = _ref.templateList;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-emoji-picker"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-emoji-picker--category"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-emoji-picker--category-title"
  }, "Message Template"), templateList.map(function (template) {
    return /*#__PURE__*/_react["default"].createElement("span", {
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
var _default = TemplatePicker;
exports["default"] = _default;
module.exports = exports.default;