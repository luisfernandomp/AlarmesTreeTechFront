import React from 'react';
import './index.css';
import Logo from '../../assets/images/logoTreeTech.png';
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

 const Footer = () => {
    return (
        <div className="menu-inferior">
            <div className="contato">
                <ul>
                    <li style={{fontSize : '1.5em', fontWeight : 800}}>Contato</li>
                    <li style={{marginLeft : 10}}><FaGithub style={{fontSize : '28px'}}/><a href="https://github.com/luisfernandomp">  GitHub</a></li>
                    <li style={{marginLeft : 10}}><FaWhatsapp style={{fontSize : '28px'}} /><a href="#">  WhatsApp</a></li>
                    <li style={{marginLeft : 10}}><FaLinkedin style={{fontSize : '28px'}}/><a href="https://www.linkedin.com/in/luis-fernando-mp/">  LinkedIn</a></li>
                </ul>
            </div>
            <div className="copyLogo">
                <img src={Logo} />
                <div> © Luis Fernando - 2021</div>
            </div>
        </div>
    )

}

export default Footer;