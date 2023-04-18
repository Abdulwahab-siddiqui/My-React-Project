import React from 'react'
import './LoginAndSignup.css'
import Header from './Layout/Header'
import Footer from './Footer'
const LoginAndSignup = () => {
    return (
        <>
            <Header />

            <div className="container-fluid">
                <div className="row" >

                    <div className='col-xl-8' style={{ margin: '100px auto' }}>
                        <div className='row'>


                            <div className='col-md-6 col-11 login-main-container'>
                                <h1 className='login-h'>Log In</h1>
                                <form>
                                    <div className="form-group login-container focus-none">
                                        <input type="text" className="form-control" placeholder="Email Address" />
                                    </div>

                                    <div className="form-group login-container focus-none">
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>

                                    <div className='login-btn-container'>
                                        <button className='login-btn' type='submit'>Log in</button>
                                    </div>
                                </form>

                            </div>


                            <div className='col-md-6 col-11 border-left singup-main-container'  >

                                <h1 className='signup-h'> Sign Up</h1>

                                <form>
                                    <div className="form-group signup-container focus-none">
                                        <input type="text" className="form-control" placeholder="Email Address" />
                                    </div>

                                    <div className="form-group signup-container focus-none">
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>

                                    <div className="form-group signup-container focus-none">
                                        <input type="password" className="form-control" placeholder="Confirm Password" />
                                    </div>

                                    <div className="form-group signup-container focus-none">
                                        <input type="text" className="form-control" placeholder="First Name" />
                                    </div>

                                    <div className="form-group signup-container focus-none">
                                        <input type="text" className="form-control" placeholder="Last Name" />
                                    </div>

                                    <div className='signup-btn-container'>
                                        <button className='signup-btn' type='submit' >Sign Up</button>
                                    </div>

                                </form>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* ///////////////////////////////////////////////////// footer ???????????///////////////////////////  */}


            <Footer />
        </>
    )
}

export default LoginAndSignup