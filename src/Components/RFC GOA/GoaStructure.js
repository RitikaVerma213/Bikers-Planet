import React from 'react'
import UsefulGuide from '../UsefulGuide'
import GoaInfo from './GoaInfo'
import GoaTable from './GoaTable'
import GoaVisit from './GoaVisit'

const GoaStructure = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <GoaInfo />
            <GoaTable />
            <GoaVisit />
          </div>
          <div className="col-xl-3">
            <UsefulGuide />
          </div>
        </div>
      </div>
    </>
  )
}

export default GoaStructure