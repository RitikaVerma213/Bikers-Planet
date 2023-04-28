import React from "react";
import BreadCrumbs from "../BreadCrumbs";
import PlacesBan from "../PlacesBan";
import "../PlacesBan.css";
import ScrollUp from "../ScrollUp";
import ChandigarhStructure from "./ChandigarhStructure";

const Chandigarh = () => {
  return (
    <>
      <PlacesBan banner="chandigarhBanner" />
      <BreadCrumbs city="Chandigarh" />
      <ChandigarhStructure />
      <div className="scrollUp">
        <ScrollUp />
      </div>
    </>
  );
};

export default Chandigarh;
