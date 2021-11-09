import React,{useState,useEffect,useContext} from "react";
import { getFirestore, collection, doc, getDoc,setDoc} from 'firebase/firestore';
import {Link} from "react-router-dom";
import Producto from "../Components/Producto";
import Alerts from '../Components/Alerts';
import {Button} from "react-bootstrap";
import GlobalContext from "../Context/GlobalContext";


function ComprarProducto(props) {

    const id=props.match.params.id;
       
    const context = useContext(GlobalContext)
    
    const [producto,setProducto] = useState({});
    const [alert,setAlert] = useState({variant:"",text:""})

    const db = getFirestore()
    const documentRef = doc(db, "autosDB", id);
    
        
    function handleComprar () {
        
        try{
            setAlert({variant:"success",text:"Producto agregado al carrito"})
        
        }catch(e){
            console.log("error",e)
            setAlert({variant:"warning",text:"Error!"})
        }
        
    }

    useEffect(
        ()=>{
            async function request (){
                try{
                    const snapshot = await getDoc(documentRef);
                    console.log("obtener datos",snapshot)
                    setProducto(snapshot.data())
                    context.comprar(snapshot.data()) 
                    handleComprar()
                    console.log("document",snapshot.data(),id)    
                }catch(e){
                    console.log("error",e)
                }
            }
            request();
        },
        []
        
    )

    return(
            <div>
            <Producto key={producto.id} info={producto} detalle={false} comprar={false}/>
            <Alerts variant={alert.variant} text={alert.text}/>
            <Button variant="warning"><Link to={"/carrito"}>Ver Carrito</Link></Button>
            </div>
            
        )
    

}

export default ComprarProducto;


