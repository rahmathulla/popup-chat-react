"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var SendIcon = /*#__PURE__*/function (_Component) {
  _inheritsLoose(SendIcon, _Component);
  function SendIcon() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = SendIcon.prototype;
  _proto.render = function render() {
    var _this = this;
    return /*#__PURE__*/_react["default"].createElement("button", {
      onFocus: this.props.onFocus,
      onBlur: this.props.onBlur,
      onClick: function onClick(e) {
        e.preventDefault();
        _this.props.onClick(e);
      },
      className: "sc-user-input--send-icon-wrapper"
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      version: "1.1",
      className: "sc-user-input--send-icon",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      width: "37.393px",
      height: "37.393px",
      viewBox: "0 0 37.393 37.393",
      enableBackground: "new 0 0 37.393 37.393"
    }, /*#__PURE__*/_react["default"].createElement("g", {
      id: "Layer_2"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M36.511,17.594L2.371,2.932c-0.374-0.161-0.81-0.079-1.1,0.21C0.982,3.43,0.896,3.865,1.055,4.241l5.613,13.263\r L2.082,32.295c-0.115,0.372-0.004,0.777,0.285,1.038c0.188,0.169,0.427,0.258,0.67,0.258c0.132,0,0.266-0.026,0.392-0.08\r l33.079-14.078c0.368-0.157,0.607-0.519,0.608-0.919S36.879,17.752,36.511,17.594z M4.632,30.825L8.469,18.45h8.061\r c0.552,0,1-0.448,1-1s-0.448-1-1-1H8.395L3.866,5.751l29.706,12.757L4.632,30.825z"
    }))));
  };
  return SendIcon;
}(_react.Component);
var _default = SendIcon;
exports["default"] = _default;
module.exports = exports.default;