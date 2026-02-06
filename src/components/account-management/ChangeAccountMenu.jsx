import { useState, useEffect } from "react";

/**
 * Component that stores all the other components related to editing an account.
 * If the account does not exist, it will create a new one, if allowed.
 * @param {*} accountToChange The account being changed.
 */
function ChangeAccountMenu( {accountToChange} )
{
    /**
     * Save the account changes and push it to wherever it needs to go.
     */
    function saveAccountInformation()
    {

    }

    return(
        <div>
            {/**
             * TODO: Mini NavigationBar for jumping between the parts of an account.
             */}
             {/**
              * TODO: 
              */}
             {/**
              * TODO: Huge convenience. Option to select all codes for that contact the customer, but don't dispatch anyone. 
              */}
        </div>
    );
}

export default ChangeAccountMenu;