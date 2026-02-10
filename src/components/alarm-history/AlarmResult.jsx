/**
 * The component responsible for displaying an alarm.
 */
function AlarmResult( {alarm} )
{
    return(
        <div className="alarmResult" id="alarmResult">
            <p>Alarm Code: {alarm.signalCode}</p>
            <p>Alarm Name: {alarm.name}</p>
            <p>Time: </p>
        </div>
    );
}

export default AlarmResult;