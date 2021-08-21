import React from "react";
import WorkInProgress from "../../favorites/WorkInProgress/WorkInProgress";
import FlipExample from "./FlipExample";
import MotionExample from "./MotionExample";
import PopInExample from "./PopInExample";

const ExampleCollection = {
  'Flip': FlipExample,
  'Slide': WorkInProgress,
  'PopIn': PopInExample,
  'Motion': MotionExample,
};

export default ExampleCollection;
