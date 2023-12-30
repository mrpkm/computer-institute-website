import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<>
                    <Navbar />
                </>} />
                <Route path='/contact' element={<>
                    <Navbar />
                </>} />
                <Route path='/course' element={<>
                    <Navbar />
                </>} />
                <Route path='/gallery' element={<>
                    <Navbar />
                </>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers
