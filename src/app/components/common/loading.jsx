import React from 'react'

const Loading = ({ children }) => {
  return (
    <div className='p-4 text-center text-xl'>
      {children ? children : 'Загрузка...'}
    </div>
  )
}

export default Loading
