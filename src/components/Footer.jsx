import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import footerLinks from "./data/links";

function Footer() {
  return (
    <footer id="footer-main-container" className="mt-5 pt-5">
      <div className="footer-top">
        <Container className="d-flex justify-content-center">
          <Row className="w-100">
            <Col xs={3}>
              <h6>Get to Know Us</h6>
              <ul>
                {footerLinks[0].map((link) => (
                  <li>
                    <Link>{link}</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col xs={3}>
              <h6>Make Money with Us</h6>
              <ul>
                {footerLinks[1].map((link) => (
                  <li>
                    <Link>{link}</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col xs={3}>
              <h6>Amazon Patment Methods</h6>
              <ul>
                {footerLinks[2].map((link) => (
                  <li>
                    <Link>{link}</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col xs={3}>
              <h6>Let Us Help You</h6>
              <ul>
                {footerLinks[3].map((link) => (
                  <li>
                    <Link>{link}</Link>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom d-flex justify-content-center align-items-center w-100">
        <ul>
          {footerLinks[4].map((link) => (
            <li>
              <Link>{link}</Link>
            </li>
          ))}
        </ul>
        <small className="copyright-txt">© 1996-2020, Amazon.com, Inc. or its affiliates</small>
      </div>
    </footer>
  );
}

export default Footer;
