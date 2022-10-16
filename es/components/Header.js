import React from 'react';
import closeIcon from './../assets/close-icon.png';
function Header(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-header"
  }, /*#__PURE__*/React.createElement("img", {
    className: "sc-header--img",
    src: props.imageUrl,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "sc-header--team-name"
  }, " ", props.teamName, " "), /*#__PURE__*/React.createElement("div", {
    className: "sc-header--close-button",
    onClick: props.onClose
  }, /*#__PURE__*/React.createElement("img", {
    src: closeIcon,
    alt: ""
  })));
}
export default Header;