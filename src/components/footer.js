import React,{Fragment, useEffect } from 'react'
import { withPrefix, Link } from "gatsby"
import Helmet from "react-helmet"
import MainLogo from '../assets/images/logo/main_logo.png';
import {faTwitter, faInstagram, faFacebook, faGoodreads } from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Footer extends React.Component{

 render(){

    return(
      <Fragment>
          <footer className="site-footer">
            <div className="container">
              <div className="row">

                <div className="col-lg-5 mx-lg-auto col-md-8 col-12">
                  <div className="logo-container-fx">
                      <img src={MainLogo} />
                  </div>

                  <h1 className="text-white text-center heading-markup-footer" 
                    data-aos="fade-up" 
                    data-aos-delay="100">
                    Thomas<strong> Shipley</strong> Jr.
                  </h1> 

                </div>

                <div className="col-lg-3 col-md-6 col-12 text-right mobile-footer-fx" data-aos="fade-up" data-aos-delay="200">
                  <h4 className="my-4 text-white">Contact Info</h4>

                  <p className="mb-1">
                    <i className="fa fa-phone mr-2 footer-icon"></i>
                    888-323-7009
                  </p>

                  <p>
                    <Link to="#">
                      <i className="fa fa-envelope mr-2 footer-icon"></i>
                      publish@stratton-press.com
                    </Link>
                  </p>

                </div>

                <div className="col-lg-3 col-md-6 col-12 text-right mobile-footer-fx" data-aos="fade-up" data-aos-delay="300">
                  <h4 className="my-4 text-white">Location</h4>

                  <p className="mb-1">
                    <i className="fa fa-home mr-2 footer-icon"></i> 
                    831 N Tatnall Street, Suite M #188 Wilmington, DE 19801
                  </p>
                </div>

                <div className="col-lg-4 mx-lg-auto text-center col-md-8 col-12" data-aos="fade-up" data-aos-delay="400">
                  <p className="copyright-text">Copyright &copy; Stratton Press</p>
                </div>

                <div className="col-lg-4 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="500">
                  
                  <ul className="footer-link">
                    <li><Link to="terms-and-condition">Terms & Conditions</Link></li> 
                    <li><Link to="privacy-policy">Privacy Policy</Link></li>
                  </ul>

                </div> 

                <div className="col-lg-3 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="600">
                  <nav className="social-icon text-right mobile-footer-fx">

                        <a
                          href="https://www.facebook.com/TomShipleyBooks/?ref=bookmarks"
                          target="_blank"
                          rel="noopener noreferrer" >

                          <FontAwesomeIcon
                            className='font-awesome'
                            icon={faFacebook} />

                        </a>

                        <a
                          href="https://twitter.com/strattonpress/"
                          target="_blank"
                          rel="noopener noreferrer">

                          <FontAwesomeIcon
                            className='font-awesome'
                            icon={faTwitter} />
                        </a>  

                        <a
                          href="https://www.instagram.com/strattonpress/"
                          target="_blank"
                          rel="noopener noreferrer">

                          <FontAwesomeIcon
                            className='font-awesome' 
                            icon={faInstagram} />

                        </a>

                        <a 
                          href="https://www.goodreads.com/book/show/43984100-the-united-states-of-america/"
                          target="_blank"
                          rel="noopener noreferrer">

                          <FontAwesomeIcon 
                            className='font-awesome'
                            icon={faGoodreads} />
                        </a>

                  </nav>
                </div>    
                
              </div>
            </div>
          </footer>
      </Fragment>
    )
  }
}

export default Footer;