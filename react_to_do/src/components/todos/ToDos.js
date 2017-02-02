import * as React from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

export default class Todos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(description) {
        const newItem = this.state.items.concat([{
            item: description,
            done: false
        }]);

        this.setState((pre, prop)=> {
            return {
                items: newItem
            }
        });
    }

    render() {
        return (
            <div>
                <CreateTodo addItem={this.addItem}/>
                <TodoList items={this.state.items}/>
            </div>);
    }
}


