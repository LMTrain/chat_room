import React from 'react'
import withAuthorization from 'components/hoc/withAuthorization'
import PastForums from 'components/service/PastForums'
import '../pages/Home.css'

const Forums = (props) => {
  
  return (
    <div>
     
        <section className="section section-feature-grey is-medium">
          <div className="container">
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2">Great Power Comes </h2>
              <h3 className="subtitle is-5 is-muted">With great Responsability</h3>
              <div className="divider is-centered"></div>
            </div>
           

            <div className="content-wrapper">
              <div className="columns is-multiline">
                <PastForums />
              </div>
            </div>
          </div>
          <footer style={{textAlign: 'center'}}>
            <span>copyright &copy; LM Systems LLC 2020</span>
          </footer>
        </section>
      </div>
    
          
  )
}

export default withAuthorization(Forums)

