import React from "react";
import Shape from "../../libs/shapes/Shape";
import ExampleModule from "./ExampleModule";

const CompositeShapesExample = ()  => {
  return (    
    <ExampleModule className="demo-shapes" description="Special shapes constructed by joining various simple shapes">      
      <ExampleModule.Item title="Flowers">
        <ExampleModule.Item.Demo>
          <Shape form="sunflower stacked" title="Sunflower" style={{ marginBottom: "30px" }}>
            <Shape form="sun fill-sunflower" style={{ width: '100px', height: '100px'}} />
            <Shape form="sun fill-sunflower-alt" style={{ width: '50px', height: '50px', transform: "translateY(-25px)" }}/>
            <Shape form="sun fill-darkorange" style={{ width: '25px', height: '25px', transform: "translateY(-36px)"}} />
          </Shape>  
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Chevron Ranks">
        <ExampleModule.Item.Demo>
          <Shape form="chevron-rank stacked" shadow title="Rank Up">
            <Shape form="chevron up fill-cyan-gradient" style={{width: '140px', height: '40px', marginBottom: '44px' }}/>
            <Shape form="chevron up fill-red-gradient" style={{width: '140px', height: '40px' }} />
          </Shape>
          <Shape form="chevron-rank stacked" shadow title="Rank Down">
            <Shape form="chevron down fill-cyan-gradient" style={{width: '140px', height: '40px', marginBottom: '44px' }}/>
            <Shape form="chevron down fill-red-gradient" style={{width: '140px', height: '40px' }} />
          </Shape>
          <Shape form="" title="" />
          <Shape form="" title="" />
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>
    </ExampleModule>           
  );
}

export default CompositeShapesExample;
