import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../styles/colors';

const StyledFooter = styled.div`
  margin: 55px auto;
  padding: 55px 24px !important;
  border-top: 1px solid ${colors.border.light};
  max-width: 1540px;
  
  // @media (max-width: 767px) {
  //   padding: 55px 24px !important;
  // }
`;

const Footer = ({company}) => {
  return (
      <StyledFooter>
        © {company}
      </StyledFooter>
  );
};

Footer.propTypes = {
  company: PropTypes.string.isRequired,
};

export default Footer;