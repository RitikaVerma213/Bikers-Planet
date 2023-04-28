import React from "react";
import UsefulGuide from "../UsefulGuide";
import ManaliInfo from "./ManaliInfo";
import ManaliTable from "./ManaliTable";
import ManaliVisit from "./ManaliVisit";

const ManaliStructure = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <ManaliInfo />
            <ManaliTable />
            <ManaliVisit />
          </div>
          <div className="col-xl-3">
            <UsefulGuide />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManaliStructure;
