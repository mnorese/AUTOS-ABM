import React from 'react';
import {Button} from 'react-bootstrap';


const styles={
    button:{
        marginTop:"20px",
        fontColor:"white"
    
    }
}

function Buttons (props) {

    const {variant,type} = props;
    
        
    return(
        <Button
            type={type || "submit"}
            vatiant={variant || "primary"}
            style={styles.button}
        >

         {props.children}   
        </Button>
        
        
    )
}

export default Buttons