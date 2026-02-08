/**
 * Depending on the user's account type, certain pages will be hidden.
 */

import '../../styles/navbar.css'
import NavigationElement from './NavigationElement';

function NavigationBar( {type} )
{
    return(
        <nav className="navbar" id="navbar">
            <NavigationElement
                to="/"
                label="Home"
            />
            <NavigationElement
                to="/manage-account"
                label="Manage Account"
            />
            <NavigationElement
                to="/alarm-history"
                label="Alarm History"
            />
            <NavigationElement
                to="/resources"
                label="Resources"
            />
        </nav>
    )
}

export default NavigationBar;