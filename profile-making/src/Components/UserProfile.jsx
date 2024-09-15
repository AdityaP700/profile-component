import React ,{useState} from 'react';
import ReactDOM from 'react-dom'; 
import './ProfileStyle.css'; 
import Picker from 'emoji-picker-react';
import images from "../assets/aesthetic-anime-boy-icon-sips-coffee-ral4bfei9ylrpzas.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faInstagram ,faXTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'; 
export const UserProfile = () => {
  return (
    <div className="gradient_background">
      <div className="header">
        <div className="header-half">
         <div className="img-outline">
              <img src={images} width="94" height="88" alt=""/>
         </div>
         <div className="profile-card-social" >
         <a href="https://www.instagram.com/ko6ala/" className="profile-card-social__item instagram" target="_blank" rel="noopener noreferrer">
        <span className="icon-font">
          <FontAwesomeIcon icon={faInstagram} size="2x" /> {}
        </span>
          </a>
      <a href="https://x.com/AdityaPat_" className="profile-card-social__item twitter" target="_blank" rel="noopener noreferrer">
        <span className="icon-font">
          <FontAwesomeIcon icon={faXTwitter} size="2x" />
        </span>
      </a>
      <a href="https://www.linkedin.com/in/aditya-pattanayak-6b303b267" className="profile-card-social__item linkedin" target="_blank" rel="noopener noreferrer">
        <span className="icon-font">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </span>
      </a>
         </div>
         <div className="outline-name">
          <h3> Aditya Pattanayak</h3>
         </div>
          <div className="outline-name_location">
            <strong>INDIA</strong>
          </div>
          <div className="profile_about">
            <strong>About me</strong>
            <p id="info">
            I’m a rookie developer, driven by curiosity and the desire to learn. Constantly exploring new technologies, I aspire to build meaningful solutions. While I have much to learn, my passion for coding keeps me motivated to improve and achieve great things.
            </p>
          </div>
         </div>
        </div>
      </div>
  );
};
