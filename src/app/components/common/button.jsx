import React from 'react'

const Button = ({ className, text }) => {
  return <button className={'rounded px-2 py-1 ' + className}>{text}</button>
}

export default Button
