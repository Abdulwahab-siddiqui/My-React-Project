import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Size from './Components/Size';
import Brand from './Components/Brand';
import About from './Components/About';
import Contact from './Components/Contact';
import LoginAndSignup from './Components/LoginAndSignup'
import FilterOrders from './Components/myAccountPages/FilterOrders'
import BillingAndShipping from './Components/myAccountPages/BillingAndShipping';
import AccountSettings from './Components/myAccountPages/AccountSettings';
import BrandPage from './Components/Brand/BrandPage';
import { Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './Components/HelpPagesSection/PrivacyPolicy';
import Faqpage from './Components/HelpPagesSection/Faqpage';
import TermsOfService from './Components/HelpPagesSection/TermsOfService';
import ShippingPolicy from './Components/HelpPagesSection/ShippingPolicy';
import ReturnsPolicy from './Components/HelpPagesSection/ReturnsPolicy';
import Reviews from './Components/HelpPagesSection/Reviews';
import Cart from './Components/CartSection/Cart';
import CheckOut from './Components/CartSection/CheckOut'
function App() {
  return (
    <>
      <Routes>

        <Route path='/' element={<Home /> } />

        <Route path='/shopbysize/:page' element={<Size/>} />

        <Route path='/shopbybrand/:page' element={<Brand/>} />
        
        <Route path='/aboutus/:page' element={<About/>} />

        <Route path='/contactus/:page' element={<Contact/>} />

        <Route path='/login-and-signup' element={<LoginAndSignup/>} />

        <Route path='/orders' element={<FilterOrders/>} />

        <Route path='/billing-and-shipping' element={<BillingAndShipping/>} />

        <Route path='/change-password' element={<AccountSettings/>} />

        <Route path='/brand' element={<BrandPage/>} />

        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />

        <Route path='/cart' element={<Cart/>} />

        <Route path='/checkout' element={<CheckOut/>} />

        <Route path='/faqs' element={<Faqpage/>} />

        <Route path='/termsofservice' element={<TermsOfService/>} />

        <Route path='/shippingpolicy' element={<ShippingPolicy/>} />

        <Route path='/returnspolicy' element={<ReturnsPolicy/>} />

        <Route path='/reviews' element={<Reviews/>} />



      </Routes>
    </>
  );
}

export default App;
