import React from "react";
import logo from "../../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link>
                  <a>All Toys</a>
                </Link>
              </li>
              <li>
                <Link>
                  <a>My Toys</a>
                </Link>
              </li>
              <li>
                <Link>
                  <a>Add A Toys</a>
                </Link>
              </li>
              <li>
                <Link>
                  <a>Blogs</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link>
                  <a>All Toys</a>
                </Link>
              </li>
              <li>
                <Link>
                  <a>My Toys</a>
                </Link>
              </li>
              <li>
                <Link>
                  <a>Add A Toys</a>
                </Link>
              </li>
              <li>
                <Link>
                  <a>Blogs</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <img className="w-32" src={logo} alt="" />
        </div>
        <div className="navbar-end">
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
