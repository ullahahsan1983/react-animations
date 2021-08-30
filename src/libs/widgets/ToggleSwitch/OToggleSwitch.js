import React, { useState } from "react";
import "./otoggleswitch.scss";

const OToggleSwitch = React.forwardRef(({ onSwitch, variant, initialState, labelOn, labelOff, ...props}, ref) => {
    const sliderClass = `slider ${variant}`;
    const checked = initialState || false;
    const chooseText = (flag) => (flag ? labelOn : labelOff) || '';

    const [text, setText] = useState(chooseText(checked));
    const triggerSwitch = (flag) => {
        setText(chooseText(flag));
        onSwitch && onSwitch(flag);
    } 

    return (
        <label className="otoggle-switch" aria-label="On/Off" {...props}>
            <input type="checkbox" checked={checked} onChange={(e) => triggerSwitch(e.target.checked)} />
            <span className={sliderClass}>{text}</span>
        </label>
    );
});

OToggleSwitch.defaultProps = {
    variant: "square", // square, round
    labelOn: "On",
    labelOff: "Off"
}

export default OToggleSwitch;