function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SendIcon from './icons/SendIcon';
import FileIcon from './icons/FileIcon';
import EmojiIcon from './icons/EmojiIcon';
import PopupWindow from './popups/PopupWindow';
import EmojiPicker from './emoji-picker/EmojiPicker';
var UserInput = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UserInput, _Component);
  function UserInput() {
    var _this;
    _this = _Component.call(this) || this;
    _defineProperty(_assertThisInitialized(_this), "toggleEmojiPicker", function (e) {
      e.preventDefault();
      if (!_this.state.emojiPickerIsOpen) {
        _this.setState({
          emojiPickerIsOpen: true
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "closeEmojiPicker", function (e) {
      if (_this.emojiPickerButton.contains(e.target)) {
        e.stopPropagation();
        e.preventDefault();
      }
      _this.setState({
        emojiPickerIsOpen: false
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_handleEmojiPicked", function (emoji) {
      _this.setState({
        emojiPickerIsOpen: false
      });
      if (_this.state.inputHasText) {
        _this.userInput.innerHTML += emoji;
      } else {
        _this.props.onSubmit({
          author: 'me',
          type: 'emoji',
          data: {
            emoji: emoji
          }
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleEmojiFilterChange", function (event) {
      var emojiFilter = event.target.value;
      _this.setState({
        emojiFilter: emojiFilter
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_renderEmojiPopup", function () {
      return /*#__PURE__*/React.createElement(PopupWindow, {
        isOpen: _this.state.emojiPickerIsOpen,
        onClickedOutside: _this.closeEmojiPicker,
        onInputChange: _this.handleEmojiFilterChange
      }, /*#__PURE__*/React.createElement(EmojiPicker, {
        onEmojiPicked: _this._handleEmojiPicked,
        filter: _this.state.emojiFilter
      }));
    });
    _this.state = {
      inputActive: false,
      inputHasText: false,
      emojiPickerIsOpen: false,
      emojiFilter: ''
    };
    return _this;
  }
  var _proto = UserInput.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.emojiPickerButton = document.querySelector('#sc-emoji-picker-button');
  };
  _proto.handleKeyDown = function handleKeyDown(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      return this._submitText(event);
    }
  };
  _proto.handleKeyUp = function handleKeyUp(event) {
    var inputHasText = event.target.innerHTML.length !== 0 && event.target.innerText !== '\n';
    this.setState({
      inputHasText: inputHasText
    });
  };
  _proto._showFilePicker = function _showFilePicker() {
    this._fileUploadButton.click();
  };
  _proto._submitText = function _submitText(event) {
    event.preventDefault();
    var text = this.userInput.textContent;
    if (text && text.length > 0) {
      this.props.onSubmit({
        author: 'me',
        type: 'text',
        data: {
          text: text
        }
      });
      this.userInput.innerHTML = '';
    }
  };
  _proto._onFilesSelected = function _onFilesSelected(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.props.onFilesSelected(event.target.files);
    }
  };
  _proto._renderSendOrFileIcon = function _renderSendOrFileIcon() {
    var _this2 = this;
    if (!this.props.fileUpload) {
      return /*#__PURE__*/React.createElement("div", {
        className: "sc-user-input--button"
      }, /*#__PURE__*/React.createElement(SendIcon, {
        onClick: this._submitText.bind(this)
      }));
    }
    if (this.state.inputHasText) {
      return /*#__PURE__*/React.createElement("div", {
        className: "sc-user-input--button"
      }, /*#__PURE__*/React.createElement(SendIcon, {
        onClick: this._submitText.bind(this)
      }));
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "sc-user-input--button"
    }, /*#__PURE__*/React.createElement(FileIcon, {
      onClick: this._showFilePicker.bind(this)
    }), /*#__PURE__*/React.createElement("input", {
      type: "file",
      name: "files[]",
      multiple: true,
      ref: function ref(e) {
        _this2._fileUploadButton = e;
      },
      onChange: this._onFilesSelected.bind(this)
    }));
  };
  _proto.render = function render() {
    var _this3 = this;
    var _this$state = this.state,
      emojiPickerIsOpen = _this$state.emojiPickerIsOpen,
      inputActive = _this$state.inputActive;
    return /*#__PURE__*/React.createElement("form", {
      className: "sc-user-input " + (inputActive ? 'active' : '')
    }, /*#__PURE__*/React.createElement("div", {
      role: "button",
      tabIndex: "0",
      onFocus: function onFocus() {
        _this3.setState({
          inputActive: true
        });
      },
      onBlur: function onBlur() {
        _this3.setState({
          inputActive: false
        });
      },
      ref: function ref(e) {
        _this3.userInput = e;
      },
      onKeyDown: this.handleKeyDown.bind(this),
      onKeyUp: this.handleKeyUp.bind(this),
      contentEditable: "true",
      placeholder: this.props.placeholder,
      className: "sc-user-input--text"
    }), /*#__PURE__*/React.createElement("div", {
      className: "sc-user-input--buttons"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-user-input--button"
    }), /*#__PURE__*/React.createElement("div", {
      className: "sc-user-input--button"
    }, this.props.showEmoji && /*#__PURE__*/React.createElement(EmojiIcon, {
      onClick: this.toggleEmojiPicker,
      isActive: emojiPickerIsOpen,
      tooltip: this._renderEmojiPopup()
    })), this._renderSendOrFileIcon()));
  };
  return UserInput;
}(Component);
UserInput.propTypes = process.env.NODE_ENV !== "production" ? {
  onSubmit: PropTypes.func.isRequired,
  onFilesSelected: PropTypes.func.isRequired,
  showEmoji: PropTypes.bool
} : {};
export default UserInput;