import React, { useEffect } from 'react'
import Footer from '../components/ui/footer'
import Header from '../components/ui/header'
import Selection from '../components/ui/selection/'
import useMockData from '../utils/mockData'

const Main = () => {
  // const { initialize } = useMockData()

  // useEffect(() => {
  //   initialize()
  // }, [])

  return (
    <>
      {/* <Header /> */}
      <div className='flex flex-col justify-start -mt-10 -mb-10'>
        <div>
          <Selection />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Main
