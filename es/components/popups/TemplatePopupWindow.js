function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
import React, { Component } from 'react';
var TemplatePopupWindow = /*#__PURE__*/function (_Component) {
  _inheritsLoose(TemplatePopupWindow, _Component);
  function TemplatePopupWindow() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_this), "interceptLauncherClick", function (e) {
      var isOpen = _this.props.isOpen;
      var clickedOutside = !_this.emojiPopup.contains(e.target) && isOpen;
      clickedOutside && _this.props.onClickedOutside(e);
    });
    return _this;
  }
  var _proto = TemplatePopupWindow.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.scLauncher = document.querySelector('#sc-launcher');
    this.scLauncher.addEventListener('click', this.interceptLauncherClick);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.scLauncher.removeEventListener('click', this.interceptLauncherClick);
  };
  _proto.render = function render() {
    var _this2 = this;
    var _this$props = this.props,
      isOpen = _this$props.isOpen,
      children = _this$props.children;
    return /*#__PURE__*/React.createElement("div", {
      className: "sc-popup-window",
      ref: function ref(e) {
        return _this2.emojiPopup = e;
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-popup-window--cointainer " + (isOpen ? '' : 'closed')
    }, children));
  };
  return TemplatePopupWindow;
}(Component);
export default TemplatePopupWindow;