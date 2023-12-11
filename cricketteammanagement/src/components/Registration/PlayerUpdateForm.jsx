import React, { useEffect, useState } from 'react'
import { Alert, Button, Container, Dropdown } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";
import { fetchPlayerById, savePlayerCard, updatePlayer } from '../../services/RegistrationService';

const PlayerUpdateForm = () => { 
const params = useParams();
  const [file, setFile] = useState();
  const [formData, setFormData] = useState({ firstName: "", lastName: "" ,country: "",position: ""});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {    
        const result = await updatePlayer(formData, params._id);   
        setIsSubmitted(true);  
        setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
 
    
    const populatePlayerState=async()=>{
        try {
            const result=await fetchPlayerById(params._id);
            setFormData(result.player);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        populatePlayerState();
    },[]);

  return (
    <>
      <h2 className='d-flex align-items-center justify-content-center mt-5'>Upadate register form</h2>
          <Container className='register mt-5 align-items-center w-50 border border-2'>
              
              {formData ?
   
                  <Form className='my-5 mx-1' encType='multiPart/form-data' onSubmit={handleSubmit}>
                      <Row>
                          <Col>
                              <Form.Label as="legend" column >
                                  First Name :
                              </Form.Label>
                              <Form.Control placeholder="First name" value={formData.firstName} type='text' name='firstName' onChange={handleChange} />
                          </Col>
                          <Col>
                              <Form.Label as="legend" column>
                                  Last Name :
                              </Form.Label>
                              <Form.Control placeholder="Last name" value={formData.lastName} type='text' name='lastName' onChange={handleChange} />
        
                          </Col>
                      </Row>
      
 
                      <fieldset className='mt-4'>
                          <Form.Group className="mb-3 d-flex align-items-center gap-4">
                              <Form.Label>
                                  Choose position :
                              </Form.Label>
                              <div className='d-flex align-items-center justify-content-between gap-4'>
                                  <Form.Check
                                      type="radio"
                                      label="Batsman"
                                      value="batsman"
                                      name="position"
                                      id="position1"
                                      onChange={handleChange}
                                      checked={formData.position==="batsman"?true:false}
                                  />
                                  <Form.Check
                                      type="radio"
                                      label="Wk-Batsman"
                                      value="wk-batsman"
                                      name="position"
                                      id="position2"
                                      onChange={handleChange}
                                      checked={formData.position==="wk-batsman"?true:false}
                                  />
                                  <Form.Check
                                      type="radio"
                                      label="All-Rounder"
                                      value="all-rounder"
                                      name="position"
                                      id="position3"
                                      onChange={handleChange}
                                      checked={formData.position==="all-rounder"?true:false}

                                  />
                                  <Form.Check
                                      type="radio"
                                      label="Bowler"
                                      value="bowler"
                                      name="position"
                                      id="position4"
                                      onChange={handleChange}
                                        checked={formData.position==="bowler"?true:false}

                                  />
                              </div>
                          </Form.Group>
                      </fieldset>
          
                      {/*         
          <div className='d-flex align-items-center gap-4 '>
            <Form.Label >
              Add image : 
            </Form.Label>

            <div>
              <input type="file" name="image" onChange={handleChange} /> 
              <img src={file} />
            </div>
          </div> */}
          
                      <div className='d-flex align-items-center justify-content-start gap-4 mt-4'>
                          <Form.Label >Country :</Form.Label>
                          <div>
                              <Form.Control placeholder="Country" type='text' name='country' value={formData.country} onChange={handleChange} />
                          </div>
                      </div>

    
 
                      <div className='d-flex align-items-center justify-content-center mt-5'>
                          <Button className='px-5 py-2' variant="primary" type="submit">Update</Button>
                      </div>
                  </Form> : <p>No data found</p>}
              
            <Row className="mt-3">
                <Col lg={4}>
                    {isSubmitted?<Alert variant="success">Player Registered</Alert>:null}
                </Col>
            </Row>
      </Container>
      </>
  )
}

export default PlayerUpdateForm