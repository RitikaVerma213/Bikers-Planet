import React from "react";
import BreadCrumbs from "../BreadCrumbs";
import PlacesBan from "../PlacesBan";
import "../PlacesBan.css";
import ScrollUp from "../ScrollUp";
import GoaStructure from "./GoaStructure";

const Goa = () => {
  return (
    <>
      <PlacesBan banner="goaBanner" />
      <BreadCrumbs city="Goa" />
      <GoaStructure />
      <div className="scrollUp">
        <ScrollUp />
      </div>
    </>
  );
};

export default Goa;
