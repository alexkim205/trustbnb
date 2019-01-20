import React, {Fragment} from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
  margin: 32px 0;
  
  @media (max-width: 768px) {
    padding-left: 6px;
    padding-right: 6px;
  }
`;

const Section = ({children}) => (
    <StyledSection>
      {children}
    </StyledSection>
);

export default Section;