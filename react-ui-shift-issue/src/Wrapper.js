import React from 'react';


export default class Wrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      values:this.props.values
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(index){
    console.log('Wrapper  onChagne  ', index)
    let ts = this.state.values.slice(0);
    ts[index].checked = !ts[index].checked;
    this.setState({
       values: ts
    });
  }

  render(){
    console.log(' Wrapper render  ', this);
    return (
      <div className="wrapper multiple-values-list-component">
      <ul>
        {this.state.values.map((option, index) => {
          return (<li key={index}>
            <label htmlFor={index}>
              <input
                    id={index}
                    type="checkbox"
                     checked={option.checked}
                     onChange={()=>{
                       this.onChange(index);
                     }}/>
              <span className={'label ellipsis'}>{option.value}</span>
              <span className={'indicator'} />
            </label>
          </li>)
        })
        }
      </ul>
      </div>
    )
  }
}