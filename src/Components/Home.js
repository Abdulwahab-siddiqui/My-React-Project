import React from 'react'
import './Home.css'
import Header from './Layout/Header'
import Footer from './Footer'
import BuyNow from './BuyNow'
// import Client from './Client'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import verctorOne from '../assets/images/Vector 1.png'
import verctortwo from '../assets/images/Vector 2.png'
import filterTime from '../assets/images/ft-rv-3_1 1.png'
import universal from '../assets/images/universal-af-portfolio-1-300x300 1.png'
import gateway from '../assets/images/7abbcd_b23bb3fc370143fa995b8458f72d30e9_mv2 1.png'
import filterTechnology from "../assets/images/logo 1.png"
import settings from "../assets/images/support 1.png"
import Screenshot from "../assets/images/Screenshot (8).png"
import guaranted from "../assets/images/guaranteed 1.png"
import Group from "../assets/images/Group 148.png"
import firstClient from "../assets/images/Ellipse 4.png"
import secondClient from "../assets/images/Ellipse 5.png"
import thirdClient from "../assets/images/Ellipse 6.png"
import star from "../assets/images/Group 38.png"





const Home = () => (
  <>
    <Header />
    <main>

      {/* //////////////////////////////////////////////////  slider ////////////////////////////////////////////////// */}


      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container-fluid" style={{ backgroundColor: "#ebf5f9" }}>
              <div className="row slider-main_container" >
                <div className=' slider-h-p-b_container'>
                  <div className='h'>
                    <h1>GUARANTEED <br /> COMPATIBILITY</h1>
                    <p>Ensuring that your filter fits properly in <br /> your HVAC system</p>
                    <button style={{ padding: '13px 40px', backgroundColor: '#29aae1', border: 'none', borderRadius: "5px", color: 'white' }}>SHOP NOW</button>
                  </div>

                </div>
                <div className=' slider-img-container' >
                  <img className="d-block " src={verctortwo} alt="First slide" style={{ position: "absolute", top: '95px', right: "80px" }} />
                  <img className="d-block " src={verctorOne} alt="First slide" style={{ position: "absolute", right: '-49px', top: '0' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid" style={{ backgroundColor: "#ebf5f9" }}>
              <div className="row slider-main_container" >
                <div className=' slider-h-p-b_container'>
                  <div className='h'>
                    <h1>GUARANTEED <br /> COMPATIBILITY</h1>
                    <p>Ensuring that your filter fits properly in <br /> your HVAC system</p>
                    <button style={{ padding: '13px 40px', backgroundColor: '#29aae1', border: 'none', borderRadius: "5px", color: 'white' }}>SHOP NOW</button>
                  </div>

                </div>
                <div className=' slider-img-container' >
                  <img className="d-block " src={verctortwo} alt="First slide" style={{ position: "absolute", top: '95px', right: "80px" }} />
                  <img className="d-block " src={verctorOne} alt="First slide" style={{ position: "absolute", right: '-49px', top: '0' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid" style={{ backgroundColor: "#ebf5f9" }}>
              <div className="row slider-main_container" >
                <div className=' slider-h-p-b_container'>
                  <div className='h'>
                    <h1>GUARANTEED <br /> COMPATIBILITY</h1>
                    <p>Ensuring that your filter fits properly in <br /> your HVAC system</p>
                    <button style={{ padding: '13px 40px', backgroundColor: '#29aae1', border: 'none', borderRadius: "5px", color: 'white' }}>SHOP NOW</button>
                  </div>

                </div>
                <div className=' slider-img-container' >
                  <img className="d-block " src={verctortwo} alt="First slide" style={{ position: "absolute", top: '95px', right: "80px" }} />
                  <img className="d-block " src={verctorOne} alt="First slide" style={{ position: "absolute", right: '-49px', top: '0' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true" />
          <span className="">

            <span className="material-symbols-outlined p" style={{ color: '#257fa2', fontSize: '30px', fontWeight: "bolder", marginRight: "60px" }}>
              arrow_back_ios
            </span>

          </span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon visually-hidden" aria-hidden="true" />
          <span className="">


            <span className="material-symbols-outlined n" style={{ color: '#257fa2', fontSize: '30px', fontWeight: "bolder", marginLeft: "60px" }}>
              arrow_forward_ios
            </span>

          </span>
        </button>
      </div>


      {/* //////////////////////////////////////////////////  slider  end////////////////////////////////////////////////// */}


      {/* //////////////////////////////////////////////////  shop by size ////////////////////////////////////////////////// */}


      <BuyNow />


      {/* /* //////////////////////////////////////////////////  shop by company ////////////////////////////////////////////////// */}
      <div className="container-fluid">

        <div className="row  shop-by-company-bg_img">
          <div className='col-12'>
            <h1 style={{ margin: '80px 0px' }}>Shop By Company</h1>
          </div>



          <div className='col-xl-11 companyCard-container' >

            <div className='companyCard '>
              <img src={filterTime}></img>
            </div>

            <div className='companyCard '>
              <img src={universal}></img>
            </div>

            <div className='companyCard '>
              <img src={filterTechnology}></img>
            </div>

            <div className='companyCard '>
              <img src={gateway}></img>
            </div>


            <div className='companyCard '>
              <img src={filterTime}></img>
            </div>

            <div className='companyCard '>
              <img src={universal}></img>
            </div>

            <div className='companyCard '>
              <img src={filterTechnology}></img>
            </div>

            <div className='companyCard '>
              <img src={gateway}></img>
            </div>


            <div className='companyCard '>
              <img src={filterTime}></img>
            </div>

            <div className='companyCard '>
              <img src={universal}></img>
            </div>

            <div className='companyCard '>
              <img src={filterTechnology}></img>
            </div>

            <div className='companyCard '>
              <img src={gateway}></img>
            </div>


          </div>

          <div className='col-12 explore-btn-container'  >
            <button style={{ margin: '50px 0px', padding: '10px 25px', backgroundColor: '#29aae1', border: 'none', borderRadius: "5px", color: 'white' }}>EXPLORE ALL</button>
          </div>








        </div>
      </div>

      {/* /* //////////////////////////////////////////////////  shop by company end ///////////////////////////////////////// */}



      {/* /* ////////////////////////////////////////////////// why choose us ////////////////////////////////////////////////// */}
      <div className="container-fluid">
        <div className="row ">
          <div className='col-12 why-choose-h-p_container'>
            <h1>Why Choose Us</h1>
            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda facere odio cupiditate sapiente unde natus dolor <br /> blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.</p>
          </div>

          <div className='col-xl-11 why-choose-card-container'>
            <div className='why-choose-card'>
              <img style={{ width: '100px', height: '100px' }} src={Screenshot}></img>
              <h4>Fast <br /> Processing</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda facere odio cupiditate sapiente unde natus dolor </p>
            </div>


            <div className='why-choose-card'>
              <img src={settings}></img>
              <h4>24/7<br /> Coustomer Service</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda facere odio cupiditate sapiente unde natus dolor </p>
            </div>


            <div className='why-choose-card'>
              <img src={guaranted}></img>
              <h4>Satisfaction  <br /> Guaranteed</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda facere odio cupiditate sapiente unde natus dolor </p>
            </div>
          </div>

        </div>
      </div>



      {/* /* ////////////////////////////////////////////////// why choose us  end////////////////////////////////////////////////// */}


      {/* /* ////////////////////////////////////////////////// how to  choose ////////////////////////////////////////////////// */}


      <div className="container-fluid" style={{ backgroundColor: '#ebf3f9' }}>
        <div className="row">
          <div className='col-12 how-choose-h-p_container'>
            <h1 >How To Choose The Correct Fillter</h1>
            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda facere odio cupiditate sapiente unde natus dolor <br /> blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.</p>
          </div>
          <div className='col-xl-11' style={{ margin: 'auto', marginBottom: '50px' }}>
            <div className='row'>
              <div className='col-xl-6 group-img' >
                <img src={Group}></img>
              </div>
              <div className='col-xl-6 t'>
                <p className='to-make-first-p' style={{ marginTop: '70px' }}>To make sure yor're getting right air filter for your central air system make sure you know some of the basics</p>
                <div className='how-to-counter-container' >
                  {/* <div style={{ border: 'blue solid 1px', width: '42px', borderRadius: "25px", backgroundColor: "#056fb0", marginRight: "10px" }}><h4 style={{ marginLeft: '15px', marginTop: '4px', color: "white" }}>1</h4></div> */}
                  <i className="bi bi-1-circle-fill"></i>
                  <h3 className='to-make-h'>Filter Size Or Dimensions  </h3>
                </div>
                <p className='to-make-p'>To make sure yor're getting right air filter for your central air system make sure you know some of the basics</p>



                <div className='how-to-counter-container'>
                  {/* <div style={{ border: 'blue solid 1px', width: '42px', borderRadius: "25px", backgroundColor: "#056fb0", marginRight: "10px" }}><h4 style={{ marginLeft: '15px', marginTop: '4px', color: "white" }}>2</h4></div> */}
                  <i className="bi bi-2-circle-fill"></i>
                  <h3 className='to-make-h'>Air Filter MERV Rating  </h3>
                </div>
                <p className='to-make-p'>To make sure yor're getting right air filter for your central air system make sure you know some of the basics</p>



                <div className='how-to-counter-container'>
                  {/* <div style={{ border: 'blue solid 1px', width: '42px', borderRadius: "25px", backgroundColor: "#056fb0", marginRight: "10px" }}><h4 style={{ marginLeft: '15px', marginTop: '4px', color: "white" }}>3</h4></div> */}
                  <i className="bi bi-3-circle-fill"></i>
                  <h3 className='to-make-h'>Air Filter Meblue </h3>
                </div>
                <p className='to-make-p'>To make sure yor're getting right air filter for your central air system make sure you know some of the basics</p>
              </div>
            </div>

          </div>

        </div>
      </div>
      {/* /* ////////////////////////////////////////////////// how to  choose end/////////////////////////////////////////////// */}



      {/* /* ////////////////////////////////////////////////// clients /////////////////////////////////////////////// */}

      <div className="container-fluid" style={{ margin: '10px 0px', backgroundColor: "white", padding: '80px 0px', overflowX: 'hidden' }}>
        <div className="row ">
          <div className='col-12 client-h-container'>
            <h1 style={{ textAlign: "center", marginBottom: '50px' }}>What Our Clients Are Saying About Us</h1>
          </div>
          <div className='col-xl-10' style={{ margin: 'auto', }}>


            <div id="carouselExampleIndicators" className="carousel slide" style={{ }}>
              <div className="carousel-indicators" style={{ marginBottom: '-36px' }}>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" style={{ backgroundColor: '#1478b5', borderRadius: "50%", height: "15px", width: '15px', margin: '0px 5px' }} />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" style={{ backgroundColor: '#1478b5', borderRadius: "50%", height: "15px", width: '15px', margin: '0px 5px' }} />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" style={{ backgroundColor: '#1478b5', borderRadius: "50%", height: "15px", width: '15px', margin: '0px 5px' }} />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">

                  {/* ?????????>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                  <div className="container-fluid">
                    <div className="row" style={{ display: 'flex', justifyContent: 'space-evenly' }}>

                      <div className='col-md-4' >
                        <div className='clientCard'>
                          <div style={{ display: "flex", justifyContent: 'center' }}>
                            <img src={firstClient}></img>
                          </div>

                          <p>Lorem, ipsum dolor sit amet consectetur  elit. Assumenda facere odio cupiditate sapiente unde natus dolor  blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.</p>
                          <h4 style={{ textAlign: 'center', marginTop: '5px' }}>Kelly Cranko</h4>

                          <div style={{ display: "flex", justifyContent: 'center' }}>
                            <img style={{ marginBottom: '20px' }} src={star}></img>
                          </div>

                        </div>
                      </div>



                      <div className='col-md-4 hidden' >
                        <div className='clientCard'>
                          <div style={{ display: "flex", justifyContent: 'center' }}>
                            <img src={secondClient}></img>
                          </div>

                          <p>Lorem, ipsum dolor sit amet consectetur  elit. Assumenda facere odio cupiditate sapiente unde natus dolor  blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.</p>
                          <h4 style={{ textAlign: 'center', marginTop: '5px' }}>Kelly Cranko</h4>

                          <div style={{ display: "flex", justifyContent: 'center' }}>
                            <img style={{ marginBottom: '20px' }} src={star}></img>
                          </div>

                        </div>
                      </div>


                      <div className='col-md-4 hidden' >
                        <div className='clientCard'>
                          <div style={{ display: "flex", justifyContent: 'center' }}>
                            <img src={thirdClient}></img>
                          </div>

                          <p>Lorem, ipsum dolor sit amet consectetur  elit. Assumenda facere odio cupiditate sapiente unde natus dolor  blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.</p>
                          <h4 style={{ textAlign: 'center', marginTop: '5px' }}>Kelly Cranko</h4>

                          <div style={{ display: "flex", justifyContent: 'center' }}>
                            <img style={{ marginBottom: '20px' }} src={star}></img>
                          </div>

                        </div>
                      </div>


                    </div>
                  </div>
                  {/* ????????????????????????>>>>>>>>>>>>>>> */}

                </div>
                <div className="carousel-item">

                  {/* ?????????>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                  <div className="container-fluid">
                    <div className="row" style={{ display: 'flex', justifyContent: 'space-evenly' }}>

                      <div className='col-md-4 hidden' >
                        <div className='clientCard'>
                          <div style={{ display: "flex", justifyContent: 'center' }}>
                            <img src={firstClient}></img>
                          </div>

                          <p>Lorem, ipsum dolor sit amet consectetur  elit. Assumenda facere odio cupiditate sapiente unde natus dolor  blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.</p>
                          <h4 style={{ textAlign: 'center', marginTop: '5px' }}>Kelly Cranko</h4>

                          <div style={{ display: "flex", justifyContent: 'center' }}>
                            <img style={{ marginBottom: '20px' }} src={star}></img>
                          </div>

                        </div>
                      </div>



                      <div className='col-md-4' >
                        <div className='clientCard'>
                          <div style={{ display: "flex", justifyContent: 'center' }}>
                            <img src={secondClient}></img>
                          </div>

                          <p>Lorem, ipsum dolor sit amet consectetur  elit. Assumenda facere odio cupiditate sapiente unde natus dolor  blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.</p>
                          <h4 style={{ textAlign: 'center', marginTop: '5px' }}>Kelly Cranko</h4>

                          <div style={{ display: "flex", justifyContent: 'center' }}>
                            <img style={{ marginBottom: '20px' }} src={star}></img>
                          </div>

                        </div>
                      </div>


                      <div className='col-md-4 hidden' >
                        <div className='clientCard'>
                          <div style={{ display: "flex", justifyContent: 'center' }}>
                            <img src={thirdClient}></img>
                          </div>

                          <p>Lorem, ipsum dolor sit amet consectetur  elit. Assumenda facere odio cupiditate sapiente unde natus dolor  blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.</p>
                          <h4 style={{ textAlign: 'center', marginTop: '5px' }}>Kelly Cranko</h4>

                          <div style={{ display: "flex", justifyContent: 'center' }}>
                            <img style={{ marginBottom: '20px' }} src={star}></img>
                          </div>

                        </div>
                      </div>


                    </div>
                  </div>
                  {/* ????????????????????????>>>>>>>>>>>>>>> */}

                </div>
                <div className="carousel-item">

                  {/* ?????????>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                  <div className="container-fluid">
                    <div className="row" style={{ display: 'flex', justifyContent: 'space-evenly' }}>

                      <div className='col-md-4 hidden' >
                        <div className='clientCard'>
                          <div style={{ display: "flex", justifyContent: 'center' }}>
                            <img src={firstClient}></img>
                          </div>

                          <p>Lorem, ipsum dolor sit amet consectetur  elit. Assumenda facere odio cupiditate sapiente unde natus dolor  blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.</p>
                          <h4 style={{ textAlign: 'center', marginTop: '5px' }}>Kelly Cranko</h4>

                          <div style={{ display: "flex", justifyContent: 'center' }}>
                            <img style={{ marginBottom: '20px' }} src={star}></img>
                          </div>

                        </div>
                      </div>



                      <div className='col-md-4 hidden' >
                        <div className='clientCard'>
                          <div style={{ display: "flex", justifyContent: 'center' }}>
                            <img src={secondClient}></img>
                          </div>

                          <p>Lorem, ipsum dolor sit amet consectetur  elit. Assumenda facere odio cupiditate sapiente unde natus dolor  blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.</p>
                          <h4 style={{ textAlign: 'center', marginTop: '5px' }}>Kelly Cranko</h4>

                          <div style={{ display: "flex", justifyContent: 'center' }}>
                            <img style={{ marginBottom: '20px' }} src={star}></img>
                          </div>

                        </div>
                      </div>


                      <div className='col-md-4' >
                        <div className='clientCard'>
                          <div style={{ display: "flex", justifyContent: 'center' }}>
                            <img src={thirdClient}></img>
                          </div>

                          <p>Lorem, ipsum dolor sit amet consectetur  elit. Assumenda facere odio cupiditate sapiente unde natus dolor  blanditiis nam voluptatibus excepturi, autem illo officiis quo quisquam.</p>
                          <h4 style={{ textAlign: 'center', marginTop: '5px' }}>Kelly Cranko</h4>

                          <div style={{ display: "flex", justifyContent: 'center' }}>
                            <img style={{ marginBottom: '20px' }} src={star}></img>
                          </div>

                        </div>
                      </div>


                    </div>
                  </div>
                  {/* ????????????????????????>>>>>>>>>>>>>>> */}

                </div>
              </div>

            </div>



          </div>
        </div>
      </div>





      {/* /* ////////////////////////////////////////////////// clients end/////////////////////////////////////////////// */}

      <Footer />
    </main>
  </>
)

export default Home

