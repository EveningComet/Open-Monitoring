import InputField from "../InputField";
import { useState } from "react";

/**
 * This component manages importing zones for the user.
 * @param {*} param0 
 * @returns 
 */
function ZoneImporter( {accountToChange} )
{
    let [fileData, setFileData] = useState('');

    /**
     * This method gets called whenever the user has imported a file.
     * @param {*} e 
     */
    function onFileChanged(e)
    {
        let file = e.target.files[0];
    }

    return(
        <div>
            <div>
                <InputField
                    type='file'
                    onChange={onFileChanged}
                />

                {/* TODO: Zone import preview. */}
            </div>

            <button>Approve Import</button>
        </div>
    );
}

export default ZoneImporter;