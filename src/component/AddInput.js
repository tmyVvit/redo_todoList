import React, { Component } from 'react';
import '../App.css'

export default class AddInput extends Component {
    constructor(props){
        super(props);
        this.addInput = React.createRef();
    }

    addItem = ()=>{
        const input = this.addInput.current.value;
        if(input !== ""){
            this.props.onAddInput(input);
        }
        this.addInput.current.value = ""
    }
    render() {
        return (
            <div>
            <input className="input-text" type="text" name="ListItem" ref={this.addInput}/>
            <div id="button" onClick={this.addItem}>Add</div>
        </div>
        );
    }
}