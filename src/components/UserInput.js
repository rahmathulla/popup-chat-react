import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SendIcon from './icons/SendIcon';
import FileIcon from './icons/FileIcon';
import EmojiIcon from './icons/EmojiIcon';
import PopupWindow from './popups/PopupWindow';
import EmojiPicker from './emoji-picker/EmojiPicker';
import TemplatePicker from './template-picker/TemplatePicker';
import TemplatePopupWindow from './popups/TemplatePopupWindow';
import TemplateIcon from './icons/TemplateIcon';

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      inputActive: false,
      inputHasText: false,
      emojiPickerIsOpen: false,
      templatePickerIsOpen: false,
      emojiFilter: ''
    };
  }

  componentDidMount() {
    //this.emojiPickerButton = document.querySelector('#sc-emoji-picker-button'); 
    this.templatePickerButton = document.querySelector('#sc-template-picker-button'); 
  }

  handleKeyDown(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      return this._submitText(event);
    }
  }

  handleKeyUp(event) {
    const inputHasText = event.target.innerHTML.length !== 0 &&
      event.target.innerText !== '\n';
    this.setState({ inputHasText });
  }

  _showFilePicker() {
    this._fileUploadButton.click();
  }

  toggleEmojiPicker = (e) => {
    e.preventDefault();
    if (!this.state.emojiPickerIsOpen) {
      this.setState({ emojiPickerIsOpen: true });
    }
  }

  closeEmojiPicker = (e) => {
    if (this.emojiPickerButton.contains(e.target)) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({ emojiPickerIsOpen: false });
  }


  toggleTemplatePicker = (e) => {
    e.preventDefault();
    if (!this.state.templatePickerIsOpen) {
      this.setState({ templatePickerIsOpen: true });
    }
  }

  closeTemplatePicker = (e) => {
    if (this.templatePickerButton.contains(e.target)) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({ templatePickerIsOpen: false });
  }

  _submitText(event) {
    event.preventDefault();
    const text = this.userInput.textContent;
    if (text && text.length > 0) {
      this.props.onSubmit({
        author: 'me',
        type: 'text',
        data: { text }
      });
      this.userInput.innerHTML = '';
    }
  }

  _onFilesSelected(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.props.onFilesSelected(event.target.files);
    }
  }

  _handleEmojiPicked = (emoji) => {
    this.setState({ emojiPickerIsOpen: false });
    if(this.state.inputHasText) {
      this.userInput.innerHTML += emoji;
    } else {
      this.props.onSubmit({
        author: 'me',
        type: 'emoji',
        data: { emoji }
      });
    }
  }

  _handleTemplatePicked = (template) => {
    this.setState({ templatePickerIsOpen: false });
    this.props.onTemplateSelected(template);
  }

  handleEmojiFilterChange = (event) => {
    const emojiFilter = event.target.value;
    this.setState({ emojiFilter });
  }

  _renderEmojiPopup = () => (
    <PopupWindow
      isOpen={this.state.emojiPickerIsOpen}
      onClickedOutside={this.closeEmojiPicker}
      onInputChange={this.handleEmojiFilterChange}
    >
      <EmojiPicker
        onEmojiPicked={this._handleEmojiPicked}
        filter={this.state.emojiFilter}
      />
    </PopupWindow>
  )

  _renderTemplatePopup = () => (
    <TemplatePopupWindow
      isOpen={this.state.templatePickerIsOpen}
      onClickedOutside={this.closeTemplatePicker}
    >
      <TemplatePicker
        onTemplatePicked={this._handleTemplatePicked}
        templateList={this.props.templateList}
        filter={this.state.emojiFilter}
      />
    </TemplatePopupWindow>
  )

  _renderSendOrFileIcon() {
    if (!this.props.fileUpload) {
      return (
        <div className="sc-user-input--button">
          <SendIcon onClick={this._submitText.bind(this)} />
        </div>
      );
    }

    if (this.state.inputHasText) {
      return (
        <div className="sc-user-input--button">
          <SendIcon onClick={this._submitText.bind(this)} />
        </div>
      );
    }

    return (
      <div className="sc-user-input--button">
        <FileIcon onClick={this._showFilePicker.bind(this)} />
        <input
          type="file"
          name="files[]"
          multiple
          ref={(e) => { this._fileUploadButton = e; }}
          onChange={this._onFilesSelected.bind(this)}
        />
      </div>
    );
  }

  render() {
    const { templatePickerIsOpen, emojiPickerIsOpen, inputActive } = this.state;
    return (
      <form className={`sc-user-input ${(inputActive ? 'active' : '')}`}>
        <div
          role="button"
          tabIndex="0"
          onFocus={() => { this.setState({ inputActive: true }); }}
          onBlur={() => { this.setState({ inputActive: false }); }}
          ref={(e) => { this.userInput = e; }}
          onKeyDown={this.handleKeyDown.bind(this)}
          onKeyUp={this.handleKeyUp.bind(this)}
          contentEditable="true"
          placeholder={this.props.placeholder}
          className="sc-user-input--text"
        />

        <div className="sc-user-input--buttons">
          {/* <div className="sc-user-input--button"/> */}

          <div className="sc-user-input--button">
          {/* {this.props.showEmoji && <EmojiIcon
              onClick={this.toggleEmojiPicker}
              isActive={emojiPickerIsOpen}
              tooltip={this._renderEmojiPopup()}
            />} */}

          {this.props.showTemplate && <TemplateIcon
              onClick={this.toggleTemplatePicker}
              isActive={templatePickerIsOpen}
              tooltip={this._renderTemplatePopup()}
            />}
          </div>

          {this._renderSendOrFileIcon()}
        </div>
      </form>
    );
  }
}

UserInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onFilesSelected: PropTypes.func.isRequired,
  showEmoji: PropTypes.bool
};

export default UserInput;
