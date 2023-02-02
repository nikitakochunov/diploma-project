import React from 'react'
import Header from '../components/ui/header'
import Selection from '../components/ui/selection/'

const Main = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col justify-start h-full -mt-10'>
        <div className='basis-3/4'>
          <Selection />
        </div>
      </div>
    </>
  )
}

export default Main
