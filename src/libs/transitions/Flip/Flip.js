import React from "react";
import './Flip.css';

const FlipFront = (props) => {
  return (
    <div className='flip-front'>
      {props.children}
    </div>
  );
}

const FlipBack = (props) => {
  return (
    <div className='flip-back'>
      {props.children}
    </div>
  );
}

const Flip = (props)  => {
  const style = {
    width: props.width,
    height: props.height,
    perspective: props.swing ? '1000px' : '0'
  };
  
  return (
    <div className='flip' style={style}>
      <div className='flip-inner'>
        {props.children}
      </div>
    </div>
  );
}

export default Object.assign(Flip, {
  Front: FlipFront,
  Back: FlipBack
});
