import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

export default function Navigation() {
  return (
    <div className="nav">
      <ul>
        <br />
        <h2>
          <li>
            <Link to="/">Home</Link>
          </li>
        </h2>

        <h2>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </h2>

        <h2>
          <li>
            <Link to="/about">About</Link>
          </li>
        </h2>

        <h2>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </h2>
      </ul>
    </div>
  );
}
