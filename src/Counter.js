import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

    increment = () => {
      this.props.dispatch({type: 'INCREMENT' });
    }
  
    decrement = () => {
      this.props.dispatch({type: 'DECREMENT' });
    } 

    render() {
    return (
      <div className="App">
          <h2>Counter</h2>
        
        <button onClick={this.increment}>Add</button>
        <p>{this.props.count}</p>
        <button onClick={this.decrement}>Remove</button>
      </div>
    );
  }
  }

  function mapStateToProps(state) {
    return {
        count: state.count
    };
}

  export default connect(mapStateToProps)(Counter);