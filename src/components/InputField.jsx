/**
 * A reusable input component.
 * @param {*} param0 
 * @returns 
 */
function InputField( {value, label, name, placeHolder, type, onChanged })
{
    return(
        <input
            name={name}
            value={value}
            onChange={onChanged}
        >
        </input>
    )
}

export default InputField;