import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import { Container } from "react-bootstrap";
 
const Footer = () => {
    return (
        <Container fluid>
            <Box>
            <h1
                style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                IPL
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>TEAM</Heading>
                        <FooterLink href="#">
                            Chennai Super Kings
                        </FooterLink>
                        <FooterLink href="#">
                            Delihi Capitals
                        </FooterLink>
                        <FooterLink href="#">
                            Royal Challenges Banglore
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>ABOUT</Heading>
                        <FooterLink href="#">
                            About us
                        </FooterLink>
                        <FooterLink href="#">
                            Anti Doping Policy
                        </FooterLink>
                        <FooterLink href="#">
                            News Access Regulation
                        </FooterLink>
                        <FooterLink href="#">
                            Image use Terms 
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>CONTACT US</Heading>
                        <FooterLink href="#">
                            Uttar Pradesh
                        </FooterLink>
                        <FooterLink href="#">
                            Ahemdabad
                        </FooterLink>
                        <FooterLink href="#">
                            Indore
                        </FooterLink>
                        <FooterLink href="#">
                            Mumbai
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>SOCIAL MEDIA</Heading>
                        <div className="d-flex">
                        <FooterLink href="#" style={{padding:'0 12px'}}>
                            <i className="fab fa-facebook">
                            
                            </i>
                        </FooterLink>
                        <FooterLink href="#" style={{padding:'0 12px'}}>
                            <i className="fab fa-instagram">
                            
                            </i>
                        </FooterLink>
                        <FooterLink href="#" style={{padding:'0 12px'}}>
                            <i className="fab fa-twitter">
                             
                            </i>
                        </FooterLink>
                        <FooterLink href="#" style={{padding:'0 12px'}}>
                            <i className="fab fa-youtube">
                                
                            </i>
                        </FooterLink>
                        </div>
                       
                    </Column>
                </Row>
            </FooterContainer>
            <h4
                style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                © 2023 Copyright:Shubham Nangare, Balarm Melkunde ,Vaishnavi Masudage
            </h4>
        </Box>
        </Container>
    );
};
export default Footer;