import React from "react";
import { Row, Col } from "reactstrap";

function Help() {
  return (
    <div className="container">
      <div className="content-wrapper">
          <h1 className="title">You need help?</h1>
        </div>
        <div>
          <Row>
            <Col md="col-5">
              <div className="column is-5 is-offset-1">
              <h2 className="subtitle is-5 is-muted">Send an email to <b>service@lmsystemsllc.com</b></h2>
              <h2 className="subtitle is-5 is-muted">Please include your username and contact information.</h2>
                <figure className="image is-4by3">
                  <img src={'https://lmtrain.github.io/lm-images/assets/images/crm1963.jpg'} alt="Description" />
                </figure>
              </div>
            </Col>
          </Row>
          <footer style={{textAlign: 'center'}}>
            <span>&copy; LM Systems LLC {new Date().getFullYear()}</span>
          </footer>
      </div>
    </div>
  );
}

export default Help;