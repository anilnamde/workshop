import * as React from 'react';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        console.log(this.props)
        return (<ul>
            {this.props.items.map((value, index)=>{
                return <li key={index}>
                    {console.log('insider', value)}
                    <span>{value.item}</span>
                    <a href="javascript:void(0)">{value.done ? 'done' : 'progress'}</a>
                </li>
            })}
        </ul>)
    }
}