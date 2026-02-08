import InputField from "../InputField";
import { useState } from "react";

/**
 * This component manages importing zones for the user.
 * @param {*} param0 
 * @returns 
 */
function ZoneImporter( {zones} )
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
            <h4>Zone Importer</h4>
            <p>
                This is the zone importer. If your account has a ton of zones, or you entered them
                ahead of time, you can import them here.
            </p>
            <div>
                <InputField
                    type='file'
                    onChange={onFileChanged}
                    accept='.csv'
                />
                {/* TODO: Zone import preview. */}
            </div>

            <button>Approve Import</button>
        </div>
    );
}

export default ZoneImporter;