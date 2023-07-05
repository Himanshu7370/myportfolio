import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/intro-bg-jpg.png"
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="Hero">
        <div className="mask">
            <img  className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI, I'M HIMANSHU PANDEY</p>
            <h1>React Developer.</h1>
            <div>
               <Link to="/project" className="btn">Projects</Link>
               <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
      
    </div>
  )
}

export default HeroImg
