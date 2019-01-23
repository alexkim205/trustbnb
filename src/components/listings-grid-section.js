import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal, faStar } from '@fortawesome/free-solid-svg-icons'

import { Section } from './section'
import colors from '../styles/colors'

const GridItem = styled.div`
  text-align: center;
  margin-bottom: 18px;
  .grid-title {
    display: flex;
    align-items: center;
    justify-content: center;
    svg.fa-medal {path{fill: ${colors.theme.main}}}
    svg.fa-star {path{fill: ${colors.theme.accent}}}
    span {font-size: 13px;}
  }
  p {
    font-size: 15px;
    text-align: justify;
    margin: 10px;
  }
  width: 32.5%;
  @media (max-width: 768px) {
    width: 49%;
  }
  @media (max-width: 545px) {
    width: 100%;
  }
`

const Body = styled.div`
  margin: 12px 0;
`

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
`

class ListingsGridSection extends Component {

  render() {
    const { fluidImage, superhost, rating, underText } = this.props

    return (
      <GridItem>
        <StyledImg fluid={fluidImage}/>
        <Body>
        <div className="grid-title">
          {superhost && (
            <Fragment>
              <FontAwesomeIcon icon={faMedal} size="2x"/>
              &nbsp;&nbsp;
              <span>Superhost</span>
              &nbsp;&nbsp;
              {rating && Array(rating).fill().map((star, i) => 
                <FontAwesomeIcon key={i} icon={faStar}/>
              )}
            </Fragment>
          )}
        </div>
        <p>
          {underText}
        </p>
        </Body>
      </GridItem>
    )
  }
}

ListingsGridSection.propTypes = {
  fluidImage: PropTypes.object.isRequired,
  superhost: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  underText: PropTypes.string,
}

ListingsGridSection.defaultProps = {
  superhost: true,
  rating: 5,
  underText: '',
}

export default ListingsGridSection