import React, { useContext } from 'react'

import '../HomePage/index.css'
import { MyContext } from '../../context/AppContext';
const HomePage = () => {
    const { counter } = useContext(MyContext)
    return (

        <>
            <section className='primary'>
                <div className="containerH">

                    <div className='containerDescription'>

                        <div className="description">
                            <h1 className='titleHealth'>Check your health today! {counter}</h1>
                            <p className='miniD'>To avoid future regrets in your life, just get an appoinment with one of our 10.000 Doctors available for you 24/7</p>
                        </div>

                        <div className="botones">
                            <button className='btnLog'><a className='btnApo' href="#">An appoinment</a></button>
                            <div className="logIn">
                                <a className='btnL' href="/Login">Log in <i class='bx bx-chevron-right bx-sm'></i></a>

                            </div>
                        </div>
                    </div>

                    <div className="containerImgDr">
                        <div className="ballImg">
                            <div className="imgDr">
                                <img src="../../public/med.svg" alt="" />
                            </div>
                        </div>

                        <div className="nrOne">

                            <div className="imgNumberOne">
                                <img src="../public/medical-team.png" alt="" />
                            </div>
                            <div className="numberOne">
                                <h2>No 1</h2>
                                <p>Top Best Doctors</p>
                            </div>
                        </div>
                        <div className="nrTwo">

                            <div className="imgNumberTwo">
                                <img src="../public/medical-history.png" alt="" />
                            </div>

                        </div>


                        <div className="nrThree">
                            <div className="imgNumberThree">
                                <img src="../public/3744575.png" alt="" />
                            </div>
                        </div>

                    </div>


                </div>
            </section>

            <section className='secondary'>
                <div className="aboutUs">

                    <div className="pictures">

                        <div className="imageContainerWrite">
                            <img src="../public/writing.jpg" alt="" />
                        </div>

                        <div className="imageContainerCientiifi">
                            <img src="../public/teamCientificos.jpg" alt="" />
                        </div>

                        <div className="imageContainerDrs">
                            <img src="../public/laboratoryDra.jpg" alt="" />
                        </div>
                    </div>

                    <div className="descriptionSecondary">

                        <div className="titlesAboutUs">
                            <h4 className='subTitle'><i class='bx bxs-heart'></i>About us</h4>
                            <h1>Short Story About Our Steam Medical.</h1>
                        </div>

                        <div className="historyParagragh">
                            <p className='miniP'>Lorem ipsum dolor sit Ut, officiis exercitationem!</p>
                            <p className='paragragh'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste illum autem voluptatibus aperiam ea quos dicta nesciunt, suscipit cupiditate harum asperiores veniam eveniet ipsam minima, libero error dolorum non animi!</p>
                        </div>

                        <div className="numberDr">

                            <div className="containerImgContact">
                                <img src="" alt="" />
                            </div>

                            <div className="phoneNumber">
                                <p>+01800395412</p>
                                <p>FOUNDER & CO</p>
                            </div>

                            <div className="mySign">
                                <p>Dr Ricardo Oliveros</p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default HomePage
