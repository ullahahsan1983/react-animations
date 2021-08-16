import React from "react";

const ExampleContainer = (props)  => {
  return (
    <div className="example-container">
        {props.children}
    </div>
  );
}

export default ExampleContainer;
