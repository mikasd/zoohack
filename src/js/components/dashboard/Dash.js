import React, { Component } from 'react';

class Dash extends Component{
    constructor(props) {
        super(props);
        this.state = {
            input_target:{
                tag: 'none',
                location: false
            }
        }
      }

    addTarget(){
        const { input_target } = this.state
        fetch('http://138.68.208.80/add', {  
            method: 'POST',   
            body: JSON.stringify({
            input_target
        })
        })
        .then(function (data) {  
        console.log('Request success: ', data);  
        })  
        .catch(function (error) {  
        console.log('Request failure: ', error);  
        });
    }

    render(){
        const { input_target } = this.state;
    return(
        <div className="targets">
            <div>
                <p>-----these are for testing inputting data into the db---</p>
                <input 
                value={input_target.name}
                onChange={e => this.setState({ input_target: {... input_target, name: e.target.value}})} />
                <input 
                value={input_target.isFlagged}
                onChange={e => this.setState({ input_target: {... input_target, isFlagged: e.target.value}})}  />
                <button onClick={this.addTarget}>Add Target</button>
            </div>
        </div>
    )
 }
}

export default Dash