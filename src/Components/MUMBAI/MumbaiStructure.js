import React from 'react'
import UsefulGuide from '../UsefulGuide'
import MumbaiInfo from './MumbaiInfo'
import MumbaiTable from './MumbaiTable'
import MumbaiVisit from './MumbaiVisit'

const MumbaiStructure = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <MumbaiInfo />
            <MumbaiTable />
            <MumbaiVisit />
          </div>
          <div className="col-xl-3">
            <UsefulGuide />
          </div>
        </div>
      </div>
    </>
  )
}

export default MumbaiStructure