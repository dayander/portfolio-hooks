import React from 'react';
import {InputGroup, DropdownButton, MenuItem, Image, Col, Row, Well, Panel, FormControl, FormGroup,
    ControlLabel, Button} from 'react-bootstrap';



class EmailInput extends React.Component {
    constructor(props){
        super(props);

        this.state={

            success: ''
        };

    }






    render(){
        return(
            <div>
                <FormGroup controlId="email" >
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        type="email"
                        placeholder="Enter Email"
                        name="email"



                        onChange={this.props.stateUpdate}                            />
                    <FormControl.Feedback/>
                </FormGroup>

            </div>
        )
    }



}



export default EmailInput;