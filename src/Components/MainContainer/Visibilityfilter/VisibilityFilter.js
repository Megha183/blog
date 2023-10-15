import React from 'react'
import { useSelector } from 'react-redux'
import './VisibilityFilter.css'
function VisibilityFilter() {
    const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)

  return (
    <div className='mt-5 visibility-filter '>
    {
        isLoggedIn?
        <>
        <span className='feed'>Your feed</span><span className='ms-3'>Globl feed</span>
        </>:<span className='feed'>Global feed</span>
    }
    </div>
  )
}

export default VisibilityFilter