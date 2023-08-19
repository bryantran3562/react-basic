import React from 'react'

//#################################################
// BT - Step3 - Consumption the UserContext.
//#################################################

import { ChannelContext, UserContext } from '../../App'

import { useContext } from 'react'

function ComponentF() {

    //#######################################################################################################
    // BT - You just passed your UserContext into the useContext hook and get the return, then just use it.
    //#######################################################################################################
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

  return (
    <div>
        
        <h2>ComponentF</h2>
        <p>This is ComponentF: {user} - {channel}</p>

    </div>
  )
}

export default ComponentF