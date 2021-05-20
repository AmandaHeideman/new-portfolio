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
            <li><a href="/projects/yahtzee">Yatzy</a></li>
            <li><a href="/projects/quiz">Quiz</a></li>
        <h3>Frontend 2 (HTML/CSS)</h3>
            <li><a href="/projects/acme">ACME</a></li>
            <li><a href="/projects/portfolio">Portfolio</a></li>
        <h3>Frontend 3 (React)</h3>
            <li><a href="/projects/stockmarket">Stockmarket</a></li>
            <li><a href="/projects/customer-register">Customer register</a></li>
        <h3>Database</h3>
            <li><a href="/projects/mysql">MySQL</a></li>
            <li><a href="/projects/mongodb">MongoDB</a></li>
        <h3>Backend 1 (Node.js)</h3>
            <li><a href="/projects/slack">Slack</a></li>
        <h3>Backend 2 (PHP)</h3>
            <li><a href="/projects/fakestore">Fakestore</a></li>
            <li><a href="/projects/api">API</a></li>
            <li><a href="/projects/fakestore-2">Fakestore 2</a></li>
        <h3>Other projects</h3>
            <li><a href="/projects/memory">Memory</a></li>
            <li><a href="/projects/lismelloparty">Lis melloparty</a></li>

      </div>
    </div>
  );
}
