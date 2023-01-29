import React from 'react'
import { RiExchangeDollarLine, RiFileList3Line, RiSecurePaymentLine } from 'react-icons/ri'
import { OverviewTable, Title } from '../components'
import { Navbar, Sidebar } from '../components';
import { useStateContext } from '../contexts/ContextProvider';



const Overview = () => {
   
        const {  activeMenu } = useStateContext();
  return (
   
    <div className="flex relative dark:bg-main-dark-bg">
    {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
             <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-neutral-100 min-h-screen md:ml-72 w-full  '
                : 'bg-neutral-100 dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
    <div className="-mt-3 md:m-10 mt-18 p-0 sm:pt-20 md:p-10 bg-white rounded ">
        <h3  className='text-l font-extrabold dark:text-white'>Comités pédagogiques</h3>
        <h6  className='ml-1 mt-1 text-xs font-medium dark:text-white'>deja existantes</h6>
{/* 
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6'>
        <div className='rounded w-full h-auto p-10 bg-white'>
            <RiSecurePaymentLine fontSize={38} className="bg-green-500 rounded-full p-2"/>
            <div className='pt-5'>
                <p className='text-14 text-gray-400'>Total outstanding balance</p>
                <p className='font-normal text-3xl pt-3 text-black'>6,078,288</p>
            </div>
        </div>
        <div className='rounded w-full h-auto p-10 bg-white'>
            <RiExchangeDollarLine fontSize={38} className="bg-gray-200 rounded-full p-2"/>
            <div className='pt-5'>
                <p className='text-14 text-gray-400'>Total repayment pending</p>
                <p className='font-normal text-3xl pt-3 text-black'>72,864</p>
            </div>
        </div>
        <div className='rounded w-full h-auto p-10 bg-white'>
            <RiFileList3Line fontSize={38} className="bg-yellow-500 rounded-full p-2"/>
            <div className='pt-5'>
                <p className='text-14 text-gray-400'>Total transaction counts</p>
                <p className='font-normal text-3xl pt-3 text-black'>3,062</p>
            </div>
        </div>
      </div> */}

    <div className="mt-4">
        <OverviewTable placeholder="        rechercher"/>
    </div>
  </div>
  </div>
          </div>
            </div>
  )
}

export default Overview