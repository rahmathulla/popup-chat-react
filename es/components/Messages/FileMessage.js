import React from 'react';
import FileIcon from './../icons/FileIcon';
var FileMessage = function FileMessage(props) {
  return /*#__PURE__*/React.createElement("a", {
    className: "sc-message--file",
    href: props.data.url,
    download: props.data.fileName
  }, /*#__PURE__*/React.createElement(FileIcon, null), /*#__PURE__*/React.createElement("p", null, props.data.fileName));
};
export default FileMessage;