import React from 'react'
import "./Footer.css"
import cards from '../assets/images/credit-card-pay-pal-icons 1.png'
import footerlogo from "../assets/images/Footer.png"
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>

            <div className="container-fluid" style={{ backgroundColor: '#000000' }}>
                <div className="row footer-main-container" style={{ width: '93%', margin: 'auto', justifyContent: 'space-between' }}>




                    <div className='col-md-4 f-s1' style={{ margin: '60px 0px' }}>
                        <div className='footer-logo'>
                            <img src={footerlogo} ></img>

                        </div>

                        <form style={{ display: 'flex', flexDirection: 'column', marginTop: '5px'}}>
                            <label className='label' style={{ color: 'white', fontSize: '18px',marginBottom:"15px" }}>Subscribe to get exclusive offers</label>
                            <input className='footer-input' placeholder='EMAIL' ></input>
                            <button type='' className='footer-signup-btn'>SIGN UP</button>
                        </form>

                    </div>





                    <div className='col-md-2 footer-link-container' >
                        <h4 >Quick Links</h4>
                        <div className='link-container' >
                            <Link to={'/'}>Home</Link>
                            <Link to={'/shopbysize/p1'}>Shop By Size</Link>
                            <Link to={'/shopbybrand/p2'}>Shop By Company</Link>
                            <Link to={'/aboutus/p3'}>About Us</Link>
                            <Link to={'/contactus/p4'}>Contact Us</Link>
                            
                        </div>

                    </div>


                    <div className='col-md-2 footer-link-container' >

                        <h4>Help</h4>
                        <div className='link-container' >
                            <Link to={'/faqs'}>FAQ</Link>
                            <Link to={'/termsofservice'}>Terms of Service</Link>
                            <Link to={'/privacy-policy'}>Privacy Policy</Link>                         
                            <Link to={'/shippingpolicy'}>Shipping Policy</Link>
                            <Link to={'/returnspolicy'}>Refunds/returns Policy</Link>
                            <Link to={'/reviews'}>Reviews</Link>
                        </div>
                    </div>



                    <div className='col-md-3 footer-link-container' >

                        <h4>Contact</h4>
                        <div className='link-container' >
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                                <div>




                                    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1_176)">
                                            <path d="M16 31.625C7.384 31.625 0.375 24.615 0.375 16C0.375 7.384 7.384 0.375 16 0.375C24.615 0.375 31.625 7.384 31.625 16C31.625 24.615 24.615 31.625 16 31.625Z" fill="white" />
                                            <path d="M16 0.75C24.409 0.75 31.25 7.591 31.25 16C31.25 24.409 24.409 31.25 16 31.25C7.591 31.25 0.75 24.409 0.75 16C0.75 7.591 7.591 0.75 16 0.75ZM16 0C7.163 0 0 7.163 0 16C0 24.836 7.163 32 16 32C24.837 32 32 24.836 32 16C32 7.163 24.837 0 16 0Z" fill="#E5E5E5" />
                                            <path d="M16 5.53418C12.27 5.53418 9.24597 8.55818 9.24597 12.2882C9.24597 12.9132 9.33097 13.5192 9.48997 14.0942C9.55397 14.3242 9.62897 14.5502 9.71597 14.7692L9.92097 15.2342L16 26.4662L22.087 15.2172L22.272 14.7982C22.364 14.5692 22.443 14.3342 22.51 14.0932C22.669 13.5182 22.754 12.9132 22.754 12.2872C22.754 8.55818 19.73 5.53418 16 5.53418ZM16 15.2142C14.35 15.2142 13.012 13.8762 13.012 12.2262C13.012 10.5762 14.35 9.23818 16 9.23818C17.65 9.23818 18.988 10.5762 18.988 12.2262C18.988 13.8772 17.65 15.2142 16 15.2142Z" fill="#32C6EA" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_176">
                                                <rect width={32} height={32} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <a href='#' style={{ marginTop: '0px', marginLeft: '10px' }}>Patricia C. Amedee 4401 waldeck Street Mexico, Tx 76051</a>
                            </div>




                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                                <div><svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1_195)">
                                        <path d="M16 31.625C7.385 31.625 0.375 24.615 0.375 16C0.375 7.384 7.385 0.375 16 0.375C24.615 0.375 31.625 7.384 31.625 16C31.625 24.615 24.615 31.625 16 31.625Z" fill="white" />
                                        <path d="M16 0.75C24.409 0.75 31.25 7.591 31.25 16C31.25 24.409 24.409 31.25 16 31.25C7.591 31.25 0.75 24.409 0.75 16C0.75 7.591 7.591 0.75 16 0.75ZM16 0C7.163 0 0 7.163 0 16C0 24.836 7.163 32 16 32C24.837 32 32 24.836 32 16C32 7.163 24.837 0 16 0Z" fill="#E5E5E5" />
                                        <path d="M21.7601 17.4088L19.8691 18.8867L23.49 23.5196L25.381 22.0416L21.7601 17.4088Z" fill="#32C6EA" />
                                        <path d="M22.5136 24.2843L18.8926 19.6513C18.8926 19.6513 16.5316 19.0983 14.8496 16.9473C13.1686 14.7963 13.2026 12.3713 13.2026 12.3713L9.58155 7.73828C9.58155 7.73828 6.15055 12.6533 11.5326 19.5393C16.9146 26.4253 22.5136 24.2843 22.5136 24.2843Z" fill="#32C6EA" />
                                        <path d="M12.4496 5.49669L10.5586 6.97461L14.1795 11.6075L16.0705 10.1295L12.4496 5.49669Z" fill="#32C6EA" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_195">
                                            <rect width={32} height={32} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                </div>
                                <a href='#' style={{ marginTop: '0px', marginLeft: '10px' }}>+99(0)101 0000 888</a>
                            </div>





                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                                <div>

                                    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1_184)">
                                            <path d="M16 31.625C7.384 31.625 0.375 24.615 0.375 16C0.375 7.384 7.384 0.375 16 0.375C24.615 0.375 31.625 7.384 31.625 16C31.625 24.615 24.615 31.625 16 31.625Z" fill="white" />
                                            <path d="M16 0.75C24.409 0.75 31.25 7.591 31.25 16C31.25 24.409 24.409 31.25 16 31.25C7.591 31.25 0.75 24.409 0.75 16C0.75 7.591 7.591 0.75 16 0.75ZM16 0C7.163 0 0 7.163 0 16C0 24.836 7.163 32 16 32C24.837 32 32 24.836 32 16C32 7.163 24.837 0 16 0Z" fill="#E5E5E5" />
                                            <path d="M6.51758 21.8151L11.7066 15.2911L6.51758 12.1191V21.8151Z" fill="#32C6EA" />
                                            <path d="M19.4996 15.7461L15.9886 17.9081L12.4716 15.7581L7.10962 22.5001H24.8666L19.4996 15.7461Z" fill="#32C6EA" />
                                            <path d="M15.9876 16.864L25.4816 11.017V9.5H6.51758V11.076L15.9876 16.864Z" fill="#32C6EA" />
                                            <path d="M20.2617 15.2755L25.4807 21.8425V12.0615L20.2617 15.2755Z" fill="#32C6EA" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_184">
                                                <rect width={32} height={32} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>


                                </div>
                                <a href='#' style={{ marginTop: '0px', marginLeft: '10px' }}>Info@yourdomain. com</a>
                            </div>

                            {/* <a href='#'>suport@weddingsparklersnow.com</a>
                            <a href='#'>4000 Greenbriar Dr.Ste.200</a>
                            <a href='#'>Stafford Texas,77477</a> */}


                        </div>
                    </div>

                    {/* <div className='' style={{ display: 'flex', margin: '20px 0px',justifyContent:"space-between",backgroundColor:'#29aae1' }}>
                        <p className='copy-p' style={{ color: 'white' }}> &copy; 2023 weddingsparklersnow.com  </p>
                        <img src={cards}></img>
                    </div> */}


                </div>
            </div>
            <div className='last-footer' style={{  margin: '0px 0px',  backgroundColor: '#056fb0',  alignItems: 'center' }}>
                <p className='copy-p' style={{ color: 'white', marginBottom: "0px" }}> &copy; 2023 Air Filter Factory. All Right Reserved <span>
                  ( Created by Abdul Wahab siddiqui) </span> </p> 
                <img src={cards}></img>
            </div>

        </>
    )
}

export default Footer