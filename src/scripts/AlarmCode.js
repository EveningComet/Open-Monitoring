
export default class AlarmCode
{
    /**
     * This is the "code" for an alarm. For example,
     * a contact id code for burglary could be 130.
     */
    signalCode = "";

    /**
     * This is the human reacable name for an alarm.
     * E.g: Burglary, Fire, etc.
     */
    name = "";

    /**
     * Alarms on the template will not have this.
     */
    associatedComments;

    /**
     * For codes inside a template, this will be blank.
     */
    zone;

    /**
     * The time this alarm was received. Not used by codes in the template.
     */
    timeReceived;
}