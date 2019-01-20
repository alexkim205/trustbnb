import React, {Component, Fragment} from 'react';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BiosWrapper = styled.div`
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  // background-color: pink;
  @media (max-width: 768px) {
    margin-left: 12px;
    margin-right: 12px;
  }
`;

const BioWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.reverseOrder ? 'row' : 'row-reverse'};
  margin: 24px 0 0 0;
  background-color: white;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const Picture = styled.div`
  width: 50%;
  max-width: 250px;
  max-height: 290px;
  border-radius: 3px;
  overflow: hidden;
  .gatsby-image-wrapper > div {
    width: 250px !important;
    height: 290px !important;
    padding: 0 !important;
  }
  @media (max-width: 768px) {
    width: 50%;
    margin: 0 0 20px 0;
    max-width: 220px;
    max-height: 280px;
    .gatsby-image-wrapper > div {
      width: 220px !important;
      height: 280px !important;
    }
  }
  @media (max-width: 425px) {
    min-width: 220px;
    width: 70%;
    margin: 0 auto 20px auto;
    max-width: 100%;
    max-height: 100%;
    .gatsby-image-wrapper {
      &>div {
        width: 100% !important;
        height: 320px !important;
      }
      &>img {
        object-position: center top;
      }
    }
  }
`;

const Content = styled.div`
  max-width: 700px;
  height: 233px;
  overflow: scroll;
  margin: auto 0;
  padding: 0 33px;
  text-align: ${props => props.reverseOrder ? 'left' : 'right'};
  display: flex;
  flex-direction: column;
  h3 {
    margin: 0;
  }
  small {
    font-style: italic;
    margin-bottom: 5px;
  }
  p {
      font-size: 15px;
      line-height: 1.55em;
    }
  
  @media (max-width: 768px) {
    flex: 1;
    text-align: left;
    padding: 0 20px;
    p {
      line-height: 1.4em;
    }
  }
  @media (max-width: 425px) {
    width: 100%;
    h3, small { text-align: center;}
  }
`;

class Bio extends Component {
  render() {
    const {fluidPortraits, teamInfo} = this.props;

    return (
        <BiosWrapper>
          {fluidPortraits && teamInfo && fluidPortraits.map((fluidImg, i) => {
            const {fname, mname, lname, position, biography} = teamInfo[i];
            return (
                <BioWrapper key={i} reverseOrder={i % 2 === 0}>
                  <Picture>
                    <Img fluid={fluidImg}/>
                  </Picture>
                  <Content reverseOrder={i % 2 === 0}>
                    <h3>{fname} {mname} {lname}</h3>
                    <small>{position}</small>
                    <p>{biography}</p>
                  </Content>
                </BioWrapper>
            );
          })}
        </BiosWrapper>
    );
  }
}

Bio.propTypes = {
  fluidPortraits: PropTypes.array.isRequired,
  teamInfo: PropTypes.array.isRequired,
};

export default Bio;

export const fluidSmallImage = graphql`
fragment fluidSmallImage on File {
  childImageSharp {
    fluid(maxWidth: 500) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;