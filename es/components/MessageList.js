import { prop } from 'ramda';
import React, { useRef, useEffect } from 'react';
import Message from './Messages';
function MessageList(props) {
  var element = useRef(null);
  var elementCurrent = prop('current', element);
  useEffect(function () {
    if (elementCurrent) {
      elementCurrent.scrollTop = elementCurrent.scrollHeight;
    }
  }, [props]);
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-message-list",
    ref: element
  }, props.messages.map(function (message, i) {
    return /*#__PURE__*/React.createElement(Message, {
      message: message,
      key: i
    });
  }));
}
export default MessageList;