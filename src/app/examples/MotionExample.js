import React, { useState } from "react";
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
  const [playTriangle, setPlayTriangle] = useState(false);
  const [playCircle, setPlayCircle] = useState(false);
  const [playOval, setPlayOval] = useState(false);
  const [playSlide, setPlaySlide] = useState(false);

  return (    
    <ExampleModule className="demo-animations-moving">
      <ExampleModule.Item title="Straight Motion">
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
      
      <ExampleModule.Item title="Lateral Motion">
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

      <ExampleModule.Item title="Loop Motion - Linear">
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
            <Button variant="secondary" onClick={() => setPlayTriangle(true)}>Play</Button>
            <Button variant="secondary" onClick={() => setPlayTriangle(false)}>Stop</Button>
          </ButtonGroup>
        </ExampleModule.Item.Actions>
        <ExampleModule.Item.Demo title="Triangle">
          <div className="stacked">
            <span className="shape-triangle" style={{ width: "200px", height: "200px"}}></span>
            <Motion direction="triangle" play={playTriangle} style={{ height: '300px'}}>
              <Image src={Ball} style={{ height: '50px', width: '50px' }} />
            </Motion>
          </div>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Loop Motion - Circular">
        <ExampleModule.Item.Actions>
          <ButtonGroup size="sm" aria-label="Play/Stop">
            <Button variant="secondary" onClick={() => setPlayCircle(true)}>Play</Button>
            <Button variant="secondary" onClick={() => setPlayCircle(false)}>Stop</Button>
          </ButtonGroup>
        </ExampleModule.Item.Actions>
        <ExampleModule.Item.Demo title="Circle">
          <div className="stacked">
            <span className="shape-circle" style={{ width: "200px", height: "200px"}}></span>
            <Motion direction="circle" play={playCircle} style={{ height: '300px'}}>
              <Image src={Ball} style={{ height: '50px', width: '50px' }} />
            </Motion>
          </div>
        </ExampleModule.Item.Demo>
        <ExampleModule.Item.Actions>
          <ButtonGroup size="sm" aria-label="Play/Stop">
            <Button variant="secondary" onClick={() => setPlayOval(true)}>Play</Button>
            <Button variant="secondary" onClick={() => setPlayOval(false)}>Stop</Button>
          </ButtonGroup>
        </ExampleModule.Item.Actions>
        <ExampleModule.Item.Demo title="Oval">
          <div className="stacked">
            <span className="shape-circle" style={{ width: "200px", height: "100px"}}></span>
            <Motion direction="oval" play={playOval} style={{ height: '300px'}}>
              <Image src={Ball} style={{ height: '50px', width: '50px' }} />
            </Motion>
          </div>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Sliding">
        <ExampleModule.Item.Actions>
          <ButtonGroup size="sm" aria-label="Play/Stop">
            <Button variant="secondary" onClick={() => setPlaySlide(true)}>Play</Button>
            <Button variant="secondary" onClick={() => setPlaySlide(false)}>Stop</Button>
          </ButtonGroup>
        </ExampleModule.Item.Actions>
        <ExampleModule.Item.Demo title="Box">
          <Motion direction="slide-blur" play={playSlide} style={{ height: '300px'}}>
            <div className="box"></div>
          </Motion>
        </ExampleModule.Item.Demo>
        <ExampleModule.Item.Actions>
          <ButtonGroup size="sm" aria-label="Play/Stop">
            <Button variant="secondary" onClick={() => {}}>Play</Button>
            <Button variant="secondary" onClick={() => {}}>Stop</Button>
          </ButtonGroup>
        </ExampleModule.Item.Actions>
        <ExampleModule.Item.Demo title="Circle">
          <WorkInProgress />
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>
    </ExampleModule>       
  );
}

export default MotionExample;
