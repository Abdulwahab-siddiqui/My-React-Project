import React from 'react'
import './MyAccountNavLinks.css'
import { NavLink } from 'react-router-dom'
const MyAccountNavLinks = () => {
    return (
        <>

            <div className='col-md-3 nav-link-container' >
                <NavLink to={'/orders'} style={{marginTop:'47px'}}>Filter Orders</NavLink>
                <NavLink to={'/billing-and-shipping'}>Billing & Shipping</NavLink>
                <NavLink to={'/change-password'}>Account Settings</NavLink>
                <NavLink to="#">Log out</NavLink>
            </div>
        </>
    )
}

export default MyAccountNavLinks