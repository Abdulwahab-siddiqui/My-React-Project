import React from 'react'
import './Header.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import mobilelogo from "../../assets/images/418x118.png"
import desLogo from "../../assets/images/1200x300.png"
const Header = () => {

    useEffect(() => {

        let tabLink = document.querySelectorAll('.drop-down-airfilters-link')
        let tabLinkContainer = document.querySelector('.drop-down-airfilters_container')

        tabLinkContainer.addEventListener('click', function (e) {
            let click = e.target.closest('.drop-down-airfilters-link');
            // console.log(click)
            if (!click) return

            tabLink.forEach((t) => {
                t.classList.remove('tabLink_acitve')
            })
            click.classList.add('tabLink_acitve')

            //////////////////////////////////////// active table body//////////////////////////////
            let tabLinkBody = document.querySelectorAll('.tabLinkBody')
            // console.log(click.dataset.tab)
            tabLinkBody.forEach(body => body.classList.remove('tabLinkBody-active'))
            document.querySelector(`.tabLinkBody--${click.dataset.tab}`).classList.add('tabLinkBody-active')

        })





    }, [])

    return (
        <>
            {/* //////////////////////////////////////////////////  first Header////////////////////////////////////////////////// */}
            <div className="container-fluid">
                <div className="row first-header-container" >
                    <h5>Save 10% with code SAVE10</h5>
                </div>
            </div>

            {/* //////////////////////////////////////////////////  second Header////////////////////////////////////////////////// */}



            <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "#3a3a3a" }}>
                <div className='nav-container col-xl-11' >
                    <div style={{ display: "flex", alignItems: "center", flexDirection: 'row-reverse', justifyContent: 'space-between' }}>

                        <form className=" my-2 my-lg-0 form-container-for-mobile">
                            <Link to={'/login-and-signup'} className='mobile' >
                                <i className="bi bi-person-circle" />
                            </Link>

                            <Link to={'/login-and-signup'} className='desk-tab'>
                                My Account
                            </Link>
                            <i className="bi bi-search"></i>

                            <Link to={'/cart'} >
                                <div className="cart">
                                    <span className="count">0</span>

                                    <i className="bi bi-handbag"></i>
                                </div>
                            </Link>

                        </form>
                        {/* width={240} height={50} */}

                        <Link className="navbar-brand navbar-brand-desk-tab" to={'/'}>
                            <img src={ desLogo}></img>
                        </Link>

                        <Link className="navbar-brand navbar-brand-mobile" to={'/'}>
                            <img src={mobilelogo} height='42px'></img>
                        </Link>


                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="material-symbols-outlined nav-icon">
                                menu
                            </span>
                        </button>
                    </div>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ul_container">





                            <li className="nav-item active ">

                                <div className="dropdown dropdown-main_container">
                                    <button className="btn  dropdown-toggle dropdown-main_btn " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: "18px" }}>
                                        Shop By Size
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ marginLeft: '-200%' }}>
                                        <div className="container-fluid">
                                            <div className="row " >
                                                <div className='col-md-3' style={{ padding: '20px' }} >
                                                    <form>
                                                        <ul className='drop-down-airfilters_container'>
                                                            <li className='drop-down-airfilters-link tabLink_acitve' data-tab="1">1″ AIR FILTERS</li>
                                                            <li className='drop-down-airfilters-link' data-tab="2">2″ AIR FILTERS</li>
                                                            <li className='drop-down-airfilters-link' data-tab="3">4″ AIR FILTERS</li>
                                                            <li className='drop-down-airfilters-link' data-tab="4">5″ AIR FILTERS</li>
                                                        </ul>
                                                    </form>
                                                </div>
                                                <div className='col-md-9' style={{ backgroundColor: "#eeeeee", padding: '20px', borderRadius: '10px' }}>

                                                    <div className='row tabLinkBody tabLinkBody--1 tabLinkBody-active  '>
                                                        <div className='col-12 most-popular-heading-container'>
                                                            <h6>Most Popular 1″ Air Filter Sizes</h6>
                                                            <div className='see-all-sizes-container'>
                                                                <Link to={'/shopbysize/p1'} > CLICK TO SEE ALL SIZES </Link>
                                                            </div>
                                                        </div>
                                                        <div className='col-sm-4 col-6 drop-down-fliter-size_conatiner'>
                                                            <ul>
                                                                <li><Link to={'/shopbybrand/:page'}>10 X 10 X 1″</Link></li>
                                                                <li><Link to={'#'}>12 X 12 X 1″</Link></li>
                                                                <li><Link to={'#'}>12 X 20 X 1″</Link></li>
                                                                <li><Link to={'#'}>12 X 24 X 1″</Link></li>
                                                                <li><Link to={'#'}>12 X 30 X 1″</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className='col-sm-4 col-6 drop-down-fliter-size_conatiner'>
                                                            <ul>
                                                                <li><Link to={'/shopbybrand/:page'}>16 X 10 X 1″</Link></li>
                                                                <li><Link to={'#'}>16 X 12 X 1″</Link></li>
                                                                <li><Link to={'#'}>16 X 20 X 1″</Link></li>
                                                                <li><Link to={'#'}>16 X 24 X 1″</Link></li>
                                                                <li><Link to={'#'}>16 X 30 X 1″</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className='col-sm-4 col-6 drop-down-fliter-size_conatiner'>
                                                            <ul>
                                                                <li><Link to={'/shopbybrand/:page'}>20 X 10 X 1″</Link></li>
                                                                <li><Link to={'#'}>20 X 12 X 1″</Link></li>
                                                                <li><Link to={'#'}>20 X 20 X 1″</Link></li>
                                                                <li><Link to={'#'}>20 X 24 X 1″</Link></li>
                                                                <li><Link to={'#'}>20 X 30 X 1″</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    {/* /////////////////////// */}

                                                    <div className='row tabLinkBody tabLinkBody--2'>
                                                        <div className='col-12 most-popular-heading-container'>
                                                            <h6>Most Popular 2″ Air Filter Sizes</h6>
                                                            <div className='see-all-sizes-container'>
                                                                <Link to={'/shopbysize/p1'} > CLICK TO SEE ALL SIZES </Link>
                                                            </div>
                                                        </div>
                                                        <div className='col-sm-4 col-6 drop-down-fliter-size_conatiner'>
                                                            <ul>
                                                                <li><Link to={'/shopbybrand/:page'}>10 X 10 X 2″</Link></li>
                                                                <li><Link to={'#'}>12 X 12 X 2″</Link></li>
                                                                <li><Link to={'#'}>12 X 20 X 2″</Link></li>
                                                                <li><Link to={'#'}>12 X 24 X 2″</Link></li>
                                                                <li><Link to={'#'}>12 X 30 X 2″</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className='col-sm-4 col-6 drop-down-fliter-size_conatiner'>
                                                            <ul>
                                                                <li><Link to={'/shopbybrand/:page'}>16 X 10 X 2″</Link></li>
                                                                <li><Link to={'#'}>16 X 12 X 2″</Link></li>
                                                                <li><Link to={'#'}>16 X 20 X 2″</Link></li>
                                                                <li><Link to={'#'}>16 X 24 X 2″</Link></li>
                                                                <li><Link to={'#'}>16 X 30 X 2″</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className='col-sm-4 col-6 drop-down-fliter-size_conatiner'>
                                                            <ul>
                                                                <li><Link to={'/shopbybrand/:page'}>20 X 10 X 2″</Link></li>
                                                                <li><Link to={'#'}>20 X 12 X 2″</Link></li>
                                                                <li><Link to={'#'}>20 X 20 X 2″</Link></li>
                                                                <li><Link to={'#'}>20 X 24 X 2″</Link></li>
                                                                <li><Link to={'#'}>20 X 30 X 2″</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* //////////////////////////// */}


                                                    {/* /////////////////////// */}

                                                    <div className='row tabLinkBody tabLinkBody--3'>
                                                        <div className='col-12 most-popular-heading-container'>
                                                            <h6>Most Popular 4″ Air Filter Sizes</h6>
                                                            <div className='see-all-sizes-container'>
                                                                <Link to={'/shopbysize/p1'} > CLICK TO SEE ALL SIZES </Link>
                                                            </div>
                                                        </div>
                                                        <div className='col-sm-4 col-6 drop-down-fliter-size_conatiner'>
                                                            <ul>
                                                                <li><Link to={'/shopbybrand/:page'}>10 X 10 X 4″</Link></li>
                                                                <li><Link to={'#'}>12 X 12 X 4″</Link></li>
                                                                <li><Link to={'#'}>12 X 20 X 4″</Link></li>
                                                                <li><Link to={'#'}>12 X 24 X 4″</Link></li>
                                                                <li><Link to={'#'}>12 X 30 X 4″</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className='col-sm-4 col-6 drop-down-fliter-size_conatiner'>
                                                            <ul>
                                                                <li><Link to={'/shopbybrand/:page'}>16 X 10 X 4″</Link></li>
                                                                <li><Link to={'#'}>16 X 12 X 4″</Link></li>
                                                                <li><Link to={'#'}>16 X 20 X 4″</Link></li>
                                                                <li><Link to={'#'}>16 X 24 X 4″</Link></li>
                                                                <li><Link to={'#'}>16 X 30 X 4″</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className='col-sm-4 col-6 drop-down-fliter-size_conatiner'>
                                                            <ul>
                                                                <li><Link to={'/shopbybrand/:page'}>20 X 10 X 2″</Link></li>
                                                                <li><Link to={'#'}>20 X 12 X 4″</Link></li>
                                                                <li><Link to={'#'}>20 X 20 X 4″</Link></li>
                                                                <li><Link to={'#'}>20 X 24 X 4″</Link></li>
                                                                <li><Link to={'#'}>20 X 30 X 4″</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* //////////////////////////// */}

                                                    {/* /////////////////////// */}

                                                    <div className='row tabLinkBody tabLinkBody--4'>
                                                        <div className='col-12 most-popular-heading-container'>
                                                            <h6>Most Popular 5″ Air Filter Sizes</h6>
                                                            <div className='see-all-sizes-container'>
                                                                <Link to={'/shopbysize/p1'} > CLICK TO SEE ALL SIZES </Link>
                                                            </div>
                                                        </div>
                                                        <div className='col-sm-4 col-6 drop-down-fliter-size_conatiner'>
                                                            <ul>
                                                                <li><Link to={'/shopbybrand/:page'}>10 X 10 X 5″</Link></li>
                                                                <li><Link to={'#'}>12 X 12 X 5″</Link></li>
                                                                <li><Link to={'#'}>12 X 20 X 5″</Link></li>
                                                                <li><Link to={'#'}>12 X 24 X 5″</Link></li>
                                                                <li><Link to={'#'}>12 X 30 X 5″</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className='col-sm-4 col-6 drop-down-fliter-size_conatiner'>
                                                            <ul>
                                                                <li><Link to={'/shopbybrand/:page'}>16 X 10 X 5″</Link></li>
                                                                <li><Link to={'#'}>16 X 12 X 5″</Link></li>
                                                                <li><Link to={'#'}>16 X 20 X 5″</Link></li>
                                                                <li><Link to={'#'}>16 X 24 X 5″</Link></li>
                                                                <li><Link to={'#'}>16 X 30 X 5″</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className='col-sm-4 col-6 drop-down-fliter-size_conatiner'>
                                                            <ul>
                                                                <li><Link to={'/shopbybrand/:page'}>20 X 10 X 5″</Link></li>
                                                                <li><Link to={'#'}>20 X 12 X 5″</Link></li>
                                                                <li><Link to={'#'}>20 X 20 X 5″</Link></li>
                                                                <li><Link to={'#'}>20 X 24 X 5″</Link></li>
                                                                <li><Link to={'#'}>20 X 30 X 5″</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* //////////////////////////// */}



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <Link to={'/shopbysize/p1'} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>

                                    Shop By Size
                                </Link> */}
                            </li>






                            <li className="nav-item active">


                                <div className="dropdown dropdown-main_container">
                                    <button className="btn  dropdown-toggle dropdown-main_btn " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: "18px" }}>
                                        Shop By Brand
                                    </button>
                                    <div className="dropdown-menu brand-drop-down-brand-main_container " aria-labelledby="dropdownMenuButton" style={{ marginLeft: '-200%' }}>
                                        <div className="container-fluid">
                                            <div className="row " >
                                                <div className='col-md-3 col-6'>
                                                    <ul className='brand-drop-down-ul'>
                                                        <li> <Link to={'/brand'}>AIR BEAR</Link> </li>
                                                        <li> <Link to={'#'}>AIR DEMON</Link> </li>
                                                        <li> <Link to={'#'}>AMANA</Link> </li>
                                                        <li> <Link to={'#'}>BDP</Link> </li>
                                                        <li> <Link to={'#'}>APRILAIRE</Link> </li>

                                                    </ul>
                                                </div>

                                                <div className='col-md-3 col-6'>
                                                    <ul className='brand-drop-down-ul'>
                                                        <li> <Link to={'/brand'}>AIR BEAR</Link> </li>
                                                        <li> <Link to={'#'}>AIR DEMON</Link> </li>
                                                        <li> <Link to={'#'}>AMANA</Link> </li>
                                                        <li> <Link to={'#'}>BDP</Link> </li>
                                                        <li> <Link to={'#'}>APRILAIRE</Link> </li>

                                                    </ul>
                                                </div>

                                                <div className='col-md-3 col-6'>
                                                    <ul className='brand-drop-down-ul'>
                                                        <li> <Link to={'/brand'}>AIR BEAR</Link> </li>
                                                        <li> <Link to={'#'}>AIR DEMON</Link> </li>
                                                        <li> <Link to={'#'}>AMANA</Link> </li>
                                                        <li> <Link to={'#'}>BDP</Link> </li>
                                                        <li> <Link to={'#'}>APRILAIRE</Link> </li>

                                                    </ul>
                                                </div>

                                                <div className='col-md-3 col-6'>
                                                    <ul className='brand-drop-down-ul'>
                                                        <li> <Link to={'/brand'}>AIR BEAR</Link> </li>
                                                        <li> <Link to={'#'}>AIR DEMON</Link> </li>
                                                        <li> <Link to={'#'}>AMANA</Link> </li>
                                                        <li> <Link to={'#'}>BDP</Link> </li>
                                                        <li> <Link to={'#'}>APRILAIRE</Link> </li>

                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* <div className="dropdown" style={{ display: 'flex', alignItems: 'center' }}>
                                    <Link to={'/shopbybrand/p2'} className="dropbtn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                                        Shop By Brand
                                    </Link> */}
                                {/* <div className="dropdown-content">
                                        <div className="container-fluid">
                                            <div className="row" >
                                                <h6>FILTERBUY COMPATIBLE FILTERS FOR:</h6>
                                                <div className='hover-drop-down-main_container' >
                                                    <ul className='hover-drop-down-ul'>
                                                        <li> <Link to={'/brand'}>AIR BEAR</Link> </li>
                                                        <li> <Link to={'#'}>AIR DEMON</Link> </li>
                                                        <li> <Link to={'#'}>AMANA</Link> </li>
                                                        <li> <Link to={'#'}>BDP</Link> </li>
                                                        <li> <Link to={'#'}>APRILAIRE</Link> </li>
                                                       
                                                    </ul>

                                                    <ul className='hover-drop-down-ul'>
                                                    <li> <Link to={'#'}>AIR BEAR</Link> </li>
                                                        <li> <Link to={'#'}>AIR DEMON</Link> </li>
                                                        <li> <Link to={'#'}>AMANA</Link> </li>
                                                        <li> <Link to={'#'}>BDP</Link> </li>
                                                        <li> <Link to={'#'}>APRILAIRE</Link> </li>
                                                    </ul>

                                                    <ul className='hover-drop-down-ul'>
                                                       <li> <Link to={'#'}>AIR BEAR</Link> </li>
                                                        <li> <Link to={'#'}>AIR DEMON</Link> </li>
                                                        <li> <Link to={'#'}>AMANA</Link> </li>
                                                        <li> <Link to={'#'}>BDP</Link> </li>
                                                        <li> <Link to={'#'}>APRILAIRE</Link> </li>

                                                    </ul>

                                                    <ul className='hover-drop-down-ul'>
                                                    <li> <Link to={'#'}>AIR BEAR</Link> </li>
                                                        <li> <Link to={'#'}>AIR DEMON</Link> </li>
                                                        <li> <Link to={'#'}>AMANA</Link> </li>
                                                        <li> <Link to={'#'}>BDP</Link> </li>
                                                        <li> <Link to={'#'}>APRILAIRE</Link> </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div> */}
                                {/* </div> */}

                                {/* <Link to={'/shopbybrand/p2'} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                                    Shop By Brand
                                </Link> */}

                            </li>

                            <li className="nav-item active">

                                <Link to={'/aboutus/p3'} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                                    About Us
                                </Link>

                            </li>

                            <li className="nav-item active">
                                <Link to={'/contactus/p4'} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                                    Contact Us
                                </Link>
                            </li>

                        </ul>
                        <form className=" my-2 my-lg-0 form-container">
                            <Link to={'/login-and-signup'} >
                                My Account
                            </Link>
                            <i className="bi bi-search"></i>

                            <Link to={'/cart'} >
                                <div className="cart">
                                    <span className="count">0</span>

                                    <i className="bi bi-handbag"></i>
                                </div>
                            </Link>




                            {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                        </form>
                    </div>
                </div>
            </nav >








        </>
    )
}

export default Header