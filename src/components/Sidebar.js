import React from 'react';
import logo from '../assets/images/logo.png';
import HomeIcon from '../assets/icons/home.svg';
import UserIcon from '../assets/icons/user.svg';
import UniversitiesIcon from '../assets/icons/universities.svg';
import MarketPlaceIcon from '../assets/icons/marketplace.svg';
import ProgramIcon from '../assets/icons/program.svg';
import SearchIcon from '../assets/icons/search.svg';
import ApplicationsIcon from '../assets/icons/applications.svg';
import BranchIcon from '../assets/icons/branch.svg';
import AgenciesIcon from '../assets/icons/agencies.svg';
import SubAgenciesIcon from '../assets/icons/subagencies.svg';
import CandidatesIcon from '../assets/icons/candidates.svg';
import CommisionsIcon from '../assets/icons/commisions.svg';
import TransactionIcon from '../assets/icons/transactions.svg';
import TransactionItemsIcon from '../assets/icons/transaction-items.svg';
import InvoicesIcon from '../assets/icons/invoices.svg';
import EventIcon from '../assets/icons/commisions.svg';
import ParticipantIcon from '../assets/icons/participants.svg';
import VisitorFormIcon from '../assets/icons/visitors.svg';
import SeasonIcon from '../assets/icons/commisions.svg';
import AnnouncementIcon from '../assets/icons/commisions.svg';
import ArticleIcon from '../assets/icons/commisions.svg';
import { FaChevronRight } from 'react-icons/fa';

const Sidebar = ({ darkMode }) => {
  return (
    <div className={`min-h-screen px-[10px] ${darkMode ? 'bg-dark-gray' : ''}`}>
      {/* Logo */}
      <div className='pt-[30px] pb-[20px] items-center justify-center'>
        <div className='flex justify-center relative'>
          <img src={logo} alt='' className='cursor-pointer' />
        </div>
        <div className='flex justify-center items-center'>
          <h2 className={`text-[#24245c]/[0.9] text-[16px] leading-[25px] font-normal tracking-widest ${darkMode ? 'text-white' : ''}`}>PANEL</h2>
        </div>
      </div>
      <SidebarItem icon={<img src={HomeIcon} alt="Home Icon" />} text="Home" active={true} darkMode={darkMode} />
      <SidebarItem icon={<img src={UserIcon} alt="User Icon" />} text="User" darkMode={darkMode} />
      <SidebarItemTag text="UNIVERSITY" />
      <SidebarItem icon={<img src={UniversitiesIcon} alt="Universities Icon" />} text="Universities" darkMode={darkMode} />
      <SidebarItemWithArrow icon={<img src={MarketPlaceIcon} alt="Market Place Icon" />} text="Marketplace" darkMode={darkMode} />
      <SidebarItemWithArrow icon={<img src={ProgramIcon} alt="Program Icon" />} text="Program" darkMode={darkMode} />
      <SidebarItem icon={<img src={SearchIcon} alt="Search Icon" />} text="Search" darkMode={darkMode} />
      <SidebarItemTag text="APPLICATION" />
      <SidebarItem icon={<img src={ApplicationsIcon} alt="Applications Icon" />} text="Applications" darkMode={darkMode} />
      <SidebarItemTag text="PARTNERS" />
      <SidebarItem icon={<img src={BranchIcon} alt="Branch Icon" />} text="Branch" darkMode={darkMode} />
      <SidebarItem icon={<img src={AgenciesIcon} alt="Agencies Icon" />} text="Agencies" darkMode={darkMode} />
      <SidebarItem icon={<img src={SubAgenciesIcon} alt="Sub Agencies Icon" />} text="Sub Agencies" darkMode={darkMode} />
      <SidebarItemTag text="LEAD MANAGEMENT" />
      <SidebarItem icon={<img src={CandidatesIcon} alt="Candidates Icon" />} text="Candidates" darkMode={darkMode} />
      <SidebarItemTag text="FINANCE" />
      <SidebarItem icon={<img src={CommisionsIcon} alt="Commisions Icon" />} text="Commisions" darkMode={darkMode} />
      <SidebarItem icon={<img src={TransactionIcon} alt="Transactions Icon" />} text="Transactions" darkMode={darkMode} />
      <SidebarItem icon={<img src={TransactionItemsIcon} alt="Transaction Items Icon" />} text="Transaction Items" darkMode={darkMode} />
      <SidebarItem icon={<img src={InvoicesIcon} alt="Invoice Icon" />} text="Invoices" darkMode={darkMode} />
      <SidebarItemTag text="EVENT MANAGEMENT" />
      <SidebarItem icon={<img src={EventIcon} alt="Event Icon" />} text="Event" darkMode={darkMode} />
      <SidebarItem icon={<img src={ParticipantIcon} alt="Participant Icon" />} text="Participant" darkMode={darkMode} />
      <SidebarItem icon={<img src={VisitorFormIcon} alt="Visitor Form Icon" />} text="Visitor Form" darkMode={darkMode} />
      <SidebarItemTag text="OTHERS" />
      <SidebarItem icon={<img src={SeasonIcon} alt="Season Icon" />} text="Season" darkMode={darkMode} />
      <SidebarItem icon={<img src={AnnouncementIcon} alt="Announcement Icon" />} text="Announcement" darkMode={darkMode} />
      <SidebarItem icon={<img src={ArticleIcon} alt="Article Icon" />} text="Article" darkMode={darkMode} />
    </div>
  );
};

const SidebarItem = ({ icon, text, active, darkMode }) => {
  return (
    <div className={`flex items-center gap-[15px] py-[8px] pl-[30px] my-[2px] cursor-pointer ${active ? 'bg-[#56bce4] rounded-[8px]' : 'text-[#9fa1b8]'}`}>
      {icon}
      <p className={`text-[13px] font-normal ${darkMode || active ? 'text-white' : ''} tracking-wide`}>{text}</p>
    </div>
  );
};

const SidebarItemWithArrow = ({ icon, text, darkMode }) => {
  return (
    <div className={`flex items-center justify-between py-[10px] pl-[30px] pr-[20px] my-[2px] ${darkMode ? 'bg-dark-gray' : 'bg-white'} cursor-pointer gap-[20px]`}>
      <div className='flex items-center gap-[15px]'>
        {icon}
        <p className={`text-[13px] leading-[20px] font-normal ${darkMode ? 'text-white' : 'text-[#9fa1b8]'}`}>{text}</p>
      </div>
      <div className='ml-[4px]'>
        <FaChevronRight color={darkMode ? '#9fa1b8' : '9fa1b8'} size={12} />
      </div>
    </div>
  );
};

const SidebarItemTag = ({ text }) => {
  return (
    <p className='text-[13px] font-bold leading-[10px] text-[#6e7094] pb-[12px] pt-[15px]'>{text}</p>
  );
};

export default Sidebar;
