import * as React from 'react';
import './TodoList.css';

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
                    <span>{value.item} [{value.done ? 'done' : 'progress'}]</span>
                    <a href="javascript:void(0)"
                       onClick={()=>{
                           var updatedList = [].concat(this.props.items);
                           updatedList[index].done = true;

                           this.props.updateList(updatedList)
                       }}
                    >
                        {value.done ? '' : 'mark it done'}
                    </a>
                </li>
            })}
        </ul>)
    }
}