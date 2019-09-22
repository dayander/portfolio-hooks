import React from 'react';
import {InputGroup, DropdownButton, MenuItem, Image, Col, Row, Well, Panel, FormControl, FormGroup,
    ControlLabel, Button} from 'react-bootstrap';


class MessageInput extends React.Component{


render(){
    return(
        <div>
            <FormGroup controlId="message" >
                <ControlLabel>Message</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Leave a message"
                    name="message"

                    value={this.props.nodeValue}
                />
                <FormControl.Feedback/>
            </FormGroup>
        </div>
    )
}


}




export default MessageInput