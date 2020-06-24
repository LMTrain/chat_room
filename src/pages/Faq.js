import withAuthorization from 'components/hoc/withAuthorization'
import '../pages/Home.css'



import React from 'react'

const Faq = (props) => {
  return (
    <div style={{textAlign: 'center', marginTop: 50 }}>
      <h1 className="title">Join The Forum</h1>
      <a href="https://calendly.com/africanamerican_african-forum/african-americans-and-africans-forum-collaborate" className="button cta rounded primary-btn raised" target="_blank" rel="noopener noreferrer">Request an Invite to join and participate in the forum</a>
      <br></br><h1 style={{fontSize: 28, fontWeight: "bold"}}>Or</h1>
      <br></br><h1 style={{fontSize: 28, fontWeight: "bold"}}>Click forum date in calender to join and listen to participants in the forum.</h1>
      {/* <a href="https://calendly.com/africanamerican_african-forum" className="button cta rounded primary-btn raised" target="_blank" rel="noopener noreferrer">Request an Invite to Listen to the forum</a> */}
      {/* <a href="https://calendar.google.com/calendar/embed?src=service%40lmsystemsllc.com&ctz=America%2FChicago" className="button cta rounded primary-btn raised" target="_blank" rel="noopener noreferrer">Request an Invite to Listen to the forum</a> */}
     
        {/* <figure className="avatar">
          <br></br>
          <img src="https://lmtrain.github.io/lm-images/assets/images/crm3.jpg"  alt="Login Logo" style={{ width: 400, height: 300, frameBorder: 0, scrolling: "no"}}/>
        </figure> */}
      <br></br>
      <br></br>
      <br></br>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=c2VydmljZUBsbXN5c3RlbXNsbGMuY29t&amp;color=%23039BE5&amp;mode=MONTH&amp;showPrint=0&amp;showTabs=0&amp;showTitle=1&amp;showNav=0&amp;showCalendars=1" style={{ width: 1000, height: 600, frameBorder: 0, scrolling: "no"}} title=" Listening "></iframe>
      <footer style={{textAlign: 'center'}}>
        <span>copyright &copy; LM Systems LLC 2020</span>
      </footer>
    </div>
  )
}

export default withAuthorization(Faq)

