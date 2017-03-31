// const reducer = (state=[] , action)=>{
//   switch(action.type){
//     case 'add_counter':
//       return [...state , 0]
//     case 'remove_counter':
//       return state.slice(0 , state.length - 1)
//     case 'inc_counter':
//       return [ ...state.slice(0 , action.id) , state[action.id] + 1 , ...state.slice(action.id+1)]
//     case 'dec_counter':
//       return [ ...state.slice(0 , action.id) , state[action.id] + 1 , ...state.slice(action.id+1)]
//     default:
//       return state 
//   }
// } 

// export default reducer

const todo = (state , action) => {
  switch(action.type){
    case 'add_todo': 
      return  {text:action.text , completed: false , id: action.id }
    case 'toggle_todo':
      if (action.id == state.id) {
        return {
          ...state , 
          completed: !state.completed
        }
        return state 
      }
    default: 
      return state 
  } 
}

const todos = (state = [] , action) => {
  switch(action.type){
    case 'add_todo':
      return [...state , todo(null , action )]
    case 'toggle_todo':
      return state.map( t => todo(t , action))
    default: 
      return state
  }
}

const setVisibilityFilter = (state , action) => {
  switch(action.type){
    case 'change_visibility_filter':
      return action.to
    default:
      return state 
  }
}

const reducer = (state , action) => {
  return {
    todos : todos(state.todos , action) , 
    setVisibilityFilter: setVisibilityFilter(state.setVisibilityFilter ,action)
  }
}
// or
const reduer = combineReducers({
  todos , setVisibilityFilter
})


// implementation of combineReducer . 

const combineReducer = (reducers)=>
  (state = {} , action) => // combine reducers return the rootReducer 
    Object.keys(reducers).reduce(
      (next)
    )


---> pause































class MyComponent extends React.Component {
  navigate() {
    const { router } = this.context
    // this.context.router . 
    router.transitionTo('/some/new/location')
  }
}

MyComponent.contextTypes = {
  router: React.PropTypes.object
}



// to activate redux def tools 


import {createStore , compose} from 'redux'

const store = createStore(reducer = (f)=>f , compose(
  typeof window === 'object' && typeof window.devToolsExtenstion !== undefined ? window.defToolsExtenstion() : (f) => f
))

// a thunk : a function with zero args that returns a value calculated at compile time not immediately .. 

// how to use redux-thunks 

import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk' 
import reducer from './reducer'

const store = createStore(reducer , applyMiddleware(thunk)) // you have a thunk middle ware not 
// now redux has the ablity to understand actions and functions .. 

// what is 
// -> action creators to return a function instead of an action ... thunk -> used to delay the dispatch 
// of an action or to dispatch only if a certain condition is met . 
// the inner function recieves (getstate , disdpatch) <<--- inner function . 

const INCREMENT_COUNTER = 'INCREMENT_COUNTER'

const increment = () => ({
  type: INCREMENT_COUNTER
})

const incrementAsync = () => 
  dispatch => {
    // after 1sec dispatch this action . 
    setTimeout(() => {
      dispatch(increment())
    } , 1000)
  }

const incrementIfOdd = () => 
  (dispatch , getState) => {
    const {counter} = getState()
    if(counter % 2 !== 0) 
      dispatch(increment)
  }










