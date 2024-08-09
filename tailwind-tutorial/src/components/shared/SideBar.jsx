import React, { createContext, useContext, useState } from 'react';
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation';
import { Link, useLocation } from 'react-router-dom';
import { ChevronFirst, ChevronLast } from 'lucide-react';
import { SlArrowLeft } from "react-icons/sl";



const expandedContext = createContext()

export const SideBar = () => {
  const [expanded, setExpanded] = useState(true)

  return (

    <expandedContext.Provider value={expanded}>
      <div className='flex'>
        <div className={`${expanded ? 'w-60' : 'w-24'} flex flex-col p-4 pt-9 duration-300 h-screen bg-white relative`}>
          <img onClick={() => setExpanded(!expanded)} src="./src/assets/control.png" className={` ${!expanded && 'rotate-180 duration-300'} absolute cursor-pointer rounded-full -right-5 top-9 w-10 border-2 border-black size-10`} />
          <div className='flex gap-x-8 items-center'>
            <img src="./src/assets/logo.png" alt="" className={`${!expanded && 'rotate-[360deg]'} rounded-lg pl-[6px] cursor-pointer duration-300`} />
            <h1 className={`${!expanded && 'scale-0 duration-300'} text-xl font-bold`}>Designer</h1>
          </div>
            <div className={`flex-1 mt-10`}>
              {DASHBOARD_SIDEBAR_LINKS.map((SideBar) => (
                <SideBarLink key={SideBar.key} SideBar={SideBar}>
                </SideBarLink>
              ))}
            </div>

            <div className='border-t-2'>
              {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((SideBar) => (
                <div>
                  <SideBarBottomLink key={SideBar.key} SideBar={SideBar}></SideBarBottomLink>
                </div>
              ))}
            </div>

        </div>
      </div>
    </expandedContext.Provider>




    // <div className= {`flex flex-col bg-black text-white p-3 overflow-hidden`}>
    //   <div className="flex mb-10 justify-between ">
    //     <div className={`flex items-center overflow-hidden transition-all mr-8 ${expanded ? "w-100" : "w-0"}`}>
    //       <FcBullish fontSize={30} />
    //       <h1 className="p-1 text-xl">OpenShop</h1>
    //     </div>
    //     <button className='' onClick={() => setExpanded(expanded => !expanded)}>
    //       {expanded ? <ChevronFirst /> : <ChevronLast />}
    //     </button>
    //   </div>
    //   <div className={`flex-1`}>
    //     {DASHBOARD_SIDEBAR_LINKS.map((SideBar) => (
    //         <SideBarLink key={SideBar.key} SideBar={SideBar}>
    //         </SideBarLink>
    //     ))}
    //   </div>


    // </div>
  )
}

const SideBarLink = ({ SideBar }) => {
  const { pathname } = useLocation();
  const expanded = useContext(expandedContext);
  return (
    <Link className={`flex items-center p-2 pt-2 gap-x-2 text-lg hover:bg-cyan-600 ${pathname === SideBar.path && expanded ? 'bg-gray-400' : {}}`}
      to={SideBar.path}
    >
      <div className={`flex items-center gap-x-6 `}>
        <span className={`${pathname === SideBar.path && !expanded ? 'bg-gray-400' : {}}`}> {SideBar.icon} </span>
        <span className={`overflow-hidden transition-all text-black ${!expanded && 'scale-0 duration-300'}`}>{SideBar.label} </span>
      </div>
    </Link>
  )
}

const SideBarBottomLink = ({ SideBar }) => {
  const { pathname } = useLocation();
  const expanded = useContext(expandedContext);
  return (
    <Link className='flex items-center p-2 gap-x-2 text-lg hover:bg-gray-500 active:bg-neutral-600n'
      to={SideBar.path}
      style={pathname === SideBar.path ? { backgroundColor: 'gray' } : {}}
    > 
    <div className={`flex items-center gap-x-6 `}>
      <span> {SideBar.icon} </span>
      <span className={`overflow-hidden transition-all ${!expanded && 'scale-0'}`}> {SideBar.label} </span>
    </div>
    </Link>
  )
}