import React from 'react'
import './Brand.css'
import Header from './Layout/Header'
import { useEffect } from 'react';
import Client from './Client'
import FAQSection from './FaqSection'
import Footer from './Footer'
import bigFilter from '../assets/images/ltr 4 1 2.png'
import standard from '../assets/images/Group 133.png'
import premium from '../assets/images/Group 136.png'
import prime from '../assets/images/Group 137.png'
import airfilter from "../assets/images/airfilter_bg\ 1.png"
import pinion from "../assets/images/pinion\ 1\ 1.png"
import Cardboard from "../assets/images/Cardboard-pleated.png"
import ltr from "../assets/images/ltr\ 4\ 1\ 1.png"
import { useState } from 'react'
const Brand = () => {
    let defincrement = 1
    // let [increment, setincrement] = useState(defincrement)
    let [incrementVal, setincrementVal] = useState(defincrement);

    let incrementValChangeHandler = (event) => {
        setincrementVal(event.target.value)
    }
    let incrementHandler = () => {
        let plus = Number(incrementVal) + 1
        setincrementVal(plus)
    }
    let decrementHandler = () => {
        let subtract = Number(incrementVal) - 1
        if (subtract > 0) {
            setincrementVal(subtract)
        }

    }

    // console.log(incrementVal)

    useEffect(() => {

        let allimg = document.querySelectorAll('.step1-img')
        let imgContainer = document.querySelector('.step1-img-container')

        imgContainer.addEventListener('click', function (e) {
            let click = e.target.closest('.step1-img');
            // console.log(click)
            if (!click) return

            allimg.forEach((t) => {
                t.classList.remove('step1-img-active')
            })
            click.classList.add('step1-img-active')

            //////////////////////////////////////// active discount body//////////////////////////////
            let discountBody = document.querySelectorAll('.fliter-quality-container')
            // console.log(click.dataset.tab)
            discountBody.forEach(body => body.classList.remove('discount-active'))
            document.querySelector(`.discount-body--${click.dataset.tab}`).classList.add('discount-active')

        })

    }, [])
    return (
        <>
            <Header />

            {/* ////////////////////////////////////////////////// */}

            <div className="container-fluid">
                <div className="row" style={{ padding: "40px 0px", backgroundColor: "#ebf5f9" }}>
                    <h1 className='brand-heading' style={{ textAlign: "center" }}>11.25x11.25x1 Air Filters</h1>
                </div>
            </div>




            {/* ///////////////////////Filter quality/////////////////////////// */}

            <div className="container-fluid">
                <div className="row" >
                    <div className='col-xl-11' style={{ margin: "80px auto" }}>
                        <div className='row' >
                            <div className='col-md-6' style={{}}>
                                <img className='bigFilter' src={bigFilter}></img>
                                <div className='description-container' >

                                    <div style={{ backgroundColor: "#ebf3f9", padding: '6px 10px', borderRadius: "10px 10px 0px 0px" }}>
                                        <h6 className='des-heading'>Description</h6>
                                    </div>


                                    <div className='des-p' >
                                        <i className="bi bi-circle-fill" style={{ color: '#32c6ea', margin: '0px 10px' }}></i>
                                        <p>Actual Size:11.25x11.25x1</p>
                                    </div>

                                    <div className='des-p' >
                                        <i className="bi bi-circle-fill" style={{ color: '#32c6ea', margin: '0px 10px' }}></i>
                                        <p>Model:AFB11.25x11.25x1 M8A</p>
                                    </div>

                                    <div className='des-p' >
                                        <i className="bi bi-circle-fill" style={{ color: '#32c6ea', margin: '0px 10px' }}></i>
                                        <p>Available in MERV Rating:8,11,13</p>
                                    </div>

                                    <div className='des-p' >
                                        <i className="bi bi-circle-fill" style={{ color: '#32c6ea', margin: '0px 10px' }}></i>
                                        <p>Made in the USA</p>
                                    </div>

                                    <div className='des-p' >
                                        <i className="bi bi-circle-fill" style={{ color: '#32c6ea', margin: '0px 10px' }}></i>
                                        <p>Ships in 24 hours</p>
                                    </div>




                                </div>
                            </div>





                            <div className='col-md-6' >
                                <form>
                                    {/* ??????????????         step 1      ////////////////// */}
                                    <div style={{ border: 'solid 1px #80808040', borderRadius: '10px' }}>
                                        <div style={{ backgroundColor: '#ebf3f9', borderRadius: '10px 10px 0px 0px', padding: '4px 10px' }}>
                                            <h6 className='step-h'>Step 1: Select Fliter Quality</h6>
                                        </div>



                                        <div className='step1-img-container' >
                                            
                                            <div className="form-check step1-img standard-img-container step1-img-active" data-tab="1">
                                                {/* <input className="form-check-input st-pre-pri-radio" type="radio" name="flexRadioDefault" id="standard" defaultChecked />
                                                <label className="form-check-label" htmlFor="standard" > */}
                                                    <img className='step1-img1' src={standard}></img>
                                                {/* </label> */}
                                            </div>

                                            <div className="form-check step1-img premium-img-container" data-tab="2">
                                                {/* <input className="form-check-input st-pre-pri-radio" type="radio" name="flexRadioDefault" id="premium" />
                                                <label className="form-check-label" htmlFor="premium" > */}
                                                    <img className='step1-img2' src={premium}></img>
                                                {/* </label> */}
                                            </div>

                                            <div className="form-check step1-img prime-img-container" data-tab="3">
                                                {/* <input className="form-check-input st-pre-pri-radio" type="radio" name="flexRadioDefault" id="prime" />
                                                <label className="form-check-label" htmlFor="prime" > */}
                                                    <img className='step1-img3' src={prime}></img>
                                                {/* </label> */}
                                            </div>


                                            {/* <a href='#'><img className='step1-img1' src={standard}></img></a>
                                            <a href='#'><img className='step1-img2' src={premium}></img></a>
                                            <a href='#'><img className='step1-img3' src={prime}></img></a> */}


                                        </div>

                                        <div style={{ display: 'flex', justifyContent: "center" }}>
                                            <button style={{ margin: '50px 0px', padding: '10px 20px', backgroundColor: '#29aae1', border: 'none', borderRadius: "5px", color: 'white' }}>HELP ME CHOOSE</button>
                                        </div>
                                    </div>

                                    {/* ??????????????         step 2      ////////////////// */}


                                    <div style={{ border: 'solid 1px #80808040', borderRadius: '10px', margin: "20px 0px" }}>

                                        <div style={{ backgroundColor: '#ebf3f9', borderRadius: '10px 10px 0px 0px', padding: '4px 10px' }}>
                                            <h6 className='step-h'>Step 2: Select Fliter Quality</h6>
                                        </div>

                                        <div className='increment-btn-main_container' >

                                            <div className='increment-btn-container'>
                                                <button type='button' onClick={decrementHandler} >
                                                    <i className="bi bi-dash-lg"></i>
                                                </button>

                                                <div style={{ borderLeft: "solid 1px #80808040", borderRight: 'solid 1px #80808040' }}>
                                                    <input type="number" value={incrementVal} onChange={incrementValChangeHandler}></input>

                                                </div>

                                                <button type='button' onClick={incrementHandler} >
                                                    <i className="bi bi-plus-lg"></i>
                                                </button>
                                            </div>


                                            <p style={{ margin: '10px 40px' }}>11.25X11.25X1 Air Filters for <span style={{ color: "blue" }}>
                                                `${Number(incrementVal * 33.89).toFixed(2)} each`</span></p>
                                        </div>

                                        <div style={{ padding: '4px 10px' }}>
                                            <h5 className='quality-h'> Quality Discount</h5>
                                        </div>
                                        {/* ////////////////// */}
                                        <div className='fliter-quality-container discount-body--1 discount-active' >

                                            <div className={`quality-p_container ${incrementVal == 1 ? "quality-p_container-active":""} `} >
                                                <p>1 for</p>
                                                <p>$33.89</p>
                                                <p style={{ opacity: '0' }}>(SAVE 37%)</p>
                                            </div>

                                            <div className={`quality-p_container ${incrementVal == 2 ? "quality-p_container-active":""} `}>
                                                <p>2 for</p>
                                                <p>$21.18 ea</p>
                                                <p className='save'>(SAVE 37%)</p>
                                            </div>

                                            <div className={`quality-p_container ${incrementVal == 3 ? "quality-p_container-active":""} `}>
                                                <p>3 for</p>
                                                <p>$20.00 ea</p>
                                                <p className='save'>(SAVE 40%)</p>
                                            </div>

                                            <div className={`quality-p_container ${incrementVal == 4 ? "quality-p_container-active":""} `}>
                                                <p>4 for</p>
                                                <p>$19.40 ea</p>
                                                <p className='save'>(SAVE 42%)</p>
                                            </div>

                                            <div className={`quality-p_container ${incrementVal == 5 ? "quality-p_container-active":""} `}>
                                                <p>5 for</p>
                                                <p>$19.05 ea</p>
                                                <p className='save'>(SAVE 43%)</p>
                                            </div>

                                            <div className={`quality-p_container ${(incrementVal >= 6 ) && (incrementVal <= 11)  ? "quality-p_container-active":""} `}>
                                                <p>6-11 for</p>
                                                <p>$18.70 ea</p>
                                                <p className='save'>(SAVE 44%)</p>
                                            </div>

                                            <div className={`quality-p_container ${incrementVal >= 12 ? "quality-p_container-active":""} `}>
                                                <p>12+ for</p>
                                                <p>$17.64 ea</p>
                                                <p className='save'>(SAVE 47%)</p>
                                            </div>

                                        </div>

                                        {/* ///////////////////// */}

                                        {/* ////////////////// */}
                                        <div className='fliter-quality-container discount-body--2 ' >

                                            <div className={`quality-p_container ${incrementVal == 1 ? "quality-p_container-active":""} `} >
                                                <p>1 for</p>
                                                <p>$21.89</p>
                                                <p style={{ opacity: '0' }}>(SAVE 37%)</p>
                                            </div>

                                            <div className={`quality-p_container ${incrementVal == 2 ? "quality-p_container-active":""} `}>
                                                <p>2 for</p>
                                                <p>$13.18 ea</p>
                                                <p className='save'>(SAVE 35%)</p>
                                            </div>

                                            <div className={`quality-p_container ${incrementVal == 3 ? "quality-p_container-active":""} `}>
                                                <p>3 for</p>
                                                <p>$10.00 ea</p>
                                                <p className='save'>(SAVE 49%)</p>
                                            </div>

                                            <div className={`quality-p_container ${incrementVal == 4 ? "quality-p_container-active":""} `}>
                                                <p>4 for</p>
                                                <p>$8.40 ea</p>
                                                <p className='save'>(SAVE 60%)</p>
                                            </div>

                                            <div className={`quality-p_container ${incrementVal == 5 ? "quality-p_container-active":""} `}>
                                                <p>5 for</p>
                                                <p>$19.05 ea</p>
                                                <p className='save'>(SAVE 43%)</p>
                                            </div>

                                            <div className={`quality-p_container ${(incrementVal >= 6 ) && (incrementVal <= 11) ? "quality-p_container-active":""} `}>
                                                <p>6-11 for</p>
                                                <p>$7.70 ea</p>
                                                <p className='save'>(SAVE 66%)</p>
                                            </div>

                                            <div className={`quality-p_container ${incrementVal >= 12 ? "quality-p_container-active":""} `}>
                                                <p>12+ for</p>
                                                <p>$6.64 ea</p>
                                                <p className='save'>(SAVE 70%)</p>
                                            </div>

                                        </div>

                                        {/* ///////////////////// */}

                                        {/* ////////////////// */}
                                        <div className='fliter-quality-container discount-body--3 ' >

                                            <div className={`quality-p_container ${incrementVal == 1 ? "quality-p_container-active":""} `}>
                                                <p>1 for</p>
                                                <p>$25.89</p>
                                                <p style={{ opacity: '0' }}>(SAVE 37%)</p>
                                            </div>

                                            <div className={`quality-p_container ${incrementVal == 2 ? "quality-p_container-active":""} `}>
                                                <p>2 for</p>
                                                <p>$16.18 ea</p>
                                                <p className='save'>(SAVE 40%)</p>
                                            </div>

                                            <div className={`quality-p_container ${incrementVal == 3 ? "quality-p_container-active":""} `}>
                                                <p>3 for</p>
                                                <p>$12.00 ea</p>
                                                <p className='save'>(SAVE 50%)</p>
                                            </div>

                                            <div className={`quality-p_container ${incrementVal == 4 ? "quality-p_container-active":""} `}>
                                                <p>4 for</p>
                                                <p>$10.40 ea</p>
                                                <p className='save'>(SAVE 60%)</p>
                                            </div>

                                            <div className={`quality-p_container ${incrementVal == 5 ? "quality-p_container-active":""} `}>
                                                <p>5 for</p>
                                                <p>$8.85 ea</p>
                                                <p className='save'>(SAVE 66%)</p>
                                            </div>

                                            <div className={`quality-p_container ${(incrementVal >= 6 ) && (incrementVal <= 11) ? "quality-p_container-active":""} `}>
                                                <p>6-11 for</p>
                                                <p>$8.70 ea</p>
                                                <p className='save'>(SAVE 67%)</p>
                                            </div>

                                            <div className={`quality-p_container ${incrementVal >= 12 ? "quality-p_container-active":""} `}>
                                                <p>12+ for</p>
                                                <p>$6.64 ea</p>
                                                <p className='save'>(SAVE 70%)</p>
                                            </div>

                                        </div>

                                        {/* ///////////////////// */}




                                    </div>

                                    {/* ??????????????         step 3      ////////////////// */}

                                    <div style={{ border: 'solid 1px #80808040', borderRadius: '10px' }}>
                                        <div style={{ backgroundColor: '#ebf3f9', borderRadius: '10px 10px 0px 0px', padding: '4px 10px' }}>
                                            <h6 className='step-h'>Step 3: Select Deliver one-time</h6>
                                        </div>


                                        <div style={{ padding: "20px 15px " }}>

                                            <div className="form-check">
                                                <input className="form-check-input " type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                <label className="form-check-label deliver-lab" htmlFor="exampleRadios1">
                                                    Deliver one-time
                                                </label>
                                            </div>



                                            <div className='auto-delivar'>

                                                <div className="form-check" style={{}}>
                                                    <input className="form-check-input " type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" />
                                                    <label className="form-check-label deliver-lab" htmlFor="exampleRadios1">
                                                        Auto Delivar every
                                                    </label>
                                                </div>


                                                <div className="service-dropdown">

                                                    <select name="service" className='service' style={{ border: "none", backgroundColor: "#fafafa", padding: '5px 20px' }}>

                                                        <option value="Residential Service">3 Months</option>
                                                        <option value="Business Service">4 Months</option>
                                                        <option value="other">6 Months</option>

                                                    </select>

                                                </div>

                                                <p className='deliver-lab' style={{ color: '#29aae1', marginBottom: "0px", fontWeight: "400" }}>Save 5% with Auto Delivery </p>

                                            </div>



                                        </div>


                                    </div>


                                    {/* ??????????????         step 4      ////////////////// */}

                                    <div style={{ border: 'solid 1px #80808040', borderRadius: '10px', margin: "20px 0px" }}>
                                        <div style={{ backgroundColor: '#ebf3f9', borderRadius: '10px 10px 0px 0px', padding: '4px 10px' }}>
                                            <h6 className='step-h'>Step 4: Purchase Now</h6>
                                        </div>
                                        <div style={{ padding: "20px 15px " }}>
                                            <h2 className='cut-h' > <span style={{ color: "#29aae1" }}>${Number(incrementVal * 33.89).toFixed(2)} </span> <strike>$118.02</strike></h2>
                                            <button style={{ margin: '10px 0px', padding: '10px 50px', backgroundColor: '#29aae1', border: 'none', borderRadius: "5px", color: 'white' }}>Add to Cart</button>
                                        </div>



                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ///////////////////////Filter quality end/////////////////////////// */}




            {/* //////////////////////////////////////////////////  shop by size ////////////////////////////////// */}


            <div className="container-fluid">
                <div className="row shop-by-size-main-container" style={{ backgroundColor: "#ebf3f9" }}>
                    <h1>Want To Buy More ?</h1>
                    <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda facere odio cupiditate sapiente unde natus dolor <br /> blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.</p>
                    <div className='col-xl-11 shop-by-size-container'>

                        <div className=' shopCard shopcard1'>
                            <h4>1" Air Filters</h4>
                            <button>BUY NOW</button>
                            <img src={airfilter}></img>
                        </div>
                        <div className=' shopCard shopcard2'>
                            <h4>2" Air Filters</h4>
                            <button>BUY NOW</button>
                            <img src={pinion}></img>
                        </div>
                        <div className=' shopCard shopcard3'>
                            <h4>4" Air Filters</h4>
                            <button>BUY NOW</button>
                            <img src={Cardboard}></img>
                        </div>
                        <div className=' shopCard shopcard4'>
                            <h4>5" Air Filters</h4>
                            <button>BUY NOW</button>
                            <img src={ltr}></img>
                        </div>

                    </div>
                </div>
            </div>


            {/* /* //////////////////////////////////////////////////  shop by company //////////////////////////////// */}



            {/* ///////////////////////Merv Ratings/////////////////////////// */}


            <div className="container-fluid">
                <div className="row" >
                    <div className='col-12 rating-h-p_container'>
                        <h1 >More About MERV Ratings</h1>
                        <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda facere odio cupiditate sapiente unde natus dolor <br /> blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.</p>
                    </div>





                    <div className='col-xl-11' style={{ margin: '20px auto' }}>




                        <div className="row" style={{ display: 'flex', justifyContent: 'space-evenly' }}>


                            <div className='col-md-4' style={{}}>
                                <div className='ratingCard'>

                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img src={standard}></img>
                                    </div>

                                    <div className='rating-p'>
                                        <i className="bi bi-circle-fill" style={{ color: '#32c6ea', margin: '0px 10px' }}></i>
                                        <p>The 11.25x11.25×1 MERV 8 filter is our most popular rating, as it filters well in most spaces.</p>
                                    </div>

                                    <div className='rating-p'>
                                        <i className="bi bi-circle-fill" style={{ color: '#32c6ea', margin: '0px 10px' }}></i>
                                        <p>Traps and blocks 90% of air particles in your space, including pollen, dust mites, mold, and large particles like pudding mix.</p>
                                    </div>


                                    <div className='rating-p'>
                                        <i className="bi bi-circle-fill" style={{ color: '#32c6ea', margin: '0px 10px' }}></i>
                                        <p>﻿﻿Ideal for basic and standard homes and businesses.</p>
                                    </div>


                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <button style={{ margin: '10px 0px', padding: '10px 70px', backgroundColor: '#29aae1', border: 'none', borderRadius: "5px", color: 'white' }}>SELECT</button>
                                    </div>
                                </div>
                            </div>



                            <div className='col-md-4' style={{}}>

                                <div className='ratingCard'>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img src={premium}></img>
                                    </div>

                                    <div className='rating-p'>
                                        <i className="bi bi-circle-fill" style={{ color: '#32c6ea', margin: '0px 10px' }}></i>
                                        <p>The 11.25x11.25×1 MERV 8 filter is our most popular rating, as it filters well in most spaces.</p>
                                    </div>

                                    <div className='rating-p'>
                                        <i className="bi bi-circle-fill" style={{ color: '#32c6ea', margin: '0px 10px' }}></i>
                                        <p>Traps and blocks 90% of air particles in your space, including pollen, dust mites, mold, and large particles like pudding mix.</p>
                                    </div>


                                    <div className='rating-p'>
                                        <i className="bi bi-circle-fill" style={{ color: '#32c6ea', margin: '0px 10px' }}></i>
                                        <p>﻿﻿Ideal for basic and standard homes and businesses.</p>
                                    </div>


                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <button style={{ margin: '10px 0px', padding: '10px 70px', backgroundColor: '#29aae1', border: 'none', borderRadius: "5px", color: 'white' }}>SELECT</button>
                                    </div>

                                </div>
                            </div>


                            <div className='col-md-4' style={{}}>
                                <div className='ratingCard'>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img src={prime}></img>
                                    </div>

                                    <div className='rating-p' >
                                        <i className="bi bi-circle-fill" style={{ color: '#32c6ea', margin: '0px 10px' }}></i>
                                        <p>The 11.25x11.25×1 MERV 8 filter is our most popular rating, as it filters well in most spaces.</p>
                                    </div>

                                    <div className='rating-p' >
                                        <i className="bi bi-circle-fill" style={{ color: '#32c6ea', margin: '0px 10px' }}></i>
                                        <p>Traps and blocks 90% of air particles in your space, including pollen, dust mites, mold, and large particles like pudding mix.</p>
                                    </div>


                                    <div className='rating-p' >
                                        <i className="bi bi-circle-fill" style={{ color: '#32c6ea', margin: '0px 10px' }}></i>
                                        <p>﻿﻿Ideal for basic and standard homes and businesses.</p>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <button style={{ margin: '10px 0px', padding: '10px 70px', backgroundColor: '#29aae1', border: 'none', borderRadius: "5px", color: 'white' }}>SELECT</button>
                                    </div>

                                </div>
                            </div>


                        </div>



                    </div>



                </div>
            </div>

            {/* ///////////////////////Merv Ratings end/////////////////////////// */}


            {/* /* ////////////////////////////////////////////////// clients /////////////////////////////////////////////// */}

            <Client />


            {/* /* ////////////////////////////////////////////////// clients end/////////////////////////////////////////////// */}

            {/* ///////////////////////////////////////////////////// faqs ???????????///////////////////////////  */}
         
            <FAQSection />

            {/* ///////////////////////////////////////////////////// footer ???????????///////////////////////////  */}


            <Footer />
        </>
    )
}

export default Brand