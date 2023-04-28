import React from "react";
import BreadCrumbs from "../BreadCrumbs";
import PlacesBan from "../PlacesBan";
import "../PlacesBan.css";
import ScrollUp from "../ScrollUp";
import MumbaiStructure from "./MumbaiStructure";

const Mumbai = () => {
  return (
    <>
      <PlacesBan banner="mumbaiBanner" />
      <BreadCrumbs city="Mumbai" />
      <MumbaiStructure />
      <div className="scrollUp">
        <ScrollUp />
      </div>
    </>
  );
};

export default Mumbai;
