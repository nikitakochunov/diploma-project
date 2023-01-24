import React from 'react'

const Button = ({ className, text, children }) => {
  return (
    <button className={'rounded px-2 py-1 ' + className}>
      {!children ? text : children}
    </button>
  )
}

export default Button
