import React from 'react'
import Header from '../Layout/Header'
import './AccountSettings.css'
import Footer from '../Footer'
import MyAccountNavLinks from './MyAccountNavLinks'
const AccountSettings = () => {
    return (
        <>
            <Header />

            {/* ///////////////////////////////////////////////// userName//////////////////////////////////////// */}
            <div className="container-fluid">
                <div className="row userName-heading-container" >
                    <h1 className='userName-heading' >Hello,userName</h1>
                </div>
            </div>

            {/* ///////////////////////////////////////////////// AccountSettings //////////////////////////////////////// */}
            <div className="container-fluid">
                <div className="row " >
                    <div className='col-xl-11' style={{ margin: '50px auto' }}>
                        <div className='row' style={{ display: 'flex', justifyContent: 'space-between' }}>

                            <MyAccountNavLinks />

                            <div className='col-md-9' style={{ padding: '0px 10px', }}>
                                <h1 className='settings-heading'>Account Settings</h1>
                                <div style={{ padding: '10px' }}>
                                    <div>
                                        <form className='account-setting-container'>
                                            <div className='email-adress-container' >
                                                <h5>Email Adress</h5>
                                            </div>

                                            <div className="form-group account-setting-email-input_container">
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>

                                            <div>
                                                <button type='submit'>Save</button>
                                            </div>

                                        </form>

                                    </div>


                                    <div>
                                        <form className='account-setting-change-password-container'>
                                            <div className='change-pss-h-container' >
                                                <h5>Change Password</h5>
                                            </div>

                                            <div className="form-group account-setting-email-input_container change-input">
                                                <input type="password" className="form-control" placeholder="Currnet Password" />
                                                <input type="password" className="form-control" placeholder="New Password" />
                                                <input type="password" className="form-control" placeholder="verify Password" />
                                            </div>

                                            <div className='account-setting-email-input_btn' >
                                                <button type='submit'>Save</button>
                                            </div>

                                        </form>

                                    </div>
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

export default AccountSettings