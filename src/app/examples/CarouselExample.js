import React, { useState, useEffect, useRef } from "react";
import { Button, ButtonGroup, Image } from "react-bootstrap";
import Male from "./images/male-avatar.png";
import Female from "./images/female-avatar.png";
import ExampleModule from "./ExampleModule";
import { OCarousel, OCarouselNavigatorMode } from "../../libs/widgets/Carousel/OCarousel";

const CarouselExample = ()  => {
  const carouselRef = useRef();
  const slots = [1,2,3,4,5,6,7,8,9].map((number) => (
    <React.Fragment key={number}>{number}</React.Fragment>
  ));
  return (    
    <ExampleModule className="demo-carousel">
      <ExampleModule.Item title="Basic Mode" description="Carousel which provides manual navigation mode">
        <ExampleModule.Item.Demo>
          <OCarousel>
            {slots}
          </OCarousel>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Auto Mode" description="Carousel which rotates automatically after a certain interval">
        <ExampleModule.Item.Demo>
          <OCarousel navigator={OCarouselNavigatorMode.Auto} >
            {slots}
          </OCarousel>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Dual Mode" description="Carousel which can run in both auto and manual operation mode">
        <ExampleModule.Item.Demo>
          <OCarousel navigator={OCarouselNavigatorMode.Both} >
            {slots}
          </OCarousel>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Custom Controlled" description="Carousel which can run in custom operation mode using in-built navigator api">
        <ExampleModule.Item.Demo>
          <OCarousel ref={carouselRef} navigator={OCarouselNavigatorMode.None} >
            {slots}
          </OCarousel>

          <ButtonGroup aria-label="First/Previous/Next/Last">
            <Button variant="info" onClick={() => carouselRef.current.first()}>First</Button>
            <Button variant="info" onClick={() => carouselRef.current.prev()}>Previous</Button>
            <Button variant="info" onClick={() => carouselRef.current.next()}>Next</Button>
            <Button variant="info" onClick={() => carouselRef.current.last()}>Last</Button>
          </ButtonGroup>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Many Slots" description="Carousel with many slots">
        <ExampleModule.Item.Demo>
          <OCarousel navigator={OCarouselNavigatorMode.Both} >
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((number) => (
              <React.Fragment key={number}>{number}</React.Fragment>
            ))}
          </OCarousel>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>

      <ExampleModule.Item title="Many Slots" description="Carousel with images">
        <ExampleModule.Item.Demo>
          <OCarousel navigator={OCarouselNavigatorMode.Auto} slotWidth="180px" slotHeight="120px">
            {[1,2,3,4,5,6,7,8,9,10].map((number) => (
              <React.Fragment key={number}>
                <Image thumbnail src={ number%2 == 0 ? Male : Female } width="115px" />
              </React.Fragment>
            ))}
          </OCarousel>
        </ExampleModule.Item.Demo>
      </ExampleModule.Item>
    </ExampleModule>       
  );
}

export default CarouselExample;
