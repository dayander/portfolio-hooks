import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setFormInput,postContact} from '../../actions/contactActions';
import {findDOMNode} from 'react-dom';


import {InputGroup, DropdownButton, MenuItem, Image, Col, Row, Well, Panel, FormControl, FormGroup,
    ControlLabel, Button, Form} from 'react-bootstrap';
import Header from "../Header";
import {PageTitle, setFocus} from "../a11y/pageA11y";
import {NameInput} from "../forms/nameInput";
import EmailInput from "../forms/emailInput";
import MessageInput from "../forms/messageInput";



class ContactFrom extends React.Component{

    constructor(props){
        super(props);



        this.state={
            contact: this.props.contact.contact,
            name: this.props.contact.contact.name,
            email: this.props.contact.contact.email,
            message: this.props.contact.contact.message,
            nameSuccess: "",
            emailSuccess: "",
            messageSuccess: "",
            success: false,





        };


        this.handleInputChange = this.handleInputChange.bind(this);
        this.resetValue = this.resetValue.bind(this);

    }

    validateForm(formData){
        let name = formData.name;
        let email = formData.email;
        let message = formData.message;


        let nameValid = this.validateName(name);
        let emailValid = this.validateEmail(email);
        let messageValid = this.validateMessage(message);



        if(nameValid && emailValid && messageValid){

            let formDataSend = {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            };

            this.props.postContact(formDataSend);
            console.log('props',this.props)


        }
        else{
            console.log("whoops");
            return;
        }
    }


    validateName(name){

        if(name.value !== '' && name !== ''){
            return true;
        }else{


        }


    }

    validateEmail(email){

        if(email.value !== '' && email !== ''){
            //sring minpulation to check for vailid email.

            return true;
        }else{
            // create some modal pop up and or with actions to queue error message on form

        }

    }

    validateMessage(message){

        if(message.value !== '' && message !== ''){


            return true;
        }else{
            // create some modal pop up and or with actions to queue error message on form

        }

    }



    handleSubmit(){
        const contact= {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        this.validateForm(contact);






    }

    componentWillReceiveProps(){
        console.log('props',this.props);
        console.log('state', this.state)

        this.setState(this.props.contact.contact)
    }


    handleInputChange(e){




        let name = e.target.name;
        let value = e.target.value;

        if(value === ""){
            value = null;

            this.props.setFormInput({[name]: value})
        }

        console.log('val',value);


        this.props.setFormInput({[name]: value})
        //
        //
        // this.setState({[name]: value});


    }


    resetValue(e){

        console.log('reset');

    }
    componentDidMount(){

        PageTitle('Contact Anderson Day');


        // Set focus to the content container
        // Ensure the viewport returns to the top of the document window
        setFocus();



    }

    componentDidUpdate(){



    }


    componentWillUpdate(){






    }

    componentWillMount(){




    }



    render(){

        const {nameValue, email, message,} = this.props.contact.contact;


        return(
            <div>


                <Header h1={"Contact Anderson Day"}/>
                <Col xs={12} >
                    <Panel>


                        <Form onChange={this.handleInputChange}>



                            <NameInput nodeValue={nameValue} stateUpdate={this.handleInputChange} />
                            <EmailInput nodeValue={email} stateUpdate={this.handleInputChange}/>
                            <MessageInput nodeValue={message} stateUpdate={this.handleInputChange}/>

                            <Button onClick={this.handleSubmit.bind(this)} >
                                Submit
                            </Button>
                        </Form>
                    </Panel>
                </Col>

            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return{

        contact: state.contact,
        success: state.success,
        name: state.name,
        email: state.email,
        message: state.message,

    }
};

const mapDispatchToProps= ( dispatch ) =>{
    return bindActionCreators(
        {
            postContact,
            setFormInput
        }, dispatch)
};




export default connect(mapStateToProps, mapDispatchToProps)(ContactFrom);
