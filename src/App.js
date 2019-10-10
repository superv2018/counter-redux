import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import { createStore } from 'redux'; 
import './App.css';


const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
 switch(action.type) {
   case 'INCREMENT':
     return {
       count: state.count + 1
     };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
 }
}

const store = createStore(reducer);

class App extends Component {
  render() {
  return (
    <Provider store={store}>
     <Counter/>
    </Provider>
  );
}
}

export default App;
