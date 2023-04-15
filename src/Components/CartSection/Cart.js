import React, { useEffect } from 'react'
import { useState } from 'react'
import './Cart.css'
import Header from '../Layout/Header'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import bigFilter from '../../assets/images/ltr 4 1 2.png'


const Cart = () => {



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
      <Header />

      {/* //////////////////////// */}

      <div className="container-fluid">
        <div className="row" >
          <div className='col-12 cart-main-heading'>
            <h1>Cart</h1>
          </div>

          <div className='col-xl-10 cart-product-main-container cart-for-des-tab'>
            <div className='row'>


              <div className='col-sm-8 cart-product cart-product-img-heading'>
                <h5>Product</h5>
              </div>

              <div className='col-sm-2 cart-product cart-product-quantity-heading'>
                <h5>Quantity</h5>


              </div>
              <div className='col-sm-2 cart-product cart-product-price-heading'>
                <h5>Price</h5>
              </div>

              {/* ////////// cart-product/////////// */}

              <div className='col-sm-8 cart-product cart-product-img'>
                <span className="material-symbols-outlined">
                  close
                </span>
                <img src={bigFilter} height="80px" width="80px"></img>
                <h4>Product Name</h4>
              </div>

              <div className='col-sm-2 cart-product cart-product-quantity'>

                <div className='increment-btn-container'>
                  <button type='button' onClick={decrementHandler} style={{ width: "30px", borderRadius: "5px 0px 0px 5px" }}>
                    <i className="bi bi-dash-lg"></i>
                  </button>

                  <div style={{ borderLeft: "solid 1px #80808040", borderRight: 'solid 1px #80808040' }}>
                    <input type="number" value={incrementVal} onChange={incrementValChangeHandler} style={{ width: '55px' }}></input>
                  </div>

                  <button type='button' onClick={incrementHandler} style={{ width: "30px", borderRadius: "0px 5px 5px 0px" }} >
                    <i className="bi bi-plus-lg"></i>
                  </button>
                </div>

              </div>
              <div className='col-sm-2 cart-product cart-product-price'>
                <h4>{`$${(Number(incrementVal) * 34.26).toFixed(2)}`}</h4>
              </div>

              <div className='col-12 cart-total-price-container'>
                <h3>Total Price:</h3>
                <h3 className='cart-total-price'>{`$${(Number(incrementVal) * 34.26).toFixed(2)}`}</h3>
              </div>

              <div className='col-12 cart-btn'>
                <Link to={'/checkout'}>
                  <button>CHECKOUT</button>
                </Link>

              </div>
              {/* ////////// cart-product end/////////// */}

            </div>
          </div>

        </div>
      </div>
        {/* /////////////////////footer//////////////// */}
//                 <Footer />
    </>
  )
}

export default Cart