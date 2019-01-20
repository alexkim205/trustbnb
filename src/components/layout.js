import React, {Fragment, Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {StaticQuery, graphql} from 'gatsby';

import Header from './header';
import Footer from './footer';
import '../styles/fonts.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Body = styled.div`
  padding: 0 24px;
  max-width: 1540px;
  margin: auto;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 767px) {
    padding: 0 12px;
  }
`;

const query = graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            officialTitle
          }
        }
      }
    `;

const Layout = ({children}) => (
    <StaticQuery
        query={query}
        render={({site}) => (
            <Fragment>
              <Header siteTitle={site.siteMetadata.title}/>
              <Body>
              {children}
              </Body>
              <Footer company={site.siteMetadata.officialTitle}/>
            </Fragment>
        )}/>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
