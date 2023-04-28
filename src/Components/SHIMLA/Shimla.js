import React from "react";
import BreadCrumbs from "../BreadCrumbs";
import PlacesBan from "../PlacesBan";
import "../PlacesBan.css";
import ScrollUp from "../ScrollUp";
import ShimlaStructure from "./ShimlaStructure";

const Shimla = () => {
  return (
    <>
      <PlacesBan banner="shimlaBanner" />
      <BreadCrumbs city="Shimla" />
      <ShimlaStructure />
      <div className="scrollUp">
        <ScrollUp />
      </div>
    </>
  );
};

export default Shimla;
