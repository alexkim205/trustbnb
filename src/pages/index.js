import React, {Component} from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`real estate`, `housing`, `bv`]} />
    <h1>BV Real Estate Partners</h1>
    <p>A real estate company whose mission is to provide a unique home experience.</p>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage

export const pageQuery = graphql`
  query PotraitQuery {
    elizabeth: imageSharp(id: { regex: "/portraits/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
