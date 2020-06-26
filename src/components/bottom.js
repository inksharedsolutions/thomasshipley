import React, {Fragment } from  'react';
import {Link} from 'gatsby';
import bottomImg from '../assets/images/bg_bottom.svg';

 const bottom = ()=>(
 	<Fragment>
	     <section className="project section-padding" id="project">
	          <div className="container-fluid">
	               <div className="row">
	                    <div className="col-lg-12 col-12">
	                    	<div className="tag-auth-container">

		                   		<h4 className="my-5 pt-3 aos-init aos-animate sub-upper-tagline" data-aos="fade-up" data-aos-delay="100">Author Qoute</h4>

		                        <h2 className="mb-5 text-center qoute-auth" data-aos="fade-up">
		           				  <i className="fa fa-quote-left quote-append"></i><span>
		           				  Please, dear reader, understand that I was considered from the 
		           				  viewpoint of some of my peers to be an educated man. </span>	
		                        </h2>

		                        <p data-aos="fade-up" data-aos-delay="400" className="aos-init aos-animate text-center">
		                        	<strong>Tom Shipley</strong><span className="mx-1">/</span>
		                        	<small>Book Author</small>
		                        </p>
		                       
	                        </div>
	                    </div>
	               </div>	
	          </div>
	     </section>
 	</Fragment>
 )

 export default bottom