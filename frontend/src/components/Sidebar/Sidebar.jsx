import React, { useState } from "react";
import "./Sidebar.css";
import "boxicons";
import { logos } from "../../assets/assets";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-image">
          <img src={logos.FECElogo} alt="Logo" />
        </div>
        <div className="logo-text">
          <h1>FECE-KNUST</h1>
          <p>Faculty of Engineering and Computing Engineering</p>
        </div>
      </div>
      <div className="sidebar-menu">
        {[
          { name: "Home", icon: "home", color: "#8b8b8b" },
          { name: "News", icon: "news", color: "#8b8b8b" },
          { name: "Resources", icon: "book", color: "#8b8b8b" },
          { name: "Blog", icon: "message-square-dots", color: "#8b8b8b" },
          { name: "Market", icon: "shopping-bag", color: "#8b8b8b" },
          { name: "Settings", icon: "cog", color: "#8b8b8b" },
        ].map((item) => (
          <div
            key={item.name}
            className={`sidebar-menu-item ${activeItem === item.name ? "active" : ""}`}
            onClick={() => handleItemClick(item.name)}
          >
            <box-icon name={item.icon} color={activeItem === item.name ? "#0077ff" : "#8b8b8b"}></box-icon>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="sign-out-button">
        <box-icon name="log-out" color="#e45757"></box-icon>
        <p>Sign Out</p>
      </div>
    </div>
  );
};

export default Sidebar;
