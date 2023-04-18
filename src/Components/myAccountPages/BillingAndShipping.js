import React from 'react'
import './BillingAndShipping.css'
import Header from '../Layout/Header'
import Footer from '../Footer'
import MyAccountNavLinks from './MyAccountNavLinks'
const BillingAndShipping = () => {
  return (
    <>
      {/* /////////////////////////////////////////////////Billing Addresses modal //////////////////////////////////////// */}

      <div>

        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document" >
            <div className="modal-content" >
              <div className="modal-header" >
                <div></div>
                <h5 className="modal-title" id="exampleModalLabel">Add A New Billing Address</h5>
                <button type="button" className="close modal-header-close-btn" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">

                <form>

                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="First Name:" />
                  </div>

                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Last Name:" />
                  </div>

                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Company Name(optioanl):" />
                  </div>

                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Adress 1:" />
                  </div>

                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Adress 2(optioanl):" />
                  </div>

                  <div className="form-group city-dorp-container" >
                    <input type="text" className="form-control" placeholder="City:" style={{ width: '48%' }} />

                    <div style={{ width: '48%' }}>

                      <select name="state" style={{ width: '100%', padding: "10px 0px", border: 'solid 1px #8080805e', borderRadius: "5px" }}  >
                        <option value disabled hidden>Select State</option>
                        <option value="volvo">Alabama</option>
                        <option value="saab">Alaska</option>
                        <option value="mercedes">Arizona</option>
                        <option value="audi">California</option>
                      </select>
                    </div>

                  </div>

                  <div className="form-group zip-phone-container">
                    <input type="number" className="form-control" placeholder="Zip/Postal Code:" />

                    <input type="number" className="form-control" placeholder="Phone:" />
                  </div>

                </form>




              </div>

              <div className="modal-footer" style={{ display: 'flex', justifyContent: 'center' }}>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">CANCEL</button>
                <button type="button" className="btn modal-addAdress-btn">ADD ADDRESS</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* /////////////////////////////////////////////////Billing Addresses modal end //////////////////////////////////////// */}



      {/* /////////////////////////////////////////////////Shipping Addresses modal //////////////////////////////////////// */}

      <div>

        {/* Modal */}
        <div className="modal fade" id="exampleModaltwo" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div></div>
                <h5 className="modal-title" id="exampleModalLabeltwo">Add A New Shipping Address</h5>
                <button type="button" className="close modal-header-close-btn" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>

                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="First Name:" />
                  </div>

                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Last Name:" />
                  </div>

                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Company Name(optioanl):" />
                  </div>

                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Adress 1:" />
                  </div>

                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Adress 2(optioanl):" />
                  </div>

                  <div className="form-group city-dorp-container" >


                    <input type="text" className="form-control" placeholder="City:" />

                  </div>

                  <div className="form-group zip-phone-container">

                    <div style={{ width: '48%' }}>

                      <select name="state" style={{ width: '100%', padding: "10px 0px", border: 'solid 1px #8080805e', borderRadius: "5px" }}  >
                        <option value disabled hidden>Select State</option>
                        <option value="volvo">Alabama</option>
                        <option value="saab">Alaska</option>
                        <option value="mercedes">Arizona</option>
                        <option value="audi">California</option>
                      </select>
                    </div>

                    <input type="number" className="form-control" placeholder="Zip/Postal Code:" />


                  </div>

                </form>
              </div>
              <div className="modal-footer" style={{ display: 'flex', justifyContent: 'center' }}>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">CANCEL</button>
                <button type="button" className="btn modal-addAdress-btn">ADD ADDRESS</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* /////////////////////////////////////////////////Shipping Addresses modal end //////////////////////////////////////// */}


      {/* /////////////////////////////////////////////////Credit Cards modal //////////////////////////////////////// */}


      <div>

        {/* Modal */}
        <div className="modal fade" id="exampleModalthree" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div></div>
                <h5 className="modal-title" id="exampleModalLabelthree">Modal title</h5>
                <button type="button" className="close modal-header-close-btn" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>

                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name on Card:" />
                  </div>

                  <div className="form-group">
                    <input type="number" className="form-control" placeholder="Card Number:" />
                  </div>

                  <div className="form-group">
                    <label>Expiration:</label>
                    <input type="date" className="form-control" placeholder="Company Name(optioanl):" style={{ marginBottom: '20px' }} />
                    <input type="number" className="form-control" placeholder="Security Code:" />
                  </div>

                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Adress 1:" />
                  </div>

                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Adress 2:" />
                  </div>

                  <div className="form-group city-dorp-container" >


                    <input type="text" className="form-control" placeholder="City:" />

                  </div>

                  <div className="form-group zip-phone-container">

                    <div style={{ width: '48%' }}>

                      <select name="state" style={{ width: '100%', padding: "10px 0px", border: 'solid 1px #8080805e', borderRadius: "5px" }}  >
                        <option value disabled hidden>Select State</option>
                        <option value="volvo">Alabama</option>
                        <option value="saab">Alaska</option>
                        <option value="mercedes">Arizona</option>
                        <option value="audi">California</option>
                      </select>
                    </div>

                    <input type="number" className="form-control" placeholder="Zip/Postal Code:" />


                  </div>

                </form>
              </div>
              <div className="modal-footer" style={{ display: 'flex', justifyContent: 'center' }}>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">CANCEL</button>
                <button type="button" className="btn modal-addAdress-btn">ADD PAYMENT METHOD</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* /////////////////////////////////////////////////Credit Cards modal end //////////////////////////////////////// */}

      <Header />
      {/* ///////////////////////////////////////////////// userName//////////////////////////////////////// */}
      <div className="container-fluid">
        <div className="row userName-heading-container" >
          <h1 className='userName-heading' >Hello,userName</h1>
        </div>
      </div>

      {/* ///////////////////////////////////////////////// BillingAndShipping //////////////////////////////////////// */}
      <div className="container-fluid">
        <div className="row " >
          <div className='col-xl-11' style={{ margin: '50px auto' }}>
            <div className='row' style={{ display: 'flex', justifyContent: 'space-between' }}>

              <MyAccountNavLinks />

              <div className='col-md-9 Billing-Addresses-main_container' style={{ padding: '0px 40px', }}>
                <div className='Billing-Addresses-container' >
                  <h1>Billing Addresses</h1>
                  <button className='BillingAndShipping-btn btn' type="button" data-toggle="modal" data-target="#exampleModal">
                    <i className="bi bi-plus" />Add New Address</button>
                </div>
                <div className='Shipping-Addresses-container'>
                  <h1>Shipping Addresses</h1>
                  <button className='BillingAndShipping-btn btn' type="button" data-toggle="modal" data-target="#exampleModaltwo">
                    <i className="bi bi-plus" />Add New Address
                  </button>
                </div>
                <div className='Credit-Cards-container'>
                  <h1>Credit Cards</h1>
                  <button className='BillingAndShipping-btn btn' type="button" data-toggle="modal" data-target="#exampleModalthree"><i className="bi bi-plus" />Add a Card</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ///////////////////////////////////////////////// footer//////////////////////////////////////// */}
      <Footer />
    </>


  )
}

export default BillingAndShipping