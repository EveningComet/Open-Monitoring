import { useState } from "react";
import "../../styles/alarm-history.css";
import AlarmResult from "./AlarmResult";
import SearchBar from "../miscellaneous/SearchBar";
import InputField from "../InputField";

/**
 * Displays the list of passed alarms. In addition, the user may
 * search and filter the displayed alarms alarms.
 * 
 * @returns 
 */
function PulledAlarmsDisplayer( {pulledAlarms = []} )
{
    let [query, setQuery] = useState("");

    /**
     * Updates the results based on the user's input.
     */
    function onSearchChanged(e)
    {
        setQuery(e.target.value);
        console.log("PulledAlarmsDisplayer :: Noticed that search changed: ", e.target.value);
    }

    /**
     * Event fired when the pulled alarm displayer checkbox is toggled.
     * 
     * @param {*} e The change event.
     */
    function onTogglePressed(e)
    {
        if(e.target.checked === true)
        {
            console.log("PulledAlarmsDisplayer :: Checkbox is active.");
        }
    }

    return(
        <div className="pulledAlarmsDisplayer">
            <h4 style={{textAlign: "center"}}>Pulled History</h4>
            
            {/* Searching */}
            <div>
                <SearchBar
                    labelText="Enter Search To Filter Alarms"
                    value={query}
                    onChange={e => onSearchChanged(e)}
                />
                
                <label style={{display: "flex"}}>
                    <p>Dispatched Only?</p>
                    <InputField
                        type="checkbox"
                        onChange={onTogglePressed}
                    />
                </label>
            </div>
            
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