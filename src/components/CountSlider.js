import React, { useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";

const CountSlider = () => {
  const [value, setValue] = useState(500);

  return (
    <RangeSlider
      max={3000}
      min={100}
      tooltip={"on"}
      value={value}
      onChange={(changeEvent) => setValue(changeEvent.target.value)}
    />
  );
};

export default CountSlider;