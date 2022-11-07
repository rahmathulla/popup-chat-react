"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _MessageList = _interopRequireDefault(require("./MessageList"));
var _UserInput = _interopRequireDefault(require("./UserInput"));
var _Header = _interopRequireDefault(require("./Header"));
var _PinMessage = _interopRequireDefault(require("./PinMessage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ChatWindow(props) {
  var isOpen = props.isOpen,
    onClose = props.onClose,
    agentProfile = props.agentProfile,
    showEmoji = props.showEmoji,
    showTemplate = props.showTemplate,
    fileUpload = props.fileUpload,
    messageList = props.messageList,
    onUserInputSubmit = props.onUserInputSubmit,
    onFilesSelected = props.onFilesSelected,
    onFileDownload = props.onFileDownload,
    pinMessage = props.pinMessage,
    onPinMessage = props.onPinMessage,
    placeholder = props.placeholder;
  var teamName = agentProfile.teamName,
    imageUrl = agentProfile.imageUrl;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('sc-chat-window', {
      'opened': isOpen
    }, {
      'closed': !isOpen
    })
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    teamName: teamName,
    imageUrl: imageUrl,
    onClose: onClose
  }), pinMessage && /*#__PURE__*/_react["default"].createElement(_PinMessage["default"], {
    pinMessage: pinMessage,
    onPinMessage: onPinMessage
  }), /*#__PURE__*/_react["default"].createElement(_MessageList["default"], {
    messages: messageList,
    onFileDownload: onFileDownload,
    imageUrl: imageUrl
  }), /*#__PURE__*/_react["default"].createElement(_UserInput["default"], {
    onSubmit: onUserInputSubmit,
    onFilesSelected: onFilesSelected,
    showEmoji: showEmoji,
    showTemplate: showTemplate,
    fileUpload: fileUpload,
    placeholder: placeholder
  }));
}
ChatWindow.propTypes = process.env.NODE_ENV !== "production" ? {
  isOpen: _propTypes["default"].bool.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  agentProfile: _propTypes["default"].object.isRequired,
  showEmoji: _propTypes["default"].bool,
  showTemplate: _propTypes["default"].bool,
  fileUpload: _propTypes["default"].bool,
  messageList: _propTypes["default"].array,
  onUserInputSubmit: _propTypes["default"].func.isRequired,
  onFilesSelected: _propTypes["default"].func,
  pinMessage: _propTypes["default"].object,
  onPinMessage: _propTypes["default"].func,
  onFileDownload: _propTypes["default"].func,
  placeholder: _propTypes["default"].string
} : {};
var _default = ChatWindow;
exports["default"] = _default;
module.exports = exports.default;