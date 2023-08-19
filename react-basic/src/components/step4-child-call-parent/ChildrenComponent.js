import React from 'react'

//#########################################################################################
// BT -The idea is that - you call parent function and passing your param to the parent.
//#########################################################################################

function ChildrenComponent(props) {
  return (
    <div>
        {/* BT - Child component called parent function and passing their params back to parent.
            Note: You must use the arrow function to pass the params from child back to
                  parent.
         */}
        <button onClick={() => props.parentHandlerFunction('child params')}>Click Me</button>
    </div>
  )
}

export default ChildrenComponent