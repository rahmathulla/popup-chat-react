import React, { useState } from 'react';
import { render } from 'react-dom';
import { Launcher } from '../../src';
import messageHistory from './messageHistory';
import messageTemplate from './messageTemplate';
import TestArea from './TestArea';
import Header from './Header';
import Footer from './Footer';
import monsterImgUrl from './../assets/monster.png';
import './../assets/styles';

function Demo() {
  const [state, setState] = useState({
    messageList: messageHistory,
    templateList: messageTemplate,
    newMessagesCount: 0,
    isOpen: false,
    fileUpload: false,
  });

  function onMessageWasSent(message) {
    setState(state => ({
      ...state,
      messageList: [...state.messageList, message]
    }));
  }

  function onTemplateSelected(template) {
   console.log('=======template====', template)
  }

  function onFilesSelected(fileList) {
    const objectURL = window.URL.createObjectURL(fileList[0]);

    setState(state => ({
      ...state,
      messageList: [
        ...state.messageList,
        {
          type: 'file', author: 'me',
          data: {
            url: objectURL,
            fileName: fileList[0].name,
          }
        }
      ]
    }));
  }

  function sendMessage(text) {
    if (text.length > 0) {
      const newMessagesCount = state.isOpen ? state.newMessagesCount : state.newMessagesCount + 1;

      setState(state => ({
        ...state,
        newMessagesCount: newMessagesCount,
        messageList: [
          ...state.messageList,
          {
            author: 'them',
            type: 'text',
            data: { text }
          }
        ]
      }));
    }
  }

  function onClick() {
    setState(state => ({
      ...state,
      isOpen: !state.isOpen,
      newMessagesCount: 0
    }));
  }

  return (
    <div>
      <Header />

      <TestArea
        onMessage={sendMessage}
      />

      <Launcher
        agentProfile={{
          teamName: 'Whatsapp Chat',
          imageUrl: 'https://www.shareicon.net/data/48x48/2015/09/13/100522_app_512x512.png'
        }}
        onMessageWasSent={onMessageWasSent}
        onFilesSelected={onFilesSelected}
        onTemplateSelected={onTemplateSelected}
        messageList={state.messageList}
        templateList={state.templateList}
        newMessagesCount={state.newMessagesCount}
        onClick={onClick}
        isOpen={state.isOpen}
        showEmoji={true}
        showTemplate={true}
        fileUpload={state.fileUpload}
        // pinMessage={{
        // 	id: 123,
        //   imageUrl: 'https://www.shareicon.net/data/48x48/2015/09/13/100522_app_512x512.png',
        //   title: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        //   text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        // }}
        onPinMessage={value => console.log(value)}
        placeholder='placeholder'
      />

      <img className="demo-monster-img" src={monsterImgUrl} />
      <Footer />
    </div>
  );
}

render(<Demo/>, document.querySelector('#demo'));
