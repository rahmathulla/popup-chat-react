import { pipe, prop, propOr, length, ifElse } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../assets/image.png';
function PinMessage(_ref) {
  var pinMessage = _ref.pinMessage,
    onPinMessage = _ref.onPinMessage;
  var image = propOr(defaultImage, 'imageUrl', pinMessage);
  var title = pipe(prop('title'), ifElse(function (item) {
    return length(item) > 34;
  }, function (item) {
    return item.slice(0, 34) + "...";
  }, function (item) {
    return item;
  }))(pinMessage);
  var text = pipe(prop('text'), ifElse(function (item) {
    return length(item) > 50;
  }, function (item) {
    return item.slice(0, 50) + "...";
  }, function (item) {
    return item;
  }))(pinMessage);
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-pin--message",
    onClick: function onClick() {
      return onPinMessage(pinMessage);
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "sc-pin--message--img",
    src: image,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "sc-pin--message--desc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-pin--message--title"
  }, title), /*#__PURE__*/React.createElement("div", null, text)));
}
PinMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  pinMessage: PropTypes.object,
  onPinMessage: PropTypes.func
} : {};
export default PinMessage;