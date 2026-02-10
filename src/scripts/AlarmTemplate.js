export default class AlarmTemplate
{
    /**
     * The name of the template.
     */
    name = "New Template";

    /**
     * The codes associated with this template.
     */
    codes = [];

     constructor()
    {

    }

    constructor(newName)
    {
        this.name = newName;
    }

    constructor(newName, codesToSet)
    {
        this.name = newName;
        codes = codesToSet;
    }
}