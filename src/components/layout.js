import React, { Fragment } from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <Fragment>
      <header className="global-header">
        <img slt={title} src={"logo1.jpg"} alt={title}/>
        <h1 className={isRootPath ? "main-heading" : "header-link-home"}><Link to={"/"}>{title}</Link></h1>
      </header>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
      
      <Container className="main-content">
          <Row>
            <Col md={{ span: 10, offset: 1 }}>{children}</Col>
          </Row>
      </Container>
      <footer>© {new Date().getFullYear()}, ÆCV</footer>
    </div>
    </Fragment>
  );
}

export default Layout;