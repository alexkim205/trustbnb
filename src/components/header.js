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
    margin: 0 10px;
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
  @media (max-width: 767px) {
    padding: 0 12px !important;
  }
`;

const ActionButton = styled(NavItem)`
  border: 1px solid ${colors.border.light};
  // background-color: ${colors.theme.main};
  border-radius: 1px;
  transition: all 0.2s;
  a {
    transition: color 0.2s;
  }
  
  &:hover {
    border-color: ${colors.border.dark}
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    a {
      color: black !important;
    }
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
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/contact/">Contact Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/faq">FAQ</NavLink>
                </NavItem>
                <ActionButton>
                  <NavLink href="/inquiry">Send us an inquiry</NavLink>
                </ActionButton>
              </Nav>
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
