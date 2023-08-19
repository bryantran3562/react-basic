import React from 'react'
import ComponentE from './ComponentE'

// BT - Note: Since we explicitly define export keyword to UserContext and ChannelContext, we must
//            use {} and exact name to reference them from anther file.

import { ChannelContext, UserContext } from '../../App'

import { useContext } from 'react'

function ComponentC() {

    //#######################################################################################################
    // BT - You just passed your UserContext into the useContext hook and get the return, then just use it.
    //#######################################################################################################
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

  return (
    <div>
      <h2>ComponentC</h2>
      <ComponentE />

      <p>ComponentC: {user} - {channel} </p>
    </div>
  )
}

export default ComponentC