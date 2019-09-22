import React from 'react';
import {InputGroup, DropdownButton, MenuItem, Image, Col, Row, Well, Panel, FormControl, FormGroup,
    ControlLabel, Button} from 'react-bootstrap';


export const NameInput = (props) => {
    return(
            <div>
                <FormGroup  controlId="name" >
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter Name"

                        onSubmit={props.submit}

                        value={props.nodeValue}




                        onBlur={props.stateUpdate}
                    />
                    <FormControl.Feedback/>
                </FormGroup>

            </div>
        )


};



// class NameInput extends React.Component {
//     constructor(props){
//         super(props);
//
//         this.state={
//           name: '',
//           success: ''
//         };
//
//         this.handleNameChange = this.handleNameChange.bind(this);
//     }
//
//     componentDidMount(){
//
//     }
//
//     handleNameChange(event){
//
//         this.setState({name: event.target.value})
//
//
//     }
//
//
//     render(){
//         return(
//             <div>
//                 <FormGroup  controlId="name" >
//                     <ControlLabel>Name</ControlLabel>
//                     <FormControl
//                         type="text"
//                         placeholder="Enter Name"
//                         ref="name"
//                         value={this.props.nodeValue}
//
//                         className={this.state.success}
//                         onChange={this.props.stateUpdate}
//                     />
//                     <FormControl.Feedback/>
//                 </FormGroup>
//
//             </div>
//         )
//     }
//
//
//
// }
//
//
//
// export default NameInput;