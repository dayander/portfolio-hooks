'use strict';
import React from 'react';
import {Jumbotron, Button, Grid, Row, Col} from 'react-bootstrap';
class PullQuote extends React.Component{
    constructor(){
        super();
        this.state={


        }}

        componentDidMount(){

        }


        render(){
            return(
                <Jumbotron className="white">
                    <div className="container pullquote">
                        <div className="pullquote-inner">

                        <h2><span className='underline' >{this.props.header}</span></h2>
                        <p>
                            {this.props.body}
                        </p>

                        </div>
                    </div>
                </Jumbotron>
            )
        }
    }





export default PullQuote;