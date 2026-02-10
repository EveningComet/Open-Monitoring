function AlarmInfoDisplayer( {alarmToDisplay} )
{
    return(
        <div className="alarmInfoDisplayer">
            <h4 
                style={{textAlign: "center", minHeight: "10px"}}
            >
                Alarm Info
            </h4>
            <div className="alarmInfoContainer">
                <p>Here is where further information of the alarm can be seen.</p>
            </div>
        </div>
    );
}

export default AlarmInfoDisplayer;