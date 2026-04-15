import { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position='BottomCenter'>
        <button
            type='button'
            onClick={customFunc}
            style={{ color }}
            className='relative rounded-full p-3 text-xl hover:bg-light-gray'
        >
            <span
                style={{ background: dotColor }}
                className='absolute right-2 top-2 inline-flex h-2 w-2 rounded-full'
            />
            {icon}
        </button>
    </TooltipComponent>
);

const Navbar = () => {
    const { setActiveMenu, isClicked, handleClick, screenSize, setScreenSize, currentColor } =
        useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className='relative flex justify-between p-2 md:mx-6'>
            <NavButton
                title='Menu'
                customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                color={currentColor}
                icon={<AiOutlineMenu />}
            />
            <div className='flex'>
                <NavButton
                    title='Cart'
                    customFunc={() => handleClick('cart')}
                    color={currentColor}
                    icon={<FiShoppingCart />}
                />
                <NavButton
                    title='Chat'
                    dotColor={'#03c9d7'}
                    customFunc={() => handleClick('chat')}
                    color={currentColor}
                    icon={<BsChatLeft />}
                />
                <NavButton
                    title='Notifications'
                    dotColor={'#03c9d7'}
                    customFunc={() => handleClick('notification')}
                    color={currentColor}
                    icon={<RiNotification3Line />}
                />
                <TooltipComponent content={'profile'} position='BottomCenter'>
                    <div
                        className='flex cursor-pointer items-center gap-2 rounded-lg p-1 hover:bg-light-gray'
                        onClick={() => handleClick('userProfile')}
                    >
                        <img className='h-8 w-8 rounded-full' src={avatar} alt='user profile' />
                        <p>
                            <span className='text-14 text-gray-400'>Hi, </span>{' '}
                            <span className='ml-1 text-14 font-bold text-gray-400'>Michael</span>
                        </p>
                        <MdKeyboardArrowDown className='text-14 text-gray-400' />
                    </div>
                </TooltipComponent>

                {isClicked.cart && <Cart />}
                {isClicked.chat && <Chat />}
                {isClicked.notification && <Notification />}
                {isClicked.userProfile && <UserProfile />}
            </div>
        </div>
    );
};

export default Navbar;
