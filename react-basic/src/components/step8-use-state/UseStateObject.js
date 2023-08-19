import React from 'react'
import {useState} from 'react'
function UseStateObject() {

    const [name, setName] = useState({first: '', last: ''})
  return (
    <div>
        <h2>UseStateObject</h2>
        <form>
            {/* BT - ...name: is a spread operator, what it means is as follow:
                     copy all of the current object, and then just update the first
            */}
            <input type="text" value={name.first} onChange={e => setName({...name, first:e.target.value})}></input>
            <input type="text" value={name.last} onChange={e => setName({...name, last:e.target.value})}></input>
            <h2>first {name.first}</h2>
            <h2>last {name.last}</h2>             
        </form>
    </div>
  )
}

export default UseStateObject