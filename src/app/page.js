'use client'
import Sidebar from '@/components/Sidebar'
import HomePage from '@/pages/HomePage'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const closeSidebar = () => {
    setSidebarVisible(false);
  };
  return (
    <div>
      <div className="flex max-w-screen">
        {sidebarVisible && (
          <div className='md:hidden'>
            <div
              className="fixed inset-0 bg-white opacity-5 z-40"
              onClick={closeSidebar}
            ></div>
          </div>

        )}
        <div className={`md:basic-[20%] bg-white text-white ${sidebarVisible ? 'translate-x-0' : '-translate-x-full'} transform transition-transform duration-300 ease-in-out fixed top-0 left-0 md:static md:translate-x-0 md:flex md:inset-0`} style={{ zIndex: sidebarVisible ? '50' : '0' }}>
          <Sidebar darkMode={darkMode} />
        </div>
        <div className='md:basic-[80%]'>
          <div className='md:hidden pl-8 pt-8 bg-transparent'>
            <FaBars onClick={toggleSidebar} size={25} color='#b0b0b0' />
          </div>
          <div>
            <HomePage darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </div>
    </div>

  )
}