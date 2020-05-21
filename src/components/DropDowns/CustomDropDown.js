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

  function handleClick(props) {
    if (props.goToMenu) {
      setActiveMenu(props.goToMenu);
    }
    if (props.selectedModelPath) {
      setSelectedModelPath(props.selectedModelPath);
    } else {
      setSelectedModelPath("");
    }
  }

  function DropdownItem(props) {
    return (
      <a
        className="a_dropDown menu-item font-weight-bold"
        onClick={() => {
          handleClick(props);
        }}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
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
                leftIcon={<CogIcon />}
                rightIcon={<ChevronIcon />}
                goToMenu={fieled.name}
              >
                {" "}
                {fieled.name}
              </DropdownItem>
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
                leftIcon={<ArrowIcon />}
              >
                <h2>Go Back</h2>
              </DropdownItem>

              {fieled.models.map((model) => {
                return (
                  <DropdownItem
                    leftIcon=""
                    selectedModelPath={fieled.name + model.name}
                  >
                    {model.name}
                  </DropdownItem>
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
