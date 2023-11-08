import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Nav from '../Nav'
import HomePage from '../../pages/HomePage/HomePage'
import Login from '../../pages/Login/Login'
import Citas from '../../pages/Citas/Citas'
import CitasList from '../../pages/CitasList/CitasList'
import PagarCitas from '../../pages/Pagar/PagarCitas'
import NotFound from '../../pages/NotFound/NotFound'
import MainPage from '../../pages/MainPage/MainPage'


const Layout = () => {
const [showNav, setShowNav] = useState(true)
    return (
        <>
            {
                showNav && <Nav />
            }

            <BrowserRouter>
                <Routes>

                    <Route path="/HomePage" element={<HomePage />} />
                    <Route path="/Login" element={<Login setShowNav={setShowNav} />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/Main" element={<MainPage />} />
                    <Route path="/Citas" element={<Citas />} />
                    <Route path="/CitasList" element={<CitasList />} />
                    <Route path="/PagarCitas" element={<PagarCitas />} />
                    <Route path="/MainPage" element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Layout
