import React,{useState,useEffect} from 'react';
import Producto from '../Components/Producto';
import firebase from "../Config/firebase";
import { getFirestore, collection, getDocs} from 'firebase/firestore';
import Row from 'react-bootstrap/Row';
import '../Estilos/Inicio.css'


function Inicio() {
    
    const [productos,setProductos] = useState([])
    
    const db = getFirestore()


    const getProductos = async ()=>{
        
        try{
            const querySnapshot = await getDocs(collection(db, "autosDB"))
            setProductos(querySnapshot.docs)
            console.log("inicio",productos)
                       
        }catch(e){
        console.log("error",e)
        
        }
    }

    useEffect(
        ()=>{
             getProductos()
        },
        []
    )

    return(
            <div>
                <div className="productosInicio">
                    <Row xs={4}>
                    {productos.map(prod=><Producto info={{...prod.data(),id:prod.id}} comprar={true} modificar={true} eliminar={true}/>)}
                    </Row>
                </div>
            </div>
                
                
        )
        
}
    
    


export default Inicio;