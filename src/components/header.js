import React, {Component, Fragment} from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

import colors from '../styles/colors';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
    Button,
} from 'reactstrap';

const StyledNavbar = styled(Navbar)`
  margin: 24px auto;
  padding: 0 24px !important;
  max-width: 1540px;
  
  a {
    color: ${colors.font.dark} !important;
  }
  .nav-link {
    font-size: 14px !important;
    font-weight: 500; // medium
  }
  .nav-item {
    margin: auto 10px;
  }
  .navbar-brand {
    font-size: 16px !important;
    font-weight: 700; // bold
  }
  .navbar-toggler {
    border-color: white !important;
    path {
      fill: ${colors.font.dark};
    }
  }
  @media (max-width: 768px) {
    padding: 0 18px !important;
  }
`;

const StyledNav = styled(Nav)`
  @media (max-width: 768px) {
    .nav-item {
      margin: 0 30px;
      // padding: 5px 5px;
      border-bottom: 1px solid ${colors.border.light};
    }
  }
`;

const ActionButton = styled(NavItem)`
  background-color: ${colors.theme.main};
  border-radius: 3px;
  transition: all 0.2s;
  padding: 2px 5px;
  border-radius: 2px;
  
  a {
    color: white !important;
    transition: color 0.2s;
  }
  
  &:hover {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const {siteTitle} = this.props;

    return (
        <Fragment>
          <StyledNavbar color="#fff" light expand="md">
            <NavbarBrand href="/">{siteTitle}</NavbarBrand>
            <NavbarToggler onClick={this.toggle}>
              <FontAwesomeIcon icon={faAngleDown}/>
            </NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <StyledNav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/contact/">Contact Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/faq">FAQ</NavLink>
                </NavItem>
                <ActionButton>
                  <NavLink href="/inquiry">Work With Us</NavLink>
                </ActionButton>
              </StyledNav>
            </Collapse>
          </StyledNavbar>

        </Fragment>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
