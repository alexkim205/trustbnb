import React, {Fragment} from 'react';
import styled from 'styled-components';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

import colors from '../styles/colors';

const StyledUList = styled.ul`
  margin-bottom: 0;
  margin-left: -14px;
  list-style-type: none;
  li {
    font-size: 16px;
    line-height: 2em;
    overflow: hidden;
    text-overflow: ellipsis; 
    white-space: nowrap;
  }
  svg {
    margin-right: 1em;
    path {
      fill: #3fc380;
    }
  }
  // @media (max-width: 425px) {
  //   li {
  //     // font-size: 14px;
  //   }
  // }
`;

const UList = ({lis}) => {
  return (
      <StyledUList>

        {lis && lis.map((li, i) => (
            <Fragment key={i}>
              <li><FontAwesomeIcon icon={faCheckCircle}/>{li}</li>
            </Fragment>
        ))}
      </StyledUList>
  );
};

export default UList;