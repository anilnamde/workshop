import * as React from 'react';
import CreateTodo from '../CreateToDo/CreateTodo';
import TodoList from '../TodoList/TodoList';

import './ToDos.css';

export default class Todos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.updateList = this.updateList.bind(this);
    }

    updateList(list) {
        this.setState(()=> {
            return {
                items: list
            }
        });

    }

    addItem(description) {
        const newItem = this.state.items.concat([{
            item: description,
            done: false
        }]);

        this.setState(()=> {
            return {
                items: newItem
            }
        });
    }

    render() {
        return (
            <div>
                <CreateTodo addItem={this.addItem}/>
                <div>Number of items: {this.state.items.length}</div>
                <TodoList items={this.state.items}
                          updateList={this.updateList}
                />
            </div>);
    }
}


