"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _SendIcon = _interopRequireDefault(require("./icons/SendIcon"));
var _FileIcon = _interopRequireDefault(require("./icons/FileIcon"));
var _EmojiIcon = _interopRequireDefault(require("./icons/EmojiIcon"));
var _PopupWindow = _interopRequireDefault(require("./popups/PopupWindow"));
var _EmojiPicker = _interopRequireDefault(require("./emoji-picker/EmojiPicker"));
var _TemplatePicker = _interopRequireDefault(require("./template-picker/TemplatePicker"));
var _TemplatePopupWindow = _interopRequireDefault(require("./popups/TemplatePopupWindow"));
var _TemplateIcon = _interopRequireDefault(require("./icons/TemplateIcon"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
    _defineProperty(_assertThisInitialized(_this), "toggleTemplatePicker", function (e) {
      e.preventDefault();
      if (!_this.state.templatePickerIsOpen) {
        _this.setState({
          templatePickerIsOpen: true
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "closeTemplatePicker", function (e) {
      if (_this.templatePickerButton.contains(e.target)) {
        e.stopPropagation();
        e.preventDefault();
      }
      _this.setState({
        templatePickerIsOpen: false
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
    _defineProperty(_assertThisInitialized(_this), "_handleTemplatePicked", function (template) {
      _this.setState({
        templatePickerIsOpen: false
      });
      _this.props.onTemplateSelected(template);
    });
    _defineProperty(_assertThisInitialized(_this), "handleEmojiFilterChange", function (event) {
      var emojiFilter = event.target.value;
      _this.setState({
        emojiFilter: emojiFilter
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_renderEmojiPopup", function () {
      return /*#__PURE__*/_react["default"].createElement(_PopupWindow["default"], {
        isOpen: _this.state.emojiPickerIsOpen,
        onClickedOutside: _this.closeEmojiPicker,
        onInputChange: _this.handleEmojiFilterChange
      }, /*#__PURE__*/_react["default"].createElement(_EmojiPicker["default"], {
        onEmojiPicked: _this._handleEmojiPicked,
        filter: _this.state.emojiFilter
      }));
    });
    _defineProperty(_assertThisInitialized(_this), "_renderTemplatePopup", function () {
      return /*#__PURE__*/_react["default"].createElement(_TemplatePopupWindow["default"], {
        isOpen: _this.state.templatePickerIsOpen,
        onClickedOutside: _this.closeTemplatePicker
      }, /*#__PURE__*/_react["default"].createElement(_TemplatePicker["default"], {
        onTemplatePicked: _this._handleTemplatePicked,
        templateList: _this.props.templateList,
        filter: _this.state.emojiFilter
      }));
    });
    _this.state = {
      inputActive: false,
      inputHasText: false,
      emojiPickerIsOpen: false,
      templatePickerIsOpen: false,
      emojiFilter: ''
    };
    return _this;
  }
  var _proto = UserInput.prototype;
  _proto.componentDidMount = function componentDidMount() {
    //this.emojiPickerButton = document.querySelector('#sc-emoji-picker-button'); 
    this.templatePickerButton = document.querySelector('#sc-template-picker-button');
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
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "sc-user-input--button"
      }, /*#__PURE__*/_react["default"].createElement(_SendIcon["default"], {
        onClick: this._submitText.bind(this)
      }));
    }
    if (this.state.inputHasText) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "sc-user-input--button"
      }, /*#__PURE__*/_react["default"].createElement(_SendIcon["default"], {
        onClick: this._submitText.bind(this)
      }));
    }
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "sc-user-input--button"
    }, /*#__PURE__*/_react["default"].createElement(_FileIcon["default"], {
      onClick: this._showFilePicker.bind(this)
    }), /*#__PURE__*/_react["default"].createElement("input", {
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
      templatePickerIsOpen = _this$state.templatePickerIsOpen,
      emojiPickerIsOpen = _this$state.emojiPickerIsOpen,
      inputActive = _this$state.inputActive;
    return /*#__PURE__*/_react["default"].createElement("form", {
      className: "sc-user-input " + (inputActive ? 'active' : '')
    }, /*#__PURE__*/_react["default"].createElement("div", {
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
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "sc-user-input--buttons"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "sc-user-input--button"
    }, this.props.showTemplate && /*#__PURE__*/_react["default"].createElement(_TemplateIcon["default"], {
      onClick: this.toggleTemplatePicker,
      isActive: templatePickerIsOpen,
      tooltip: this._renderTemplatePopup()
    })), this._renderSendOrFileIcon()));
  };
  return UserInput;
}(_react.Component);
UserInput.propTypes = process.env.NODE_ENV !== "production" ? {
  onSubmit: _propTypes["default"].func.isRequired,
  onFilesSelected: _propTypes["default"].func.isRequired,
  showEmoji: _propTypes["default"].bool
} : {};
var _default = UserInput;
exports["default"] = _default;
module.exports = exports.default;