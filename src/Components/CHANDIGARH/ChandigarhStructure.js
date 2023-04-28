import React from "react";
import UsefulGuide from "../UsefulGuide";
import ChandigarhInfo from "./ChandigarhInfo";
import ChandigarhTable from "./ChandigarhTable";
import ChandigarhVisit from "./ChandigarhVisit";

const ChandigarhStructure = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <ChandigarhInfo />
            <ChandigarhTable />
            <ChandigarhVisit />
          </div>
          <div className="col-xl-3">
            <UsefulGuide />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChandigarhStructure;
