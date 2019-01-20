import React, {Fragment} from 'react';
import styled from 'styled-components';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

import colors from '../styles/colors';

const StyledUList = styled.ul`
  list-style-type: none;
  li {
    font-size: 16px;
    line-height: 2em;
  }
  svg {
    margin-right: 1em;
    path {
      fill: #3fc380;
    }
  }
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