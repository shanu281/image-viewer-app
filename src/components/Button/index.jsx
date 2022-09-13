import React from 'react';
import './style.css'

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {active:'basketball'}
       
    }
    handleClick = (button) => this.setState({active:button})
    render(){
        let buttons = ['basketball', 'cricket', 'laptop', 'phone', 'pubg', 'tiger']
    return(
        <>
       { buttons.map(button => <button className={this.state.active === button ? 'active': ''} onClick={() => this.handleClick(button)}>{button}</button>
        )}
      

      <center>
       <div className='img-container'>
       <img src={`./image/${this.state.active}.jpeg`} alt ={this.state.active} />
       </div>
      </center>
        </>
    )
    }
}


export default Button;