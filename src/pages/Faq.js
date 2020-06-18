import withAuthorization from 'components/hoc/withAuthorization'



import React from 'react'

const Faq = (props) => {
  return (
    <div style={{textAlign: 'center', marginTop: 50 }}>
      <h1 className="title">Join The Forum</h1>
      <a href="https://calendly.com/africanamerican_african-forum" className="button cta rounded primary-btn raised" target="_blank" rel="noopener noreferrer">Request an Invite</a>
     
        <figure className="avatar">
          <br></br>
          <img src="https://lmtrain.github.io/lm-images/assets/images/crm3.jpg"  alt="Login Logo" />
        </figure>
    </div>
  )
}

export default withAuthorization(Faq)