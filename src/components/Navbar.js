import React from 'react'
import NavItems from './NavItems';
import NavButton from './NavButton'

const Navbar = () => {
    return (
        <nav>
            <div className="nav container">
                <h1 className="nav__logo" > Nattwat-Port </h1>
                <ul>
                    <NavItems name="Home" to="/" />
                    <NavItems name="About" to="about" />
                    <NavItems name="Contact" to="contact" />
                </ul>
                <div className="nav__button" >
                    <NavButton text="Project" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
