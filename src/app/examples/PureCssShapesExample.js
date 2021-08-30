import React from "react";
import Shape from "../../libs/shapes/Shape";
import ExampleModule from "./ExampleModule";

const PureCssShapesExample = ()  => {
  return (    
    <ExampleModule className="demo-shapes" description="Special shapes rendered by purely css techniques from just single html element">
      <ExampleModule.Item title="Polygons">
        <ExampleModule.Item.Demo>
          <Shape form="pentagon" title="Pentagon" style={{ transform: "scale(1.5)", marginBottom: "30px"}} />
          <Shape form="hexagon" title="Hexagon" style={{ transform: "scale(1.5)", marginBottom: "65px"}} />
          <Shape form="heptagon" title="Heptagon" style={{ transform: "scale(1.5)", marginBottom: "85px"}} />
          <Shape form="octagon" title="Octagon" style={{ transform: "scale(1.5)", marginBottom: "85px"}} />
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Directions" className="arrows">
        <ExampleModule.Item.Demo>
          <Shape form="triangle-solid up" title="Up" />
          <Shape form="triangle-solid down" title="Down" />
          <Shape form="triangle-solid left" title="Left" />
          <Shape form="triangle-solid right" title="Right" />
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>    

      <ExampleModule.Item title="Sharp Corners" className="arrows">
        <ExampleModule.Item.Demo>
          <Shape form="triangle-solid topleft fill" title="Top Left" />
          <Shape form="triangle-solid topright fill" title="Top Right" />
          <Shape form="triangle-solid bottomleft fill" title="Bottom Left" />
          <Shape form="triangle-solid bottomright fill" title="Bottom Right" />
        </ExampleModule.Item.Demo>
      </ExampleModule.Item> 
      
      <ExampleModule.Item title="Curved Corners" className="arrows">
        <ExampleModule.Item.Demo>
          <Shape form="curved-corner topleft" title="Top Left" style={{width: '100px', height: '100px' }} />
          <Shape form="curved-corner topright" title="Top Right" style={{width: '100px', height: '100px' }} />
          <Shape form="curved-corner bottomleft" title="Bottom Left" style={{width: '100px', height: '100px' }} />
          <Shape form="curved-corner bottomright" title="Bottom Right" style={{width: '100px', height: '100px' }} />
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Diamonds">
        <ExampleModule.Item.Demo>
          <Shape form="diamond-classic" title="Classic Diamond" style={{ marginBottom: '40px'}} />
          <Shape form="diamond-shield" title="Shield Diamond" style={{ marginBottom: '40px'}}  />
          <Shape form="diamond-cut" title="Cut Diamond" style={{ marginBottom: '120px' }}  />
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Stars">
        <ExampleModule.Item.Demo>
          <Shape form="star-six" title="Star 6" style={{ transform: "scale(1.2)", marginBottom: "60px"}} />
          <Shape form="star-five" title="Star 5" style={{ transform: "scale(1.5)", marginBottom: "60px"}} />
          <Shape form="sun" title="Sun" style={{ width: '100px', height: '100px', marginBottom: "30px" }} />  
          <Shape form="moon" title="Moon" style={{ width: '100px', height: '100px', marginBottom: "30px" }} /> 
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Playing Card Symbols">
        <ExampleModule.Item.Demo>
          <Shape form="heart" title="Heart" style={{ marginBottom: "40px", transform: "scale(1.5)"}} />
          <Shape form="spade" title="Spade" style={{ marginBottom: "20px", transform: "scale(1.5)"}} />
          <Shape form="clubs" title="Clubs" style={{ marginBottom: "60px", transform: "scale(1.5)"}} />
          <Shape form="diamond-classic border-red" title="Diamond" style={{ marginBottom: "0px", transform: "scale(0.7)"}} />
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Flower Patterns">
        <ExampleModule.Item.Demo>
          <Shape form="flower" title="Flower" style={{ marginBottom: "60px"}} /> 
          <Shape form="spindle" title="Spindle" style={{ marginBottom: "20px", marginLeft: "-60px"}} /> 
          <Shape form="" title="" />
          <Shape form="" title="" />
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Chevrons">
        <ExampleModule.Item.Demo>
          <Shape form="chevron up fill-cyan-gradient" title="Up" style={{width: '120px', height: '40px', marginBottom: '40px'}}/>
          <Shape form="chevron down fill-cyan-gradient" title="Down" style={{width: '120px', height: '40px', marginBottom: '40px'}}/>
          <Shape form="chevron left fill-red-gradient" title="Left" style={{width: '120px', height: '40px', marginBottom: '60px'}}/>
          <Shape form="chevron right fill-red-gradient" title="Right" style={{width: '120px', height: '40px', marginBottom: '60px'}}/>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>
    </ExampleModule>           
  );
}

export default PureCssShapesExample;
