import React, { Component } from 'react'
import { graphql } from 'gatsby'

import { Section } from '../components/section'
import Layout from '../components/layout'
import FullWidthSection from '../components/full-width-section'
import Grid from '../components/grid'
import ListingsGridSection from '../components/listings-grid-section'
import SEO from '../components/seo'
import { SpacedHr, HalfSpacedHr } from '../components/spaced-hr'

import {reviews} from '../data/reviews'

class Listings extends Component {
  render() {
    const { siteData, apartment, ...homes } = this.props.data
    // console.log(homes)
    return (
      <Layout>
        <SEO title="Rental Partners" />
        <Section>
          <h1>Rental Partners</h1>
          <h6>
            These property owners are currently earning guaranteed monthly
            rental income with {siteData.siteMetadata.title}
          </h6>
        </Section>
        <HalfSpacedHr />
        {/* Header Image */}
        <FullWidthSection fluidImage={apartment.childImageSharp.fluid} />
        <SpacedHr />
        {/* Why rent? */}
        <h2>Selected Partners</h2>
        {/*<FullWidthSection fluidImage={work.childImageSharp.fluid}/>*/}
        <Grid>
          {homes &&
            Object.keys(homes).map((key, i) =>(
              <ListingsGridSection
                fluidImage={homes[key].childImageSharp.fluid}
                superhost={true}
                rating={5}
                underText={reviews[i]}
              />
            ))}
        </Grid>
      </Layout>
    )
  }
}

export default Listings

export const listingsQuery = graphql`
  query listingsQuery {
    siteData: site {
      siteMetadata {
        title
        officialTitle
      }
    }
    home1: file(relativePath: { eq: "homes/home1.jpg" }) {
      ...fluidSmallImage
    }
    home2: file(relativePath: { eq: "homes/home2.jpg" }) {
      ...fluidSmallImage
    }
    home3: file(relativePath: { eq: "homes/home3.jpg" }) {
      ...fluidSmallImage
    }
    home4: file(relativePath: { eq: "homes/home4.jpg" }) {
      ...fluidSmallImage
    }
    home5: file(relativePath: { eq: "homes/home5.jpg" }) {
      ...fluidSmallImage
    }
    home6: file(relativePath: { eq: "homes/home6.jpg" }) {
      ...fluidSmallImage
    }
    home7: file(relativePath: { eq: "homes/home7.jpg" }) {
      ...fluidSmallImage
    }
    home8: file(relativePath: { eq: "homes/home8.jpg" }) {
      ...fluidSmallImage
    }
    home9: file(relativePath: { eq: "homes/home9.jpg" }) {
      ...fluidSmallImage
    }
    home10: file(relativePath: { eq: "homes/home10.jpg" }) {
      ...fluidSmallImage
    }
    home11: file(relativePath: { eq: "homes/home11.jpg" }) {
      ...fluidSmallImage
    }
    home12: file(relativePath: { eq: "homes/home12.jpg" }) {
      ...fluidSmallImage
    }
    home13: file(relativePath: { eq: "homes/home13.jpg" }) {
      ...fluidSmallImage
    }
    home14: file(relativePath: { eq: "homes/home14.jpg" }) {
      ...fluidSmallImage
    }
    apartment: file(relativePath: { eq: "homes/apartment.jpg" }) {
      ...fluidLargeImage
    }
  }
`
