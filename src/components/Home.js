import React, { useEffect, useRef, useState } from 'react';
import { FaBell, FaBolt, FaChevronDown, FaDollarSign, FaEnvelope, FaExclamation, FaEyeSlash, FaFilter, FaGlobe, FaImage, FaMoon, FaStarAndCrescent, FaUser, FaVolumeUp, FaWallet } from 'react-icons/fa';
import './CircularProgressBar.css';
import { PieChart } from '@mui/x-charts';

const Home = () => {
    // Data . . .
    const withdrawnCardData = {
        amountWithdrawn: "22,748",
        percentageIncrease: 10,
        percentageCommision: 43,
        potentialCommision: "26,347",
        earnedCommision: "12,443",
        refund: "2,443"
    };

    const studentCardData = {
        dailyAverage: 49,
        dailyStudents: "1,175",
        dailyApplications: "1,254",
        weeklyAverage: 123,
        weeklyStudents: "2,154",
        weeklyApplications: "3,254",
        monthlyAverage: 345,
        monthlyStudents: "11,175",
        monthlyApplications: "21,254",
        offerSent: 1042,
        accepted: 460,
        registered: 232
    }

    return (
        <div className='min-h-screen bg-[#f6f6f6] w-full pl-[15px]'>
            {/* Header */}
            <Header />
            <div className='relative'>
                <div className='w-full'>
                    {/* Filter */}
                    <div className='flex justify-between bg-white rounded-[15px] my-[20px] p-[15px] mr-[65px]'>
                        <div className='flex items-center justify-center gap-[15px] px-[25px] py-[10px] bg-[#56bce4] rounded-[8px] cursor-pointer'>
                            <FaFilter color='white' size={14} />
                            <p className='text-[14px] font-normal text-white'>Filter</p>
                        </div>
                        <div></div>
                    </div>
                    {/* Row 1 */}
                    <div className='grid grid-cols-1'>
                        <div className='flex overflow-x-auto scroll-container'>
                            <div className='flex-none'>
                                <div className='rounded-[20px] bg-white min-w-[400px]'>
                                    <div className='flex justify-between p-[25px] bg-[#dbf4de] rounded-tr-[20px] rounded-tl-[20px]'>
                                        <div className='my-[20px]'>
                                            <FaWallet color='#5cbf54' size={22} />
                                            <p className='text-[#5cbf54] font-bold text-[16px] mt-[5px]'>Withdrawn</p>
                                            <p className='text-[#5cbf54] font-bold text-[18px]'>${withdrawnCardData.amountWithdrawn}</p>
                                        </div>
                                        <div className='flex'>
                                            <div className='flex items-center'>
                                                <div>
                                                    <FaBolt color='#5cbf54' />
                                                    <p className='text-[#5cbf54] font-normal text-[14px]'>{withdrawnCardData.percentageIncrease}% increase</p>
                                                    <p className='text-grey/[0.7] font-normal text-[14px]'>from last week</p>
                                                </div>

                                            </div>
                                            <div>
                                                <FaEyeSlash color='grey' size={22} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pl-[25px] pb-[25px] pt-[10px] pr-[25px]'>
                                        <p className='text-[#24245c] text-[18px] leading-[25px] font-bold'>Commision</p>
                                        <div className='flex pt-[25px] justify-between'>
                                            <div className='items-center space-y-4 md:space-y-8 lg:space-y-12'>
                                                <CircularProgressBar targetValue={withdrawnCardData.percentageCommision} />
                                                <p className='text-black/[0.7] text-[14px] leading-[25px] font-normal mt-4'>See all Details</p>
                                            </div>
                                            <div className='flex'>
                                                <div className='flex h-fit mx-[15px]'>
                                                    <div className='w-[4px] bg-[#b9cbd3] rounded-[4px] mx-[10px] my-[4px]'></div>
                                                    <div className=''>
                                                        <FaWallet color='grey' />
                                                        <p className='text-black/[0.6] font-bold text-[12px]'>Potential</p>
                                                        <p className='text-black/[0.6] font-bold text-[12px]'>Commisions</p>
                                                        <p className='text-black/[0.7] font-extrabold text-[16px]'>${withdrawnCardData.potentialCommision}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex h-fit mx-[15px]'>
                                                        <div className='w-[4px] bg-[#56bce4] rounded-[4px] mx-[10px] my-[4px]'></div>
                                                        <div className=''>
                                                            <FaDollarSign color='#56bce4' />
                                                            <p className='text-black/[0.6] font-bold text-[12px]'>Earned</p>
                                                            <p className='text-black/[0.6] font-bold text-[12px]'>Commisions</p>
                                                            <p className='text-[#56bce4] font-extrabold text-[16px]'>${withdrawnCardData.earnedCommision}</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex h-fit mx-[15px] mt-[35px]'>
                                                        <div className='w-[4px] bg-[#ff5757] rounded-[4px] mx-[10px] my-[4px]'></div>
                                                        <div className=''>
                                                            <FaExclamation color='red' />
                                                            <p className='text-black/[0.6] font-bold text-[12px]'>Refund</p>
                                                            <p className='text-[#ff5757] font-extrabold text-[16px]'>${withdrawnCardData.refund}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-none'>
                                <div className='rounded-[20px] bg-white mx-[15px] px-[20px] py-[25px] min-w-[400px]'>
                                    <div className='flex justify-between'>
                                        <div className='space-y-4 md:space-y-8 lg:space-y-12'>
                                            <p className='text-black font-bold text-[20px]'>Student</p>
                                            <div>
                                                <div className='flex justify-center items-center mt-[25px]'>
                                                    <h1 className='text-black/[0.5] text-[12px] font-bold'>Daily Average</h1>
                                                </div>
                                                <div className='flex justify-center items-center mt-[10px]'>
                                                    <h2 className='text-black text-[22px] font-bold tracking-widest'>{studentCardData.dailyAverage}</h2>
                                                </div>
                                                <div className='flex justify-center items-center gap-[10px] h-fit mt-[10px]'>
                                                    <p className='text-black text-[10px] font-bold tracking-widest'>Daily</p>
                                                    <div className='w-[1.5px] h-[12px] bg-[#dadada] rounded-[1px]'></div>
                                                    <p className='text-black/[0.5] text-[10px] font-bold tracking-widest'>Weekly</p>
                                                    <div className='w-[1.5px] h-[12px] bg-[#dadada] rounded-[1px]'></div>
                                                    <p className='text-black/[0.5] text-[10px] font-bold tracking-widest'>Monthly</p>
                                                </div>
                                            </div>
                                            <HorizontalBarChart />
                                            <div className='flex mt-[15px]'>
                                                <div className='flex h-fit mx-[15px]'>
                                                    <div className='w-[4px] bg-[#5cbf54] rounded-[4px] mx-[10px] my-[4px]'></div>
                                                    <div className=''>
                                                        <p className='text-black/[0.6] font-bold text-[10px]'>Students</p>
                                                        <p className='text-black/[0.7] font-extrabold text-[16px]'>{studentCardData.dailyStudents}</p>
                                                    </div>
                                                </div>
                                                <div className='flex h-fit mx-[15px]'>
                                                    <div className='w-[4px] bg-[#b9cbd3] rounded-[4px] mx-[10px] my-[4px]'></div>
                                                    <div className=''>
                                                        <p className='text-black/[0.6] font-bold text-[10px]'>Applications</p>
                                                        <p className='text-black/[0.7] font-extrabold text-[16px]'>{studentCardData.dailyApplications}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='grid grid-rows-3 gap-[20px]'>
                                            <div className='bg-white shadow-lg rounded-[8px] mx-[20px]'>
                                                <div className='bg-[#dbedf4] rounded-tr-[8px] rounded-tl-[8px] flex items-center justify-center gap-[6px] py-[8px] min-w-[150px]'>
                                                    <FaEnvelope color='#51bae7' />
                                                    <p className='text-[#51bae7] font-bold text-[14px]'>Offer Sent</p>
                                                </div>
                                                <div className='flex items-center justify-center'>
                                                    <p className='text-[#51bae7] font-bold text-[18px] leading-[10px] mt-[25px]'>{studentCardData.offerSent}</p>
                                                </div>
                                                <div className='flex items-center justify-center'>
                                                    <p className='text-black/[0.7] font-bold text-[14px] leading-[40px]'>See all Details</p>
                                                </div>
                                            </div>
                                            <div className='bg-white shadow-lg rounded-[8px] mx-[20px]'>
                                                <div className='bg-[#feedcd] rounded-tr-[8px] rounded-tl-[8px] flex items-center justify-center gap-[6px] py-[8px] min-w-[150px]'>
                                                    <FaEnvelope color='#e39735' />
                                                    <p className='text-[#e39735] font-bold text-[14px]'>Accepted</p>
                                                </div>
                                                <div className='flex items-center justify-center'>
                                                    <p className='text-[#e39735] font-bold text-[18px] leading-[10px] mt-[25px]'>{studentCardData.accepted}</p>
                                                </div>
                                                <div className='flex items-center justify-center'>
                                                    <p className='text-black/[0.7] font-bold text-[14px] leading-[40px]'>See all Details</p>
                                                </div>
                                            </div>
                                            <div className='bg-white shadow-lg rounded-[8px] mx-[20px]'>
                                                <div className='bg-[#dbf4de] rounded-tr-[8px] rounded-tl-[8px] flex items-center justify-center gap-[6px] py-[8px] min-w-[150px]'>
                                                    <FaEnvelope color='#65c35e' />
                                                    <p className='text-[#65c35e] font-bold text-[14px]'>Registered</p>
                                                </div>
                                                <div className='flex items-center justify-center'>
                                                    <p className='text-[#65c35e] font-bold text-[18px] leading-[10px] mt-[25px]'>{studentCardData.registered}</p>
                                                </div>
                                                <div className='flex items-center justify-center'>
                                                    <p className='text-black/[0.7] font-bold text-[14px] leading-[40px]'>See all Details</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-[22%] rounded-[20px] bg-white px-[20px] py-[20px] mr-[15px] '>
                                <p className='text-black font-bold text-[20px]'>Applications</p>
                                <div className='flex justify-center items-center mt-[60px]'>
                                    <h2 className='text-black text-[24px] font-bold'>345</h2>
                                </div>
                                <div className='flex justify-center items-center pl-[20%]'>
                                    <PieChart
                                        series={[
                                            {
                                                data: [
                                                    { id: 0, value: 210, color: '#56bce4' },
                                                    { id: 1, value: 135, color: '#cadcff' },
                                                ],
                                            },
                                        ]}
                                        width={300}
                                        height={200}
                                    />
                                </div>
                                <div className='flex justify-center mb-[20px]'>
                                    <div className='flex h-fit mx-[15px]'>
                                        <div className='w-[4px] bg-[#56bce4] rounded-[4px] mx-[10px] my-[4px]'></div>
                                        <div className=''>
                                            <p className='text-black/[0.6] font-bold text-[10px]'>Universal</p>
                                            <p className='text-black/[0.7] font-extrabold text-[16px]'>210</p>
                                        </div>
                                    </div>
                                    <div className='flex h-fit mx-[15px]'>
                                        <div className='w-[4px] bg-[#cadcff] rounded-[4px] mx-[10px] my-[4px]'></div>
                                        <div className=''>
                                            <p className='text-black/[0.6] font-bold text-[10px]'>Global</p>
                                            <p className='text-black/[0.7] font-extrabold text-[16px]'>135</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Floating Icons */}
                <div className='hidden md:inline absolute top-[0px] right-[0px]'>
                    <div className='h-[50px] w-[50px] bg-white shadow-lg rounded-tl-[10px] rounded-bl-[10px] flex items-center justify-center cursor-pointer'>
                        <FaBell color='#3c3e6e' />
                    </div>
                    <div className='h-[50px] w-[50px] bg-[#56bce4] shadow-lg rounded-tl-[10px] rounded-bl-[10px] mt-[7px] flex items-center justify-center cursor-pointer'>
                        <FaVolumeUp color='white' />
                    </div>
                </div>
            </div>
            {/* Agencies, Counsellor, Mentor buttons */}
            <div className='flex my-[15px]'>
                <div className='flex items-center justify-center px-[20px] py-[6px] border-b-[1px] border-[#EDEDED]/[0.3] bg-[#56bce4] rounded-[6px] cursor-pointer'>
                    <p className='text-[14px] font-normal text-white tracking-wide'>Agencies</p>
                </div>
                <div className='flex items-center justify-center px-[20px] py-[6px] border-b-[1px] border-[#EDEDED]/[0.3] rounded-[6px] cursor-pointer'>
                    <p className='text-[14px] font-normal text-black/[0.7] tracking-wide'>Counsellor</p>
                </div>
                <div className='flex items-center justify-center px-[20px] py-[6px] border-b-[1px] border-[#EDEDED]/[0.3] rounded-[6px] cursor-pointer'>
                    <p className='text-[14px] font-normal text-black/[0.7] tracking-wide'>Mentor</p>
                </div>
            </div>
            {/* Agencies, Counsellor, Mentor Row */}
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-[22%] rounded-[20px] bg-white px-[20px] py-[20px] mr-[15px] my-[15px]'>
                    <p className='text-black font-bold text-[20px]'>Agencies</p>
                    <div className='flex justify-center items-center mt-[25px]'>
                        <h1 className='text-black/[0.5] text-[12px] font-bold'>Total</h1>
                    </div>
                    <div className='flex justify-center items-center mt-[10px]'>
                        <h2 className='text-black text-[22px] font-bold tracking-widest'>345</h2>
                    </div>
                    <div className='flex justify-center items-center pl-[20%]'>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 210, color: '#5cbf54' },
                                        { id: 1, value: 135, color: '#dbf4de' },
                                    ],
                                },
                            ]}
                            width={300}
                            height={200}
                        />
                    </div>
                    <div className='flex justify-center mb-[20px]'>
                        <div className='flex h-fit mx-[15px]'>
                            <div className='w-[4px] bg-[#5cbf54] rounded-[4px] mx-[10px] my-[4px]'></div>
                            <div className=''>
                                <p className='text-black/[0.6] font-bold text-[10px]'>Active</p>
                                <p className='text-black/[0.7] font-extrabold text-[16px]'>210</p>
                            </div>
                        </div>
                        <div className='flex h-fit mx-[15px]'>
                            <div className='w-[4px] bg-[#b9cbd3] rounded-[4px] mx-[10px] my-[4px]'></div>
                            <div className=''>
                                <p className='text-black/[0.6] font-bold text-[10px]'>Inactive</p>
                                <p className='text-black/[0.7] font-extrabold text-[16px]'>135</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-[44%] rounded-[20px] bg-white px-[20px] py-[20px] shadow-lg mr-[15px] my-[15px]'>
                    <p className='text-black font-bold text-[20px]'>Students</p>
                    <div className='grid grid-cols-3 pt-[20px]'>
                        <div className='border-[1px] flex items-center justify-center'>
                            <p className='text-black font-bold text-[13px] px-[25px] py-[6px]'>Offer sent</p>
                        </div>
                        <div className='border-[1px] flex items-center justify-center'>
                            <p className='text-black/[0.5] font-bold text-[13px] px-[25px] py-[6px]'>Accepted</p>
                        </div>
                        <div className='border-[1px] flex items-center justify-center'>
                            <p className='text-black/[0.5] font-bold text-[13px] px-[25px] py-[6px]'>Registered</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-[40px]'>
                        <h1 className='text-black/[0.5] text-[12px] font-bold'>Total Offer Sent</h1>
                    </div>
                    <div className='flex justify-center items-center mt-[2px]'>
                        <h2 className='text-black text-[22px] font-bold tracking-widest'>1,443</h2>
                    </div>
                    <div className='flex mt-[25px]'>
                        <div className='w-[28%] rounded-[6px] bg-[#4f517d] py-[15px] px-[10px] mx-[2px]'>
                            <h1 className='text-white text-[12px] font-normal'>Agency A</h1>
                            <h2 className='text-white text-[18px] font-normal'>323</h2>
                            <h2 className='text-white text-[16px] font-normal pt-[8px]'>%20</h2>
                        </div>
                        <div className='w-[20%] rounded-[6px] bg-[#727497] py-[15px] px-[10px] mx-[2px]'>
                            <h1 className='text-white text-[12px] font-normal'>Agency B</h1>
                            <h2 className='text-white text-[18px] font-normal'>323</h2>
                            <h2 className='text-white text-[16px] font-normal pt-[8px]'>%20</h2>
                        </div>
                        <div className='w-[20%] rounded-[6px] bg-[#a1a4d3] py-[15px] px-[10px] mx-[2px]'>
                            <h1 className='text-white text-[12px] font-normal'>Agency C</h1>
                            <h2 className='text-white text-[18px] font-normal'>323</h2>
                            <h2 className='text-white text-[16px] font-normal pt-[8px]'>%20</h2>
                        </div>
                        <div className='w-[28%] rounded-[6px] bg-[#7477b7] py-[15px] px-[10px] mx-[2px]'>
                            <h1 className='text-white text-[12px] font-normal'>Others</h1>
                            <h2 className='text-white text-[18px] font-normal'>323</h2>
                            <h2 className='text-white text-[16px] font-normal pt-[8px]'>%20</h2>
                        </div>
                    </div>
                    <p className='text-black/[0.7] text-[14px] leading-[25px] font-normal mt-4'>See all Details</p>
                </div>
                <div className='md:w-[22%] rounded-[20px] bg-white px-[20px] py-[20px] mr-[15px] my-[15px]'>
                    <p className='text-black font-bold text-[20px]'>Commision</p>
                    <div className='h-[10px] bg-[#ff5353] w-[100%] rounded-br-[5px] rounded-bl-[5px] mt-[10px]'>

                    </div>
                    <div className='flex justify-center items-center mt-[25px]'>
                        <h1 className='text-black/[0.5] text-[12px] font-bold'>Total</h1>
                    </div>
                    <div className='flex justify-center items-center mt-[4px]'>
                        <h2 className='text-black text-[22px] font-bold tracking-widest'>$21,355</h2>
                    </div>
                    <p className='text-black/[0.7] text-[14px] leading-[25px] font-bold '>Top Rank</p>
                    <div className='flex items-center justify-between border-b-[2px] py-[4px]'>
                        <div>
                            <h1 className='text-black text-[12px] font-normal pb-[2px]'>Agency A</h1>
                            <h2 className='text-black text-[14px] font-bold'>323</h2>
                        </div>
                        <h2 className='text-black text-[14px] font-bold pt-[8px]'>%20</h2>
                    </div>
                    <div className='flex items-center justify-between border-b-[2px] py-[4px]'>
                        <div>
                            <h1 className='text-black text-[12px] font-normal pb-[2px]'>Agency A</h1>
                            <h2 className='text-black text-[14px] font-bold'>323</h2>
                        </div>
                        <h2 className='text-black text-[14px] font-bold pt-[8px]'>%20</h2>
                    </div>
                    <div className='flex items-center justify-between border-b-[2px] py-[4px]'>
                        <div>
                            <h1 className='text-black text-[12px] font-normal pb-[2px]'>Agency A</h1>
                            <h2 className='text-black text-[14px] font-bold'>323</h2>
                        </div>
                        <h2 className='text-black text-[14px] font-bold pt-[8px]'>%20</h2>
                    </div>
                    <p className='text-black/[0.7] text-[14px] leading-[25px] font-normal mt-4'>See all Details</p>
                </div>
            </div>
            {/* Daily, weekly, monthly buttons */}
            <div className='flex my-[15px]'>
                <div className='flex items-center justify-center px-[20px] py-[6px] border-b-[1px] border-[#EDEDED]/[0.3] rounded-[6px] cursor-pointer'>
                    <p className='text-[14px] font-normal text-black/[0.7] tracking-wide'>Daily</p>
                </div>
                <div className='flex items-center justify-center px-[20px] py-[6px] border-b-[1px] border-[#EDEDED]/[0.3] bg-[#56bce4] rounded-[6px] cursor-pointer'>
                    <p className='text-[14px] font-normal text-white tracking-wide'>Weekly</p>
                </div>
                <div className='flex items-center justify-center px-[20px] py-[6px] border-b-[1px] border-[#EDEDED]/[0.3] rounded-[6px] cursor-pointer'>
                    <p className='text-[14px] font-normal text-black/[0.7] tracking-wide'>Monthly</p>
                </div>
            </div>
            {/* Daily, weekly, monthly Row */}
            <div className='grid grid-cols-1'>
                <div className='flex md:flex-row gap-4 overflow-x-auto'>
                    <div className='flex-1'>
                        <DWMcards title="Weekly Application" lightColor="#dbedf4" color="#7c7e9f" />
                    </div>
                    <div className='flex-1'>
                        <DWMcards title="Weekly Offer Sent" lightColor="#dbedf4" color="#6fc5eb" />
                    </div>
                    <div className='flex-1'>
                        <DWMcards title="Weekly Acceptance" lightColor="#dbf4de" color="#7bcb75" />
                    </div>
                </div>
            </div>
            {/* Dots */}
            <div className='flex justify-center py-[30px]'>
                <div className='flex gap-[10px]'>
                    <div className='h-[20px] w-[20px] rounded-full border-[3px] border-white bg-[#56bce4]'></div>
                    <div className='h-[20px] w-[20px] rounded-full border-[3px] border-white bg-white'></div>
                    <div className='h-[20px] w-[20px] rounded-full border-[3px] border-white bg-white'></div>
                    <div className='h-[20px] w-[20px] rounded-full border-[3px] border-white bg-white'></div>
                    <div className='h-[20px] w-[20px] rounded-full border-[3px] border-white bg-white'></div>
                    <div className='h-[20px] w-[20px] rounded-full border-[3px] border-white bg-white'></div>
                    <div className='h-[20px] w-[20px] rounded-full border-[3px] border-white bg-white'></div>
                </div>
            </div>
        </div>
    )
}
const Header = () => {
    return (<div>
        <div className='md:px-[25px] py-[20px] bg-white rounded-bl-[20px]'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='mb-[10px] md:mb-0'>
                    <p className='text-[#23255c] text-[16px] leading-[25px] font-normal'>Welcome</p>
                    <p className='text-[#24245c] text-[20px] leading-[25px] font-normal'>Necmettin Murat TENIL</p>
                    <div className='flex items-center justify-center gap-[8px] border-t-[2px] w-fit mt-[8px] pt-[2px]'>
                        <FaStarAndCrescent color='#5cbf54' />
                        <p className='text-[#5cbf54] font-bold text-[14px]'>Superadmin</p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='pr-[20px] border-r-[1px]'>
                        <div className='flex items-center justify-center gap-[15px] px-[15px] py-[10px] bg-[#56bce4] rounded-[8px] cursor-pointer'>
                            <FaChevronDown color='white' size={14} />
                            <p className='text-[14px] font-normal text-white tracking-wide'>Antalya Bilim University</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-[20px] px-[20px]'>
                        <FaMoon color='#3c3e6e' />
                        <FaGlobe color='#3c3e6e' />
                        <FaUser color='#3c3e6e' />
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

const CircularProgressBar = ({ targetValue }) => {
    const [animationStarted, setAnimationStarted] = useState(false);
    const progressValue = useRef(0);
    const progressBar = useRef(null);
    const valueContainer = useRef(null);
    const speed = 10;

    useEffect(() => {
        if (!animationStarted) {
            const progress = setInterval(() => {
                progressValue.current += 1;

                valueContainer.current.textContent = `${progressValue.current}%`;
                progressBar.current.style.background = `conic-gradient(
            #56bce4 ${progressValue.current * 3.6}deg,
            #cadcff ${progressValue.current * 3.6}deg
          )`;

                if (progressValue.current >= targetValue) {
                    clearInterval(progress);
                    setAnimationStarted(true);
                }
            }, speed);

            return () => {
                clearInterval(progress);
            };
        }
    }, [targetValue, animationStarted]);

    return (
        <div className="circular-progress relative" ref={progressBar}>
            <div className='absolute inset-1/4 bg-[#56bce4] rounded-full w-1/2 h-1/2 flex items-center justify-center'>
                <div className="font-poppins text-[20px] font-bold text-white" ref={valueContainer}>
                    0%
                </div>
            </div>
        </div>
    );
};

// Daily, weekly, monthly . . .
const DWMcards = ({ title, lightColor, color }) => {

    const data = [3, 1, 2, 1, 1, 3, 5];
    const date = [23, 24, 25, 26, 27, 28, 29];
    const barHeightMultiplier = 30;

    const bars = data.map((value, index) => (
        <div
            key={index}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: `${value * barHeightMultiplier}px`,
                backgroundColor: color,
                width: '20px',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
                textAlign: 'center',
                color: 'white',
            }}
        >
            <p>{value}</p>
        </div>
    ));

    const dateRow = date.map((value, index) => (
        <div key={index}>
            <p>{value}</p>
            <p>{dfi(index)}</p>
        </div>
    ));

    return (
        <div>
            <div className='rounded-[20px] bg-white p-[25px] mr-[5px]'>
                <div className='flex items-top justify-between'>
                    <div>
                        <p className=''>{title}</p>
                        <span className='flex gap-[6px] items-center pt-[10px]'><h1 className='font-bold text-[22px]'>16</h1><p>students</p></span>
                        <p className='text-[14px] text-black/[0.7]'>Total</p>
                    </div>
                    <div className={`p-8px bg-[${lightColor}] h-[50px] w-[50px] rounded-[6px] flex items-center justify-center`}>
                        <FaImage color={color} />
                    </div>
                </div>
                <div>
                    <div className='border-b-[1px] flex items-end justify-center gap-[15px] h-[150px]'>
                        {/* {bars} */}
                    </div>
                    <div className='flex items-end justify-center gap-[15px]'>
                        {/* {dateRow} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

const HorizontalBarChart = () => {
    return (
        <div className='border-l-[1px] py-[25px] items-center'>
            <div className='h-[25px] bg-[#5cbf54] w-[150px] rounded-tr-[8px] rounded-br-[8px] my-[10px]'></div>
            <div className='h-[25px] bg-[#dbf4de] w-[200px] rounded-tr-[8px] rounded-br-[8px] my-[10px]'></div>
        </div>

    );
};

// get day from index . . .
function dfi(index) {
    switch (index) {
        case 0: return "Su";
        case 1: return "Mo";
        case 2: return "Tu";
        case 3: return "We";
        case 4: return "Th";
        case 5: return "Fr";
        case 6: return "Sa";
    }
}

export default Home
