import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import "boxicons";
import { logos } from "../../assets/assets";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleSignOut = () => {
    console.log("Sign out clicked");
    navigate("/login"); // Correct way to navigate
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
          { name: "Home", icon: "home", color: "#8b8b8b", path: "/" },
          { name: "News", icon: "news", color: "#8b8b8b", path: "/news" },
          { name: "Resources", icon: "book", color: "#8b8b8b", path: "/resources" },
          { name: "Blog", icon: "message-square-dots", color: "#8b8b8b", path: "/blog" },
          { name: "Market", icon: "shopping-bag", color: "#8b8b8b", path: "/market" },
          { name: "Settings", icon: "cog", color: "#8b8b8b", path: "/settings" },
        ].map((item) => (
          <div
            key={item.name}
            className={`sidebar-menu-item ${window.location.pathname === item.path ? "active" : ""}`}
            onClick={() => {
              handleItemClick(item.name);
              navigate(item.path);
            }}
          >
            <box-icon name={item.icon} color={window.location.pathname === item.path ? "#0077ff" : "#8b8b8b"}></box-icon>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="sign-out-button" onClick={handleSignOut}>
        <box-icon name="log-out" color="#e45757"></box-icon>
        <p>Sign Out</p>
      </div>
    </div>
  );
};

export default Sidebar;
