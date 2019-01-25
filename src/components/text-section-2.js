import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {FullSection} from './section';
import {SpacedHr, HalfSpacedHr} from './spaced-hr';

import colors from '../styles/colors';

const TextWrapper = styled.div`
  padding: 0 24px 22px 24px;
  p {
    span.highlight {
      color: ${colors.font.dark} !important;
    }
    color: ${colors.font.light} !important;
  }
`;

const Head = styled.div`
  padding: 24px 24px 0px 24px;
  h2 {
    margin: 0;
    color: ${colors.theme.main} !important;
  }
  
`;

class TextSection2 extends Component {

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

TextSection2.propTypes = {
  header: PropTypes.string.isRequired,
  color: PropTypes.string,
};

TextSection2.defaultProps = {
  header: '',
  color: '#fff',
};

export default TextSection2;
