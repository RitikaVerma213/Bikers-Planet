import React from 'react'
import UsefulGuide from '../UsefulGuide'
import BangaloreInfo from './BangaloreInfo'
import BangaloreTable from './BangaloreTable'
import BangaloreVisit from './BangaloreVisit'

const BangaloreStructure = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <BangaloreInfo />
            <BangaloreTable />
            <BangaloreVisit />
          </div>
          <div className="col-xl-3">
            <UsefulGuide />
          </div>
        </div>
      </div>
    </>
  )
}

export default BangaloreStructure