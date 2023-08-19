import React, {useState} from 'react'

function UseStateArray() {

    const [items, setItems] = useState([])

    //####################################################################################
    // BT - Same idea as useState with objects, you must use spread operator: ...items
    //####################################################################################

    const addItem = () => {
        setItems([
            ...items, {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])
    }

  return (
    <div>
        <h2>UseStateArray</h2>

        <button onClick={addItem}>Click to Add an item</button>

        <ul>
            {
                items.map(item => {return <li key={item.id}>item: {item.value}</li>})
            }
            
        </ul>
    </div>
  )
}

export default UseStateArray