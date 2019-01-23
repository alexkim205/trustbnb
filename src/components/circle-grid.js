import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
  margin: 18px 0;
  border-radius: 3px;
  overflow: hidden;
  z-index: -1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  // justify-content: ${({numChild}) => numChild === 3 ? 'space-between' : 'space-evenly'};
  
  @media (max-width: 768px) {
    margin-left: 12px;
    margin-right: 12px;
    margin-top: 12px;
    flex-wrap: wrap;
  }
`;

const CircleGrid = (props) => {
  const numChild = props.children.length;

  return (
      <StyledGrid numChild={numChild}>
        {props.children}
      </StyledGrid>
  );
};

export default CircleGrid;