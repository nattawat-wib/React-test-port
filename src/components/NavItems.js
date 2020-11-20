import React from 'react'
import { NavLink } from 'react-router-dom';

const NavItems = (props) => {
    return (
        <li>
            <NavLink to={props.to} exact activeClassName="navActive"> {props.name} </NavLink>
        </li>
    );
}

export default NavItems;
