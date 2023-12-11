import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ground1 from '../images/ground1.png';
import ground2 from '../images/ground2.png';
import EveStadium from "../images/Eve Stadium.jpg"
import DyPatil from "../images/DYpatil.jpg";
import { Header } from './Header';

function GroupExample() {
  return (
     
    <div className="container">
      <div className='d-flex ml-2' >
            <Header text="Our Stadium " className="mb-5 "></Header>

      </div>


       <CardGroup className='mt-5 gap-2 mx-5'>
      <Card>
        <Card.Img variant="top" src={ground1} />
        <Card.Body>
          <Card.Title>Cricket fans have taken to social media to express grief after Australia lifted the Cup on Sunday.</Card.Title>
         
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={ground2} />
        <Card.Body>
          <Card.Title>From a legendary batter to the head coach of the Indian cricket team, Rahul Dravid has done it all.</Card.Title>
         
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 50 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={EveStadium}/>
        <Card.Body>
         <Card.Title>Cricket World Cup: How to watch a free India vs. N...</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 5 hrs ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={DyPatil}/>
        <Card.Body>
          <Card.Title>Want to watch India vs. New Zealand online for free today? Don't miss a moment of today's Cricket Wo...</Card.Title>
          
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 40 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
   </div>
  );
}

export default GroupExample;