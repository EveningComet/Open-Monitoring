import InputField from "../InputField";
import { useState } from "react";
import '../../styles/alarm-history.css'
import SearchBar from "../miscellaneous/SearchBar";

/**
 * The component that holds the search bars for the alarm history.
 */
function AlarmHistorySearchBar( {queriedAccount, onQueryChanged, onAlarmHistoryRequested} )
{
    // The dates will be updated based on the user's input
    // By default, the end date will be today
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
            queriedAccount, "start date: ", startDate, "end date: ", endDate
        );
        if(onAlarmHistoryRequested)
        {
            // Validating the information here
            if(!queriedAccount.trim())
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
            
            onAlarmHistoryRequested(queriedAccount, startDate, endDate);
        }
    }

    return(
        <div className="alarmHistorySearchBar">
            {/* The account to search */}
            <SearchBar
                labelText={"Account to search"}
                query={queriedAccount}
                onChange={onQueryChanged}
            />


            {/* The from date */}
            <p>Start Date</p>
            <InputField 
                type='date'
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            
            {/* The end date*/}
            <p>End Date</p>
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