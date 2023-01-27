import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { links,homelink } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import logo from'../data/gestin_logo.png';

const Sidebar = () => {
    const {  activeMenu, setActiveMenu, screenSize } = useStateContext();

    const handleCloseSideBar = () => {
        if (activeMenu !== undefined && screenSize <= 900) {
          setActiveMenu(false);
        }
      };

      const activeLink = 'flex items-center gap-8 pl-4 pt-3 pb-2.5 rounded-lg bg-myred  text-white font-md  text-md m-2';
      const normalLink = 'flex items-center gap-8 pl-4 pt-3 pb-2.5 rounded-lg bg-white text-md text-myblue dark:text-gray-200 dark:hover:text-myred hover:bg-light-gray m-2';
    

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto border-r-1 border-r-myblue pb-10">
    {activeMenu && (
      <>
        <div className="flex justify-between items-center">
          <Link to="/" onClick={handleCloseSideBar} className="items-center gap-5 mt-1  mr-auto ml-30 block w-9/12 " >
          <img className='h-17' src={logo} alt="Logo" />
          </Link>
          {/* active side bar
          <div>
            <button
              type="button"
              onClick={() => setActiveMenu(!activeMenu)}
              style={{  fontSize: "28px" }}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block"
            >
              <MdOutlineCancel />
            </button>
          </div> */}
        </div>
        <div className="mt-10 ">
        {homelink.map((item1) => (
            <div key={item1.title}>
              {item1.links.map((link1) => (
                <NavLink
                  to={`/${link1.name}`}
                  key={link1.name}
                  onClick={handleCloseSideBar}
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  {link1.icon}
                  <span className="capitalize ">{link1.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
          {links.map((item) => (
            <div key={item.title}>
              <p className="text-black dark:text-gray-400 text-sm m-3 mt-4 ml-6">
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={handleCloseSideBar}
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  {link.icon}
                  <span className="capitalize ">{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>
    )}
  </div>
  )
}

export default Sidebar