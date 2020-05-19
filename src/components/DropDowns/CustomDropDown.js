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

function CustomDropdown() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        className="a_dropDown menu-item font-weight-bold"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
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
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            {" "}
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="animals"
          >
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦔">HTML</DropdownItem>
          <DropdownItem leftIcon="🦔">CSS</DropdownItem>
          <DropdownItem leftIcon="🦔">JavaScript</DropdownItem>
          <DropdownItem leftIcon="🦔">Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="🦔">
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Kangaroo</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Frog</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Horse</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default CustomDropdown;
