import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Contact() {
  return (
    <div className='overflow-visible' style={{fontFamily:"Uni Sans"}}>
      <Navbar/>
      <h1 style={{textAlign:"center",width:"100%",margin:"auto ",position:"absolute",top:'70px'}}>
        Contact Us
      </h1>
      <div className="container py-4  "style={{width:"100%",position:"relative",top:'77px'}}>

{/* <!-- Bootstrap 5 starter form --> */}
<form id="contactForm">

  {/* <!-- Name input --> */}
  <div className="mb-3">
    <label className="form-label" htmlFor="name">Name</label>
    <input className="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
    <div className="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
  </div>

  {/* <!-- Email address input --> */}
  <div className="mb-3">
    <label className="form-label" htmlFor="emailAddress">Email Address</label>
    <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required, email" />
    <div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
    <div className="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
  </div>

  {/* <!-- Message input --> */}
  <div className="mb-3">
    <label className="form-label" htmlFor="message">Message</label>
    <textarea className="form-control" id="message" type="text" placeholder="Message" data-sb-validations="required"></textarea>
    <div className="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
  </div>

  {/* <!-- Form submissions success message --> */}
  <div className="d-none" id="submitSuccessMessage">
    <div className="text-center mb-3">Form submission successful!</div>
  </div>

  {/* <!-- Form submissions error message --> */}
  <div className="d-none" id="submitErrorMessage">
    <div className="text-center text-danger mb-3">Error sending message!</div>
  </div>

  {/* <!-- Form submit button --> */}
  <div className="d-grid" style={{width:"19%",margin:"auto"}}>
    <button className="btn btn-primary btn-lg" type="submit">Submit</button>
  </div>

</form>
<div className="map my-2" style={{margin:"auto",width:"100%"}}>
<iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1388.6904293457928!2d75.82543058916612!3d30.678986467558342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39107bc9c1f3b79b%3A0x8b4ef494182e8019!2sSidhu%20Coaching%20Centre!5e0!3m2!1sen!2sin!4v1682606747991!5m2!1sen!2sin" width="600" height="450" style={{border:"0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>

<Footer/>
    </div>
  )
}
