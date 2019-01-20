import React, {Component} from 'react';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Section from './section';
import colors from '../styles/colors';

const GridItem = styled.div`
  p {
    .grid-title {
      font-weight: 700;
    }
    font-size: 15px;
  }
  width: 32.5%;
  @media (max-width: 768px) {
    width: 49%;
  }
  @media (max-width: 545px) {
    width: 100%;
  }
`;

const Body = styled.div`
  margin: 12px 0;
`;

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

class GridSection extends Component {

  render() {
    const {fluidImage, underTitle, underText} = this.props;
    console.log(fluidImage);
    return (
        <GridItem>
          <StyledImg fluid={fluidImage}/>
          <Body>
          <p>
            <span className="grid-title">{underTitle}</span>.{'   '}{underText}
          </p>
          </Body>
        </GridItem>
    );
  }
}

GridSection.propTypes = {
  fluidImage: PropTypes.object.isRequired,
  underTitle: PropTypes.string,
  underText: PropTypes.string,
};

GridSection.defaultProps = {
  underTitle: '',
  underText: '',
};

export default GridSection;