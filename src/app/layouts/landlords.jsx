import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../api'
import LandlordPage from '../components/pages/landlordPage'

const Landlords = () => {
  const { landlordId } = useParams()

  const [landlords, setLandlords] = useState([])

  useEffect(() => {
    api.landlords.fetchAll().then((data) => setLandlords(data))
  }, [])

  const landlord = landlords.find((landlord) => landlord.value === landlordId)

  return <>{landlordId ? <LandlordPage landlord={landlord} /> : ''}</>
}

export default Landlords
