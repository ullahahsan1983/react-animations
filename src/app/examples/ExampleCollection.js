import React from "react";
import WorkInProgress from "../../favorites/WorkInProgress/WorkInProgress";
import ExampleFlip from "./ExampleFlip";
import ExampleMovement from "./ExampleMovement";
import ExamplePopIn from "./ExamplePopIn";

const ExampleCollection = {
  'Flip': ExampleFlip,
  'Slide': WorkInProgress,
  'PopIn': ExamplePopIn,
  'Moving': ExampleMovement,
};

export default ExampleCollection;
