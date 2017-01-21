import React, {Component} from 'react';

import './style.css';

export default class Square extends Component {

    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            <button className="square"
                    type="button"
                    value={this.props.value}
            >
                {this.props.value}
            </button>
        );
    }
}