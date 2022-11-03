import React from 'react';
import { useState } from 'react';
import arrow from '../images/icon-arrow-dark.svg';
import arrowDesktop from '../images/icon-arrow-light.svg';
import './DropMenu.css';

import { useMediaQuery } from 'react-responsive';

const DropMenu = ({ props }) => {
  const [rotation, setRotation] = useState(0);
  const [inDropMenu, toggleDropMenu] = useState(false);
  const notMobile = useMediaQuery({ query: '(min-width: 769px)' });

  function handleToggleDropMenu() {
    toggleDropMenu(!inDropMenu);
  }

  return (
    <div className="drop-menu-container">
      <div
        className="drop-menu-title-container"
        onClick={() => {
          handleToggleDropMenu();
          setRotation(!inDropMenu ? 180 : 0);
        }}
      >
        <div className="drop-menu-title">{props.title}</div>
        <div className="drop-arrow-container">
          <img
            src={notMobile ? arrowDesktop : arrow}
            alt="arrow"
            className="drop-arrow"
            style={{ transform: `rotateX(${rotation}deg)` }}
          />
        </div>
      </div>
      {inDropMenu ? (
        <div className="drop-menu-contents-container slide-in-top">
          {props.content.map((config, i) => (
            <a
              key={i}
              href="https://dylanmanfredi.xyz"
              className="drop-menu-link"
            >
              {config.title}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default DropMenu;
