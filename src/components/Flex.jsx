import React from 'react'

const Flex = ({children, className}) => {
    console.log(className)
  return (
    <div className={`flex ${className}`}>{children}</div>
  )
}

export default Flex