import { Alert, Container } from "react-bootstrap";

export function Header(props){
    return (
        <Container className="mt-5">
           
                <h2>{props.text}</h2>
            
        </Container>
    );
}