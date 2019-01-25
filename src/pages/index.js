import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';

import {Section} from '../components/section';
import Layout from '../components/layout';
import FullWidthSection from '../components/full-width-section';
import TextSection from '../components/text-section';
import TextSection2 from '../components/text-section-2';
import Grid from '../components/grid';
import GridSection from '../components/grid-section';
import CircleGrid from '../components/circle-grid';
import CircleGridSection from '../components/circle-grid-section';
import UList from '../components/list';
import SEO from '../components/seo';
import Bio from '../components/bio';
import {SpacedHr, HalfSpacedHr} from '../components/spaced-hr';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPencilAlt,
  faQuoteLeft,
  faHome,
  faSignature,
  faMoneyCheckAlt,
} from '@fortawesome/free-solid-svg-icons';

import colors from '../styles/colors';

class IndexPage extends Component {

  render() {

    // images
    const {
      siteData,
      elizabeth, michael, franc, apartment, kitchen,
      rent1, rent2, rent3, rent4, rent5,
    } = this.props.data;
    console.log(this.props.data.siteData)
    const teamImgs = [
      elizabeth.childImageSharp.fluid,
      michael.childImageSharp.fluid,
      franc.childImageSharp.fluid,
    ];
    // bios
    const {bios} = this.props.data;
    const team = bios.edges[0].node.team;

    return (
        <Layout>
          <SEO title="Home" keywords={[`real estate`, `housing`, `bv`]}/>
          {/* Title */}
          <Section>
            <h1>{siteData.siteMetadata.title}</h1>
            <h6>Mission statement goes here. It should be about as long as these
              two sentences.</h6>
          </Section>
          <HalfSpacedHr/>
          {/* Header Image */}
          <FullWidthSection fluidImage={kitchen.childImageSharp.fluid}/>
          {/* About Us */}
          <TextSection2 color={colors.theme.secondary} header="Mission Statement">
            <p>
              <span className="highlight">{siteData.siteMetadata.title}&nbsp;
              is committed to helping owners maximize returns on their real
              estate, with the lowest risk.</span>

            </p>
            <p>
              The properties we lease in New Jersey are guaranteed by the
              highest credit rating and corporate reserved fund. We will take
              care of your property according to the highest standards and the
              travelers we host are carefully screened.
            </p>
            <p>
              After each stay, our team of professionals thoroughly cleans and
              performs any required maintenance on the property. Think of us as
              your ideal tenant, because that’s exactly who we are!
            </p>
          </TextSection2>
          <SpacedHr/>
          {/* Why rent? */}
          <h2>Why rent to us?</h2>
          {/*<FullWidthSection fluidImage={work.childImageSharp.fluid}/>*/}
          <Grid>
            <GridSection fluidImage={rent1.childImageSharp.fluid}
                         underTitle="Guaranteed Rental Income"
                         underText="We are a Landlord’s ideal tenant. Landlords secure the guaranteed income of a traditional lease with our corporate automatic payment system. No more late rent or worries on your mortgage payment."/>
            <GridSection fluidImage={rent3.childImageSharp.fluid}
                         underTitle="Professional Staff"
                         underText=" Our property managers and cleaning staff report any maintenance requirements immediately using our management app, making sure that any issues are addressed professionally and timely. Less wear and tear for your property."/>
            <GridSection fluidImage={rent2.childImageSharp.fluid}
                         underTitle="Highly Experienced Team"
                         underText="Over 20 years of experience in hospitality, finance, and technology."/>
            <GridSection fluidImage={rent4.childImageSharp.fluid}
                         underTitle="Legally Compliant"
                         underText="We comply with all local laws regarding property rental and zoning, and we pay all applicable taxes."/>
            <GridSection fluidImage={rent5.childImageSharp.fluid}
                         underTitle="Verified Guests"
                         underText="We screen each guest using machine learning technology and continually improve our fraud prevention program by partnering with leaders in the field."/>

          </Grid>
          <SpacedHr/>
          {/* How it works? */}
          <TextSection color={colors.theme.accent}
                       header="How it works?">
            <CircleGrid>
              <CircleGridSection
                  icon={<FontAwesomeIcon icon={faPencilAlt} size="2x"/>}
                  underTitle="Submit Form"
                  underText="Start by submitting the landlord inquiry form"
                  color={colors.theme.accent}/>
              <CircleGridSection
                  icon={<FontAwesomeIcon icon={faQuoteLeft} size="2x"/>}
                  underTitle="Free Quote"
                  underText="Our team will get in touch with you within 24 Hours"
                  color={colors.theme.accent}/>
              <CircleGridSection
                  icon={<FontAwesomeIcon icon={faHome} size="2x"/>}
                  underTitle="Property Tour"
                  underText="Schedule property tour and discuss lease terms"
                  color={colors.theme.accent}/>
              <CircleGridSection
                  icon={<FontAwesomeIcon icon={faSignature} size="2x"/>}
                  underTitle="Sign Lease"
                  underText="Sign lease agreement and we will take care of the rest!"
                  color={colors.theme.accent}/>
              <CircleGridSection
                  icon={<FontAwesomeIcon icon={faMoneyCheckAlt} size="2x"/>}
                  underTitle="Collect Rent"
                  underText="Sit back and receive ongoing rent check!"
                  color={colors.theme.accent}/>
            </CircleGrid>
          </TextSection>
          <SpacedHr/>
          <SpacedHr/>
          {/* Team */}
          <h2>Who are we?</h2>
          <Bio fluidPortraits={teamImgs} teamInfo={team}/>

        </Layout>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
query pageQuery {
  siteData: site {
    siteMetadata {
      title
      officialTitle
    }
  }
  elizabeth: file(relativePath: {eq: "portraits/elizabeth.jpg"}) {
    ...fluidSmallImage
  }
  michael: file(relativePath: {eq: "portraits/michael.jpg"}) {
    ...fluidSmallImage
  }
  franc: file(relativePath: {eq: "portraits/francisco.jpg"}) {
    ...fluidSmallImage
  }
  apartment: file(relativePath: {eq: "homes/apartment.jpg"}) {
    ...fluidLargeImage
  }
  kitchen: file(relativePath: {eq: "homes/kitchen.jpg"}) {
    ...fluidLargeImage
  }
  rent1: file(relativePath: {eq: "whyrent/rental-income.jpg"}) {
    ...fluidLargeImage
  }
  rent2: file(relativePath: {eq: "whyrent/professional-staff.jpg"}) {
    ...fluidLargeImage
  }
  rent3: file(relativePath: {eq: "whyrent/staff.jpg"}) {
    ...fluidLargeImage
  }
  rent4: file(relativePath: {eq: "whyrent/legal-compliance.jpg"}) {
    ...fluidLargeImage
  }
  rent5: file(relativePath: {eq: "whyrent/verification.jpg"}) {
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
          linkedin
        }
      }
    }
  }
}
`;