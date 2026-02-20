/**
 * The menu that stores editing the codes for an account.
 * 
 * @param {*} codes The codes to add to the account.
 * @returns Returns a menu that will be used handling the code editing.
 */
function AccountCodeEditMenu( {codes} )
{
    {/* TODO: Better name for this component? */}
    {/* TODO: Handling for individual zones. */}
    return(
        <div>
            <h3>Alarm Codes</h3>
            <p>Here are where the edited codes wil be displayed.</p>
            <div>
                {/* TODO: Convenience to copy code handling from another account. */}
                {/* TODO: Convenience for selecting all codes that call the customer, but don't call the authorities. */}
            </div>
        </div>
    );
}

export default AccountCodeEditMenu;