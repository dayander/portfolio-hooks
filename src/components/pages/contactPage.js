import React from 'react'
import ContactForm from '../forms/contact';
import {Well, Row, Col, Panel} from  'react-bootstrap';
import {Header} from "../Header";
import {contactSubmit} from "../forms/contactSubmit";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

class ContactPage extends React.Component {
    submit = values => {

         this.props.contactSubmit(values);

    }
    render() {
        return (
            <div>
                <Header h1={'Contact Anderson Day'}/>
                <Col xs={12}>
                    <Panel>
                <ContactForm onSubmit={this.submit} />
                    </Panel>
                </Col>

            </div>
        )
    }
}

const mapActionToDispatch= (dispatch)=>{
    return bindActionCreators({
            contactSubmit,
    }, dispatch)

}


export default connect(null,mapActionToDispatch)(ContactPage);