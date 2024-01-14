import React from 'react'
import LeftSideBar from '../../Home/LeftSideBar/LeftSideBar'
import InsightsMain from './InsightsMain/InsightsMain'

function Insights() {
  return (
    <div className='flex bg-primary-100 w-screen overflow-x-hidden overflow-y-hidden'>
      <LeftSideBar />
      <InsightsMain />
    </div>
  )
}

export default Insights