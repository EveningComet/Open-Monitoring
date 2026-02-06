import AlarmHistorySearchBar from "../components/alarm-history/AlarmHistorySearchBar";
import TextDisclaimer from "../components/miscellaneous/TextDisclaimer";
import AlarmHistoryResults from "../components/alarm-history/AlarmHistoryResults";

function AlarmHistory()
{
    function onAlarmHistoryRequested(accountToSearchFor, startDate, endDate)
    {
        console.log("AlarmHistory :: OnAlarmHistoryRequested called.");
    }

    return(
        <div>
            <h2>Alarm History</h2>

            <TextDisclaimer
                textToDisplay="Disclaimer! This is the hardest part of the program to showcase.
                Every company handles their alarms differently. As a result, a 'proper'
                implementation will have to be tested by how an individual company gets their alarm signals."
            />

            {/* Display the search stuff */}
            <AlarmHistorySearchBar onAlarmHistoryRequested={onAlarmHistoryRequested} />

            {/* Here are where the alarm results will be displayed */}
            <AlarmHistoryResults />
        </div>
    );
}

export default AlarmHistory;

