import React from 'react'
import logo from '../assets/logo.png';
import { FaAppStore, FaChevronRight, FaCodeBranch, FaHome, FaLanguage, FaLightbulb, FaLock, FaMoneyBill, FaMoneyBillWave, FaMoneyCheck, FaPercent, FaSchool, FaSearch, FaSubway, FaUser, FaUserCheck } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className='bg-[#FFFFFF] h-screen px-[10px]'>
            {/* Logo . . . */}
            <div className='pt-[30px] pb-[20px] items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
                <div className='flex justify-center relative'>
                    <img src={logo} alt='' className=' h-[55px] w-[70px] cursor-pointer' />
                </div>
                <div className='flex justify-center items-center'>
                    <h1 className='text-[#24245c] text-[20px] leading-[20px] font-bold cursor-pointer'>UNI ADMIRE</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <h2 className='text-[#24245c]/[0.9] text-[16px] leading-[25px] font-normal tracking-widest'>PANEL</h2>
                </div>
            </div>
            <SidebarItem icon={<FaHome color='white' />} text="Home" active={true} />
            <SidebarItem icon={<FaUser color='grey' />} text="User" />
            <SidebarItemTag text="UNIVERSITY" />
            <SidebarItem icon={<FaSchool color='grey' />} text="Universities" />
            <SidebarItemWithArrow icon={<FaLock color='grey' />} text="Marketplace" />
            <SidebarItemWithArrow icon={<FaLightbulb color='grey' />} text="FaLightbulb" />
            <SidebarItem icon={<FaSearch color='grey' />} text="Search" />
            <SidebarItemTag text="APPLICATION" />
            <SidebarItem icon={<FaAppStore color='grey' />} text="Applications" />
            <SidebarItemTag text="PARTNERS" />
            <SidebarItem icon={<FaCodeBranch color='grey' />} text="Branch" />
            <SidebarItem icon={<FaLanguage color='grey' />} text="Agencies" />
            <SidebarItem icon={<FaSubway color='grey' />} text="Sub Agencies" />
            <SidebarItemTag text="LEAD MANAGEMENT" />
            <SidebarItem icon={<FaUserCheck color='grey' />} text="Candidates" />
            <SidebarItemTag text="FINANCE" />
            <SidebarItem icon={<FaPercent color='grey' />} text="Commisions" />
            <SidebarItem icon={<FaMoneyBill color='grey' />} text="Transactions" />
            <SidebarItem icon={<FaMoneyCheck color='grey' />} text="Transaction Items" />
            <SidebarItem icon={<FaMoneyBillWave color='grey' />} text="Invoices" />
            <SidebarItemTag text="EVENT MANAGEMENT" />
            <SidebarItem icon={<FaPercent color='grey' />} text="Event" />
            <SidebarItem icon={<FaMoneyBillWave color='grey' />} text="Participant" />
            <SidebarItem icon={<FaMoneyBillWave color='grey' />} text="Visitor Form" />
            <SidebarItemTag text="OTHERS" />
            <SidebarItem icon={<FaPercent color='grey' />} text="Season" />
            <SidebarItem icon={<FaPercent color='grey' />} text="Announcement" />
            <SidebarItem icon={<FaPercent color='grey' />} text="Article" />
        </div>
    )
}

const SidebarItem = ({ icon, text, active }) => {
    return active ? (<div className='flex items-center gap-[15px] py-[12px] border-b-[1px] border-[#EDEDED]/[0.3] pl-[40px] bg-[#56bce4] rounded-[8px] cursor-pointer'>
        {icon}
        <p className='text-[14px] font-normal text-white tracking-wide'>{text}</p>
    </div>) : (
        <div className='flex items-center gap-[15px] py-[12px] border-b-[1px] border-[#EDEDED]/[0.3] pl-[40px] cursor-pointer'>
            {icon}
            <p className='text-[14px] font-bold text-black/[0.6] tracking-wide'>{text}</p>
        </div>
    );
};

const SidebarItemWithArrow = ({ icon, text }) => {
    return (
        <div className='flex items-center justify-between py-[12px]  pl-[40px] pr-[20px] cursor-pointer'>
            <div className='flex items-center gap-[15px]'>
                {icon}
                <p className='text-[14px] leading-[20px] font-bold text-black/[0.6]'>{text}</p>
            </div>
            <FaChevronRight color='grey' />
        </div>
    );
};

const SidebarItemTag = ({ text }) => {
    return (
        <p className='text-[14px] font-bold leading-[10px] text-black/[0.7] pb-[12px] pt-[15px]'>{text}</p>
    );
};

export default Sidebar