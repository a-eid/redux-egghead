// => core 

// a tepical state for a todo application . 
{
  todos:[ // application data state .
    { 
      text: "do that", 
      completed: true
    },
    {
      text: "do this ", 
      completed: false
    }
  ],
  visibilityFilter: "SHOW_ALL"  // ui state . 
}
// -------------------------------------------------------------
// to change the state you have to dispatch an action actions: look like this 

{type: "ADD_TODO" , text: "go to swimming pool"}
{type: "TOGGLE_TODO" , index: 2}
{type: "SET_VISIBILITY_FILTER" , filter: "SHOW_COMPLETED"}

// -----------------------------------------------------------
// tieing state and action together with a producer : 
// a function that takes a state and an action an introduces a new state 
// reducers are pure functions . 

const visibilityFilter = (state = "SHOW_ALL" , action) =>
  state.type == 'SET_VISIBILITY_FILTER' ? action.filter : state 

const todos = (state = [] , action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [...state , {completed: false , text: action.text}]
    case 'TOGGLE_TODO':
      return state.map( (todo , index) => 
        index == action.index ? { ...todo , completed: !todo.completed } : todo ) 
    case 'REMOVE_TODO':
      return state.filter( (todo , index) => 
       index == todo.index ?  false : true )
    default 
      return state . 
  }
}

//--------------------------------------------------------------
// above are 2 reducers to manage 2 parts of the state : now we combine them in main reducer . 

const todoApp = (state , action) => {
  return {
    todos: todos(state.todos , action),
    visibilityFilter: visibilityFilter(state.visibilityFilter , action)
  }
}
// above is the overall reducer for the application. 

// => three Principles 
  
  // 1- single source of truth . 

  // 2- state is read-only . 

  // 3-  











