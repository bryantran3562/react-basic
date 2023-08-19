//#########################################################################################
// BT - The {} is nothing more that - we want to use the exact name of that component.
//      This is because the component did not have the export default defined. So, you
//      must use the exact name.
//#########################################################################################
import React, {useState} from 'react'

function UseStateHook() {

    //############################################################################################################
    // BT - Simple: The react hook allows you hook up your data or state to the react hook feature
    //              so that it can preserved your current data state and also allowing you to update
    //              your current data state to a new value.
    // a. useState(0): This how you call the react hook state and initialize your value to a initial value.
    // b. [count,setCount]: The useState() hook will return the initial value and a function that you can call
    //                      to update your variable.
    // c. When updating the value, make sure you use the function: prevCount and passing prevCount + 1
    //#############################################################################################################

    const [count, setCount] = useState(0)

  return (
    <div>
        <h2>UseStateHook</h2>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Count {count} </button>
    </div>
  )
}

export default UseStateHook