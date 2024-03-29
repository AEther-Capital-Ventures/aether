import React, { Fragment } from "react";
import { withPrefix, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import Helmet from "react-helmet";

import 'bootstrap/dist/css/bootstrap.min.css';

const socialMediaButtons = [
  {
    url: "https://twitter.com/AETHERCV",
    icon: "fa-brands fa-square-x-twitter",
    label: "Twitter"
  },
  {
    url: "https://www.instagram.com/aethercapitalventures",
    icon: "fa-brands fa-square-instagram",
    label: "Instagram"
  },
  {
    url: "https://www.patreon.com/aethercapitalventures",
    icon: "fa-brands fa-patreon",
    label: "Patreon"
  },
  {
    url: "mailto:contact@aethercapitalventures.com",
    icon: "fa-regular fa-envelope",
    label: "email"
  }
];

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <Fragment>
      <header className="global-header">
        <canvas id="headerBG"></canvas>
        <div>
          <img slt={title} src={"logo1.jpg"} alt={title}/>
          <h1 className={isRootPath ? "main-heading" : "header-link-home"}><Link to={"/"}>{title}</Link></h1>
        </div>
      </header>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
      
        <Container className="main-content">
            <Row>
              <Col md={{ span: 10, offset: 1 }}>{children}</Col>
            </Row>
        </Container>
        <footer>
          <span>Copyright © {new Date().getFullYear()} ÆCV.</span>
          <div className="socialMediaButtons">
            {socialMediaButtons.map((elm, index) => (
              <a key={index} href={elm.url} role="button" title={elm.label} aria-label={elm.label} target="_blank" rel="noreferrer"><i className={`${elm.icon} fa-2xl`}></i></a>
            ))}
          </div>
        </footer>
      </div>
      <Helmet>
        <link rel="stylesheet" type="text/css" href={withPrefix('fontawesome-free-6.5.1-web/css/all.css')} media="screen" />
        <script src={withPrefix('projector.js')} type="text/javascript" />
      </Helmet>
    </Fragment>
  );
}

export default Layout;