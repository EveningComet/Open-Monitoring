import InputField from "../InputField";

/**
 * A general use search bar component.
 */
function SearchBar( {labelText, query, onChange, onKeyDown} )
{
    return(
        <label>
            <p>{labelText}</p>
            <InputField
                type="text"
                value={query}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </label>
    );
}

export default SearchBar;