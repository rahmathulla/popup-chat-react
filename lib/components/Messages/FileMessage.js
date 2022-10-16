"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _FileIcon = _interopRequireDefault(require("./../icons/FileIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FileMessage = function FileMessage(props) {
  return /*#__PURE__*/_react["default"].createElement("a", {
    className: "sc-message--file",
    href: props.data.url,
    download: props.data.fileName
  }, /*#__PURE__*/_react["default"].createElement(_FileIcon["default"], null), /*#__PURE__*/_react["default"].createElement("p", null, props.data.fileName));
};
var _default = FileMessage;
exports["default"] = _default;
module.exports = exports.default;