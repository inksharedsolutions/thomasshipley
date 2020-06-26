import React,{Fragment} from 'react'
import {Link} from 'gatsby'
import authorImage from '../assets/images/author/main_author.jpg'

const main = () =>{
    return(
      <>
		     <section className="about section-padding pb-0" id="about">
		          <div className="container">
		               <div className="row">

		                    <div className="col-lg-7 mx-auto col-md-10 col-12">
		                         <div className="about-info">

		                              <h2 className="mb-4" data-aos="fade-up">
		                              	Hi ! I am <strong> TOM SHIPLEY JR.</strong> from Kingsport
		                              </h2>

		                              <p className="mb-0" data-aos="fade-up">
		                              	Thomas (Tom) Shipley Jr. is a prolific writer and has been widely published by the
		                              	trade press for general industrial, electrical, electronic, and metalworking sectors. 

		                              	<span className="author-btn-redirect"><Link 
		                              		to="/about-the-author"
		                              	>Read more </Link>
		                              	</span>
		                              </p>

		                         </div>

		                         <div className="auth-image text-center" data-aos="fade-up" data-aos-delay="200">

		                          <img 
		                          	src={authorImage} 
		                          	className="img-fluid"
		                          	alt="office" />

		                        </div>
		                        
		                    </div>
		               </div>
		          </div>
		     </section>
      </>
    )
}

export default main;