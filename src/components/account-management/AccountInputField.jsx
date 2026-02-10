import { useState } from "react";
import SearchBar from "../miscellaneous/SearchBar";

/**
 * Simply tracks the user's input.
 * @param {method} onAccountInput 
 * @returns 
 */
function AccountInputField( {onAccountInput} )
{
    let[accountID, setAccountID] = useState('');

    function handleAccountInput()
    {
        if(!accountID.trim())
        {
            alert("Please enter an account.");
            return;
        }

        if(onAccountInput)
        {
            onAccountInput(accountID);
        }
    }

    return(
        <div>
            <p>Enter an account to edit or create.</p> 
            <SearchBar
                type="text"
                value={accountID}
                onChange={(e) => setAccountID(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === 'Enter')
                    {
                        handleAccountInput();
                    }
                }}
            />
        </div>
    )
}

export default AccountInputField;