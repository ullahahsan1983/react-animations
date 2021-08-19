import React from "react";
import { Image } from "react-bootstrap";
import Flip from "../../libs/transitions/Flip/Flip";
import Male from "./images/male-avatar.png";
import Female from "./images/female-avatar.png";
import ExampleModule from "./ExampleModule";

const ExampleFlip = ()  => {
  return (    
    <ExampleModule>
      <ExampleModule.Item title="Flat Flip" description="Hover over image to see the effect">
        <ExampleModule.Item.Demo title="Horizontal">
          <Flip variant="flat" width='250px' height='250px'>
            <Flip.Front>
              <Image src={Male} thumbnail />
            </Flip.Front>
            <Flip.Back>
              <Image src={Female} thumbnail /> 
            </Flip.Back>
          </Flip>
        </ExampleModule.Item.Demo>
        <ExampleModule.Item.Demo title="Vertical">
          <Flip variant="flat" vertical width='250px' height='250px'>
            <Flip.Front>
              <Image src={Male} thumbnail />
            </Flip.Front>
            <Flip.Back>
              <Image src={Female} thumbnail /> 
            </Flip.Back>
          </Flip>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Swing Flip" description="Hover over image to see the effect">
        <ExampleModule.Item.Demo title="Horizontal">
          <Flip variant="swing" width='250px' height='250px'>
            <Flip.Front>
              <Image src={Male} thumbnail />
            </Flip.Front>
            <Flip.Back>
              <Image src={Female} thumbnail /> 
            </Flip.Back>
          </Flip>
        </ExampleModule.Item.Demo>

        <ExampleModule.Item.Demo title="Vertical">
          <Flip variant="swing" vertical width='250px' height='250px'>
            <Flip.Front>
              <Image src={Male} thumbnail />
            </Flip.Front>
            <Flip.Back>
              <Image src={Female} thumbnail /> 
            </Flip.Back>
          </Flip>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>
      
      <ExampleModule.Item title="Slide Flip" description="Hover over image to see the effect">
        <ExampleModule.Item.Demo title="Horizontal">
          <Flip variant="slide" width='250px' height='250px'>
            <Flip.Front>
              <Image src={Male} thumbnail />
            </Flip.Front>
            <Flip.Back>
              <Image src={Female} thumbnail /> 
            </Flip.Back>
          </Flip>
        </ExampleModule.Item.Demo>

        <ExampleModule.Item.Demo title="Vertical">
          <Flip variant="slide" vertical width='250px' height='250px'>
            <Flip.Front>
              <Image src={Male} thumbnail />
            </Flip.Front>
            <Flip.Back>
              <Image src={Female} thumbnail /> 
            </Flip.Back>
          </Flip>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>
      
      <ExampleModule.Item title="Slide on Click" description="Click on image to see the effect">
        <ExampleModule.Item.Demo title="Horizontal">
          <Flip variant="slide" event="click" width='250px' height='250px'>
            <Flip.Front>
              <Image src={Male} thumbnail />
            </Flip.Front>
            <Flip.Back>
              <Image src={Female} thumbnail /> 
            </Flip.Back>
          </Flip>
        </ExampleModule.Item.Demo>

        <ExampleModule.Item.Demo title="Vertical">
          <Flip variant="slide" vertical event="click" width='250px' height='250px'>
            <Flip.Front>
              <Image src={Male} thumbnail />
            </Flip.Front>
            <Flip.Back>
              <Image src={Female} thumbnail /> 
            </Flip.Back>
          </Flip>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>
    </ExampleModule>       
  );
}

export default ExampleFlip;
