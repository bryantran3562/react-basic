import React, {useReducer} from 'react'

//#######################################################################
// BT - The idea is the same as the useState.
//a. useReducer required a reducer function and initialState.
//b. The return is a newState and dispatch function.
//#######################################################################

const initialState = 0

//#####################################################################################################
// BT - Depend on what action, the reducer will perform a certain action to return the current state
//      to a newState.
//#####################################################################################################

const reducer = (state, action) => {

    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        defaut:
            return state           
    }
}
function UseReducer() {

    // BT - After all, you want to declare your variable which is count and a dispatch function that
    //      you can send which action you want to perform and then it will perform in the reducer function and
    //      return a newState in which it will assigned to your 'count' variable and you can use it in your html
    //      template.

    const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h2>UseReducer</h2>
        <div>Count {count} </div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducer