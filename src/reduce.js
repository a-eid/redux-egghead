// a method applies a function against an accumelator 
// and every element of an array and reduce it to a single value 
[1,2,3,4].reduce((acc , val) => acc + val , 0)

list1 = [[0, 1], [2, 3], [4, 5]];
list2 = [0, [1, [2, [3, [4, [5]]]]]]
list1.reduce((acc , val)=> acc.concat(val), [])
 
const flatten = (arr) =>
  arr.reduce((acc , val)=>
    acc.concat(Array.isArray(val) ? flatten(val) : val )
  , [])


const combineReducer = (reducers) => // combine reducer return a reducer 
  (state = {} , action) =>  // reducer return mapping btw reducers and pieces in state . 
    Object.keys(reducers).reduce(
      (nextState , key) => {
        nextState[key] = reducers[key](state[key] , action )
      }
    , {})


