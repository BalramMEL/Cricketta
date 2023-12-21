import React from 'react';
import './Champions.css'; 
import MI from '../../images/MIoutline.jpg';
import CSK from '../../images/CSKoutline.jpg';
import SRH from '../../images/SRHoutline.jpg';
import RR from '../../images/RRoutline.jpg';
import KKR from '../../images/KKRoutline.jpg';
import GT from '../../images/GToutline.jpg';


const ServiceComponent = () => {
  return (
    <div className="service">
      <div className="container">
        <div className="section-header text-center">
          <p><b>Indian Premier League</b></p>
          <h1><b>OUR CHAMPIONS</b></h1>
        </div>
        <div className="row">

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item">
              <div className="service-img">
                <img src={MI} alt="Image" />
                <div className="service-overlay">
                  <p>
                    Winner : 2013,2015,2017,2019,2020
                  </p>
                </div>
              </div>
              <div className="service-text">
                <h3 style={{textAlign:'center'}}>MUMBAI INDIANS</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item">
              <div className="service-img" >
                <img style={{height:'200px'}} src={CSK} alt="Image" />
                <div className="service-overlay">
                  <p>
                        Winner : 2010,2011,2018,2021,2023                 
                         </p>
                </div>
              </div>
              <div className="service-text">
                <h3 style={{textAlign:'center'}}>CHENNAI SUPER KINGS</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item">
              <div className="service-img">
                <img src={KKR} alt="Image" />
                <div className="service-overlay">
                  <p>
                  Winner : 2012, 2014
                  </p>
                </div>
              </div>
              <div className="service-text">
                <h3 style={{textAlign:'center'}}>KOLKATTA KNIGHT RIDERS</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item">
              <div className="service-img">
                <img src={SRH} alt="Image" />
                <div className="service-overlay">
                  <p>
                    Winner : 2016
                  </p>
                </div>
              </div>
              <div className="service-text">
                <h3 style={{textAlign:'center'}}>SUNRISERS HYDERABAD</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item">
              <div className="service-img">
                <img src={GT} alt="Image" />
                <div className="service-overlay">
                  <p>
                    Winner : 2022
                  </p>
                </div>
              </div>
              <div className="service-text">
                <h3 style={{textAlign:'center'}}>GUJARAT TITANS</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item">
              <div className="service-img">
                <img src={RR} alt="Image" />
                <div className="service-overlay">
                  <p>
                    Winner : 2008
                  </p>
                </div>
              </div>
              <div className="service-text">
                <h3 style={{textAlign:'center'}}>RAJASTHAN ROYALS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;