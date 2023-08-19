import React from 'react'

//##############################################################################################################
// BT - SUMMARY:
//      a. function PassingParams({name1, age}) <==Destructure right into the function arguments.
//      b. Destructuring in the function body.
//         function PassingParams(props){ const {name1, age} = props } return ( name: {name1} age: {age})}
//##############################################################################################################

// ########################################################################################
// BT - Function component receiving an argument or react called - props or properties.
//      It can be any name. But 'props' is the react recommended.
//#########################################################################################

// BT - Note1: you can do: function PassingParams({name1, age}){ return ( <h2> {name1} - {age}</h2>) }
//             Think of this as a normal passing in the argument and use it in your function.
//
//      Note2: function PassingParams(props){
//                 //Destructure params
//                 const {name1, age } = props
//                 return (
//                             <h1> { name1 } - { age } </h1>
//                         )
//                }
//            
function PassingParams(props) {

    console.log(props)

  return (
    <div>PassingParams
    <h2> Welcome {props.name} - age {props.age} </h2>
    {/* BT - This is how to get the addition params passin as a child from App component */}
    {props.children}
    </div>
  )
}

export default PassingParams