import React from 'react'
import Header from '../components/ui/header'
import Selection from '../components/ui/selection/'

const Main = () => {
  return (
    <div className='flex flex-col justify-start h-full'>
      <div className='basis-auto'>
        <Header />
      </div>
      <div className='basis-3/4'>
        <Selection />
      </div>
    </div>
  )
}

export default Main
