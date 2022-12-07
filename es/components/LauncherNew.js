function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { pipe, prop, length, last, equals } from 'ramda';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ChatWindow from './ChatWindow';
import launcherIcon from '../assets/logo-no-bg.svg';
import launcherIconActive from '../assets/close-icon.png';
import incomingMessageSound from '../assets/sounds/notification.mp3';
function LauncherNew(props) {
  var isOpen = props.isOpen,
    onClick = props.onClick,
    mute = props.mute,
    showEmoji = props.showEmoji,
    showTemplate = props.showTemplate,
    agentProfile = props.agentProfile,
    messageList = props.messageList,
    templateList = props.templateList,
    newMessagesCount = props.newMessagesCount,
    onMessageWasSent = props.onMessageWasSent,
    onFilesSelected = props.onFilesSelected,
    onTemplateSelected = props.onTemplateSelected,
    fileUpload = props.fileUpload,
    onFileDownload = props.onFileDownload,
    pinMessage = props.pinMessage,
    onPinMessage = props.onPinMessage,
    placeholder = props.placeholder;
  var defaultState = {
    isOpen: false,
    messageList: messageList,
    templateList: templateList
  };
  var _useState = useState(defaultState),
    state = _useState[0],
    setState = _useState[1];
  useEffect(function () {
    setState(function (state) {
      return _extends({}, state, {
        isOpen: isOpen
      });
    });
  }, [isOpen]);
  useEffect(function () {
    var prevMessageListLength = pipe(prop('messageList'), length)(state);
    var massageListLength = length(messageList);
    var isIncoming = pipe(last, prop('author'), equals('them'))(messageList);
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
    var audio = new Audio(incomingMessageSound);
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
  return /*#__PURE__*/React.createElement("div", {
    id: "sc-launcher"
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames('sc-launcher', {
      'opened': state.isOpen
    }),
    onClick: handleClick
  }, /*#__PURE__*/React.createElement(MessageCount, {
    count: newMessagesCount,
    isOpen: state.isOpen
  }), /*#__PURE__*/React.createElement("img", {
    className: 'sc-open-icon',
    src: launcherIconActive
  }), /*#__PURE__*/React.createElement("img", {
    className: 'sc-closed-icon',
    src: launcherIcon
  })), /*#__PURE__*/React.createElement(ChatWindow, {
    messageList: messageList,
    templateList: templateList,
    onUserInputSubmit: onMessageWasSent,
    onFilesSelected: onFilesSelected,
    onTemplateSelected: onTemplateSelected,
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
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-new-messages-count"
  }, count);
};
LauncherNew.propTypes = process.env.NODE_ENV !== "production" ? {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  mute: PropTypes.bool,
  showEmoji: PropTypes.bool,
  messageList: PropTypes.arrayOf(PropTypes.object),
  newMessagesCount: PropTypes.number,
  onMessageWasSent: PropTypes.func,
  onMessageWasReceived: PropTypes.func,
  fileUpload: PropTypes.bool,
  pinMessage: PropTypes.object,
  onPinMessage: PropTypes.func,
  placeholder: PropTypes.string
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
export default LauncherNew;