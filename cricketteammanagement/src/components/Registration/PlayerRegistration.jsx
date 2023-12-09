import React, { useState } from 'react'
import { Alert, Button, Container, Dropdown } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { savePlayerCard } from '../../services/RegistrationService';

const Registration = () => { 
  const [file, setFile] = useState();
  const [formData, setFormData] = useState({ firstName: "", lastName: "" ,country: "",position: ""});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
  // if (e.target.type === 'file') {
  //   const selectedFile = e.target.files[0];

  //   if (selectedFile) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setFile(reader.result);
  //     };
  //     reader.readAsDataURL(selectedFile);
  //   } else {
  //     setFile(null); // Clear file if no file is selected
  //   }
  // } else {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  //   }
    
     setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await savePlayerCard(formData);
     
      setFormData({ firstName: "", lastName: "" ,country: "",position: ""});
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
      console.log(result.message);
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <>
      <h2 className='d-flex align-items-center justify-content-center mt-5'>Registration Form</h2>
    <Container className='register mt-5 align-items-center w-50 border border-2'>
   
    <Form className='my-5 mx-1' onSubmit={handleSubmit}>
      <Row>
         <Col>           
              <Form.Label as="legend" column >
               First Name : 
              </Form.Label>
               <Form.Control placeholder="First name" type='text' name='firstName' onKeyUp={handleChange}/>       
          </Col>
          <Col>        
              <Form.Label as="legend" column>
                Last Name : 
              </Form.Label>               
          <Form.Control placeholder="Last name" type='text' name='lastName' onKeyUp={handleChange}/>
        
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
            onKeyUp={handleChange}
          />
          <Form.Check
            type="radio"
                  label="Wk-Batsman"
                  value="wk-batsman"
            name="position"
            id="position2"
            onKeyUp={handleChange}
          />
          <Form.Check
            type="radio"
                  label="All-Rounder"
                  value="all-rounder"
            name="position"
            id="position3"
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
                  label="Bowler"
                  value="bowler"
            name="position"
            id="position4"
            onChange={handleChange}
          />
        </div>
      </Form.Group>
    </fieldset> 
        
          {/* <div className='d-flex align-items-center gap-4 '>
            <Form.Label >
              Add image : 
            </Form.Label>

            <div>
              <input type="file" onChange={handleChange} /> */}
              {/* <img src={file} /> */}
            {/* </div> */}
          {/* </div> */}
          
          <div className='d-flex align-items-center justify-content-start gap-4 mt-4'>
            <Form.Label >Country :</Form.Label>
            <div>
              <Form.Control placeholder="Country" type='text' name='country' onKeyUp={handleChange}/> 
            </div>           
          </div>

          {/* <div className='d-flex align-items-center justify-content-start gap-4 mt-4'>
            <Form.Label >Team :</Form.Label>
            <div className='px-3'>
               <Dropdown>
                  <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                    Select Team
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item >CSK</Dropdown.Item>
                    <Dropdown.Item >MI</Dropdown.Item>
                    <Dropdown.Item >RCB</Dropdown.Item>
                    <Dropdown.Item >RR</Dropdown.Item>
                    <Dropdown.Item >KKR</Dropdown.Item>
                    <Dropdown.Item >SRH</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            </div>           
          </div>   */}
 
           <div className='d-flex align-items-center justify-content-center mt-5'>              
                <Button className='px-5 py-2' variant="primary" type="submit">Register</Button>              
            </div>
        </Form>
            <Row className="mt-3">
                <Col lg={4}>
                    {isSubmitted?<Alert variant="success">Student Registered</Alert>:null}
                </Col>
            </Row>
      </Container>
      </>
  )
}

export default Registration