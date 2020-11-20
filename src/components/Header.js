import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import { Parallax } from 'react-parallax';

const Header = () => {
    return (
        <header className="container">
            <h1> Hello World </h1>
            <h1> I'm <span> <ReactTypingEffect text={["Nattawat", "Front End", "Web Developer"]}
                speed={160} typingDelay={500} eraseSpeed={80} eraseDelay={1000}
                className="header__typing-text" /> </span> </h1>

            <Parallax blur={1} bgImage="https://images.unsplash.com/photo-1605853010259-412015b0ab6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
                style={{ height: '2000px', zIndex: -1 }} bgImageAlt="the cat" strength={1000}>
                Content goes here. Parallax height grows with content height.
    </Parallax>
        </header>
    )
}

export default Header
