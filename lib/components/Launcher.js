"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _ChatWindow = _interopRequireDefault(require("./ChatWindow"));
var _logoNoBg = _interopRequireDefault(require("./../assets/logo-no-bg.svg"));
var _notification = _interopRequireDefault(require("./../assets/sounds/notification.mp3"));
var _closeIcon = _interopRequireDefault(require("./../assets/close-icon.png"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Launcher = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Launcher, _Component);
  function Launcher() {
    var _this;
    _this = _Component.call(this) || this;
    _this.state = {
      launcherIcon: _logoNoBg["default"],
      isOpen: false
    };
    return _this;
  }
  var _proto = Launcher.prototype;
  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.mute) {
      return;
    }
    var nextMessage = nextProps.messageList[nextProps.messageList.length - 1];
    var isIncoming = (nextMessage || {}).author === 'them';
    var isNew = nextProps.messageList.length > this.props.messageList.length;
    if (isIncoming && isNew) {
      this.playIncomingMessageSound();
    }
  };
  _proto.playIncomingMessageSound = function playIncomingMessageSound() {
    var audio = new Audio(_notification["default"]);
    audio.play();
  };
  _proto.handleClick = function handleClick() {
    if (this.props.handleClick !== undefined) {
      this.props.handleClick();
    } else {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  };
  _proto.render = function render() {
    var isOpen = this.props.hasOwnProperty('isOpen') ? this.props.isOpen : this.state.isOpen;
    var classList = ['sc-launcher', isOpen ? 'opened' : ''];
    return /*#__PURE__*/_react["default"].createElement("div", {
      id: "sc-launcher"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: classList.join(' '),
      onClick: this.handleClick.bind(this)
    }, /*#__PURE__*/_react["default"].createElement(MessageCount, {
      count: this.props.newMessagesCount,
      isOpen: isOpen
    }), /*#__PURE__*/_react["default"].createElement("img", {
      className: 'sc-open-icon',
      src: _closeIcon["default"]
    }), /*#__PURE__*/_react["default"].createElement("img", {
      className: 'sc-closed-icon',
      src: _logoNoBg["default"]
    })), /*#__PURE__*/_react["default"].createElement(_ChatWindow["default"], {
      messageList: this.props.messageList,
      onUserInputSubmit: this.props.onMessageWasSent,
      onFilesSelected: this.props.onFilesSelected,
      agentProfile: this.props.agentProfile,
      isOpen: isOpen,
      onClose: this.handleClick.bind(this),
      showEmoji: this.props.showEmoji
    }));
  };
  return Launcher;
}(_react.Component);
var MessageCount = function MessageCount(props) {
  if (props.count === 0 || props.isOpen === true) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'sc-new-messages-count'
  }, props.count);
};
Launcher.propTypes = process.env.NODE_ENV !== "production" ? {
  onMessageWasReceived: _propTypes["default"].func,
  onMessageWasSent: _propTypes["default"].func,
  newMessagesCount: _propTypes["default"].number,
  isOpen: _propTypes["default"].bool,
  handleClick: _propTypes["default"].func,
  messageList: _propTypes["default"].arrayOf(_propTypes["default"].object),
  mute: _propTypes["default"].bool,
  showEmoji: _propTypes["default"].bool
} : {};
Launcher.defaultProps = {
  newMessagesCount: 0,
  showEmoji: true
};
var _default = Launcher;
exports["default"] = _default;
module.exports = exports.default;