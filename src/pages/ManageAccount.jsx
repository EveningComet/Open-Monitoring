import CustomerAccount from '../scripts/CustomerAccount'
import AccountInputField from '../components/account-management/AccountInputField';
import ChangeAccountMenu from '../components/account-management/ChangeAccountMenu';
import { useState } from 'react';

/**
 * This is where the user will actually edit or create new accounts.
 * @returns 
 */
function ManageAccount()
{
    let [accountToEdit, setAccountToEdit] = useState(null);
    let [isEditingAccount, setIsEditingAccount] = useState(false);

    function onAccountInput(accountID)
    {
        // TODO: Simulate searching the database for the account.
        
        // Create an object for a new account
        let newAccount = new CustomerAccount();
        setAccountToEdit(newAccount);
        setIsEditingAccount(true);
        console.log("ManageAccount :: Account ID, ", accountID, ".\nobject: ", accountToEdit);
    }

    return(
        <div>
            <div>
                <h2>Manage Account</h2>

                {/**
                * The input that is used to find/get accounts
                */}
                <AccountInputField onAccountInput={onAccountInput}/>
            </div>

             <ChangeAccountMenu
                    accountToEdit={accountToEdit}
                    isEditingAccount={isEditingAccount}
            />
        </div>
    );
}

export default ManageAccount;