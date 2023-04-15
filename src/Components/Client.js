import React from 'react'
import './Client.css'
import firstClient from "../assets/images/Ellipse 4.png"
import secondClient from "../assets/images/Ellipse 5.png"
import thirdClient from "../assets/images/Ellipse 6.png"
import star from "../assets/images/Group 38.png"
const Client = () => {
  
  return (
    <>


<div className="container-fluid" style={{ margin: '10px 0px', backgroundColor: "#ebf3f9", padding: '80px 0px', overflowX: 'hidden' }}>
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



                      <div className='col-md-4 hidden ' >
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


                      <div className='col-md-4 hidden ' >
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

                      <div className='col-md-4 hidden ' >
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



                      <div className='col-md-4 ' >
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


                      <div className='col-md-4 hidden ' >
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

                      <div className='col-md-4 hidden ' >
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



                      <div className='col-md-4 hidden ' >
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



    </>
  )
}

export default Client