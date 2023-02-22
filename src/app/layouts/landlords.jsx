import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../api'
import LandlordPage from '../components/pages/landlordPage'
import { useLandlords } from '../hooks/useLandlords'

const Landlords = () => {
  const { landlordId } = useParams()

  // const [landlords, setLandlords] = useState([])
  const { getLandlord } = useLandlords()

  // useEffect(() => {
  //   api.landlords.fetchAll().then((data) => setLandlords(data))
  // }, [])

  const landlord = getLandlord(landlordId)

  return <>{landlordId && landlord ? <LandlordPage data={landlord} /> : ''}</>
}

export default Landlords
