import React from 'react';
import menu from '../images/icon-hamburger.svg';
import exit from '../images/icon-close.svg';
import DropMenu from './DropMenu';
import './header.css';
import { useMediaQuery } from 'react-responsive';

const Header = ({ handleMenuToggle, inMenu }) => {
  const notMobile = useMediaQuery({ query: '(min-width: 769px)' });

  return (
    <>
      {notMobile ? (
        <header className="header-container">
          <div className="blogr">Blogr</div>
          <div className="desktop-drop-container">
            <div className="desktop-drop-menus-container">
              <DropMenu
                props={{
                  title: 'Product',
                  content: [
                    { title: 'Overview', link: 'https://dylanmanfredi.xyz' },
                    { title: 'Pricing', link: 'https://dylanmanfredi.xyz' },
                    { title: 'Marketplace', link: 'https://dylanmanfredi.xyz' },
                    { title: 'Features', link: 'https://dylanmanfredi.xyz' },
                    {
                      title: 'Intergrations',
                      link: 'https://dylanmanfredi.xyz',
                    },
                  ],
                }}
              ></DropMenu>
              <DropMenu
                props={{
                  title: 'Company',
                  content: [
                    { title: 'About', link: 'https://dylanmanfredi.xyz' },
                    { title: 'Team', link: 'https://dylanmanfredi.xyz' },
                    { title: 'Blog', link: 'https://dylanmanfredi.xyz' },
                    { title: 'Careers', link: 'https://dylanmanfredi.xyz' },
                  ],
                }}
              ></DropMenu>
              <DropMenu
                props={{
                  title: 'Connect',
                  content: [
                    { title: 'Contact', link: 'https://dylanmanfredi.xyz' },
                    { title: 'Newsletter', link: 'https://dylanmanfredi.xyz' },
                    { title: 'Linkedin', link: 'https://dylanmanfredi.xyz' },
                  ],
                }}
              ></DropMenu>
            </div>
            <div className="loginsignup-container">
              <a href="https://dylanmanfredi.xyz" className="menu-login">
                Login
              </a>
              <a href="https://dylanmanfredi.xyz" className="menu-signup">
                Sign Up
              </a>
            </div>
          </div>
        </header>
      ) : (
        <header className="header-container">
          <div className="blogr">Blogr</div>
          <div className="menu-container" onClick={handleMenuToggle}>
            <img
              src={inMenu ? exit : menu}
              alt="Menu Toggle"
              className="menu-img"
            />
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
