import React from 'react'
import './About.css'
import Header from './Layout/Header'
import Group from "../assets/images/Group 148.png"
import Rectangle from "../assets/images/Rectangle 106.png"
import Customization from "../assets/images/Customization-Banner-PNG 1.png"
import Gruppo from "../assets/images/Gruppo-FAN (1) 1.png"
import Client from './Client'
import FAQSection from './FaqSection'
import Footer from './Footer'
const About = () => {
    return (
        <>
            <Header />


            <div className="container-fluid">
                <div className="row" style={{ padding: "40px 0px", backgroundColor: "#ebf5f9" }}>
                    <h1 className='about-heading' style={{ textAlign: "center" }}>About Us</h1>
                </div>
            </div>
            {/* /////////////////////first section//////////////// */}

            <div className="container-fluid">
                <div className="row" >
                    <div className='col-12 first-h-p'>
                        <h1>At Air Filter Factory, We Care About <br /> The Air you Breathe.</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda facere odio cupiditate sapiente unde natus dolor <br /> blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.</p>
                    </div>

                    <div className='col-xl-11' style={{ margin: '50px auto' }}>
                        <div className='row'>
                            <div className='col-md-6 group-img' style={{}}>
                                <img src={Group}></img>
                            </div>
                            <div className='col-md-6 sold-h-p_container' style={{}}>
                                <h5>From Our First Air Filter Sold in 2013,</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda facere odio cupiditate sapiente unde natus dolor  blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.</p>

                                <p>Duis ipsum dolor sit amet consectetur adipisicing elit. Assumenda facere odio cupiditate sapiente unde natus dolor blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.blanditiis nam voluptatibus excepturi, </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* /////////////////////video section//////////////// */}

            <div className="container-fluid">
                <div className="row">
                    <div className='col-12 bg-video' style={{ padding: '0px', margin: '50px 0px' }}>
                        {/* <img src={Rectangle} style={{ width: '100%' }}></img> */}
                        <div className='video-icon-container' >

                            <span className="material-symbols-rounded circle" style={{ backgroundColor: '#3882c4', borderRadius: "50%" }}>
                                radio_button_unchecked
                            </span>


                            <svg style={{ position: 'absolute', fill: "white" }} xmlns="http://www.w3.org/2000/svg" height={48} width={48}><path d="M18.3 36.4q-.75.5-1.525.05Q16 36 16 35.1V12.6q0-.9.775-1.35.775-.45 1.525.05L36 22.6q.7.45.7 1.25T36 25.1Z" /></svg>



                        </div>
                    </div>
                </div>
            </div>

            {/* /////////////////////third section//////////////// */}


            <div className="container-fluid">
                <div className="row" >

                    <div className='col-xl-11' style={{ margin: '50px auto' }}>
                        <div className='row'>

                            <div className='col-md-6 mission-h-p_container' style={{}}>
                                <h3>Our Mission</h3>
                                <h5>Indoor Air Quality Has Always Been Our Top Priority.  </h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda facere odio cupiditate sapiente unde natus dolor  blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.</p>

                                <p>Duis ipsum dolor sit amet consectetur adipisicing elit. Assumenda facere odio cupiditate sapiente unde natus dolor blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.blanditiis nam voluptatibus excepturi, </p>
                            </div>

                            <div className='col-md-6 group-img' style={{}}>
                                <div className='bg-thrid-about' >
                                    <img src={Customization}></img>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* /////////////////////Fourth section//////////////// */}


            <div className="container-fluid">
                <div className="row" >

                    <div className='col-xl-11' style={{ margin: '50px auto' }}>
                        <div className='row'>


                            <div className='col-md-6 group-img' style={{}}>
                                <div className='bg-fourth-about' >
                                    <img src={Gruppo}></img>
                                </div>

                            </div>

                            <div className='col-md-6 service-h-p_container' style={{}}>
                                <h3>Our Filter And Service</h3>
                                <h5>Always Free Shipping  </h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda facere odio cupiditate sapiente unde natus dolor  blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.</p>

                                <p>Duis ipsum dolor sit amet consectetur adipisicing elit. Assumenda facere odio cupiditate sapiente unde natus dolor blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.blanditiis nam voluptatibus excepturi, </p>
                            </div>


                        </div>
                    </div>

                </div>
            </div>



            {/* /////////////////////Client//////////////// */}
            <Client />
            {/* /////////////////////faq//////////////// */}
            <FAQSection/>
            {/* /////////////////////footer//////////////// */}
            <Footer />

        </>
    )
}

export default About