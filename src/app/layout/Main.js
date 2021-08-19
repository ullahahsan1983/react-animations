import React from "react";
import ExampleCollection from '../examples/ExampleCollection';

const Main = (props)  => {  
  const Example = ExampleCollection[props.example || 'Flip'];
  return (
    <div className="main">  
      <div className="example-container">
        <Example />
      </div>
    </div>
  );
}

export default Main;
