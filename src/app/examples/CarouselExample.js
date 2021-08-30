import React, { useState, useEffect, useRef } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import ExampleModule from "./ExampleModule";
import { OCarousel, OCarouselNavigatorMode } from "../../libs/widgets/Carousel/OCarousel";

const CarouselExample = ()  => {
  const carouselRef = useRef();

  return (    
    <ExampleModule className="demo-carousel">
      <ExampleModule.Item title="Basic Mode" description="Carousel which provides manual navigation mode">
        <ExampleModule.Item.Demo>
          <OCarousel />
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Auto Mode" description="Carousel which rotates automatically after a certain interval">
        <ExampleModule.Item.Demo>
          <OCarousel navigator={OCarouselNavigatorMode.Auto} />
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Dual Mode" description="Carousel which can run in both auto and manual operation mode">
        <ExampleModule.Item.Demo>
          <OCarousel navigator={OCarouselNavigatorMode.Both} />
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Custom Controlled" description="Carousel which can run in custom operation mode using in-built navigator api">
        <ExampleModule.Item.Demo>
          <OCarousel ref={carouselRef} navigator={OCarouselNavigatorMode.None} />

          <ButtonGroup aria-label="First/Previous/Next/Last">
            <Button variant="info" onClick={() => carouselRef.current.first()}>First</Button>
            <Button variant="info" onClick={() => carouselRef.current.prev()}>Previous</Button>
            <Button variant="info" onClick={() => carouselRef.current.next()}>Next</Button>
            <Button variant="info" onClick={() => carouselRef.current.last()}>Last</Button>
          </ButtonGroup>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>
    </ExampleModule>       
  );
}

export default CarouselExample;
