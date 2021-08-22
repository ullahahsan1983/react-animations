import React from "react";
import WorkInProgress from "../../favorites/WorkInProgress/WorkInProgress";
import FlipExample from "./FlipExample";
import MotionExample from "./MotionExample";
import PopInExample from "./PopInExample";
import ShapeExample from "./ShapeExample";

const ExampleCollection = {
  'Flip': FlipExample,
  'Slide': WorkInProgress,
  'PopIn': PopInExample,
  'Motion': MotionExample,
  'CSS Shapes': ShapeExample
};

export default ExampleCollection;
