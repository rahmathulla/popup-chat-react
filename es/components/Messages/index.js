import { prop, equals } from 'ramda';
import React from 'react';
import classNames from 'classnames';
import TextMessage from './TextMessage';
import EmojiMessage from './EmojiMessage';
import FileMessage from './FileMessage';
import chatIconUrl from './../../assets/chat-icon.svg';
function Message(_ref) {
  var message = _ref.message,
    onFileDownload = _ref.onFileDownload;
  var type = prop('type', message);
  var author = prop('author', message);
  var me = equals(author, 'me');
  function renderMessageOfType(type) {
    switch (type) {
      case 'text':
        return /*#__PURE__*/React.createElement(TextMessage, message);
      case 'emoji':
        return /*#__PURE__*/React.createElement(EmojiMessage, message);
      case 'file':
        // return <FileMessage {...message} onFileDownload={onFileDownload}/>;
        return /*#__PURE__*/React.createElement(FileMessage, {
          message: message,
          onFileDownload: onFileDownload
        });
      default:
        console.error("Attempting to load message with unsupported file type '" + type + "'");
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-message"
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames('sc-message--content', {
      'sent': me
    }, {
      'received': !me
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-message--avatar",
    style: {
      backgroundImage: "url(" + chatIconUrl + ")"
    }
  }), renderMessageOfType(type)));
}
export default Message;