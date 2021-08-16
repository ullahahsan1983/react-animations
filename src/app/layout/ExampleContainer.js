import React from "react";
import ExampleCollection from "../examples/ExampleCollection";

const ExampleContainer = (props)  => {
  const Example = ExampleCollection[props.example || 'Flip'];
  return (
    <div className="example-container">
        <Example />
    </div>
  );
}

export default ExampleContainer;
