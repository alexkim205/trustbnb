import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {Section} from './section';
import colors from '../styles/colors';

const GridItem = styled.div`
  text-align: center;
  padding: 10px 0px;
  margin: 18px auto;
  text-align: center;
  
  .grid-title {
    font-weight: 700;
  }
  p {
    font-size: 15px;
    text-align: center;
    margin: 0 10px;
  }
  width: 19.5%;
  @media (max-width: 768px) {
    width: 32.5%;
  }
  @media (max-width: 545px) {
    width: 49.5%;
  }
`;

const Body = styled.div`
  margin: 12px auto;
  max-width: 230px;
  // min-width: 230px;
`;

const StyledIcon = styled.div`
  border-radius: 100%;
  background-color: white;
  width: 90px;
  height: 90px;
  display: flex;
  margin: 0 auto;
  path {
    fill: ${props => props.color};
  }
`;

class CircleGridSection extends Component {

  render() {
    const {icon, underTitle, underText, color} = this.props;
    return (
        <GridItem>
          <StyledIcon color={color}>
            {icon}
          </StyledIcon>
          <Body>
          <span className="grid-title">{underTitle}</span>
          <p>
            {underText}
          </p>
          </Body>
        </GridItem>
    );
  }
}

CircleGridSection.propTypes = {
  icon: PropTypes.node.isRequired,
  underTitle: PropTypes.string,
  underText: PropTypes.string,
  color: PropTypes.string,
};

CircleGridSection.defaultProps = {
  underTitle: '',
  underText: '',
  color: '#fff',
};

export default CircleGridSection;