import React from "react"
import styled from "styled-components";

const Grid = styled.div`
  margin: 18px 0;
  border-radius: 3px;
  overflow: hidden;
  z-index: -1;
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    margin-left: 12px;
    margin-right: 12px;
    margin-top: 12px;
    flex-wrap: wrap;
  }
`;

export default Grid;