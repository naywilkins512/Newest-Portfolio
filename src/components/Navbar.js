import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

function Navbarr() {

    return (

        <Navbar bg="transparent" variant="light">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar>

    )
};

export default Navbarr;