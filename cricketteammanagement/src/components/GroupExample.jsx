import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ground1 from '../images/ground1.png';
import ground2 from '../images/ground2.png';

function GroupExample() {
  return (
    <div className="container">
       <CardGroup className='mt-5 gap-2 mx-5'>
      <Card>
        <Card.Img variant="top" src={ground1} />
        <Card.Body>
          <Card.Title>sjhdvsdf fd f sdf sd g dsfgsd fs dfs df sdf sdf sd</Card.Title>
         
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={ground2} />
        <Card.Body>
          <Card.Title>amxxsd sadmsdsd sdnsjdhslkdsd sdksdnksadn</Card.Title>
         
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={ground2}/>
        <Card.Body>
         <Card.Title>amxxsd sadmsdsd sdnsjdhslkdsd sdksdnksadn</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={ground2}/>
        <Card.Body>
          <Card.Title>amxxsd sadmsdsd sdnsjdhslkdsd sdksdnksadn</Card.Title>
          
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
   </div>
  );
}

export default GroupExample;