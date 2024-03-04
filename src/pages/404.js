import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <div className="body-page">
        <h1>The page you requested could not be found.</h1>
        <div>The page you requested may have moved.</div>
      </div>  
    </Layout>
  );
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;