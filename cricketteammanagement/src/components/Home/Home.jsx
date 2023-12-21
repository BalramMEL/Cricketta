import React, { useEffect, useState } from 'react'

import MyCarousel from '../MyCarousel'
import GroupExample from '../GroupExample'
import Footer from '../Footerr/Footerr';
import AboutUs from '../aboutUs/AboutUs';
import ServiceComponent from '../serviceComponent/ServiceComponent';


const Home = () => {
    const [loading, setLoading] = useState(false);
      useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
      }, 2000);
  }, []);
  return (
    <>
      {
        loading ? (
            <div className="loader-container">
               <div className="spinner"></div>
            </div>         
        ) : (
          <>
            <MyCarousel />
              {/* <GroupExample /> */}
              <ServiceComponent />
              <AboutUs />
              <Footer />
          </>
      )
    }
    </>
  )
}

export default Home