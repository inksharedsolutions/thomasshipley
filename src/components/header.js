import PropTypes from "prop-types"
import React, {Fragment} from "react"
import { Helmet } from 'react-helmet'
import "../assets/css/aos.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/templatemo-digital-trend.css";
import "../assets/css/pages.css";
import "../assets/css/responsive.css";
import Nav from './navigation';

const Header = ({ siteTitle }) => (
   <Fragment>
   	   <Helmet>
	  	 <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans&display=swap" rel="stylesheet"></link>
	   </Helmet>
       <Nav/>
   </Fragment>
)
		
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
