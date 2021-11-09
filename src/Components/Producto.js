import React from 'react';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';
import GlobalContext from "../Context/GlobalContext";
import '../Estilos/Producto.css';
import ComprarProducto from '../Pages/ComprarProducto';

function Producto(props) {

    const {info} = props

    const {id,marca,modelo,color,patente} = info

    const modificar = (props.modificar===true?true:false)
    const eliminar = (props.eliminar===true?true:false)
    const comprar = (props.comprar===true?true:false)

    return(
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Body className="body">
            <Card.Title>Nombre: {marca}</Card.Title>
            <Card.Text>Descripcion: {modelo}</Card.Text>
            <Card.Text>Precio: {color}</Card.Text>
            <Card.Text>Precio: {patente}</Card.Text>
            
            <div className="buttons">

            {
                modificar && 
                <Button variant="warning" size="sm"><Link to={"/modificar/"+id}>Editar</Link></Button>
            }

            {
                eliminar && 
                <Button variant="warning" size="sm"><Link to={"/baja/"+id}>Eliminar</Link></Button>
            }

            {
                comprar &&
                <Button variant="warning" size="sm"><Link to={"/comprar/"+id}>Comprar</Link></Button>
            }
            </div>
            </Card.Body>
            </Card>
        </div>
        

    )

}

export default Producto;
