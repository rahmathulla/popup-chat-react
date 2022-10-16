"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var FileIcon = /*#__PURE__*/function (_Component) {
  _inheritsLoose(FileIcon, _Component);
  function FileIcon() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = FileIcon.prototype;
  _proto._handleClick = function _handleClick(e) {
    e.preventDefault();
    this.props.onClick && this.props.onClick(e);
  };
  _proto.render = function render() {
    return /*#__PURE__*/_react["default"].createElement("button", {
      onFocus: this.props.onFocus,
      onBlur: this.props.onBlur,
      onClick: this._handleClick.bind(this),
      className: "sc-user-input--file-icon-wrapper"
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      version: "1.1",
      className: "sc-user-input--file-icon",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      width: "60px",
      height: "60px",
      viewBox: "0 0 55 55",
      enableBackground: "new 0 0 60 60"
    }, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M43.922,6.653c-2.643-2.644-6.201-4.107-9.959-4.069c-3.774,0.019-7.32,1.497-9.983,4.161l-12.3,12.3l-8.523,8.521\r c-4.143,4.144-4.217,10.812-0.167,14.862c1.996,1.996,4.626,2.989,7.277,2.989c2.73,0,5.482-1.055,7.583-3.156l15.547-15.545\r c0.002-0.002,0.002-0.004,0.004-0.005l5.358-5.358c1.394-1.393,2.176-3.24,2.201-5.2c0.026-1.975-0.716-3.818-2.09-5.192\r c-2.834-2.835-7.496-2.787-10.394,0.108L9.689,29.857c-0.563,0.563-0.563,1.474,0,2.036c0.281,0.28,0.649,0.421,1.018,0.421\r c0.369,0,0.737-0.141,1.018-0.421l18.787-18.788c1.773-1.774,4.609-1.824,6.322-0.11c0.82,0.82,1.263,1.928,1.247,3.119\r c-0.017,1.205-0.497,2.342-1.357,3.201l-5.55,5.551c-0.002,0.002-0.002,0.004-0.004,0.005L15.814,40.225\r c-3.02,3.02-7.86,3.094-10.789,0.167c-2.928-2.929-2.854-7.77,0.167-10.791l0.958-0.958c0.001-0.002,0.004-0.002,0.005-0.004\r L26.016,8.78c2.123-2.124,4.951-3.303,7.961-3.317c2.998,0.02,5.814,1.13,7.91,3.226c4.35,4.351,4.309,11.472-0.093,15.873\r L25.459,40.895c-0.563,0.562-0.563,1.473,0,2.035c0.281,0.281,0.65,0.422,1.018,0.422c0.369,0,0.737-0.141,1.018-0.422\r L43.83,26.596C49.354,21.073,49.395,12.126,43.922,6.653z"
    }))));
  };
  return FileIcon;
}(_react.Component);
var _default = FileIcon;
exports["default"] = _default;
module.exports = exports.default;