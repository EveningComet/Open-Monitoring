import { Link, NavLink } from "react-router";
import '../../styles/navbar.css'

/**
 * A component that exists within a navigation bar.
 */
function NavigationElement( { to, label} )
{
    return(
        <NavLink
            to={to}
        >
            {label}
        </NavLink>
    )
}

export default NavigationElement;