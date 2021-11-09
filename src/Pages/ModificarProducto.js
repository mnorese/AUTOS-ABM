import React,{useState,useEffect} from "react";
import firebase from "../Config/firebase";
import { getFirestore, collection, doc, getDoc,setDoc} from 'firebase/firestore';
import Producto from "../Components/Producto";
import Alerts from '../Components/Alerts';
import FormGroup from '../Components/Forms/FormGroup';
import Buttons from '../Components/Buttons';



function ModificarProducto(props) {

    const id=props.match.params.id
    
    const [form,setForm] = useState({marca:"",modelo:"",color:"",patente:"",id:null})
    const [producto,setProducto] = useState({});
    const [alert,setAlert] = useState({variant:"",text:""})

    const db = getFirestore()
    const autos = collection(db, "autosDB");
    const documentRef = doc(db, "autosDB", id);
    

    const handleSubmit = async (event)=>{
        event.preventDefault()
        
        try{
            const snapshot = await setDoc(documentRef,form);
            setProducto(form)
            console.log("Document",document)
            setAlert({variant:"success",text:"Producto editado"})
        
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
                    setForm(snapshot.data())
                    console.log("document",snapshot.data(),id)    
                }catch(e){
                    console.log("error",e)
                }
            }
            request();
        },
        []
       
    )

    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        console.log("handleChange",name,value)
        setForm({...form,[name]:value})
    }

            return(
            <div>
            <Producto info={producto} detalle={false} modificar={false} eliminar={false} comprar={false}/>
                      
            <form onSubmit={handleSubmit}>
            <FormGroup type="text" name="marca" placeholder="Ingrese la marca" value={form.marca} change={handleChange}></FormGroup>
            <FormGroup type="text" name="modelo" placeholder="Ingrese el modelo" value={form.modelo} change={handleChange}></FormGroup>
            <FormGroup type="text" name="color" placeholder="Ingrese el color" value={form.color} change={handleChange}></FormGroup>
            <FormGroup type="text" name="patente" placeholder="Ingrese la patente" value={form.patente} change={handleChange}></FormGroup>
             <Buttons type="submit">Editar</Buttons>
             <Alerts variant={alert.variant} text={alert.text}/>
             </form>
             </div>
        )
    

}

export default ModificarProducto;


