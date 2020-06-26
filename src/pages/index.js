import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Main  from  '../components/main'
import Bottom from '../components/bottom'
import Newsletter from '../containers/newsletter/newsletter';
import Banner from '../components/banner';

const IndexPage = () => (

  <Layout>
      <Banner />
      <Main />
      <Bottom />
      <Newsletter />
  </Layout>
  
)

export default IndexPage