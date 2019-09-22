import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {InputGroup, DropdownButton, MenuItem, Image, Col, Row, Well, Panel, FormControl, FormGroup,
    ControlLabel, Button, Form} from 'react-bootstrap';
import {contactSubmit} from "./contactSubmit";






let ContactForm = props => {
    const { handleSubmit, is } = props;
    return( <Form onSubmit={handleSubmit}>


        <FormGroup>

            <ControlLabel htmlFor="name">Name</ControlLabel>

                <Field className='form-control' id='name' name="name" component="input" type="text" />




        </FormGroup>
        <FormGroup>
            <ControlLabel htmlFor="email">Email</ControlLabel>
                <Field name="email" component="input" type="email" id='email' className='form-control'/>

        </FormGroup>
        <FormGroup>
            <ControlLabel htmlFor="message">Message</ControlLabel>
                <Field name="message" component="input" type="text" id='message' className='form-control'/>

        </FormGroup>

        <Button type="submit">Submit</Button>






    </Form>)
}

ContactForm = reduxForm({
    // a unique name for the form
    form: 'contact',

})(ContactForm);

export default ContactForm