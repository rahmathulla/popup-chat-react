"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _ramda = require("ramda");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _image = _interopRequireDefault(require("../assets/image.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function PinMessage(_ref) {
  var pinMessage = _ref.pinMessage,
    onPinMessage = _ref.onPinMessage;
  var image = (0, _ramda.propOr)(_image["default"], 'imageUrl', pinMessage);
  var title = (0, _ramda.pipe)((0, _ramda.prop)('title'), (0, _ramda.ifElse)(function (item) {
    return (0, _ramda.length)(item) > 34;
  }, function (item) {
    return item.slice(0, 34) + "...";
  }, function (item) {
    return item;
  }))(pinMessage);
  var text = (0, _ramda.pipe)((0, _ramda.prop)('text'), (0, _ramda.ifElse)(function (item) {
    return (0, _ramda.length)(item) > 50;
  }, function (item) {
    return item.slice(0, 50) + "...";
  }, function (item) {
    return item;
  }))(pinMessage);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-pin--message",
    onClick: function onClick() {
      return onPinMessage(pinMessage);
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "sc-pin--message--img",
    src: image,
    alt: ""
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-pin--message--desc"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-pin--message--title"
  }, title), /*#__PURE__*/_react["default"].createElement("div", null, text)));
}
PinMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  pinMessage: _propTypes["default"].object,
  onPinMessage: _propTypes["default"].func
} : {};
var _default = PinMessage;
exports["default"] = _default;
module.exports = exports.default;