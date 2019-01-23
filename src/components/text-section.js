import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {FullSection} from './section';
import {SpacedHr, HalfSpacedHr} from './spaced-hr';

import colors from '../styles/colors';

const TextWrapper = styled.div`
  padding: 0 24px 22px 24px;
  p {
    color: ${colors.font.dark};
  }
`;

const Head = styled.div`
  padding: 24px 24px 0px 24px;
  // background-color: ${props => props.color};
  // background-color: white;
  h2 {
    margin: 0;
    color: ${props => props.color};
  }
  // border-bottom: 2px solid ${props => props.color === '#fff' ? colors.theme.main : '#fff'};
  
  ${({color}) => color !== '#fff' && `
    * {color: #fff}
  `}
`;

class TextSection extends Component {

  render() {
    const {header, children, color} = this.props;

    return (
        <FullSection color={color}>
          <Head color={color}>
            <h2>{header}</h2>
          </Head>
          <TextWrapper>
            <HalfSpacedHr/>
            {children}
          </TextWrapper>
        </FullSection>
    );
  }
}

TextSection.propTypes = {
  header: PropTypes.string.isRequired,
  color: PropTypes.string,
};

TextSection.defaultProps = {
  header: '',
  color: '#fff',
};

export default TextSection;
