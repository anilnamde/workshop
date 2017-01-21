import React, {Component} from 'react';

import './style.css';

export default class Square extends Component {
    render() {
        return (
            <button className="square"
                    type="button"
                    value={this.props.value}
                    onClick={()=> this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}