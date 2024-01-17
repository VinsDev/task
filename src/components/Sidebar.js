import React from 'react';
import logo from '../assets/logo.png';
import { FaChevronRight, FaUser, FaCodeBranch, FaGraduationCap, FaHandshake, FaHome, FaLightbulb, FaLink, FaLock, FaMoneyBill, FaMoneyBillWave, FaMoneyCheck, FaPercent, FaSearch, FaStickyNote, FaUserCheck } from 'react-icons/fa';

const Sidebar = ({ darkMode }) => {
  return (
    <div className={`min-h-screen px-[10px] ${darkMode ? 'bg-dark-gray' : ''}`}>
      {/* Logo */}
      <div className='pt-[30px] pb-[20px] items-center justify-center'>
        <div className='flex justify-center relative'>
          <img src={logo} alt='' className='h-[50px] w-[60px] cursor-pointer' />
        </div>
        <div className='flex justify-center items-center'>
          <h1 className={`text-[#24245c] text-[20px] leading-[22px] font-normal cursor-pointer ${darkMode ? 'text-white' : ''}`}>UNI ADMIRE</h1>
        </div>
        <div className='flex justify-center items-center'>
          <h2 className={`text-[#24245c]/[0.9] text-[16px] leading-[25px] font-normal tracking-widest ${darkMode ? 'text-white' : ''}`}>PANEL</h2>
        </div>
      </div>
      <SidebarItem icon={<FaHome color={darkMode ? 'white' : ''} />} text="Home" active={true} darkMode={darkMode} />
      <SidebarItem icon={<FaUser color='#9fa1b8' />} text="User" darkMode={darkMode} />
      <SidebarItemTag text="UNIVERSITY" />
      <SidebarItem icon={<FaGraduationCap color='#9fa1b8' />} text="Universities" darkMode={darkMode} />
      <SidebarItemWithArrow icon={<FaLock color='#9fa1b8' />} text="Marketplace" darkMode={darkMode} />
      <SidebarItemWithArrow icon={<FaLightbulb color='#9fa1b8' />} text="Program" darkMode={darkMode} />
      <SidebarItem icon={<FaSearch color='#9fa1b8' />} text="Search" darkMode={darkMode} />
      <SidebarItemTag text="APPLICATION" />
      <SidebarItem icon={<FaStickyNote color='#9fa1b8' />} text="Applications" darkMode={darkMode} />
      <SidebarItemTag text="PARTNERS" />
      <SidebarItem icon={<FaCodeBranch color='#9fa1b8' />} text="Branch" darkMode={darkMode} />
      <SidebarItem icon={<FaHandshake color='#9fa1b8' />} text="Agencies" darkMode={darkMode} />
      <SidebarItem icon={<FaLink color='#9fa1b8' />} text="Sub Agencies" darkMode={darkMode} />
      <SidebarItemTag text="LEAD MANAGEMENT" />
      <SidebarItem icon={<FaUserCheck color='#9fa1b8' />} text="Candidates" darkMode={darkMode} />
      <SidebarItemTag text="FINANCE" />
      <SidebarItem icon={<FaPercent color='#9fa1b8' />} text="Commisions" darkMode={darkMode} />
      <SidebarItem icon={<FaMoneyBill color='#9fa1b8' />} text="Transactions" darkMode={darkMode} />
      <SidebarItem icon={<FaMoneyCheck color='#9fa1b8' />} text="Transaction Items" darkMode={darkMode} />
      <SidebarItem icon={<FaMoneyBillWave color='#9fa1b8' />} text="Invoices" darkMode={darkMode} />
      <SidebarItemTag text="EVENT MANAGEMENT" />
      <SidebarItem icon={<FaPercent color='#9fa1b8' />} text="Event" darkMode={darkMode} />
      <SidebarItem icon={<FaMoneyBillWave color='#9fa1b8' />} text="Participant" darkMode={darkMode} />
      <SidebarItem icon={<FaMoneyBillWave color='#9fa1b8' />} text="Visitor Form" darkMode={darkMode} />
      <SidebarItemTag text="OTHERS" />
      <SidebarItem icon={<FaPercent color='#9fa1b8' />} text="Season" darkMode={darkMode} />
      <SidebarItem icon={<FaPercent color='#9fa1b8' />} text="Announcement" darkMode={darkMode} />
      <SidebarItem icon={<FaPercent color='#9fa1b8' />} text="Article" darkMode={darkMode} />
    </div>
  );
};

const SidebarItem = ({ icon, text, active, darkMode }) => {
  return (
    <div className={`flex items-center gap-[15px] py-[8px] pl-[40px] my-[2px] cursor-pointer ${active ? 'bg-[#56bce4] rounded-[8px]' : 'text-[#9fa1b8]'}`}>
      {icon}
      <p className={`text-[14px] font-normal ${darkMode || active ? 'text-white' : ''} tracking-wide`}>{text}</p>
    </div>
  );
};

const SidebarItemWithArrow = ({ icon, text, darkMode }) => {
  return (
    <div className={`flex items-center justify-between py-[10px] pl-[40px] pr-[20px] my-[2px] ${darkMode ? 'bg-dark-gray' : 'bg-white'} cursor-pointer`}>
      <div className='flex items-center gap-[15px]'>
        {icon}
        <p className={`text-[14px] leading-[20px] font-normal ${darkMode ? 'text-white' : 'text-[#9fa1b8]'}`}>{text}</p>
      </div>
      <FaChevronRight color={darkMode ? '#9fa1b8' : ''} size={12} />
    </div>
  );
};

const SidebarItemTag = ({ text }) => {
  return (
    <p className='text-[14px] font-bold leading-[10px] text-[#6e7094] pb-[12px] pt-[15px]'>{text}</p>
  );
};

export default Sidebar;
