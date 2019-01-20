import React, {Component} from 'react';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Section from './section';

const StyledImg = styled(Img)`
  overflow: hidden;
  border-radius: 3px;
  
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 350px; 

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;' // needed for IE9+ polyfill
  }
`;

class FullWidthSection extends Component {

  render() {
    const fluidImg = this.props.fluidImage;

    return (
        <Section>
          <StyledImg fluid={fluidImg}/>
        </Section>
    );
  }
}

FullWidthSection.propTypes = {
  fluidImage: PropTypes.object.isRequired,
  overlayText: PropTypes.string,
};

FullWidthSection.defaultProps = {
  overlayText: '',
};

export default FullWidthSection;

export const fluidLargeImage = graphql`
fragment fluidLargeImage on File {
  childImageSharp {
    fluid(maxWidth: 3000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;