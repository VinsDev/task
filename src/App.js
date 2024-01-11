import './App.css';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/Header';
import { Outlet } from 'react-router-dom'; 


function App() {
  return (
    <div className="flex">
      <div className='basis-[16%] h-[100vh]'>
        <Sidebar />
      </div>
      <div className='basis-[84%]'>
        {/* <DashboardView /> */}
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
