import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import { Parallax } from 'react-parallax';

const Header = () => {
    return (
        <header>
            <div className="header__center">
                <div className="header__text-box">
                    <h1> Hello World </h1> <br></br>
                    <h1> I'm <span> <ReactTypingEffect text={["Nattawat", "Front End", "Web Developer"]}
                        speed={160} typingDelay={500} eraseSpeed={80} eraseDelay={1000}
                        className="header__typing-text" /> </span> </h1>
                </div>
                <img className="header__img" src="/img/profile image.jpg" />
            </div>
            <div className="header__block1" ></div>
            <div className="header__block2" ></div>
        </header>
    )
}

export default Header
