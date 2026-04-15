import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Sidebar, ThemeSettings } from './components';
import {
    Ecommerce,
    Orders,
    Calendar,
    Employees,
    Stacked,
    Pyramid,
    Customers,
    Kanban,
    Line,
    Area,
    Bar,
    Pie,
    Financial,
    ColorPicker,
    ColorMapping,
    Editor,
} from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } =
        useStateContext();
    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
                <div className='relative flex dark:bg-main-dark-bg'>
                    <div className='fixed bottom-4 right-4' style={{ zIndex: '1000' }}>
                        <TooltipComponent content='Settings' position='Top'>
                            <button
                                type='button'
                                className='p-3 text-3xl text-white hover:bg-light-gray hover:drop-shadow-xl'
                                style={{ background: currentColor, borderRadius: '50%' }}
                                onClick={() => setThemeSettings(true)}
                            >
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className='sidebar fixed w-72 bg-white dark:bg-secondary-dark-bg'>
                            <Sidebar />
                        </div>
                    ) : (
                        <div className='w-0 dark:bg-secondary-dark-bg'>
                            <Sidebar />
                        </div>
                    )}
                    <div
                        className={`min-h-screen w-full bg-main-bg dark:bg-main-dark-bg ${
                            activeMenu ? 'md:ml-72' : 'flex-2'
                        }`}
                    >
                        <div className='navbar fixed w-full bg-main-bg dark:bg-main-dark-bg md:static'>
                            <Navbar />
                        </div>

                        <div>
                            {themeSettings && <ThemeSettings />}

                            <Routes>
                                {/* Dashboard */}
                                <Route path='/' element={<Ecommerce />} />
                                <Route path='/ecommerce' element={<Ecommerce />} />

                                {/* Pages */}
                                <Route path='/orders' element={<Orders />} />
                                <Route path='/employees' element={<Employees />} />
                                <Route path='/customers' element={<Customers />} />

                                {/* Apps */}
                                <Route path='/kanban' element={<Kanban />} />
                                <Route path='/editor' element={<Editor />} />
                                <Route path='/calendar' element={<Calendar />} />
                                <Route path='/color-picker' element={<ColorPicker />} />

                                {/* Charts */}
                                <Route path='/line' element={<Line />} />
                                <Route path='/area' element={<Area />} />
                                <Route path='/bar' element={<Bar />} />
                                <Route path='/pie' element={<Pie />} />
                                <Route path='/financial' element={<Financial />} />
                                <Route path='/color-mapping' element={<ColorMapping />} />
                                <Route path='/pyramid' element={<Pyramid />} />
                                <Route path='/stacked' element={<Stacked />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
