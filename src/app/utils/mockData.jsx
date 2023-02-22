import React, { useState, useEffect } from 'react'

import ads from '../mockData/ads.json'
import landlords from '../mockData/landlords.json'
import metroStations from '../mockData/metroStations.json'
import districts from '../mockData/districts.json'
import httpService from '../services/http.service'

const useMockData = () => {
  const statusConsts = {
    idle: 'Not Started',
    pending: 'In Process',
    successed: 'Ready',
    error: 'Error occured',
  }

  const [error, setError] = useState(null)
  const [status, setStatus] = useState(statusConsts.idle)
  const [count, setCount] = useState(0)
  const [progress, setProgress] = useState(0)

  const summaryCount =
    ads.length + landlords.length + metroStations.length + districts.length

  const incrementCount = () => {
    setCount((prevState) => prevState + 1)
  }

  const updateProgress = () => {
    if (count !== 0 && status === statusConsts.idle) {
      setStatus(statusConsts.pending)
    }

    const newProgress = Math.floor((count / summaryCount) * 100)
    if (progress < newProgress) {
      setProgress(() => newProgress)
    }

    if (newProgress === 100) {
      setStatus(statusConsts.successed)
    }
  }

  useEffect(() => {
    updateProgress()
  }, [count])

  async function initialize() {
    try {
      for (const ad of ads) {
        await httpService.put('ads/' + ad.value, ad)
        incrementCount()
      }

      for (const landlord of landlords) {
        await httpService.put('landlords/' + landlord.value, landlord)
        incrementCount()
      }

      for (const metroStation of metroStations) {
        await httpService.put(
          'metroStations/' + metroStation.value,
          metroStation
        )
        incrementCount()
      }

      for (const district of districts) {
        await httpService.put('districts/' + district.value, district)
        incrementCount()
      }
    } catch (error) {
      setError(error)
      setStatus(statusConsts.error)
    } finally {
      console.log('finally')
    }
  }

  return { error, initialize, progress, status }
}

export default useMockData
