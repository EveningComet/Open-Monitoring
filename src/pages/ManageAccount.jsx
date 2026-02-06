import InputField from '../components/InputField'

/**
 * This is where the user will actually edit or create new accounts.
 * @returns 
 */
function ManageAccount()
{
    return(
        <div>
            <h2>Manage Account</h2>

            {/**
             * The input that is used to find/get accounts
             */}
             <InputField
                type='text'
             />

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

export default ManageAccount;