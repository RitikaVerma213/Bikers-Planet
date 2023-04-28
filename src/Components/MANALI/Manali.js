import React from "react";
import BreadCrumbs from "../BreadCrumbs";
import PlacesBan from "../PlacesBan";
import "../PlacesBan.css";
import ScrollUp from "../ScrollUp";
import ManaliStructure from "./ManaliStructure";

const Manali = () => {
  return (
    <>
      <PlacesBan banner="manaliBanner" />
      <BreadCrumbs city="Manali" />
      <ManaliStructure />
      <div className="scrollUp">
        <ScrollUp />
      </div>
    </>
  );
};

export default Manali;
