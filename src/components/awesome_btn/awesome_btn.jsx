import React from 'react';
import './awesome_btn.css';
import {AwesomeButton, AwesomeButtonProgress} from 'react-awesome-button';


const Button = () => {
  return (
    <div>
    <AwesomeButton 
    type="primary"
    size="medium"
    >
      버튼1
    </AwesomeButton>
    
    <AwesomeButtonProgress
      type="secondary"
      size="medium"
      >
      버튼2
    </AwesomeButtonProgress>

    
    </div>
  )
}

export default Button;