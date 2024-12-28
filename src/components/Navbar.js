import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faBell } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Restaurant</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
          </button>

          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FontAwesomeIcon icon={faBell} className="h-5 w-5" />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
