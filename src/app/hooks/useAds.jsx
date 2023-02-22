import React, { useContext, useEffect, useState } from 'react'
import adService from '../services/ad.service'

const AdsContext = React.createContext()

export const useAds = () => {
  return useContext(AdsContext)
}

export const AdsProvider = ({ children }) => {
  const [ads, setAds] = useState([])

  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getAdsList()
  }, [])

  useEffect(() => {
    if (error !== null) {
      console.log('error:', error)
      setError(null)
    }
  }, [error])

  const getAdsList = async () => {
    try {
      const { content } = await adService.fetchAll()
      setAds(content)
      setLoading(false)
      return content
    } catch (error) {
      catchError(error)
    }
  }

  const getAd = (value) => {
    return ads.find((ad) => ad.value === value)
  }

  const catchError = (error) => {
    const { message } = error.response.data
    setError(message)
  }

  return (
    <AdsContext.Provider value={{ isLoading, ads, getAd }}>
      {children}
    </AdsContext.Provider>
  )
}
