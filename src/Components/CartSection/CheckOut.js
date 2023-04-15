import React, { useEffect } from 'react'
import { useState } from 'react'
import './CheckOut.css'
import Header from '../Layout/Header'
import Footer from "../Footer"
import checkoutCards from '../../assets/images/cards.png'

let state = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}
const CheckOut = () => {
    /////////////////////////////////////////// 
    let entries = Object.entries(state)
    let data = entries.map((entry) => {
        let [key, val] = entry
        return <option key={val}>{val}</option>
    });
    ///////////////////////////////////////////


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
    return (
        <>


            <>

                <Header />

                {/* /////////////////// /////////////////////// */}
                <div className="container-fluid">
                    <div className="row tab-mobile-padding">
                        <div className='col-xl-11 checkout-main_container'>
                            <div className='row order-payment-section-container'>



                                <div className='pay-ship-heading-container'>
                                    <h1>Payment & Shipping</h1>
                                </div>
                                
                                <div className='col-12 order-payment-section'>


                                    <div className='billing-h'>
                                        <h4>Billing Information</h4>
                                    </div>

                                    <div className='checkout-country'>
                                        <span>Country</span>
                                        <p>United States (US)</p>
                                    </div>

                                    <div className='checkout-pay-ship-form-container'>
                                        <form>

                                            <div className="form-group checkout-all-input-container">
                                                <input type="email" className="form-control" placeholder="Enter email" />
                                            </div>

                                            <div className="form-group checkout-all-input-container" style={{ display: "flex", justifyContent: "space-between" }}>
                                                <input type="text" className="form-control" placeholder="First Name" style={{ width: '48%' }} />
                                                <input type="text" className="form-control" placeholder="Last Name" style={{ width: '48%' }} />
                                            </div>

                                            <div className="form-group checkout-all-input-container">
                                                <input type="text" className="form-control" placeholder="Company Name (optional)" />
                                            </div>

                                            <div className="form-group checkout-all-input-container">
                                                <input type="text" className="form-control" placeholder="Street address" />
                                            </div>

                                            <div className="form-group checkout-all-input-container">
                                                <input type="text" className="form-control" placeholder="Apartment,suit,unit etc (optional)" />
                                                <small className="form-text text-muted">Your shipping address should not contain a PO box.</small>
                                            </div>

                                            <div className="form-group checkout-all-input-container">
                                                <input type="text" className="form-control" placeholder="Town/City" />
                                            </div>



                                            <div className="form-group city-dorp-container checkout-all-input-container" >
                                                <div style={{ width: '48%' }}>

                                                    <select name="state" style={{ width: '100%', padding: "10px 0px", border: 'solid 1px #8080805e;', borderRadius: "5px" }}  >
                                                        <option value="" selected disabled hidden>Choose State</option>
                                                        {data.map((e) => e)}
                                                    </select>
                                                </div>
                                                <input type="number" className="form-control" placeholder="Postcode / Zip:" style={{ width: '48%' }} />
                                            </div>

                                            <div className="form-group checkout-all-input-container">
                                                <input type="Number" className="form-control" placeholder="Phone" />
                                            </div>

                                            <div className="form-group form-check checkout-all-input-container radio-send-me-btn">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Send me filter change reminders and order updates via text*</label>
                                            </div>


                                            <div className='shipping-h'>
                                                <h4>Billing Information</h4>
                                            </div>

                                            <div className='checkout-all-input-container shipping-billing-yes-no-cobtainer'>
                                                <p>Shipping and billing address the same?</p>

                                                <div style={{ display: "flex", gap: "10px" }} >
                                                    <div className="form-check yes-radio ">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="yes" defaultChecked />
                                                        <label className="form-check-label" htmlFor="yes">
                                                            yes
                                                        </label>
                                                    </div>
                                                    <div className="form-check no-radio">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="No" />
                                                        <label className="form-check-label" htmlFor="No">

                                                            No
                                                        </label>
                                                    </div>

                                                </div>

                                            </div>


                                            <div className='payment-detail-h'>
                                                <h4>Payment Details</h4>
                                            </div>

                                            <div className='checkout-all-input-container secure-payment-container'>
                                                <span className="material-symbols-outlined">
                                                    shield_lock
                                                </span>

                                                <p>Secure credit card payment. This is a secure 128-byt SSL encrypted
                                                </p>
                                            </div>
                                            <div className='checkout-all-input-container'>
                                                <img src={checkoutCards}></img>
                                            </div>

                                            <div className="form-group checkout-all-input-container" style={{ display: "flex", justifyContent: "space-between" }} >
                                                <div className='card-num-exp-date-container'>
                                                    <label >Card number</label>
                                                    <input type="text" className="form-control" placeholder="1234 1234 1234 1234" />
                                                </div>

                                                <div className='card-num-exp-date-container'>
                                                    <label >Expiration date</label>
                                                    <input type="date" className="form-control" placeholder="Last Name" />
                                                </div>

                                            </div>

                                            <div className='order-place-btn-container' style={{ display: 'flex', justifyContent: "center" }}>
                                                <button>Order Place</button>
                                            </div>


                                        </form>



                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>




                {/* /////////////////////footer//////////////// */}
                <Footer />
            </>
        </>
    )
}

export default CheckOut