import React from "react";
import{useSpring, animated} from "react-spring";
import "./hello.css";
import Switcher from "./helloSwitcher";



function Hello() {

  const props= useSpring({})
  return (
    <div>
      
       <h1><Switcher/></h1>
        <h1 style={{color:'lightslategray'}}> YOU ARE WELCOME.</h1>
          
      </div>
     
    
  );
}

export default Hello;
