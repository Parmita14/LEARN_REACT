import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const parms = useParams();
    
  return (
    <div>User {parms}</div>
  )
}
