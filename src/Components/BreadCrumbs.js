import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = (props) => {
  return (
    <div className="container">
      <div className="my-4">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {props.city}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default BreadCrumbs;
