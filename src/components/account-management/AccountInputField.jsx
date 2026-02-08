import { useState } from "react";
import InputField from "../InputField";

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
        <InputField
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
    )
}

export default AccountInputField;