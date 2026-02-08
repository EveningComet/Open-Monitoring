import InputField from "../InputField";

/**
 * This is where the user can edit the main information, such as the name
 * and address.
 */
function MainAccountMenu()
{
    return(
        <div>
            <h3>Base Info</h3>
            <div>
                <p>Account ID</p>
                <InputField />
            </div>
        </div>
    );
}

export default MainAccountMenu;