import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MessageList from './MessageList';
import UserInput from './UserInput';
import Header from './Header';
import PinMessage from './PinMessage';

function ChatWindow(props) {
  const {
    isOpen,
    onClose,
    agentProfile,
    showEmoji,
    showTemplate,
    fileUpload,
    messageList,
    onUserInputSubmit,
    onFilesSelected,
    onFileDownload,
    pinMessage,
	  onPinMessage,
    placeholder,
  } = props;

  const {
    teamName,
    imageUrl,
  } = agentProfile;

  return (
    <div className={classNames('sc-chat-window', { 'opened': isOpen }, { 'closed': !isOpen })}>
      <Header
        teamName={teamName}
        imageUrl={imageUrl}
        onClose={onClose}
      />

      {pinMessage && <PinMessage pinMessage={pinMessage} onPinMessage={onPinMessage} />}

      <MessageList
        messages={messageList}
        onFileDownload={onFileDownload}
        imageUrl={imageUrl}
      />
      <UserInput
        onSubmit={onUserInputSubmit}
        onFilesSelected={onFilesSelected}
        showEmoji={showEmoji}
        showTemplate={showTemplate}
        fileUpload={fileUpload}
        placeholder={placeholder}
      />
    </div>
  );
}

ChatWindow.propTypes = {
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
  placeholder: PropTypes.string,
};

export default ChatWindow;
