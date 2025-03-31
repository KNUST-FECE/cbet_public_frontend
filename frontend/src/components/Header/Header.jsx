import React from 'react'
import "./Header.css";
import 'boxicons';

const Header = () => {
  return (
    <div className="header">
      <div className="search-bar">
        <div className="search-icon"><box-icon name="search" size="25px" color="#a4a4a4"></box-icon></div>
        <input
          type="text"
          placeholder="Search Courses, Documents, Activities..."
        />
      </div>
      <div className="dark-mode-toggle">
        <div class="toggle">
            <span><box-icon name="sun" type="solid"></box-icon></span>
            <input type="checkbox" id="toggle-switch" />
            <label for="toggle-switch"><span class="screen-reader-text">Toggle Color Scheme</span></label>
            <span><box-icon name="moon" type="solid"></box-icon></span>
        </div>
      </div>
    </div>
  );
}

export default Header