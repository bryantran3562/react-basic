import React from 'react'
import ChildrenComponent from './ChildrenComponent'

//################################################################################################################
// BT - The idea is allowing to have children call back the parent. This can be accomplished by using props
//      and passing parent handler to child. Then child will execute the function in parent.
//################################################################################################################

function ParentComponent() {

  // BT - Function is defined in parent component.

  const parentHandler = (child) => {
    alert(`This is a parentHandler received: ${child}`)
  }

  return (
    <div>
        <h2>ParentComponent</h2>
        {/* BT - Pass the parent function to child component. */}
        <ChildrenComponent parentHandlerFunction={parentHandler}/>
    </div>
  )
}

export default ParentComponent