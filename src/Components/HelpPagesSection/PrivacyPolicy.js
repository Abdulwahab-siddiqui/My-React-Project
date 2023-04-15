import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Footer'
import './PrivacyPolicy.css'
const PrivacyPolicy = () => {
    return (
        <>
            <Header />

            {/* /////////////main section////////////// */}
            <div className="container-fluid">
                <div className="row" >
                    <div className='col-12' style={{ padding: "40px 0px", backgroundColor: "#ebf5f9" }}>
                        <h1 className='Privacypage-heading' style={{ textAlign: "center" }}>Privacy Policy</h1>
                    </div>

                    <div className='col-md-10 Privacy-Policy-container'>
                        <h5>FILTERBUY, INC PRIVACY POLICY</h5>
                        <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from https://filterbuy.com (the “Site”). </p>

                        <h5>PERSONAL INFORMATION WE COLLECT</h5>
                        <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”
                            <br />
                            <br />
                            We collect Device Information using the following technologies:
                            <br />
                            <br />
                            Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.
                            <br />
                            <br />
                            “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
                            <br />
                            <br />
                            “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.
                            <br />
                            <br />
                            Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, email address, and phone number.  We refer to this information as “Order Information.”
                            <br />
                            <br />
                            When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.
                            <br />
                            <br />

                            We may collect your email address via cookies and pixels on the Website through the use of trusted third party partners. These partners may also combine your email information with other information they have access to such as a mailing address so that we may serve relevant marketing offers to you via email and direct mail. If you do not want us to collect information about you, please contact us to opt out. </p>


                        <h5>HOW DO WE USE YOUR PERSONAL INFORMATION?</h5>
                        <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).  Additionally, we use this Order Information to:
                            <br />
                            <br />
                            Communicate with you;
                            <br />
                            <br />
                            Screen our orders for potential risk or fraud; and
                            <br />
                            <br />
                            When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services
                            <br />
                            <br />
                            We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>


                        <h5>YOUR RIGHTS</h5>
                        <p>The Site is operated in the United States and intended for users located in the United States.
                            <br />
                            <br />
                            If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
                            <br />
                            <br />
                            Please note that your information will be transferred outside of Europe, including to Canada and the United States.
                            <br />
                            <br />
                            California Civil Code Section 1798.83 permits customers who are California residents to request certain information regarding our disclosure of Personal Information to third parties for their direct marketing purposes. To make such a request, contact us by email and include your name and the address to which you would like us to respond and that this is a request pursuant to the User’s California Privacy Rights.</p>


                        <h5>DATA RETENTION</h5>
                        <p>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>


                        <h5>CHANGES</h5>
                        <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>


                        <h5>CONTACT US</h5>
                        <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at info@filterbuy.com or by mail using the details provided below:</p>






                    </div>
                </div>
            </div>

            {/* /////////////////////footer//////////////// */}
            <Footer />
        </>
    )
}

export default PrivacyPolicy