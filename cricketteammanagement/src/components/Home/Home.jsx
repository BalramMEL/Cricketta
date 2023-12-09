import React, { useEffect, useState } from 'react'

import MyCarousel from '../MyCarousel'
import GroupExample from '../GroupExample'
import Footer from '../Footerr/Footerr';


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
              <GroupExample />
              <Footer />
          </>
      )
    }
    </>
  )
}

export default Home