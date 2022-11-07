"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _ramda = require("ramda");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _ChatWindow = _interopRequireDefault(require("./ChatWindow"));
var _logoNoBg = _interopRequireDefault(require("../assets/logo-no-bg.svg"));
var _closeIcon = _interopRequireDefault(require("../assets/close-icon.png"));
var _notification = _interopRequireDefault(require("../assets/sounds/notification.mp3"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function LauncherNew(props) {
  var isOpen = props.isOpen,
    onClick = props.onClick,
    mute = props.mute,
    showEmoji = props.showEmoji,
    showTemplate = props.showTemplate,
    agentProfile = props.agentProfile,
    messageList = props.messageList,
    newMessagesCount = props.newMessagesCount,
    onMessageWasSent = props.onMessageWasSent,
    onFilesSelected = props.onFilesSelected,
    fileUpload = props.fileUpload,
    onFileDownload = props.onFileDownload,
    pinMessage = props.pinMessage,
    onPinMessage = props.onPinMessage,
    placeholder = props.placeholder;
  var defaultState = {
    isOpen: false,
    messageList: messageList
  };
  var _useState = (0, _react.useState)(defaultState),
    state = _useState[0],
    setState = _useState[1];
  (0, _react.useEffect)(function () {
    setState(function (state) {
      return _extends({}, state, {
        isOpen: isOpen
      });
    });
  }, [isOpen]);
  (0, _react.useEffect)(function () {
    var prevMessageListLength = (0, _ramda.pipe)((0, _ramda.prop)('messageList'), _ramda.length)(state);
    var massageListLength = (0, _ramda.length)(messageList);
    var isIncoming = (0, _ramda.pipe)(_ramda.last, (0, _ramda.prop)('author'), (0, _ramda.equals)('them'))(messageList);
    var isNew = massageListLength > prevMessageListLength;
    if (isIncoming && isNew) {
      if (!mute) {
        playIncomingMessageSound();
      }
      setState(function (state) {
        return _extends({}, state, {
          messageList: messageList
        });
      });
    }
  }, [messageList]);
  function playIncomingMessageSound() {
    var audio = new Audio(_notification["default"]);
    audio.play();
  }
  function handleClick() {
    if (onClick) {
      onClick();
    } else {
      setState(function (state) {
        return _extends({}, state, {
          isOpen: !state.isOpen
        });
      });
    }
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "sc-launcher"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('sc-launcher', {
      'opened': state.isOpen
    }),
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement(MessageCount, {
    count: newMessagesCount,
    isOpen: state.isOpen
  }), /*#__PURE__*/_react["default"].createElement("img", {
    className: 'sc-open-icon',
    src: _closeIcon["default"]
  }), /*#__PURE__*/_react["default"].createElement("img", {
    className: 'sc-closed-icon',
    src: _logoNoBg["default"]
  })), /*#__PURE__*/_react["default"].createElement(_ChatWindow["default"], {
    messageList: messageList,
    onUserInputSubmit: onMessageWasSent,
    onFilesSelected: onFilesSelected,
    agentProfile: agentProfile,
    isOpen: state.isOpen,
    onClose: onClick,
    showEmoji: showEmoji,
    showTemplate: showTemplate,
    fileUpload: fileUpload,
    pinMessage: pinMessage,
    onPinMessage: onPinMessage,
    onFileDownload: onFileDownload,
    placeholder: placeholder
  }));
}
var MessageCount = function MessageCount(_ref) {
  var count = _ref.count,
    isOpen = _ref.isOpen;
  if (count === 0 || isOpen === true) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-new-messages-count"
  }, count);
};
LauncherNew.propTypes = process.env.NODE_ENV !== "production" ? {
  isOpen: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  mute: _propTypes["default"].bool,
  showEmoji: _propTypes["default"].bool,
  messageList: _propTypes["default"].arrayOf(_propTypes["default"].object),
  newMessagesCount: _propTypes["default"].number,
  onMessageWasSent: _propTypes["default"].func,
  onMessageWasReceived: _propTypes["default"].func,
  fileUpload: _propTypes["default"].bool,
  pinMessage: _propTypes["default"].object,
  onPinMessage: _propTypes["default"].func,
  placeholder: _propTypes["default"].string
} : {};
LauncherNew.defaultProps = {
  isOpen: false,
  mute: false,
  showEmoji: true,
  messageList: [],
  newMessagesCount: 0,
  fileUpload: true,
  placeholder: 'Write a reply...'
};
var _default = LauncherNew;
exports["default"] = _default;
module.exports = exports.default;