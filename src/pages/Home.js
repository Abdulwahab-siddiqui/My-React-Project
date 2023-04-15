// import Sidebar from './Sidebar.js';
import Header from '../Components/Header.js';
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Home.css';
// import { divIcon } from 'leaflet';
import { useFormik } from 'formik';
import { ContactSchemas } from '../schemas/index';
import logo from '../assets/images/IMG_4047_MOV_AdobeExpress.gif'

import cus1 from '../assets/images/cus-1.webp';
import cus2 from '../assets/images/cus-2.webp';
import cus3 from '../assets/images/cus-3.webp';
import people from '../assets/images/people.webp';
import backgroundimg from '../assets/images/social-share.jpg'
import video from '../assets//images/New video.mp4'
import smallBus from '../assets//images/small-bus.png'
// Import Data

//i18n
// import { withTranslation } from "react-i18next";
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




let initialValues = {
    FirstName: '',
    LastName: '',
    addres: '',
    city: '',
    state: '',
    zipcode: '',
    PhoneNumber: '',
    email: '',
    service: '',
    speed: '',
    comment: ''
}

const Home = (props) => {


    /////////////////////////////////////////// 
    let entries = Object.entries(state)
    let data = entries.map((entry) => {
        let [key, val] = entry
        return <option key={val}>{val}</option>
    });
    ///////////////////////////////////////////


    let { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: ContactSchemas,

        onSubmit: async (value, action) => {

            let userFirstName = value.FirstName;
            let userLastName = value.LastName;
            let useraddres = value.addres;
            let usercity = value.city;
            let userstate = value.state;
            let userzipcode = value.zipcode;
            let userPhoneNumber = value.PhoneNumber;
            let useremail = value.email;
            let userservice = value.service;
            let userspeed = value.speed;
            let usercomment = value.comment;

            try {
                let res = await fetch("http://localhost:4700/Contact", {
                    method: "POST",
                    body: JSON.stringify({

                        FirstName: userFirstName,
                        LastName: userLastName,
                        Address: useraddres,
                        City: usercity,
                        State: userstate,
                        ZipCode: userzipcode,
                        PhoneNo: userPhoneNumber,
                        Email: useremail,
                        ServiceType: userservice,
                        PreferredSpeed: userspeed,
                        Comments: usercomment

                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                }
                )
                if (!res.ok) throw new Error("fetch failed");

                let data = await res.json();

                console.log(data);


                alert(data.message)

            } catch (err) {
                // alert(err)
                alert(err);


            }

            action.resetForm();
        }
    })
    return (

        <>
            <Header />

            {/* //////////////////////main contant//////////////////// */}
          
                {/*------------------------------------------------ video section ----------------------------------------------- */}
                <div className="container-fluid">
                    <div className="row" style={{}}>
                        <div className=" col-12 video-div">
                          
                            <video autoPlay loop muted>
                                <source src={video} type="video/mp4" />
                            </video>


                            <img className='background-im' src={backgroundimg} alt="true" />

                            <div className='power'>
                                <h1 className='video-heading'>Now powerful <br></br> internet has a <br></br>local address.</h1>
                                <h5 >The gig speed you need.</h5>
                            </div>

                        </div>
                    </div>
                </div>
                {/*------------------------------------------------ video end ----------------------------------------------- */}


                <div className='container-fluid'>
                    <div className='row'>
                        <div className='power2'>
                            <h1>Now powerful  internet has a local <br /> address.</h1>
                            <h5 >The gig speed you need.</h5>
                        </div>
                    </div>
                </div>
                {/*------------------------------------------------ Service section ----------------------------------------------- */}
                <div className="container-fluid service-container-fluid" id="service">
                    <div className="row" style={{ padding: '0px' }}>
                        <div className="col  service-main-container">
                            {/* <div className="service-heading" ><h2>Services We Provide</h2></div> */}
                            <div className="row service-container">
                                <div className=" services ">
                                    <h1>Unbundling a more reliable <br></br> internet.</h1>
                                    <h5 style={{ textAlign: 'start' }}>Our fiber optic network exceeds the capabilities of some of the biggest players in the business — and we do it all from right here in your own backyard.</h5>
                                </div>
                                <div className=" services ">

                                    <img style={{ height: '100px', width: '100px', marginTop: '40px' }} src='https://www.gatewayfiber.com/uploads/images/site/icons/connected-icon.svg'></img>
                                    <h3 style={{ color: 'black', fontWeight: 'bolder' }}>A super-simple mission.</h3>
                                    <p>Connected communities are stronger communities. To help build them, we offer a faster, more reliable internet focused on you, the customer.</p>
                                </div>
                                <div className=" services ">

                                    <img style={{ height: '100px', width: '100px', marginTop: '40px' }} src='https://www.gatewayfiber.com/uploads/images/site/icons/pricing-tables-icon.svg'></img>
                                    <h3 style={{ color: 'black', fontWeight: 'bolder' }}>A super-simple mission.</h3>
                                    <p>We have three simple plans to keep you streaming, surfing, shopping and schooling with ease.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/*------------------------------------------------ Service section end  ----------------------------------------------- */}
                {/*------------------------------------------------ About section ----------------------------------------------- */}
                <div className="container-fluid">
                    <div className="row" style={{ padding: '100px 0px', backgroundColor: '#f0f2f2' }}>
                        {/* <div className="col-12 about-bg-img"> */}
                        <div className="row about-card-main_container">
                            <h1 style={{ textAlign: 'center' }}>More whiz for less bang.</h1>
                            <h5 style={{ textAlign: 'center', marginBottom: '30px', color: 'rgb(71, 81, 88)', fontWeight: 'bolder' }}>Check your address for promotional offers.</h5>

                            <div className="first-about_container ">
                                <div className='first-about_card'>
                                    <img style={{ height: '110px', width: '110px', marginTop: '40px', color: 'black' }} src='https://www.gatewayfiber.com/uploads/images/site/icons/pricing_250.svg'></img>
                                    <h3 style={{ fontSize: '60px', color: 'white', marginTop: '5px' }}>250</h3>
                                    <p style={{}}>Mbps</p>
                                    <h3 style={{ borderTop: "solid 1px white", color: 'white', fontSize: '40px' }}> $65/mo </h3>
                                    <p id='speedp'>  SYMMETRICAL SPEEDS UP AND DOWN </p>
                                </div>

                                <h4>Available</h4>
                            </div>




                            <div className="second-about_container ">
                                <div className='second-about_card'>

                                    <img style={{ height: '110px', width: '110px', marginTop: '40px', color: 'white' }} src='https://www.gatewayfiber.com/uploads/images/site/icons/pricing_500.svg'></img>
                                    <h3 style={{ fontSize: '60px', color: 'white', marginTop: '5px' }}>500</h3>
                                    <p style={{}}>Mbps</p>
                                    <h3 style={{ borderTop: "solid 1px white", color: 'white', fontSize: '40px' }}> $75/mo </h3>
                                    <p id='speedp'>  SYMMETRICAL SPEEDS UP AND DOWN </p>
                                </div>

                                <h4>Available</h4>
                            </div>


                            <div className="third-about_container ">
                                <div className='third-about_card'>

                                    <img style={{ height: '110px', width: '110px', marginTop: '40px', color: 'white' }} src='https://www.gatewayfiber.com/uploads/images/site/icons/pricing_1000.svg'></img>
                                    <h3 style={{ fontSize: '60px', color: 'white', marginTop: '5px' }}>1 GIG</h3>
                                    <p style={{}}>Mbps</p>
                                    <h3 style={{ borderTop: "solid 1px white", color: 'white', fontSize: '40px' }}> $90/mo </h3>
                                    <p id='speedp'>  SYMMETRICAL SPEEDS UP AND DOWN </p>

                                </div>

                                <h4>Available</h4>
                            </div>


                        </div>
                        {/* customers say */}

                        {/* </div> */}
                    </div>
                </div>


                {/*------------------------------------------------NO section----------------------------------------------- */}
                <div className="container-fluid" id="Coverage">
                    <div className="row">
                        <div className="col-md-6 contact-bg-img">

                            <h1 style={{ fontSize: '200px', color: 'black', fontWeight: 'bolder', marginRight: '64px' }}>No</h1>
                            <h1 style={{ color: 'black' }}>hidden fees.<br />
                                data caps.<br />
                                contracts.<br />
                                installation fees.* </h1>
                            <p style={{ color: 'white', fontSize: '25px', marginRight: '145px' }}>*Made you look.</p>

                        </div>

                        <div className='col-md-6' style={{ padding: '0', backgroundColor: '#e0fafd' }}>
                            <div className='need-more-container' style={{ display: 'flex', justifyContent: 'center' }}>
                                <h1 style={{}}>Need more fiber <br /> for your small <br /> business diet?<br />
                                    <span>You're in luck</span>
                                </h1>

                            </div>

                            <div className='need-more-img_container' >
                                <img style={{ width: '100%' }} src={smallBus}></img>
                            </div>
                        </div>
                    </div>
                </div>

                {/*------------------------------------------------About us section---------------------------------------- */}


                <div className='container-fluid'>
                    <div className='row' style={{ margin: '20px 0px' }}>
                        <div className='col-12' style={{ marginBottom: '150px' }}>
                            <h1 className='about-heading' >About us</h1>
                            <div className='row about-container'>
                                <div className='col-md-3 about' style={{ borderLeft: 'none' }}>
                                    <h6>FOUNDED</h6>
                                    <h1>2008</h1>
                                    <p>We can't believe it either. Where does the time go?</p>
                                </div>
                                <div className='col-md-3 about'>
                                    <h6>SUCCESSFUL PROJECTS</h6>
                                    <h1>68</h1>
                                    <p>And these are just the big ones! Add a dozen or so open source projects and countless smaller jobs.</p>
                                </div>
                                <div className='col-md-3 about'>
                                    <h6>VIEWS</h6>
                                    <h1>90M+</h1>
                                    <p>That's what the analytics tell us... our projects have delighted over 90 million people!</p>
                                </div>
                                <div className='col-md-3 about'>
                                    <h6>TESTING DEVICES</h6>
                                    <h1>8</h1>
                                    <p>That's the number of testing devices on my desk right now. We're pretty thorough.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*------------------------------------------------contact section----------------------------------------------- */}




                {/* form */}
                <div className='container-fluid'>
                    <div className='row' >
                        <div className="col-12" style={{ backgroundColor: '#e8e8e8', }}>
                            <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div className="col-md-8" style={{ marginTop: 0 }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <h1 className='contact-heading' >Contact </h1>
                                    </div>
                                    <form action="true" onSubmit={handleSubmit}>
                                        <div className='f-l-name-input_container'>
                                            <div className="form-group first-input">
                                                <input type="text" className="form-control" aria-describedby placeholder="First Name" name='FirstName'
                                                    value={values.FirstName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                                {errors.FirstName && touched.FirstName ? (<p className="error">{errors.FirstName} </p>) : null}
                                            </div>
                                            <div className="form-group last-input">
                                                <input type="text" className="form-control" aria-describedby placeholder="Last Name" name='LastName'
                                                    value={values.LastName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                                {errors.LastName && touched.LastName ? (<p className="error">{errors.LastName} </p>) : null}
                                            </div>
                                        </div>
                                        <div className="form-group address-input">
                                            <input type="text" className="form-control" aria-describedby placeholder="Addres" name='addres'
                                                value={values.addres}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {errors.addres && touched.addres ? (<p className="error">{errors.addres} </p>) : null}
                                        </div>
                                        <div className="form-group city-zip-input_container" style={{ display: 'flex', justifyContent: 'space-between' }}>

                                            <div className='city-input'>


                                                <input type="text" className="form-control" aria-describedby placeholder="City" name="city"
                                                    value={values.city}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                                {errors.city && touched.city ? (<p className="error">{errors.city} </p>) : null}

                                            </div>




                                            <div className="State-dropdown">
                                                <select name="state"
                                                    value={values.state}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}>
                                                    <option value="" selected disabled hidden>Choose State</option>

                                                    {data.map((e) => e)}

                                                </select>
                                                {errors.state && touched.state ? (<p className="error">{errors.state} </p>) : null}

                                            </div>

                                            <div className='zip-input'>
                                                <input type="number" className="form-control" aria-describedby placeholder="Zipcode" name='zipcode'
                                                    value={values.zipcode}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />

                                                {errors.zipcode && touched.zipcode ? (<p className="error">{errors.zipcode} </p>) : null}
                                            </div>

                                        </div>
                                        <div className="input-group mb-3 phone-input_container">
                                            <div className='phone-input'>

                                                <input type="number" className="form-control" placeholder="Phone Number" aria-label aria-describedby name='PhoneNumber'
                                                    value={values.PhoneNumber}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                            </div>
                                            {errors.PhoneNumber && touched.PhoneNumber ? (<p className="error">{errors.PhoneNumber} </p>) : null}
                                        </div>
                                        <div className="input-group mb-3 email-input_container">
                                            <div className='email-input'>

                                                <input type="email" className="form-control" placeholder="E-Mail Address" aria-label aria-describedby name='email'
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                            </div>
                                            {errors.email && touched.email ? (<p className="error">{errors.email} </p>) : null}

                                        </div>
                                        <div className="service-speed-dropdown">
                                            <div className="service-dropdown">
                                                <label htmlFor="true" style={{ fontWeight: '900' }}>Types of Service</label>
                                                <select name="service"
                                                    value={values.service}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}>
                                                    <option value="" selected disabled hidden >Choose here</option>

                                                    <option value="Residential Service">Residential Service</option>
                                                    <option value="Business Service">Business Service</option>
                                                    <option value="other">other</option>

                                                </select>
                                                {errors.service && touched.service ? (<p className="error">{errors.service} </p>) : null}
                                            </div>
                                            <div className="speed-dropdown">
                                                <label htmlFor="true" style={{ fontWeight: '900' }}>Preferred Speed</label>
                                                <select name="speed"
                                                    value={values.speed}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}>
                                                    <option value="" selected disabled hidden >Choose here</option>

                                                    <option value="20Mbps">20Mbps</option>
                                                    <option value="30Mbps">30Mbps</option>
                                                    <option value="40Mbps">40Mbps</option>
                                                    <option value="50Mbps to 1 Gig">50Mbps to 1 Gig</option>
                                                </select>
                                                {errors.speed && touched.speed ? (<p className="error">{errors.speed} </p>) : null}
                                            </div>
                                        </div>
                                        <div className="form-group comment-area comment-input">
                                            <textarea className="form-control " rows={3} placeholder="COMMENT" name='comment'
                                                value={values.comment}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {errors.comment && touched.comment ? (<p className="error">{errors.comment} </p>) : null}
                                        </div>
                                        <div className="from-submit-btn">
                                            <button type="submit" className="btn ">SEND</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                {/*------------------------------------------------ contact section end ----------------------------------------------- */}
                {/*------------------------------------------------ FAQ section ----------------------------------------------- */}

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-8 faq-main-container'>
                            <h1>FAQ</h1>


                            <div className='faq-section'>
                                <h3>What are your areas of expertise?</h3>
                                <p>Web (frontend, server, infrastructure, you name it), app development, mobile and unique form factor, marketing analytics and all things related to user experience and design. That's a big list. We've built a lot of expertise.</p>
                            </div>



                            <div className='faq-section'>
                                <h3>What is the right project size for you?</h3>
                                <p>Great question but tough answer. We're a modestly sized studio, but comfortable tackling very big projects. We do it all the time. On the other hand, some of our favorite projects have been smaller. Let's chat and see if we're a fit!</p>
                            </div>


                            <div className='faq-section'>
                                <h3>Are you taking on new projects right now?</h3>
                                <p>Yes! And we'd love to hear from you.</p>
                            </div>


                            <div className='faq-section'>
                                <h3>What now? How much is this going to cost? When can you start?</h3>
                                <p>Once we know a little more about the project, we can give you a quick estimate. We're easy to work with, up front about cost and we're proud of an impeccable history for staying within budget. The first step is to get in touch.</p>
                            </div>


                        </div>
                    </div>
                </div>

                {/*------------------------------------------------ FAQ img end ----------------------------------------------- */}
                {/*------------------------------------------------ footer ----------------------------------------------- */}
                <footer>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 copyright-container">
                                <p className='copyright-text'> Copyright © 2020</p>


                                <img style={{ height: '50px', width: '80px' }} src={logo}></img>
                                <p className="copyright-text">Contact :
                                    <a style={{ color: 'white' }} href='tel:888-683-4887'>888-683-4887</a>

                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
                {/*------------------------------------------------ footer end ----------------------------------------------- */}
            



        </>

    )
}


export default Home;
