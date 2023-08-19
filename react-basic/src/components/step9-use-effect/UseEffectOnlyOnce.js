import React, {useState, useEffect} from 'react'

function UseEffectOnlyOnce() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const LogMouseMove = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    //#############################################################################################################
    // BT - The idea is that - sometimes, we only want to have the useEffect hook runs only once.
    //      Why? Because the code below will called every mouse move and it will addEventListener repeatedly.
    //      This is not good.
    //      We only want to add an addEventListener only once on start up.
    //#############################################################################################################

    useEffect(() => {
        console.log('useEffect called...')
        window.addEventListener('mousemove', LogMouseMove)

        //##############################################################################################
        // BT - You must also clean up or remove your eventListener by return with a function where
        //      it included a clean up function. This is a must.
        //##############################################################################################
        return (() => {
            window.removeEventListener('mousemove', LogMouseMove)
        })
    },[])


  return (
    <div>
        <h2>UseEffectOnlyOnce</h2>
        <p>setX: {x} - setY: {y}</p>
    </div>
  )
}

export default UseEffectOnlyOnce