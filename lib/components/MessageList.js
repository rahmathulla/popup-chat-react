"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _ramda = require("ramda");
var _react = _interopRequireWildcard(require("react"));
var _Messages = _interopRequireDefault(require("./Messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function MessageList(props) {
  var element = (0, _react.useRef)(null);
  var elementCurrent = (0, _ramda.prop)('current', element);
  (0, _react.useEffect)(function () {
    if (elementCurrent) {
      elementCurrent.scrollTop = elementCurrent.scrollHeight;
    }
  }, [props]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-message-list",
    ref: element
  }, props.messages.map(function (message, i) {
    return /*#__PURE__*/_react["default"].createElement(_Messages["default"], {
      message: message,
      key: i,
      onFileDownload: props.onFileDownload
    });
  }));
}
var _default = MessageList;
exports["default"] = _default;
module.exports = exports.default;