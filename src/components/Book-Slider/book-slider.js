import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookLinks from '../Book-Link/book-link';
import Slider from "react-slick"

  /*Book Slider*/
   let settings = {
      dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay : true
   }




const BookSlider = (props) =>{

	return (

		<>
		 <div className="col-lg-4 col-md-12 col-12">

		        <Slider {...settings}>
		            <div className={`frontCover`}>
		              <img src={props.imgBooksrc.front} className="img-fluid" alt="front cover"/>
		            </div>
		            <div className={`backCover`}>
		              <img src={props.imgBooksrc.back} className="img-fluid" alt="front cover"/>
		            </div>
		          </Slider>

		          <BookLinks bookInfo={props.metaBookLinks}/>
		    </div>	

		    <div className="col-lg-8 col-md-12 col-12 contents-mockup">
		      <section className="section-abt-bk">
		          { props.contents }
		      </section>
		  </div>
		</>
  	)

}

export default BookSlider;