/* eslint-disable react/no-unknown-property */
import React from "react";
import { NavLink } from "react-router-dom";
import "./Headermenu.css";
const HeaderMenu = () => {
  return (
    <div className="containerMenu">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle bg-transparent border-0"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="bi bi-three-dots "></i>
          Shop categories
        </button>
        <ul class="dropdown-menu  ">
          <li>
            <a class="dropdown-item color-white " href="#">
              Electronics
            </a>
          </li>
          <li>
            <a class="dropdown-item mt-2" href="#">
              jewelery
            </a>
          </li>
          <li>
            <a class="dropdown-item mt-2" href="#">
              mens clothing
            </a>
          </li>
          <li>
            <a class="dropdown-item mt-2" href="#">
              womens clothing
            </a>
          </li>
          <li>
            <a class="dropdown-item mt-2" href="#">
              Computer & laptops
            </a>
          </li>
          <li>
            <a class="dropdown-item mt-2" href="#">
              tablets & phones
            </a>
          </li>
          <li>
            <a class="dropdown-item mt-2" href="#">
              headphones
            </a>
          </li>
          <li>
            <a class="dropdown-item mt-2" href="#">
              accessories
            </a>
          </li>
        </ul>
      </div>
      <div className="arro">
        <NavLink className="home link" to="/home">
          <p>Home </p>
        </NavLink>
        <NavLink className="store link" to="/store">
          <p>Our Store</p>
        </NavLink>
        <NavLink className="contact link" to="/contact">
          <p>Contact</p>
        </NavLink>
        <NavLink className="contact link" to="/admin">
          <p>admin</p>
        </NavLink>
      </div>
      <div></div>
    </div>
  );
};

export default HeaderMenu;
