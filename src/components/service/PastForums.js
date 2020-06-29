/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'
// import { Link } from 'react-router-dom'



const PastForums = () => {
  
  const forums = [
                    {
                      forumId: 106272020,
                      title: "African Americans and Africans Forum 1",
                      date: "June 27th, 2020",
                      time: "7pm - 9pm CST",
                      facilitators: "Laycon Muriziq & Pastor Babatope",
                      participants: "Alisa Higgins, Kevin Washington, Ola Olademeji, & Oluwaleye",
                      audience: "Micah Cherina & Omotola O",
                      image: "https://lmtrain.github.io/lm-images/assets/images/crm4.jpg",
                      videoLink: "https://zoom.us/rec/share/uOF8Ce7K2X9Oa4mKsn71RZQsPIGmX6a823BLrPAPnTK4KCGSh0vU3s23zPa9hNY",
                      password: "4G*!h%6q"      
                  },
                  // {
                  //     forumId: 207112020,
                  //     title: "African Americans and Africans Forum 2",
                  //     date: "July 11th, 2020",
                  //     time: "7pm - 9pm CST",
                  //     facilitators: "Laycon Muriziq & Pastor Babatope",
                  //     participants: "Braianna King, Castil Davis, Dayo Ali, & Gbemi Oshodi",
                  //     audience: "Dianna Lewis, Femi Oshodi, Godwin Douglas, & Lanre Ojo",
                  //     image: "https://lmtrain.github.io/lm-images/assets/images/crm8.jpg",
                  //     videoLink: "https://zoom.us/rec/share/uOF8Ce7K2X9Oa4mKsn71RZQsPIGmX6a823BLrPAPnTK4KCGSh0vU3s23zPa9hNY",
                  //     password: "4G*!h%6q"     
                  // }

  ]
  
  return (
    <div>
        {forums.map(service => (
          <div className="column is-one-third" key={service.forumId}>
          <div 
              data-animation="fadeInLeft">
              <div className="card-title">
                  <p><b>Forum Date:</b> {service.date}</p>
                  <p><b>Facilitators:</b> {service.facilitators}</p>
                  <p><b>Participants:</b> {service.participants}</p>
                  <p><b>Audiences:</b> {service.audience}</p>
              </div>
              <div className="card-icon">
                  <img src={service.image} alt="Forum 1 - 06-27-2020"/>
              </div>
              <div className="card-text">
              <p>Password: {" "} <b style={{color: "red"}}>{service.password}</b></p>
              </div>
              <div className="card-action">
                  <a 
                  href={service.videoLink} 
                  className="button cta rounded primary-btn raised" target="_blank" rel="noopener noreferrer">Watch Video</a>
              </div>
          </div>
      </div>
          
        ))}
    </div>
   
  );
}



export default PastForums