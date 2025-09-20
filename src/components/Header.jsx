import React from 'react'

function Header({ year, handleBackArrow, handleNextArrow, monthInString }) {
  return (
    <div className='header'>
      <div className='back-arrow' onClick={handleBackArrow} >{"<"}</div>
      <div className='header-date'>{(monthInString)}-{year}</div>
      <div className='header-text'>Calendar</div>
      <div className='next-arrow' onClick={handleNextArrow}>{'>'}</div>

    </div>
  )
}

export default Header