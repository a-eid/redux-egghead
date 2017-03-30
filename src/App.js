import React, { Component } from 'react';
import {connect} from 'react-redux'

const App=({counters , remove_counter , add_counter , inc_counter , dec_counter}) => (
  <div className="App">
    { counters.map((counter , i) =>(
      <div key={i}>
        <h2>{counter}</h2>
        <button onClick={ inc_counter.bind(null , i) }>+</button>
        <button onClick={ dec_counter.bind(null , i) }>-</button>
      </div>
    ))}
    <h2>
      manage counters 
    </h2>
    <button onClick={add_counter}>add counter</button>
    <button onClick={remove_counter}>delete counter</button>
  </div>
)

const mapStateToProps = (state) =>({
  counters : state
})

const mapDispatchToProps = (dispatch) =>({
  add_counter: () => dispatch({type: 'add_counter'}), 
  remove_counter: () => dispatch({type: 'remove_counter'}), 
  inc_counter: (id) => dispatch({type: 'inc_counter' , id}), 
  dec_counter: (id) => dispatch({type: 'dec_counter' , id}), 
})

export default connect(mapStateToProps , mapDispatchToProps)(App);
