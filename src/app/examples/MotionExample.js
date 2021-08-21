import React, { useCallback, useReducer, useState } from "react";
import { Image, Button, ButtonGroup } from "react-bootstrap";
import Motion from "../../libs/animations/Motion/Motion";
import Ball from "./images/soccer-ball.png";
import ExampleModule from "./ExampleModule";
import WorkInProgress from "../../favorites/WorkInProgress/WorkInProgress";

const MotionExample = ()  => {
  const [playVertical, setPlayVertical] = useState(false);  
  const [playHorizontal, setPlayHorizontal] = useState(false);
  const [playDiagonal, setPlayDiagonal] = useState(false);
  const [playOrthogonal, setPlayOrthogonal] = useState(false);
  const [playBox, setPlayBox] = useState(false);
  const [playCircle, setPlayCircle] = useState(false);

  return (    
    <ExampleModule className="demo-animations-moving">
      <ExampleModule.Item title="Unidirectional Motion">
        <ExampleModule.Item.Actions>
          <ButtonGroup size="sm" aria-label="Play/Stop">
            <Button variant="secondary" onClick={() => setPlayVertical(true)}>Play</Button>
            <Button variant="secondary" onClick={() => setPlayVertical(false)}>Stop</Button>
          </ButtonGroup>
        </ExampleModule.Item.Actions>
        <ExampleModule.Item.Demo title="Vertical">
          <Motion direction="vertical" play={playVertical} style={{ height: '250px'}}>
            <Image src={Ball} style={{ height: '100px'}} />
          </Motion>
        </ExampleModule.Item.Demo>
        <ExampleModule.Item.Actions>
          <ButtonGroup size="sm" aria-label="Play/Stop">
            <Button variant="secondary" onClick={() => setPlayHorizontal(true)}>Play</Button>
            <Button variant="secondary" onClick={() => setPlayHorizontal(false)}>Stop</Button>
          </ButtonGroup>
        </ExampleModule.Item.Actions>
        <ExampleModule.Item.Demo title="Horizontal">
          <Motion direction="horizontal" play={playHorizontal} style={{ height: '250px'}}>
            <Image src={Ball} style={{ height: '100px', marginTop: '30px'}} />
          </Motion>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>
      
      <ExampleModule.Item title="Bilateral Motion">
        <ExampleModule.Item.Actions>
          <ButtonGroup size="sm" aria-label="Play/Stop">
            <Button variant="secondary" onClick={() => setPlayDiagonal(true)}>Play</Button>
            <Button variant="secondary" onClick={() => setPlayDiagonal(false)}>Stop</Button>
          </ButtonGroup>
        </ExampleModule.Item.Actions>
        <ExampleModule.Item.Demo title="Diagonal">
          <Motion direction="diagonal" play={playDiagonal} style={{ height: '300px'}}>
            <Image src={Ball} style={{ height: '100px'}} />
          </Motion>
        </ExampleModule.Item.Demo>
        <ExampleModule.Item.Actions>
          <ButtonGroup size="sm" aria-label="Play/Stop">
            <Button variant="secondary" onClick={() => setPlayOrthogonal(true)}>Play</Button>
            <Button variant="secondary" onClick={() => setPlayOrthogonal(false)}>Stop</Button>
          </ButtonGroup>
        </ExampleModule.Item.Actions>
        <ExampleModule.Item.Demo title="Orthogonal">
          <Motion direction="orthogonal" play={playOrthogonal} style={{ height: '300px'}}>
            <Image src={Ball} style={{ height: '100px'}} />
          </Motion>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Loop Motion">
        <ExampleModule.Item.Actions>
          <ButtonGroup size="sm" aria-label="Play/Stop">
            <Button variant="secondary" onClick={() => setPlayBox(true)}>Play</Button>
            <Button variant="secondary" onClick={() => setPlayBox(false)}>Stop</Button>
          </ButtonGroup>
        </ExampleModule.Item.Actions>
        <ExampleModule.Item.Demo title="Box">
          <Motion direction="box" play={playBox} style={{ height: '300px'}}>
            <Image src={Ball} style={{ height: '100px'}} />
          </Motion>
        </ExampleModule.Item.Demo>
        <ExampleModule.Item.Actions>
          <ButtonGroup size="sm" aria-label="Play/Stop">
            <Button variant="secondary" onClick={() => setPlayCircle(true)}>Play</Button>
            <Button variant="secondary" onClick={() => setPlayCircle(false)}>Stop</Button>
          </ButtonGroup>
        </ExampleModule.Item.Actions>
        <ExampleModule.Item.Demo title="Circular">
          <Motion direction="circle" play={playCircle} style={{ height: '300px'}}>
            <Image src={Ball} style={{ height: '100px'}} />
          </Motion>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>
    </ExampleModule>       
  );
}

export default MotionExample;
