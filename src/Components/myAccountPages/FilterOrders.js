import React from 'react'
import './FilterOrders.css'
import Header from '../Layout/Header'
import Footer from '../Footer'
import MyAccountNavLinks from './MyAccountNavLinks'
const FilterOrders = () => {
    return (
        <>
            <Header />

            {/* ///////////////////////////////////////////////// userName//////////////////////////////////////// */}
            <div className="container-fluid">
                <div className="row userName-heading-container" >
                    <h1 className='userName-heading' >Hello,userName</h1>
                </div>
            </div>


            {/* ///////////////////////////////////////////////// order//////////////////////////////////////// */}

            <div className="container-fluid">
                <div className="row " >
                    <div className='col-xl-11' style={{ margin: '50px auto' }}>
                        <div className='row' style={{ display: 'flex', justifyContent: 'space-between' }}>

                            <MyAccountNavLinks />

                            <div className='col-md-9 history-order-container' >
                                <h1 className='order-history-heading'>Order History</h1>
                                <p>No orders yet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             {/* ///////////////////////////////////////////////// footer//////////////////////////////////////// */}
             <Footer/>
        </>
    )
}

export default FilterOrders