import React from 'react';
import { Carousel } from 'react-bootstrap';
import ground1 from '../images/ground1.png';
import ground2 from '../images/ground2.png';
import stadium1 from '../images/stadium1.jpg';
import stadium2 from '../images/stadium2.jpg';
import sachin from '../images/Sachin.jpg';
import dharmashala from '../images/Dharmashala.jpg'

const MyCarousel = () => {
  return (
    <div>
      <Carousel className='h-30'>
      <Carousel.Item >
        <img
          // className="w-100 h-20"
          src={dharmashala}
            alt="First slide"   
            style={{ width: '100vw', height: '80vh', objectFit: 'cover' }}             
        />
        <Carousel.Caption>
          <h3 className='text-light '>DHARMASHALA GROUND</h3>
          <p className='text-light '> unfolds magic with abundant boundaries, strategic brilliance, and awe-inspiring spectacle.</p>
        </Carousel.Caption>
        </Carousel.Item>
        
      <Carousel.Item >
        <img
          // className="w-100 h-20"
          src={sachin}
            alt="Second slide"
             style={{ width: '100vw', height: '80vh', objectFit: 'cover' }}              
        />

        <Carousel.Caption className='text-light'>
         <h3 className='text-light '>WORLD CUP-2011 </h3>
          <p className='text-light '>All good things are difficult to achieve; and bad things are very easy to get.”</p>
        </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item >
        <img
          // className="w-100 h-20"
          src={stadium1}
            alt="Second slide"          
             style={{ width: '100vw', height: '80vh', objectFit: 'cover' }}  
        />

        <Carousel.Caption className='text-light'>
          <h3 className='text-light '>ARENA</h3>
          <p className='text-light '>Experience IPL's cricket brilliance: where bat meets ball in symphony.</p>
        </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item >
        <img
          // className="w-100 h-20"
          src={stadium2}
            alt="Second slide"          
             style={{ width: '100vw', height: '80vh', objectFit: 'cover' }}  
        />

        <Carousel.Caption className='text-light'>
          <h3 className='text-light '>UPCOMMING IPL SEASON</h3>
          <p className='text-light '>In IPL, cheers echo louder with soaring sixes and everlasting cricketing fever.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Items as needed */}
    </Carousel>
    </div>
  );
};

export default MyCarousel;