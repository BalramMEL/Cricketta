import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainbackground from "../../images/Dharmashala.jpg";
import background from "../../images/HPCA.jpg";
import Rohit from "../../images/Rohit.jpg";
import MS from "../../images/MS.png";
import Markram from "../../images/Markram.png";
import VK from "../../images/VK.png";
import Iyer from "../../images/Iyer.png";
import KL from "../../images/KL.jpg";
import Warner from "../../images/Warner.png";
import Dhawan from "../../images/Dhawan.jpg";
import Gill from "../../images/Gill.jpg";
import Sanju from "../../images/Sanju Samson.png"
import { useNavigate } from 'react-router-dom';

const teamData = [
  { id: 1, title: 'MUMBAI INDIANS', image: Rohit},
  { id: 2, title: 'CHENNAI SUPER KINGS', image: MS},
  { id: 3, title: 'SUNRISERS HYDERABAD', image: Markram},
  { id: 4, title: 'ROYAL CHALLENGERS BANGALORE', image: VK },
  { id: 5, title: 'KOLKATTA KNIGHT RIDERS', image: Iyer },
  { id: 6, title: 'LUCKNOW SUPER GIANTS', image: KL },
  { id: 7, title: 'DELHI CAPITALS', image: Warner },
  { id: 8, title: 'PUNJAB KINGS', image: Dhawan },
  { id: 9, title: 'GUJARAT TITANS', image: Gill },
  { id: 10, title: 'RAJASTHAN ROYALS', image: Sanju },
];

export function Teams() {
    const navigate = useNavigate();

  function handleNavigation() {
      navigate('/player');
  }

  return (
    
    <div className="text-center" style={{backgroundImage:
      `url(${background})`,backgroundSize: 'cover'}}>
      <div style={{backgroundColor:'orangered',height:'55px'}}><h1 style={{textAlign:'center', fontFamily:'poppins',color:'white'}}> SQUADS </h1></div>

      <Container className='mt '>
        <Row xs={1} md={2} className="g-4 mx-auto justify-content-center" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          {teamData.map((team) => (
            <Col key={team.id} className="d-flex justify-content-center" onClick={handleNavigation}>
              {/* Add 'd-flex justify-content-center' for centering */}
              <Card className='teamCard' style={{ width: '30rem', textAlign: 'center', backgroundColor:'#F3F8FF'}}>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                  <Card.Img                    
                    variant="top"
                    style={{ height: '200px', width: '220px' }}
                    src={team.image} />
                </div>
                <Card.Body>
                  <Card.Title style={{ fontFamily: 'Oswald' }}><button style={{borderRadius:'6px', height:'50px',border:'none',backgroundColor:'gold'}}>{team.title}</button></Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
