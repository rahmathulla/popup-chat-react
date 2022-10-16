function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
import launcherIcon from './../assets/logo-no-bg.svg';
import incomingMessageSound from './../assets/sounds/notification.mp3';
import launcherIconActive from './../assets/close-icon.png';
var Launcher = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Launcher, _Component);
  function Launcher() {
    var _this;
    _this = _Component.call(this) || this;
    _this.state = {
      launcherIcon: launcherIcon,
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
    var audio = new Audio(incomingMessageSound);
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
    return /*#__PURE__*/React.createElement("div", {
      id: "sc-launcher"
    }, /*#__PURE__*/React.createElement("div", {
      className: classList.join(' '),
      onClick: this.handleClick.bind(this)
    }, /*#__PURE__*/React.createElement(MessageCount, {
      count: this.props.newMessagesCount,
      isOpen: isOpen
    }), /*#__PURE__*/React.createElement("img", {
      className: 'sc-open-icon',
      src: launcherIconActive
    }), /*#__PURE__*/React.createElement("img", {
      className: 'sc-closed-icon',
      src: launcherIcon
    })), /*#__PURE__*/React.createElement(ChatWindow, {
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
}(Component);
var MessageCount = function MessageCount(props) {
  if (props.count === 0 || props.isOpen === true) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: 'sc-new-messages-count'
  }, props.count);
};
Launcher.propTypes = process.env.NODE_ENV !== "production" ? {
  onMessageWasReceived: PropTypes.func,
  onMessageWasSent: PropTypes.func,
  newMessagesCount: PropTypes.number,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  messageList: PropTypes.arrayOf(PropTypes.object),
  mute: PropTypes.bool,
  showEmoji: PropTypes.bool
} : {};
Launcher.defaultProps = {
  newMessagesCount: 0,
  showEmoji: true
};
export default Launcher;