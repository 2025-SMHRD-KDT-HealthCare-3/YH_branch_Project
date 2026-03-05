import React from 'react'
import { useState } from 'react'

const react = () => {

    const [num,setNum] = useState(0)
        setNum +1 

return (
    <div>{num}</div>
  )
}

export default react