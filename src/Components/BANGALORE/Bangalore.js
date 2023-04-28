import React from "react";
import BreadCrumbs from "../BreadCrumbs";
import PlacesBan from "../PlacesBan";
import "../PlacesBan.css";
import ScrollUp from "../ScrollUp";
import BangaloreStructure from "./BangaloreStructure";

const Bangalore = () => {
  return (
    <>
      <PlacesBan banner="bangaloreBanner" />
      <BreadCrumbs city="Bangalore" />
      <BangaloreStructure />
      <div className="scrollUp">
        <ScrollUp />
      </div>
    </>
  );
};

export default Bangalore;
