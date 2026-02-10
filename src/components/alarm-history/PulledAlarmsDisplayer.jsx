import "../../styles/alarm-history.css";
import AlarmResult from "./AlarmResult";
/**
 * Displays the list of passed alarms.
 * @param {*} param0 
 * @returns 
 */
function PulledAlarmsDisplayer( {pulledAlarms = []} )
{
    if(pulledAlarms)
    {
        
    }
    return(
        <div className="pulledAlarmsDisplayer">
            <h4 style={{textAlign: "center"}}>Pulled History</h4>
            <div
                className="displayedAlarmsContainer"
                id="displayedAlarmsContainer"
            >
                {/* Update the displayed alarms when the history finally loads */}
                <ul>
                    {pulledAlarms ? pulledAlarms.map((alarm, index) =>
                        (<AlarmResult key={index} alarm={alarm}/>)
                    ) : <></>}
                </ul>
            </div>
        </div>
    );
}

export default PulledAlarmsDisplayer;