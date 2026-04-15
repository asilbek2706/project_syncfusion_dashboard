import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

    const handleCloseSideBar = () => {
        if (activeMenu && screenSize <= 900) {
            setActiveMenu(false);
        }
    };

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
    const normalLink =
        'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    return (
        <div className='ml-3 h-screen overflow-auto pb-10 md:overflow-hidden md:hover:overflow-auto'>
            {activeMenu && (
                <>
                    <div className='flex items-center justify-between'>
                        <Link
                            to='/'
                            onClick={handleCloseSideBar}
                            className='ml-3 mt-4 flex items-center gap-3 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white'
                        >
                            <SiShopware /> <span>Shoppy</span>
                        </Link>
                        <TooltipComponent content='Menu' position='BottomCenter'>
                            <button
                                type='button'
                                onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                                className='mt-4 block rounded-full p-3 text-xl hover:bg-light-gray md:hidden'
                            >
                                <MdOutlineCancel />
                            </button>
                        </TooltipComponent>
                    </div>
                    <div className='mt-10'>
                        {links.map((item) => (
                            <div key={item.title}>
                                <p className='m-3 mt-4 uppercase text-gray-400'>{item.title}</p>
                                {item.links.map((link) => (
                                    <NavLink
                                        to={`/${link.name}`}
                                        key={link.name}
                                        onClick={handleCloseSideBar}
                                        style={({ isActive }) => ({
                                            backgroundColor: isActive ? currentColor : '',
                                        })}
                                        className={({ isActive }) =>
                                            isActive ? activeLink : normalLink
                                        }
                                    >
                                        {link.icon}
                                        <span className='capitalize'>{link.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Sidebar;
