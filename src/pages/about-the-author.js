import React,{Fragment} from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import authorImg from '../assets/images/author/main_author.jpg'
import penMark from '../assets/images/author/pen_mark.jpg'
import Banner from '../components/non-front-banner'

const aboutTheAuthor = (props) => {
	return(
		<>
			<Layout>

				<Banner  title={`About the Author`} />

				<div className="container">
					<div className={`row elementContainers`}>
						<div className="col-lg-5 col-md-12 col-12">
						 	<div className={`imgAuthorContainer`}>
						 		<img src={authorImg} />
						 	</div>
						</div>

						<div className="col-lg-7 col-md-12 col-12">
							<section className={`elementsAuthorBio`}>
								
								<p>	
									 Thomas (Tom) Shipley Jr. is a prolific writer and has been widely published by the trade press for general industrial, electrical, electronic,
									 and metalworking sectors. Tom was born in Kingsport, Tennessee, served in the U.S. Navy during World War II. He was a 1950 graduate of Virginia 
									 Polytechnic Institute, Blacksburg, Virginia, with a BSEE degree with honors in electrical engineering, and memberships to Phi Kappa Phi, Eta Kappa Nu,
									 and Tau Beta Pi honorary societies. He joined the General Electric Company, September 1950, and served in engineering, corporate and field sales functions, 
									 and as corporate, district, and division application engineer.
								</p>

								 <p>
									 From 1960 to 1965, he was GE Specialty Control Department's product planner and application engineer --
									 first for computer numerical controls for machine tools, then for computer operated test and inspection systems. In 1965 he joined Monarch Machine Tool Company, Sidney,
									 Ohio, as Manager, Numerically Controlled Machine Sales, and in 1969, as International Sales Manager. 
								 </p>

								 <p>
									 In 1973, he joined AA Gage Division of U.S. Industries, Inc. 
									 as Vice President of Marketing. In 1976 he and his late wife, Virginia Doane, formed the Machine Tool Sales Company -- a complete marketing service for metal working,
									 machine automation, and computer manufacturing firms. This work has kept him abreast of technology. To further his interest in writing, he formed Shipley Marketing/Advertising,
								 	 and published a cookbook, written with his late wife, For the Good Times - The Best of Fifty Years and The Shipley's Little Cooking Guide (Shipley Publishing, 26 pgs).
								 </p>

								<p>
								  He subsequently published Man-Made Global Warming? It's Foolishness (AuthorHouse 120 pgs). He is a member of the Society of Mechanical Engineers (SME), Institute of Electrical
								  & Electronic Engineers (IEEE), and was a member of the Numerical Control Society (NCS), Abrasive Engineering Society (AES), the Economics Club of Detroit, and has spoken on
								  a wide range of subjects for them and various other associations. He was a featured speaker at the first Systems Engineering Conference held in New York City in 1964. 
								  He has been included in "Who's Who in U.S. Writers, Editors and Poets", Marquis" Who's Who in Finance and Industry", and U.S. Registry's "Who's Who in Leading American 
								  Executives". He was listed in Bradford's Directory of Marketing Research Agencies and Management Consultants in the United States and the World, the only firm specializing in
								  the metalworking field
								</p>
								
								<p className={`spanTagline`}>
								 	<span className="author-name">
								 		Thomas Shipley
								 	</span>
								 	<p class="author-tagliner">Author</p>
								</p>
							
							</section>
						</div>
					</div>

				</div>
			</Layout>
		</>
	);
}

export default aboutTheAuthor;
