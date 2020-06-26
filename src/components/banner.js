import React from 'react'
import {Link} from 'gatsby'
import FeaturedBook from '../assets/images/featured-book/featured_book.png'

const banner = () =>{
    return(
         <section className="hero hero-bg d-flex justify-content-center align-items-center">
               <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
                              <div className="hero-text">

                                   <h1 className="text-white banr-heading" data-aos="fade-up">
                                        The United States of <span className="highlight-span">America</span>
                                        <p className="paragraph-subs">The most succesful nation and people of all</p>
                                    </h1>

                                    <p data-aos="fade-up banr-subheading">
                                        Don’t ever get too interested in government activities—particularly
                                        if it involves something that appears wrong. When you investigate,
                                        it will lead to something else, then to something else, and then to
                                        something else, and then…
                                    </p>

                                   <Link to="/about-the-book" 
                                      className="custom-btn btn-bg btn mt-3"
                                      data-aos="fade-up"
                                      data-aos-delay="100">
                                      Read More
                                    </Link>
                              </div>
                        </div>

                        <div className="col-lg-6 col-12">
                          <div className="hero-image text-center" data-aos="fade-up" data-aos-delay="300">
                            <img src={FeaturedBook} 
                            className="img-fluid" alt="working girl" />
                          </div>
                        </div>
                       
                    </div>
               </div> 
         </section>
    )
}
    
export default banner;