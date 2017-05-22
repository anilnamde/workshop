import React, { Component } from 'react';
import RightSidebar from './RightSidebar'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

      values: [
        {value: 'One', checked: true},
        {value: 'One1', checked: true},
        {value: 'One2', checked: true},
        {value: 'One3', checked: true},
        {value: 'One4', checked: true},
        {value: 'One4', checked: true},
        {value: 'One5', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'One', checked: true},
        {value: 'Last', checked: true}
      ]
    }
  }
  render() {
    return (
      <RightSidebar
        values={this.state.values}
      />
    );
  }
}

export default App;
