import React from "react";
import logoImg from "../../assets/images/logo.ico";
import styles from "./styles.css";

export function Navbar() {
  return (
    <header>
      <nav id="navbar">
        <div className="nav_brand">
          <img src={logoImg} alt="" className="logo" />
          <h1>Space Flight News</h1>
        </div>

        <ul className="nav_list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Trending</a>
          </li>
          <li>
            <a href="/">Categories</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
