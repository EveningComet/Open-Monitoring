export class CustomerAccount
{
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
     * The codes currently on this account that are being
     * overridden.
     */
    codes;

    zones; // TODO: Figure out zone data structure.
}