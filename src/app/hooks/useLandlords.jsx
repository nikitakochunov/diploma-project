import React, { useContext, useEffect, useState } from 'react'
import landlordService from '../services/landlord.service'

const LandlordsContext = React.createContext()

export const useLandlords = () => {
  return useContext(LandlordsContext)
}

export const LandlordsProvider = ({ children }) => {
  const [landlords, setLandlords] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getLandlordsList()
  }, [])

  useEffect(() => {
    if (error !== null) {
      console.log('error:', error)
      setError(null)
    }
  }, [error])

  const getLandlordsList = async () => {
    try {
      const { content } = await landlordService.fetchAll()
      setLandlords(content)
      setLoading(false)
      return content
    } catch (error) {
      catchError(error)
    }
  }

  const getLandlord = (value) => {
    return landlords.find((landlord) => landlord.value === value)
  }

  const catchError = (error) => {
    const { message } = error.response.data
    setError(message)
  }

  return (
    <LandlordsContext.Provider value={{ getLandlord, isLoading }}>
      {children}
    </LandlordsContext.Provider>
  )
}
