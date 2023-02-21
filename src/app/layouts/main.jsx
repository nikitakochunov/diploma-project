import React from 'react'
import Footer from '../components/ui/footer'
import Header from '../components/ui/header'
import Selection from '../components/ui/selection/'

const Main = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col justify-start -mt-10'>
        <div>
          <Selection />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Main
