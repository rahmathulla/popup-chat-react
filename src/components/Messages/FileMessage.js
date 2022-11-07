import React from 'react';
import FileIcon from './../icons/FileIcon';


const FileMessage = ({message,  onFileDownload = () => {}}) => {
  return (
    // <a className="sc-message--file" href={props.data.url} download={props.data.fileName}>
    <a className="sc-message--file" href="#">
 
      <FileIcon  onClick={() => {
        onFileDownload(message.data.documentId);
      }}/>
      <p>{message.data.documentId}</p>
   
    </a>
   
  );
};

export default FileMessage;
