import ZoneDisplayer from "./ZoneDisplayer";
import ZoneImporter from "./ZoneImporter";

/**
 * This component will only keep track of the zones.
 */
function ZoneEditMenu( {zones} )
{
    return(
        <div>
            <h3>Zone Menu</h3>
            <ZoneImporter />
            
            {/* TODO: Some accounts will need to store lists of zones! */}
            {/* TODO: Allow manual zone editing, if the user desires. */}
            <ZoneDisplayer />
        </div>
    );
}

export default ZoneEditMenu;