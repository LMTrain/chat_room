


import React from 'react'
import {Row, Col} from 'reactstrap'
import { connect } from 'react-redux'

import { logout } from 'actions'

class Logout extends React.Component {

  componentDidMount() {
    const { isAuth, user } = this.props.auth
    if (isAuth) { this.props.dispatch(logout(user.uid)) }
  }

  render() {
    const { isAuth } = this.props.auth
    return (
      <div className="container">
        <div className="content-wrapper">
          { isAuth && <h1 className="title">You are getting logged out...</h1>}
          { !isAuth && <h1 className="title">You are logged out</h1>}
        </div>
        <div>
          <Row>
            <Col md="col-5">
              <div className="column is-5 is-offset-1">
                <figure className="image is-4by3">
                  <img src={'https://lmtrain.github.io/lm-images/assets/images/crm1963.jpg'} alt="Description" />
                </figure>
              </div>
            </Col>
            <Col md="col-5">
              <div className="column is-5 is-offset-1">
                <figure className="image is-4by3">
                  <img src={'https://lmtrain.github.io/lm-images/assets/images/crm8.jpg'} alt="Description" />
                </figure>
            </div>
            </Col>
          </Row>         
          <Row>
          <Col md="col-5">
            <div className="column is-5 is-offset-1">
              <figure className="image is-4by3">
              <img src={process.env.PUBLIC_URL + 'https://lmtrain.github.io/lm-images/assets/images/crm3.jpg'} alt="Description" />
              </figure>
            </div>
          </Col>
          <Col md="col-5">
            <div className="column is-5 is-offset-1">
              <figure className="image is-4by3">
              <img src={process.env.PUBLIC_URL + 'https://lmtrain.github.io/lm-images/assets/images/crm5.jpg'} alt="Description" />
              </figure>
            </div>
          </Col>
          </Row>
        </div>
        <footer style={{textAlign: 'center'}}>
          <span>copyright &copy; LM Systems LLC 2020</span>
        </footer>
      </div>
    )
  }
}


export default connect(({auth}) => ({auth}))(Logout)