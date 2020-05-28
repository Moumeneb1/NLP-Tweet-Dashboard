import TagsInput from "react-tagsinput";
import React from "react";

import "react-tagsinput/react-tagsinput.css"; // If using WebPack and style-loader.

function KeywordInput(props) {
  return <TagsInput value={props.tags} onChange={props.handleChange} />;
}

export default KeywordInput;
