import React from "react";
import { Icon } from "../../Icons";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Menu() {
  return (
    <nav>
      <ul className="flex flex-col gap-1">
        <NavLink
          className={({ isActive }) => {
            return isActive ? "bg-active" : "";
          }}
          exact
          to="/"
        >
          <li className="h-10 gap-4 flex items-center text-sm font-semibold text-link hover:text-white  px-4 rounded">
            <span>
              <Icon name="home" size="24" />
            </span>
            Ana sayfa
          </li>{" "}
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) => {
            return isPending ? "pending" : isActive ? "bg-active" : "";
          }}
          to="/search"
        >
          {" "}
          <li className="h-10 flex  items-center gap-4 text-sm font-semibold text-link hover:text-white px-4 rounded ">
            <span>
              <Icon name="search" size="24" />
            </span>
            Ara
          </li>
        </NavLink>
        <NavLink
          to="/collection"
          className={({ isActive, isPending }) => {
            return isPending ? "pending" : isActive ? "bg-active" : "";
          }}
        >
          <li className="h-10 flex items-center gap-4 text-sm font-semibold text-link  px-4 rounded hover:text-white ">
            <span>
              <Icon name="library" size="24" />
            </span>{" "}
            <a href="#">Kitaplığın</a>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Menu;
