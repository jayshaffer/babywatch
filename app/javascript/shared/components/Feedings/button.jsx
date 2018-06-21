import React from 'react';
import ReactDOM from 'react-dom';

export default class Button extends React.Component{
    render(){
        return(
            <button {...this.props} className="button">Add Feeding</button>
        )
    }
}