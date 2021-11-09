import React from 'react';
import {Form} from 'react-bootstrap';

function FormGroup (props) {

    const {type,placeholder,name,value,change} = props

    return(
        <Form.Group controlId={"formBasic"+name}>
            <Form.Control type={type} placeholder={placeholder} name={name} value={value} onChange={change}/>
        </Form.Group>
    )

}
export default FormGroup