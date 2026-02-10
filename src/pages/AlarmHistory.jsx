import AlarmHistorySearchBar from "../components/alarm-history/AlarmHistorySearchBar";
import TextDisclaimer from "../components/miscellaneous/TextDisclaimer";
import { useState } from "react";
import PulledAlarmsDisplayer from "../components/alarm-history/PulledAlarmsDisplayer";
import AlarmInfoDisplayer from "../components/alarm-history/AlarmInfoDisplayer";
import AlarmCode from "../scripts/AlarmCode.js";

function AlarmHistory()
{
    // The account the user wants to see history for
    let [queriedAccount, setQueriedAccount] = useState("");
    let [alarmsPulled, setAlarmsPulled] = useState([]);

    /**
     * Perform a search with the passed information.
     * @param {string} accountID The account to search for.
     * @param {*} startDate The start date.
     * @param {*} endDate The end date.
     */
    function onAlarmHistoryRequested(accountID, startDate, endDate)
    {
        console.log("AlarmHistory :: OnAlarmHistoryRequested successfully called.");
        
        // TODO: Fetch/pull the alarm history.

        // TODO: This is a test alarm. delete when no longer needed.
        let testAlarm = new AlarmCode();
        testAlarm.signalCode = "130";
        testAlarm.name       = "Test Burglary Alarm";


        // Update the displayed alarms to the user
        setAlarmsPulled([testAlarm, testAlarm, testAlarm]);
    }

    /**
     * Handle updating the search bar of the alarm history search bar component.
     * @param {*} e the resulting change.
     */
    function updateQuery(e)
    {
        setQueriedAccount(e.target.value);
    }

    return(
        <div className="displayedPage">
            <h2>Alarm History</h2>

            <TextDisclaimer
                textToDisplay="Disclaimer! This is the hardest part of the program to showcase.
                Every company handles their alarms differently. As a result, a 'proper'
                implementation will have to be tested by how an individual company gets their alarm signals."
            />

            {/* Display the search stuff */}
            <AlarmHistorySearchBar
                queriedAccount={queriedAccount}
                onQueryChanged={updateQuery}
                onAlarmHistoryRequested={onAlarmHistoryRequested}
            />

            <div className="alarmHistoryDisplayerAndAlarmInfoContainer">
                <PulledAlarmsDisplayer
                    pulledAlarms={alarmsPulled}
                />
                <AlarmInfoDisplayer
                />
            </div>

        </div>
    );
}

export default AlarmHistory;

