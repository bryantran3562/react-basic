import React from 'react'

// BT - Import your module.css
import styles from './myCssStylingModule.module.css'

//#######################################################################################################
// BT - The idea is that - this module.css extension will only work locally to this component verus
//      .css would work with children component too or globally effect.
//#######################################################################################################

function StylingCssModule() {
  return (
    <div className={styles.error}>StylingCssModule</div>
  )
}

export default StylingCssModule