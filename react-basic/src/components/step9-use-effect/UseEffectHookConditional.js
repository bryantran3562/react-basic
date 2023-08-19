import React, {useState,useEffect} from 'react'

function UseEffectHookConditional() {
    // BT - Initialize your variable.
    const [count, setCount] = useState(0)

    const [name, setName] = useState('')

    //################################################################################################
    //BT - Basic idea of the useEffect hook with the condition is that:
    //a. We want the useEffect hook only runs when count is updated. Everything else in page updated,
    //   will not causing this useEffect hook run.
    //b. Passing a second argument: [] and specify which updated variable will caused this useEffect
    //   hook runs. In this case, variable count.
    //   Meaning, when count is increased, the useEffect hook will run every time. However, when you
    //   enter a character in the input field, this will also caused the react to update the DOM or
    //   re-render the page, the useEffect hook will not run.
    //c. If you omitted the [count], then every time a change in both button and input field will 
    //   caused the useEffect hook runs.
    //################################################################################################

    useEffect(()=>{
        console.log('useEffect hook run...')
        document.title = count

     //BT - This below is a condition, only run the above useEffect hook, if count is changed, otherwise don't do any
     //     anything.
      
    },[count])  

  return (
    <div>
        <h2>UseEffectHook</h2>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        {/* BT - Before call the setCount, I want to pass a prevCount function with the prevCount + 1 */}
        <button onClick={() => setCount(prevCount => prevCount+1)}>Add {count} </button>
    </div>
  )
}

export default UseEffectHookConditional