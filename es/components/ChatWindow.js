import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MessageList from './MessageList';
import UserInput from './UserInput';
import Header from './Header';
import PinMessage from './PinMessage';
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
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('sc-chat-window', {
      'opened': isOpen
    }, {
      'closed': !isOpen
    })
  }, /*#__PURE__*/React.createElement(Header, {
    teamName: teamName,
    imageUrl: imageUrl,
    onClose: onClose
  }), pinMessage && /*#__PURE__*/React.createElement(PinMessage, {
    pinMessage: pinMessage,
    onPinMessage: onPinMessage
  }), /*#__PURE__*/React.createElement(MessageList, {
    messages: messageList,
    onFileDownload: onFileDownload,
    imageUrl: imageUrl
  }), /*#__PURE__*/React.createElement(UserInput, {
    onSubmit: onUserInputSubmit,
    onFilesSelected: onFilesSelected,
    showEmoji: showEmoji,
    showTemplate: showTemplate,
    fileUpload: fileUpload,
    placeholder: placeholder
  }));
}
ChatWindow.propTypes = process.env.NODE_ENV !== "production" ? {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  agentProfile: PropTypes.object.isRequired,
  showEmoji: PropTypes.bool,
  showTemplate: PropTypes.bool,
  fileUpload: PropTypes.bool,
  messageList: PropTypes.array,
  onUserInputSubmit: PropTypes.func.isRequired,
  onFilesSelected: PropTypes.func,
  pinMessage: PropTypes.object,
  onPinMessage: PropTypes.func,
  onFileDownload: PropTypes.func,
  placeholder: PropTypes.string
} : {};
export default ChatWindow;