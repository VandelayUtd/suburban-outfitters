import React from 'react';

import './custom-button.styles.scss'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in', 
  inverted: 'inverted'
}

const CustomButton = ({ children, buttonType, ...otherProps}) => (
  <button 
  className={`custom-button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
   {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
