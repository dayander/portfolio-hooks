import React from 'react';

// class Header extends React.Component{
//
//     constructor(props){
//         super(props);
//
//         this.state = {
//             h1: this.props.h1,
//             h2: this.props.h2,
//             img: this.props.img,
//             color: this.props.color
//
//         }
//     }
//
//
//     render(){
//         const h2 = <h2>{(this.state.h2)}</h2>
//         return(
//             <div id="content"  tabIndex="-1">
//                 <div style={{ backgroundImage: `url(${this.state.img})`}} className='jumbotron header-image'>
//                     <div style={{color: this.state.color}} className='container'>
//                         <h1 >{this.state.h1}</h1>
//                         {(this.state.h2)?(h2):('')}
//
//                     </div>
//                 </div>
//
//             </div>
//         )
//     }
//
// }


//export default Header;


export const Header = ({color, img, h1, h2}) =>{
    let heading2;

    if(h2){
        heading2 = <h2>{(h2)}</h2>
   }else {
        heading2 = null
    }

    return(
        <div id="content"  tabIndex="-1">
            <div style={{ backgroundImage: `url(${img})`}} className='jumbotron header-image'>
                <div style={{color: color}} className='container'>
                    <h1 >{h1}</h1>
                    {heading2}


                </div>
            </div>

        </div>

    )
}