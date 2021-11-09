import './App.css';
import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import Inicio from './Pages/Inicio';
import AltaProducto from './Pages/AltaProducto';
import Menu from './Components/Menu';
import ModificarProducto from './Pages/ModificarProducto';
import BajaProducto from './Pages/BajaProducto';
import {Container} from "react-bootstrap";
import Estados from './Context/Estados';
import Carrito from './Pages/Carrito';
import ComprarProducto from './Pages/ComprarProducto';


function App() {

    return (
    <Estados>
    <BrowserRouter>
      <Menu/>
      <Container>
      <Route path="/" exact component={Inicio}/>
      <Route path="/alta" exact component={AltaProducto}/>
      <Route path="/modificar/:id" exact component={ModificarProducto}/>
      <Route path="/baja/:id" exact component={BajaProducto}/>
      <Route path="/comprar/:id" exact component={ComprarProducto}/>
      <Route path="/carrito" exact component={Carrito}/>
      </Container>    
    </BrowserRouter>
    </Estados>
  );
}

export default App;

