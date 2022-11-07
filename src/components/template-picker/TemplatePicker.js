import React from 'react';
import templateData from './templateData';


const TemplatePicker = ({ onTemplatePicked }) => (
  <div className="sc-emoji-picker">
        <div className="sc-emoji-picker--category">
          <div className="sc-emoji-picker--category-title">Message Template</div>
          
          {templateData.map((template) => {
            return (
              <button key={template.id}  onClick={() => onTemplatePicked(template)}>
                {template.name}
              </button>
              // <span
              //   key={char}
              //   className="sc-emoji-picker--emoji"
              //   onClick={() => onEmojiPicked(char)}
              // >
              //   {char}
              // </span>
            );
          })}
        </div>
  </div>
);

export default TemplatePicker;
