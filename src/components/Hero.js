/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'


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
            <h2 className="subtitle is-5 is-muted">We as a people need to unite as one, and be each others keeper.</h2>
            <p>
              <a className="button cta rounded primary-btn raised">
                  Get Started
              </a>
            </p>
          </div>
          <div className="column is-5 is-offset-1">
            <figure className="image is-4by3">
            <img src={process.env.PUBLIC_URL + 'https://lmtrain.github.io/lm-images/assets/images/crm7_7.jpg'} alt="Description" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>

export default Hero