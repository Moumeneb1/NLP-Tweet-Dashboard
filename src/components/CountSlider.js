import React from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";

const CountSlider = (props) => {
  return (
    <RangeSlider
      max={3000}
      min={100}
      tooltip={"on"}
      value={props.value}
      onChange={(changeEvent) => props.changeHandler(changeEvent)}
    />
  );
};

export default CountSlider;
