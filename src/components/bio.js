import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import colors from '../styles/colors'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const BiosWrapper = styled.div`
  margin: 18px 0;
  border-radius: 3px;
  overflow: hidden;
  // z-index: -1;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    margin-left: 12px;
    margin-right: 12px;
    margin-top: 12px;
    flex-wrap: wrap;
  }
`

const BioWrapper = styled.div`
  // display: flex;
  // flex-direction: ${props => props.reverseOrder ? 'row' : 'row-reverse'};
  margin: 24px 12px 0 12px;
  background-color: white;
  width: 32.5%;
  max-width: 260px;
  position: relative;
  
  img {
    transition: all 0.5s;
  }
  
  .name {
    margin: 20px 0;
    text-align: center;
  }
  
  .content {
    position: absolute;
    background-color: rgba(0,0,0, 0.3);
    // background-color: ${colors.theme.main};
    // height: 100%;
    padding: 1.2em;
    overflow: hidden;
    border-radius: 3px;
    height: 350px;
    top: 0;
    left: 0;
    // z-index: -1;
    opacity: 0;
    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    
    * {color: white;}
    
    h3 {
      margin: 0px 0 10px 0;
    }
    small {
      font-style: italic;
      margin-bottom: 5px;
    }
    p {
        font-size: 15px;
        line-height: 1.55em;
        text-align: center;
    }
  }
  &:hover {
    .content {
      opacity: 1;
    }
    img {
      filter: blur(8px);
      -webkit-filter: blur(8px);
    }
  }
  
  @media (max-width: 768px) {
    width: 49%;
  }
  @media (max-width: 545px) {
    width: 100%;
  }
`

const StyledImg = styled(Img)`
  overflow: hidden;
  border-radius: 3px;
  
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  // z-index: -1;
  height: 350px; 

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;' // needed for IE9+ polyfill
  }
`

class Bio extends Component {
  render() {
    const { fluidPortraits, teamInfo } = this.props

    return (
      <BiosWrapper>
        {fluidPortraits && teamInfo && fluidPortraits.map((fluidImg, i) => {
          console.log(teamInfo[i])
          const { fname, mname, lname, position, biography, linkedin } = teamInfo[i]
          return (
            <BioWrapper key={i}>
              <div>
                <StyledImg fluid={fluidImg}/>
                <div className="content">
                  {/*<h3>{fname}</h3>*/}
                  <small>{position}&nbsp;&nbsp;&nbsp;
                    {linkedin && (
                      <a href={linkedin} target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                      </a>
                    )}
                  </small>

                  <p>{biography}</p>
                </div>
              </div>
              <div className="name">
                <h3>{fname}</h3>
              </div>
            </BioWrapper>
          )
        })}
      </BiosWrapper>
    )
  }
}

Bio.propTypes = {
  fluidPortraits: PropTypes.array.isRequired,
  teamInfo: PropTypes.array.isRequired,
}

export default Bio

export const fluidSmallImage = graphql`
fragment fluidSmallImage on File {
  childImageSharp {
    fluid(maxWidth: 500) {
      ...GatsbyImageSharpFluid
    }
  }
}
`