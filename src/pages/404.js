import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../components/section';

const NotFoundPage = () => (
    <Layout>
      <SEO title="404: Not found"/>
      <Section>
        <h1>Page Cannot Be Found</h1>
        <h6>You just hit a route that doesn&#39;t exist.</h6>
      </Section>
    </Layout>
);

export default NotFoundPage;
