import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <section className="menu-box">
      <div className="menu-button">
        <button>toggle close/open</button>
      </div>
      <div className="menu-box-links">
        <a href="google.com" className="menu-links">
          Link 1
        </a>
        <a href="google.com" className="menu-links">
          Link 2
        </a>
        <a href="google.com" className="menu-links">
          Link 3
        </a>
        <a href="google.com" className="menu-links">
          Link 4 ver big link with a lot of stuff
        </a>
        <a href="google.com" className="menu-links">
          Link 5
        </a>
        <a href="google.com" className="menu-links">
          Link 4 ver big link with a lot of stuff
        </a>
        <a href="google.com" className="menu-links">
          Link 5
        </a>
        <a href="google.com" className="menu-links">
          Link 5
        </a>
        <a href="google.com" className="menu-links">
          Current Link
        </a>
      </div>
    </section>
  );
}

export default Menu;
