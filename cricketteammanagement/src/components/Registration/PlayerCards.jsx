import React, { useEffect, useState } from 'react'
import {Header} from "../Header";
import { Button, Card, Container, Modal, ModalTitle, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { deletePlayer, fetchPlayerCards } from '../../services/RegistrationService';
import dummyProfile from '../../images/dummyProfile.png'


const PlayerCards = () => {
    const [player, setPlayer] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedId, setSelectedId] = useState("");
    const navigate = useNavigate();
    
    const openModalDialog = () => {
        setShowDialog(true);
    }
    
    const closeModalDialog = () => {
        setShowDialog(false);
    }

    async function populatePlayerState() {
         try {
             const data = await fetchPlayerCards();
            console.log(data);
             setPlayer(data.registers);
            //  console.log(data.player);
         } catch (error) {
            console.log(error);
         }
    }
    
    useEffect(() => {
        populatePlayerState();
    }, [])

    const handlePlayerDelete = async () => {
        try {
            await deletePlayer(selectedId);
            populatePlayerState();
            closeModalDialog();
        } catch (error) {
            console.log(error);
        }
    } 

  return (
      <>
          <Container className='card-container'>              
              
            <Header text="Batter"></Header>
              {
                player.length !== 0 ? <div className='card-grid'>
                      {
                          player.map((players) => {
                              return (
                                  <div className='card-wrapper'>                                    
                                    
                                       <Card style={{ width: '13rem'}} key={players._id}>
                                        <Card.Img variant="top" src={dummyProfile}/>
                                        <Card.Body className='d-flex align-items-center' style={{flexDirection: "column"}}>
                                              <Card.Title style={{ fontFamily: "sans-serif", fontSize: "1rem", fontWeight: "700" }}>
                                                  {players.firstName} {players.lastName}</Card.Title>
                                            <Card.Text>
                                                  {players.position}
                                                  
                                                  
                                            </Card.Text>
                                          </Card.Body>
                                          
                                      </Card>     
                                      

                                           <div className='d-flex align-items-center justify-content-start mt-2 gap-2'>
                                          <Button variant="primary" onClick={() => {
                                              navigate(`/player/${players._id}`)
                                          }}>Update</Button>{' '}
                                          
                                          <Button variant="danger" onClick={() => {
                                              openModalDialog();
                                              setSelectedId(players._id)
                                              }}>Delete</Button>{' '}
                                          </div>
                                  
                                  </div>                           
           
                            )
                        })  
                        }
                  </div> : <p>No Player Data found..</p>
              }
          </Container>
          

          <Modal show={showDialog} onHide={closeModalDialog}>
              <Modal.Header closeButton>
                  <ModalTitle>Confirmation</ModalTitle>
              </Modal.Header>
              <Modal.Body>Do you really want to delete player card..:{selectedId})</Modal.Body>
              <Modal.Footer>
                  <Button variant="success" onClick={() => {
                      handlePlayerDelete();
                  }}>Yes</Button>
                  <Button variant='danger' onClick={closeModalDialog}>
                      No
                  </Button>
              </Modal.Footer>
          </Modal>
      </>
  )
}

export default PlayerCards