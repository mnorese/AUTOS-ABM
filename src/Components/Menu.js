import React from 'react';
import {Link} from "react-router-dom";
import {Container,Navbar,Nav,NavDropdown} from "react-bootstrap";
import {Button} from 'react-bootstrap';
import { BsCart2 } from 'react-icons/bs';
import '../Estilos//Menu.css';
import GlobalContext from '../Context/GlobalContext';


function Menu() {
      
  return(
    <GlobalContext.Consumer>
      { context => 
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          
          <Nav.Link as={Link} to="/alta">Alta Producto</Nav.Link>
          
      </Nav>
      </Navbar.Collapse>
                     
          <div>Carrito: {context.count}</div>
    
    </Container>
    </Navbar>
  }
  </GlobalContext.Consumer>
)

}
export default Menu;
