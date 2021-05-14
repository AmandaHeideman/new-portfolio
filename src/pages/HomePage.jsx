import React from 'react'
import helloPic from '../images/hello.png'

export default function HomePage() {
    return (
        <div>
            <div className="heading">
                <img src={helloPic} alt="hello" class="hello"></img>
                <h3>My name is Amanda, and I'm a full stack web developer</h3>
            </div>
        </div>
    )
}
