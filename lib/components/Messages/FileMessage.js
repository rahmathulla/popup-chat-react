"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _FileIcon = _interopRequireDefault(require("./../icons/FileIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FileMessage = function FileMessage(_ref) {
  var message = _ref.message,
    _ref$onFileDownload = _ref.onFileDownload,
    onFileDownload = _ref$onFileDownload === void 0 ? function () {} : _ref$onFileDownload;
  return (
    /*#__PURE__*/
    // <a className="sc-message--file" href={props.data.url} download={props.data.fileName}>
    _react["default"].createElement("a", {
      className: "sc-message--file",
      href: "#"
    }, /*#__PURE__*/_react["default"].createElement(_FileIcon["default"], {
      onClick: function onClick() {
        onFileDownload(message.data.documentId);
      }
    }), /*#__PURE__*/_react["default"].createElement("p", null, message.data.documentId))
  );
};
var _default = FileMessage;
exports["default"] = _default;
module.exports = exports.default;