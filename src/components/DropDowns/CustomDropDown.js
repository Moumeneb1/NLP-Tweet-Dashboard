import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.css";
import { ReactComponent as BellIcon } from "assets/icons/bell.svg";
import { ReactComponent as MessengerIcon } from "assets/icons/messenger.svg";
import { ReactComponent as CaretIcon } from "assets/icons/caret.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plus.svg";
import { ReactComponent as CogIcon } from "assets/icons/cog.svg";
import { ReactComponent as ChevronIcon } from "assets/icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "assets/icons/arrow.svg";
import { ReactComponent as BoltIcon } from "assets/icons/bolt.svg";
import DropdownItem from "components/DropDowns/DropdownItem";

function CustomDropdown(props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const [selectedModelPath, setSelectedModelPath] = useState("");
  const [selectedDomain, setSelectedDoamin] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function handleClick(goToMenu, selectedModelPath) {
    if (goToMenu) {
      setActiveMenu(goToMenu);
    }
    if (selectedModelPath) {
      setSelectedModelPath(selectedModelPath);
    } else {
      setSelectedModelPath("");
    }
    props.clickHandler(selectedModelPath);
  }

  return (
    <div
      className="root_dropDown code_dropDown body_dropDown dropdown"
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          {props.fields.map((fieled) => {
            return (
              <DropdownItem
                rightIcon={<CaretIcon />}
                goToMenu={fieled.name}
                children={fieled.name}
                handle_click={handleClick}
              ></DropdownItem>
            );
          })}
        </div>
      </CSSTransition>

      {props.fields.map((fieled) => {
        return (
          <CSSTransition
            in={activeMenu === fieled.name}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}
          >
            <div className="menu">
              <DropdownItem
                goToMenu="main"
                isClass="True"
                children="Go Back"
                handle_click={handleClick}
                leftIcon={<ArrowIcon />}
              ></DropdownItem>

              {fieled.models.map((model) => {
                return (
                  <DropdownItem
                    leftIcon=""
                    field={fieled.name}
                    selectedModelPath={fieled.name + "/" + model.name}
                    actuatalModelPath={selectedModelPath}
                    children={model.name}
                    handle_click={handleClick}
                  ></DropdownItem>
                );
              })}
            </div>
          </CSSTransition>
        );
      })}
    </div>
  );
}

export default CustomDropdown;
