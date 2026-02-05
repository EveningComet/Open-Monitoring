
export class AlarmCode
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
    alarmName = "";

    /**
     * Alarms on the template will not have this.
     */
    associatedComments;
}