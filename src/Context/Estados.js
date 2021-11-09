import React,{useState,useReducer} from 'react';
import GlobalContext from './GlobalContext';


function Estados ({children}) {
    
    const [count,setCount] = useState(0)
    const [carrito,setCarrito] = useState([])
    
    
        
    const comprar = (prod)=>{
        setCount(count+1);
        console.log("prod",prod,);
        const nuevoCarrito = [prod,...carrito]
        setCarrito(nuevoCarrito)
    }

        
    return(
        <GlobalContext.Provider
            value={{
                comprar,
                count,
                carrito,
                                                      
            }}
        >
        {children}
        </GlobalContext.Provider>
        
    )

}

export default Estados;