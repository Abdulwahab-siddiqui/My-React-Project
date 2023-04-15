import React from 'react'
import './ShippingPolicy.css'
import Header from '../Layout/Header'
import Footer from '../Footer'
const ShippingPolicy = () => {
  return (
    <>
    <Header />
 
 {/* /////////////main section////////////// */}
 <div className="container-fluid">
     <div className="row" >
         <div className='col-12' style={{ padding: "40px 0px", backgroundColor: "#ebf5f9" }}>
             <h1 className='shipping-policy-heading' style={{ textAlign: "center" }}>Shipping Policy</h1>
         </div>
 
         <div className='col-md-10 shipping-policy-container'>
             <h5>After An Order Is Placed</h5>
             <ul>
                <li>Once the order is placed, a confirmation will be sent to your email address.</li>
             </ul>
 
             <h5>Order Processing Time</h5>
             <ul>
                <li>The normal production time would take 1-3 business days after the proof is approved.</li>
             </ul>
 
 
             <h5>Shipping Options and Cost</h5>
             <ul>
                <li>We are using the fastest way of shipping on different couriers depending on the selected delivery date of the customer.</li>
                <li>Guaranteed delivery dates are available on the order page prior to checking out.</li>
             </ul>
 
 
             <h5>Delivery Address & P.O Boxes</h5>
             <ul>
                <li>We would require a physical address instead of a PO Box.</li>
             </ul>
 
 
             <h5>International Order and Shipping Rates</h5>
             <ul>
                <li>We do not ship internationally at the moment.</li>
             </ul>
 
 
             <h5>Tracking Order</h5>
             <ul>
                <li>Once the order has been shipped, an email notification will be sent that inludes the tracking number.</li>
             </ul>

             <h5>Late Delivery, Package Lost, Missing items</h5>
             <ul>
                <li>In the event that your package is tagged as late delivery and has been shipped, please note that once the order has been shipped and in transit, any unforeseen delays - our hands are tight, and we no longer have control of the package. Please contact the courier for assistance and other options.</li>
                <li>If the package is lost, or status is delivered but not delivered, please contact the courier for assistance to file a claim. Secure the case number before ending the call.</li>
                <li>Drop us an email with order no. at support@weddingsparklersnow.com with a short description of your problem. Our sales representative will reach you within 24 hours.</li>
                <li>For Missing items and all other concerns, please drop us an email with order no. at support@weddingsparklersnow.com or you can call us directly at (281) 819-1428 and our sales representative will review the issue with a short description of your problem.</li>
             </ul>

             <h5>For Return and Refund</h5>
             <p>Please refer to the Refund/Returns Policy.</p>
 
 
 
 
 
         </div>
     </div>
 </div>
 
 {/* /////////////////////footer//////////////// */}
 <Footer />
 
 
   </>
  )
}

export default ShippingPolicy