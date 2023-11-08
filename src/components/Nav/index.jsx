import React from 'react'
import '../Nav/index.css'

const Nav = () => {
    return (
        <>
            <nav className='navBar'>

                <div className="titleDesc">
                    <div className="logo">
                        <img src="#" alt="" />
                    </div>
                    <h1 className='titleSteam'>STEAM MEDICAL</h1>
                </div>

                <div className="links">
                    <ul><li><a href="#">Contact us</a></li></ul>
                    <ul><li><a href="#">Services</a></li></ul>
                    <ul><li><a href="#">About</a></li></ul>
                </div>


            </nav>
        </>
    )
}

export default Nav

