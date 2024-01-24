import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImage"
            src="data:image/jpeg;base64,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"
            alt=""
            srcset=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
