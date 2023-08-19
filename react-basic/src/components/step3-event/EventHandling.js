import React from 'react'

function EventHandling() {

    function clickHandler(){
        console.log('Button is clicked')
    }
  return (
    <div>
        <h2>EventHandling</h2>
        {/* BT - Pay attention of how to assigned onClick event with a function handler called: clickHandler
                 Notes: There is no (). This is a function call if you also have the (). We don't want that.
                        We want the onClick event to have a clickHandler function assigned to it.
        */}
        <button onClick={clickHandler}>Click Me</button>
    </div>
  )
}

export default EventHandling