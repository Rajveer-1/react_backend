import React from 'react'
import Navbar from '../components/Navbar'
export default function Project() {
  return (
    <div className='project'>
      <Navbar/>
      <div class="row featurette">
      <div class="col-md-7 ">
        <h2 class="featurette-heading">About Me <span class="text-muted"></span></h2>
        <p class="lead">My name is Rajveer Singh and I am currently studying Computer Science in my second year at Guru Nanak Dev Engineering College in Ludhiana, Punjab, India. I am 20 years old and hail from Ahmedgarh, Punjab. My hobbies include playing cricket and watching movies. I have expertise in multiple computer languages and technologies. Apart from that My average score in my BTech for the first three semesters is 9.32 CGPA. </p>
      </div>
      <div class="col-md-5">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

      </div>
    </div>
    </div>
  )
}
