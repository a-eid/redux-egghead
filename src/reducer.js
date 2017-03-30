const reducer = (state=[] , action)=>{
  switch(action.type){
    case 'add_counter':
      return [...state , 0]
    case 'remove_counter':
      return state.slice(0 , state.length - 1)
    case 'inc_counter':
      return [ ...state.slice(0 , action.id) , state[action.id] + 1 , ...state.slice(action.id+1)]
    case 'dec_counter':
      return [ ...state.slice(0 , action.id) , state[action.id] + 1 , ...state.slice(action.id+1)]
    default:
      return state 
  }
} 


export default reducer