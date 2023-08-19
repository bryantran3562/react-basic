import React, {useState, useEffect} from 'react'

function UseEffectHook() {

    // BT - Initialize your variable.
    const [count, setCount] = useState(0)

    //################################################################################################
    //BT - Basic idea of the useEffect hook is that:
    //a. It will run everytime there is a change in the DOM.
    //   Another words, it will run when:
    //   - ComponentDidMount -life cycle hook
    //   - ComponentDidUpdate - life cycle hook
    //b. It is best used for when the DOM is doing updates or render, you can use this useEffect hook to
    //   do something else. For example, side effects to fetch the data from the server...etc.
    //################################################################################################

    useEffect(()=>{
        document.title = count
    })  

  return (
    <div>
        <h2>UseEffectHook</h2>
        {/* BT - Before call the setCount, I want to pass a prevCount function with the prevCount + 1 */}
        <button onClick={() => setCount(prevCount => prevCount+1)}>Add {count} </button>
    </div>
  )
}

export default UseEffectHook