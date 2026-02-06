import AccountInputField from '../components/account-management/AccountInputField';
import ChangeAccountMenu from '../components/account-management/ChangeAccountMenu';
import InputField from '../components/InputField'

/**
 * This is where the user will actually edit or create new accounts.
 * @returns 
 */
function ManageAccount()
{
    function onAccountInput(account)
    {
        console.log("ManageAccount :: Account inputted: ", account);
    }
    return(
        <div>
            <h2>Manage Account</h2>

            {/**
             * The input that is used to find/get accounts
             */}
             <AccountInputField onAccountInput={onAccountInput}/>

            <ChangeAccountMenu accountToChange={onAccountInput} />
        </div>
    );
}

export default ManageAccount;