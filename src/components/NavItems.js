import React from 'react'
import { NavLink } from 'react-router-dom';

const NavMenu = (props) => {
    return (
        <li>
            <NavLink to={props.to} exact activeClassName="navActive"> {props.name} </NavLink>
        </li>
    );
}

const NavButton = (props) => {
    return (
        <button>
            {props.text}
        </button>
    )
}


export { NavMenu, NavButton };
