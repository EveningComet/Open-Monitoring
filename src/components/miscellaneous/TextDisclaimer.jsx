/**
 * A component designed to simply display disclaimer text to the user.
 * @param {*} param0 
 */
function TextDisclaimer( {textToDisplay} )
{
    return(
        <p
            className="textDisclaimer"
        >
            {textToDisplay}
        </p>
    );
}

export default TextDisclaimer;