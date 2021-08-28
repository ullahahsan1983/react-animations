import React from "react";
import { ExampleCollection } from '../examples/ExampleCollection';
import * as utils from "../../libs/utils";

const Main = (props)  => {  
  const Example = utils.findKeyInTree(ExampleCollection, props.example || 'Effects.Flip');
  return (
    <div className="main">  
      <div className="example-container">
        <Example />
      </div>
    </div>
  );
}

export default Main;
