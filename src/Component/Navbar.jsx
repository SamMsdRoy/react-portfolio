import React, { Fragment } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-light navbar-fixed">
        <div className="container-fluid cont">
          <span className="navbar-brand lead-4 m-0 text-dark">Portfolio</span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#togNav"
            style={{
              backgroundColor: "black",
              marginLeft: "auto",
              marginRight: "4px",
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="togNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/" className="nav-item">
                <span className="nav-link">Home</span>
              </Link>
              <Link to="/about" className="nav-item">
                <span className="nav-link">About</span>
              </Link>
              <Link to="/contact" className="nav-item">
                <span className="nav-link">Contact</span>
              </Link>
            </ul>

            <div className="icon-person ms-2">
              <span className="person-icon dropdown">
                <span
                  className="bi bi-person-circle btn btn-danger"
                  type="button"
                  data-bs-toggle="dropdown"
                  data-bs-target="#dropmenu"
                  style={{ fontSize: "23px", borderRadius: "25px" }}
                ></span>
                <ul
                  className="dropdown-menu text-center mt-3"
                  id="dropmenu"
                  style={{ backgroundColor: "white", borderRadius: "19px" }}
                >
                  <Link to="/education" className="dropdown-item">
                    <span className="nav-link" style={{ color: "black" }}>
                      Education Details
                    </span>
                  </Link>
                  <li className="dropdown-divider"></li>
                  <li className="dropdown-item">
                    <button
                      className="btn btn-small"
                      data-bs-toggle="modal"
                      data-bs-target="#hope"
                    >
                      Resume Download
                    </button>{" "}
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
