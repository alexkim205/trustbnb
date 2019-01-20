import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';

import Section from '../components/section';
import Layout from '../components/layout';
import FullWidthSection from '../components/full-width-section';
import TextSection from '../components/text-section';
import Grid from '../components/grid';
import GridSection from '../components/grid-section';
import UList from '../components/list';
import SEO from '../components/seo';
import Bio from '../components/bio';
import {SpacedHr, HalfSpacedHr} from '../components/spaced-hr';

import colors from '../styles/colors';

class IndexPage extends Component {

  render() {

    // images
    const {
      elizabeth, michael, apartment, kitchen,
      nyc1, nyc2, table, work,
    } = this.props.data;
    const teamImgs = [
      elizabeth.childImageSharp.fluid,
      michael.childImageSharp.fluid];
    // bios
    const {bios} = this.props.data;
    const team = bios.edges[0].node.team;

    return (
        <Layout>
          <SEO title="Home" keywords={[`real estate`, `housing`, `bv`]}/>
          {/* Title */}
          <Section>
            <h1>BV Real Estate Partners</h1>
            <h6>Mission statement goes here. It should be about as long as these
              two sentences.</h6>
          </Section>
          <HalfSpacedHr/>
          {/* Header Image */}
          <FullWidthSection fluidImage={kitchen.childImageSharp.fluid}/>
          {/* About Us */}
          <TextSection color={colors.theme.main} header="Mission Statement">
            <p>
              <span className="highlight">BV Real Estate Partners </span>
              was born in New York as a technology driven short-term
              corporate rental company. Our mission is to cultivate a
              quality stay for our professional guests through providing a
              unique home experience.
            </p>
            <p>
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Morbi fringilla varius convallis. Etiam tincidunt tincidunt metus
              nec sollicitudin. Phasellus ac enim cursus tortor efficitur
              mollis. Quisque metus enim, mollis et malesuada quis, posuere a
              lectus. Curabitur aliquet quis magna sed aliquam. Quisque vel orci
              est. Proin imperdiet interdum dui, nec porttitor lectus mollis a.
              Cras lacinia nisi vitae justo varius pretium quis sit amet ex.
              Cras nec leo massa.
            </p>
            <p>
              Proin finibus lacus id est varius finibus. Nullam in mattis ex.
              Curabitur erat libero, hendrerit et pulvinar iaculis, mattis sed
              leo. Vestibulum porta dui in lacus vehicula, quis sagittis turpis
              bibendum. Mauris tempor ultrices posuere. Aenean rutrum convallis
              erat, eget consectetur dui ultrices et. Maecenas at pellentesque
              purus, in hendrerit lacus. Aliquam blandit lectus vitae volutpat
              congue. Suspendisse ullamcorper vel ante a pulvinar.
            </p>
          </TextSection>
          <SpacedHr/>
          {/* How Do We Work? */}
          <h2>How do we work?</h2>
          <FullWidthSection fluidImage={work.childImageSharp.fluid}/>
          <Grid>
            <GridSection fluidImage={nyc1.childImageSharp.fluid}
                         underTitle="Value 1"
                         underText="Maecenas at pellentesque purus, in hendrerit lacus. Aliquam blandit lectus vitae volutpat congue. Suspendisse ullamcorper vel ante a pulvinar."/>
            <GridSection fluidImage={nyc2.childImageSharp.fluid}
                         underTitle="Value 2"
                         underText="Donec sit amet lorem ac risus sollicitudin viverra sit amet faucibus sem. Nullam finibus tincidunt odio, at lobortis neque tincidunt vel."/>
            <GridSection fluidImage={table.childImageSharp.fluid}
                         underTitle="Value 3"
                         underText="Nulla gravida eu erat vitae tincidunt. Pellentesque sollicitudin orci a justo interdum, posuere imperdiet libero suscipit."/>
          </Grid>
          <SpacedHr/>
          {/* Why should you rent your home to us? */}
          <TextSection color={colors.theme.darkaccent}
                       header="Why should you rent your home to us?">
            <UList lis={[
              'Guaranteed long-term rental income',
              'Experienced management team',
              'Professional maintenance staff',
              'Fully insured for damage and liability',
              'Regular deep-cleaning services',

            ]}/>
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
  nyc1: file(relativePath: {eq: "misc/nyc1.jpg"}) {
    ...fluidLargeImage
  }
  nyc2: file(relativePath: {eq: "misc/nyc2.jpg"}) {
    ...fluidLargeImage
  }
  table: file(relativePath: {eq: "misc/table.jpg"}) {
    ...fluidLargeImage
  }
  work: file(relativePath: {eq: "misc/work.jpg"}) {
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