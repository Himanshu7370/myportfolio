import "./FooterStyles.css"

import React from 'react'
import { FaHome, FaPhone, FaMailBulk,  FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginLeft: "2rem" }} />
                        <div>
                            <p>Sitalpur Kothi (Saran)</p>
                            <p>Bihar,India</p>

                        </div>
                        <div className="phone">
                            <h4>  <FaPhone size={20} style={{ color: "white", marginLeft: "2rem" }} />  8910836797</h4>


                        </div>
                    </div>
                    <div className="email">
                        <h4> <FaMailBulk size={20} style={{ color: "#fff", marginLeft: "2rem" }} />      himanshukumarpandey0871@gmail.com</h4>


                    </div>

                </div>

                <div className="right">
                    <h4>About the Website</h4>
                    <p>This Website  belong to Himanshu KUmar Pandey</p>
                    <div className="social">
                      <Link to="https://linkedin.com/in/himanshu-pandey-35bb80257">  
                    <FaLinkedin size={30} style={{ color: "#fff", marginLeft: "1rem" }} />
                    </Link>
                    
                        <Link to="https://twitter.com/HkPandey1998">
                        <FaTwitter size={30} style={{ color: "#fff", marginLeft: "1rem" }} />
                        </Link>

                        <Link to="https://www.instagram.com/i_hkpandey/">
                        <FaInstagram size={30} style={{ color: "#fff", marginLeft: "1rem" }} />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
