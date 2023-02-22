import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import Loader from '../components/common/loader'
import districtService from '../services/district.service'
import metroStationService from '../services/metroStation.service'

const AddressContext = React.createContext()

export const useAddress = () => {
  return useContext(AddressContext)
}

export const AddressProvider = ({ children }) => {
  const [metroStations, setMetroStations] = useState([])
  const [districts, setDistricts] = useState([])

  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getMetroStationsList()
    getDistrictsList()
  }, [])

  useEffect(() => {
    if (error !== null) {
      console.log('error:', error)
      setError(null)
    }
  }, [error])

  const getMetroStationsList = async () => {
    try {
      const { content } = await metroStationService.fetchAll()
      setMetroStations(content)
      // setLoading(false)
      return content
    } catch (error) {
      catchError(error)
    } finally {
      console.log('metro')
    }
  }

  const getDistrictsList = async () => {
    try {
      const { content } = await districtService.fetchAll()
      setDistricts(content)
      setLoading(false)
      return content
    } catch (error) {
      catchError(error)
    }
  }

  const getMetroStation = (value) => {
    return metroStations.find((metro) => metro.value === value)
  }

  const getDistrict = (value) => {
    return districts.find((district) => district.value === value)
  }

  const catchError = (error) => {
    const { message } = error.response.data
    setError(message)
  }

  return (
    <AddressContext.Provider
      value={{
        isLoading,
        metroStations,
        districts,
        getMetroStation,
        getDistrict,
      }}
    >
      {!isLoading ? children : <Loader />}
    </AddressContext.Provider>
  )
}
