import React, { Component, Fragment } from 'react'
import { Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import colors from '../styles/colors'

import {
  NavbarBrand,
} from 'reactstrap'

const StyledNavbar = styled.div`
  margin: 0px auto;
  width: 100%;
  padding: 12px 24px 12px 24px;
  position: fixed;
  display: flex;
  top: 0;
  background-color: white;
  align-items: center;
  z-index: 2;
  
  a {
    color: ${colors.font.dark} !important;
  }
  
  .navbar-brand {
    font-size: 18px !important;
    font-weight: 700; // bold
  }
  .navbar-toggler {
    border-color: white !important;
    path {
      fill: ${colors.font.dark};
    }
  }

  @media (max-width: 885px) {
    .navbar-collapse {
      display: none;
    }
  }
`

const NavbarBrandLink = styled(Link)`
    // &:after {
    //   display: table-cell;
    // }
`
const StyledNavBarBrand = styled(NavbarBrand)`
    width: 29px;
    margin-right: 9px !important;
    overflow: hidden;
    // padding-top: px;
`
const StyledNavbarBrandName = styled(NavbarBrand)`
  a:hover {
    text-decoration: none;
  }
`

const FlexGrow = styled.div`
  flex: 1;
`
const NavItem = styled.div`
  margin: auto 10px;
  a {
    color: ${colors.font.dark} !important;
    font-size: 14px !important;
    font-weight: 500; // medium
  }    
  @media (max-width: 885px) {
    display: none;
  }
`

const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 66px;
  left: 0;
  width: 100%;
  background-color: ${colors.theme.secondary};
  padding: 10px 20px 15px 20px;
  z-index: 2;
  
  @media (max-width: 885px) {
    display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
    flex-direction: column;
  }
`

const DDNavItem = styled.div`
  margin: 25px 20px 15px 20px;
  // border-bottom: 2px solid ${colors.border.lighter};
`

const StyledNavbarToggler = styled.div`
  display: none;
  margin: 0 30px;
  height: 42px;
  
  @media (max-width: 885px) {
    display: flex !important;
    align-items: center;
  }
`

const StyledNav = styled.div`
  display: flex;
  
`

const ActionButton = styled.div`
  background-color: ${colors.theme.main};
  border-radius: 3px;
  transition: all 0.2s;
  padding: 8px 15px;
  margin: 0 5px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  
  a {
    color: white !important;
    font-size: 14px !important;
    font-weight: 500; // medium
    transition: color 0.2s;
    &:hover {
      text-decoration: none;
    }
  }
  
  &:hover {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 885px) {
    display: visible;
  }
  @media (max-width: 630px) {
    display: none;
  }
`

const ActionButtonOutline = styled(ActionButton)`
  border: 2px solid ${colors.theme.accent};
  background-color: white;
  a {
    color: ${colors.font.dark} !important;
    transition: color 0.2s;
  }
  // @media (max-width: 768px) {
  //   display: block;
  // }
  // @media (max-width: 630px) {
  //   display: none;
  // }
`

class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { siteTitle } = this.props
    console.log(this.state.isOpen)

    return (
      <StaticQuery
        query={graphql`
query logoQuery {
  logo: file(relativePath: {eq: "misc/logo-strip.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
    `}
        render={data => {
          console.log(data)
          return (
            <Fragment>
              <StyledNavbar color="#fff" light expand="md">
                <StyledNavBarBrand>
                  <Link to="/">
                    <Img fluid={data.logo.childImageSharp.fluid}/>
                  </Link>
                </StyledNavBarBrand>
                <StyledNavbarBrandName>
                  <Link to="/">
                    {siteTitle}
                  </Link>
                </StyledNavbarBrandName>
                {/*<NavbarBrand href="/">{siteTitle}</NavbarBrand>*/}
                <FlexGrow/>
                <StyledNavbarToggler onClick={this.toggle}>
                  <FontAwesomeIcon icon={faBars}/>
                </StyledNavbarToggler>
                <Dropdown isOpen={this.state.isOpen}>
                  <DDNavItem>
                    <Link to="/">Home</Link>
                  </DDNavItem>
                  <DDNavItem>
                    <Link to="/listings/">Our Listings</Link>
                  </DDNavItem>
                  {/*<DDNavItem>*/}
                  {/*<Link to="/contact/">Contact Us</Link>*/}
                  {/*</DDNavItem>*/}
                  <DDNavItem>
                    <Link to="/faq/">FAQ</Link>
                  </DDNavItem>
                  <DDNavItem>
                    <Link to="/contact/">Contact Us</Link>
                  </DDNavItem>
                  {/*<DDNavItem>*/}
                  {/*<Link to="/referral/">Refer & Earn</Link>*/}
                  {/*</DDNavItem>*/}
                </Dropdown>
                <StyledNav navbar>
                  <NavItem>
                    <Link to="/">Home</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/listings/">Rental Partners</Link>
                  </NavItem>
                  {/*<NavItem>*/}
                  {/*<Link to="/contact/">Contact Us</Link>*/}
                  {/*</NavItem>*/}
                  <NavItem>
                    <Link to="/faq">FAQ</Link>
                  </NavItem>
                  <ActionButton>
                    <Link to="/contact">Contact Us</Link>
                  </ActionButton>
                  {/*<ActionButtonOutline>*/}
                  {/*<Link to="/referral">Refer & Earn</Link>*/}
                  {/*</ActionButtonOutline>*/}
                </StyledNav>
              </StyledNavbar>

            </Fragment>
          )
        }}
      />

    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
