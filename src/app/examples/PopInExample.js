import React from "react";
import { Image } from "react-bootstrap";
import PopIn from "../../libs/transitions/PopIn/PopIn";
import Male from "./images/male-avatar.png";
import Female from "./images/female-avatar.png";
import ExampleModule from "./ExampleModule";

const PopInExample = ()  => {
  return (    
    <ExampleModule>
      <ExampleModule.Item title="PopIn Vertical" description="Hover over the box to see the effect">
        <ExampleModule.Item.Demo title="Bottom Up">
          <PopIn position="bottom" style={{ width: '250px', height: '250px', border: '1px solid gray'}}>
            <Image src={Male} thumbnail />
          </PopIn>
        </ExampleModule.Item.Demo>
        <ExampleModule.Item.Demo title="Top Down">
          <PopIn position="top" style={{ width: '250px', height: '250px', border: '1px solid gray'}}>
            <Image src={Male} thumbnail />
          </PopIn>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="PopIn Horizontal" description="Hover over the box to see the effect">
        <ExampleModule.Item.Demo title="Left In">
          <PopIn position="left" style={{ width: '250px', height: '250px', border: '1px solid gray'}}>
            <Image src={Male} thumbnail />
          </PopIn>
        </ExampleModule.Item.Demo>
        <ExampleModule.Item.Demo title="Right In">
          <PopIn position="right" style={{ width: '250px', height: '250px', border: '1px solid gray'}}>
            <Image src={Male} thumbnail />
          </PopIn>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>
    </ExampleModule>       
  );
}

export default PopInExample;
