import React from 'react';
import {Row, Col} from 'react-bootstrap'

class PostLarge extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            defaultImg: "/images/home1.png",
            defaultImgAltText: "home picture idk rn",
            readMore:false

        }
    }

    componentDidMount(){
        console.log("length",this.props.content.length)
    }


//added this code on the plane not checked
    render(){

        const autoDescription = () =>{
            if(this.props.content.length > 650){
                const readMoreDiv = <div className="readMore">Read More</div>;
                return readMoreDiv;
            }else{
                return'';
            }

        };


        return(
            <div className='blog-outer-wrap container'>

                    <Col className='img-hide' xs={12} sm={6}>
                        <img
                            className='blog-list-item-img'
                            src={(this.props.img)? this.props.imgPath : this.state.defaultImg}
                            alt={(this.props.img)? this.props.altText : this.state.defaultImgAltText}
                        />
                    </Col>
                    <Col xs={12} sm={6}>
                        <div className=''>
                            <h2>{this.props.title}</h2>
                        </div>
                        <div className='' >
                            {(this.props.description)?this.props.description: "Click Post to read more."}

                        </div>

                    </Col>



            </div>
        )
    }
}

export default PostLarge;

