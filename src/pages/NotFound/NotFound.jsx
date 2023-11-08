import React from 'react'
import '../NotFound/index.css'
import { useLocation } from 'react-router-dom'

const NotFound = ({ setShowNav }) => {
    // const location = useLocation();
    // if (location.pathname == "/*") {
    //     setShowNav(false)
    // }
    return (
        <>
            <div className="cont">
                <div className='containerImgErr'>
                    <img src="../../public/404.jpg" alt="" />
                </div>
            </div>
        </>
    )
}

export default NotFound
