import InputField from "../InputField";
import { useState } from "react";
import '../../styles/alarm-history-search-bar.css'

/**
 * The component that handles searching for alarms between set dates.
 * @returns 
 */
function AlarmHistorySearchBar( {onAlarmHistoryRequested} )
{
    // The dates will be updated based on the user's input
    // By default, the end date will be today
    let [currAccount, setAccount] = useState('');
    let [startDate, setStartDate] = useState('');
    let [endDate, setEndDate]     = useState(getCurrentDate());
    
    function getCurrentDate()
    {
        let today = new Date();
        return today.toISOString().split('T')[0];
    }

    /**
     * On the event a search is requested, pass the needed information along.
     */
    function handleSearch()
    {
        console.log("AlarmHistorySearchBar :: OnAlarmHistoryRequested called. \n Curr account ",
            currAccount, "start date: ", startDate, "end date: ", endDate
        );
        if(onAlarmHistoryRequested)
        {
            // Validating the information here
            if(!currAccount.trim())
            {
                alert("Need an account.");
                return;
            }

            if(!startDate.trim())
            {
                alert("Need a start date.");
                return;
            }

            if(!endDate.trim())
            {
                alert("Need an end date.");
                return;
            }
            
            onAlarmHistoryRequested(currAccount, startDate, endDate);
        }
    }

    return(
        <div className="alarmHistorySearchBar">
            {/* The account to search */}
            <p>Account To Search</p>
            <InputField 
                type='text'
                value={currAccount}
                onChange={(e) => setAccount(e.target.value)}
            />


            {/* The from date */}
            <p>Start Date</p>
            <InputField 
                type='date'
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            
            {/* The end date*/}
            <o>End Date</o>
            <InputField
                type='date'
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />


            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default AlarmHistorySearchBar;