/* eslint-disable react/no-unescaped-entities */
// import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>Next.js 14 App</title>
      </Head> */}
      <Header />
      <section
  className="site-hero"
  style={{ backgroundImage: "url(/assets/images/image_x.jpg)" }}
  id="section-home"
  data-stellar-background-ratio="0.5"
>
  <div className="container">
    <div className="row intro-text align-items-center justify-content-center">
      <div className="col-md-10 text-center pt-5">
        <h1 className="site-heading site-animate">
          Hello, I'm <strong className="d-block">Tanu Singh</strong>
        </h1>
        <strong className="d-block text-white text-uppercase letter-spacing">
          and this is My Rezume
        </strong>
      </div>
    </div>
  </div>
</section>
<>
  <section className="site-section " id="section-resume">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-5">
          <div className="section-heading text-center">
            <h2>
              My <strong>Resume</strong>
            </h2>
          </div>
        </div>
        <div className="col-md-12">
          <h2 className="mb-5">Education</h2>
          <div className="resume-item mb-4">
            <span className="date">
              <span className="icon-calendar" /> March 2013 - Dec 2017
            </span>
            <h3>Masteral in Information Technology</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <span className="school">New York University</span>
          </div>
          <div className="resume-item mb-4">
            <span className="date">
              <span className="icon-calendar" /> March 2013 - Present Deacember.
            </span>
            <h3>Masteral in Information Technology</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <span className="school">New York University</span>
          </div>
          <div className="resume-item mb-4">
            <span className="date">
              <span className="icon-calendar" /> March 2013 - Present
            </span>
            <h3>Masteral in Information Technology</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <span className="school">New York University</span>
          </div>
          
        </div>
        <div className="col-md-12">
          <h2 className="mb-5">Experience</h2>
          <div className="resume-item mb-4">
            <span className="date">
              <span className="icon-calendar" /> March 2013 - Present
            </span>
            <h3>Lead Product Designer</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <span className="school">Github</span>
          </div>
          <div className="resume-item mb-4">
            <span className="date">
              <span className="icon-calendar" /> March 2013 - Present
            </span>
            <h3>Lead Product Designer</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <span className="school">Facebook</span>
          </div>
          <div className="resume-item mb-4">
            <span className="date">
              <span className="icon-calendar" /> March 2013 - Present
            </span>
            <h3>Lead Product Designer</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <span className="school">Twitter</span>
          </div>
          <div className="resume-item mb-4">
            <span className="date">
              <span className="icon-calendar" /> March 2013 - Present
            </span>
            <h3>Lead Product Designer</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <span className="school">Shopify</span>
          </div>
        </div>
      </div>
    </div>
  </section>{" "}
  {/* .section */}
  <section className="site-section" id="section-about">
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
            <a href="#" className='button-xyz'>
              <button className="btn btn-secondary px-4 py-2 btn-sm">
              Download CV
              </button>
              
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="site-section" id="section-contact">
  <div className="container">
    <div className="row">
      <div className="col-md-12 mb-5">
        <div className="section-heading text-center">
          <h2>
            Get <strong>In Touch</strong>
          </h2>
        </div>
      </div>
      <div className="col-md-7 mb-5 mb-md-0">
        <form action="" className="site-form">
          <h3 className="mb-5">Get In Touch</h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control px-3 py-4 mb-4"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control px-3 py-4 mb-4"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control px-3 py-4 mb-4"
              placeholder="Your Phone"
            />
          </div>
          <div className="form-group mb-5">
            <textarea
              className="form-control px-3 py-4"
              cols={30}
              rows={10}
              placeholder="Write a Message"
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary  px-4 py-3"
              defaultValue="Send Message"
            />
          </div>
        </form>
      </div>
      <div className="col-md-5 pl-md-5">
        <h3 className="mb-5">My Contact Details</h3>
        <ul className="site-contact-details">
          <li>
            <span className="text-uppercase">Email</span>
            tanusingh8561@gmail.com
          </li>
          <li>
            <span className="text-uppercase">Phone</span>
            +91 831 8459 998
          </li>
       
          <li>
            <span className="text-uppercase">Address</span>
            B-35, B Block<br />
            Pocket B, Sector 20 <br />
            Noida, Uttar Pradesh 201301
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

</>

      <Footer />
    </div>
  );
}
