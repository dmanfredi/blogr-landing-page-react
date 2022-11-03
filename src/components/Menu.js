import React from 'react';
import DropMenu from './DropMenu';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu-super-container slide-in-top">
      <DropMenu
        props={{
          title: 'Product',
          content: [
            { title: 'Overview', link: 'https://dylanmanfredi.xyz' },
            { title: 'Pricing', link: 'https://dylanmanfredi.xyz' },
            { title: 'Marketplace', link: 'https://dylanmanfredi.xyz' },
            { title: 'Features', link: 'https://dylanmanfredi.xyz' },
            { title: 'Intergrations', link: 'https://dylanmanfredi.xyz' },
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
      <div className="line"></div>
      <a href="https://dylanmanfredi.xyz" className="menu-login">
        Login
      </a>
      <a href="https://dylanmanfredi.xyz" className="menu-signup">
        Sign Up
      </a>
    </div>
  );
};

export default Menu;
