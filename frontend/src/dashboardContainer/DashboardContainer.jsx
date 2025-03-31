import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Activities from '../components/Activities/Activities';
import "./DashboardContainer.css";

const DashboardContainer = ({children}) => {
  return <div className="dashboard-container">
   <Sidebar/>
   {/* <Activities/> */}
    <Header/>
        <div className="main-content">
           {children}
        </div>
  </div>;
}

export default DashboardContainer