import React, { useContext, useEffect, useState } from 'react'
import districtService from '../services/district.service'

const DistrictsContext = React.createContext()

export const useDistricts = () => {
  return useContext(DistrictsContext)
}

export const DistrictsProvider = ({ children }) => {
  const [districts, setDistricts] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getDistricts()
  }, [])

  useEffect(() => {
    if (error !== null) {
      console.log('error:', error)
      setError(null)
    }
  }, [error])

  const getDistricts = async () => {
    try {
      const { content } = await districtService.fetchAll()
      setDistricts(content)
      setLoading(false)
    } catch (error) {
      catchError(error)
    }
  }

  const catchError = (error) => {
    const { message } = error.response.data
    setError(message)
  }

  return (
    <DistrictsContext.Provider value={{ districts, isLoading }}>
      {children}
    </DistrictsContext.Provider>
  )
}
