import React, { useEffect } from 'react';
import { RiNotification3Line } from 'react-icons/ri';
import { AiOutlineMenu } from 'react-icons/ai';
import { useStateContext } from '../contexts/ContextProvider';
import { MdKeyboardArrowDown } from 'react-icons/md';

const NavButton = ({  icon, customFunc, dotColor }) => (
    <div>
      <button
        type="button"
        onClick={() => customFunc()}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </div>
  );

const Navbar = () => {
    const { activeMenu, setActiveMenu, setScreenSize, screenSize } = useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
    
        window.addEventListener('resize', handleResize);
    
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
      }, [setScreenSize]);
    
      useEffect(() => {
        if (screenSize <= 900) {
          setActiveMenu(false);
        } else {
          setActiveMenu(true);
        }
      }, [screenSize, setActiveMenu]);
    
      const handleActiveMenu = () => setActiveMenu(!activeMenu);
  return (
    <div className="flex justify-between p-5 border-b-1 border-b-myblue relative">
        <div className='flex '>
        <NavButton title="Menu" customFunc={handleActiveMenu} icon={<AiOutlineMenu className='md:hidden lg:hidden sm:visible' />} />
        <div className='pl-5'>
            <h1 className='font-normal text-xl '>Chef de département</h1>
            <p className='text-gray-400'>cycle superieur</p>
        </div>
        </div>
      <div className="flex">
        <NavButton title="Notification" dotColor="rgb(255, 0, 0)"  icon={<RiNotification3Line fontSize={22} />} />
        <div className='border-r-2 m-3'></div>
        <div>
          <div
            className=" items-center gap-0 pl-3 cursor-pointer p-1 hover:bg-light-myred rounded-lg"
          >
            <div className='hover-light-myred'>
            <p className="text-black mt-2 text-sm font-normal ml-1 flex gap-2">
                Mr Farah Zoubeyr
                <MdKeyboardArrowDown fontSize={22} className="text-black" />
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar