import React from "react";

export default function ProjectPage() {
  return (
    <div className="container">
      <div className="mainContent">
        <h1>Projects</h1>
        <p>Since I'm still in school, I have mostly done school projects.
            Here I have categorized them based on which course I made them in.
        </p>
        <h3>Frontend 1 (JavaScript)</h3>
            <li>Yatzy</li>
            <li>Quiz</li>
        <h3>Frontend 2 (HTML/CSS)</h3>
            <li>ACME</li>
            <li>Portfolio</li>
        <h3>Frontend 3 (React)</h3>
            <li>Stockmarket</li>
            <li>Customer register</li>
        <h3>Database</h3>
            <li>MySQL</li>
            <li>MongoDB</li>
        <h3>Backend 1 (Node.js)</h3>
            <li>Slack</li>
        <h3>Backend 2 (PHP)</h3>
            <li>Fakestore</li>
            <li>API</li>
            <li>Fakestore 2</li>
        <h3>Other projects</h3>
            <li>Memory</li>
            <li>Lis melloparty</li>

      </div>
    </div>
  );
}
