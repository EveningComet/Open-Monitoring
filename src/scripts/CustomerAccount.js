export class CustomerAccount
{
    /**
     * How this account is accessed.
     */
    account;

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
}