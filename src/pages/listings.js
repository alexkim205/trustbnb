import React, { Component, Fragment } from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import { Section } from '../components/section'
import Layout from '../components/layout'
import FullWidthSection from '../components/full-width-section'
import TextSection from '../components/text-section'
import Grid from '../components/grid'
import ListingsGridSection from '../components/listings-grid-section'
import CircleGrid from '../components/circle-grid'
import CircleGridSection from '../components/circle-grid-section'
import UList from '../components/list'
import SEO from '../components/seo'
import { SpacedHr, HalfSpacedHr } from '../components/spaced-hr'

class Listings extends Component {

  render() {
    const {
      apartment,
      home1, home2, home3, home4, home5, home6, home7,
    } = this.props.data
    console.log(this.props.data)
    return (
      <Layout>
        <SEO title="Listings"/>
        <Section>
          <h1>Recent Rentals</h1>
          <h6>These property owners are currently earning substantially higher
            rental income with BV Rental Networks.</h6>
        </Section>
        <HalfSpacedHr/>
        {/* Header Image */}
        <FullWidthSection fluidImage={apartment.childImageSharp.fluid}/>
        <SpacedHr/>
        {/* Why rent? */}
        <h2>Our Listings</h2>
        {/*<FullWidthSection fluidImage={work.childImageSharp.fluid}/>*/}
        <Grid>
          <ListingsGridSection fluidImage={home1.childImageSharp.fluid}
                               superhost={true}
                               rating={5}
                               underText="Exactly as described, great communication, clear instructions as to how to get key, etc., spotless and stylish accommodations, great value, info on local restaurants, etc. Thanks for providing a good, clean, safe, and reasonable place to stay! Recommend.- Jane"/>
          <ListingsGridSection fluidImage={home2.childImageSharp.fluid}
                               superhost={true}
                               rating={5}
                               underText="The apartment is simply perfect. Perfectly clean, well designed, great view, and cozy. Host is so kind and available at any time at the phone. I recommend this choice to everyone! Thank you very much!!! - By Illara"/>
          <ListingsGridSection fluidImage={home3.childImageSharp.fluid}
                               superhost={true}
                               rating={5}
                               underText="Host is very nice and helpful. She walked extra miles to make sure I got to the apartment when I was lost. She made sure I understand everything showed me around the house. Everything was perfect I cannot ask for more. - By Sabin"/>
          <ListingsGridSection fluidImage={home4.childImageSharp.fluid}
                               superhost={true}
                               rating={5}
                               underText="The place was spotless. We had full access to the kitchen and had a nice, clean bathroom with essentials available to us. Host was there to greet us and gave us helpful tips about the NYC and what we should see. The building was super close to metro station as well as plenty of restaurants. Parking was not an issue with plenty of free street parking close enough to our room. Thank you again for the hospitality! - By Cole"/>
          <ListingsGridSection fluidImage={home5.childImageSharp.fluid}
                               superhost={true}
                               rating={5}
                               underText="Host is super friendly, nice, courteous and helpful! Their place is very cozy, bright, stylish and clean, only a few minutes walk to the transportation, then about half-hour ride to Manhattan, very convenient location! The neighborhood has lots of food options, including Asian bakeries, just about everything we need and more!! - By Lauren"/>
          <ListingsGridSection fluidImage={home6.childImageSharp.fluid}
                               superhost={true}
                               rating={5}
                               underText="Really great value with a bright, spacious layout. Loved that there were two bathrooms, linens and towels provided, and TVs in most rooms. Location is convenient to restaurants and the subway and airport. Amazing value for the money! - Rachel"/>
          <ListingsGridSection fluidImage={home7.childImageSharp.fluid}
                               superhost={true}
                               rating={5}
                               underText="Really really nice and easy to contact. Super clean, private and welcoming. It was everything it said in the description. No regrets, wouldn’t hesitate to book again and you shouldn’t either. - Marcela"/>

        </Grid>
      </Layout>
    )
  }
}

export default Listings

export const listingsQuery = graphql`
query listingsQuery {
  home1: file(relativePath: {eq: "homes/home1.jpg"}) {
    ...fluidSmallImage
  }
  home2: file(relativePath: {eq: "homes/home2.jpg"}) {
    ...fluidSmallImage
  }
  home3: file(relativePath: {eq: "homes/home3.jpg"}) {
    ...fluidSmallImage
  }
  home4: file(relativePath: {eq: "homes/home4.jpg"}) {
    ...fluidSmallImage
  }
  home5: file(relativePath: {eq: "homes/home5.jpg"}) {
    ...fluidSmallImage
  }
  home6: file(relativePath: {eq: "homes/home6.jpg"}) {
    ...fluidSmallImage
  }
  home7: file(relativePath: {eq: "homes/home7.jpg"}) {
    ...fluidSmallImage
  }
  apartment: file(relativePath: {eq: "homes/apartment.jpg"}) {
    ...fluidLargeImage
  }
}
`