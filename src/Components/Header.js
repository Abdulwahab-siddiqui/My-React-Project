import { React, useContext, Fragment } from "react";
import { Link } from "react-scroll";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Header.css';
import AuthContext from "../store/AuthContext";
import { useFormik } from 'formik';
import { helpSchemas } from "../schemas";
import logo from '../assets/images/6228d0_590d5d315b6f4f4f904e1b6d5840430f_mv2.gif'




let initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
  addres: '',
  message: ''

}


function Header(props) {

  let { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: helpSchemas,
    onSubmit: async (value, action) => {
      let username = value.name;
      let useremail = value.email;
      let userphoneNumber = value.phoneNumber;
      let useraddres = value.addres;
      let usermessage = value.message;
      try {
        let res = await fetch("http://localhost:4700/HelpUs", {
          method: "POST",
          body: JSON.stringify({

            Name: username,
            Email: useremail,
            PhoneNo: userphoneNumber,
            Address: useraddres,
            Message: usermessage

          }),
          headers: {
            "Content-type": "application/json"
          }
        }
        )
        if (!res.ok) throw new Error("fetch failed");

        let data = await res.json();




        alert(data.message)

      } catch (err) {
        // alert(err)
        alert(err);


      }

      action.resetForm();

    }
  })




  let ctx = useContext(AuthContext)
  return (
    <Fragment>




      {/*------------------------------------------------ modal ----------------------------------------------- */}
      {/* Button trigger modal */}
      {/* <button type="button" class="btn " data-toggle="modal" data-target="#exampleModal">
Launch demo modal
</button> */}
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog max-width" role="document " >
          <div className="modal-content">
            {/* <div class="modal-header">
<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
    </div> */}
            <div className="modal-body">
              <div className="container-fluid" style={{ margin: '50px 0px' }}>
                <div className="row">
                  <div className="col-10 modal-body_container">
                    <h5>Tell us how we can help you...</h5>
                    <form action="true" className="modal-form" onSubmit={handleSubmit}>
                      <div className="form-group m-input">
                        <input type="text" className="form-control" aria-describedby placeholder="Name" name="name" value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur} />
                        {errors.name && touched.name ? (<p className="error">{errors.name} </p>) : null}
                      </div>
                      <div className="form-group m-input">
                        <input type="email" className="form-control" id aria-describedby placeholder="Email" name="email" value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur} />
                        {errors.email && touched.email ? (<p className="error">{errors.email} </p>) : null}
                      </div>
                      <div className="form-group m-input">
                        <input type="number" className="form-control" aria-describedby placeholder="Phone" name="phoneNumber" value={values.phoneNumber}
                          onChange={handleChange}
                          onBlur={handleBlur} />
                        {errors.phoneNumber && touched.phoneNumber ? (<p className="error">{errors.phoneNumber} </p>) : null}
                      </div>
                      <div className="form-group m-input">
                        <input type="text" className="form-control" aria-describedby placeholder="Address" name="addres" value={values.addres}
                          onChange={handleChange}
                          onBlur={handleBlur} />
                        {errors.addres && touched.addres ? (<p className="error">{errors.addres} </p>) : null}
                      </div>
                      <div className="form-group m-input">
                        <textarea className="form-control" placeholder="Message" rows={3}  name="message" value={values.message}
                          onChange={handleChange}
                          onBlur={handleBlur} />
                        {errors.message && touched.message ? (<p className="error">{errors.message} </p>) : null}
                      </div>
                      <button type="submit">SEND</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <p>PO Box 2713, Parker CO 80134</p>
              <p>info@aerux.com</p>
              <p>info@aerux.com</p>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------------------------ modal end ----------------------------------------------- */}
      {/*------------------------------------------------ Header ----------------------------------------------- */}



      <nav className="navbar navbar-expand-lg navbar-light nav-main_container">
        <a className="navbar-brand" href="/home"> <img style={{height:'50px',width:'80px',marginLeft:'20px',marginTop:'10px'}} src={logo}></img> </a>
        <button style={{width:"70px"}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ justifyContent: 'center' }}>
          <div className="navbar-nav nav-container nav-menu_maincontainer">
            <div></div>
            <div className="nav-menu-container">
              <Link className="nav-item nav-link active home  a" to="/home">Home <span className="sr-only">(current)</span></Link>
              <Link className="nav-item nav-link active service   a" to='service' spy={true} smooth={true} offset={-20} duration={50}>  Service</Link>
              <Link className="nav-item nav-link active coverage  a" to='Coverage' spy={true} smooth={true} offset={50} duration={50}>Coverage </Link>
              <ul style={{ padding: 0, marginBottom: 0, listStyle: 'none' }}>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle a" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Contact
                  </a>
                  <div className="dropdown-menu conatct-drop_down" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item a" href="tel:888-683-4887">888-683-4887</a>
                    <a className="dropdown-item a" href="#"><button className="contact-us-btn" type="button" data-toggle="modal" data-target="#exampleModal">
                      Contact Us
                    </button></a>
                    <a className="dropdown-item a" href="mailto:info@aerux.com">info@aerux.com</a>
                  </div>
                </li>
              </ul>
            </div>
            <Link className="nav-item nav-link active logout " onClick={ctx.onlogout}><i style={{ marginRight: 5 }} className="bi bi-box-arrow-right"></i>Logout<span className="sr-only">(current)</span></Link>
          </div>
        </div>
      </nav>

    </Fragment>
  )
}

export default Header;