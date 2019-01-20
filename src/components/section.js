import React, {Fragment} from 'react';
import styled from 'styled-components';

import colors from '../styles/colors';

const StyledSection = styled.div`
  margin: 32px 0 0 0;
  border-radius: 3px;
  overflow: hidden;
  z-index: -1;
  
  ${({color}) => color !== '#fff' && `
    background-color: #FAFAFA;
    // border-bottom: 2px solid ${color};
    // border-left: 2px solid ${color};
    // border-right: 2px solid ${color};
  `}
  
  @media (max-width: 768px) {
    margin-left: 12px;
    margin-right: 12px;
  }
`;

const Section = ({children, color}) => {
  const bgcolor = color || '#fff';

  return (
      <StyledSection color={bgcolor}>
        {children}
      </StyledSection>
  );
};

export default Section;