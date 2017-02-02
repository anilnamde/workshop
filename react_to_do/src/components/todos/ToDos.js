import * as React from 'react';

import CreateTodo from './CreateTodo'

class Todos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    addItem(item) {

    }

    render() {
        return (
            <div>
                <CreateTodo addItem={this.addItem}/>
                {/*<TodoList items={this.state.items}/>*/}
            </div>);
    }


}

