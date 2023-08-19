import React from 'react'
// BT - Included your .css file here.
import './myCss.css'

function StylingSheets(props) {
    // BT - Conditioning the props. 
    let color = props.color ? 'primary' : ''
    console.log(color)
  return (
    <div>
        {/* BT - Multiple css styles, you list them out what properties you want from your css file 
                 Note: `` back ticks allows you to mix variable and string one line
        */}
        <h2 className={`${color} font-xl`}>StylingSheets</h2>
    </div>
  )
}

export default StylingSheets