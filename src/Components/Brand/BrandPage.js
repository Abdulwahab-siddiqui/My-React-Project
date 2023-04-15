import React, { useEffect } from 'react'
import './BrandPage.css'
import Header from '../Layout/Header'
import Footer from '../Footer'
import { useState } from 'react'

const BrandPage = () => {
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

    useEffect(() => {

        let circleBrderAll = document.querySelectorAll('.merv-circle')
        let circleBrderContainer = document.body

        circleBrderContainer.addEventListener('click', function (e) {
            let click = e.target.closest('.merv-circle');
            // console.log(click)
            if (!click) return

            circleBrderAll.forEach((t) => {
                t.classList.remove('merv-circle-active')
            })
            click.classList.add('merv-circle-active')
        })
    }, [])
    return (
        <>
            {/* ///////////////////////////header////////////////////////// */}
            <Header />


            {/* ///////////////////////brand detail section////////////////////////////// */}
            <div className="container-fluid">
                <div className="row" >
                    <div className='col-md-8 brand-name-p-container'>
                        <h1 className=''>Brand Name</h1>
                        <p>Filterbuy replacement air filters offer the same high quality materials and performance as the name brand but at a fraction of the cost.</p>
                    </div>
                    <div className='col-md-8 brand-page-ul-main_container' >
                        {/* <div className='row' > */}
                        <div style={{ display: 'flex', justifyContent: "space-between", flexWrap: 'wrap' }}>
                            <ul className='brand-page-li-container'>
                                <li>Available in MERV 8, 11, and 13</li>
                                <li>Free shipping</li>
                                <li>Guaranteed to fit</li>
                            </ul>
                            <ul className='brand-page-li-container'>
                                <li>Lowest prices</li>
                                <li>Made in the U.S.A.</li>
                                <li>Family owned and operated</li>
                            </ul>
                        </div>
                        {/* <div className=' brand-page-ul-main_container'>
                                
                            </div> */}
                        {/* </div> */}
                    </div>

                </div>
            </div>

            {/* //////////////////////brand detail section end/////////////////////////////// */}


            {/* ///////////////////////////////////////////////////// */}
            <div className="container-fluid">
                <div className="row">
                    <div className='col-xl-10 col-11 brand-card-main-container' >
                        <div className='row'>

                            <div className='col-md-3 brand-card brand-card-img'>
                                <img src='https://filterbuy.com/media/cache/74/6a/746abd49068cba86977b286dff91cadb.jpg'></img>
                            </div>

                            <div className='col-md-6 brand-card brand-center-div_container'>
                                <h3>20x25x5 MERV 11</h3>
                                <p className='actual-size-p'><span>Actual:</span> 19 3/4 x 24 1/4 x 4 7/8"</p>

                                <p className='desig-brandname-p'><span>Designed to Fit: </span>
                                    <br />
                                    Air Bear 2000
                                    255649-102
                                    259112-102
                                </p>

                                <p className='select-rating-p'>
                                    Select MERV Rating
                                </p>


                                <div className='merv-main_container'>

                                    <div className='merv-container'>
                                        <div className='merv-circle merv-circle-active' >
                                            <strong>
                                                <span>MERV</span> <br></br>
                                                8
                                            </strong>

                                        </div>
                                        <p>Standard</p>
                                    </div>

                                    <div className='merv-container'>
                                        <div className='merv-circle merv-circle-mid' >
                                            <strong>
                                                <span>MERV</span> <br></br>
                                                11
                                            </strong>
                                        </div>
                                        <p>Superior</p>
                                    </div>
                                    <div className='merv-container'>
                                        <div className='merv-circle' >
                                            <strong>
                                                <span>MERV</span> <br></br>
                                                13
                                            </strong>
                                        </div>
                                        <p>Best</p>
                                    </div>


                                </div>

                                <h6>MERV 11 - filters pollen, dust mites, mold, auto emissions, and large particles like milled flour</h6>


                            </div>

                            <div className='col-md-3 brand-card add-to-cart_container'>
                                <p>{`$${(Number(incrementVal) * 34.26).toFixed(2)}`}<span>ea</span> </p>
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
                                </div>
                                <button className='add-to-cart-btn'>Add to Cart</button>
                                <p className='add-to-cart-last-p'>as low as $31.18 when <br></br> you buy 3 or more</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* ///////////////////////////////////////////////////// */}


            {/* ///////////////////////////////////////////////////// */}
            <div className="container-fluid">
                <div className="row">
                    <div className='col-xl-10  col-11 brand-card-main-container'  >
                        <div className='row'>

                            <div className='col-md-3 brand-card brand-card-img'>
                                <img src='https://filterbuy.com/media/cache/74/6a/746abd49068cba86977b286dff91cadb.jpg'></img>
                            </div>

                            <div className='col-md-6 brand-card brand-center-div_container'>
                                <h3>20x20x5 MERV 11</h3>
                                <p className='actual-size-p'><span>Actual:</span> 19 3/4" x 20 5/8" x 4 7/8"</p>

                                <p className='desig-brandname-p'><span>Designed to Fit: </span>
                                    <br />
                                    Air Bear 20 x 20 255649-103
                                </p>

                                <p className='select-rating-p'>
                                    Select MERV Rating
                                </p>


                                <div className='merv-main_container'>

                                    <div className='merv-container '>
                                        <div className='merv-circle merv-circle-active' >
                                            <strong>
                                                <span>MERV</span> <br></br>
                                                8
                                            </strong>

                                        </div>
                                        <p>Standard</p>
                                    </div>

                                    <div className='merv-container'>
                                        <div className='merv-circle merv-circle-mid' >
                                            <strong>
                                                <span>MERV</span> <br></br>
                                                11
                                            </strong>
                                        </div>
                                        <p>Superior</p>
                                    </div>
                                    <div className='merv-container'>
                                        <div className='merv-circle' >
                                            <strong>
                                                <span>MERV</span> <br></br>
                                                13
                                            </strong>
                                        </div>
                                        <p>Best</p>
                                    </div>


                                </div>

                                <h6>MERV 11 - filters pollen, dust mites, mold, auto emissions, and large particles like milled flour</h6>


                            </div>

                            <div className='col-md-3 brand-card add-to-cart_container'>
                                <p>{`$${(Number(incrementVal) * 34.26).toFixed(2)}`} <span>ea</span> </p>
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
                                </div>
                                <button className='add-to-cart-btn'>Add to Cart</button>
                                <p className='add-to-cart-last-p'>as low as $31.18 when <br></br> you buy 3 or more</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* ///////////////////////////////////////////////////// */}



            {/* ///////////////////////////////////////////////////// */}
            <div className="container-fluid">
                <div className="row">
                    <div className='col-xl-10 col-11 brand-card-main-container' >
                        <div className='row'>

                            <div className='col-md-3 brand-card brand-card-img'>
                                <img src='https://filterbuy.com/media/cache/74/6a/746abd49068cba86977b286dff91cadb.jpg'></img>
                            </div>

                            <div className='col-md-6 brand-card brand-center-div_container'>
                                <h3>16x25x5 MERV 11</h3>
                                <p className='actual-size-p'><span>Actual:</span>15 3/4 x 24 1/4 x 4 7/8"</p>

                                <p className='desig-brandname-p'><span>Designed to Fit: </span>
                                    <br />
                                    Air Bear 1400 255649-105
                                </p>

                                <p className='select-rating-p'>
                                    Select MERV Rating
                                </p>


                                <div className='merv-main_container'>

                                    <div className='merv-container'>
                                        <div className='merv-circle merv-circle-active' >
                                            <strong>
                                                <span>MERV</span> <br></br>
                                                8
                                            </strong>

                                        </div>
                                        <p>Standard</p>
                                    </div>

                                    <div className='merv-container'>
                                        <div className='merv-circle merv-circle-mid' >
                                            <strong>
                                                <span>MERV</span> <br></br>
                                                11
                                            </strong>
                                        </div>
                                        <p>Superior</p>
                                    </div>
                                    <div className='merv-container'>
                                        <div className='merv-circle' >
                                            <strong>
                                                <span>MERV</span> <br></br>
                                                13
                                            </strong>
                                        </div>
                                        <p>Best</p>
                                    </div>


                                </div>

                                <h6>MERV 11 - filters pollen, dust mites, mold, auto emissions, and large particles like milled flour</h6>


                            </div>

                            <div className='col-md-3 brand-card add-to-cart_container'>
                                <p>{`$${(Number(incrementVal) * 34.26).toFixed(2)}`} <span>ea</span> </p>
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
                                </div>
                                <button className='add-to-cart-btn'>Add to Cart</button>
                                <p className='add-to-cart-last-p'>as low as $31.18 when <br></br> you buy 3 or more</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* ///////////////////////////////////////////////////// */}



            {/* ///////////////////////////////////////////////////// */}
            <div className="container-fluid">
                <div className="row">
                    <div className='col-xl-10 col-11 brand-card-main-container' >
                        <div className='row'>

                            <div className='col-md-3 brand-card brand-card-img'>
                                <img src='https://filterbuy.com/media/cache/74/6a/746abd49068cba86977b286dff91cadb.jpg'></img>
                            </div>

                            <div className='col-md-6 brand-card brand-center-div_container'>
                                <h3>16x25x3 MERV 11</h3>
                                <p className='actual-size-p'><span>Actual:</span> 15 3/4 x 24 1/4 x 2 3/4</p>

                                <p className='desig-brandname-p'><span>Designed to Fit: </span>
                                    <br />
                                    Air Bear 2000
                                    255649-102
                                    259112-102
                                </p>

                                <p className='select-rating-p'>
                                    Select MERV Rating
                                </p>


                                <div className='merv-main_container'>

                                    <div className='merv-container'>
                                        <div className='merv-circle merv-circle-active' >
                                            <strong>
                                                <span>MERV</span> <br></br>
                                                8
                                            </strong>

                                        </div>
                                        <p>Standard</p>
                                    </div>

                                    <div className='merv-container'>
                                        <div className='merv-circle merv-circle-mid' >
                                            <strong>
                                                <span>MERV</span> <br></br>
                                                11
                                            </strong>
                                        </div>
                                        <p>Superior</p>
                                    </div>
                                    <div className='merv-container'>
                                        <div className='merv-circle' >
                                            <strong>
                                                <span>MERV</span> <br></br>
                                                13
                                            </strong>
                                        </div>
                                        <p>Best</p>
                                    </div>


                                </div>

                                <h6>MERV 11 - filters pollen, dust mites, mold, auto emissions, and large particles like milled flour</h6>


                            </div>

                            <div className='col-md-3 brand-card add-to-cart_container'>
                                <p>{`$${(Number(incrementVal) * 34.26).toFixed(2)}`}<span>ea</span> </p>
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
                                </div>
                                <button className='add-to-cart-btn'>Add to Cart</button>
                                <p className='add-to-cart-last-p'>as low as $31.18 when <br></br> you buy 3 or more</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* ///////////////////////////////////////////////////// */}

            {/* ///////////////////////////footer////////////////////////// */}
            <Footer />
        </>

    )
}

export default BrandPage