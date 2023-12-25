import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
    <div className="container">
      <div className="row mb-5">
        <p className="col-12 text-center">
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          Copyright © All rights reserved | This template is made with{" "}
          <i className="icon-heart text-danger" aria-hidden="true" /> by{" "}
          <a href="https://colorlib.com" target="_blank" className="text-primary">
            Colorlib
          </a>
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        </p>
      </div>
      <div className="row mb-5">
        <div className="col-md-12 text-center">
          <p>
            <a href="#" className="social-item">
              <span className="icon-facebook2" />
            </a>
            <a href="#" className="social-item">
              <span className="icon-twitter" />
            </a>
            <a href="#" className="social-item">
              <span className="icon-instagram2" />
            </a>
            <a href="#" className="social-item">
              <span className="icon-linkedin2" />
            </a>
            <a href="#" className="social-item">
              <span className="icon-vimeo" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
  
  );
}

export default Footer;
