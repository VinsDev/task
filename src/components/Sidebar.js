import React from 'react'
import logo from '../assets/logo.png';
import { FaAppStore, FaChevronRight, FaCodeBranch, FaGraduationCap, FaHandshake, FaHome, FaLanguage, FaLightbulb, FaLink, FaLock, FaMoneyBill, FaMoneyBillWave, FaMoneyCheck, FaPercent, FaSchool, FaSearch, FaStickyNote, FaSubway, FaUser, FaUserCheck } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className='bg-[#FFFFFF] h-screen px-[10px]'>
            {/* Logo . . . */}
            <div className='pt-[30px] pb-[20px] items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
                <div className='flex justify-center relative'>
                    <img src={logo} alt='' className=' h-[50px] w-[60px] cursor-pointer' />
                </div>
                <div className='flex justify-center items-center'>
                    <h1 className='text-[#24245c] text-[20px] leading-[22px] font-normal cursor-pointer'>UNI ADMIRE</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <h2 className='text-[#24245c]/[0.9] text-[16px] leading-[25px] font-normal tracking-widest'>PANEL</h2>
                </div>
            </div>
            <SidebarItem icon={<FaHome color='white' />} text="Home" active={true} />
            <SidebarItem icon={<FaUser color='#9fa1b8' />} text="User" />
            <SidebarItemTag text="UNIVERSITY" />
            <SidebarItem icon={<FaGraduationCap color='#9fa1b8' />} text="Universities" />
            <SidebarItemWithArrow icon={<FaLock color='#9fa1b8' />} text="Marketplace" />
            <SidebarItemWithArrow icon={<FaLightbulb color='#9fa1b8' />} text="Program" />
            <SidebarItem icon={<FaSearch color='#9fa1b8' />} text="Search" />
            <SidebarItemTag text="APPLICATION" />
            <SidebarItem icon={<FaStickyNote color='#9fa1b8' />} text="Applications" />
            <SidebarItemTag text="PARTNERS" />
            <SidebarItem icon={<FaCodeBranch color='#9fa1b8' />} text="Branch" />
            <SidebarItem icon={<FaHandshake color='#9fa1b8' />} text="Agencies" />
            <SidebarItem icon={<FaLink color='#9fa1b8' />} text="Sub Agencies" />
            <SidebarItemTag text="LEAD MANAGEMENT" />
            <SidebarItem icon={<FaUserCheck color='#9fa1b8' />} text="Candidates" />
            <SidebarItemTag text="FINANCE" />
            <SidebarItem icon={<FaPercent color='#9fa1b8' />} text="Commisions" />
            <SidebarItem icon={<FaMoneyBill color='#9fa1b8' />} text="Transactions" />
            <SidebarItem icon={<FaMoneyCheck color='#9fa1b8' />} text="Transaction Items" />
            <SidebarItem icon={<FaMoneyBillWave color='#9fa1b8' />} text="Invoices" />
            <SidebarItemTag text="EVENT MANAGEMENT" />
            <SidebarItem icon={<FaPercent color='#9fa1b8' />} text="Event" />
            <SidebarItem icon={<FaMoneyBillWave color='#9fa1b8' />} text="Participant" />
            <SidebarItem icon={<FaMoneyBillWave color='#9fa1b8' />} text="Visitor Form" />
            <SidebarItemTag text="OTHERS" />
            <SidebarItem icon={<FaPercent color='#9fa1b8' />} text="Season" />
            <SidebarItem icon={<FaPercent color='#9fa1b8' />} text="Announcement" />
            <SidebarItem icon={<FaPercent color='#9fa1b8' />} text="Article" />
        </div>
    )
}

const SidebarItem = ({ icon, text, active }) => {
    return active ? (<div className='flex items-center gap-[15px] py-[8px] pl-[40px] bg-[#56bce4] rounded-[8px] my-[2px] cursor-pointer'>
        {icon}
        <p className='text-[14px] font-normal text-white tracking-wide'>{text}</p>
    </div>) : (
        <div className='flex items-center gap-[15px] py-[8px] pl-[40px] my-[2px] cursor-pointer'>
            {icon}
            <p className='text-[14px] font-normal text-[#9fa1b8] tracking-wide'>{text}</p>
        </div>
    );
};

const SidebarItemWithArrow = ({ icon, text }) => {
    return (
        <div className='flex items-center justify-between py-[10px]  pl-[40px] pr-[20px] my-[2px] cursor-pointer'>
            <div className='flex items-center gap-[15px]'>
                {icon}
                <p className='text-[14px] leading-[20px] font-normal text-[#9fa1b8]'>{text}</p>
            </div>
            <FaChevronRight color='#9fa1b8' size={12} />
        </div>
    );
};

const SidebarItemTag = ({ text }) => {
    return (
        <p className='text-[14px] font-bold leading-[10px] text-[#6e7094] pb-[12px] pt-[15px]'>{text}</p>
    );
};

export default Sidebar