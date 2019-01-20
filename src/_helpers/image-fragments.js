import {graphql} from 'gatsby';

const fluidSmallImage = graphql`
fragment fluidSmallImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;
const fluidLargeImage = qraphql`
fragment fluidLargeImage on File {
  childImageSharp {
    fluid(maxWidth: 3000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export {fluidSmallImage, fluidLargeImage};