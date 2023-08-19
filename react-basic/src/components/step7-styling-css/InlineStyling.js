import React from 'react'

function InlineStyling() {
    
    //########################################################################
    // BT - Inline styling:
    //a. Create an object.
    //b. property name must be camel case and the value must be a STRING.
    //########################################################################

    const heading = {
        fontSize: '72px',
        color: 'blue'
    }
  return (
    <div style={heading}>InlineStyling</div>
  )
}

export default InlineStyling