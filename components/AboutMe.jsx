"use client"
import React from 'react';


function AboutMe() {
     const handleDownload =()=> {

      const pdfUrl = "Tanu-Singh-CV.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Mern-stack-CV.pdf"; // specify the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);  }
return(
    <div className="container">
    <div className="row mb-5 align-items-center">
      <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
        <img
          src="/assets/images/image_x.jpg"
          alt="Image placeholder"
          className="img-fluid"
        />
      </div>
      <div className="col-lg-5 pl-lg-5 ml-5">
        <div className="section-heading">
          <h2>
            About <strong>Me</strong>
          </h2>
        </div>
        <p className="lead">
        Driven and dedicated MEAN stack developer with over 2.5 years of hands-on experience in designing
and developing scalable web applications. 
        </p>
        <p className="mb-5">
        Proficient in utilizing the MERN (MongoDB, Express.js,
React, Next, Node.js) stack to deliver robust and efficient solutions. collaborate on innovative projects,
and continue to enhance my skills in a growth-oriented environment.

        </p>
        <p>
          <a
            href="#section-contact"
            className="btn btn-primary px-4 py-2 btn-sm smoothscroll"
          >
            Hire Me
          </a>
          
            <button onClick={handleDownload} className="button-xyz btn btn-secondary px-4 py-2 btn-sm">
             Download CV
            </button>
            
         
        </p>
      </div>
    </div>
  </div>
)
}
export default AboutMe;