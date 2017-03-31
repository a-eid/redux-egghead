import React , {Component} from 'react'
import {render} from 'react-dom'
import {createStore , combineReducers} from 'redux'
import './app.css'
// add-todo remove-todo toggle-todo 
const todos = (state = [] , action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [...state , {id: action.id , text: action.text , completed: false}]
    case 'TOGGLE_TODO':
      return state.map( t =>{
        if( t.id === action.id )
          return {...t , completed: !t.completed}
        return t 
      })
    default: 
      return state 
  }
} 
// show-all , incomplete , completed 
const visibilityFilter = (state = 'SHOW_ALL' , action) => {
  switch(action.type){
    case 'SHOW_ALL':
    case 'INCOMPLETE':
    case 'COMPLETE':
      return action.type
    default: 
      return state 
  }
}

const reducer = combineReducers({
  todos , visibilityFilter
})

const store = createStore(reducer)

const Todo = ({text , completed , toggleTodo , id , dispatch}) => (
  <div>
    <a href="#" onClick={(e) =>{ 
      e.preventDefault()
      dispatch({type: 'TOGGLE_TODO' , id}) }}>
      {text} {completed ? "completed" : "do it"}
    </a>
  </div>
) 

const VisFilter = ({visibilityFilter , dispatch}) => (
  <div>
    <span className={visibilityFilter === "SHOW_ALL" ? "active":"" } 
      onClick={ () => dispatch({type:"SHOW_ALL"})}>SHOW_ALL</span> 
    &nbsp;&nbsp;|&nbsp;&nbsp; 
    <span className={visibilityFilter === "INCOMPLETE" ? "active" : ""} 
      onClick={() => dispatch({type:"INCOMPLETE"})}>INCOMPLETE</span> 
    &nbsp;&nbsp;|&nbsp;&nbsp; 
    <span className={visibilityFilter === "COMPLETE" ? "active":""} 
      onClick={() => dispatch({type:"COMPLETE"})}>COMPLETE</span>
  </div>
)

let id = 0 
class TodoApp extends Component{
  addTodo = () => {
    this.props.dispatch({
      type: 'ADD_TODO' , 
      id: id++, 
      text: this.input.value
    })
    this.input.value = ""
  }

  render = () => (
    <div>
      <h2>todos</h2>
      <input type="text" ref={ input => this.input = input } />
      <button onClick={ this.addTodo }>add todo</button>
      <div>
        {this.props.todos.filter((t) =>{
          if(this.props.visibilityFilter === 'INCOMPLETE'){
            return !t.completed
          }else if(this.props.visibilityFilter === 'COMPLETE'){
            return t.completed
          }else{
            return true 
          } 
        }).map( 
          t =>
            <Todo key={t.id} text={t.text} completed={t.completed} id={t.id} dispatch={this.props.dispatch} />
        )}
      </div>
      <VisFilter dispatch={this.props.dispatch} visibilityFilter={this.props.visibilityFilter} />
    </div>
  )
  componentDidMount(){
    this.input.focus()
  }
}

const init = () => {
  render(<TodoApp dispatch={store.dispatch} {...store.getState()} /> , document.getElementById('root'))
} 

init()
store.subscribe(init)
