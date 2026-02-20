/**
 * A reusable input component.
 * @param {*} param0 
 * @returns 
 */
function InputField( {value, label, name, placeholder, type, onChange, onKeyDown, accept })
{
    return(
        <input
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            accept={accept}
            onKeyDown={onKeyDown}
        >
        </input>
    )
}

export default InputField;