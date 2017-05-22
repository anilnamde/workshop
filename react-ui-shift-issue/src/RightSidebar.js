import React from 'react';
import Wrapper from './Wrapper'

export default class ReightSidebar extends React.Component{
  constructor(p){
    super(p);
  }

  render(){
    return (
      <div className="right-sidebar">
        <Wrapper
          values={this.props.values}
        />
      </div>
    )
  }
}