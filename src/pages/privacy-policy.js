import React  from 'react';
import Layout from "../components/layout";
import {graphql , useStaticQuery } from 'gatsby';
import Parser from 'html-react-parser';

const PP = ()=>{

	const FetchMarkDown = useStaticQuery(graphql`
		 query PrivacyPolicyPageQuery  {
			  markdownRemark(fileAbsolutePath: {regex: "/privacy-policy.md/" }) {
			    frontmatter {
			      author 
			      date
			      title
			    }
			    html
			}
		}
	`)

	const data = {...FetchMarkDown.markdownRemark};

	return(
		<>
		  <Layout>
		  		<article className="article-contents">
				  	<div className="container">

				  		<h1 className="heading-off-pages">{data.frontmatter.title}</h1>
				  		<div className="">{Parser(data.html)}</div>

				  	</div>
			  	</article>
		  </Layout>
		</>	
	)
}

export default PP;
