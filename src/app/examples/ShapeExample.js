import React, { useState } from "react";
import { Image, Button, ButtonGroup } from "react-bootstrap";
import Shape from "../../libs/shapes/Shape";
import ExampleModule from "./ExampleModule";

const ShapeExample = ()  => {
  return (    
    <ExampleModule className="demo-shapes">
      <ExampleModule.Item title="Corner Angles">
        <ExampleModule.Item.Demo>
          <Shape form="angle-orthogonal" title="Right Angle" style={{width: "150px", height: "180px"}} />
          <Shape form="angle-bottomleft" title="Bottom Left" style={{width: "150px", height: "180px"}} />
          <Shape form="angle-bottomright" title="Bottom Right" style={{width: "150px", height: "180px"}} />
          <Shape form="angle-topright" title="Top Right" style={{width: "150px", height: "180px"}} />
          <Shape form="angle-topleft" title="Top Left" style={{width: "150px", height: "180px"}} />
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>  

      <ExampleModule.Item title="Arrow Angles">
        <ExampleModule.Item.Demo>
          <Shape form="angle-leftcenter" title="Left Center" style={{width: "120px", height: "120px"}} />
          <Shape form="angle-rightcenter" title="Right Center" style={{width: "120px", height: "120px"}} />
          <Shape form="angle-topcenter" title="Top Center" style={{width: "120px", height: "120px"}} />
          <Shape form="angle-bottomcenter" title="Bottom Center" style={{width: "120px", height: "120px"}} />
        </ExampleModule.Item.Demo>
      </ExampleModule.Item> 

      <ExampleModule.Item title="Triangles">
        <ExampleModule.Item.Demo>
          <Shape form="triangle-up" title="Up" />
          <Shape form="triangle-down" title="Down" />
          <Shape form="triangle-left" title="Left" />
          <Shape form="triangle-right" title="Right" />
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>    

      <ExampleModule.Item title="Orthogonal Triangles">
        <ExampleModule.Item.Demo>
          <Shape form="triangle-topleft" title="Top Left" />
          <Shape form="triangle-topright" title="Top Right" />
          <Shape form="triangle-bottomleft" title="Bottom Left" />
          <Shape form="triangle-bottomright" title="Bottom Right" />
        </ExampleModule.Item.Demo>
      </ExampleModule.Item> 
      
      <ExampleModule.Item title="Tetrangles">
        <ExampleModule.Item.Demo>
          <Shape form="rectangle" title="Rectangle" style={{width: "150px", height: "200px"}} />
          <Shape form="parallelogram" title="Parallelogram" style={{width: "150px", height: "200px"}} />
          <Shape form="square" title="Square" style={{width: "150px", height: "150px"}} />
          <Shape form="rombus" title="Rombus" style={{width: "150px", height: "150px"}} />
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>  

    </ExampleModule>           
  );
}

export default ShapeExample;
