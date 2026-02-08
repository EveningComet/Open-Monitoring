import { useState, useEffect } from "react";
import ZoneEditMenu from "./ZoneEditMenu";
import '../../styles/edit-account-menu.css'
import MainAccountMenu from "./MainAccountMenu";
import AccountCodeEditMenu from "./AccountCodeEditMenu";
/**
 * Component that stores all the other components related to editing an account.
 * If the account does not exist, it will create a new one, if allowed.
 * @param {*} accountToEdit The account being changed.
 * @param {bool} isEditingAccount Is there currently an account being edited?
 */
function ChangeAccountMenu( {accountToEdit, isEditingAccount} )
{
    /**
     * Save the account changes and push it to wherever it needs to go.
     */
    function saveAccountInformation()
    {

    }

    return(
        <div>
            {/* This menu will only show while we're editing */}
            {isEditingAccount && (
                <div className="editAccountMenu">
                    <MainAccountMenu />
                    <ZoneEditMenu />
                    <AccountCodeEditMenu />
                </div>
            )}
        </div>
    );
}

export default ChangeAccountMenu;