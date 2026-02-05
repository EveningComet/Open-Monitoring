/**
 * Depending on the user's account type, certain pages will be hidden.
 */

import { Link, NavLink } from "react-router";
import '../styles/navbar.css'

function NavigationBar( {type} )
{
    return(
        <nav className="navbar" id="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/manage-account">Manage Account</NavLink>
            <NavLink to="/alarm-history">Alarm History</NavLink>
            <NavLink to="/resources">Resources</NavLink>
        </nav>
    )
}

export default NavigationBar;