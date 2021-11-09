import GlobalContext from "../Context/GlobalContext";
import React,{useState,useEffect,useContext} from "react";
import Producto from "../Components/Producto";

function Carrito () {

    const context = useContext(GlobalContext)
    const [miCarrito,setMiCarrito] = useState([])
    
    useEffect(
        ()=>{
            setMiCarrito(context.carrito)
            console.log("carrito",context.carrito)                               
        },
        [],
        
    )
       

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {miCarrito.map (producto =>  <Producto info={producto} detalle={false} comprar={false}/>)}  
        </div>


    )
};


export default Carrito;