'use client'
import React, { useEffect, useRef, useState } from 'react';
import '../styles/CircularProgressBar.css';
import * as utils from '../utils/utils';
import ThemeSwitcher from '../components/ThemeSwitcher';
import Image from 'next/image';
import SuperAdminIcon from '../../public/icons/superadmin.svg'
import WithdrawIcon from '../../public/icons/withdrawn.svg'
import PotentialCommisionIcon from '../../public/icons/potential-commision.svg'
import EarnedCommisionIcon from '../../public/icons/earned-commision.svg'
import RefundIcon from '../../public/icons/refund.svg'
import { FaBell, FaBolt, FaCalendar, FaChevronDown, FaChevronLeft, FaChevronRight, FaEnvelope, FaExclamation, FaEye, FaEyeSlash, FaFilter, FaGlobe, FaImage, FaPaste, FaUser, FaVolumeUp } from 'react-icons/fa';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const HomePage = ({ darkMode, setDarkMode }) => {
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
        dailyStudents: 1175,
        dailyApplications: 1254,
        weeklyAverage: 123,
        weeklyStudents: 2154,
        weeklyApplications: 3254,
        monthlyAverage: 345,
        monthlyStudents: 11175,
        monthlyApplications: 21254,
        offerSent: 1042,
        accepted: 460,
        registered: 232
    };
    const applicationsData = {
        amount: "1,000",
        universal: "2,050",
        global: "3,030"
    };
    const agenciesData = {
        total: 345,
        active: 210,
        inactive: 135
    };
    const row2Data = {
        agencies: {
            card1: {
                title: "Agencies",
                total: 345,
                active: 210,
                inactive: 135
            },
            students: {
                offerSent: {
                    total: 1443,
                },
                accepted: {
                    total: 1234
                },
                registered: {
                    total: 2344
                },
                boxA: {
                    title: "Agency A",
                    value: 323,
                    percent: 20
                }
                ,
                boxB: {
                    title: "Agency B",
                    value: 230,
                    percent: 17
                }
                ,
                boxC: {
                    title: "Agency C",
                    value: 180,
                    percent: 15
                }
                ,
                others: {
                    value: 573,
                    percent: 35
                }
            },
            commision: {
                total: "21,355",
                boxA: {
                    title: "Agency A",
                    value: 323,
                    percent: 20
                }
                ,
                boxB: {
                    title: "Agency B",
                    value: 230,
                    percent: 17
                }
                ,
                boxC: {
                    title: "Agency C",
                    value: 180,
                    percent: 15
                }
            }
        },
        counselor: {
            card1: {
                title: "Counselor",
                total: 345,
                active: 210,
                inactive: 135
            },
            students: {
                offerSent: {
                    total: 1443,
                },
                accepted: {
                    total: 1234
                },
                registered: {
                    total: 2344
                },
                boxA: {
                    title: "Counselor A",
                    value: 323,
                    percent: 20
                }
                ,
                boxB: {
                    title: "Counselor B",
                    value: 230,
                    percent: 17
                }
                ,
                boxC: {
                    title: "Counselor C",
                    value: 180,
                    percent: 15
                },
                others: {
                    value: 573,
                    percent: 35
                }
            },
            commision: {
                total: "21,355",
                boxA: {
                    title: "Counselor A",
                    value: 323,
                    percent: 20
                }
                ,
                boxB: {
                    title: "Counselor B",
                    value: 230,
                    percent: 17
                }
                ,
                boxC: {
                    title: "Counselor C",
                    value: 180,
                    percent: 15
                },
            }
        },
        mentor: {
            card1: {
                title: "Mentor",
                total: 345,
                active: 210,
                inactive: 135
            },
            students: {
                offerSent: {
                    total: 1443,
                },
                accepted: {
                    total: 1234
                },
                registered: {
                    total: 2344
                },
                boxA: {
                    title: "Mentor A",
                    value: 323,
                    percent: 20
                }
                ,
                boxB: {
                    title: "Mentor B",
                    value: 230,
                    percent: 17
                }
                ,
                boxC: {
                    title: "Mentor C",
                    value: 180,
                    percent: 15
                },
                others: {
                    value: 573,
                    percent: 35
                }
            },
            commision: {
                total: "21,355",
                boxA: {
                    title: "Mentor A",
                    value: 323,
                    percent: 20
                }
                ,
                boxB: {
                    title: "Mentor B",
                    value: 230,
                    percent: 17
                }
                ,
                boxC: {
                    title: "Mentor C",
                    value: 180,
                    percent: 15
                },
            }
        },
    };
    const statisiticsData = {
        daily: {
            students: 8,
        },
        weekly: {
            students: 5,
        },
        monthly: {
            students: 2,
        }
    };
    const pieChartData = {
        labels: ['', ''],
        datasets: [
            {
                label: '',
                data: [2050, 3030],
                backgroundColor: [
                    '#56bce4',
                    '#cadcff'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0)',
                    'rgba(54, 162, 235, 0)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const pieChartData2 = {
        labels: ['', ''],
        datasets: [
            {
                label: '',
                data: [210, 135],
                backgroundColor: [
                    '#5cbf54',
                    '#dbf4de'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0)',
                    'rgba(54, 162, 235, 0)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // State variables . . .
    const [isFilterVisible, setFilterVisibility] = useState(false);
    const [isBalanceHidden, setBalanceHidden] = useState(false);
    const [studentCardSelectedInterval, setStudentCardSelectedInterval] = useState('Daily');
    const [selectedRow2Tab, setSelectedRow2Tab] = useState('agencies');
    const [activeStudentsTab, setActiveStudentsTab] = useState('offerSent');
    const [selectedRow3Tab, setSelectedRow3Tab] = useState('Daily');

    // References . . .
    const row1ScrollContainerRef = useRef(null);

    // State variable handlers . . .
    const toggleFilterVisibility = () => {
        setFilterVisibility(!isFilterVisible);
    };
    const toggleBalanceVisibility = () => {
        setBalanceHidden(!isBalanceHidden);
    };
    const handleStudentCardIntervalChange = (interval) => {
        setStudentCardSelectedInterval(interval);
    };
    const handleRow2TabClick = (tab) => {
        setSelectedRow2Tab(tab);
    };
    const handleStudentsTabClick = (tab) => {
        setActiveStudentsTab(tab);
    };
    const handleRow3TabClick = (tabName) => {
        setSelectedRow3Tab(tabName);
    };

    // Getters . . .
    const getStudentCardDataForSelectedInterval = () => {
        switch (studentCardSelectedInterval) {
            case 'Daily':
                return {
                    average: studentCardData.dailyAverage,
                    students: studentCardData.dailyStudents,
                    applications: studentCardData.dailyApplications,
                    offerSent: studentCardData.offerSent,
                    accepted: studentCardData.accepted,
                    registered: studentCardData.registered,
                };
            case 'Weekly':
                return {
                    average: studentCardData.weeklyAverage,
                    students: studentCardData.weeklyStudents,
                    applications: studentCardData.weeklyApplications,
                    offerSent: studentCardData.offerSent,
                    accepted: studentCardData.accepted,
                    registered: studentCardData.registered,
                };
            case 'Monthly':
                return {
                    average: studentCardData.monthlyAverage,
                    students: studentCardData.monthlyStudents,
                    applications: studentCardData.monthlyApplications,
                    offerSent: studentCardData.offerSent,
                    accepted: studentCardData.accepted,
                    registered: studentCardData.registered,
                };
            default:
                return {};
        }
    };
    const getRow2DataForSelectedTab = () => {
        switch (selectedRow2Tab) {
            case 'agencies':
                return row2Data.agencies;
            case 'counselor':
                return row2Data.counselor;
            case 'mentor':
                return row2Data.mentor;
            default:
                return {};
        }
    };
    const currentStudentCardData = getStudentCardDataForSelectedInterval();
    const currentRow2Data = getRow2DataForSelectedTab();

    // Other functions . . .
    const scrollToNextItem = (direction) => {
        const scrollContainer = row1ScrollContainerRef.current;

        if (scrollContainer) {
            // Calculate the index of the currently visible child
            let visibleChildIndex = Array.from(scrollContainer.children).findIndex(
                (child) => child.getBoundingClientRect().left >= 0 && child.getBoundingClientRect().right <= window.innerWidth
            );

            // Calculate the index of the next or previous child
            const targetIndex = direction === 'left' ? (visibleChildIndex - 1 <= 0) ? 0 : visibleChildIndex - 1 : visibleChildIndex + 1;

            // Scroll to the next or previous child based on the index
            const targetChild = scrollContainer.children[targetIndex];
            if (targetChild) {
                targetChild.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'start',
                });
            }
        }
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-black' : 'bg-[#f6f6f6]'} w-full pl-[15px]`}>
            {/* Header */}
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className='relative'>
                <div className='w-full'>
                    {/* Filter */}
                    <div className={`flex justify-between ${darkMode ? 'bg-dark-gray' : 'bg-white'} rounded-[15px] my-[20px] p-[15px] mr-[65px]`}>
                        <div className='flex items-center justify-center gap-[15px] px-[25px] py-[10px] bg-[#56bce4] rounded-[8px] cursor-pointer' onClick={toggleFilterVisibility}>
                            <FaFilter color='white' size={14} />
                            <p className='text-[14px] font-normal text-white'>Filter</p>
                        </div>
                        <div></div>
                    </div>
                    {/* Filter container */}
                    {isFilterVisible && (
                        <div className='bg-white rounded-[15px] my-[20px] p-[15px] mr-[65px] absolute top-[60px] shadow-lg z-40'>
                            <div className='border-b-[1px] pb-[10px] mb-[10px] grid md:grid-cols-3 lg:grid-cols-6 lg:gap-[60px] md:gap-[15px]'>
                                <div className='col-span-2'>
                                    <p className='font-bold text-[#454545]'>Date Range</p>
                                    <div className='flex gap-[10px] pt-[20px]'>
                                        <div className='flex items-center justify-center gap-[15px] px-[25px] py-[10px] bg-[#f0fbff] rounded-[8px] cursor-pointer'>
                                            <FaPaste color='black' size={14} />
                                            <p className='text-[14px] font-normal text-black'>06.66.2022</p>
                                        </div>
                                        <div className='flex items-center justify-center gap-[15px] px-[25px] py-[10px] bg-[#f0fbff] rounded-[8px] cursor-pointer'>
                                            <FaCalendar color='black' size={14} />
                                            <p className='text-[14px] font-normal text-black'>06.66.2022</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <p className='font-bold text-[#454545]'>Country</p>
                                    <div className='flex items-center justify-center gap-[15px] px-[25px] py-[10px] bg-[#f0fbff] rounded-[8px] mt-[20px] cursor-pointer'>
                                        <FaChevronDown color='black' size={14} />
                                        <p className='text-[14px] font-normal text-black'>Turkey</p>
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <p className='font-bold text-[#454545]'>City</p>
                                    <div className='flex items-center justify-center gap-[15px] px-[25px] py-[10px] bg-[#f0fbff] rounded-[8px] mt-[20px] cursor-pointer'>
                                        <FaChevronDown color='black' size={14} />
                                        <p className='text-[14px] font-normal text-black'>Antalya</p>
                                    </div>
                                </div>
                                <div className='col-span-2'>
                                    <p className='font-bold text-[#454545]'>University</p>
                                    <div className='flex items-center justify-center gap-[15px] px-[25px] py-[10px] bg-[#f0fbff] rounded-[8px] mt-[20px] cursor-pointer'>
                                        <FaChevronDown color='black' size={14} />
                                        <p className='text-[14px] font-normal text-black'>Antalya Bilm University</p>
                                    </div>
                                </div>
                            </div>
                            <p>Reset</p>
                        </div>
                    )}
                    {/* Row 1 */}
                    <div className='grid grid-cols-1'>
                        <div className='relative'>
                            <div ref={row1ScrollContainerRef} className='flex md:flex-row flex-col overflow-x-auto scroll-container pb-[10px] gap-[15px]'>
                                <div className='flex-none'>
                                    <div className={`rounded-[20px] ${darkMode ? 'bg-dark-gray' : 'bg-white'} md:min-w-[400px] h-[100%]`}>
                                        <div className='flex justify-between p-[25px] bg-[#dbf4de] rounded-tr-[20px] rounded-tl-[20px]'>
                                            <div className='my-[20px]'>
                                                <Image src={WithdrawIcon} alt="Withdrawn Icon" />
                                                <p className='text-[#5cbf54] font-bold text-[16px] mt-[5px]'>Withdrawn</p>
                                                <p className='text-[#5cbf54] font-bold text-[18px]'>{utils.renderBalance(withdrawnCardData.amountWithdrawn, isBalanceHidden)}</p>
                                            </div>
                                            <div className='flex'>
                                                <div className='flex items-center'>
                                                    <div>
                                                        <FaBolt color='#5cbf54' />
                                                        <p className='text-[#5cbf54] font-normal text-[14px]'>{withdrawnCardData.percentageIncrease}% increase</p>
                                                        <p className='text-grey/[0.7] font-normal text-[14px]'>from last week</p>
                                                    </div>

                                                </div>
                                                <div onClick={toggleBalanceVisibility} className='cursor-pointer'>
                                                    {isBalanceHidden ? <FaEye color='grey' size={22} /> : <FaEyeSlash color='grey' size={22} />}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='pl-[25px] pb-[25px] pt-[10px] pr-[25px]'>
                                            <p className='text-[#24245c] text-[18px] leading-[25px] font-bold'>Commision</p>
                                            <div className='flex pt-[25px] justify-between'>
                                                <div className='items-center space-y-4 md:space-y-8 lg:space-y-12'>
                                                    <CircularProgressBar targetValue={withdrawnCardData.percentageCommision} />
                                                    <p className='text-black/[0.7] text-[14px] leading-[25px] font-normal mt-4 cursor-pointer'>See all Details</p>
                                                </div>
                                                <div className='flex'>
                                                    <div className='flex h-fit mx-[15px]'>
                                                        <div className='w-[4px] bg-[#b9cbd3] rounded-[4px] mx-[10px] my-[4px]'></div>
                                                        <div className=''>
                                                            <Image src={PotentialCommisionIcon} alt="Potential Commision Icon" />
                                                            <p className='text-black/[0.6] font-bold text-[12px]'>Potential</p>
                                                            <p className='text-black/[0.6] font-bold text-[12px]'>Commisions</p>
                                                            <p className='text-black/[0.7] font-extrabold text-[16px]'>{utils.renderBalance(withdrawnCardData.potentialCommision, isBalanceHidden)}</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='flex h-fit mx-[15px]'>
                                                            <div className='w-[4px] bg-[#56bce4] rounded-[4px] mx-[10px] my-[4px]'></div>
                                                            <div className=''>
                                                                <Image src={EarnedCommisionIcon} alt="Earned Commision Icon" />
                                                                <p className='text-black/[0.6] font-bold text-[12px]'>Earned</p>
                                                                <p className='text-black/[0.6] font-bold text-[12px]'>Commisions</p>
                                                                <p className='text-[#56bce4] font-extrabold text-[16px]'>{utils.renderBalance(withdrawnCardData.earnedCommision, isBalanceHidden)}</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex h-fit mx-[15px] mt-[35px]'>
                                                            <div className='w-[4px] bg-[#ff5757] rounded-[4px] mx-[10px] my-[4px]'></div>
                                                            <div className=''>
                                                                {/* <Image src={RefundIcon} alt="Refund Icon" /> */}
                                                                <FaExclamation color='red' />
                                                                <p className='text-black/[0.6] font-bold text-[12px]'>Refund</p>
                                                                <p className='text-[#ff5757] font-extrabold text-[16px]'>{utils.renderBalance(withdrawnCardData.refund, isBalanceHidden)}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-none'>
                                    <div className={`rounded-[20px] ${darkMode ? 'bg-dark-gray' : 'bg-white'} px-[20px] py-[25px] min-w-[400px] h-[100%]`}>
                                        <div className='flex justify-between'>
                                            <div className='space-y-4 md:space-y-12'>
                                                <p className='text-black font-bold text-[20px]'>Student</p>
                                                <div>
                                                    <div className='flex justify-center items-center mt-[25px]'>
                                                        <h1 className='text-black/[0.5] text-[12px] font-bold'>{studentCardSelectedInterval} Average</h1>
                                                    </div>
                                                    <div className='flex justify-center items-center mt-[10px]'>
                                                        <h2 className='text-black text-[22px] font-bold tracking-widest'>{currentStudentCardData.average}</h2>
                                                    </div>
                                                    <div className='flex justify-center items-center gap-[10px] h-fit mt-[10px]'>
                                                        <p
                                                            className={`text-black/[0.5] text-[10px] font-bold tracking-widest ${studentCardSelectedInterval === 'Daily' ? 'text-blue-500' : ''
                                                                } cursor-pointer`}
                                                            onClick={() => handleStudentCardIntervalChange('Daily')}
                                                        >
                                                            Daily
                                                        </p>
                                                        <div className='w-[1.5px] h-[12px] bg-[#dadada] rounded-[1px]'></div>
                                                        <p
                                                            className={`text-black/[0.5] text-[10px] font-bold tracking-widest ${studentCardSelectedInterval === 'Weekly' ? 'text-blue-500' : ''
                                                                } cursor-pointer`}
                                                            onClick={() => handleStudentCardIntervalChange('Weekly')}
                                                        >
                                                            Weekly
                                                        </p>
                                                        <div className='w-[1.5px] h-[12px] bg-[#dadada] rounded-[1px]'></div>
                                                        <p
                                                            className={`text-black/[0.5] text-[10px] font-bold tracking-widest ${studentCardSelectedInterval === 'Monthly' ? 'text-blue-500' : ''
                                                                } cursor-pointer`}
                                                            onClick={() => handleStudentCardIntervalChange('Monthly')}
                                                        >
                                                            Monthly
                                                        </p>
                                                    </div>
                                                </div>
                                                <HorizontalBarChart students={currentStudentCardData.students} applications={currentStudentCardData.applications} />
                                                <div className='flex mt-[15px]'>
                                                    <div className='flex h-fit mx-[15px]'>
                                                        <div className='w-[4px] bg-[#5cbf54] rounded-[4px] mx-[10px] my-[4px]'></div>
                                                        <div className=''>
                                                            <p className='text-black/[0.6] font-bold text-[10px]'>Students</p>
                                                            <p className='text-black/[0.7] font-extrabold text-[16px]'>{utils.addCommasToNumber(currentStudentCardData.students)}</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex h-fit mx-[15px]'>
                                                        <div className='w-[4px] bg-[#b9cbd3] rounded-[4px] mx-[10px] my-[4px]'></div>
                                                        <div className=''>
                                                            <p className='text-black/[0.6] font-bold text-[10px]'>Applications</p>
                                                            <p className='text-black/[0.7] font-extrabold text-[16px]'>{utils.addCommasToNumber(currentStudentCardData.applications)}</p>
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
                                                        <p className='text-[#51bae7] font-bold text-[18px] leading-[10px] mt-[25px]'>{currentStudentCardData.offerSent}</p>
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
                                                        <p className='text-[#e39735] font-bold text-[18px] leading-[10px] mt-[25px]'>{currentStudentCardData.accepted}</p>
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
                                                        <p className='text-[#65c35e] font-bold text-[18px] leading-[10px] mt-[25px]'>{currentStudentCardData.registered}</p>
                                                    </div>
                                                    <div className='flex items-center justify-center'>
                                                        <p className='text-black/[0.7] font-bold text-[14px] leading-[40px]'>See all Details</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-none'>
                                    <div className={`md:w-[350px] rounded-[20px] ${darkMode ? 'bg-dark-gray' : 'bg-white'} px-[20px] py-[20px] mr-[15px] h-[100%]`}>
                                        <p className='text-black font-bold text-[20px]'>Applications</p>
                                        <div className='flex justify-center items-center mt-[60px]'>
                                            <h2 className='text-black text-[24px] font-bold'>{applicationsData.amount}</h2>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <div className='relative max-w-[210px]'>
                                                <Pie data={pieChartData} />
                                                <div className='absolute top-0 h-[30px] w-full bg-white'></div>
                                            </div>
                                        </div>
                                        <div className='flex justify-center mb-[20px] mt-[40px]'>
                                            <div className='flex h-fit mx-[15px]'>
                                                <div className='w-[4px] bg-[#56bce4] rounded-[4px] mx-[10px] my-[4px]'></div>
                                                <div className=''>
                                                    <p className='text-black/[0.6] font-bold text-[10px]'>Universal</p>
                                                    <p className='text-black/[0.7] font-extrabold text-[16px]'>{applicationsData.universal}</p>
                                                </div>
                                            </div>
                                            <div className='flex h-fit mx-[15px]'>
                                                <div className='w-[4px] bg-[#cadcff] rounded-[4px] mx-[10px] my-[4px]'></div>
                                                <div className=''>
                                                    <p className='text-black/[0.6] font-bold text-[10px]'>Global</p>
                                                    <p className='text-black/[0.7] font-extrabold text-[16px]'>{applicationsData.global}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='hidden md:block'>
                                <button className="absolute top-1/2 left-[0px]" onClick={() => scrollToNextItem('left')}>
                                    <div className='rounded-full p-[12px] bg-black/[0.2]'>
                                        <FaChevronLeft color='white' size={20} />
                                    </div>
                                </button>
                                <button className="absolute top-1/2 right-[0px]" onClick={() => scrollToNextItem('right')}>
                                    <div className='rounded-full p-[12px] bg-black/[0.2]'>
                                        <FaChevronRight color='white' size={20} />
                                    </div>
                                </button>
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
            {/* Agencies, counselor, Mentor buttons */}
            <div className='flex my-[15px]'>
                <div
                    className={`flex items-center justify-center px-[20px] py-[6px] border-b-[1px] border-[#EDEDED]/[0.3] rounded-[6px] cursor-pointer ${selectedRow2Tab === 'agencies' ? 'bg-[#56bce4]' : ''
                        }`}
                    onClick={() => handleRow2TabClick('agencies')}
                >
                    <p className={`text-[14px] font-normal ${selectedRow2Tab === 'agencies' ? 'text-white' : 'text-black/[0.7]'} tracking-wide`}>Agencies</p>
                </div>
                <div
                    className={`flex items-center justify-center px-[20px] py-[6px] border-b-[1px] border-[#EDEDED]/[0.3] rounded-[6px] cursor-pointer ${selectedRow2Tab === 'counselor' ? 'bg-[#56bce4]' : ''
                        }`}
                    onClick={() => handleRow2TabClick('counselor')}
                >
                    <p className={`text-[14px] font-normal ${selectedRow2Tab === 'counselor' ? 'text-white' : 'text-black/[0.7]'} tracking-wide`}>Counselor</p>
                </div>
                <div
                    className={`flex items-center justify-center px-[20px] py-[6px] border-b-[1px] border-[#EDEDED]/[0.3] rounded-[6px] cursor-pointer ${selectedRow2Tab === 'mentor' ? 'bg-[#56bce4]' : ''
                        }`}
                    onClick={() => handleRow2TabClick('mentor')}
                >
                    <p className={`text-[14px] font-normal ${selectedRow2Tab === 'mentor' ? 'text-white' : 'text-black/[0.7]'} tracking-wide`}>Mentor</p>
                </div>
            </div>
            {/* Row 2 */}
            <div className='grid grid-cols-1'>
                <div className='flex flex-col md:flex-row overflow-x-auto scroll-container2'>
                    <div className={`flex-none md:w-[25%] rounded-[20px] ${darkMode ? 'bg-dark-gray' : 'bg-white'} px-[20px] py-[20px] mr-[15px] my-[15px]`}>
                        <p className='text-black font-bold text-[20px]'>{currentRow2Data.card1.title}</p>
                        <div className='flex justify-center items-center mt-[15px]'>
                            <h1 className='text-black/[0.5] text-[12px] font-bold'>Total</h1>
                        </div>
                        <div className='flex justify-center items-center mt-[10px]'>
                            <h2 className='text-black text-[22px] font-bold tracking-widest'>{currentRow2Data.card1.total}</h2>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='flex justify-center items-center'>
                                <div className='relative max-w-[200px]'>
                                    <Pie data={pieChartData2} />
                                    <div className='absolute top-0 h-[30px] w-full bg-white'></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mb-[20px] mt-[20px]'>
                            <div className='flex h-fit mx-[15px]'>
                                <div className='w-[4px] bg-[#5cbf54] rounded-[4px] mx-[10px] my-[4px]'></div>
                                <div className=''>
                                    <p className='text-black/[0.6] font-bold text-[10px]'>Active</p>
                                    <p className='text-black/[0.7] font-extrabold text-[16px]'>{agenciesData.active}</p>
                                </div>
                            </div>
                            <div className='flex h-fit mx-[15px]'>
                                <div className='w-[4px] bg-[#b9cbd3] rounded-[4px] mx-[10px] my-[4px]'></div>
                                <div className=''>
                                    <p className='text-black/[0.6] font-bold text-[10px]'>Inactive</p>
                                    <p className='text-black/[0.7] font-extrabold text-[16px]'>{agenciesData.inactive}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`flex-none md:min-w-[44%] rounded-[20px] ${darkMode ? 'bg-dark-gray' : 'bg-white'} px-[20px] py-[20px] shadow-lg mr-[15px] my-[15px]`}>
                        <p className='text-black font-bold text-[20px]'>Students</p>
                        <div className='grid grid-cols-3 pt-[20px]'>
                            <StudentsTab
                                label='Offer sent'
                                isActive={activeStudentsTab === 'offerSent'}
                                onClick={() => handleStudentsTabClick('offerSent')}
                            />
                            <StudentsTab
                                label='Accepted'
                                isActive={activeStudentsTab === 'accepted'}
                                onClick={() => handleStudentsTabClick('accepted')}
                            />
                            <StudentsTab
                                label='Registered'
                                isActive={activeStudentsTab === 'registered'}
                                onClick={() => handleStudentsTabClick('registered')}
                            />
                        </div>
                        <div className='flex justify-center items-center mt-[40px]'>
                            <h1 className='text-black/[0.5] text-[12px] font-bold'>Total {utils.studentTabTitleExtractor(activeStudentsTab)}</h1>
                        </div>
                        <div className='flex justify-center items-center mt-[2px]'>
                            <h2 className='text-black text-[22px] font-bold tracking-widest'>{utils.addCommasToNumber(currentRow2Data.students.offerSent.total)}</h2>
                        </div>
                        <div className='flex mt-[25px]'>
                            <div className='w-[28%] rounded-[6px] bg-[#4f517d] py-[15px] px-[10px] mx-[2px]'>
                                <h1 className='text-white text-[12px] font-normal'>{currentRow2Data.students.boxA.title}</h1>
                                <h2 className='text-white text-[18px] font-normal'>{currentRow2Data.students.boxA.value}</h2>
                                <h2 className='text-white text-[16px] font-normal pt-[8px]'>%{currentRow2Data.students.boxA.percent}</h2>
                            </div>
                            <div className='w-[20%] rounded-[6px] bg-[#727497] py-[15px] px-[10px] mx-[2px]'>
                                <h1 className='text-white text-[12px] font-normal'>{currentRow2Data.students.boxB.title}</h1>
                                <h2 className='text-white text-[18px] font-normal'>{currentRow2Data.students.boxB.value}</h2>
                                <h2 className='text-white text-[16px] font-normal pt-[8px]'>%{currentRow2Data.students.boxB.percent}</h2>
                            </div>
                            <div className='w-[20%] rounded-[6px] bg-[#a1a4d3] py-[15px] px-[10px] mx-[2px]'>
                                <h1 className='text-white text-[12px] font-normal'>{currentRow2Data.students.boxC.title}</h1>
                                <h2 className='text-white text-[18px] font-normal'>{currentRow2Data.students.boxC.value}</h2>
                                <h2 className='text-white text-[16px] font-normal pt-[8px]'>%{currentRow2Data.students.boxC.percent}</h2>
                            </div>
                            <div className='w-[28%] rounded-[6px] bg-[#7477b7] py-[15px] px-[10px] mx-[2px]'>
                                <h1 className='text-white text-[12px] font-normal'>Others</h1>
                                <h2 className='text-white text-[18px] font-normal'>{currentRow2Data.students.others.value}</h2>
                                <h2 className='text-white text-[16px] font-normal pt-[8px]'>%{currentRow2Data.students.others.percent}</h2>
                            </div>
                        </div>
                        <p className='text-black/[0.7] text-[14px] leading-[25px] font-normal mt-4 cursor-pointer'>See all Details</p>
                    </div>
                    <div className={`flex-none md:min-w-[25%] rounded-[20px] ${darkMode ? 'bg-dark-gray' : 'bg-white'} px-[20px] py-[20px] mr-[15px] my-[15px]`}>
                        <p className='text-black font-bold text-[20px]'>Commision</p>
                        <div className='h-[10px] bg-[#ff5353] w-[100%] rounded-br-[5px] rounded-bl-[5px] mt-[10px]'>

                        </div>
                        <div className='flex justify-center items-center mt-[25px]'>
                            <h1 className='text-black/[0.5] text-[12px] font-bold'>Total</h1>
                        </div>
                        <div className='flex justify-center items-center mt-[4px]'>
                            <h2 className='text-black text-[22px] font-bold tracking-widest'>${currentRow2Data.commision.total}</h2>
                        </div>
                        <p className='text-black/[0.7] text-[14px] leading-[25px] font-bold '>Top Rank</p>
                        <div className='flex items-center justify-between border-b-[2px] py-[4px]'>
                            <div>
                                <h1 className='text-black text-[12px] font-normal pb-[2px]'>{currentRow2Data.commision.boxA.title}</h1>
                                <h2 className='text-black text-[14px] font-bold'>{currentRow2Data.commision.boxA.value}</h2>
                            </div>
                            <h2 className='text-black text-[14px] font-bold pt-[8px]'>%{currentRow2Data.commision.boxA.percent}</h2>
                        </div>
                        <div className='flex items-center justify-between border-b-[2px] py-[4px]'>
                            <div>
                                <h1 className='text-black text-[12px] font-normal pb-[2px]'>{currentRow2Data.commision.boxB.title}</h1>
                                <h2 className='text-black text-[14px] font-bold'>{currentRow2Data.commision.boxB.value}</h2>
                            </div>
                            <h2 className='text-black text-[14px] font-bold pt-[8px]'>%{currentRow2Data.commision.boxB.percent}</h2>
                        </div>
                        <div className='flex items-center justify-between border-b-[2px] py-[4px]'>
                            <div>
                                <h1 className='text-black text-[12px] font-normal pb-[2px]'>{currentRow2Data.commision.boxC.title}</h1>
                                <h2 className='text-black text-[14px] font-bold'>{currentRow2Data.commision.boxC.value}</h2>
                            </div>
                            <h2 className='text-black text-[14px] font-bold pt-[8px]'>%{currentRow2Data.commision.boxC.percent}</h2>
                        </div>
                        <p className='text-black/[0.7] text-[14px] leading-[25px] font-normal mt-4 cursor-pointer'>See all Details</p>
                    </div>
                </div>
            </div>
            <p className='text-[20px] font-normal text-black'>General Statistics</p>
            {/* Daily, weekly, monthly buttons */}
            <div className='flex my-[15px]'>
                <div
                    className={`flex items-center justify-center px-[20px] py-[6px] border-b-[1px] border-[#EDEDED]/[0.3] rounded-[6px] cursor-pointer ${selectedRow3Tab === 'Daily' ? 'bg-[#56bce4]' : ''}`}
                    onClick={() => handleRow3TabClick('Daily')}
                >
                    <p className={`text-[14px] font-normal ${selectedRow3Tab === 'Daily' ? 'text-white' : 'text-black/[0.7]'} tracking-wide`}>Daily</p>
                </div>
                <div
                    className={`flex items-center justify-center px-[20px] py-[6px] border-b-[1px] border-[#EDEDED]/[0.3] rounded-[6px] cursor-pointer ${selectedRow3Tab === 'Weekly' ? 'bg-[#56bce4]' : ''}`}
                    onClick={() => handleRow3TabClick('Weekly')}
                >
                    <p className={`text-[14px] font-normal ${selectedRow3Tab === 'Weekly' ? 'text-white' : 'text-black/[0.7]'} tracking-wide`}>Weekly</p>
                </div>
                <div
                    className={`flex items-center justify-center px-[20px] py-[6px] border-b-[1px] border-[#EDEDED]/[0.3] rounded-[6px] cursor-pointer ${selectedRow3Tab === 'Monthly' ? 'bg-[#56bce4]' : ''}`}
                    onClick={() => handleRow3TabClick('Monthly')}
                >
                    <p className={`text-[14px] font-normal ${selectedRow3Tab === 'Monthly' ? 'text-white' : 'text-black/[0.7]'} tracking-wide`}>Monthly</p>
                </div>
            </div>
            {/* Row 3 */}
            <Row3 selectedRow3Tab={selectedRow3Tab} />
        </div>
    )
};

// Components . . .
const Header = ({ darkMode, setDarkMode }) => {
    return (<div>
        <div className={`px-[25px] py-[20px] ${darkMode ? 'bg-dark-gray' : 'bg-white'} rounded-bl-[20px]`}>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='mb-[10px] md:mb-0'>
                    <p className='text-[#23255c] text-[16px] leading-[25px] font-normal'>Welcome</p>
                    <p className='text-[#24245c] text-[20px] leading-[25px] font-normal'>Necmettin Murat TENIL</p>
                    <div className='flex items-center justify-center gap-[8px] border-t-[2px] w-fit mt-[8px] pt-[8px]'>
                        <Image src={SuperAdminIcon} alt="Super Admin Icon" />
                        <p className='text-[#5cbf54] font-bold text-[14px]'>Superadmin</p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='pr-[20px] border-r-[1px]'>
                        <Dropdown />
                    </div>
                    <div className='flex items-center gap-[20px] px-[20px]'>
                        <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
                        <FaGlobe color='#3c3e6e' />
                        <FaUser color='#3c3e6e' />
                    </div>
                </div>
            </div>
        </div>
    </div>)
};
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
const Row3Card = ({ title, lightColor, mainColor, darkMode, colorCode, selectedRow3Tab }) => {

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
                backgroundColor: colorCode,
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
            <p>{utils.getDayFromIndex(index)}</p>
        </div>
    ));

    return (
        <div>
            <div className={`rounded-[20px] ${darkMode ? 'bg-dark-gray' : 'bg-white'} p-[25px] mr-[5px] min-w-screen`}>
                <div className='flex items-top justify-between'>
                    <div className='px-[8px]'>
                        <p className=''>{selectedRow3Tab} {title}</p>
                        <span className='flex gap-[6px] items-center pt-[10px]'><h1 className='font-bold text-[22px]'>16</h1><p>students</p></span>
                        <p className='text-[14px] text-black/[0.7]'>Total</p>
                    </div>
                    <div className={`bg-[${lightColor}] h-[50px] w-[50px] px-[8px] rounded-[6px] flex items-center justify-center`}>
                        <FaImage color={colorCode} />
                    </div>
                </div>
                <div>
                    {selectedRow3Tab === 'Daily' ? <div className='relative mt-[15px] min-w-[77%] mr-[25px]'>
                        <div className='h-[140px] bg-white rounded-[15px] shadow-lg m-[10px] p-[20px]'>
                            <div className='flex justify-between'>
                                <div className='rounded-full shadow-lg p-[6px]'><FaUser /></div>
                                <p>1/8</p>
                            </div>
                            <div className='mt-[20px]'>
                                <p className='text-[13px] text-black/[0.7] font-bold'>Necmettin Murat TENIL</p>
                                <p className='text-[12px] text-black/[0.7] font-bold'>Computer Engineering</p>
                            </div>
                        </div>
                        <div className={`absolute left-[0px] top-1/2 ${mainColor} rounded-[4px] flex items-center justify-center p-[3px]`}><FaChevronLeft color='white' size={16} /></div>
                        <div className={`absolute right-[0px] top-1/2 ${mainColor} rounded-[4px] flex items-center justify-center p-[3px]`}><FaChevronRight color='white' size={16} /></div>
                    </div> : <div> <div className='flex items-end justify-center gap-[15px]'>{bars}</div>
                        <div className='flex items-end justify-center gap-[15px]'>
                            {dateRow}
                        </div>
                    </div>}

                </div>
            </div>
        </div>
    )
};
const HorizontalBarChart = ({ students, applications }) => {
    let maxValue = Math.max(students, applications);
    let scaleFactor = 200 / maxValue;

    const scaledStudents = Math.ceil(students * scaleFactor).toString();
    const scaledApplications = Math.ceil(applications * scaleFactor).toString();

    return (
        <div className='border-l-[1px] py-[25px] items-center'>
            <div
                className={`h-[25px] bg-[#5cbf54] w-[${scaledStudents}px] rounded-tr-[8px] rounded-br-[8px] my-[10px]`}
            ></div>
            <div
                className={`h-[25px] bg-[#dbf4de] w-[${scaledApplications}px] rounded-tr-[8px] rounded-br-[8px] my-[10px]`}
            ></div>
        </div>
    );
};
const StudentsTab = ({ label, isActive, onClick }) => {
    return (
        <div
            className={`border-[1px] flex items-center justify-center cursor-pointer ${isActive ? 'text-black' : 'text-black/[0.5]'
                }`}
            onClick={onClick}
        >
            <p className='text-[13px] font-bold px-[25px] py-[6px]'>{label}</p>
        </div>
    );
}
const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Antalya Bilim University');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const options = ['Antalya Bilim University', 'Another University', 'Others'];

    return (
        <div className='relative'>
            <div
                className='flex items-center justify-center gap-[15px] px-[15px] py-[10px] bg-[#56bce4] rounded-[8px] cursor-pointer'
                onClick={toggleDropdown}
            >
                <FaChevronDown color='white' size={14} />
                <p className='text-[14px] font-normal text-white tracking-wide'>{selectedOption}</p>
            </div>

            {isOpen && (
                <div className='absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50'>
                    <ul>
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className='cursor-pointer px-4 py-2 hover:bg-gray-100'
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
const Row3 = ({ selectedRow3Tab }) => {
    const DummyData = [
        {
            title: 'Application',
            lightColor: '#dbedf4',
            mainColor: 'bg-gstats1',
            darkMode: false,
            colorCode: '#7c7e9f',
        },
        {
            title: 'Offer Sent',
            lightColor: '#dbedf4',
            mainColor: 'bg-gstats2',
            darkMode: false,
            colorCode: '#6fc5eb',
        },
        {
            title: 'Acceptance',
            lightColor: '#dbf4de',
            mainColor: 'bg-gstats3',
            darkMode: false,
            colorCode: '#7bcb75',
        },
        {
            title: 'Application',
            lightColor: '#dbedf4',
            mainColor: 'bg-gstats1',
            darkMode: false,
            colorCode: '#7c7e9f',
        },
        {
            title: 'Offer Sent',
            lightColor: '#dbedf4',
            mainColor: 'bg-gstats2',
            darkMode: false,
            colorCode: '#6fc5eb',
        },
        {
            title: 'Acceptance',
            lightColor: '#dbf4de',
            mainColor: 'bg-gstats3',
            darkMode: false,
            colorCode: '#7bcb75',
        },
        {
            title: 'Offer Sent',
            lightColor: '#dbedf4',
            mainColor: 'bg-gstats2',
            darkMode: false,
            colorCode: '#6fc5eb',
        },
        {
            title: 'Acceptance',
            lightColor: '#dbf4de',
            mainColor: 'bg-gstats3',
            darkMode: false,
            colorCode: '#7bcb75',
        },
    ];

    const [activeDot, setActiveDot] = useState(0);
    const scrollContainerRef = useRef(null);

    const handleDotClick = (index) => {
        setActiveDot(index);
        const cardElement = scrollContainerRef.current.children[index];
        cardElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
        });
    };

    return (
        <div className='grid grid-cols-1'>
            <div ref={scrollContainerRef} className='flex overflow-x-auto scroll-container gap-[10px]'>
                {DummyData.map((data, index) => (
                    <div key={index} className='flex-none md:min-w-[32%]'>
                        <Row3Card
                            title={data.title}
                            lightColor={data.lightColor}
                            mainColor={data.mainColor}
                            darkMode={data.darkMode}
                            colorCode={data.colorCode}
                            selectedRow3Tab={selectedRow3Tab}
                        />
                    </div>
                ))}
            </div>
            {/* Dots */}
            <div className='flex justify-center py-[30px]'>
                <div className='flex gap-[10px]'>
                    {DummyData.map((_, index) => (
                        <div
                            key={index}
                            className={`h-[20px] w-[20px] rounded-full border-[3px] border-white ${index === activeDot ? 'bg-[#56bce4]' : 'bg-white'
                                }`}
                            onClick={() => handleDotClick(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
