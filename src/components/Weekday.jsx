import React from 'react'
import { weekdays } from '../constants'

function Weekday() {
  return (
    <div className='weekday-container'>{weekdays?.map(weekday => {
       return <div key={weekday} className='weekday'>{weekday}</div>
    })}</div>
  )
}

export default Weekday