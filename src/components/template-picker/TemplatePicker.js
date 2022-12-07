import React from 'react';
import templateData from './templateData';


const TemplatePicker = ({ onTemplatePicked, templateList }) => (
  <div className="sc-emoji-picker">
        <div className="sc-emoji-picker--category">
          <div className="sc-emoji-picker--category-title">Message Template</div>
          
          {templateList.map((template) => {
            return (
              <span className = "template-span" key={template.id}  onClick={() => {
                console.log('=======templateData====', template)
                onTemplatePicked(template)
                }}>
                {template.name}
              </span>
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
