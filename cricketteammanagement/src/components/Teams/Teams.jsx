import React, { useEffect, useState } from 'react'
import {Header} from "../Header";
import { Card, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { fetchPlayerCards } from '../../services/RegistrationService';
import dummyProfile from '../../images/dummyProfile.png'
import { fetchTeamCards } from '../../services/TeamsService';


const Teams = () => {
    const [team, setTeam] = useState([]);
    const navigate = useNavigate();

    async function populateTeamState() {
         try {
             const data = await fetchTeamCards();
             console.log(data);
             setTeam(data.teams);
         } catch (error) {
            console.log(error);
         }
    }
    
    useEffect(() => {
        populateTeamState();
    }, [])

  const handleClick = () => {
    navigate("/player");
  }

  return (
      <>
          <Container className='card-container'>
              
              
            <Header text="Teams"></Header>
              {
                 Array.isArray(team) && team.length > 0 ?<div className='card-grid'>
                      {
                          team.map((teams) => {
                              return (
                                  <div className='card-wrapper'>{                                      
                                    //  players.length !== 0 && players.position === 'batsman' ?
                                       <Card style={{ width: '13rem'}} key={teams.id} onClick={handleClick}>
                                        <Card.Img variant="top" src={dummyProfile}/>
                                        <Card.Body className='d-flex align-items-center' style={{flexDirection: "column"}}>
                                              <Card.Title style={{ fontFamily: "sans-serif", fontSize: "1rem", fontWeight: "700" }}>
                                                  {teams.teamName} </Card.Title>
                                           
                                            {/* <Button variant="primary">Go somewhere</Button> */}
                                        </Card.Body>
                                          </Card> 
                                  }
                                  </div>                            
           
                            )
                        })  
                        }
                  </div> : <p>No Team found..</p>
              }
        </Container>
      </>
  )
}

export default Teams