import React from 'react';
// import { NavLink } from 'react-router-dom'; // Assuming you're using React Router

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBar from './SearchBar';



const NavigationBar = () => {
  return (
    <Navbar expand="md" className="py-2 px-5 sticky-top" style={{backgroundColor: "#19398A", zIndex: "1000"}}>
      <Container fluid>
        <Navbar.Brand className="pr-7">
          <LinkContainer to="/">
              <Nav.Link><img src={require('../images/MI.png')} alt="Logo" height="50" width="110" /></Nav.Link>
           </LinkContainer>
            
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 gap-5"  // mx-auto to center the content horizontally
            style={{ maxHeight: '100px', fontFamily: "poppins", fontWeight: 600, alignItems: 'center',fontSize:17,wordSpacing:2, justifyContent: 'center'}}
            navbarScroll
          >
            <LinkContainer to='/' style={{color: "#FFFBF5"}}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/teams' style={{color: "#FFFBF5"}}>
              <Nav.Link>Teams</Nav.Link>              
            </LinkContainer>
            <LinkContainer to='/pointsTable'  style={{color: "#FFFBF5"}}>
              <Nav.Link >Points Table</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/News' style={{color: "#FFFBF5"}}>
              <Nav.Link >News</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/registration' style={{color: "#FFFBF5"}}>
              <Nav.Link >Registration</Nav.Link>
            </LinkContainer>

           
              <NavDropdown title="More" id="navbarScrollingDropdown" className="custom-dropdown">
                <NavDropdown.Item >Book Tickets</NavDropdown.Item>
                <NavDropdown.Item >Buy jersey</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item >Interviews/Videos</NavDropdown.Item>
              </NavDropdown>              
            
          </Nav>
          {/* <Nav className="mr-5"> */}
          {/* </Nav> */}
          <Form className="d-flex flex-column align-items-center" >         
            <SearchBar />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
