import React, {useState, useEffect } from 'react'
import {Link} from 'gatsby'
import authorImage from '../assets/images/author/main_author.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/slider.scss'; 
import BookTrailer from './book-trailer'


 /*Images*/
import Book1 from '../assets/images/featured-book/featured_book.png'
import Book2 from '../assets/images/featured-book/book_2.png'
import Book3 from '../assets/images/featured-book/book_3.png'
import Book4 from '../assets/images/featured-book/book_4.png'


const  Main = () =>{

	const [mobState, __functState] = useState(false);


    useEffect(() => {
        
        window.addEventListener("resize", ()=>{ 
            __functState(window.innerWidth <= 760);
        });

      }, [mobState]); 


    var settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: (mobState) ? 1 : 3,
        slidesToScroll: 1,
     };



    return(
      <>
	  	<section className="books-slider">
			<div className="container">
					<h1>Featured Books</h1>
					
					<Slider {...settings}>
						<div className="book-wrapper-slider">
							<img src={Book1}/>
							<h3>The United States of America</h3>
							<p></p>
						</div>

						<div className="book-wrapper-slider">
							<img src={Book2}/>
							<h3>Man-Made Global Warming</h3>
						</div>

						<div className="book-wrapper-slider">
							<img src={Book3}/>
							<h3>For the</h3>
							<h3> Good Time</h3>
							<span>The Best of Fifty Years</span>
						</div>

						<div className="book-wrapper-slider">
							<img src={Book4}/>
							<h3>A Life's</h3>
							<h3>Story</h3>
						</div>
				</Slider>
			</div>
		</section>

		{/* Book Trailer */}
		<BookTrailer/>
		

		<section className="about section-padding " id="about">
			<div className="container">

					<div className="display-grid-two-col">

						<div className="auth-image text-center" data-aos="fade-up" data-aos-delay="200">

							<img 
							src={authorImage} 
							className="img-fluid"
							alt="office" />

						</div>

						<div className="about-info">
							<p className="mb-0" data-aos="fade-up">
								Thomas (Tom) Shipley Jr. is a prolific writer and has been widely published by the
								trade press for general industrial, electrical, electronic, and metalworking sectors.
							</p>

							<h2 className="heading-author" data-aos="fade-up">
								<span>Thomas</span>
								<p>Shipley</p>
								<p className="tagline-ft">Author & Writer</p>
							</h2>
						</div>
					</div>

				</div>
		</section>

      </>
    )
}

export default Main;