import React,{useState} from "react";
import firebase from "../Config/firebase";
import { getFirestore, collection, addDoc} from 'firebase/firestore';
import Producto from "../Components/Producto";
import Alerts from '../Components/Alerts';
import FormGroup from '../Components/Forms/FormGroup';
import {Button,Form,Spinner} from "react-bootstrap";


function AltaProducto(props) {
    const [form,setForm] = useState({marca:"",modelo:"",color:"",patente:"",id:null})
    const [alert,setAlert] = useState({variant:"",text:""})

    const db = getFirestore()
    
    const handleSubmit = async (event)=>{
        event.preventDefault()
        
        try{
            const document = await addDoc(collection(db, "autosDB"), {
                    marca:form.marca,
                    modelo:form.modelo,
                    color:form.color,
                    patente:form.patente,
                 
            });
            setAlert({variant:"success",text:"Producto ingresado"});
            setForm({marca:"",modelo:"",color:"",patente:""})

        }catch(e){
            console.log("error",e)
            setAlert({variant:"warning",text:"Error!"})
            
        }
        
    }
    
    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        console.log("handleChange",name,value)
        setForm({...form,[name]:value})
        console.log("form",form)
    }

       
        return(
     
            <div>                              
               <h6>Alta De Producto</h6>
               <form onSubmit={handleSubmit}>
               <FormGroup type="text" name="marca" placeholder="Ingrese la marca" value={form.marca} change={handleChange}></FormGroup>
               <FormGroup type="text" name="modelo" placeholder="Ingrese el modelo" value={form.modelo} change={handleChange}></FormGroup>
               <FormGroup type="text" name="color" placeholder="Ingrese el color" value={form.color} change={handleChange}></FormGroup>
               <FormGroup type="text" name="patente" placeholder="Ingrese la patente" value={form.patente} change={handleChange}></FormGroup>
               <Button variant="warning" type="submit">Ingresar</Button>
               <Alerts variant={alert.variant} text={alert.text}/>
                </form>
            </div>
          
            
        )
    
}
export default AltaProducto;

