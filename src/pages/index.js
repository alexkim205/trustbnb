import React, {Component} from 'react';
import {Link, graphql} from 'gatsby';
import Img from 'gatsby-image';

import Section from '../components/section';
import Layout from '../components/layout';
import FullWidthSection from '../components/full-width-section';
import SEO from '../components/seo';
import Bio from '../components/bio';
import SpacedHr from '../components/spaced-hr';

class IndexPage extends Component {

  render() {

    // images
    const {elizabeth, michael, apartment, kitchen} = this.props.data;
    const teamImgs = [
      elizabeth.childImageSharp.fluid,
      michael.childImageSharp.fluid];
    // bios
    const {bios} = this.props.data;
    const team = bios.edges[0].node.team;

    return (
        <Layout>
          <SEO title="Home" keywords={[`real estate`, `housing`, `bv`]}/>
          <Section>
            <h1>BV Real Estate Partners</h1>
            <p>Our mission is to provide a unique home experience.</p>
          </Section>
          <FullWidthSection fluidImage={kitchen.childImageSharp.fluid}/>
          <Bio fluidPortraits={teamImgs} teamInfo={team}/>

        </Layout>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
query pageQuery {
  elizabeth: file(relativePath: {eq: "portraits/elizabeth.jpg"}) {
    ...fluidSmallImage
  }
  michael: file(relativePath: {eq: "portraits/michael.jpg"}) {
    ...fluidSmallImage
  }
  apartment: file(relativePath: {eq: "homes/apartment.jpg"}) {
    ...fluidLargeImage
  }
  kitchen: file(relativePath: {eq: "homes/kitchen.jpg"}) {
    ...fluidLargeImage
  }
  bios: allJson {
    edges {
      node {
        team {
          fname
          mname
          lname
          position
          biography
        }
      }
    }
  }
}
`;