import React from 'react'
import './BuyNow.css'
import airfilter from "../assets/images/airfilter_bg\ 1.png"
import pinion from "../assets/images/pinion\ 1\ 1.png"
import Cardboard from "../assets/images/Cardboard-pleated.png"
import ltr from "../assets/images/ltr\ 4\ 1\ 1.png"
const BuyNow = () => {
  return (
   <>
   
   <div className="container-fluid">
        <div className="row shop-by-size-main-container">
          <h1>Shop By Size</h1>
          
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
   </>
  )
}

export default BuyNow