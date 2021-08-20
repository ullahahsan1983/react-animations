import React, { useCallback, useReducer, useState } from "react";
import { Image, Button, ButtonGroup } from "react-bootstrap";
import Movement from "../../libs/animations/Movement/Movement";
import Ball from "./images/soccer-ball.png";
import ExampleModule from "./ExampleModule";
import WorkInProgress from "../../favorites/WorkInProgress/WorkInProgress";

const ExampleMovement = ()  => {
  const [playVertical, setPlayVertical] = useState(false);  
  const [playHorizontal, setPlayHorizontal] = useState(false);
  const [playDiagonal, setPlayDiagonal] = useState(false);
  const [playOrthogonal, setPlayOrthogonal] = useState(false);
  const [playBox, setPlayBox] = useState(false);

  return (    
    <ExampleModule className="demo-animations-moving">
      <ExampleModule.Item title="Unidirectional Movement">
        <ExampleModule.Item.Actions>
          <ButtonGroup size="sm" aria-label="Play/Stop">
            <Button variant="secondary" onClick={() => setPlayVertical(true)}>Play</Button>
            <Button variant="secondary" onClick={() => setPlayVertical(false)}>Stop</Button>
          </ButtonGroup>
        </ExampleModule.Item.Actions>
        <ExampleModule.Item.Demo title="Vertical">
          <Movement direction="vertical" play={playVertical} style={{ height: '250px'}}>
            <Image src={Ball} style={{ height: '100px'}} />
          </Movement>
        </ExampleModule.Item.Demo>
        <ExampleModule.Item.Actions>
          <ButtonGroup size="sm" aria-label="Play/Stop">
            <Button variant="secondary" onClick={() => setPlayHorizontal(true)}>Play</Button>
            <Button variant="secondary" onClick={() => setPlayHorizontal(false)}>Stop</Button>
          </ButtonGroup>
        </ExampleModule.Item.Actions>
        <ExampleModule.Item.Demo title="Horizontal">
          <Movement direction="horizontal" play={playHorizontal} style={{ height: '250px'}}>
            <Image src={Ball} style={{ height: '100px', marginTop: '30px'}} />
          </Movement>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>
      
      <ExampleModule.Item title="Bilateral Movement">
        <ExampleModule.Item.Actions>
          <ButtonGroup size="sm" aria-label="Play/Stop">
            <Button variant="secondary" onClick={() => setPlayDiagonal(true)}>Play</Button>
            <Button variant="secondary" onClick={() => setPlayDiagonal(false)}>Stop</Button>
          </ButtonGroup>
        </ExampleModule.Item.Actions>
        <ExampleModule.Item.Demo title="Diagonal">
          <Movement direction="diagonal" play={playDiagonal} style={{ height: '300px'}}>
            <Image src={Ball} style={{ height: '100px'}} />
          </Movement>
        </ExampleModule.Item.Demo>
        <ExampleModule.Item.Actions>
          <ButtonGroup size="sm" aria-label="Play/Stop">
            <Button variant="secondary" onClick={() => setPlayOrthogonal(true)}>Play</Button>
            <Button variant="secondary" onClick={() => setPlayOrthogonal(false)}>Stop</Button>
          </ButtonGroup>
        </ExampleModule.Item.Actions>
        <ExampleModule.Item.Demo title="Orthogonal">
          <Movement direction="orthogonal" play={playOrthogonal} style={{ height: '300px'}}>
            <Image src={Ball} style={{ height: '100px'}} />
          </Movement>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Loop Movement">
        <ExampleModule.Item.Actions>
          <ButtonGroup size="sm" aria-label="Play/Stop">
            <Button variant="secondary" onClick={() => setPlayBox(true)}>Play</Button>
            <Button variant="secondary" onClick={() => setPlayBox(false)}>Stop</Button>
          </ButtonGroup>
        </ExampleModule.Item.Actions>
        <ExampleModule.Item.Demo title="Box">
          <Movement direction="box" play={playBox} style={{ height: '300px'}}>
            <Image src={Ball} style={{ height: '100px'}} />
          </Movement>
        </ExampleModule.Item.Demo>
        <ExampleModule.Item.Actions>
          <ButtonGroup size="sm" aria-label="Play/Stop">
            <Button variant="secondary" onClick={() => {}}>Play</Button>
            <Button variant="secondary" onClick={() => {}}>Stop</Button>
          </ButtonGroup>
        </ExampleModule.Item.Actions>
        <ExampleModule.Item.Demo title="Circular">
          <WorkInProgress />
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>
    </ExampleModule>       
  );
}

export default ExampleMovement;
