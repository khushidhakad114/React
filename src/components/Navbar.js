import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginOut } from "../redux/userSlice";
import Restaurant from "./Restaurant";

const Navbar = () => {
  const username = useSelector((store) => store?.userSlice?.user?.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a
                  onClick={() => {
                    navigate("/home");
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/restaurants");
                  }}
                >
                  Restaurant
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    dispatch(loginOut());
                    navigate("/login");
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
          <div className="btn btn-ghost text-xl">
            <button
              className="text-white bg-indigo-600 border border-black rounded-lg p-1"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">
            Welcome {username} to our Kitchen!
          </a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
          </button>

          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5" />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;