import React from 'react'
import {NavMenu, NavButton} from './NavItems';

const Navbar = () => {
    return (
        <nav>
            <div className="nav container">
                <h1 className="nav__logo" > Nattwat-Port </h1>
                <input type="checkbox" id="nav__toggle"/>
                <ul>
                    <NavMenu name="Home" to="/" />
                    <NavMenu name="About" to="about" />
                    <NavMenu name="Contact" to="contact" />
                </ul>
                <div className="nav__button" >
                    <NavButton text="Project" />
                </div>
                <label for="nav__toggle" > <i class="fas fa-bars"></i> </label>
            </div>
        </nav>
    )
}

export default Navbar
