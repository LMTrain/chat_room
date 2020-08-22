


import React from 'react'
import withAuthorization from 'components/hoc/withAuthorization'
import ServiceItem from 'components/service/ServiceItem'

import { fetchUserServices } from 'actions'

class UserServices extends React.Component {

  componentDidMount() {
    const { auth: { user }, dispatch } = this.props
    dispatch(fetchUserServices(user.uid))
  }

  render() {
    const { services } = this.props.auth
    return (
      <div className="container">
        <div className="content-wrapper">
          <h1 className="title">My Discussion Forum</h1>
          <div className="columns is-multiline">
            {
              services.map(s => (
                <div key={s.id} className="column">
                  <ServiceItem service={s} />
                </div>
                )
              )
            }
          </div>
        </div>
        <footer style={{textAlign: 'center'}}>
          <span>copyright &copy; LM Systems LLC 2020</span>
        </footer>
      </div>
    )
  }
}


export default withAuthorization(UserServices)








