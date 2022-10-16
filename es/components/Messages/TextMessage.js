import React from 'react';
import Linkify from 'react-linkify';
var TextMessage = function TextMessage(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-message--text"
  }, /*#__PURE__*/React.createElement(Linkify, {
    properties: {
      target: '_blank'
    }
  }, props.data.text));
};
export default TextMessage;