import React, { useState, useEffect } from "react";

function DropdownItem(props) {
  const [selected, SetSelected] = useState(false);
  const [path, SetPath] = useState();

  return (
    <a
      className={`a_dropDown menu-item font-weight-bold ${
        props.actuatalModelPath &&
        props.actuatalModelPath == props.selectedModelPath
          ? "selected"
          : ""
      }`}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        props.handle_click(props.goToMenu, props.selectedModelPath);
      }}
    >
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      <span className="icon-right">{props.rightIcon}</span>
    </a>
  );
}

export default DropdownItem;
