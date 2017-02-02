import * as React from 'react';

export default class CreateTodo extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            text: ''
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    onTextChange({target}){
        console.log(target.value)
    }

    onAdd(){
        console.log(this.state)
    }

    render(){
        return (<div>
            <input type="text"
                   placeholder="[Enter To Do]"
                   onChange={this.onTextChange}/>
            <input type="button"
                   value="Add"
                   onClick={this.onAdd}/>
        </div>)
    }
}