import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import App from '../App';

const Router = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App darkMode={darkMode} />}>
                        <Route index element={<Home darkMode={darkMode} setDarkMode={setDarkMode}/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router