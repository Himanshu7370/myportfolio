import "./FormStyles.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" />
            <label> Email</label>
            <input type="email" />
            <label>Subject</label>
            <input type="text" />
            <label>Message</label>
            <textarea roe="6" placeholder="Type your Message here"/>
            <button className="btn">Sumbit</button>
        </form>
      
    </div>
  )
}

export default Form
