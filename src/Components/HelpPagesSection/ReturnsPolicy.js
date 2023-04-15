import React from 'react'
import './ReturnsPolicy.css'
import Header from '../Layout/Header'
import Footer from '../Footer'
const ReturnsPolicy = () => {
    return (
        <>
            <Header />

            {/* /////////////main section////////////// */}
            <div className="container-fluid">
                <div className="row" >
                    <div className='col-12' style={{ padding: "40px 0px", backgroundColor: "#ebf5f9" }}>
                        <h1 className='returns-policy-heading' style={{ textAlign: "center" }}>Refunds/returns Policy</h1>
                    </div>

                    <div className='col-md-10 returns-policy-container'>
                        <h5>Free Shipping</h5>
                        <p>Free shipping is available on every order when shipped within the continental United States. </p>

                        <h5>Expedited Shipping</h5>
                        <p>Expedited shipping is not available at this time. We simply are not equipped to offer expedited shipping given the cost of rush shipping relative to the physical size of the air filter (they’re bulky!). In most cases, we deliver within 3-4 business days - we have factories strategically placed around the U.S. to quickly serve customers in their region! </p>


                        <h5>Shipping Outside the Continental United States</h5>
                        <p>At this time, we only ship to the continental United States. Just like expedited shipping, the cost of shipping filters internationally (or to Hawaii and Alaska) is prohibitively expensive relative to the product cost. However, we do believe our business model and filter manufacturing process is unique and aim to be expanding internationally in the future.</p>


                        <h5>Return Policy</h5>
                        <p>We stand behind all of our filters. If the filter is defective or flawed upon receipt and it’s been less than 90 days since the purchase, please contact us as soon as possible to schedule a free return or exchange. If it’s been more than 90 days since the purchase, or the return reason is not a manufacturer defect, you may incur return shipping fees - please contact us to request a return authorization.</p>


                        <h5>Order Cancellations</h5>

                        <p>If you wish to cancel your order and it has been less than 24 hours, please contact us as soon as possible with your order information readily available.

                            If the order has been placed for over 24 hours, our general return policy will take effect. If you wish to cancel an order over 24 hours after placing your order, please contact us to request a return authorization.</p>


                        <h5>Bulk Ordering</h5>
                        <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>


                        







                    </div>
                </div>
            </div>

            {/* /////////////////////footer//////////////// */}
            <Footer />


        </>
    )
}

export default ReturnsPolicy