import React from 'react';
import PropType from 'prop-types';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = ({filename}) => (
    <StaticQuery
        query={graphql`
query Potrait {
    headerImage: imageSharp(id: { regex: "/header/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
    `}
        render={data => <Img
            fluid={data.placeholderImage.childImageSharp.fluid}/>}
    />
);

Image.propTypes = {
  filename: PropType.string.isRequired,
};

export default Image;
