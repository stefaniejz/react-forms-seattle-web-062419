// Code ControlledInput Component Here
import React, { Component } from 'react'

class ControlledInput extends Component {
    state = {
        value: ''
    }
    
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    render() {
        return (
            <form onSubmit = {event => this.handleSubimt(event)}>
               <input type="text" value = {this.state.value} 
               onChange = {this.handleChange} />
            </form>
        )
    }
}

export default ControlledInput;