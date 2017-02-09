import * as React from 'react';
import ReactDOM from 'react-dom';

export class HelloMessage extends React.Component {
    render() {
        return <div>Hello {this.props.name} s</div>;
    }
}

ReactDOM.render(<HelloMessage name="Jane" />, document.getElementById('mount'));