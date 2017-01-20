import React, { Component } from 'react';
import Square from './../Square/index';
import './style.css';

export default class Board extends Component{
    constructor(){
        super();
        this.state = {
            values: Array(9).fill().map((e, index)=> null)
        };
    }

    render(){
        return <ul className="board">{
            this.state.values.map((value, index)=>{
                return <li key={index}>
                    <Square value={this.state.values[index]}/>
                </li>
            })
        }</ul>
    }
}



