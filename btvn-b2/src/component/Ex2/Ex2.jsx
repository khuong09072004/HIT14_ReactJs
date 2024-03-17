import React, {useState} from "react";
import './Ex2.css' ;

const ToggleButton = () => {
    const [isToggled, setIsToggled] = useState('ON');
  
    const handleClick = () => {
      setIsToggled(!isToggled);
    };
  
    return (
      <div className="toggle-container">
        <button className={`toggle-button ${isToggled ? 'toggled' : ''}`} onClick={handleClick}>
          <span className="on">ON</span>
          <div className="toggle-circle"></div>
          <span className="off">OFF</span>
        </button>
      </div>
    );
  }
  
  export default ToggleButton;