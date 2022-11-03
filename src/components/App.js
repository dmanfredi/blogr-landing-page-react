import './App.css';
import Header from './Header';
// import introDecoration from '../images/bg-pattern-intro-mobile.svg';
import circles from '../images/bg-pattern-circles.svg';
import editorMobile from '../images/illustration-editor-mobile.svg';
import editorDesktop from '../images/illustration-editor-desktop.svg';
import laptopIllustration from '../images/illustration-laptop-mobile.svg';
import laptopIllustrationDesktop from '../images/illustration-laptop-desktop.svg';
import phonesIllustration from '../images/illustration-phones.svg';
import Feature from './Feature';
import Footer from './Footer';
import Menu from './Menu';
import React from 'react';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function App() {
  const [inMenu, toggleMenu] = useState(false);
  const notMobile = useMediaQuery({ query: '(min-width: 769px)' });

  function handleMenuToggle() {
    toggleMenu(!inMenu);
  }

  //

  return (
    <div className="App">
      <div className="menu-aligner">{inMenu ? <Menu></Menu> : null}</div>
      <main className="intro-container">
        <Header handleMenuToggle={handleMenuToggle} inMenu={inMenu}></Header>
        <h1 className="title">A modern publishing platform</h1>
        <h2 className="slogan">
          Grow your audience and build your online brand
        </h2>
        <div className="button-container">
          <button className="start intro-button">Start for Free</button>
          <button className="learn intro-button">Learn More</button>
        </div>
        <div className="intro-decoration-container"></div>
      </main>
      <h2 className="selling-points-header">Designed for the future</h2>
      <div className="features-section">
        <div className="decoration-container">
          <img
            src={notMobile ? editorDesktop : editorMobile}
            alt="Interface Illustration"
            className="decoration1-img"
          />
        </div>
        <div className="two-features">
          <Feature
            title="Introducing an extensible editor"
            content="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog."
            theme="dark"
          ></Feature>
          <Feature
            title="Robust content management"
            content="Flexible content management enables users to easily move through posts. Increase the usability of your blog 
  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.."
            theme="dark"
          ></Feature>
        </div>
      </div>
      {!notMobile ? (
        <div className="phones-container">
          <img
            src={phonesIllustration}
            alt="smart phones"
            className="phone-illustration"
          />
        </div>
      ) : null}
      <div className="mid-content-container">
        {notMobile ? (
          <div className="mid-content-circle-container">
            <img src={circles} alt="circles" className="mid-decoration" />
          </div>
        ) : (
          <img src={circles} alt="circles" className="mid-decoration" />
        )}
        <div className="mid-feature-container">
          {notMobile ? (
            <div className="phones-container">
              <img
                src={phonesIllustration}
                alt="smart phones"
                className="phone-illustration"
              />
            </div>
          ) : null}
          <div className="mid-content-flexer">
            <header className="mid-header content-light">
              State of the Art Infrastructure
            </header>
            <div className="feature-content mid-feature content-light">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </div>
          </div>
        </div>
      </div>
      <div className="features-section features-section-bottom">
        <div className="decoration-container laptop-decoration-container">
          <img
            src={notMobile ? laptopIllustrationDesktop : laptopIllustration}
            alt="Interface Illustration"
            className="decoration2-img"
          />
        </div>

        <div className="two-features two-features-bottom">
          <Feature
            title="Free, open, simple"
            content="Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
            theme="dark"
          ></Feature>
          <Feature
            title="Powerful tooling"
            content="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites."
            theme="dark"
          ></Feature>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
