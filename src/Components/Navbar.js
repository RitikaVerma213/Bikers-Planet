import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return(
    <>
      <nav className="navbar navbar-expand-lg nav-bg sticky-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-white" to="/">
            <img src="https://adityabhardwaj03.github.io/BikersPlanet/images/hayabusa-removebg-preview.png" 
            height={"50px"}
            style={{ filter: "invert(100%" }}
            />
            Bikers Planet
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active text-white border border-warning rounded" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/Events">
                  Events
                </NavLink>
              </li>
              <li className="nav-item dropdown ">
                <NavLink
                  className="nav-link dropdown-toggle text-white"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Places to Ride
                </NavLink>
                <ul className="dropdown-menu nav-bg">
                  <li>
                    <NavLink className="dropdown-item text-white" to="/Chandigarh">
                      CHANDIGARH
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item text-white" to="/Shimla">
                     SHIMLA
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item text-white" to="/Manali">
                     MANALI
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item text-white" to="/Mumbai">
                      MUMBAI
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item text-white" to="/Goa">
                      RFC GOA
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item text-white" to="/Bangalore">
                      BANGALORE
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/FAQs">FAQs</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Enter Location"
                aria-label="Search"
              />
              <button className="btn border-white text-white" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
