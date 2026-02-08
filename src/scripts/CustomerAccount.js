export default class CustomerAccount
{
    /**
     * How this account is accessed.
     */
    accountID;

    /**
     * The customer's name.
     */
    name = "New Customer"
    
    address = "New Address";  

    /**
     * These are the people called after the authorities have been
     * dispatched.
     */
    postDispatchCallList = [];

    /**
     * The preset group of codes, with handling, if desired.
     */
    template;

    /**
     * The codes currently on this account that are being
     * overridden.
     */
    overriddenCodes;

    zones; // TODO: Figure out zone data structure.

    /**
     * The list of comments for this customer. This is for things such as
     * a gate code, special notes, etc.
     */
    comments;
}