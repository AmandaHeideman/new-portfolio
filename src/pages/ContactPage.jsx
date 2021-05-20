import React from "react";

export default function ContactPage() {
  return (
    <div className="container">
      <div className="mainContent">
        <h1>Contact me</h1>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:heideman.amanda@gmail.com">
              heideman.amanda@gmail.com
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/amanda-heideman-a443181b9/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/AmandaHeideman">GitHub</a>
          </li>
          <li>
            <a href="https://amandaheideman.artstation.com/">Art portfolio</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
