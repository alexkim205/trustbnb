import React, {Fragment} from 'react';
import styled from 'styled-components';

import colors from '../styles/colors';

const StyledSection = styled.div`
  margin: 32px 0 0 0;
  border-radius: 3px;
  overflow: hidden;
  // z-index: -1;
  
  // -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  // -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  // -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  // -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  // -webkit-transition: all 0.25s ease-in-out;
  // -moz-transition: all 0.25s ease-in-out;
  // -ms-transition: all 0.25s ease-in-out;
  // -o-transition: all 0.25s ease-in-out;
  // transition: all 0.25s ease-in-out;
  //
  // &:hover {
  //   -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  //   -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  //   -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  //   -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  //   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  // }
  
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

export default Section;