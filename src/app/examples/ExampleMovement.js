import React from "react";
import { Image } from "react-bootstrap";
import Movement from "../../libs/animations/Movement/Movement";
import Ball from "./images/soccer-ball.png";
import ExampleModule from "./ExampleModule";
import WorkInProgress from "../../favorites/WorkInProgress/WorkInProgress";

const ExampleMovement = ()  => {
  return (    
    <ExampleModule>
      <ExampleModule.Item title="Unidirectional Movement">
        <ExampleModule.Item.Demo title="Vertical">
          <Movement direction="vertical" style={{ height: '250px'}}>
            <Image src={Ball} style={{ height: '100px'}} />
          </Movement>
        </ExampleModule.Item.Demo>
        <ExampleModule.Item.Demo title="Horizontal">
          <Movement direction="horizontal" style={{ height: '250px'}}>
            <Image src={Ball} style={{ height: '100px', marginTop: '30px'}} />
          </Movement>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>
      <ExampleModule.Item title="Bilateral Movement">
        <ExampleModule.Item.Demo title="Diagonal">
          <Movement direction="diagonal" style={{ height: '300px'}}>
            <Image src={Ball} style={{ height: '100px'}} />
          </Movement>
        </ExampleModule.Item.Demo>
        <ExampleModule.Item.Demo title="Orthogonal">
          <Movement direction="orthogonal" style={{ height: '300px'}}>
            <Image src={Ball} style={{ height: '100px'}} />
          </Movement>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Loop Movement">
        <ExampleModule.Item.Demo title="Box">
          <Movement direction="box" style={{ height: '300px'}}>
            <Image src={Ball} style={{ height: '100px'}} />
          </Movement>
        </ExampleModule.Item.Demo>
        <ExampleModule.Item.Demo title="Circular">
          <WorkInProgress />
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>
    </ExampleModule>       
  );
}

export default ExampleMovement;
