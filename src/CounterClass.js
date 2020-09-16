import React, { Component } from 'react';


class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0
         }
        this.increment = this.increment.bind(this)
    }
    increment(){
        this.setState({count: this.state.count + 1})
        
    }
    render() { 
        return ( 
            <>
            <h1>The Count is: {this.state.count}</h1>
            <button onClick={this.increment}>Add 1</button>
            </>
         );
    }
}
 
export default CounterClass;