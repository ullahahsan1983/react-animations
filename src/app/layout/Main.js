import React from "react";
import ExampleContainer from './ExampleContainer';

const Main = (props)  => {  
  return (
    <div className="main"> 
      <ExampleContainer example={props.example} /> 
    </div>
  );
}

export default Main;
