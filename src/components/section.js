import React, {Fragment} from 'react';
import styled from 'styled-components';

import colors from '../styles/colors';

const StyledSection = styled.div`
  margin: 32px 0 0 0;
  border-radius: 3px;
  overflow: hidden;
  
  ${({color}) => color !== '#fff' && `
    background-color: rgba(0,0,0,0.08);
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

const StyledFullSection = styled.div`
  margin: 32px -24px 0 -24px;
  padding: 0 24px;
  border-radius: 3px;
  overflow: hidden;
  
  // background-color: ${({color}) => color};
  
  ${({color}) => color !== '#fff' && `
    // background-color: rgba(0,0,0,0.08);
    background-color: ${color};
    // color: white !important;
    h2{color: white !important;}
    span{color: white !important;}
    p{color: white !important;}
    // *{color: white !important;}
    // border-bottom: 2px solid ${color};
    // border-left: 2px solid ${color};
    // border-right: 2px solid ${color};
  `}
  
  @media (max-width: 768px) {
    margin-left: -12px;
    margin-right: -12px;
  }
  @media (min-width: 1540px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const FullSection = ({children, color}) => {
  const bgcolor = color || '#fff';

  return (
      <StyledFullSection color={bgcolor}>
        {children}
      </StyledFullSection>
  );
};

export {Section, FullSection};