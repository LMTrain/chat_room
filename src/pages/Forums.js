import React from 'react'
// import { Container, Row, Col } from "reactstrap";
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
    // <Container style={{textAlign: 'center', marginTop: 50 }}>
    //   <h1 className="title">Watch Videos of Past Forums</h1>

  
    //     <Row>
    //       <Col md="col-5">
    //       <h1 className="title">Forum One</h1>
    //       </Col>
    //       <Col md="col-5">
    //       <h1 className="title">Forum Two</h1>
    //       </Col>
    //     </Row>

      
    //   {/* <br></br><h1 style={{fontSize: 28, fontWeight: "bold"}}>Or</h1>
    //   <br></br><h1 style={{fontSize: 28, fontWeight: "bold"}}>Click forum date in calender to join and listen to participants in the forum.</h1> */}
  
    //   <footer style={{textAlign: 'center'}}>
    //     <span>copyright &copy; LM Systems LLC 2020</span>
    //   </footer>
    // </Container>
  )
}

export default withAuthorization(Forums)

