import './App.css';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/Header';
import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';


function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div className="flex">


      {sidebarVisible && (
        <div className='md:hidden'>
           <div
          className="fixed inset-0 bg-white opacity-5 z-40"
          onClick={closeSidebar}
        ></div>
        </div>
       
      )}
      
      <div className={`md:w-[16%] h-screen text-white ${sidebarVisible ? 'translate-x-0' : '-translate-x-full'} transform transition-transform duration-300 ease-in-out fixed top-0 left-0 md:static md:translate-x-0 md:flex md:inset-0`}>
        <Sidebar />
      </div>
      
      <div className='md:flex-grow'>
        <div className='md:hidden pl-4 pt-4'>
          <FaBars onClick={toggleSidebar} size={25} color='#b0b0b0' />
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
