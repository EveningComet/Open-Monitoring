/**
 * A reusable input component.
 * @param {*} param0 
 * @returns 
 */
function InputField( {value, label, name, placeHolder, type, onChange, onKeyDown })
{
    return(
        <input
            name={name}
            type={type}
            value={value}
            label={label}
            placeHolder={placeHolder}
            onChange={onChange}
            onKeyDown={onKeyDown}
        >
        </input>
    )
}

export default InputField;