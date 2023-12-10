import React, { useEffect, useState } from 'react'
import {Header} from "../Header";
import { Button, Card, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { fetchPlayerCards } from '../../services/RegistrationService';
import dummyProfile from '../../images/dummyProfile.png'


const PlayerCards = () => {
    const [player, setPlayer] = useState([]);
    const navigate = useNavigate();

    async function populatePlayerState() {
         try {
             const data = await fetchPlayerCards();
             console.log(data);
             setPlayer(data.registers);
         } catch (error) {
            console.log(error);
         }
    }
    
    useEffect(() => {
        populatePlayerState();
    }, [])


  return (
      <>
          <Container className='card-container'>
              
              
            <Header text="Batter"></Header>
              {
                 player.length !== 0 ? <div className='card-grid'>
                      {
                          player.map((players) => {
                              return (
                                  <div className='card-wrapper'>{                                      
                                    //  players.length !== 0 && players.position === 'batsman' ?
                                       <Card style={{ width: '13rem'}} key={players.id}>
                                        <Card.Img variant="top" src={dummyProfile}/>
                                        <Card.Body className='d-flex align-items-center' style={{flexDirection: "column"}}>
                                              <Card.Title style={{ fontFamily: "sans-serif", fontSize: "1rem", fontWeight: "700" }}>
                                                  {players.firstName} {players.lastName}</Card.Title>
                                            <Card.Text>
                                                {players.position}
                                            </Card.Text>
                                            {/* <Button variant="primary">Go somewhere</Button> */}
                                        </Card.Body>
                                          </Card> 
                                  }
                                  </div>                            
           
                            )
                        })  
                        }
                  </div> : <p>No Player Data found..</p>
              }
        </Container>
      </>
  )
}

export default PlayerCards