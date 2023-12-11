import React from 'react';
import './AboutUs.css';
import vaishnavi from '../../images/vaishphoto.jpg';
import shubham from '../../images/DSC_0139.png';
import balram from '../../images/balram.png'
import '@fortawesome/fontawesome-free/css/all.css';

export const AboutUs = () => {
  return (
    <div className="team">
      <div className="container">
        <div className="section-header text-center">
          <h4 style={{color:'#7E30E1', wordSpacing: "2px"}}>Our Team</h4>
          <h1><b>Meet Our Developers</b></h1>
        </div>
        <div className="row mt-4">
          <TeamMember
            imgSrc={vaishnavi}
            name="Vaishnavi Masudage"
            role="CDAC Mumbai"
          />
          <TeamMember
            imgSrc={balram}
            name="Balram Melkunde"
            role="CDAC Mumbai"
          />
          <TeamMember
            imgSrc={shubham}
            name="Shubham Nangare"
            role="CDAC Mumbai"
          />
        </div>
      </div>
    </div>
  );
};

export const TeamMember = ({ imgSrc, name, role }) => {
  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="team-item">
        <div className="team-img">
          <img src={imgSrc} alt="Team Image" />
        </div>
        <div className="team-text">
          <h2>{name}</h2>
          <p>{role}</p>
        </div>
        <div className="team-social">
          <a className="social-tw" href="https://twitter.com/MelkundeBalram"><i className="fab fa-twitter"></i></a>
          <a className="social-fb" href="/"><i className="fab fa-facebook-f"></i></a>
          <a className="social-li" href="https://www.linkedin.com/in/balram-melkunde/"><i className="fab fa-linkedin-in"></i></a>
          <a className="social-in" href="/"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
