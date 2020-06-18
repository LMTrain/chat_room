/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'
import { Link } from 'react-router-dom'
import ReceivedMessages from '../components/ReceivedMessages'

const Hero = () => 
  <section className="hero is-default is-bold">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-5 is-offset-1 landing-caption">
            <div className="title is-1 is-bold is-spaced">
              <h1 >
                  <b>Let's Unite,</b><br></br>
                  <b>Collaborate, and</b><br></br>
                  <b>Share ideas.</b>
              </h1>
            </div>
            <h2 className="subtitle is-5 is-muted">We as a people need to unite as one, and be each others keeper. <b>Join the Forum!</b></h2>
              <Link 
                to="/faq"
                className="button cta rounded primary-btn raised">Request an Invitation to join a Forum</Link>
          </div>
          <div className="column is-5 is-offset-1">
            <figure className="image is-4by3">
            <img src={process.env.PUBLIC_URL + 'https://lmtrain.github.io/lm-images/assets/images/crm7_7.jpg'} alt="Description" />
            </figure>
            <ReceivedMessages />
          </div>
          
        </div>
      </div>
    </div>
  </section>

export default Hero