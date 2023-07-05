import { Link } from "react-router-dom"
import"./AboutContentStyles.css"
import React from 'react'



const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who AM I?</h1>
            <p>Passionate and dedicated React.js developer with a strong foundation in web development and a keen interest in building dynamic and interactive user interfaces. Post Graduates with a degree in Computer Application and competed several projects using React.js during my studies. Eager to apply my skills and contribute to a dynamic development team.</p>
            <Link to="/contact">
                <button className="btn">contact</button>
            </Link>
        </div>
        
                
            </div>
        
      
    
  )
}

export default AboutContent
