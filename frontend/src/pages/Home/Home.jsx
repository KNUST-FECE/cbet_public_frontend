import React, { useState, useEffect } from 'react';
import './Home.css';
import DashboardContainer from '../../dashboardContainer/DashboardContainer';
import { logos } from '../../assets/assets';

const Home = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      const firstName = storedUser.name.split(' ')[0];
      setUserName(firstName);
    }
    if (storedUser) {
      setUserName(storedUser.name);
    }
  }, []);

  return (
    <DashboardContainer>
      <div className="welcome-message-container">
        <div className="welcome-text">
          <h2>Welcome back, {userName || 'Guest'} 👋</h2>
          <p>
            This is the Faculty of Electrical and Computer Engineering where you
            find most of our resources
          </p>
        </div>
        <div className="welcome-image">
          <img src={logos.welcomeImg} alt="" />
        </div>
      </div>
      <div className="FECE-KNUST-programs">
        <div className="program-container">
          <img src={logos.ACESlogo} alt="" />
          <h3>ACES</h3>
        </div>
        <div className="program-container">
          <img src={logos.BMESSlogo} alt="" />
          <h3>BMESS</h3>
        </div>
        <div className="program-container">
          <img src={logos.ELEESAlogo} alt="" />
          <h3>ELEESA</h3>
        </div>
        <div className="program-container">
          <img src={logos.TELESAlogo} alt="" />
          <h3>TELESA</h3>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Home;
