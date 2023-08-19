import React from 'react'

function ListRender() {
    const names = ['trong', 'quynh']
    const persons = [
        {
            id: 1,
            name: 'trong',
            age: 60
        },
        {
            id: 2,
            name: 'quynh',
            age: 59
        },
    ]

    const ListPerson = persons.map(person => <h2 key={person.id}> name: {person.name} - age: {person.age} </h2>)
  return (
    <div>
        <h2>ListRender</h2>
        {
            //###############################################################################################
            // BT - map is like: foreach loop.
            // foreach names load a name and do whatever you want and continue the loop until it exhausted.
            // You must provide a key.
            // It is better to have your list of items has its own unique id.
            // If you list of items do not have it, then you can use index. But it is not recommended
            // to use the index when your list of items needed sort or changing.
            // NOte: Map function is use for an array.
            //################################################################################################
            names.map((name, index) => {
                return <h2 key={index}> {name} </h2>
            })

            
        }
        {
            ListPerson
        }

    </div>
  )
}

export default ListRender