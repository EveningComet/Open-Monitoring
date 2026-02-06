import { useState } from "react";
import InputField from "../InputField";

function AccountInputField( {onAccountInput} )
{
    let[account, setAccount] = useState('');

    function handleAccountInput()
    {
        if(!account.trim())
        {
            alert("Please enter an account.");
            return;
        }

        if(onAccountInput)
        {
            onAccountInput(account);
        }
    }

    return(
        <InputField
            type="text"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
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