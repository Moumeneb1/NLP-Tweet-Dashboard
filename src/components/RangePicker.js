import { DateRange } from "react-date-range";
import React from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

function RangePicker(props) {
  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => props.changeHandler(item)}
      moveRangeOnFirstSelection={false}
      ranges={props.dateRange}
    />
  );
}

export default RangePicker;
