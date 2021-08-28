import WorkInProgress from "../../favorites/WorkInProgress/WorkInProgress";
import PureCssShapesExample from "./PureCssShapesExample";
import FlipExample from "./FlipExample";
import MotionExample from "./MotionExample";
import PopInExample from "./PopInExample";
import SimpleShapesExample from "./SimpleShapesExample";
import CompositeShapesExample from "./CompositeShapesExample";

const ExampleCollection = {
  'Effects': {
    'Flip': FlipExample,
    'Slide': WorkInProgress,
    'PopIn': PopInExample,
  },
  'Animations': {
    'Motion': MotionExample,
  },
  'Shapes': {
    'Simple Shapes': SimpleShapesExample,
    'Pure CSS Shapes': PureCssShapesExample,
    'Composite Shapes': CompositeShapesExample,
  }
};

const getExampleTree = () => {
  let arr = [];

  let order = 0;
  for(const [key, value] of Object.entries(ExampleCollection)) {
    if(typeof value == "function") {
      arr.push({ order: ++order, path: key, caption: key });
    } else {
      arr.push({ order: ++order, path: key, caption: key, groupName: key, header: true });
      Object.keys(value).map((itemKey, index) => {
        arr.push({ order: ++order, path: `${key}.${itemKey}`, caption: itemKey, groupName: key });
      });
    }
  }

  return arr;
}

export { ExampleCollection, getExampleTree };
