import React from 'react';
import Wrapper from './Wrapper';

import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";
import InputTask from './InputTask';



export default function Header({setDarkMode,darkMode}){
    function handleClickDarkMode() {
        setDarkMode(!darkMode)
    }

    return(
        <header className="header">
        <Wrapper>
          <div className="title-container">
            <h3 className="title">TODO</h3>
            <div className="icon-color-mode pointer" onClick={handleClickDarkMode}>
              <img src={moon} alt="icon moon" id="icon-moon"/> 
              <img src={sun} alt="icon moon" id="icon-sun"/>  
            </div>
          </div>
        </Wrapper>
        
    
<InputTask />
      </header>
    )
}