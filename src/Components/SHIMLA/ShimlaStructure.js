import React from 'react'
import UsefulGuide from '../UsefulGuide';
import ShimlaInfo from './ShimlaInfo';
import ShimlaTable from './ShimlaTable';
import ShimlaVisit from './ShimlaVisit';

const ShimlaStructure = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <ShimlaInfo/>
            <ShimlaTable />
            <ShimlaVisit />
          </div>
          <div className="col-xl-3">
            <UsefulGuide />
          </div>
        </div>
      </div>
    </>
  )
}

export default ShimlaStructure;