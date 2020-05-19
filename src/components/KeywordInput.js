import TagsInput from "react-tagsinput";
import React, { useState } from "react";

import "react-tagsinput/react-tagsinput.css"; // If using WebPack and style-loader.

function KeywordInput() {
  const [tags, SetTags] = useState([]);

  function handleChange(value) {
    SetTags(value);
  }

  return <TagsInput value={tags} onChange={handleChange} />;
}

export default KeywordInput;
