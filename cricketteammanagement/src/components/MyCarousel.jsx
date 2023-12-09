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
          <h3 className='text-light '>Dharmshala Ground</h3>
          <p className='text-light '>The most beautiful architecture inspired by Tibetan style buildings.</p>
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
         <h3 className='text-light '>World Cup 2011 </h3>
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
          <h3 className='text-light '>Arena</h3>
          <p className='text-light '>Large open structures that have space for athletic events and other kinds of entertainment.</p>
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
          <h3 className='text-light '>Arena</h3>
          <p className='text-light '>Large open structures that have space for athletic events and other kinds of entertainment.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Items as needed */}
    </Carousel>
    </div>
  );
};

export default MyCarousel;