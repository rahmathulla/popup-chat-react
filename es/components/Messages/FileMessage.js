import React from 'react';
import FileIcon from './../icons/FileIcon';
var FileMessage = function FileMessage(_ref) {
  var message = _ref.message,
    _ref$onFileDownload = _ref.onFileDownload,
    onFileDownload = _ref$onFileDownload === void 0 ? function () {} : _ref$onFileDownload;
  return (
    /*#__PURE__*/
    // <a className="sc-message--file" href={props.data.url} download={props.data.fileName}>
    React.createElement("a", {
      className: "sc-message--file",
      href: "#"
    }, /*#__PURE__*/React.createElement(FileIcon, {
      onClick: function onClick() {
        onFileDownload(message.data.documentId);
      }
    }), /*#__PURE__*/React.createElement("p", null, message.data.documentId))
  );
};
export default FileMessage;