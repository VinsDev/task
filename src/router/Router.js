import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import App from '../App';

const Router = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className='h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-300"'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App darkMode={darkMode} />}>
                        <Route index element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router