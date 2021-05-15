import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/style.css';

export default function Navigation() {
    return (
        <div className = "nav">
            <ul>
                <br />
                <li>
                <Link to="/">
                    Home
                </Link>
                </li>

                <li>
                <Link to="/about">
                    About
                </Link>
                </li>

                <li>
                <Link to="/contact">
                    Contact
                </Link>
                </li>

                <li>
                <Link to="/projects">
                    Projects
                </Link>
                </li>
            </ul>

        </div>
    )
}
